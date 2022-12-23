export default {
    name: 'UpcomingCourses',
    type: 'document',
    title: 'Upcoming Courses',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'heading'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            title: 'image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        }
    ]
}