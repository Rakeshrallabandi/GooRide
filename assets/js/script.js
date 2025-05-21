const vehiclesData = [
    {
        id: 1,
        images: [
            'https://i.pinimg.com/736x/cd/78/06/cd780695df5ac390539322392f962c83.jpg',
            'https://i.pinimg.com/736x/60/55/c7/6055c751d0b5796a635e72cacfd34f9b.jpg' ,   
            'https://i.pinimg.com/736x/1b/aa/ff/1baaffd744ed38beaed46f4255303d74.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/25/91/ae/2591ae6daff83f12288cacc1bf748f71.jpg',
            'https://i.pinimg.com/736x/cc/1b/87/cc1b87f822acb28662a927a2a430aaa7.jpg',
            'https://i.pinimg.com/736x/dc/11/28/dc112846db1abedd646eb0b7d3604999.jpg'
            ],
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
        images: [
            
            'https://i.pinimg.com/736x/5d/d9/7b/5dd97ba2780504520e275ed54c9adc4a.jpg',
            'https://i.pinimg.com/736x/5d/d9/7b/5dd97ba2780504520e275ed54c9adc4a.jpg',
            'https://i.pinimg.com/736x/5b/d0/eb/5bd0eb7da9ab799ca7ffc989eb733c4d.jpg'
             ],
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
        images: [
            'https://i.pinimg.com/736x/64/bb/36/64bb365e126360a16048da127345bbc5.jpg',
            'https://i.pinimg.com/736x/12/61/37/12613777d7229ffd9be9735f68659d97.jpg',
            'https://i.pinimg.com/736x/ec/42/ea/ec42ea5c33f337594f8e49437f833156.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/7b/33/85/7b33851b687373faeedd9c037fc83d79.jpg',
            'https://i.pinimg.com/736x/39/6b/a7/396ba77b1b9ad0300ff984c5f74a5ab0.jpg',
            'https://i.pinimg.com/736x/16/6d/cd/166dcd1b0a62c595057a0960bfad8614.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/e7/03/c0/e703c02b0410f99cc76d2d9d8898c064.jpg',
            'https://i.pinimg.com/736x/ba/1b/02/ba1b02e9b89ef12a8e823ceb9a89dd22.jpg',
            'https://i.pinimg.com/736x/3b/6b/9a/3b6b9a7d5ce73604117367369e9333a4.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/02/a9/01/02a901f5e83693774351fd3d2081978d.jpg',
            'https://i.pinimg.com/736x/f6/0d/af/f60daf0d5f485bb3fbddf1337f2e81f7.jpg',
            'https://i.pinimg.com/736x/ce/91/a0/ce91a0261792aaabe74c21d882060f9c.jpg'
            ],
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
        images: [
            'https://i.pinimg.com/736x/5c/64/7c/5c647cc9d33663809489cda07509ad5b.jpg',
            'https://i.pinimg.com/736x/09/44/e8/0944e8baf8758bdb20014eb755660203.jpg',
            'https://i.pinimg.com/736x/0c/d0/80/0cd080eaf0e63dddfe534d35f83dcd91.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/95/d8/8b/95d88b62203865814744909cdc3fc479.jpg',
            'https://i.pinimg.com/736x/c5/4f/6c/c54f6c7120c320a1b7b26928d1942c02.jpg',
            'https://i.pinimg.com/736x/ec/e6/b2/ece6b278f82f444cf80c573f1da3d5ab.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/e0/9c/a8/e09ca838c3ffb8f9c0f5031ef2eb79e8.jpg',
            'https://i.pinimg.com/736x/b6/17/02/b6170254a98655db61c9c5828c539dd6.jpg',
            'https://i.pinimg.com/736x/62/93/cc/6293cccd76b86931a611f90c31f87955.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/b9/c9/b1/b9c9b1208ed379b728f0d6bc6a0ced99.jpg',
            'https://i.pinimg.com/736x/2e/bb/5b/2ebb5b9c3b193d2eda275a1a2b73da8c.jpg',
            'https://i.pinimg.com/736x/30/ad/86/30ad86b491de41556e36d93cd88e9cca.jpg'
            ],
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
        images: [
            'https://i.pinimg.com/736x/c3/b9/81/c3b981ede90e8f4afeabd9a40c04736d.jpg',
            'https://i.pinimg.com/736x/e1/57/85/e15785935cbc1cfa5a2bae880f58a106.jpg',
            'https://i.pinimg.com/736x/d8/34/7c/d8347c7739f6b15fe90c252f90c6edae.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/63/17/19/6317191e2d0eae274f2bea7d6b0872dc.jpg',
            'https://i.pinimg.com/736x/c7/fe/06/c7fe06ee58c5cf9a4300bf405e33ff40.jpg',
            'https://i.pinimg.com/736x/04/df/17/04df17b34b03181eadc537d866b185ca.jpg'
             ],
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
        images: [
            'https://i.pinimg.com/736x/9f/0a/05/9f0a05de8f75c49cea31c5e5b453b7f4.jpg',
            'https://i.pinimg.com/736x/f3/22/df/f322df4d7faa4e5e39c63ca9078209c0.jpg',
            'https://i.pinimg.com/736x/b6/fe/6b/b6fe6b138d2bd38ad8b91657fa626c81.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/32/fe/e0/32fee0f54f1cfde17f5dff5be1751fa6.jpg',
            'https://i.pinimg.com/736x/d9/23/9f/d9239f378b2863642033bf8c37165cdd.jpg',
            'https://i.pinimg.com/736x/50/09/c2/5009c2cd6b4aec933233d171e91b15d9.jpg'
        ],
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
        images: [
           'https://i.pinimg.com/736x/41/7d/40/417d4052277d787e3c8959e0233091ce.jpg',
           'https://i.pinimg.com/736x/8e/03/20/8e0320ed869602ed573d36c565bd55fc.jpg',
           'https://i.pinimg.com/736x/13/94/0b/13940b4467908a20459b6fb1049124f6.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/13/94/0b/13940b4467908a20459b6fb1049124f6.jpg',
            'https://i.pinimg.com/736x/58/cf/f4/58cff4dd44ed119c5b161853ff6e4f90.jpg',
            'https://i.pinimg.com/736x/d9/ac/c9/d9acc914bc2590d4b36abf2eadd4a3ba.jpg'
             ],
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
        images: [
           'https://i.pinimg.com/736x/23/44/19/23441931df9900a4611b51813c6e4bd9.jpg',
           'https://i.pinimg.com/736x/5d/02/18/5d0218b58bb0e9e2a38420448d9cf59c.jpg',
           'https://i.pinimg.com/736x/a0/ce/89/a0ce89e016523040d934529bc2b25295.jpg'
        ],
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
        images: [
            'https://i.pinimg.com/736x/6a/72/da/6a72dadbf2756ffa510d1d02cd4a9161.jpg',
            'https://i.pinimg.com/736x/15/52/12/155212df46a9351f1f4d5f4fec0b2112.jpg',
            'https://i.pinimg.com/736x/a6/5f/84/a65f849eb7c8810a77c121172a055a4b.jpg'
            ],
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
        images: [
            'https://i.pinimg.com/736x/dd/3c/30/dd3c304bb4299f859694d393dc8b2661.jpg',
            'https://i.pinimg.com/736x/7e/8d/75/7e8d75fed4018677046f3d3991c0bd2d.jpg',
            'https://i.pinimg.com/736x/2e/ca/55/2eca5537e9eb52ccc243a2dfba2d2121.jpg'
             ],
        plate: 'JH20MN3456',
        location: 'Ranchi Lake',
        reading: '6,900 km',
        model: 'Hero Pleasure Plus',
        available: true,
        coordinates: { lat: 23.3441, lng: 85.3096 },
        type: 'scooter',
        price: '750/day'
    },
    {
    id: 21,
    images: [
        'https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-photo/view-3d-car_23-2150796980.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-photo/view-3d-car_23-2150796884.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740'
    ],
    plate: 'UK18IJ5678',
    location: 'Hyderabad',
    reading: '9,500 km',
    model: 'Hyndai',
    available: true,
    coordinates: { lat: 30.3165, lng: 78.0322 },
    type: 'car',
    price: '1000/day'
},
{
    id: 22,
    images: [
        'https://img.freepik.com/free-psd/red-isolated-car_23-2151852902.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-psd/red-isolated-car_23-2151852874.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-psd/modern-car-isolated_23-2151504562.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740'
    ],
    plate: 'TGJ5678',
    location: 'Hyderabad',
    reading: '9,500 km',
    model: 'swift',
    available: true,
    coordinates: { lat: 30.3165, lng: 78.0322 },
    type: 'car',
    price: '2500/day'
},
{
    id: 23,
    images: [
        'https://img.freepik.com/premium-photo/black-jeep-with-license-plate-number-plate-number-36_1176634-428.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-photo/black-jeep-climbing-rocks_1167344-39233.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-photo/off-road-car-wilderness_23-2151483058.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740'
    ],
    plate: 'TG18IJ5678',
    location: 'Hyderabad',
    reading: '9400 km',
    model: 'Thar',
    available: true,
    coordinates: { lat: 30.3165, lng: 78.0322 },
    type: 'jeep',
    price: '2000/day'
},
{
    id: 24,
    images: [
        'https://img.freepik.com/premium-photo/modern-family-hybrid-blue-car-white-background-with-shadow-ground-3d-rendering_101266-5367.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-photo/blue-city-car-with-blank-surface-your-creative-design-3d-rendering_101266-3776.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-vector/realistic-vector-blue-city-car-coupe-sport-transportation-isolated-background_33869-3203.jpg?ga=GA1.1.1552807996.1689011755&semt=ais_hybrid&w=740'
    ],
    plate: 'TG8IJ5678',
    location: 'Hyderabad',
    reading: '9,000 km',
    model: 'Nexon TATA',
    available: true,
    coordinates: { lat: 30.3165, lng: 78.0322 },
    type: 'car',
    price: '1020/day'
}
];

