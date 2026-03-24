---
title: Configuration
description: Configure your YourSite project with yoursite.config.ts.
---

YourSite is configured through a `yoursite.config.ts` file in your project root.

## Basic configuration

```typescript
import { defineConfig } from '@yoursite/core';

export default defineConfig({
  name: 'my-app',
  port: 3000,
  database: {
    provider: 'sqlite',
    url: './data/dev.db',
  },
});
```

## Configuration options

### `name`

Your project name. Used in logs and the admin dashboard.

### `port`

The port for the development server. Defaults to `3000`.

### `database`

Database connection configuration:

```typescript
database: {
  provider: 'postgres',  // 'sqlite' | 'postgres' | 'mysql'
  url: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
}
```

### `auth`

Authentication configuration:

```typescript
auth: {
  providers: ['email', 'google', 'github'],
  session: {
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
}
```

### `edge`

Edge deployment settings:

```typescript
edge: {
  regions: ['us-east-1', 'eu-west-1', 'ap-southeast-1'],
  cache: {
    defaultTTL: 60,
  },
}
```

## Environment variables

YourSite automatically loads `.env` files. Use `process.env` to access variables:

```typescript
export default defineConfig({
  database: {
    url: process.env.DATABASE_URL,
  },
});
```
