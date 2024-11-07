# Next.js Bootstrap Boilerplate

This is an open-source Next.js project bootstrapped with `create-next-app`, configured with Bootstrap for rapid UI development. This boilerplate provides a foundation for building responsive and modern web applications using Next.js and Bootstrap.

## Getting Started

To run the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

You can start editing the page by modifying `app/page.tsx`. The page will automatically update as you save your changes.

## Features

- **Next.js 13** with `app` directory for an optimized developer experience
- **Bootstrap** integration for rapid, responsive UI development
- **Customizable Components**: Reusable, pre-built Bootstrap components integrated with React
- **Geist Font**: Using `next/font` for optimized font loading, featuring Geist by Vercel

## Upcoming Features

- **Storybook**: Component-driven development and UI testing, enabling isolated testing and documentation of components.
- **Cypress**: End-to-end testing for robust application testing, ensuring reliability.
- **Dark Mode Toggle**: Built-in dark mode toggle integrated with Bootstrap's theme utilities, enhancing user experience.
- **Internationalization (i18n)**: Multi-language support using `next-i18next`, making the app ready for a global audience.
- **Prettier & ESLint Configurations**: Enforced code formatting and linting for a consistent codebase and enhanced collaboration.
- **CI/CD with GitHub Actions**: Automated testing, linting, and deployment to streamline development and ensure quality.
- **Docker Support**: Docker configuration for consistent development and production environments.
- **PWA Support**: Progressive Web App capabilities to enable offline access and improved performance on mobile.

## Project Structure

The boilerplate includes:
- `bootstrap/` - Custom Bootstrap components integrated with React
- `hooks/` - Custom hooks for managing Bootstrap functionality (e.g., `useToast`)
- `app/` - Root Next.js app directory for managing pages and layouts

## Custom Hooks

### useToast
This hook provides a reusable toast notification feature, allowing you to show and hide Bootstrap-styled toast messages from any part of the app.

```typescript
const { showToast, hideToast, ToastComponent } = useToast({
  title: "Notification Title",
  children: "This is a toast message.",
});

// Use showToast() to display the toast and hideToast() to hide it.
```

## Learn More

To learn more about Next.js and Bootstrap, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Bootstrap Documentation](https://getbootstrap.com/docs) - Learn about Bootstrap components and customization.

## Deployment

The easiest way to deploy your Next.js app is using the Vercel platform, created by the makers of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open-source and licensed under the MIT License.