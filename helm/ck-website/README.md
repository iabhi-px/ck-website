# ck-website Helm chart

Deploys the static CodeKarma website (built with Astro, served by nginx) to a
Kubernetes cluster — typically AWS EKS.

## Quick reference for the developer

### Build & push the Docker image

```sh
# from the repo root
docker build -t ck-website:latest .

# tag and push to AWS ECR (replace with your account/region/repo)
AWS_ACCOUNT=123456789012
AWS_REGION=us-east-1
ECR_REPO=ck-website

aws ecr get-login-password --region $AWS_REGION \
  | docker login --username AWS --password-stdin $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com

docker tag ck-website:latest $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:latest
docker push $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:latest
```

### Install / upgrade the chart

```sh
helm upgrade --install ck-website ./helm/ck-website \
  --namespace ck-website --create-namespace \
  --set image.repository=$AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO \
  --set image.tag=latest
```

For production, pass an overrides file:

```sh
helm upgrade --install ck-website ./helm/ck-website \
  -n ck-website --create-namespace \
  -f values.prod.yaml
```

## What you get

- **Deployment**: 2 replicas of nginx serving the static site (configurable).
- **Service**: ClusterIP on port 80 → container port 8080.
- **Ingress**: AWS ALB by default (`ingress.className: alb`). Switch to
  `nginx` if using the nginx-ingress controller.
- **HPA**: Optional CPU-based autoscaling (`autoscaling.enabled: true`).
- **Probes**: Liveness/readiness on `/healthz` (defined in `nginx.conf`).
- **Security**: Runs as non-root, drops all Linux capabilities.

## Test locally before deploying

```sh
docker build -t ck-website:dev .
docker run --rm -p 8080:8080 ck-website:dev
# open http://localhost:8080
```
