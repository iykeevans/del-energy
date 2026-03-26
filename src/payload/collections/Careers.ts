import type { CollectionConfig } from 'payload'

export const Careers: CollectionConfig = {
  slug: 'careers',
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return { status: { equals: 'open' } }
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'location', 'employmentType', 'status'],
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
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'requirements',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'requirement',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'employmentType',
      type: 'select',
      required: true,
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Internship', value: 'internship' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'open',
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ],
    },
    {
      name: 'postedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
}
