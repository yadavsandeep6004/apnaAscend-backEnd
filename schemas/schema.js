import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import landing from './landing';
import course from './course';
import successStory from './successStory';
import ourCompanies from './ourCompanies';
import news from './news';
import testimonials from './testimonials';
import coursePlanItem from './coursePlanItem';
import faq from './faq';
import upcomingCourses from './upcomingCourses';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    landing,
    course,
    successStory,
    ourCompanies,
    news,
    testimonials,
    coursePlanItem,
    faq,
    upcomingCourses,
  ]),
});
