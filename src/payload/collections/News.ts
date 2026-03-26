import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
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
