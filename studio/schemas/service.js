export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'elements',
      title: 'Elements',
      type: 'array',
      of: [{ type: 'serviceElement' }]
    }
  ]
}
