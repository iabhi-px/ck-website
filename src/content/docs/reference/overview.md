---
title: API Reference Overview
description: Complete API reference for all YourSite modules.
---

This section provides detailed API documentation for every YourSite module.

## Core modules

### `@yoursite/core`

The main framework module. Provides route definitions, middleware, and the context API.

```typescript
import {
  defineRoute,
  defineMiddleware,
  defineConfig,
} from '@yoursite/core';
```

**Key exports:**

| Export | Description |
|---|---|
| `defineRoute()` | Define an HTTP route handler |
| `defineMiddleware()` | Define request middleware |
| `defineConfig()` | Define project configuration |
| `createApp()` | Create an application instance |

### `@yoursite/db`

Database ORM with type-safe queries.

```typescript
import { defineModel, query } from '@yoursite/db';
```

**Key exports:**

| Export | Description |
|---|---|
| `defineModel()` | Define a database model |
| `query()` | Create a type-safe query |
| `migrate()` | Run database migrations |
| `seed()` | Run database seeds |

### `@yoursite/auth`

Authentication and authorization.

```typescript
import { defineAuth, requireAuth } from '@yoursite/auth';
```

**Key exports:**

| Export | Description |
|---|---|
| `defineAuth()` | Configure authentication |
| `requireAuth()` | Middleware to require authentication |
| `requireRole()` | Middleware to require a specific role |

## CLI commands

| Command | Description |
|---|---|
| `yoursite init` | Create a new project |
| `yoursite dev` | Start development server |
| `yoursite build` | Build for production |
| `yoursite deploy` | Deploy to edge |
| `yoursite db push` | Push schema changes |
| `yoursite db migrate` | Run migrations |
| `yoursite env set` | Set environment variable |
