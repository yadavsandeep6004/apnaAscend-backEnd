export default {
    name: "coursePlanItem",
    type: "document",
    title: "Course plan item",
    hidden: true,
    fields: [
        {
            name: "labelText",
            type: "string",
            title: "Label text",
            description: "Text to be shown on button like view on course plan UI"
        },
        {
            name: "icon",
            type: "image",
            title: "Icon",
        },
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "subTitle",
            type: "string",
            title: "Subtitle",
        },
    ],
}
