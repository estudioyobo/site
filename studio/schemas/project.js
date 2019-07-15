export default {
  name: 'project',
  title: 'Proyecto',
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
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Descripción',
      type: 'blockText'
    },
    {
      name: 'startedAt',
      title: 'Inicio',
      type: 'datetime'
    },
    {
      name: 'endedAt',
      title: 'Finalizado',
      type: 'datetime'
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'mainImage'
    },
    {
      name: 'thumbnail',
      title: 'Miniatura',
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
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'relatedProjects',
      title: 'Proyectos Relacionados',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'thumbnail'
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
