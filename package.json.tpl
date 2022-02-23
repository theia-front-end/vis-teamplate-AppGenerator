{
  "projectName":"{{{ projectName }}}",
  "private": true,
  "scripts": {
    "start": "vis dev",
    "build": "vis build",
    "gpage": "create-vis-app page",
    "gcom": "create-vis-app com",
    "prettier": "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
    "set-svnignore": "svn propset svn:global-ignores -F .svnignore ."
  },
  "dependencies": {
    "@sl-theia/theia-utils": "1.x",
    "@sl-theia/full-screen": "1.x",
    "@sl-theia/vis": "^1.x",
    "@types/react-countup": "^4.3.1",
    "axios": "^0.21.1",
    "react-countup": "^5.2.0"
  },
  "devDependencies": {
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "prettier": "^2.5.0",
    "react": "17.x",
    "react-dom": "17.x",
    "typescript": "^4.x"
  }
}
