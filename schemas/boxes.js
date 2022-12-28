export default {
    name: 'boxes',
    type: 'document',
    title: '5 Boxes',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
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
