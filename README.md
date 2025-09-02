# SAT Master Quiz App 🎓

A fun, mobile-friendly SAT preparation app that helps students practice with short, encouraging quizzes across Math, Reading, and Writing & Language topics.

## Features

- **Short 5-Question Quizzes** - Quick, manageable sessions that don't overwhelm
- **Difficulty Progression** - Easy → Medium → Hard levels that unlock as you improve
- **90+ SAT Questions** - Comprehensive question bank across all subjects
- **Encouraging Feedback** - Positive reinforcement throughout the learning journey
- **Progress Tracking** - Local storage saves your progress between sessions
- **Mobile Optimized** - Works perfectly on phones and tablets
- **Gamification** - Points, streaks, and achievements to keep students motivated

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sat-quizzer.git
cd sat-quizzer
```

2. Run locally with Python:
```bash
python3 -m http.server 8000
```

3. Open in browser:
```
http://localhost:8000
```

## Deploy to Render

### One-Click Deploy

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" and select "Static Site"
4. Connect your GitHub repository
5. Use these settings:
   - **Name**: sat-quizzer (or your preferred name)
   - **Build Command**: (leave empty)
   - **Publish Directory**: `.`
6. Click "Create Static Site"

Your app will be live at `https://sat-quizzer.onrender.com` (or your chosen subdomain)!

### Manual Deploy via Git

1. Install Render CLI (optional):
```bash
npm install -g @render/cli
```

2. Create a new Render static site:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Create new Static Site
   - Connect to your Git repository

3. Render will automatically deploy when you push to your main branch

## Project Structure

```
sat-quizzer/
├── index.html          # Main HTML file
├── app.js             # Core application logic
├── questions.js       # SAT question database
├── styles.css         # Styling and animations
├── manifest.json      # PWA manifest for mobile
├── render.yaml        # Render deployment config
├── package.json       # Project metadata
└── README.md         # This file
```

## Configuration

The app works out of the box with no configuration needed. All data is stored locally in the browser's localStorage.

### Customization

- **Questions**: Edit `questions.js` to add/modify questions
- **Styling**: Modify `styles.css` to change colors and themes
- **Quiz Length**: Change the question count in `app.js` (default is 5)

## Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Progressive Web App

The app can be installed on mobile devices:
1. Open the app in your mobile browser
2. Tap "Add to Home Screen"
3. The app will work offline once cached

## License

MIT License - See LICENSE file for details

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for SAT students everywhere!