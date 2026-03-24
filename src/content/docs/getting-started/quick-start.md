---
title: Quick Start
description: Get up and running with YourSite in under 5 minutes.
---

This guide will have you running a YourSite project locally in under 5 minutes.

## Create a new project

```bash
npm install -g @yoursite/cli
yoursite init my-app
cd my-app
```

## Start the development server

```bash
yoursite dev
```

Your app is now running at `http://localhost:3000`.

## Create your first route

Create a file at `src/routes/hello.ts`:

```typescript
import { defineRoute } from '@yoursite/core';

export default defineRoute({
  method: 'GET',
  path: '/hello',
  handler: async (ctx) => {
    return ctx.json({
      message: 'Hello, world!',
      timestamp: new Date().toISOString(),
    });
  },
});
```

Visit `http://localhost:3000/hello` to see the response.

## Deploy

When you're ready to go live:

```bash
yoursite deploy
```

That's it — your app is now live on the edge.

## Next steps

- Read the [Installation](/getting-started/installation) guide for detailed setup options
- Learn about [Core Concepts](/guides/core-concepts)
- Browse the [API Reference](/reference/overview)
