# Spin Fun

A simple React app featuring a spinning wheel of prizes and a confetti celebration effect. Built with [react-spin-wheel](https://www.npmjs.com/package/react-spin-wheel), [react-confetti](https://www.npmjs.com/package/react-confetti), and styled using [Tailwind CSS](https://tailwindcss.com/).

**Live Demo:**  
👉 [https://riasadul-hoq.github.io/Spin-Fun/](https://riasadul-hoq.github.io/Spin-Fun/)

## Features

- 🎡 Spin a wheel to randomly win a prize (e.g., PlayStation 5, iPad Pro, MacBook Pro, etc.).
- 🎉 Confetti celebration effect when the wheel stops or when triggered manually.
- 🖱️ Button to toggle celebration on and off.
- 💅 Responsive and centered layout using Tailwind CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/riasadul-hoq/Spin-Fun.git
   cd spin-fun
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Build for production:**
   ```sh
   npm run deploy
   ```

## Usage

- Click the "Spin" button to spin the wheel.
- Wait for the wheel to stop and reveal the prize you won.
- Enjoy the confetti animation!
- Use the "Celebrate" button to manually toggle the confetti effect.

## Customization

- To add or remove prizes, modify the `items` array in the `SpinWheel` component inside `src/App.jsx`.
- To change the appearance, update the styles in the `src/index.css` file or customize Tailwind CSS settings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [react-spin-wheel](https://www.npmjs.com/package/react-spin-wheel) for the spinning wheel component.
- [react-confetti](https://www.npmjs.com/package/react-confetti) for the confetti animation.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
