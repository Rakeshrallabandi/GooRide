const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
const vehicleDetail = document.getElementById('vehicleDetail');
const vehiclePhotos = document.querySelector('.vehicle-photos');
const carouselInner = document.querySelector('.carousel-inner');
const vehicleDetailsContent = document.getElementById('vehicleDetailsContent');
const recommendedVehicles = document.getElementById('recommendedVehicles');
let likedVehicles = JSON.parse(localStorage.getItem('likedVehicles')) || [];
let savedVehicles = JSON.parse(localStorage.getItem('savedVehicles')) || [];

function getVehicleById(id) {
    return vehicles.find(vehicle => vehicle.id === id);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function generateVehicleDetails(vehicle) {
    const distance = calculateDistance(
        19.0760, 72.8777, // Default Mumbai coords
        vehicle.coordinates.lat,
        vehicle.coordinates.lng
    ).toFixed(2);

    return `
        <div class="action-buttons">
            <button class="btn btn-action like-btn" data-id="${vehicle.id}">
                <i class="${likedVehicles.includes(vehicle.id) ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <button class="btn btn-action save-btn" data-id="${vehicle.id}">
                <i class="${savedVehicles.includes(vehicle.id) ? 'fas' : 'far'} fa-bookmark"></i>
            </button>
            <button class="btn btn-action map-btn" data-lat="${vehicle.coordinates.lat}" data-lng="${vehicle.coordinates.lng}">
                <i class="fas fa-map-marker-alt"></i>
            </button>
        </div>
        <div class="vehicle-details">
            <h6 class="mb-2">${vehicle.model}</h6>
            <p class="mb-1 small"><strong>Price:</strong> ${vehicle.price}</p>
            <p class="mb-1 small"><strong>Distance:</strong> ${distance} km</p>
            <p class="mb-1 small"><strong>Location:</strong> ${vehicle.location}</p>
            <p class="mb-1 small"><strong>Plate:</strong> ${vehicle.plate}</p>
            <p class="mb-1 small"><strong>Odometer:</strong> ${vehicle.reading}</p>
            <p class="mb-1 small"><strong>Type:</strong> ${vehicle.type}</p>
            <p class="availability small ${vehicle.available ? 'text-success' : 'text-danger'} mb-0">
                ${vehicle.available ? 'Available Now' : 'Booked'}
            </p>
        </div>
    `;
}

function generateRecommendedCard(vehicle) {
    const distance = calculateDistance(
        19.0760, 72.8777,
        vehicle.coordinates.lat,
        vehicle.coordinates.lng
    ).toFixed(2);

    const card = document.createElement('div');
    card.className = 'vehicle-card flex-shrink-0';
    card.dataset.id = vehicle.id;
    card.innerHTML = `
        <div class="action-buttons">
            <button class="btn btn-action like-btn" data-id="${vehicle.id}">
                <i class="${likedVehicles.includes(vehicle.id) ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <button class="btn btn-action save-btn" data-id="${vehicle.id}">
                <i class="${savedVehicles.includes(vehicle.id) ? 'fas' : 'far'} fa-bookmark"></i>
            </button>
            <button class="btn btn-action map-btn" data-lat="${vehicle.coordinates.lat}" data-lng="${vehicle.coordinates.lng}">
                <i class="fas fa-map-marker-alt"></i>
            </button>
        </div>
        <img src="${vehicle.images[0]}" class="vehicle-image w-100" alt="${vehicle.model}" loading="lazy">
        <div class="vehicle-details">
            <h6 class="mb-1">${vehicle.model}</h6>
            <p class="mb-1 small"><strong>Price:</strong> ${vehicle.price}</p>
            <p class="mb-1 small"><strong>Distance:</strong> ${distance} km</p>
            <p class="mb-1 small"><strong>Location:</strong> ${vehicle.location}</p>
            <p class="availability small ${vehicle.available ? 'text-success' : 'text-danger'} mb-0">
                ${vehicle.available ? 'Available Now' : 'Booked'}
            </p>
        </div>
    `;
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleId = parseInt(urlParams.get('id'));
    const vehicle = getVehicleById(vehicleId);

    if (vehicle && vehicleDetail && vehiclePhotos && carouselInner && vehicleDetailsContent && recommendedVehicles) {
        // Clear previous content
        carouselInner.innerHTML = '';
        vehicleDetailsContent.innerHTML = '';
        recommendedVehicles.innerHTML = '';

        // Populate carousel
        vehicle.images.forEach((image, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `
                <img src="${image}" class="d-block w-100 vehicle-image" alt="${vehicle.model}" loading="lazy">
            `;
            carouselInner.appendChild(carouselItem);
        });

        // If no images, show placeholder
        if (vehicle.images.length === 0) {
            carouselInner.innerHTML = `
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x600" class="d-block w-100 vehicle-image" alt="No image available">
                </div>
            `;
        }

        // Populate details
        vehicleDetailsContent.innerHTML = generateVehicleDetails(vehicle);

        // Recommended vehicles
        const otherVehicles = vehicles.filter(v => v.id !== vehicleId).slice(0, 5);
        otherVehicles.forEach(v => {
            recommendedVehicles.appendChild(generateRecommendedCard(v));
        });

        // Navigation for recommended vehicles
        recommendedVehicles.querySelectorAll('.vehicle-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.btn-action')) {
                    const id = parseInt(card.dataset.id);
                    if (id) {
                        window.location.href = `vehicle.html?id=${id}`;
                    }
                }
            });
        });

        // Book Now button
        document.querySelector('.book-now-btn').addEventListener('click', () => {
            alert(`Booking initiated for ${vehicle.model}`);
        });

        // View on Map button
        document.querySelector('.view-map-btn').addEventListener('click', () => {
            const googleMapsUrl = `https://www.google.com/maps?q=${vehicle.coordinates.lat},${vehicle.coordinates.lng}`;
            window.open(googleMapsUrl, '_blank');
        });
    } else if (vehicleDetail) {
        vehicleDetail.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>Vehicle not found</h4>
                <p>Please try another vehicle</p>
            </div>
        `;
    }

    // Action buttons for main vehicle and recommended vehicles
    document.addEventListener('click', (e) => {
        if (e.target.closest('.like-btn')) {
            const vehicleId = parseInt(e.target.closest('button').dataset.id);
            const icon = e.target.closest('button').querySelector('i');
            if (likedVehicles.includes(vehicleId)) {
                likedVehicles = likedVehicles.filter(id => id !== vehicleId);
                icon.classList.replace('fas', 'far');
            } else {
                likedVehicles.push(vehicleId);
                icon.classList.replace('far', 'fas');
            }
            localStorage.setItem('likedVehicles', JSON.stringify(likedVehicles));
        }
        if (e.target.closest('.save-btn')) {
            const vehicleId = parseInt(e.target.closest('button').dataset.id);
            const icon = e.target.closest('button').querySelector('i');
            if (savedVehicles.includes(vehicleId)) {
                savedVehicles = savedVehicles.filter(id => id !== vehicleId);
                icon.classList.replace('fas', 'far');
            } else {
                savedVehicles.push(vehicleId);
                icon.classList.replace('far', 'fas');
            }
            localStorage.setItem('savedVehicles', JSON.stringify(savedVehicles));
        }
        if (e.target.closest('.map-btn')) {
            const btn = e.target.closest('button');
            const lat = btn.dataset.lat;
            const lng = btn.dataset.lng;
            const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
            window.open(googleMapsUrl, '_blank');
        }
    });
});