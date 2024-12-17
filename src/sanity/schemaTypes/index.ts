import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './postType'
import {artworkType} from './artworkType'
import {authorType} from './authorType'

import {categoryType} from './categoryType'
import {genreType} from './artGenreType'
import {mediumType} from './artMediumType'
import {surfaceType} from './artSurfaceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    artworkType,
    authorType,
    genreType,
    mediumType,
    surfaceType
  ],
}
