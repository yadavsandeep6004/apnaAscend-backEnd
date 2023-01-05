export default {
    name: "upcomingCourse",
    type: "document",
    title: "Upcoming courses",
    fields: [
        {
            name: "icon",
            type: "image",
            title: "Icon",
        },
        {
            name: "joinWaitlistURL",
            type: "string",
            title: "Join Waitlist url",
        },
        // {
        //     name: "courseImage",
        //     type: "image",
        //     title: "Upcoming image",
        // },
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "description",
            type: "string",
            title: "Description",
        },
    ],
};