// Check if running in a browser environment before accessing localStorage
let vehicles = vehiclesData;
if (typeof window !== 'undefined' && window.localStorage) {
    // Force refresh of vehicles data to ensure new images are applied
    localStorage.setItem('vehicles', JSON.stringify(vehiclesData));
    vehicles = JSON.parse(localStorage.getItem('vehicles')) || vehiclesData;
}

const container = document.getElementById('vehicleContainer');
const searchInput = document.getElementById('searchInput');
const locationSearch = document.getElementById('locationSearch');
const searchLocationBtn = document.getElementById('searchLocationBtn');
let userLocation = { lat: 19.0760, lng: 72.8777 }; // Default: Mumbai
let likedVehicles = typeof window !== 'undefined' && window.localStorage 
    ? JSON.parse(localStorage.getItem('likedVehicles')) || [] 
    : [];
let savedVehicles = typeof window !== 'undefined' && window.localStorage 
    ? JSON.parse(localStorage.getItem('savedVehicles')) || [] 
    : [];

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

    // Ensure at least 15 vehicles are shown when no filters are applied
    if (searchTerm === '' && locationTerm === '') {
        filteredVehicles = filteredVehicles.slice(0, Math.max(15, filteredVehicles.length));
    }

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
            <div class="vehicle-row d-flex flex-wrap gap-5"></div>
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
                window.location.href = `./pages/vehicle.html?id=${vehicleId}`;
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
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('likedVehicles', JSON.stringify(likedVehicles));
        }
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
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('savedVehicles', JSON.stringify(savedVehicles));
        }
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
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('searchTerm');
        localStorage.removeItem('locationTerm');
    }
    if (searchInput) searchInput.value = '';
    if (locationSearch) locationSearch.value = '';
}

function updateFilters() {
    const searchTerm = searchInput?.value.trim().toLowerCase() || '';
    const locationTerm = locationSearch?.value.trim().toLowerCase() || '';
    
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('searchTerm', searchTerm);
        localStorage.setItem('locationTerm', locationTerm);
    }
    
    const filterResult = filterVehicles(searchTerm, locationTerm);
    generateVehicleCards(filterResult);
}

function restoreFilters() {
    const savedSearchTerm = (typeof window !== 'undefined' && window.localStorage) 
        ? localStorage.getItem('searchTerm') || '' 
        : '';
    const savedLocationTerm = (typeof window !== 'undefined' && window.localStorage) 
        ? localStorage.getItem('locationTerm') || '' 
        : '';
    
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
            generateVehicleCards({ groupedVehicles: { 'All Vehicles': vehicles.slice(0, 15) }, hasResults: vehicles.length > 0 });
        }
    }
});