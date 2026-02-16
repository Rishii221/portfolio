# Rushikesh Tagad - Portfolio Website

A modern, responsive portfolio website built with React.js and CSS Modules, showcasing skills, projects, and professional experience as a Senior Software Engineer with 4.2+ years of experience in React and React Native development.

## Features

- **Typewriter Hero** - Animated typing effect cycling through roles (React Developer, Frontend Developer, etc.)
- **Interactive Background** - Mouse-tracking gradient orbs and floating particles
- **Skills Dashboard** - Categorized skills (Frontend, Mobile, Backend, Tools) with proficiency bars
- **Project Showcase** - Filterable project cards (Web/Mobile) with staggered animations
- **Contact Form** - EmailJS-powered contact form with real-time status feedback
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile
- **CSS Modules** - Scoped component styling with no class name collisions

## Tech Stack

- **React 18** - UI framework
- **CSS Modules** - Scoped component styling
- **EmailJS** - Contact form email delivery
- **React Icons** - Icon library (Feather icons)

## Sections

1. **Header** - Navigation bar
2. **Hero** - Introduction with typewriter effect, stats, and CTA buttons
3. **About** - Personal background
4. **Skills** - Technical skills organized by category with progress indicators
5. **Projects** - Featured projects with filtering (All / Web / Mobile)
6. **Experience** - Professional work history
7. **Contact** - Contact form, contact info, and availability status
8. **Footer** - Site links

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root for the contact form:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Sign up at [EmailJS](https://www.emailjs.com/) to obtain these credentials.

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Creates an optimized `build` folder ready for deployment.

## Project Structure

```
src/
├── components/
│   ├── About/          # About section
│   ├── Contact/        # Contact form with EmailJS
│   ├── Experience/     # Work experience timeline
│   ├── Footer/         # Site footer
│   ├── Header/         # Navigation header
│   ├── Hero/           # Landing section with animations
│   ├── Projects/       # Project showcase with filters
│   └── Skills/         # Skills dashboard
├── styles/
│   ├── App.module.css
│   └── index.css
├── App.js
└── index.js
```

## Featured Projects

| Domain                    | Type   | Tech Stack                                    |
| ------------------------- | ------ | --------------------------------------------- |
| **E-Commerce / Auctions** | Web    | ReactJS, Redux, Jest                          |
| **Nonprofit / Education** | Web    | ReactJS, PostgreSQL                           |
| **Ridesharing**           | Mobile | React Native, TypeScript, Google Maps, Stripe |
| **Social Networking**     | Mobile | React Native, WebSocket, Stripe               |

## Contact

- **Email**: rishi.tagad@gmail.com
- **Phone**: +91 8668875303
- **Location**: Pune, Maharashtra, India
- **LinkedIn**: [Rushikesh Tagad](https://www.linkedin.com/in/rushikesh-tagad-b27353154/)
