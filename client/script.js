const messageInput = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");

const roomInput = document.querySelector("#room-input");
const roomJoin = document.querySelector("#room-button");


sendButton.addEventListener('click', (e) => {
    e.preventDefault()
    const message = messageInput.value;
    const roomId = roomInput.value;
    if(message === "") return;
    console.log("message", message);
    displayMessage(message);

    messageInput.value = "";

})

roomJoin.addEventListener('click', (e) => {
    e.preventDefault()
    const roomId = roomInput.value;
    console.log("roomId", roomId);
})

function displayMessage(message) {
    const div = document.createElement('div');
    div.classList.add('move-right')
    div.textContent = message;
    document.getElementById("message-container").appendChild(div)
}