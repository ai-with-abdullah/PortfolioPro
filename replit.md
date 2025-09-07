# Overview

This is a modern portfolio website for Muhammad Abdullah, an AI developer and data scientist. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, showcasing projects, skills, and providing contact functionality. The portfolio features a dark theme design with gradient accents and includes sections for about, projects, and contact information with WhatsApp integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React and TypeScript, utilizing a component-based architecture with the following key design decisions:

- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for accessible and consistent design
- **Styling**: Tailwind CSS with CSS variables for theming, supporting a dark theme with custom color palette
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The backend follows a minimal Express.js setup with modular design:

- **Server Framework**: Express.js with TypeScript for type safety
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for user management
- **Development Setup**: Vite integration for seamless development experience with HMR
- **Middleware**: Request logging, JSON parsing, and error handling

## Database Design
The application includes schema definitions for future database integration:

- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema**: User table with id, username, and password fields
- **Validation**: Zod schemas for runtime validation of user input
- **Migrations**: Configured for database schema versioning

## Component Structure
The frontend follows a hierarchical component organization:

- **Layout Components**: Header, Footer for consistent navigation and branding
- **Page Components**: Home page with multiple sections (Hero, About, Projects, Contact)
- **UI Components**: Reusable shadcn/ui components for forms, buttons, modals, and navigation
- **Custom Components**: Project cards, contact forms, and skill displays

## Design System
The application implements a cohesive design system:

- **Typography**: Inter font family for modern, readable text
- **Colors**: CSS custom properties for consistent theming with primary (blue), secondary (purple), and accent (cyan) colors
- **Spacing**: Tailwind's spacing scale for consistent layout
- **Components**: shadcn/ui component library for accessibility and consistency

# External Dependencies

## Core Technologies
- **React**: Frontend framework for building user interfaces
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM for database interactions
- **@neondatabase/serverless**: Neon PostgreSQL driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition

## Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **tsx**: TypeScript execution for development server

## Communication
- **WhatsApp Integration**: Custom utility for opening WhatsApp conversations with pre-filled messages based on user interactions