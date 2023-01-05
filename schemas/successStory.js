export default {
    name: "successStory",
    type: "document",
    title: "Success story",
    fields: [
        {
            name: "profileImage",
            type: "image",
            title: "Profile image",
        },

        {
            name: "username", //success story card heading
            type: "string",
            title: "Name",
        },
        {
            name: "companyImage",
            type: "image",
            title: "Company image",
        },
        {
            name: "designation",
            type: "string",
            title: "Person Designation",
        },

        {
            name: "text",
            type: "text",
            title: "Text",
        },
    ],
};
