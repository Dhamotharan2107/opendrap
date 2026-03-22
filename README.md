
  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev:all` to start frontend + API together in one terminal.

  Or run separately:
  - `npm run dev:api` for API server
  - `npm run dev` for frontend

  Open `http://localhost:5173/developer` to view contact submissions.
  
for cloudflared pages for main 
  npm run build && npx wrangler pages deploy dist --project-name=opendrap --commit-dirty=true
for production 
  npm run build && npx wrangler pages deploy dist --project-name=opendrap --branch=production
