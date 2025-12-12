# How to Install and Use ngrok (Internet Sharing)

## Step 1: Download ngrok

1. Visit: https://ngrok.com/download
2. Download for Windows
3. Extract the ZIP file
4. Copy `ngrok.exe` to a folder (e.g., `C:\ngrok\`)

## Step 2: Add to PATH (Optional but Recommended)

1. Copy ngrok.exe to: `C:\Windows\System32\`
   OR
2. Add ngrok folder to Windows PATH

## Step 3: Start Your Website Server

Make sure your server is running:
```powershell
npm run dev
```

## Step 4: Start ngrok Tunnel

Open a NEW terminal/command prompt and run:
```powershell
ngrok http 3000
```

## Step 5: Get Your Public URL

After running ngrok, you'll see something like:
```
Forwarding    https://abc123xyz.ngrok.io -> http://localhost:3000
```

**This is your shareable link!** Share this URL with your friend:
```
https://abc123xyz.ngrok.io
```

---

## Quick Method (Without Installation)

### Option A: Use npx (No Installation Needed)

Just run this command in a NEW terminal:
```powershell
npx ngrok http 3000
```

This will automatically download and run ngrok!

---

## Alternative: Use Cloudflare Tunnel (Free, No Signup)

```powershell
# Install cloudflared
winget install --id Cloudflare.cloudflared

# Run tunnel
cloudflared tunnel --url http://localhost:3000
```

---

## Alternative: Use localtunnel (No Installation)

```powershell
npx localtunnel --port 3000
```

---

## Recommended: Use npx ngrok (Easiest!)

Just open a NEW terminal window and run:
```powershell
npx ngrok http 3000
```

Then share the URL that appears!

