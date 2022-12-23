export default {
    name: 'successStory',
    type: 'document',
    title: 'success story',
    fields: [
        {
            title: 'Awatar',
            name: 'awatar',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'name',
            type: 'string',
            title: 'name'
        },
        {
            name: 'profession',
            type: 'string',
            title: 'profession'
        },
        {
            title: 'logo',
            name: 'logo',
            type: 'image',
            options: {
                hotspot: true
            },
        }
    ]
}