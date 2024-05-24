
# Chat application POC

## Overview

This project is a basic Node.js application implementing Socket.io for real-time, bidirectional communication, focusing on group chat functionality through rooms. Users can join specific rooms and participate in group chats, enabling targeted conversations within distinct groups. When a user sends a message within a room, it is broadcasted to all participants in that room in real-time. Additionally, the application features a push notification system to alert users immediately upon receiving new messages.

The frontend includes a straightforward chat interface where users can select or create rooms, send messages, and view the chat history within each room. The backend manages socket connections, room assignments, message broadcasting within rooms, and the triggering of notifications upon message receipt. This project serves as a proof of concept to demonstrate the integration of Socket.io for creating interactive, real-time group chat applications with room-based communication and instant push notifications, providing a foundation for more advanced chat and collaboration platforms.



## Prerequisites

- Already installed Node.js locally

## Installation

Install my-project with npm

1 Clone the repository :
```sh
    https://github.com/danyalkhan999/socket.io.git
```

2 Navigate to the project :
```sh
    cd socket.io
```

3 Install the dependencies : 
```sh
    npm install
```

4 Run project : 
```sh
    npm start
```
## Features

- **Room-based Group Chats:** Users can join specific rooms, allowing for organized and targeted group conversations.
- **Push Notifications:** Users receive immediate notifications when a new message is received, ensuring they stay updated with the conversation.
- **Connection Status:** Users are notified when they connect to the server, along with their unique socket ID.
- **Dynamic Chat Interface:** The chat interface updates in real-time, displaying messages as they are sent and received.
- **User-Friendly Interface:** Simple and intuitive chat interface for easy user interaction.
- **Scalable Architecture:** Built using Node.js and Socket.io, making it scalable for larger applications.
- **Cross-Origin Support:** Configured to support cross-origin requests, allowing the frontend and backend to run on different domains.


## Project Structure

- **server.js**: The main server file that sets up the Node.js server and Socket.io.
- **public/**: Contains the frontend files (HTML, CSS, JavaScript).
  - **index.html**: The main HTML file for the chat interface.

  - **script.js**: The JavaScript file for handling frontend Socket.io logic.
## Tech Stack

**Client:** HTML, CSS, JS

**Server:** Node, Express, Socket.IO

