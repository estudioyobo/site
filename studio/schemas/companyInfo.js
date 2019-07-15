import { MdBusiness } from 'react-icons/md';

export default {
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: MdBusiness,
  fields: [
    {
      name: 'name',
      title: 'Nombre Empresa',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'address1',
      title: 'Dirección 1',
      type: 'string'
    },
    {
      name: 'address2',
      title: 'Dirección 2',
      type: 'string'
    },
    {
      name: 'zipCode',
      title: 'Código Postal',
      type: 'string'
    },
    {
      name: 'city',
      title: 'Ciudad',
      type: 'string'
    },
    {
      name: 'country',
      title: 'País',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string'
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          type: 'social'
        }
      ]
    }
  ]
}
