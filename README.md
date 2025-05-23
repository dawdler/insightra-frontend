# Insightra 0.1 React Frontend

A modern React application for Insightra, an AI-powered analytics and insights platform featuring a beautiful Material UI interface, interactive dashboards, and comprehensive user management.

## Features

- 🎨 Modern UI with Material UI v7
- 📊 Interactive data visualization with MUI X Charts
- 📱 Responsive design for all devices
- 🔐 User authentication (sign in/sign up)
- 📈 Real-time analytics dashboard
- 📱 Cross-platform compatibility
- 🔄 REST API integration with Flask backend

## Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher
- Access to the Insightra Flask backend server

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Insightra 0.1/frontend/react_frontend"
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root (if not exists) and configure the environment variables:
```
REACT_APP_API_URL=http://127.0.0.1:5000
```

## Development

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## Project Structure

```
react_frontend/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── dashboard/   # Dashboard related components
│   │   ├── sign-in/    # Authentication components
│   │   ├── sign-up/    # User registration components
│   │   └── shared-theme/# Shared UI components and themes
│   ├── routes/         # Application routing
│   ├── App.js          # Root component
│   └── index.js        # Application entry point
└── package.json        # Project dependencies and scripts
```

## Key Dependencies

- React 18.2.0
- Material UI v7
- MUI X Components (Charts, Data Grid, Date Pickers)
- React Router v7
- Axios for API requests
- React Spring for animations
- Date-fns and Dayjs for date manipulation

## Backend Integration

The frontend integrates with a Flask backend server running at `http://127.0.0.1:5000`. Ensure the backend server is running before starting the frontend application.

API endpoints used:
- Authentication: `/auth/signin`, `/auth/signup`
- Data fetching: Various endpoints for dashboard data

## Testing

The project uses Jest and React Testing Library for testing. Run tests using:

```bash
npm test
```

## Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For support, please contact the development team or raise an issue in the repository.
