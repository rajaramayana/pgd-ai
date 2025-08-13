# Post Graduate Diploma in AI - Landing Page

## Overview

This is a marketing landing page for Purbanchal University's Post Graduate Diploma in Artificial Intelligence program. The application is designed to showcase a comprehensive 30-credit hour AI program targeted at non-science graduates who want to enter the AI field. The landing page provides information about the program curriculum, eligibility requirements, career pathways, and includes an inquiry form for prospective students to express interest.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React** with **TypeScript** and follows a modern component-based architecture:

- **Single Page Application (SPA)**: Uses Wouter for lightweight client-side routing with smooth scrolling navigation between sections
- **Component Organization**: Modular components organized by feature (hero, curriculum, contact, eligibility, etc.) for maintainability
- **UI Framework**: Built on shadcn/ui component library with Radix UI primitives for accessibility and consistent design patterns
- **Styling**: Tailwind CSS with custom design system including academic-themed color variables and responsive design
- **State Management**: React Query for server state management and local React state for UI interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing and error handling

### Backend Architecture
The backend uses **Express.js** with TypeScript following a RESTful API pattern:

- **API Routes**: Simple REST endpoints for inquiry management (`POST /api/inquiries`, `GET /api/inquiries`)
- **Data Validation**: Drizzle-Zod integration for runtime type validation ensuring data integrity
- **Storage Layer**: Abstracted storage interface allowing switching between in-memory and database implementations
- **Error Handling**: Centralized error handling middleware with structured error responses and proper HTTP status codes
- **Development Tools**: Vite integration for hot module replacement and seamless development experience

### Data Storage Solutions
The application implements a flexible dual-storage approach:

- **In-Memory Storage**: MemStorage class for development and testing with UUID-based record identification
- **Database Ready**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Schema Design**: Simple inquiries table capturing student information (name, email, phone, education background, message)
- **Migration Support**: Drizzle-kit configuration for database schema migrations and version control

### Design Patterns
- **Repository Pattern**: Storage interface (`IStorage`) allows seamless switching between memory and database implementations
- **Component Composition**: Reusable UI components following single responsibility principle with clear prop interfaces
- **Configuration-driven**: Centralized configuration for database connections and environment variables
- **Type Safety**: End-to-end TypeScript with shared schema definitions between client and server ensuring consistency

## External Dependencies

### Core Frameworks
- **React 18**: Frontend framework with modern hooks and concurrent features for optimal performance
- **Express.js**: Backend web framework for Node.js with middleware support for API development
- **Vite**: Modern build tool providing fast development server and optimized production builds

### Database & ORM
- **Drizzle ORM**: Type-safe SQL toolkit with PostgreSQL dialect for database operations
- **Neon Database**: Serverless PostgreSQL database with auto-scaling capabilities
- **Drizzle-Kit**: Database migration and schema management tool

### UI Components & Styling
- **shadcn/ui**: High-quality component library built on Radix UI primitives
- **Radix UI**: Comprehensive collection of accessible UI components (dialogs, forms, navigation)
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and responsive utilities
- **Lucide React**: Icon library providing consistent iconography throughout the application

### Development & Tooling
- **TypeScript**: Static typing for enhanced developer experience and runtime safety
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool with Tailwind CSS and Autoprefixer plugins
- **React Hook Form**: Performant form library with validation integration
- **Zod**: TypeScript-first schema validation for runtime type checking

### State Management & Data Fetching
- **TanStack React Query**: Server state management with caching, synchronization, and background updates
- **Wouter**: Minimalist client-side routing library for single-page application navigation