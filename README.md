# vue-tutorial
- From Setting up `Development` to `Production` server.

## Installation

```bash
npm install 
npm run dev
```

### Fast Dev-server with `lighttpd`

Install with your fav. package-manager.

> pacman -S lighttpd

`$lighttpd_path -D -f dev.conf`

### Webpack Config.

- `Babel` > preset: Latest, Stage-2
- `Vue-Loader`
- `file-loader` > Unknown Character Problem.


### Event, Method naming Convention

- `Methods for Emit Event` => `Noun + Verb` (todoDelete)
- `Events` => with `on*` prefix (onTodoDelete)
- `Methods for *real* action` => `Verb + Noun` (deleteTodo)

Naming are based on `CRUD`
