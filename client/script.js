const messageInput = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");

const roomInput = document.querySelector("#room-input");
const roomJoin = document.querySelector("#room-button");

const socket = io();

socket.on("connect", () => {
    // console.log("You are now connected with id : ", socket.id);
    const message = `You are now connected with id : ${socket.id}`;
    const newConnection = createChatHistory(message, "");
    document.getElementById('chat-history').append(newConnection)
})

socket.on('recieve-message', (message) => {
    console.log("recieved message", message);
    const recieveMessage = createChatHistory(message, "recieved");

    document.getElementById('chat-history').appendChild(recieveMessage)
})

// Send message
sendButton.addEventListener('click', (e) => {
    e.preventDefault()
    const message = messageInput.value;
    const roomId = roomInput.value;
    if(message === "") return;
    console.log("message", message);
    socket.emit('send-message', message);
    const newMessage = createChatHistory(message, "sender");
    const chatHistory = document.getElementById('chat-history');
    chatHistory.appendChild(newMessage);
    socket.emit('send-message', message, roomId);
    messageInput.value = "";

})

// Join room 
roomJoin.addEventListener('click', (e) => {
    e.preventDefault()
    const roomId = roomInput.value;
    console.log("roomId", roomId);
    socket.emit('join-room', roomId, message => {
        document.getElementById('chat-history').append(createChatHistory(message, ""))
    })
})


function createChatHistory(message, user) {
    // Create the container element for the chat history
    const messageElement = document.createElement('div');
    if (user === 'sender') {

        // Set the class names
        messageElement.classList.add('chat-message', 'sender-message');
        
        // Create the content element
        const contentElement = document.createElement('span');
        
        // Set the content
        contentElement.textContent = message;
        
        // Append the content to the message element
        messageElement.appendChild(contentElement);
    }

    if (user === 'recieved') {

        // Set the class names
        messageElement.classList.add('chat-message', 'receiver-message');
        
        // Create the content element
        const contentElement = document.createElement('span');
        
        // Set the content
        contentElement.textContent = message;
        
        // Append the content to the message element
        messageElement.appendChild(contentElement);
    }

    if(user === ""){
                // Set the class names
                messageElement.classList.add('chat-message');
        
                // Create the content element
                const contentElement = document.createElement('span');
                
                // Set the content
                contentElement.textContent = message;
                
                // Append the content to the message element
                messageElement.appendChild(contentElement);
    }
  
    return messageElement; // You can return the chatHistory element for further use
  }
  