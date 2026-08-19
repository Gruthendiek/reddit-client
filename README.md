# Reddit Explorer

Reddit Explorer is a React and Redux client for browsing a mock Reddit popular-feed dataset. It provides searchable, sortable posts, subreddit filtering, post details, pagination, and a dark/light theme toggle.

## Live Demo

[View the deployed application](https://redditexp.netlify.app/)

## Features

* Browse the popular Reddit feed with loading and error states.
* Search posts by title, subreddit, author, or content.
* Sort posts by Best, Hot, New, or Top.
* Filter by the available subreddit categories in the sidebar.
* Open a post detail modal and close it with the close button, backdrop, or Escape.
* Load more posts in pages of ten.
* Switch between dark and light themes. The application starts in dark mode.
* Responsive layout that hides the sidebar on smaller screens.

## Requirements

* Node.js 18 or newer
* npm

## Getting Started

```bash
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

## Available Commands

| Command            | Description                                         |
| ------------------ | --------------------------------------------------- |
| `npm run dev`      | Start the Vite development server.                  |
| `npm run build`    | Build the application for production.               |
| `npm run preview`  | Preview the production build locally.               |
| `npm run lint`     | Run ESLint across the project.                      |
| `npm test`         | Run Jest and React Testing Library component tests. |
| `npm run test:e2e` | Run Playwright end-to-end tests.                    |

Playwright uses a local Vite server on `http://127.0.0.1:4173`. Install its browser once if needed:

```bash
npx playwright install chromium
```

## Testing

Component tests are written with Jest and React Testing Library.

End-to-end tests are written with Playwright and are located in `tests/e2e/`.

Run the component tests with:

```bash
npm test
```

Run the end-to-end tests with:

```bash
npm run test:e2e
```

## Project Structure

```text
src/
    app/store.js                 Redux store configuration
    components/                  Header, sidebar, feed, post, and modal UI
    features/posts/postsSlice.js Post state, filtering inputs, and async loading
    services/redditApi.js        Reddit mock-data request
    utilities/timeAgo.js         Relative post-time formatting
    App.jsx                      Application layout and local UI state
    index.css                    Global theme variables and layout defaults
tests/e2e/                       Playwright browser tests
mock-data/popular.json           Local reference dataset
```

## Wireframe

The application was planned using a desktop and mobile wireframe before development.

[View the wireframe](./reddit-client_page_layout.txt)

## Data Source

The application retrieves a mock Reddit popular-feed dataset hosted in the project's GitHub repository. The data is fetched from `mock-data/popular.json` through `src/services/redditApi.js` and transformed into the post structure used by the application.

For offline development or changes to the feed, update `mock-data/popular.json` and keep its Reddit listing structure intact.

## Technologies Used

* React
* Redux Toolkit
* React Redux
* JavaScript
* HTML5
* CSS3
* Vite
* Jest
* React Testing Library
* Playwright
* Git/GitHub

## Production Build

Create and preview a production build with:

```bash
npm run build
npm run preview
```
