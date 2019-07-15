import S from '@sanity/desk-tool/structure-builder';
import { MdBusiness, MdSettings } from 'react-icons/md';
import { FaFile, FaCodepen, FaPenFancy, FaInfoCircle } from 'react-icons/fa';

const hiddenTypes = [
  'category',
  'companyInfo',
  'page',
  'service',
  'serviceElement',
  'person',
  'post',
  'client',
  'project',
  'siteSettings'
]

export default () =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Información de la Página')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Información de Empresa')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Proyectos')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Páginas')
        .child(
          S.list()
            .title('Páginas')
            .items([
              S.listItem()
                .title('Aviso Legal')
                .child(
                  S.editor()
                    .id('legalPage')
                    .schemaType('page')
                    .documentId('legal')
                )
                .icon(FaFile),
              S.listItem()
                .title('Política de Privacidad')
                .child(
                  S.editor()
                    .id('privacyPage')
                    .schemaType('page')
                    .documentId('privacy')
                )
                .icon(FaFile)
            ])
        ),
      S.listItem()
        .title('Servicios')
        .child(
          S.list()
            .title('Servicios')
            .items([
              S.listItem()
                .title('Diseño')
                .child(
                  S.editor()
                    .id('designService')
                    .schemaType('service')
                    .documentId('design')
                )
                .icon(FaPenFancy),
              S.listItem()
                .title('Desarrollo')
                .child(
                  S.editor()
                    .id('developmentService')
                    .schemaType('service')
                    .documentId('development')
                )
                .icon(FaCodepen)
            ])
        )
        .icon(FaInfoCircle),
      S.listItem()
        .title('Clientes')
        .schemaType('client')
        .child(S.documentTypeList('client').title('Clients')),
      S.listItem()
        .title('Nosotros')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categorías')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categorías')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
