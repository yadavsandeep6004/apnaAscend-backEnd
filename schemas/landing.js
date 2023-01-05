export default {
  name: 'landing',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'SEOtitle',
      type: 'string',
      title: 'Title that will appear in our SEO',
    },
    {
      name: 'SEOdescription',
      type: 'text',
      title: 'Detail description',
    },
    {
      name: 'SEOUrl',
      type: 'string',
      title: 'Intro video url',
    },
    {
      name: 'CourseHeroHeadingFirstLine',
      type: 'string',
      title: 'Course Hero Section Heading First Line',
      description: 'First Line Heading for Course Hero Section',
    },
    {
      name: 'CourseHeroHeadingSecondLine',
      type: 'string',
      title: 'Course Hero Section Heading Second Line',
      description: 'Second Line Heading for Course Hero Section',
    },
    {
      name: 'CourseHeroHeadingGradient',
      type: 'string',
      title: 'Course Hero Section Gradient',
      description: 'Gradient Heading for Course Hero Section',
    },
    {
      name: 'CourseHeroSubtitle',
      type: 'string',
      title: 'Course Hero Section Subtitle ',
      description: 'Subtitle for Course Hero Section',
    },
    {
      name: 'CourseHeroWebImage',
      type: 'image',
      title: 'Course Hero Web Image',
    },
    {
      name: 'CourseHeroMobileImage',
      type: 'image',
      title: 'Course Hero Mobile Image',
    },
    {
      name: 'ourCompaniesHeading', //Heading above inifinite scroll
      type: 'string',
      title: 'Our Companies Heading',
      description: 'Heading for companies hiring from us',
    },
    {
      name: 'SuccessStoriesHeading',
      type: 'string',
      title: 'Success Stories Heading',
      description: 'Heading for Success Stories',
    },
    {
      name: 'SuccessStoriesText',
      type: 'text',
      title: 'Success Stories Subtitle',
      description: 'Subtitle for Success Stories',
    },
    {
      name: 'successStories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'successStory' }] }],
    },
    {
      name: 'ActiveCourseHeading',
      type: 'string',
      title: 'Active Course Heading',
      description: 'Heading for Active Course',
    },
    {
      name: 'ActiveCourseSubtitle',
      type: 'text',
      title: 'Active Course Subtitle',
      description: 'Subtitle for Active Course',
    },
    {
      name: 'activeCourses',
      type: 'array',
      title: 'Active courses',
      of: [{ type: 'reference', to: [{ type: 'activeCourse' }] }],
    },
    {
      name: 'upcomingCourses',
      type: 'array',
      title: 'Upcoming Courses',
      of: [{ type: 'reference', to: [{ type: 'upcomingCourse' }] }],
    },
    {
      name: 'FAQInnerHeading',
      type: 'string',
      title: 'FAQ Inner Heading',
      description: 'Heading for FAQ Inner',
    },
    {
      name: 'FAQInnerSubtitle',
      type: 'string',
      title: 'FAQ Inner Subtitle',
      description: 'Subtitle for FAQ Inner',
    },
    {
      name: 'faqs',
      type: 'array',
      title: 'FAQs',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    },
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
    // {
    //   name: 'Footer',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'Footer' }] }],
    // },
  ],
};
