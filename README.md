# Kedarnath Bhat - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full Stack Developer.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons and symbols
- **Google Fonts**: Typography (Inter font family)

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be available at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify

1. **Drag and Drop Method:**
   - Go to [netlify.com](https://netlify.com)
   - Drag your portfolio folder to the deployment area
   - Your site will be live instantly with a random URL
   - You can customize the domain name in settings

2. **GitHub Integration:**
   - Connect your GitHub repository to Netlify
   - Every push to main branch will auto-deploy
   - Go to [netlify.com](https://netlify.com) → "New site from Git"
   - Choose GitHub and select your repository
   - Deploy settings: Build command (leave empty), Publish directory: `/`

### Option 3: Vercel

1. **GitHub Integration:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select your portfolio repository
   - Deploy with default settings
   - Your site will be live with automatic deployments

### Option 4: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize and Deploy:**
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

## Local Development

1. **Clone or download the project files**
2. **Open index.html in your browser** or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization

### Personal Information
- Update contact details in the HTML file
- Replace placeholder project information with your actual projects
- Add your real social media links
- Update the education and experience sections

### Styling
- Modify colors in `styles.css` (look for color variables)
- Change fonts by updating the Google Fonts import
- Adjust spacing, sizes, and layout as needed

### Content
- Add your actual project screenshots to replace placeholder icons
- Update project descriptions and technologies used
- Add more skills or remove ones you don't use
- Customize the about section with your story

## Performance Tips

- **Optimize Images**: Use WebP format for better compression
- **Minify CSS/JS**: Use tools like UglifyJS and clean-css for production
- **Use CDN**: Consider using a CDN for Font Awesome and Google Fonts
- **Enable Compression**: Most hosting platforms enable gzip compression automatically

## SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy
- Fast loading times
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact Form Integration

The contact form currently shows a success message without actually sending emails. To make it functional:

1. **Use Netlify Forms** (if deployed on Netlify):
   - Add `netlify` attribute to the form tag
   - Add `data-netlify="true"` to enable form handling

2. **Use Formspree**:
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action with your Formspree endpoint

3. **Use EmailJS**:
   - Sign up at [emailjs.com](https://emailjs.com)
   - Add EmailJS SDK and configure with your service

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help with deployment or customization, feel free to reach out:
- Email: kedarnathbhat456@gmail.com
- LinkedIn: [linkedin.com/in/kedarnath-bhat](https://linkedin.com/in/kedarnath-bhat)

---

**Made with ❤️ by Kedarnath Bhat**