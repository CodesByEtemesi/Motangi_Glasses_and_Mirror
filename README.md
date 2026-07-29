# Motangi Glasses and Mirrors

An e-commerce web application for browsing and purchasing mirrors, glass wall art, and cladding products — including wall mirrors, bathroom mirrors, LED-backlit mirrors, and decorative wallpaper/tile finishes.

## Author

Samwel Etemesi ([@CodesByEtemesi](https://github.com/CodesByEtemesi))

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Status](#project-status)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Introduction

Motangi Glasses and Mirrors is an online storefront for browsing a curated collection of glass and mirror products — from bathroom and bedroom mirrors to full-length, LED-backlit, and custom decorative pieces. The site is designed to give customers an easy way to explore the catalog by category and type, view product details, and manage a shopping cart ahead of checkout.

## Features

- **Product Catalog** — browse mirrors and glass products with images, names, descriptions, and pricing.
- **Filtering & Sorting** — filter products by category (Bedroom, Bathroom, Luxurious, Cladding) and type (Rectangular, Full Length, LED Backlit, Beveled, and more), and sort by price.
- **Search** — search the catalog by product name.
- **Shopping Cart** — add products to a cart, adjust quantities, and view running totals.
- **Product Detail Pages** — dynamic per-product pages with images, descriptions, and related product suggestions.
- **Responsive Design** — built with Tailwind CSS for a consistent experience across mobile and desktop.

## Tech Stack

- **Frontend:** React (Vite), React Router, Tailwind CSS, React Toastify, React Icons
- **Backend:** Node.js, Express *(in active development)*
- **Database:** MongoDB *(planned)*

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/CodesByEtemesi/Motangi_Glasses_and_Mirror.git

# Navigate into the project
cd Motangi_Glasses_and_Mirror/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Project Status

This project is under active development.

- ✅ Frontend UI, routing, filtering, sorting, search, and cart logic are functional using hardcoded product data.
- 🚧 Backend (Express + MongoDB) is scaffolded but routes, models, and controllers are still being built.
- 🚧 Live product data, authentication, and order processing are planned next steps.

## Folder Structure
```bash
frontend/
├── public/ # Static assets served as-is (favicon, etc.)
├── src/
│ ├── assets/ # Product images and image asset exports
│ ├── components/ # Reusable UI components (Navbar, Footer, ProductItem, etc.)
│ ├── context/ # React Context for global shop state (cart, search, products)
│ ├── pages/ # Route-level pages (Home, Collection, Product, Cart, etc.)
│ ├── App.jsx
│ └── main.jsx
└── package.json
```
## Contributing

This is currently a solo project, but feedback, issues, and suggestions are welcome. Feel free to open an issue if you spot a bug or have an idea for improvement.

## Contact

Samwel Etemesi — samweletemesi2@gmail.com

## License

This project is currently unlicensed/proprietary. All rights reserved.