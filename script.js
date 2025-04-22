const vehiclesData = [
    {
        id: 1,
        images: ['https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'MH01AB1234',
        location: 'Mumbai Central',
        reading: '15,000 km',
        model: 'Royal Enfield Classic 350',
        available: true,
        coordinates: { lat: 19.0760, lng: 72.8777 },
        type: 'motorcycle',
        price: '1500/day'
    },
    {
        id: 2,
        images: ['https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'KA02CD5678',
        location: 'Bengaluru Tech Park',
        reading: '8,500 km',
        model: 'Bajaj Pulsar NS200',
        available: false,
        coordinates: { lat: 12.9716, lng: 77.5946 },
        type: 'motorcycle',
        price: '1000/day'
    },
    {
        id: 3,
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'DL03EF9012',
        location: 'Delhi Metro Station',
        reading: '12,300 km',
        model: 'Honda Activa 6G',
        available: true,
        coordinates: { lat: 28.7041, lng: 77.1025 },
        type: 'scooter',
        price: '800/day'
    },
    {
        id: 4,
        images: ['https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg'],
        plate: 'TN04GH5678',
        location: 'Chennai Beach',
        reading: '9,200 km',
        model: 'TVS Apache RTR 160',
        available: true,
        coordinates: { lat: 13.0827, lng: 80.2707 },
        type: 'motorcycle',
        price: '1200/day'
    },
    {
        id: 5,
        images: ['https://images.unsplash.com/photo-1558980663-3685c6962ac3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'GJ05IJ3456',
        location: 'Ahmedabad City',
        reading: '10,000 km',
        model: 'Yamaha FZ-S',
        available: true,
        coordinates: { lat: 23.0225, lng: 72.5714 },
        type: 'motorcycle',
        price: '1100/day'
    },
    {
        id: 6,
        images: ['https://img.freepik.com/free-photo/scooter-city_1122-1974.jpg'],
        plate: 'WB06KL7890',
        location: 'Kolkata Esplanade',
        reading: '7,800 km',
        model: 'TVS Jupiter',
        available: false,
        coordinates: { lat: 22.5726, lng: 88.3639 },
        type: 'scooter',
        price: '700/day'
    },
    {
        id: 7,
        images: ['https://images.unsplash.com/photo-1599819816704-9d7e57799db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'HY07MN1234',
        location: 'Hyderabad Gachibowli',
        reading: '14,500 km',
        model: 'KTM Duke 200',
        available: true,
        coordinates: { lat: 17.3850, lng: 78.4867 },
        type: 'motorcycle',
        price: '1400/day'
    },
    {
        id: 8,
        images: ['https://img.freepik.com/free-photo/motorcycle-parked-outdoors_23-2148883510.jpg'],
        plate: 'RJ08OP5678',
        location: 'Jaipur Hawa Mahal',
        reading: '11,200 km',
        model: 'Hero Splendor Plus',
        available: true,
        coordinates: { lat: 26.9124, lng: 75.7873 },
        type: 'motorcycle',
        price: '900/day'
    },
    {
        id: 9,
        images: ['https://images.unsplash.com/photo-1605552746931-2d69338f7d73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'UP09QR9012',
        location: 'Lucknow Hazratganj',
        reading: '6,500 km',
        model: 'Suzuki Access 125',
        available: true,
        coordinates: { lat: 26.8467, lng: 80.9462 },
        type: 'scooter',
        price: '750/day'
    },
    {
        id: 10,
        images: ['https://img.freepik.com/free-photo/motorcycle-road_1122-1973.jpg'],
        plate: 'PB10ST3456',
        location: 'Chandigarh Sector 17',
        reading: '13,000 km',
        model: 'Honda CB Shine',
        available: false,
        coordinates: { lat: 30.7333, lng: 76.7794 },
        type: 'motorcycle',
        price: '950/day'
    },
    {
        id: 11,
        images: ['https://images.unsplash.com/photo-1599819816704-9d7e57799db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'MP11UV7890',
        location: 'Bhopal Lake View',
        reading: '9,800 km',
        model: 'Royal Enfield Himalayan',
        available: true,
        coordinates: { lat: 23.2599, lng: 77.4126 },
        type: 'motorcycle',
        price: '1600/day'
    },
    {
        id: 12,
        images: ['https://img.freepik.com/free-photo/scooter-parked_23-2148883511.jpg'],
        plate: 'OR12WX1234',
        location: 'Bhubaneswar Station',
        reading: '5,600 km',
        model: 'Yamaha Ray ZR',
        available: true,
        coordinates: { lat: 20.2961, lng: 85.8245 },
        type: 'scooter',
        price: '800/day'
    },
    {
        id: 13,
        images: ['https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'AS13YZ5678',
        location: 'Guwahati Riverfront',
        reading: '12,700 km',
        model: 'Bajaj Dominar 400',
        available: false,
        coordinates: { lat: 26.1445, lng: 91.7362 },
        type: 'motorcycle',
        price: '1500/day'
    },
    {
        id: 14,
        images: ['https://images.unsplash.com/photo-1605552746931-2d69338f7d73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'JK14AB9012',
        location: 'Srinagar Dal Lake',
        reading: '8,300 km',
        model: 'Hero Xpulse 200',
        available: true,
        coordinates: { lat: 34.0837, lng: 74.7973 },
        type: 'motorcycle',
        price: '1300/day'
    },
    {
        id: 15,
        images: ['https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg'],
        plate: 'KL15CD3456',
        location: 'Kochi Marine Drive',
        reading: '10,400 km',
        model: 'Vespa VXL 150',
        available: true,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        type: 'scooter',
        price: '900/day'
    },
    {
        id: 16,
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'AP16EF7890',
        location: 'Visakhapatnam Beach',
        reading: '11,900 km',
        model: 'Honda Dio',
        available: false,
        coordinates: { lat: 17.6868, lng: 83.2185 },
        type: 'scooter',
        price: '700/day'
    },
    {
        id: 17,
        images: ['https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'GA17GH1234',
        location: 'Goa Panjim',
        reading: '7,200 km',
        model: 'Royal Enfield Meteor 350',
        available: true,
        coordinates: { lat: 15.2993, lng: 74.1240 },
        type: 'motorcycle',
        price: '1400/day'
    },
    {
        id: 18,
        images: ['https://img.freepik.com/free-photo/motorcycle-parked-outdoors_23-2148883510.jpg'],
        plate: 'UK18IJ5678',
        location: 'Dehradun Clock Tower',
        reading: '9,500 km',
        model: 'TVS Raider 125',
        available: true,
        coordinates: { lat: 30.3165, lng: 78.0322 },
        type: 'motorcycle',
        price: '1000/day'
    },
    {
        id: 19,
        images: ['https://images.unsplash.com/photo-1558980663-3685c6962ac3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'],
        plate: 'BR19KL9012',
        location: 'Patna Gandhi Maidan',
        reading: '13,800 km',
        model: 'Bajaj Platina 110',
        available: false,
        coordinates: { lat: 25.5941, lng: 85.1376 },
        type: 'motorcycle',
        price: '850/day'
    },
    {
        id: 20,
        images: ['https://img.freepik.com/free-photo/scooter-city_1122-1974.jpg'],
        plate: 'JH20MN3456',
        location: 'Ranchi Lake',
        reading: '6,900 km',
        model: 'Hero Pleasure Plus',
        available: true,
        coordinates: { lat: 23.3441, lng: 85.3096 },
        type: 'scooter',
        price: '750/day'
    }
];

// Initialize vehicles in localStorage if not present
if (!localStorage.getItem('vehicles')) {
    localStorage.setItem('vehicles', JSON.stringify(vehiclesData));
}

const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
const container = document.getElementById('vehicleContainer');
const searchInput = document.getElementById('searchInput');
const locationSearch = document.getElementById('locationSearch');
const searchLocationBtn = document.getElementById('searchLocationBtn');
let userLocation = { lat: 19.0760, lng: 72.8777 }; // Default: Mumbai
let likedVehicles = JSON.parse(localStorage.getItem('likedVehicles')) || [];
let savedVehicles = JSON.parse(localStorage.getItem('savedVehicles')) || [];

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function filterVehicles(searchTerm = '', locationTerm = '') {
    let filteredVehicles = vehicles.filter(vehicle => {
        const textMatch = 
            vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vehicle.plate.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vehicle.location.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (locationTerm === '') {
            return textMatch;
        }
        
        const locationMatch = vehicle.location.toLowerCase().includes(locationTerm.toLowerCase());
        return textMatch && locationMatch;
    });

    if (locationTerm !== '') {
        const distanceRanges = [
            { min: 0, max: 2, label: '0-2 km' },
            { min: 2, max: 5, label: '2-5 km' },
            { min: 5, max: 10, label: '5-10 km' },
            { min: 10, max: Infinity, label: '10+ km' }
        ];
        const groupedVehicles = {};

        filteredVehicles.forEach(vehicle => {
            const distance = calculateDistance(
                userLocation.lat,
                userLocation.lng,
                vehicle.coordinates.lat,
                vehicle.coordinates.lng
            );

            for (const range of distanceRanges) {
                if (distance > range.min && distance <= range.max) {
                    if (!groupedVehicles[range.label]) {
                        groupedVehicles[range.label] = [];
                    }
                    groupedVehicles[range.label].push(vehicle);
                    break;
                }
            }
        });

        return { groupedVehicles, hasResults: Object.keys(groupedVehicles).length > 0 };
    }

    return { groupedVehicles: { 'All Vehicles': filteredVehicles }, hasResults: filteredVehicles.length > 0 };
}

function generateVehicleCards(filterResult) {
    if (!container) return;
    container.innerHTML = '';
    
    const { groupedVehicles, hasResults } = filterResult;
    
    if (!hasResults) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>No vehicles found</h4>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }
    
    Object.keys(groupedVehicles).sort((a, b) => {
        if (a === 'All Vehicles') return -1;
        if (b === 'All Vehicles') return 1;
        const aDist = parseInt(a.split('-')[0]) || 10;
        const bDist = parseInt(b.split('-')[0]) || 10;
        return aDist - bDist;
    }).forEach(range => {
        const vehiclesInRange = groupedVehicles[range];
        if (vehiclesInRange.length === 0) return;

        const section = document.createElement('div');
        section.className = 'mb-5';
        section.innerHTML = `
            <h3 class="mb-3">${range}</h3>
            <div class="d-flex flex-row flex-nowrap overflow-auto gap-3"></div>
        `;
        const row = section.querySelector('.d-flex');
        container.appendChild(section);

        vehiclesInRange.forEach((vehicle, index) => {
            const distance = locationSearch?.value.trim() ? 
                calculateDistance(
                    userLocation.lat,
                    userLocation.lng,
                    vehicle.coordinates.lat,
                    vehicle.coordinates.lng
                ).toFixed(2) : null;
            
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
                    ${distance ? `<p class="mb-1 small"><strong>Distance:</strong> ${distance} km</p>` : ''}
                    <p class="mb-1 small"><strong>Location:</strong> ${vehicle.location}</p>
                    <p class="availability small ${vehicle.available ? 'text-success' : 'text-danger'}">
                        ${vehicle.available ? 'Available Now' : 'Booked'}
                    </p>
                </div>
            `;
            row.appendChild(card);
        });
    });

    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-action')) {
                const vehicleId = parseInt(card.dataset.id);
                window.location.href = `vehicle.html?id=${vehicleId}`;
            }
        });
    });

    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lat = btn.dataset.lat;
            const lng = btn.dataset.lng;
            const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
            window.open(googleMapsUrl, '_blank');
        });
    });
}

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
    if (e.target.closest('.apply-coupon')) {
        const coupon = e.target.closest('.coupon-card').querySelector('h5').textContent;
        alert(`Coupon ${coupon} applied successfully!`);
    }
});

const placeholders = ['Search Royal Enfield...', 'Search Honda Activa...', 'Search Bajaj...'];
let currentPlaceholder = 0;
setInterval(() => {
    if (searchInput) {
        searchInput.placeholder = placeholders[currentPlaceholder];
        currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
    }
}, 2000);

function resetFilters() {
    localStorage.removeItem('searchTerm');
    localStorage.removeItem('locationTerm');
    if (searchInput) searchInput.value = '';
    if (locationSearch) locationSearch.value = '';
}

function updateFilters() {
    const searchTerm = searchInput?.value.trim().toLowerCase() || '';
    const locationTerm = locationSearch?.value.trim().toLowerCase() || '';
    
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('locationTerm', locationTerm);
    
    const filterResult = filterVehicles(searchTerm, locationTerm);
    generateVehicleCards(filterResult);
}

function restoreFilters() {
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    const savedLocationTerm = localStorage.getItem('locationTerm') || '';
    
    if (searchInput) searchInput.value = savedSearchTerm;
    if (locationSearch) locationSearch.value = savedLocationTerm;
    
    updateFilters();
}

if (searchInput) searchInput.addEventListener('input', updateFilters);
if (locationSearch) locationSearch.addEventListener('input', updateFilters);
if (searchLocationBtn) searchLocationBtn.addEventListener('click', updateFilters);

document.addEventListener('DOMContentLoaded', () => {
    if (container) {
        const urlParams = new URLSearchParams(window.location.search);
        if (!urlParams.has('reset')) {
            restoreFilters();
        } else {
            resetFilters();
            generateVehicleCards({ groupedVehicles: { 'All Vehicles': vehicles }, hasResults: vehicles.length > 0 });
        }
    }
});