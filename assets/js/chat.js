const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.querySelector('.send-btn');
const emojiBtn = document.querySelector('.emoji-btn');
const emojiPicker = document.querySelector('emoji-picker');
const fileBtn = document.querySelector('.file-btn');
const fileInput = document.getElementById('fileInput');
const micBtn = document.querySelector('.mic-btn');
const chatOwnerName = document.getElementById('chatOwnerName');
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
let blockedChats = JSON.parse(localStorage.getItem('blockedChats')) || [];

function getVehicleById(id) {
    const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    return vehicles.find(vehicle => vehicle.id === id);
}

function generateMessage(message, isSent, timestamp, type = 'text', fileUrl = '') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
    let content = '';
    if (type === 'text') {
        content = `<p class="mb-0">${message}</p>`;
    } else if (type === 'image') {
        content = `<img src="${fileUrl}" alt="Attached image" class="img-fluid" style="max-width: 200px;">`;
    } else if (type === 'video') {
        content = `<video src="${fileUrl}" controls class="img-fluid" style="max-width: 200px;"></video>`;
    }
    messageDiv.innerHTML = `
        ${content}
        <div class="message-time">${new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    return messageDiv;
}

function saveChatHistory(vehicleId, messages) {
    chatHistory[vehicleId] = messages;
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadChatHistory(vehicleId) {
    chatMessages.innerHTML = '';
    const messages = chatHistory[vehicleId] || [];
    messages.forEach(msg => {
        chatMessages.appendChild(generateMessage(msg.content, msg.isSent, msg.timestamp, msg.type, msg.fileUrl));
    });
    chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
}

function sendMessage(vehicleId, content, type = 'text', fileUrl = '') {
    if (blockedChats.includes(vehicleId)) {
        chatMessages.innerHTML = '<p class="text-center">This chat is blocked.</p>';
        return;
    }
    if (type === 'text' && !content.trim()) {
        return;
    }

    const timestamp = Date.now();
    const message = { content, isSent: true, timestamp, type, fileUrl };
    const messages = chatHistory[vehicleId] || [];
    messages.push(message);
    saveChatHistory(vehicleId, messages);

    const messageElement = generateMessage(content, true, timestamp, type, fileUrl);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });

    // Simulate owner response
    setTimeout(() => {
        if (!blockedChats.includes(vehicleId)) {
            const response = { content: 'Thanks for your message! How can I assist you?', isSent: false, timestamp: Date.now(), type: 'text' };
            messages.push(response);
            saveChatHistory(vehicleId, messages);
            chatMessages.appendChild(generateMessage(response.content, false, response.timestamp));
            chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleId = parseInt(urlParams.get('id')) || 0; // Fallback to 0 if ID is invalid
    const vehicle = getVehicleById(vehicleId);

    if (chatMessages && messageInput) {
        chatOwnerName.textContent = vehicle ? `Owner of ${vehicle.model}` : 'Owner of Unknown Vehicle';
        
        // Load existing chat history
        loadChatHistory(vehicleId);

        // Send message
        sendBtn.addEventListener('click', () => {
            const content = messageInput.value.trim();
            if (content) {
                sendMessage(vehicleId, content);
                messageInput.value = '';
                messageInput.focus();
            }
        });

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const content = messageInput.value.trim();
                if (content) {
                    sendMessage(vehicleId, content);
                    messageInput.value = '';
                    messageInput.focus();
                }
            }
        });

        // Emoji picker
        emojiBtn.addEventListener('click', () => {
            emojiPicker.classList.toggle('active');
        });

        emojiPicker.addEventListener('emoji-click', (event) => {
            messageInput.value += event.detail.unicode;
            emojiPicker.classList.remove('active');
            messageInput.focus();
        });

        // File attachment
        fileBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const type = file.type.startsWith('image/') ? 'image' : 'video';
                    sendMessage(vehicleId, '', type, event.target.result);
                };
                reader.readAsDataURL(file);
                fileInput.value = '';
            }
        });

        // Microphone button
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            micBtn.addEventListener('click', () => {
                recognition.start();
                micBtn.style.color = '#ff4444'; // Indicate recording
            });

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                messageInput.value += transcript;
                micBtn.style.color = '#075e54'; // Reset color
                messageInput.focus();
            };

            recognition.onend = () => {
                micBtn.style.color = '#075e54'; // Reset color
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                micBtn.style.color = '#075e54'; // Reset color
            };
        } else {
            micBtn.style.display = 'none'; // Hide mic button if API not supported
        }

        // Three-dot menu actions
        document.querySelector('.block-chat').addEventListener('click', (e) => {
            e.preventDefault();
            if (!blockedChats.includes(vehicleId)) {
                blockedChats.push(vehicleId);
                localStorage.setItem('blockedChats', JSON.stringify(blockedChats));
                chatMessages.innerHTML = '<p class="text-center">Chat blocked.</p>';
            }
        });

        document.querySelector('.clear-chat').addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to clear this chat?')) {
                chatHistory[vehicleId] = [];
                saveChatHistory(vehicleId, []);
                loadChatHistory(vehicleId);
            }
        });
    }
});