# Deploy to GitHub Pages

## Steps to Deploy

### 1. Build the Application
```bash
cd MBO_Homepage
npm run build
```

### 2. Fix Background Image Path (Post-Build Step)
After building, you need to fix the background.png path in the index.html:

**Option A - Manual Fix:**
Open `MBO_Homepage/dist/mbo-homepage/browser/index.html` and change:
```css
background:url(/background.png)
```
to:
```css
background:url(/testmbo.github.com/background.png)
```

**Option B - Automated Fix (PowerShell):**
```powershell
cd MBO_Homepage/dist/mbo-homepage/browser
(Get-Content index.html) -replace 'url\(/background\.png\)', 'url(/testmbo.github.com/background.png)' | Set-Content index.html
```

### 3. Copy Files to GitHub Pages Repository
Copy all files from:
```
MBO_Homepage/dist/mbo-homepage/browser/*
```

To your GitHub Pages repository root directory.

### 4. Commit and Push
```bash
cd /path/to/your/github-pages-repo
git add .
git commit -m "Deploy Angular app"
git push origin main
```

## Important Notes

- The `baseHref` and `deployUrl` are both set to `/testmbo.github.com/` in `angular.json`
- Your site should be accessible at: ``
- The background.png path needs manual fixing because inline CSS isn't processed by Angular's build
- Make sure all files from the `browser` folder are copied, including:
  - index.html (after fixing background path)
  - *.js files
  - *.css files
  - All image folders (Bilder, assets, etc.)
  - All other assets (ar_handy.jpg, qr_code.png, logos, etc.)

## Troubleshooting

If you still get 404 errors:
1. Make sure the base href matches your repository structure
2. Check that all files are in the correct location
3. Verify you fixed the background.png path in index.html
4. Check browser console for specific 404 errors

## Alternative: If using root domain

If you want to use `https://wifilast.github.io/` (root), change both settings in `angular.json`:

```json
"baseHref": "/",
"deployUrl": "/"
```

Then rebuild and redeploy (no need to fix background.png path).
