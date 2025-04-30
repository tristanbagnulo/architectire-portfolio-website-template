# Architecture Portfolio Website

This is a simple, elegant portfolio website for showcasing architectural projects. It's built with Next.js and Sanity.io, allowing for easy content management without any coding knowledge.

## Features

- **User-friendly content management** through Sanity Studio
- **Responsive design** that looks great on all devices
- **Project showcase** with detailed project pages
- **Image galleries** to highlight your work
- **Modern, clean design** focused on visual content

## For Website Owners

### How to Update Content

1. Navigate to your website URL + "/studio" (e.g., yourdomain.com/studio)
2. Log in with your Sanity credentials
3. From the Sanity Studio, you can:
   - Add new projects
   - Edit existing projects
   - Upload images
   - Update text content
   - Feature selected projects on the homepage

### Adding a New Project

1. Go to the Sanity Studio (/studio)
2. Click on "Projects" in the sidebar
3. Click the "Create new" button
4. Fill in the project details:
   - **Title**: The name of your project
   - **Slug**: Auto-generated from the title (used for the URL)
   - **Main Image**: The primary image for the project (will appear on cards and at the top of the project page)
   - **Images**: Additional images for the project gallery
   - **Description**: Text describing the project
   - **Client**: The client's name (optional)
   - **Location**: Where the project is located
   - **Year**: When the project was completed
   - **Categories**: What type of project it is (residential, commercial, etc.)
   - **Featured**: Toggle this to make the project appear on the homepage
5. Click "Publish" when you're ready to make the project live

### Editing or Deleting a Project

1. Go to the Sanity Studio (/studio)
2. Click on "Projects" in the sidebar
3. Find the project you want to edit in the list
4. Click on it to edit, or use the menu (•••) to delete

## Technical Information (For Developers)

### Built With

- [Next.js](https://nextjs.org/) - React framework for the frontend
- [Sanity.io](https://www.sanity.io/) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### Deployment Options

This site can be deployed on:

1. **Vercel** (recommended) - Seamless deployment, excellent for Next.js
2. **Netlify** - Another great option with a simple setup
3. **Any hosting provider** that supports Node.js applications

### Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
