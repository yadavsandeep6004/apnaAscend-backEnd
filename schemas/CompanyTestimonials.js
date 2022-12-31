import testimonialsDescription from './TestimonialsDescription'

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
        hotspot: true,
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
      name: 'domain',
      type: 'string',
      title: 'Domain',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Alt icon',
      name: 'altIcon',
      type: 'string',
    },
    {
      title: 'Testimonials Description',
      name: testimonialsDescription,
      type: 'document',
    },
  ],
}
