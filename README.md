# Mohd Aqdas Farooqui - Portfolio Website

A modern, futuristic portfolio website built with React and Vite, showcasing AI & ML engineering projects and skills.

## 🚀 Features

- **Modern Design**: Clean, futuristic UI with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Sections Included**:
  - Hero/Home with animated elements
  - About with education details
  - Skills with interactive progress bars
  - Projects showcase
  - Internship opportunities
  - Contact form with validation
  - Footer with social links

## 🛠️ Technologies Used

- React 18
- Vite
- CSS3 (with custom animations and gradients)
- JavaScript ES6+

## 📦 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized build in the `dist` folder.

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment to Lovable.app

To deploy this website to `https://preview--aqdas-ai-folio.lovable.app/`:

### Option 1: Using Lovable Platform
1. Go to [Lovable.app](https://lovable.app)
2. Create a new project or import existing
3. Connect your repository or upload the project files
4. Lovable will automatically build and deploy

### Option 2: Manual Build & Deploy
1. Build the project:
   ```bash
   npm run build
   ```
2. The `dist` folder contains all production files
3. Upload the contents of `dist` folder to your Lovable project

### Option 3: GitHub Integration
1. Push this code to a GitHub repository
2. Connect the repository to Lovable
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Lovable will auto-deploy on each push

## 📁 Project Structure

```
aqdas-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Opportunities.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🎨 Customization

### Colors
The main color scheme is defined in `src/index.css`:
- Primary: `#00d9ff` (Cyan)
- Secondary: `#00ff88` (Green)
- Dark: `#000000`
- Light: `#ffffff`

### Content
Update personal information in the respective component files:
- Contact details: `Contact.jsx`, `Footer.jsx`
- Projects: `Projects.jsx`
- Skills: `Skills.jsx`
- About: `About.jsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Mohd Aqdas Farooqui**
- Email: aqdasalifarooqui41@gmail.com
- LinkedIn: [mohd-aqdas-farooqui-636a42332](https://linkedin.com/in/mohd-aqdas-farooqui-636a42332)
- GitHub: [@Mohdaqdas05](https://github.com/Mohdaqdas05)

---

Built with ❤️ and React
