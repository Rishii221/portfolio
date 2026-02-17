# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. Icon Import Errors
If you see errors about missing icons (FiCar, FiGraduationCap), they have been replaced with:
- `FiCar` → `FiTruck` (for ride-sharing project)
- `FiGraduationCap` → `FiBookOpen` (for education project)

### 2. React Hooks Warnings
The `textArray` dependency warning has been fixed by moving it inside the useEffect hook.

### 3. Target Blank Security Warning
All external links already include `rel="noopener noreferrer"` for security.

### 4. If you get compilation errors:

**Solution 1: Clear cache and reinstall**
```bash
cd /Users/rushi/Downloads/flux_jiva/portfolio
rm -rf node_modules package-lock.json
npm install
npm start
```

**Solution 2: Check Node.js version**
Make sure you have Node.js 14+ installed:
```bash
node --version
```

**Solution 3: Update react-icons**
```bash
npm install react-icons@latest
```

### 5. If styles are not loading:
- Make sure all CSS module files have `.module.css` extension
- Check that imports use the correct path: `import styles from './Component.module.css'`

### 6. Port already in use:
If port 3000 is busy:
```bash
npm start -- --port 3001
```

### 7. If icons are not displaying:
Check if react-icons is properly installed:
```bash
npm list react-icons
```

## Project Structure Verification

Your portfolio should have this structure:
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.module.css
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── styles/
│   │   ├── index.css
│   │   └── App.module.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Quick Fixes

### Missing Icons Error:
Replace any missing icons in the import statements:
```javascript
// Instead of FiCar, use:
import { FiTruck } from 'react-icons/fi';

// Instead of FiGraduationCap, use:
import { FiBookOpen } from 'react-icons/fi';
```

### ESLint Warnings:
Add this to package.json to disable certain warnings:
```json
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-no-target-blank": "warn"
  }
}
```

## Performance Tips

1. **Image Optimization**: Add your profile image to `/public/images/`
2. **Font Loading**: Fonts are loaded from Google Fonts CDN
3. **Code Splitting**: Consider using React.lazy() for larger components
4. **Build Optimization**: Run `npm run build` for production

## Customization

### Colors:
Edit CSS variables in `/src/styles/index.css`:
```css
:root {
  --primary-color: #6366f1;  /* Change to your preferred color */
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
}
```

### Content:
- Update personal information in each component
- Replace placeholder email "xyz@gmail.com" with your real email
- Update social media links in Header and Footer components
- Add your real projects' GitHub links

### Deployment:
Ready to deploy to:
- Netlify: `npm run build` then drag the build folder
- Vercel: Connect your GitHub repo
- GitHub Pages: Use `gh-pages` package

## Support

If you encounter any issues:
1. Check this troubleshooting guide
2. Clear browser cache
3. Restart the development server
4. Check console for detailed error messages

Happy coding! 🚀
