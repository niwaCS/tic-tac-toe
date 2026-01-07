# Tic-Tac-Toe

A browser-based tic-tac-toe game built with vanilla JavaScript using the module pattern.

# Live-Preview
- https://niwacs.github.io/tic-tac-toe/

## Features

- Two-player gameplay
- Custom player names
- Win, tie, and turn detection with on-screen messages
- Game reset functionality

## Architecture

The project uses three JavaScript modules:

- **gameboard** — Manages the board state (placing markers, resetting)
- **gameController** — Handles game logic (turns, win/tie detection, player management)
- **displayController** — Connects the UI to the game logic (rendering, event handling, messages)

Each module is an IIFE (Immediately Invoked Function Expression) that exposes only necessary methods, keeping internal state private.

## Technologies

- HTML5
- CSS3 (Grid layout)
- Vanilla JavaScript (ES6+)
- [Manrope](https://fonts.google.com/specimen/Manrope) font via Google Fonts
