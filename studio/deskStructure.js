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
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile)
            ])
        ),
      S.listItem()
        .title('Services')
        .child(
          S.list()
            .title('Services')
            .items([
              S.listItem()
                .title('Design')
                .child(
                  S.editor()
                    .id('designService')
                    .schemaType('service')
                    .documentId('design')
                )
                .icon(FaPenFancy),
              S.listItem()
                .title('Development')
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
        .title('Clients')
        .schemaType('client')
        .child(S.documentTypeList('client').title('Clients')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
