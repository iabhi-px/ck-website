---
title: Deployment
description: Deploy your YourSite application to production.
---

YourSite applications can be deployed to the edge with a single command or self-hosted on your own infrastructure.

## Edge deployment (recommended)

### Deploy with the CLI

```bash
yoursite deploy
```

This builds your application, uploads it to the YourSite edge network, and provides you with a production URL.

### Environment variables

Set production environment variables:

```bash
yoursite env set DATABASE_URL="postgres://..."
yoursite env set API_KEY="sk-..."
```

### Custom domains

Connect a custom domain:

```bash
yoursite domains add api.yourdomain.com
```

Follow the DNS instructions to point your domain to the edge network.

## Self-hosted deployment

### Docker

YourSite provides an official Docker image:

```dockerfile
FROM yoursite/runtime:latest
COPY . /app
RUN yoursite build
EXPOSE 3000
CMD ["yoursite", "start"]
```

### Node.js

Build and run directly:

```bash
yoursite build
node dist/server.js
```

## CI/CD

### GitHub Actions

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx yoursite deploy
        env:
          YOURSITE_TOKEN: ${{ secrets.YOURSITE_TOKEN }}
```

## Monitoring

After deployment, monitor your application at `dashboard.yoursite.com`:

- Request latency and throughput
- Error rates and logs
- Database query performance
- Edge cache hit rates
