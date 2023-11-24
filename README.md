# Preact, TypeScript, Vite, @benchristel/taste

## Setup

1. Click the "Use this template" button on GitHub
2. Clone the created repo
3. If this is your first ever JavaScript project, welcome! See [setting up a JavaScript development environment](https://gist.github.com/benchristel/ede6615bf1c6cf91fd5cda70f02f57d7) to get started.
4. Run the one-time setup script to install dependencies and git hooks:
   ```
   yarn setup
   ```

## Development

### Server and Typechecker

```
yarn dev
yarn ts
```

- Opening the project in **Visual Studio Code** automatically starts the dev server and `typescript` typechecker.
- The dev server runs at http://localhost:5173 (the port number is `vite` in 1337... sort of).
- Output appears in the terminal pane (accessed via `ctrl+~`).
- Type errors also show up in the problems pane (`ctrl+shift+M`).
- The server and typechecker stop automatically when VS Code quits.

### Tests

- **Tests** run in the browser. The test report appears at the top of the screen.
- The page will refresh (re-running the tests) whenever you save a file.
- The tests and test report are completely removed from production builds.
- You can write tests in-source, or in files named `*.test.*`, e.g. `example.test.ts`. The test file pattern is configured in `src/test-results.ts`.

The test framework is `@benchristel/taste`. For more information, see [@benchristel/taste on NPM](https://www.npmjs.com/package/@benchristel/taste).

### Formatting

- Files get auto-formatted when you commit, so you'll never check in inconsistently-formatted code. To disable this behavior, delete `.husky/pre-commit`.
- To format all files, run `yarn format`.
- The code formatter is `prettier`. See `.prettierrc` for configuration.

## Building for production

```
yarn build
```

This outputs files in the `dist` directory, which is symlinked to `docs`
for easy deployment to GitHub Pages.

To [smoketest](<https://en.wikipedia.org/wiki/Smoke_testing_(electrical)>) your production build locally before deploying it, run:

```
yarn smoke
```

This runs an HTTP server (via [`vite preview`](https://vitejs.dev/guide/cli.html#vite-preview)) and opens the built app in your browser.

## Deploying

To deploy your built app to GitHub Pages, go to the `Pages` tab of your repo's settings and change the directory to deploy from to `/docs`.

This template repo is deployed at https://benchristel.github.io/preact-typescript-vite-taste/
