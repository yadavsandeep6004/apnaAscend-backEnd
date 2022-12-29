export default {
  name: 'companyTestimonialsDec',
  type: 'document',
  title: 'Company Testimonials Dec',
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
      name: 'about',
      type: 'string',
      title: 'About',
    },
  ],
}
