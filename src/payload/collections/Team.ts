import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'linkedinUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'Full LinkedIn profile URL',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
}
