import testDec from './testDec'

export default {
  name: 'companyTestimonials',
  type: 'document',
  title: 'Company Testimonials',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'Id',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'Alt image',
      name: 'altImage',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'Alt icon',
      name: 'alticon',
      type: 'string',
    },
    {
      title: 'testDec',
      name: testDec,
      type: 'document',
    },
  ],
}
