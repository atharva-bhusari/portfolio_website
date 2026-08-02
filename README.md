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
├── script.js           # Entry point — wires up the js/ modules
├── config.js           # API keys (gitignored)
├── .env                # Environment reference (gitignored)
├── .gitignore
├── README.md
├── css/                 # One stylesheet per section, linked individually in index.html
│   ├── base.css         # Reset, typography, container
│   ├── navbar.css
│   ├── hero.css
│   ├── sections.css     # Shared .section/.section-title styles
│   ├── about.css
│   ├── skills.css
│   ├── experience.css   # Timeline
│   ├── projects.css
│   ├── education.css
│   ├── certifications.css
│   ├── contact.css
│   ├── footer.css
│   ├── animations.css   # Scroll fade-in
│   └── responsive.css   # Media queries
├── js/                  # ES modules imported by script.js
│   ├── nav.js            # Navbar scroll shadow + mobile toggle
│   ├── scrollAnimations.js
│   └── contactForm.js    # Web3Forms submit handler
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

3. `script.js` is an ES module, which browsers block from `file://` pages via CORS — serve the folder over HTTP instead of double-clicking `index.html`:
   ```bash
   npx serve .
   # or: python -m http.server 8000
   ```

### Vercel Deployment

The `config.js` file is gitignored, so Vercel generates it at build time using `vercel.json`.

1. Add an environment variable in **Vercel Dashboard > Settings > Environment Variables**:
   - Name: `WEB3FORMS_ACCESS_KEY`
   - Value: your access key from Web3Forms
2. Deploy — Vercel will automatically create `config.js` with your key during the build step.

## Customization

- **Content** — Edit sections directly in `index.html`
- **Styling** — Each section has its own file under `css/`; edit the relevant one (e.g. `css/projects.css` for the project cards)
- **Behavior** — Each concern has its own module under `js/`; `script.js` just imports and calls them
- **Contact email** — Register a new email at Web3Forms and update the key in `config.js`
