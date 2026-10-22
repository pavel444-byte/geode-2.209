# Geode 2.209 website

Independent project landing page. Buildless HTML, CSS, and JavaScript in `dist/`.

The site presents compatibility as a development goal, not a tested guarantee. It links to the project repository at https://github.com/pavel444-byte/geode-2.209 and labels upstream Geode separately.

Serve `dist/` with any static HTTP server. Source and deployment configuration are tracked in this Site's dedicated repository. No changes were made to the Geode loader or SDK.

Original crystal brand artwork was generated for this project. Space Grotesk is distributed under the SIL Open Font License; see `dist/assets/OFL.txt`.

## Deploy with Dokploy

1. Create a Dokploy application and connect `pavel444-byte/geode-2.209`, branch `main`. The website is in the `website/` directory.
2. Select **Dockerfile** as the build type. Use `website/` as the build context (build path) and the Dockerfile inside that directory. The Dockerfile expects `dist/` and `nginx.conf` in its build context.
3. Add your domain in Dokploy's web panel, using container port **8080**. Dokploy's Traefik handles the domain and HTTPS automatically.
4. Deploy. No Node build command, environment variables, database, or persistent volumes are required. The built-in container health check uses `/healthz`.

Local Docker check:

```sh
docker build -t geode-2209-site .
docker run --rm -p 8080:8080 geode-2209-site
```

Open http://localhost:8080. The image runs Nginx as the base image's non-root user to serve the static files. Only the `dist/` files and static server configuration enter the image. Traefik is managed by Dokploy; no custom Traefik configuration or labels are required.

For your own domain, update the absolute `og:image` URL in `dist/index.html`. All application links and assets use paths that work at the domain root. Dokploy publishes this website; the Docker image does not include or build the Geode game loader.
