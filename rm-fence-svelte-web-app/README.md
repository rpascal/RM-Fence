# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

### Tailwind
https://tailwindcss.com/docs/guides/sveltekit

```
npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p
mv postcss.config.js postcss.config.cjs
```

### SCSS
`npm i -D svelte-preprocess sass`
Then `Svelte: Restart Language Server`

### Material 
https://sveltematerialui.com/
- Github seems to have better docs

You need to install on components to get the theme generation to work
- `npm install --save-dev @smui/button`

```
npm install --save-dev smui-theme
npm install --save-dev smui-theme
npx smui-theme template src/theme
```
Add to package.json
`"generate-smui-theme": "smui-theme compile static/smui.css -i src/theme"`

Appears like you need to regenerate after adding each component to properly get the css

