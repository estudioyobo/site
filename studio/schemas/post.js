export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      description: 'You can use this field to schedule post where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Descripción',
      type: 'blockText'
    },
    {
      name: 'authors',
      title: 'Autores',
      type: 'array',
      of: [{ type: 'postAuthor' }]
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'mainImage'
    },
    {
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'body',
      title: 'Contenido',
      type: 'blockContent'
    }
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }, { field: 'title', direction: 'asc' }]
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }, { field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'cover'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      }
    }
  }
}
