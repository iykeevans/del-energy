import type { CollectionConfig } from 'payload'

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const News: CollectionConfig = {
  slug: 'news',
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data

        const title =
          typeof data.title === 'string' ? data.title.trim() : ''
        const currentSlug =
          typeof data.slug === 'string' ? data.slug.trim() : ''

        if (!currentSlug && title) {
          data.slug = slugify(title)
          return data
        }

        if (currentSlug) {
          data.slug = slugify(currentSlug)
        }

        return data
      },
    ],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return { status: { equals: 'published' } }
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief summary for article cards',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'placeholderColor',
      type: 'text',
      admin: {
        description: 'Hex color for placeholder background (e.g., #00b050)',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Expansion', value: 'expansion' },
        { label: 'Infrastructure', value: 'infrastructure' },
        { label: 'Partnership', value: 'partnership' },
        { label: 'Innovation', value: 'innovation' },
        { label: 'Press Release', value: 'press-release' },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
