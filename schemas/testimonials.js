export default {
    name: "testimonial",
    type: "document",
    title: "Testimonial",
    fields: [
        {
            name: "profileImage", // image side of process section
            type: "image",
            title: "Profile image",
        },
        {
            name: "username",
            type: "string",
            title: "User name",
        },
        {
            name: "companyImageUrl", //  point image of customer support  section
            type: "image",
            title: "Company image url",
        },
        {
            name: "designation",
            type: "string",
            title: "Designation",
        },
        {
            name: "text",
            type: "text",
            title: "Text",
        },
        {
            name: "subtext",
            type: "text",
            title: "SubText",
        },
    ],
}
