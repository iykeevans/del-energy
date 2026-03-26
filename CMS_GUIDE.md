# DEL Energy CMS Integration

This project now includes **Payload CMS** - a headless CMS that allows non-technical users to manage website content through an intuitive admin interface.

## Quick Start

### 1. Set up MongoDB

You need a MongoDB database. Choose one option:

**Option A: MongoDB Atlas (Recommended - Free Tier)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free M0 cluster
3. Get your connection string
4. Update `.env.local` with your connection string

**Option B: Local MongoDB**
```bash
# macOS
brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb-community

# Use default local connection in .env.local
```

See [PAYLOAD_SETUP.md](./PAYLOAD_SETUP.md) for detailed MongoDB setup instructions.

### 2. Configure Environment Variables

Update `.env.local` with your MongoDB connection:

```env
PAYLOAD_SECRET=your-very-secure-secret-key-change-this
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/del-energy
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 3. Start the Development Server

```bash
nvm use --lts
pnpm dev
```

### 4. Access the Admin Panel

Open http://localhost:3000/admin and create your first admin user.

## Content Management

### Collections Available

1. **News** (`/admin/collections/news`)
   - News articles and press releases
   - Fields: title, slug, excerpt, content, featured image, category, date, status

2. **Team** (`/admin/collections/team`)
   - Management team members
   - Fields: name, role, bio, image, LinkedIn URL, display order

3. **Careers** (`/admin/collections/careers`)
   - Job openings
   - Fields: title, description, requirements, location, employment type, status

4. **Services** (`/admin/collections/services`)
   - Energy services/offerings
   - Fields: title, description, image, category, display order

5. **Media** (`/admin/collections/media`)
   - Centralized image and file management
   - Auto-generates responsive image sizes
   - Accessible via `/media/` URLs

### How to Add Content

1. Go to http://localhost:3000/admin
2. Navigate to the collection you want to manage
3. Click "Create New"
4. Fill in the required fields
5. Click "Save" (saves as draft) or "Save & Publish"

### Publishing Workflow

- News articles have Draft/Published status
- Career openings have Open/Closed status
- Only published/open items appear on the website

## Using CMS Data in Components

The project includes helper functions in `src/utils/payload.ts`:

```typescript
import { getNewsArticles, getTeamMembers } from '@/utils/payload'

// In a Server Component
export default async function NewsPage() {
  const articles = await getNewsArticles(10) // Get 10 latest articles
  
  return (
    <div>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
```

Available helper functions:
- `getNewsArticles(limit?)` - Fetch published news
- `getTeamMembers()` - Fetch team members (sorted by order)
- `getOpenCareers()` - Fetch open job positions
- `getServices()` - Fetch services (sorted by order)
- `getMediaURL(media)` - Get full URL for media files

## API Endpoints

All content is accessible via REST API:

```bash
# Get all published news
GET http://localhost:3000/api/news?where[status][equals]=published

# Get team members sorted by order
GET http://localhost:3000/api/team?sort=order

# Get specific news article by ID
GET http://localhost:3000/api/news/{id}

# Get media file
GET http://localhost:3000/api/media/{id}
```

### API Query Parameters

- **Filter**: `where[field][operator]=value`
- **Sort**: `sort=field` or `sort=-field` (descending)
- **Limit**: `limit=10`
- **Pagination**: `page=2`

Examples:
```bash
# Published news from 2026
GET /api/news?where[status][equals]=published&where[publishedDate][greater_than_equal]=2026-01-01

# Team members with LinkedIn profiles
GET /api/team?where[linkedinUrl][exists]=true

# Open jobs in Lagos
GET /api/careers?where[status][equals]=open&where[location][contains]=Lagos
```

## TypeScript Types

Generate TypeScript types from your collections:

```bash
pnpm payload generate:types
```

This creates `src/payload-types.ts` with full type definitions for all collections.

Usage:
```typescript
import type { News, Team } from '@/payload-types'

const article: News = await fetch('/api/news/123').then(r => r.json())
```

## Media Management

### Uploading Images

1. Go to http://localhost:3000/admin/collections/media
2. Click "Upload"
3. Select images (JPG, PNG, GIF, WebP)
4. Add alt text (required for accessibility)
5. Images are automatically optimized

### Using Images in Content

When creating content with image fields:
1. Click "Select" or "Upload" in the image field
2. Choose from existing media or upload new
3. Images are automatically responsive with multiple sizes generated

### Image Sizes Generated

- **thumbnail**: 400x300 - For admin preview
- **card**: 768x1024 - For cards and listings
- **hero**: 1920x1080 - For hero sections

Access different sizes via the API:
```javascript
// Get original
media.url

// Get specific size
media.sizes.card.url
media.sizes.hero.url
```

## Deployment

### Environment Variables (Production)

Set these in your hosting provider:

```env
PAYLOAD_SECRET=<strong-random-32-char-string>
DATABASE_URI=<mongodb-atlas-connection-string>
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
```

Generate secure secret:
```bash
openssl rand -base64 32
```

### MongoDB Atlas Production

1. Update Network Access to allow only your server IPs
2. Enable automated backups
3. Set up monitoring alerts
4. Use a dedicated database user for production

### Recommended Hosting

- **Vercel**: Easiest deployment for Next.js
- **Railway**: Good for projects with databases
- **DigitalOcean App Platform**: More control, competitive pricing

Admin panel will be accessible at: `https://yourdomain.com/admin`

## Troubleshooting

### "Cannot connect to MongoDB"
- Check `.env.local` has correct `DATABASE_URI`
- Verify MongoDB Atlas Network Access allows your IP
- Test connection string with MongoDB Compass

### "Admin panel shows blank page"
- Clear Next.js cache: `rm -rf .next`
- Check browser console for errors
- Verify all dependencies installed: `pnpm install`

### "Images not uploading"
- Check `public/media` directory exists
- Verify write permissions on `public/media`
- Check file size (default max: 10MB)

### "TypeScript errors in components"
- Run `pnpm payload generate:types`
- Restart TypeScript server in your editor

## Security Best Practices

1. **Never commit `.env.local`** (already in .gitignore)
2. **Use strong PAYLOAD_SECRET** (32+ random characters)
3. **Limit MongoDB Network Access** (not 0.0.0.0/0 in production)
4. **Regular backups** (enable in MongoDB Atlas)
5. **Keep dependencies updated** (`pnpm update`)

## Additional Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Full Setup Guide](./PAYLOAD_SETUP.md)

## Support

For issues specific to:
- **Payload CMS**: https://payloadcms.com/community
- **MongoDB**: https://www.mongodb.com/community/forums
- **Next.js**: https://nextjs.org/docs
