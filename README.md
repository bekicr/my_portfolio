# Personal Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React and Vite. It showcases your skills, projects, and professional information in a clean and attractive layout.

## Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean and professional design with smooth animations
- **Multiple Sections**: Home, About, Projects, Skills, and Contact sections
- **Contact Form**: Interactive form for visitors to reach out
- **Project Showcase**: Display your work with descriptions and links
- **Skills Visualization**: Visual representation of your technical skills

## Technologies Used

- React.js
- Vite (for fast development and optimized builds)
- CSS3 (with modern features like Flexbox and Grid)
- Font Awesome (for icons)
- Google Fonts

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory
   ```
   cd my-portfolio
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5177` (or the port shown in your terminal)

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/sections/Hero.jsx` - Your name and title
- `src/components/sections/About.jsx` - Your bio and contact details
- `src/components/sections/Contact.jsx` - Your contact information

### Projects

Add or modify your projects in `src/components/sections/Projects.jsx`.

### Skills

Update your skills and proficiency levels in `src/components/sections/Skills.jsx`.

### Styling

Customize the look and feel by modifying `src/App.css`.

## Deployment

Build the project for production:

```
npm run build
```

The build files will be in the `dist` directory, which you can deploy to any static site hosting service like:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Font Awesome for the icons
- Google Fonts for the typography
- React and Vite for the development framework
