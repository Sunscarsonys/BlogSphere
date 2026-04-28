# React Blog Application

A production-ready blog app built with Vite + React, using Redux Toolkit for blog post data and Context API for toast notifications.

## Project Overview

This app provides a complete blog workflow:
- Create, read, update, and delete blog posts
- Like posts with quick visual feedback
- Search by title and sort by latest or most liked
- Persist posts in localStorage
- Navigate seamlessly with React Router

## Features

- Blog list with responsive card grid (1/2/3 columns by breakpoint)
- Detailed single post view
- Add and edit forms with validation
- Delete confirmation before removal
- Like interactions with toast notifications
- Empty state for first-time use
- Modern Tailwind UI (gradient headers, rounded-2xl cards, shadows, hover effects)

## Tech Stack

- React (Vite + JavaScript)
- Redux Toolkit + React Redux
- Context API
- React Router DOM
- Tailwind CSS
- localStorage

## Folder Structure

```text
src/
  app/
    store.js

  features/
    posts/
      postsSlice.js

  components/
    Navbar.jsx
    BlogCard.jsx
    BlogList.jsx
    BlogForm.jsx
    BlogDetails.jsx

  pages/
    Home.jsx
    AddPost.jsx
    EditPost.jsx
    PostDetails.jsx

  context/
    NotificationContext.jsx

  utils/
    localStorage.js

  App.jsx
  main.jsx
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Redux vs Context (Separation of Responsibilities)

- Redux Toolkit:
  - Used only for blog post domain state (`posts`)
  - Handles post CRUD and likes through `postsSlice`
  - Centralized updates via reducers/actions

- Context API:
  - `NotificationContext`: toast notification rendering + lifecycle

This keeps business/domain data in Redux and UI cross-cutting concerns in Context, with no responsibility overlap.

## LocalStorage Strategy

- Posts:
  - Loaded on app startup using `loadPostsFromStorage()`
  - Saved on every store update via `store.subscribe(...)`

## Deployment (Azure Static Web Apps)

1. Push this project to a GitHub repository.
2. In Azure Portal, create a **Static Web App**.
3. Connect the GitHub repo/branch.
4. Use build settings:
   - App location: `/`
   - API location: *(leave empty if no API)*
   - Output location: `dist`
5. Azure will run `npm install` and `npm run build` automatically.
6. After deployment, verify routes (`/`, `/add`, `/edit/:id`, `/post/:id`) work correctly.

## Public URL

`https://<your-app-name>.azurestaticapps.net` (replace with actual deployed URL)

## Assumptions

- Browser environment supports `crypto.randomUUID()`
- Persistence is browser-local only (no backend/database)
- Single-user local usage model
- Toast notifications are transient and non-blocking
