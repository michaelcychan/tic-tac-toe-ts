# Project Setup

## Start React Project in TypeScript

```bash
npx create-react-app <project_name> --template typescript
```

## Add gh-pages package for GitHub Page publishing

```bash
npm install gh-pages --save-dev
```

## Configure package.json file

```json
// add
"homepage": "https://<github_username>.github.io/<project_name>",

"script": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
}
```
