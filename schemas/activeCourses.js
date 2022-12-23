export default {
    name: 'activecourses',
    type: 'document',
    title: 'active Courses',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'jobs',
            type: 'string',
            title: 'jobs'
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

