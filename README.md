# CSC131 Group Project - React Frontend

## Overview
This is the frontend portion of the CSC131 Group Project - an Athlete Management System built with React and Vite. The application is containerized using Docker for consistent development and deployment experiences.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Docker Setup](#docker-setup)
- [Manual Setup](#manual-setup)
- [Connecting to Backend](#connecting-to-backend)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Linting & Formatting](#linting--formatting)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Features
- Modern React-based UI for athlete management
- Integration with Django REST API backend
- Responsive design for desktop and mobile devices
- Athlete profile viewing and management


## Technology Stack
- **React.js** - FRAMEWORK
- **Vite** - Build tool
- **TypeScript** - Type-safe JavaScript
- **Docker** - Containerization
- **Stylelint** - CSS

## Prerequisites
Before you begin, ensure you have the following installed:
- Docker and Docker Compose
- Git

For manual setup (non-Docker):
- Node.js 16.x or higher
- npm or yarn

## Docker Setup
The frontend is containerized with Docker for easy setup and consistent development environments.

1. Clone the repository:
   ```bash
   git clone https://github.com/Samppii/CSC131-GROUP-PROJECT.git
   cd CSC131-GROUP-PROJECT
   ```

2. Build the Docker Image:
   ```bash
   docker build -t player-club-management .
   ```

3. To run the container:
   ```bash
   docker run -p 5173:5173 player-club-management
   ```

4. The application will be available at http://localhost:5173/

The Dockerfile uses:
* Node 24 Alpine as the base  image
* Exposes port 5173 for the Vite development server
* Configures the server with --host 0.0.0.0 to make it accessible outside the container

## Manual Setup
If you prefer not to use Docker, you can set up the project manually:

1. Clone the repository:
   ```bash
   git clone https://github.com/Samppii/CSC131-GROUP-PROJECT.git
   cd CSC131-GROUP-PROJECT
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. The application will be available at http://localhost:5173/

## Connecting to Backend
This frontend is designed to work with a Django backend. To connect:

1. Ensure the backend server is running (typically at http://127.0.0.1:8000/)

2. The frontend is pre-configured to make API calls to the backend. If you need to modify the API endpoint:
   - Check the API service files in the `src` directory
   - Update the base URL if your backend runs on a different address

3. When using Docker, you might need to:
   - Set environment variables in the Dockerfile or docker-compose configuration
   - Use container networking to connect to the backend
   - Update the API base URL to reference the backend service name if both are in the same Docker network

## Development Workflow

### Branch Management
1. Create a new branch for each feature or bugfix:
   ```bash
   git checkout -b feature/feature-name
   # or
   git checkout -b bugfix/bug-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "chore: descriptive commit message"
   ```

3. If working with Docker, rebuild the container to test changes:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

4. Push your changes and create a pull request:
   ```bash
   git push origin feature/feature-name
   ```

### Commit Message Format
Based on the repository history, commit messages follow these patterns:
- `feat:` - New features
- `chore:` - Maintenance tasks, dependencies, etc.
- `refactor:` - Code changes that neither fix bugs nor add features
- `fix:` - Bug fixes

## Project Structure
```
CSC131-GROUP-PROJECT/
├── public/             # Static files
├── src/                # Source code
├── .dockerignore       # Files to ignore in Docker context
├── .gitignore          # Git ignore file
├── .stylelintrc.json   # Stylelint configuration
├── Dockerfile          # Docker configuration
├── README.md           # Project documentation
├── biome.json          # Biome configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # Entry HTML file
├── nvimconfig.lua      # NeoVim configuration
├── package-lock.json   # Dependency lock file
├── package.json        # Project dependencies
├── tsconfig.app.json   # TypeScript config for app
├── tsconfig.json       # TypeScript base config
├── tsconfig.node.json  # TypeScript config for Node
└── vite.config.ts      # Vite configuration
```

## Troubleshooting
- **Docker issues**:
  - `docker-compose down && docker-compose up --build` to rebuild containers
  - Check Docker logs with `docker-compose logs`
  - Verify Docker network configuration
  - Ensure ports are properly exposed and not in use

- **Frontend issues**:
  - Node module issues: Try deleting `node_modules` and `package-lock.json` then running `npm install` again
  - Vite build errors: Check for syntax errors in your components
  - API connection problems: Verify the backend server is running and accessible
  - Linting errors: Run appropriate linting commands to identify and fix issues

## Setting Up the Backend
The backend for this project is a separate Django application. To set it up:

1. Clone the backend repository (if separate) or navigate to the backend directory

2. For Docker setup (recommended), you can create a Docker-compose file that spins up both services

3. For manual setup:
   - Install Python 3.8 or higher
   - Install Django and dependencies:
     ```bash
     # Using pip
     pip install django djangorestframework django-cors-headers
     
     # Or using Poetry
     poetry add django djangorestframework django-cors-headers
     ```
   - Apply migrations: `python manage.py migrate`
   - Start the backend server: `python manage.py runserver`

The backend will be accessible at http://127.0.0.1:8000/

## Contributing
1. Fork the repository
2. Create a feature branch using the naming conventions above
3. Make your changes, following the project's code style
4. Run linting and formatting tools before submitting
5. Submit a pull request to the main repository
