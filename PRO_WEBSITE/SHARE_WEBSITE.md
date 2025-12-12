# How to Share Your Website

## Current Status
✅ Development server is running on port 3000

## Website Links

### For You (Local):
```
http://localhost:3000
```

### For Friends on Same Network:
```
http://192.168.0.132:3000
```
*Note: Friend must be on the same Wi-Fi network*

---

## Sharing Options

### Option 1: Same Wi-Fi Network (Easiest)
1. Make sure your friend is connected to the same Wi-Fi network
2. Share this link: `http://192.168.0.132:3000`
3. They can open it in their browser

**Requirements:**
- Both devices on same Wi-Fi
- Windows Firewall may need to allow port 3000

### Option 2: Share Over Internet (Using ngrok)

If your friend is on a different network, use ngrok:

1. **Install ngrok:**
   - Download from: https://ngrok.com/download
   - Or use: `winget install ngrok` (Windows)

2. **Start ngrok tunnel:**
   ```powershell
   ngrok http 3000
   ```

3. **Share the ngrok URL:**
   - You'll get a URL like: `https://abc123.ngrok.io`
   - Share this URL with your friend
   - Works from anywhere in the world!

### Option 3: Deploy to Production (Permanent Solution)

For a permanent, professional website:

#### A. Vercel (Recommended - Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- Free hosting
- Automatic HTTPS
- Custom domain support
- Fast CDN

#### B. Netlify (Free)
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

#### C. GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be live at: `https://yourusername.github.io/PRO_WEBSITE`

---

## Quick Share Commands

### Check if server is running:
```powershell
netstat -ano | Select-String ":3000"
```

### Start server (if not running):
```powershell
npm run dev
```

### Get your local IP:
```powershell
Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -like "192.168.*" }
```

---

## Troubleshooting

### Friend can't access on same network?
1. Check Windows Firewall:
   - Allow port 3000 through firewall
   - Or temporarily disable firewall for testing

2. Check if server is accessible:
   - Try: `http://192.168.0.132:3000` on your own device (not localhost)

3. Verify IP address:
   - Run: `ipconfig` and check IPv4 address

### For Internet sharing:
- Use ngrok (Option 2) - easiest for temporary sharing
- Or deploy to Vercel/Netlify (Option 3) - best for permanent solution

---

## Current Server Status
- ✅ Server running on port 3000
- ✅ Local IP: 192.168.0.132
- ✅ Accessible at: http://192.168.0.132:3000 (same network)

