import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  // https://schema.org/creator
  name: 'author', // creator/author
  title: 'Автор',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Идентификатор',
      type: 'slug',
      description: 'Уникальный компонент URL-адреса',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Альтернативный текст (описание изображения)',
          description: 'Улучшает распознавание контента поисковыми системами и обеспечивает доступность для пользователей, которые не видят изображения на веб-страницах. Например, когда используют программы для чтения с экрана, или из-за медленного подключения к интернету.',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Краткая биография',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'cv', // curriculum vitae
      title: 'Резюме',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
