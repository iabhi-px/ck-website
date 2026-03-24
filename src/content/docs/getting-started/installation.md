---
title: Installation
description: Detailed installation instructions for all platforms and environments.
---

## System requirements

- **Node.js** 18.0 or later
- **npm** 9.0 or later (or pnpm / yarn)
- macOS, Windows, or Linux

## Install the CLI

The recommended way to work with YourSite is through the CLI:

```bash
npm install -g @yoursite/cli
```

Verify the installation:

```bash
yoursite --version
```

## Create a project

### Using the CLI (recommended)

```bash
yoursite init my-project
```

The CLI walks you through template selection and configuration.

### Using a starter template

```bash
npx degit yoursite/starter-typescript my-project
cd my-project
npm install
```

## Project structure

A new YourSite project looks like this:

```
my-project/
├── src/
│   ├── routes/       # API endpoints
│   ├── models/       # Database models
│   ├── middleware/    # Request middleware
│   └── index.ts      # Entry point
├── yoursite.config.ts
├── package.json
└── tsconfig.json
```

## Editor setup

We recommend VS Code with the YourSite extension for the best experience:

- Inline type hints for route handlers
- Auto-completion for configuration
- Database model validation

## Troubleshooting

### Permission errors on macOS

If you get `EACCES` errors when installing globally, configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Node.js version

If you encounter unexpected errors, verify your Node version:

```bash
node --version  # Should be 18.0+
```
