---
title: Core Concepts
description: Understand the fundamental concepts behind YourSite.
---

This page covers the key concepts you'll encounter when building with YourSite.

## Routes

Routes are the foundation of every YourSite application. Each route is a TypeScript file that defines an HTTP endpoint:

```typescript
import { defineRoute } from '@yoursite/core';

export default defineRoute({
  method: 'GET',
  path: '/users/:id',
  handler: async (ctx) => {
    const user = await ctx.db.users.findById(ctx.params.id);
    return ctx.json(user);
  },
});
```

Routes are automatically discovered from the `src/routes/` directory.

## Models

Models define your database schema with full TypeScript support:

```typescript
import { defineModel } from '@yoursite/db';

export const User = defineModel('users', {
  id: 'uuid',
  email: 'string',
  name: 'string',
  createdAt: 'datetime',
});
```

## Middleware

Middleware runs before your route handlers, useful for authentication, logging, and request validation:

```typescript
import { defineMiddleware } from '@yoursite/core';

export const auth = defineMiddleware(async (ctx, next) => {
  const token = ctx.headers.get('authorization');
  if (!token) return ctx.error(401, 'Unauthorized');
  ctx.user = await verifyToken(token);
  return next();
});
```

## Context object

Every route handler receives a context object (`ctx`) that provides access to:

- `ctx.params` — URL parameters
- `ctx.query` — Query string parameters
- `ctx.body` — Parsed request body
- `ctx.db` — Database client
- `ctx.json()` — Send a JSON response
- `ctx.error()` — Send an error response
