export default {
  name: 'Footer',
  type: 'document',
  title: 'Footer Section',
  hidden: true,
  fields: [
    {
      name: 'FacebookLink',
      type: 'string',
      title: 'FaceBook Link',
    },
    {
      name: 'YoutubeLink',
      type: 'string',
      title: 'Youtube Link',
    },
    {
      name: 'InstagramLink',
      type: 'string',
      title: 'Instagram Link',
    },
    {
      name: 'LinkedInLink',
      type: 'string',
      title: 'LinkedIn Link',
    },
    {
      name: 'TwitterLink',
      type: 'string',
      title: 'Twitter Link',
    },
    {
      name: 'PlayStoreLink',
      type: 'string',
      title: 'Play Store Link',
    },
    {
      name: 'ContactUsLink',
      type: 'string',
      title: 'Contact Us Link',
    },
    {
      name: 'PrivacyLink',
      type: 'string',
      title: 'Privacy Policy Link',
    },
    {
      name: 'TermsLink',
      type: 'string',
      title: 'Terms and Condition Link',
    },
    {
      name:"Courses",
      type:"array",
      of: [{ type: 'reference', to: [{ type: 'activeCourse' }] }],
      title:"Footer Courses",

    }
  ],
};
