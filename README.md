# Fire Tablet

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-17.0.1-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.2.4-38B2AC.svg)](https://tailwindcss.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222)](https://vramdhanie.github.io/fire)

A beautiful, interactive presentation of the Fire Tablet as a responsive slide show. Each verse is presented on an elegantly styled page inspired by ancient religious manuscripts.

[Live Demo](https://vramdhanie.github.io/fire) | [Fire Tablet Text](https://www.bahai.org/library/authoritative-texts/prayers/bahai-prayers/5#814641272)



## ✨ Features

- **Elegant Book-like Design**: Pages styled to resemble ancient religious manuscripts with decorative elements
- **Smooth Transitions**: Gentle fade animations between slides for a meditative experience
- **Responsive Layout**: Adapts beautifully to all screen sizes from mobile to desktop
- **Touch Navigation**: Swipe support for mobile devices with visual indicators
- **Keyboard Navigation**: Use arrow keys for quick navigation
- **Consistent Page Size**: Fixed dimensions with scrollable content for longer verses
- **Decorative Typography**: Custom styling for first letters and beautiful font combinations
- **Progress Tracking**: Subtle page numbering and estimated reading time

## 🚀 Getting Started

### Prerequisites

- Node.js (v12.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vramdhanie/fire.git
   cd fire
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and visit `http://localhost:3000`

## 🎮 Usage

- **Click** on the page or use **right arrow** key to move to the next verse
- **Left arrow** key to move to the previous verse
- On mobile, **swipe left** to go to the next verse or **swipe right** to go to the previous verse
- Use the navigation buttons at the top or bottom to navigate between verses
- The reset button (↺) returns to the first verse

## 💻 Technologies Used

- [React](https://reactjs.org/) - Frontend library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Transition Group](https://reactcommunity.org/react-transition-group/) - Animation library
- [Google Fonts](https://fonts.google.com/) - EB Garamond, Cinzel Decorative, and Tangerine fonts

## 🏗️ Project Structure

```
fire/
├── public/              # Static files
├── src/                 # Source code
│   ├── assets/          # CSS and other assets
│   │   ├── main.css     # Main TailwindCSS file
│   │   ├── religious-theme.css # Custom styling
│   │   └── transitions.css # Animation definitions
│   ├── App.js           # Main application component
│   ├── slide.js         # Slide component
│   ├── controls.js      # Navigation controls
│   └── tablet.js        # Fire Tablet text content
├── package.json         # Dependencies and scripts
└── tailwind.config.js   # TailwindCSS configuration
```

## 🔄 Deployment

The application is deployed using GitHub Pages. To deploy your own version:

```bash
npm run deploy
# or
yarn deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- The Fire Tablet text is from [Bahá'í Prayers](https://www.bahai.org/library/authoritative-texts/prayers/bahai-prayers/5#814641272)

---

Made with ❤️ by [Vincent Ramdhanie](https://github.com/vramdhanie)
