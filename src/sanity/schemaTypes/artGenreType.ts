import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const genreType = defineType({
  name: 'genre',
  title: 'Сюжет',
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

    // TODO Need to create a tag list separately?
    // defineField({
    //   name: 'tags',
    //   title: 'Теги',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       name: 'tag',
    //       title: 'Тег',
    //       type: 'reference',
    //       to: [{ type: 'tag' }],
    //     }),
    //   ],
    // })
  ],
})
