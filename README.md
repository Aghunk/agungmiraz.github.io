<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Agung Miraz - IT Portfolio

Portfolio profesional IT Hardware & Technical Support.

## Cara Deploy ke GitHub Pages

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "Fix deployment paths"
   git push origin main --force
   ```

2. **Aktifkan GitHub Actions**:
   - Buka repositori di GitHub.
   - Pergi ke **Settings** > **Pages**.
   - Di bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.

3. **Cek Hasil**:
   - Website akan tersedia di `https://aghunk.github.io/`
   - Pastikan cek tab **Actions** di GitHub untuk melihat proses deployment.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
