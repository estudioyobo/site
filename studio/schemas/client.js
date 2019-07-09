import { MdContacts } from 'react-icons/md';

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  icon: MdContacts,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ]
}
