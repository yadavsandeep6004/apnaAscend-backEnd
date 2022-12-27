export default {
    name: 'KeyOffering',
    type: 'document',
    title: 'Key Offering',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'subheading',
            type: 'string',
            title: 'SubHeading'
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

