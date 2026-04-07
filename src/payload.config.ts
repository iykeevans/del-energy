import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

// Import collections
import { Users } from './payload/collections/Users'
import { News } from './payload/collections/News'
import { Team } from './payload/collections/Team'
import { Careers } from './payload/collections/Careers'
import { Services } from './payload/collections/Services'
import { Media } from './payload/collections/Media'
import { Gallery } from './payload/collections/Gallery'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- DEL Energy CMS',
    },
  },
  collections: [
    Users,
    News,
    Team,
    Careers,
    Services,
    Media,
    Gallery,
  ],
  editor: lexicalEditor({}),
  sharp,
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_KEY_CHANGE_THIS',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/del-energy',
  }),
})
