# OPERATION BRAVO - bravo-frontend

## Overview

This repository is part of the OPERATION BRAVO project: a Kenya-scale, AI-powered social intelligence platform connecting citizens, communities, and authorities through actionable data.

## Tech Stack

- **Runtime**: Node.js (for backend) / React (for frontend) / React Native (for mobile)
- **Language**: TypeScript
- **AI**: NLP (Swahili/Sheng), Computer Vision, Geospatial Analysis
- **Real-time**: WebSockets/Kafka

## Getting Started

### Prerequisites

- Node.js 18+
- Docker (for development)
- PostgreSQL + PostGIS

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env
# Edit .env with your configuration

# Run database migrations (backend)
npm run migrate

# Start development server
npm run dev
```

### Environment Variables

See `.env.example` for required configuration.

## Project Structure

```
src/
├── api/       # API routes and controllers
├── db/        # Database models and migrations
├── types/     # TypeScript type definitions
├── utils/     # Utility functions
└── services/  # Business logic services
```

## Contributing

This repository follows the Git workflow with protected `main` branch.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Pull Request Guidelines

- Ensure all tests pass
- Update documentation if needed
- Include relevant issue numbers in description

## Branch Protection

- `main` branch is protected
- Requires at least 1 approving review
- Requires conversation resolution
- Disallows force pushes

## Minion Responsibilities

See CODEOWNERS for ownership assignments.

## License

Proprietary - OPERATION BRAVO Internal Use Only
