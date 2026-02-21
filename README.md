# Portfolio Website — Atharva Bhusari

A single-page portfolio website built with pure HTML, CSS, and JavaScript.

## Live Sections

- **Hero** — Profile photo, name, tagline, and social links
- **About** — Professional summary and key achievements
- **Skills & Tools** — Grid of technical skills with logos
- **Work Experience** — Timeline of roles with descriptions
- **Projects** — Card grid of featured projects with GitHub links
- **Education** — Academic background
- **Certifications** — Professional certifications with verification links
- **Contact** — Form powered by Web3Forms

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter)
- [Web3Forms](https://web3forms.com) for contact form submissions
- Skill logos via [Devicon](https://devicon.dev) and [Brandfetch](https://brandfetch.com) CDNs

## Project Structure

```
portfolio/
├── index.html          # Main page
├── style.css           # Styles
├── script.js           # Scroll animations, nav toggle, form handler
├── config.js           # API keys (gitignored)
├── .env                # Environment reference (gitignored)
├── .gitignore
├── README.md
└── images/
    ├── 26040568.jpg    # Profile photo
    └── favicon/        # Favicon set for all platforms
```

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/buzzi0204/portfolio.git
   cd portfolio
   ```

2. Create a `config.js` file in the root (this file is gitignored):
   ```javascript
   const CONFIG = {
     WEB3FORMS_ACCESS_KEY: 'your-access-key-here',
   };
   ```
   Get a free access key at [web3forms.com](https://web3forms.com).

3. Open `index.html` in a browser.

## Customization

- **Content** — Edit sections directly in `index.html`
- **Styling** — Modify colors, spacing, and typography in `style.css`
- **Contact email** — Register a new email at Web3Forms and update the key in `config.js`
