# Custom Domain Setup Guide
## Setting up aqdasportfolio.in with GitHub Pages

---

## 🎯 Overview

This guide will help you connect your custom domain **aqdasportfolio.in** to your GitHub Pages portfolio.

**Result:** Your portfolio will be accessible at `https://aqdasportfolio.in` instead of `https://mohdaqdas05.github.io/aqdas-portfolio-new/`

---

## 📋 Prerequisites

✅ Domain purchased: **aqdasportfolio.in**  
✅ GitHub repository: **Mohdaqdas05/aqdas-portfolio-new**  
✅ Access to your domain registrar's DNS settings

---

## 🚀 Step-by-Step Setup

### PART 1: Configure DNS Settings (At Your Domain Registrar)

You need to add DNS records where you purchased **aqdasportfolio.in** (e.g., GoDaddy, Namecheap, Google Domains, Hostinger, etc.)

#### Step 1: Login to Your Domain Registrar

Go to where you bought **aqdasportfolio.in** and find the **DNS Management** or **DNS Settings** section.

#### Step 2: Add GitHub Pages DNS Records

**Delete any existing A records and CNAME records first**, then add these:

##### **A Records (for apex domain - aqdasportfolio.in)**

Add **FOUR** A records pointing to GitHub's servers:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|----------------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note:** `@` means the root domain (aqdasportfolio.in)

##### **CNAME Record (for www subdomain)**

Add **ONE** CNAME record:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|----------------|-----|
| CNAME | www | mohdaqdas05.github.io | 3600 |

#### Step 3: Save DNS Changes

Click **Save** or **Apply Changes**

⏰ **Wait Time:** DNS changes can take 5 minutes to 48 hours to propagate (usually 1-2 hours)

---

### PART 2: Configure GitHub Pages Settings

#### Step 1: Go to Repository Settings

1. Open your repository: https://github.com/Mohdaqdas05/aqdas-portfolio-new
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar

#### Step 2: Configure Custom Domain

1. Under **Custom domain**, enter: `aqdasportfolio.in`
2. Click **Save**
3. Wait a moment for GitHub to verify your DNS settings

#### Step 3: Enable HTTPS

