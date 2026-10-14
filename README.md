# xzor todo sample

A small todo app written with [xzor](https://github.com/pedro-gilmora/source-crafter-xzor): Blazor-style `.xzor` components compiled to typed TypeScript.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/pedro-gilmora/xzor-todo-sample?quickstart=1)

## Try it in the browser

Click the badge above. The codespace installs everything, starts `bun run dev`, and opens the running app in a preview tab next to the code. Edit any `.xzor` file, save, and reload the preview.

## Run it locally

```sh
bun install
bun run dev     # builds, rebuilds on every save and serves the app: open the printed URL
```

## What's inside

| File | What it shows |
|---|---|
| `pages/Todos.xzor` | A page (`@page "/"`), `@inject`, `@bind`, `@for` with `@key`, events, conditionals |
| `components/TodoItem.xzor` | A component with props and `EventCallback`s |
| `pages/About.xzor` | A second page |
| `Routes.xzor`, `layouts/Layout.xzor` | Client routing, a layout with `@slot`, `NavLink` |
| `services/todos.ts` | The data, kept in `localStorage` and injected as a singleton |
| `main.ts` | The entry: `@Mount(Routes, "app")` and the service registration |
| `.devcontainer/` | The Codespaces setup |
