export default {
    name: 'CoursePlan',
    type: 'document',
    title: 'Course Plan',
    fields: [
        {
            name: 'id',
            type: 'Number',
            title: 'Id'
        },
        {
            name: 'day',
            type: 'string',
            title: 'Day'
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt'
        },
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'about',
            type: 'string',
            title: 'About'
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
