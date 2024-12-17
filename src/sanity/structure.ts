import type {StructureResolver} from 'sanity/structure'

const tagclouds = ['genre', 'medium', 'surface']

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Собрание галереи')
    .items([
      S.documentTypeListItem('artwork').title('Произведения'),
      // S.documentTypeListItem('category').title('Категории'),
      S.documentTypeListItem('author').title('Авторы'),
      S.listItem()
        .id('categories')
        .title('Категории')
        .child(
          S.list()
            .title('Список категорий')
            .items([
              S.documentTypeListItem('genre').title('Сюжет'),
              S.documentTypeListItem('medium').title('Техника'),
              S.documentTypeListItem('surface').title('Материал'),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![
          'artwork',
          'category',
          'author',
          ...tagclouds,
        ].includes(item.getId()!),
      ),
    ])
