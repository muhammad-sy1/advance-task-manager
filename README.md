# Test Task App

A modern, feature-rich task management application built with React, TypeScript, and Vite. Organize your tasks efficiently with an intuitive interface and powerful features.

## Description

Test Task App is a productivity-focused todo application that helps you manage your daily tasks effectively. Built with modern web technologies, it offers a seamless user experience with features like task filtering, dark/light themes, form validation, and smooth animations.

## Features

- **Task Management**: Create, read, update, and delete tasks
- **Task Filtering**: Filter tasks by status (All, Active, Completed)
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing
- **Form Validation**: Input validation using Zod schema validation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Polished user experience with Framer Motion animations
- **Toast Notifications**: Real-time feedback with sonner notifications

## Installation Instructions

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Steps

1. **Clone the repository**

```
bash
git clone <repository-url>
cd test-task
```

2. **Install dependencies**

Using pnpm (recommended):

```
bash
pnpm install
```

Or using npm:

```
bash
npm install
```

3. **Start the development server**

```
bash
pnpm dev
```

The application will be available at `http://localhost:5173`

4. **Build for production**

```
bash
pnpm build
```

5. **Preview production build**

```
bash
pnpm preview
```

## Usage Instructions

### Creating a Task

1. Click on the "Add Task" button or navigate to the tasks page
2. Fill in the task title (required, minimum 3 characters)
3. Optionally add a description
4. Click "Add Task" to create the task

### Managing Tasks

- **Mark as Complete**: Click the checkbox next to a task
- **Edit Task**: Click the edit icon on a task card
- **Delete Task**: Click the delete icon and confirm the action
- **Filter Tasks**: Use the filter buttons to view All, Active, or Completed tasks

### Theme Toggle

Click the theme toggle button in the navigation bar to switch between light and dark modes.

## Technologies Used

### Frontend

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Zustand** - State management

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Form & Validation

- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Development Tools

- **ESLint** - Code linting
- **pnpm** - Package manager

## Contributing Guidelines

We welcome contributions to improve Test Task App! Here's how you can contribute:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**

```
bash
git checkout -b feature/your-feature-name
```

3. **Make your changes**

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic

4. **Run tests and linting**

```
bash
pnpm lint
```

5. **Commit your changes**

```
bash
git commit -m "Add your feature description"
```

6. **Push to your fork**

```
bash
git push origin feature/your-feature-name
```

7. **Create a Pull Request**

### Code Style Guidelines

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Write clean, modular code
- Add JSDoc comments for complex functions

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists
2. Create a detailed issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
MIT License

Copyright (c) 2024 Test Task App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contact Information

For questions, suggestions, or feedback, please reach out:

- **GitHub Issues**: [Create an issue](https://github.com/your-repo/issues)
- **Email**: your.email@example.com

---

Thank you for using Test Task App! 🚀
