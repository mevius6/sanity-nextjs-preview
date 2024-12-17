import {ImageIcon, RobotIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/* INFO
  - https://en.wikipedia.org/wiki/Genre
  - https://en.wikipedia.org/wiki/Landscape_painting
  - https://en.wikipedia.org/wiki/Triptych */

export const artworkType = defineType({
  // https://schema.org/VisualArtwork
  name: 'artwork',
  title: 'Картина',
  icon: ImageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title', // name
      title: 'Название',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Идентификатор страницы',
      type: 'slug',
      description: 'Уникальный компонент URL-адреса',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      // https://www.sanity.io/docs/image-type
      name: 'mainImage',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
        // https://www.sanity.io/docs/image-metadata
        metadata: ['blurhash', 'lqip', 'palette'],
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'categories',
      title: 'Категории',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'blockContent',
    }),
    defineField({
      // https://schema.org/Person
      // https://schema.org/artist
      name: 'artist',
      title: 'Художник',
      type: 'reference',
      to: {type: 'author'}
    }),
    defineField({
      name: 'genre',
      title: 'Сюжет',
      type: 'reference',
      to: {type: 'genre'}
    }),
    defineField({
      name: 'medium',
      title: 'Техника',
      type: 'reference',
      to: {type: 'medium'}
    }),
    defineField({
      name: 'surface',
      title: 'Материал',
      type: 'reference',
      to: {type: 'surface'}
    }),

    // TODO List of predefined strings
    // See: https://www.sanity.io/docs/string-type#33spwYgc
    defineField({ // https://www.sanity.io/docs/object-type
      type: 'object',
      name: 'microdata',
      title: 'Микроданные: Расширенное описание',
      /* REFS Microdata
        - https://html.spec.whatwg.org/#toc-microdata
        - https://html.spec.whatwg.org/dev/microdata.html
        - https://developers.google.com/gmail/markup/reference/formats/microdata
        - https://developers.google.com/search/docs/appearance/structured-data */
      description: 'Разметка структурированных данных страницы',
      hidden: false, // Default value
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines initial state of the fieldset
        columns: 1, // Defines a grid for the fields
        modal: {type: 'popover'} // Makes the modal type a popover
      },
      fieldsets: [
        {
          name: 'materials',
          title: 'Материал',
          description: 'Например, холст и масляная краска (х. м.)',
          options: {columns: 2}
        }, {
          name: 'dimensions',
          title: 'Размеры',
          description: 'Например, 940 мм × 630 мм',
          options: {columns: 2}
        }
      ],
      // https://www.sanity.io/docs/field-groups
      // groups: [
      //   {
      //     name: 'seo',
      //     title: 'Поисковая оптимизация', // SEOs
      //     icon: RobotIcon
      //   },
      // ],
      fields: [
        {
          name: 'form',
          type: 'string',
          title: 'Вид изобразительного искусства',
          // https://en.wikipedia.org/wiki/The_arts
          description: 'Например, живопись, графика, печать, коллаж, фотография и т. д.',
          placeholder: 'Живопись',
          initialValue: 'Живопись',
          // hidden: true,
          readOnly: true,
        },
        {
          // https://schema.org/artEdition
          name: 'artEdition',
          type: 'number',
          title: 'Количество копий',
          // description: 'The number of copies when multiple copies of a piece\
          // of artwork are produced — e.g. for a limited edition of 20 prints,\
          // `artEdition` refers to the total number of copies (in this example "20").\
          // —or— `Numbered from the edition of 50,\
          //       each signed by the artist in pencil,\
          //       lower right: Picasso.`',
          placeholder: '1',
          initialValue: 1
        },
        {
          // https://schema.org/artMedium
          name: 'artMedium',
          title: 'Используемый материал',
          type: 'string',
          description: 'Например, масло, акварель, пастель, карандаш и т. д.',
          // 'акриловая краска, цианотипия, литография, линогравюра…',
          placeholder: 'масло',
          initialValue: 'oil',
          fieldset: 'materials'
        },
        {
          // https://schema.org/artworkSurface
          // https://schema.org/surface
          name: 'artworkSurface',
          title: 'Cопутствующие материалы',
          type: 'string',
          description: 'Например, холст, бумага, дерево, доска и т. д.',
          placeholder: 'canvas',
          fieldset: 'materials'
        },
        {
          // https://schema.org/Distance
          name: 'width',
          title: 'Ширина',
          type: 'number',
          placeholder: '940',
          fieldset: 'dimensions'
        },
        {
          // https://schema.org/Distance
          name: 'height',
          title: 'Высота',
          type: 'number',
          placeholder: '630',
          fieldset: 'dimensions'
        },
        //#region - SEO [hidden]
        // {
        //   // https://schema.org/artform
        //   name: 'artform',
        //   type: 'string',
        //   title: 'artform',
        //   placeholder: 'painting',
        //   initialValue: 'painting',
        //   hidden: true,
        //   // readOnly: true,
        //   group: 'seo'
        // },
        //#endregion
      ],
      // https://www.sanity.io/docs/sort-orders
      // orderings: […]
    }),
    defineField({
      name: 'dateCreated',
      title: 'Дата создания',
      type: 'date',
      options: {
        // https://momentjs.com/docs/#/displaying/format/
        dateFormat: 'YYYY'
      },
    }),
    // TODO https://schema.org/offers
    defineField({
      name: 'price',
      title: 'Стоимость',
      type: 'number',
      placeholder: '50',
      initialValue: 50
    }),
  ],

  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
      author: 'artist.name',
      media: 'mainImage',
      date: 'dateCreated',
    },
    prepare(selection) {
      const {author: by, date } = selection
      return {
        ...selection,
        // YYYY-MM-DD --> YYYY
        subtitle: by && `• ${by}, ${new Date(date).getFullYear()}`
      }
    },
  },
})
