# Copilot Instructions

## 🚀 Overview

This is a modern Angular application (v21+) built using the Angular CLI. It utilizes standalone components, which is the default from Angular 17 onwards. The main application entry point is `src/main.ts`, which bootstraps the root `App` component.

## 🏗️ Architecture

- **Standalone Components:** The application is built entirely with standalone components. When creating new components, ensure they are `standalone: true` and import their dependencies directly.
- **Routing:** The application's routing is defined in `src/app/app.routes.ts`. When adding new features that require a new page, add the route to this file.
- **Configuration:** Application-level providers and configuration are located in `src/app/app.config.ts`.
- **Styling:** The project uses SCSS for styling. Global styles are in `src/styles.scss`, and component-specific styles should be defined in their respective `.scss` files.

## 💻 Developer Workflow

### Running the Application

- To start the development server, run `npm start` or `ng serve`. The application will be available at `http://localhost:4200/`.

### Building the Application

- To create a production build, run `npm run build`. The output will be in the `dist/` directory.

### Testing

- To run unit tests, use `npm test`.

### Code Generation

- Use the Angular CLI to generate new components, services, etc. For example, to create a new standalone component:
  ```bash
  ng generate component my-new-component --standalone
  ```

## 📝 Conventions

- **Formatting:** The project uses Prettier for code formatting. Please ensure your code is formatted before committing. The configuration is in `package.json`.
- **Component Naming:** Use PascalCase for component class names (e.g., `MyNewComponent`) and kebab-case for file names (e.g., `my-new-component.component.ts`).
