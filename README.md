# Cloud Catalog

An Express application that serves the Enterprise Cloud Service Catalog and two JSON endpoints. Student: Annanya Gogia · Roll Number: 2648013.

## Run locally

```sh
npm install
npm start
```

Open <http://localhost:8080>. The API routes are `/api/services` and `/api/status`.

## Local and Vercel ports

Locally, Node.js starts this Express application on port 8080 whenever no `PORT` environment variable is set. This predictable default lets developers open `http://localhost:8080` during development. On Vercel, the platform supplies a `PORT` value for the running application. The server reads `process.env.PORT` first and listens there, rather than assuming port 8080 is available. This keeps one codebase compatible with both environments: local development uses the fallback, while production follows Vercel's runtime configuration. Vercel routes web requests to the deployed Express function. Its assigned port is managed internally, so visitors use the public Vercel domain instead of entering a port number.

## Deployment

Import this repository into Vercel and deploy with the default Node.js settings. Vercel detects the root `server.js` Express entry point. The `public` directory contains the static landing page; the Express static middleware also serves it when running locally.
