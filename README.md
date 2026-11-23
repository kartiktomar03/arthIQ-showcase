# Living Ledger showcase

Build from the repository root with Node.js 22 or later. The static build uses only Node built-ins. Each local URL is relative to the HTML document, so the same output works at localhost and the case-sensitive GitHub project path `/arthIQ-showcase/`.

```powershell
node build.mjs
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open <http://127.0.0.1:4173/>. The build copies three static files, two existing brand assets and three curated screenshots. Use a fresh output directory for distribution. GitHub Actions builds in a clean checkout and uploads only `dist`.

## Media

The gallery uses the application's existing Playwright fixture captures under `assets/`. To update one, replace the PNG, review the displayed content and rebuild. For a new capture, add its filename to the build allowlist and gallery, describe the actual content in its alt text and caption, and check the enlarged view on mobile. If adding a recorded walkthrough later, use a captioned video with native controls, a real poster frame and an accessible transcript. Add media only after reviewing it for credentials and private data.

## Publishing

In the repository's **Settings → Pages → Build and deployment**, choose **GitHub Actions**. Merge the showcase files and workflow into `main` when publication is approved. The workflow builds the static artifact and deploys to <https://kartiktomar03.github.io/arthIQ-showcase/>. It can also be run manually from Actions on main.

Application source and setup: https://github.com/kartiktomar03/arthIQ
