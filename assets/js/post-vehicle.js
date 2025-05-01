console.log('post-vehicle.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');

    // Initialize Google Maps
    const locationInput = document.getElementById('location');
    const getCurrentLocationBtn = document.getElementById('getCurrentLocation');
    let selectedPlace = null;
    let map, marker, geocoder;

    if (typeof google !== 'undefined' && google.maps) {
        console.log('Google Maps API loaded');
        // Initialize map
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 19.0760, lng: 72.8777 }, // Default: Mumbai
            zoom: 12,
            mapTypeControl: false,
            streetViewControl: false
        });

        // Initialize geocoder
        geocoder = new google.maps.Geocoder();

        // Add click listener to map
        map.addListener('click', (event) => {
            console.log('Map clicked');
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            updateLocationFromCoordinates(lat, lng);
        });

        // Initialize Places Autocomplete
        const autocomplete = new google.maps.places.Autocomplete(locationInput, {
            types: ['geocode'],
            fields: ['name', 'geometry.location']
        });

        autocomplete.addListener('place_changed', () => {
            console.log('Autocomplete place changed');
            selectedPlace = autocomplete.getPlace();
            if (selectedPlace.geometry) {
                const lat = selectedPlace.geometry.location.lat();
                const lng = selectedPlace.geometry.location.lng();
                map.setCenter({ lat, lng });
                updateMarker({ lat, lng });
                locationInput.value = selectedPlace.name;
            } else {
                locationInput.value = '';
                selectedPlace = null;
                alert('Please select a valid location from the suggestions.');
            }
        });

        // Get Current Location button
        getCurrentLocationBtn.addEventListener('click', () => {
            console.log('Get Current Location clicked');
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        console.log('Geolocation success:', { lat, lng });
                        updateLocationFromCoordinates(lat, lng);
                        map.setCenter({ lat, lng });
                    },
                    (error) => {
                        alert('Unable to get current location. Please try typing or clicking on the map.');
                        console.error('Geolocation error:', error);
                    }
                );
            } else {
                alert('Geolocation is not supported by your browser. Please type or click on the map.');
                console.error('Geolocation not supported');
            }
        });

        // Prevent form submission on Enter key in location input
        locationInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    } else {
        console.error('Google Maps API not loaded. Falling back to text input.');
        alert('Location search and map are unavailable. Please enter a location name manually.');
    }

    // Function to update location from coordinates (map click or geolocation)
    function updateLocationFromCoordinates(lat, lng) {
        console.log('Updating location from coordinates:', { lat, lng });
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === 'OK' && results[0]) {
                selectedPlace = {
                    name: results[0].formatted_address,
                    geometry: {
                        location: new google.maps.LatLng(lat, lng)
                    }
                };
                locationInput.value = selectedPlace.name;
                updateMarker({ lat, lng });
                console.log('Geocoding success:', selectedPlace.name);
            } else {
                alert('Unable to find a place name for this location. Please try again.');
                console.error('Geocoding error:', status);
            }
        });
    }

    // Function to update or set map marker
    function updateMarker(position) {
        console.log('Updating marker:', position);
        if (marker) {
            marker.setPosition(position);
        } else {
            marker = new google.maps.Marker({
                position: position,
                map: map
            });
        }
    }

    const form = document.getElementById('postVehicleForm');
    const imagesInput = document.getElementById('images');

    if (form) {
        console.log('Form element found');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Form submission triggered');

            // Get form values
            const brand = document.getElementById('brand').value.trim();
            const model = document.getElementById('model').value.trim();
            const plate = document.getElementById('plate').value.trim();
            const location = locationInput.value.trim();
            const year = document.getElementById('year').value;
            const reading = document.getElementById('reading').value.trim();
            const type = document.getElementById('type').value;
            const fuel = document.getElementById('fuel').value;
            const price = document.getElementById('price').value.trim();
            const description = document.getElementById('description').value.trim();
            const available = document.getElementById('available').checked;
            const files = imagesInput.files;

            console.log('Form values:', {
                brand, model, plate, location, year, reading, type, fuel, price, description, available, filesLength: files.length
            });

            // Validate mandatory fields
            if (!model) {
                alert('Please fill in the Vehicle Model.');
                console.log('Validation failed: Model missing');
                return;
            }
            if (!plate) {
                alert('Please fill in the License Plate.');
                console.log('Validation failed: Plate missing');
                return;
            }
            if (!location) {
                alert('Please fill in the Location.');
                console.log('Validation failed: Location missing');
                return;
            }
            if (files.length === 0) {
                alert('Please upload at least one image.');
                console.log('Validation failed: Images missing');
                return;
            }

            // Validate location coordinates
            let latitude, longitude;
            if (selectedPlace && selectedPlace.geometry) {
                latitude = selectedPlace.geometry.location.lat();
                longitude = selectedPlace.geometry.location.lng();
                console.log('Location coordinates:', { latitude, longitude });
            } else {
                alert('Location coordinates unavailable. Using default coordinates for Mumbai.');
                console.log('Using default coordinates');
                latitude = 19.0760;
                longitude = 72.8777;
            }

            // Process images
            const images = [];
            console.log('Processing images:', files.length);
            for (const file of files) {
                try {
                    const base64 = await fileToBase64(file);
                    images.push(base64);
                    console.log('Image processed:', file.name);
                } catch (error) {
                    alert('Error processing image: ' + file.name);
                    console.error('Image processing error:', error, file.name);
                    return;
                }
            }

            // Get existing vehicles from localStorage
            let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
            console.log('Existing vehicles:', vehicles.length);

            // Generate unique ID
            const newId = vehicles.length > 0 ? Math.max(...vehicles.map(v => v.id)) + 1 : 1;
            console.log('New vehicle ID:', newId);

            // Create new vehicle object
            const newVehicle = {
                id: newId,
                images: images,
                plate: plate,
                location: location,
                reading: reading,
                model: model,
                available: available,
                coordinates: { lat: latitude, lng: longitude },
                type: type,
                price: price,
                brand: brand || undefined,
                year: year ? parseInt(year) : undefined,
                fuel: fuel || undefined,
                description: description || undefined
            };
            console.log('New vehicle object:', newVehicle);

            // Add to vehicles array and save to localStorage
            vehicles.push(newVehicle);
            try {
                localStorage.setItem('vehicles', JSON.stringify(vehicles));
                console.log('Vehicle saved to localStorage');
            } catch (error) {
                alert('Error saving vehicle. Local storage may be full. Try fewer or smaller images.');
                console.error('localStorage error:', error);
                return;
            }

            // Show success message and redirect
            alert('Vehicle posted successfully!');
            console.log('Redirecting to index.html');
            window.location.href = '../index.html';
        });
    } else {
        console.error('Form element not found');
    }
});

// Convert file to Base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}