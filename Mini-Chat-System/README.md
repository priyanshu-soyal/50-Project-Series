# Mini Chat System

A modern, responsive chat application built with Node.js, Express, MongoDB, and EJS.

## Features

- ✨ Modern and attractive UI with gradient backgrounds
- 💬 Create, read, update, and delete chat messages
- 📱 Responsive design for all devices
- 🎨 Beautiful color palette with smooth animations
- 🔒 Form validation and error handling
- ⚡ Real-time message sorting by creation time

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Template Engine**: EJS
- **Styling**: CSS3 with modern features
- **Method Override**: For PUT/DELETE requests

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make sure MongoDB is running on your system
4. Start the application:
   ```bash
   node index.js
   ```
5. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
Mini-Chat-System/
├── models/
│   └── chat.js          # Chat schema and model
├── views/
│   ├── Chats.ejs        # Main chat listing page
│   ├── NewChat.ejs      # Create new chat form
│   └── EditChat.ejs     # Edit existing chat form
├── public/
│   └── style.css        # Modern styling with gradients
├── index.js             # Main server file
├── initDB.js            # Database initialization
└── package.json         # Dependencies and scripts
```

## API Endpoints

- `GET /` - Display all chats
- `GET /newChat` - Show new chat form
- `POST /` - Create a new chat
- `GET /EditChats/:id/edit` - Show edit chat form
- `PUT /EditChats/:id` - Update existing chat
- `DELETE /delete/:id` - Delete a chat

## Color Palette

The application uses a modern color scheme:
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Secondary**: Orange gradient (#ff6b6b to #ee5a24)
- **Accent**: Yellow (#ffd93d)
- **Background**: Purple-blue gradient
- **Text**: Dark gray (#333) on white backgrounds

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and slide-in animations
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling for all operations
- **Modern UI**: Glassmorphism effects and gradient backgrounds

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC License
