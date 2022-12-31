export default {
  name: 'testimonialsDescription',
  type: 'document',
  title: 'Testimonials Description',
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
      title: 'Alt',
      name: 'alt',
      type: 'string',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      name: 'information',
      type: 'string',
      title: 'Information',
    },
  ],
}
