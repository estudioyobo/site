export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'description',
      title: 'Descripción',
      type: 'text'
    },
    {
      name: 'elements',
      title: 'Elementos',
      type: 'array',
      of: [{ type: 'serviceElement' }]
    }
  ]
}
