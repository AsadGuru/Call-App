# Call App

A simple React application for making voice and video calls using ZEGOCLOUD's UIKit Prebuilt and ZIM plugins.

## Features
- User ID and username are generated randomly on each load
- Invite other users to a voice or video call by entering their user ID and username
- Modern UI with Tailwind CSS
- Welcome popup on app start

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone this repository or download the source code.
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Usage
- On app start, a popup will appear. Click "Continue" to use the app.
- Your username and user ID are displayed.
- Click "Voice Call" or "Video Call" to invite another user. Enter their user ID and username when prompted.

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ZEGOCLOUD UIKit Prebuilt](https://docs.zegocloud.com/article/14917)
- [ZIM Web SDK](https://docs.zegocloud.com/article/12749)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)

## Project Structure
```
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License
This project is for educational/demo purposes only.
