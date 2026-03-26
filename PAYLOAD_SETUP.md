# Payload CMS Setup Guide

## Prerequisites
- Node.js 20+ (LTS)
- MongoDB database (MongoDB Atlas recommended for free tier)

## MongoDB Setup (Using MongoDB Atlas - Free Tier)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for a free account
   - Create a new project (e.g., "DEL Energy")

2. **Create a Free Cluster**
   - Click "Build a Database"
   - Select "M0 Sandbox" (Free tier)
   - Choose a cloud provider and region (closest to you)
   - Cluster name: `del-energy-cluster`
   - Click "Create Cluster"

3. **Configure Database Access**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Authentication Method: Password
   - Username: `del-admin` (or your choice)
   - Password: Generate a secure password (save it!)
   - Database User Privileges: "Atlas admin"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add specific IP addresses
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Select "Drivers"
   - Copy the connection string (looks like: `mongodb+srv://username:<password>@cluster.xxxxx.mongodb.net/`)
   - Replace `<password>` with your actual password
   - Add database name at the end: `mongodb+srv://username:password@cluster.xxxxx.mongodb.net/del-energy`

6. **Update .env.local**
   - Open `.env.local` in your project root
   - Update `DATABASE_URI` with your connection string:
     ```
     DATABASE_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/del-energy
     ```

## Running the Application

1. **Start the development server**
   ```bash
   nvm use --lts
   pnpm dev
   ```

2. **Access the CMS Admin Panel**
   - Open your browser to http://localhost:3000/admin
   - Create your first admin user account

3. **Create Content**
   - News articles: http://localhost:3000/admin/collections/news
   - Team members: http://localhost:3000/admin/collections/team
   - Career openings: http://localhost:3000/admin/collections/careers
   - Services: http://localhost:3000/admin/collections/services
   - Media library: http://localhost:3000/admin/collections/media

## API Endpoints

Once content is created, it's accessible via REST API:

- **News**: `GET http://localhost:3000/api/news`
- **Team**: `GET http://localhost:3000/api/team`
- **Careers**: `GET http://localhost:3000/api/careers`
- **Services**: `GET http://localhost:3000/api/services`
- **Media**: `GET http://localhost:3000/api/media`

### Example API Usage

```typescript
// Fetch published news articles
const response = await fetch('http://localhost:3000/api/news?where[status][equals]=published&sort=-publishedDate')
const data = await response.json()
console.log(data.docs) // Array of news articles
```

## Next Steps

1. **Install MongoDB** (if using local MongoDB instead of Atlas)
   ```bash
   # macOS
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   
   # Windows
   # Download installer from https://www.mongodb.com/try/download/community
   
   # Linux
   # Follow instructions at https://docs.mongodb.com/manual/administration/install-on-linux/
   ```

2. **Generate TypeScript Types**
   ```bash
   pnpm payload generate:types
   ```
   This creates `payload-types.ts` with type definitions for all collections.

3. **Seed Initial Data** (optional)
   You can manually add content through the admin panel or create a seed script.

## Troubleshooting

### "Cannot connect to MongoDB"
- Check your connection string in `.env.local`
- Ensure MongoDB Atlas Network Access allows your IP
- Verify database user credentials

### "Admin panel won't load"
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check browser console for errors

### "Images won't upload"
- Ensure `public/media` directory exists and is writable
- Check file size limits (default: 10MB)

## Production Deployment

1. **Environment Variables**
   Set these in your hosting provider:
   - `PAYLOAD_SECRET` - Strong random string (use: `openssl rand -base64 32`)
   - `DATABASE_URI` - MongoDB Atlas connection string
   - `NEXT_PUBLIC_SERVER_URL` - Your production URL

2. **MongoDB Atlas Production Setup**
   - Update Network Access to allow only your server IPs
   - Enable backup snapshots
   - Set up monitoring alerts

3. **Deploy**
   - Vercel, Railway, or DigitalOcean work well with Payload
   - Ensure build command includes: `pnpm build`
   - Admin panel will be at: `https://yourdomain.com/admin`
