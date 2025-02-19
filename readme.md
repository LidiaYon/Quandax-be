# Quandax Educational Platform

A comprehensive Learning Management System (LMS) designed specifically for K-12 tutoring academies, providing a secure and unified platform for administrators, tutors, and students.

## Features

### For Tutors
- Course creation and management
- Content upload capabilities (videos, documents, etc.)
- Assignment creation and grading tools
- Student progress tracking
- Real-time analytics dashboard

### For Students
- Easy course enrollment
- Progress tracking
- Assignment submission
- Course content access
- Interactive learning tools

### For Administrators
- User management and verification
- Course approval workflow
- Platform analytics
- Security management
- System monitoring

## Tech Stack

### Frontend
- React.js 18.2.0
- Redux for state management
- Vite for development
- TailwindCSS for styling
- Socket.io-client for real-time features
- Axios for API requests

### Backend
- Node.js 18.0
- Express.js 4.18
- MongoDB 6.0
- JWT for authentication
- Redis 7.0 for caching

### DevOps
- Git & GitHub for version control
- Render for deployment
- Docker for containerization

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- MongoDB 6.0 or higher
- Redis 7.0 or higher

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/quandax.git
cd quandax
```

2. Install backend dependencies
```bash
cd quandax_backend
npm install
```

3. Install frontend dependencies
```bash
cd ../quandax-fe
npm install
```

4. Set up environment variables
Create `.env` files in both backend and frontend directories using the provided `.env.example` templates.

5. Start the development servers

Backend:
```bash
cd quandax_backend
npm run dev
```

Frontend:
```bash
cd quandax-fe
npm run dev
```

## Architecture

The platform follows a three-tier architecture:
- Frontend (React.js)
- Backend (Node.js/Express)
- Database (MongoDB)

Key components include:
- JWT-based authentication
- Role-based access control
- Real-time updates using Socket.io
- Redis caching for performance
- Secure file upload system

## Testing

The platform includes comprehensive testing:
- Unit tests using Jest
- Integration tests with Supertest
- Frontend component testing with React Testing Library
- E2E testing capabilities

Run tests:
```bash
# Backend tests
cd quandax_backend
npm test

# Frontend tests
cd quandax-fe
npm test
```

## Security Features

- CSRF protection
- Rate limiting
- Input sanitization
- Data encryption
- Secure session management
- Role-based access control

## Performance

The platform has been tested with:
- Average API response time: 200-250ms
- Frontend load time: 2.1 seconds
- System uptime: 99.5%
- Error rate: 0.5%

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License



## Authors

- Lidia Y. Bereketeab [20029]
- Sewit T. Yohannes [20066]

## Acknowledgments

- Prof. Ahmed Banafa
- San Francisco Bay University
- Department of M.S. in Computer Science

## Contact

For any inquiries about the platform, please reach out through the project's GitHub issues page.