1. After DNS verification (green checkmark appears)
2. Check the box: **✅ Enforce HTTPS**
3. This provides a secure connection (https://)

**Note:** HTTPS might take 24 hours to activate

---

### PART 3: Deploy Your Website

Everything is already configured in your code! Just deploy:

```powershell
cd C:\aqizaai\aqdas-portfolio
npm run deploy
```

The CNAME file will automatically be included in the deployment.

---

## 🔍 Verification Steps

### Check DNS Configuration

Use these tools to verify your DNS is set up correctly:

1. **DNS Checker:** https://dnschecker.org/
   - Enter: `aqdasportfolio.in`
   - Should show the 4 GitHub IP addresses

2. **Command Line Check:**
   ```powershell
   nslookup aqdasportfolio.in
   ```
   Should return GitHub's IP addresses

### Check CNAME Record

```powershell
nslookup www.aqdasportfolio.in
```
Should return: `mohdaqdas05.github.io`

---

## 📝 Common Domain Registrar Instructions

### **GoDaddy**
1. Go to: https://dcc.godaddy.com/
2. Click your domain → Manage DNS
3. Add A and CNAME records as shown above

### **Namecheap**
1. Login → Domain List → Manage
2. Advanced DNS tab
3. Add A and CNAME records

### **Google Domains**
1. My domains → DNS
2. Custom resource records
3. Add A and CNAME records

### **Hostinger**
1. Domains → Manage → DNS Records
2. Add A and CNAME records

### **BigRock / ResellerClub**
1. Manage Orders → List/Search Orders
2. DNS Management
3. Add A and CNAME records

---

## ✅ Expected Timeline

| Time | What Happens |
|------|-------------|
| **Immediate** | CNAME file created ✅ |
| **2 minutes** | Deployed to GitHub Pages ✅ |
| **5-60 minutes** | DNS starts propagating 🔄 |
| **1-4 hours** | Domain fully accessible worldwide 🌍 |
| **Up to 24 hours** | HTTPS certificate issued 🔒 |

---

## 🎯 Testing Your Domain

### After DNS Propagation

1. **Test apex domain:**
   - Open browser
   - Go to: `http://aqdasportfolio.in`
   - Should load your portfolio

2. **Test www subdomain:**
   - Go to: `http://www.aqdasportfolio.in`
   - Should redirect to `aqdasportfolio.in`

3. **Test HTTPS (after 24 hours):**
   - Go to: `https://aqdasportfolio.in`
   - Should show secure padlock 🔒

---

## 🔧 Troubleshooting

### Issue: Domain not loading

**Solution:**
1. Wait longer (DNS can take up to 48 hours)
2. Clear browser cache (Ctrl + Shift + Delete)
3. Try incognito/private mode
4. Check DNS records are correct

### Issue: "404 - There isn't a GitHub Pages site here"

**Solution:**
1. Verify CNAME file exists in `public/` folder
2. Redeploy: `npm run deploy`
3. Check GitHub Pages settings have your domain

### Issue: "DNS_PROBE_FINISHED_NXDOMAIN"

**Solution:**
- Your DNS records aren't set up correctly
- Double-check the A records and CNAME record
- Make sure you're using `@` for root domain

### Issue: Certificate error / Not secure

**Solution:**
- HTTPS takes up to 24 hours to activate
- Make sure "Enforce HTTPS" is checked in GitHub settings
- Wait and try again later

---

## 🌟 After Setup

Once your domain is live, update:

✅ **LinkedIn Profile** - Add your portfolio URL  
✅ **Resume** - Include aqdasportfolio.in  
✅ **GitHub Profile** - Add to your bio  
✅ **Email Signature** - Link to your portfolio  
✅ **Job Applications** - Share your professional site  

---

## 📊 Your New URLs

| Type | URL | Redirects To |
|------|-----|--------------|
| **Primary** | https://aqdasportfolio.in | ✅ Your Portfolio |
| **WWW** | https://www.aqdasportfolio.in | → https://aqdasportfolio.in |
| **Old GitHub URL** | https://mohdaqdas05.github.io/aqdas-portfolio-new/ | → https://aqdasportfolio.in |

---

## 🎉 Success Indicators

You'll know it's working when:

1. ✅ Typing `aqdasportfolio.in` loads your portfolio
2. ✅ Green checkmark in GitHub Pages settings
3. ✅ HTTPS padlock shows in browser
4. ✅ DNS checker shows all 4 IP addresses
5. ✅ Both www and non-www work

---

## 💡 Pro Tips

1. **Bookmark** https://github.com/Mohdaqdas05/aqdas-portfolio-new/settings/pages to quickly access GitHub Pages settings

2. **Update Your Analytics** - Once domain is live and if you set up Google Analytics, the tracking will automatically work on your new domain

3. **Share Everywhere** - Your portfolio now looks more professional with a custom domain!

4. **Email Setup (Optional)** - You can also set up professional email like `contact@aqdasportfolio.in` through your domain registrar

---

## 🚀 Quick Reference: Complete Checklist

- [ ] Purchase domain aqdasportfolio.in
- [ ] Add 4 A records pointing to GitHub
- [ ] Add CNAME record for www
- [ ] Save DNS changes
- [ ] Configure custom domain in GitHub Pages settings
- [ ] Deploy website (`npm run deploy`)
- [ ] Wait for DNS propagation (1-4 hours)
- [ ] Enable HTTPS in GitHub settings
- [ ] Test domain loads correctly
- [ ] Update LinkedIn, resume, and profiles with new URL

---

## 📞 Need Help?

If you run into issues:

1. **Check GitHub's Guide:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
2. **Contact Your Domain Registrar** - They can help with DNS settings
3. **Let me know!** - I'm here to help troubleshoot

---

**Ready to proceed? Tell me once you've added the DNS records, and I'll deploy everything for you!** 🚀
