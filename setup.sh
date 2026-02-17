#!/bin/bash

echo "🚀 Setting up your portfolio..."

# Navigate to the portfolio directory
cd /Users/rushi/Downloads/flux_jiva/portfolio

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    
    echo "🎨 Your modern portfolio is ready!"
    echo ""
    echo "To start the development server, run:"
    echo "  cd /Users/rushi/Downloads/flux_jiva/portfolio"
    echo "  npm start"
    echo ""
    echo "Features included:"
    echo "  ✅ Modern dark theme design"
    echo "  ✅ Fully responsive layout"
    echo "  ✅ Interactive animations"
    echo "  ✅ Your Flux Jiva project highlighted"
    echo "  ✅ IW AI Interview Bot featured"
    echo "  ✅ All 6 projects showcased"
    echo "  ✅ Professional timeline"
    echo "  ✅ Contact form"
    echo "  ✅ Social media integration"
    echo ""
    echo "🌐 Open http://localhost:3000 in your browser after starting!"
else
    echo "❌ Error installing dependencies. Please run 'npm install' manually."
fi
