# SupplyWok Landing Page

Welcome to the **SupplyWok Landing Page** repository! This project serves as the primary marketing and informational web presence for the SupplyWok service, designed to connect restaurants with suppliers.

## 🚀 Features

*   **Responsive Design**: A fluid and adaptable layout that looks great on desktop, tablet, and mobile devices.
*   **Internationalization (i18n)**: Full multi-language support covering:
    *   🇺🇸 English (en)
    *   🇪🇸 Spanish (es)
    *   🇨🇳 Chinese - Cantonese (zh)
*   **Accessibility (a11y)**: Built with inclusive design principles to ensure usability for all users.
*   **SEO Optimized**: Structured with best practices to improve search engine visibility.
*   **Rich Media**: Embedded product overviews and team videos to showcase the platform's value.

## 🎨 Design System & Branding

The landing page rigorously follows the SupplyWok brand guidelines:

### Color Palette
*   **Primary Red**: `#C21204`
*   **Secondary Yellow**: `#E9B824`
*   **Neutral White**: `#FFFFFF`
*   **Neutral Black**: `#000000`
*   **Accent Brown**: `#A07832`

### Typography
*   **Headers**: *Poppins* (for a modern, bold aesthetic)
*   **Body Text**: *Montserrat* (for high readability and clean structure)

## 📁 Project Structure

The project uses a standard, lightweight HTML/CSS/JS architecture:

```text
SupplyWok-landing-page/
├── index.html          # Main entry point containing the landing page structure
├── README.md           # Project documentation
└── assets/             # Static assets folder
    ├── images/         # Project images, icons, and logos
    ├── scripts/        # JavaScript files (i18n logic, interactivity)
    └── styles/         # CSS files (styling, responsive layout, variables)
```

## 🛠️ Setup & Development

This project uses plain HTML, CSS, and vanilla JavaScript. No complex build tools or bundlers are required to run it.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Aurora-startup/SupplyWok-landing-page.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd SupplyWok-landing-page
    ```
3.  **Run locally:**
    You can simply open `index.html` in any modern browser. For a better development experience (to handle potential CORS issues with module imports or local JSON files), use a local server like VS Code's "Live Server" extension, Python's `http.server`, or Node's `http-server`:
    
    ```bash
    npx http-server .
    ```
    Then visit `http://localhost:8080`.

## 🤝 Contributing

This project follows a standard **GitFlow** workflow. 

1. Create a feature branch from `develop`.
2. Commit your changes with descriptive messages.
3. Open a Pull Request targeting the `develop` branch for review.

## 📄 License

*All rights reserved for the SupplyWok Team.*
