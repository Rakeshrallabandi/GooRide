const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};

document.addEventListener('DOMContentLoaded', () => {
    const chatList = document.getElementById('chatList');
    
    // Generate chat items for vehicles with chat history
    Object.keys(chatHistory).forEach(vehicleId => {
        const vehicle = vehicles.find(v => v.id === parseInt(vehicleId));
        if (vehicle) {
            const lastMessage = chatHistory[vehicleId].slice(-1)[0] || {};
            const chatItem = document.createElement('div');
            chatItem.className = 'chat-item';
            chatItem.innerHTML = `
                <img src="https://via.placeholder.com/50" alt="Owner">
                <div class="chat-info">
                    <h6>${vehicle.model} Owner</h6>
                    <p>${lastMessage.message || 'No messages yet'}</p>
                </div>
                <div class="chat-time">${lastMessage.timestamp ? new Date(lastMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</div>
            `;
            chatItem.addEventListener('click', () => {
                window.location.href = `chat.html?vehicleId=${vehicleId}`;
            });
            chatList.appendChild(chatItem);
        }
    });

    // If no chats, show message
    if (!Object.keys(chatHistory).length) {
        chatList.innerHTML = `
            <div class="text-center py-5">
                <h4>No chats yet</h4>
                <p>Start a chat from a vehicle details page</p>
            </div>
        `;
    }
});