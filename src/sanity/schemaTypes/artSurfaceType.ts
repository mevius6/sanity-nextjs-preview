import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const surfaceType = defineType({
  name: 'surface',
  title: 'Материал',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Название',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Идентификатор',
      description: 'Уникальный компонент URL-адреса',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
