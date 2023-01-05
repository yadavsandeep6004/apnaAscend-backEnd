import {string} from "prop-types";

export default {
    name: "activeCourse",
    type: "document",
    title: "Active courses",
    fields: [
        {
            name: "SEOtitle",
            type: "string",
            title: "Title that will appear in our SEO",
        },
        {
            name: "SEOdescription",
            type: "text",
            title: "SEO Detail description",
        },
        {
            name: "SEOUrl",
            type: "string",
            title: "SEO url",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description: "Slug to be shown in url. This must be unique among all other courses.",
            validation: Rule => Rule.required()
        },
        {
            name: "title",
            type: "string",
            title: "Course title",
        },
        {
            name: "subTitle",
            type: "string",
            title: "Subtitle",
        },
        {
            name: "shortDescription",
            type: "string",
            title: "Short description",
        },
        {
            name: "icon",
            type: "image",
            title: "Icon",
        },
        {
            name: "buttonText",
            type: "string",
            title: "button text",
        },
        {
            name: "price",
            type: "number",
            title: "Price",
        },
        {
            name: "strikePrice",
            type: "number",
            title: "Striked Price",
        },
        {
            name: "note",
            type: "string",
            title: "Note",
        },
        {
            name: "joinCourseURL",
            type: "string",
            title: "Join Course url",
        },
        {
            name: "videoURL",
            type: "file",
            title: "Upload course video",
        },
        {
            name: "introVideoUrl",
            type: "string",
            title: "Intro video url",
        },
        {
            name: "testimonials",
            type: "array",
            title: "Testimonials",
            of: [{type: "reference", to: [{type: "testimonial"}]}]
        },
        {
            name: "coursePlan",
            type: "array",
            title: "Course plan",
            of: [{type: "coursePlanItem"}]
        },
        {
            name: "successStories",
            type: "array",
            title: "Success stories",
            of: [{type: "reference", to: [{type: "successStory"}]}]
        },
        {
            name: "syllabusUrl",
            type: "string",
            title: "Syllabus url",
        },
        {
            name: "topics",
            type: "array",
            of: [{
                type: 'object', fields: [
                    {name: "icon", type: "image", title: "Icon"},
                    {name: "title", type: "string", title: "Title"},
                    {name: "description", type: "string", title: "Description"}
                ]
            }]
        },
        {
            name: "keyOfferings",
            type: "array",
            description: "Key offering to be shown on course detail page",
            of: [{
                type: 'object', fields: [
                    {name: "icon", type: "image", title: "Icon"},
                    {name: "title", type: "string", title: "Title"},
                    {name: "subtitle", type: "string", title: "Subtitle"}
                ]
            }]
        },
        {
            name: "keyFeatures",
            type: "array",
            description: "Key features to be shown on landing page",
            of: [{
                type: 'object', fields: [
                    {name: "icon", type: "image", title: "Icon"},
                    {name: "title", type: "string", title: "Title"},
                ]
            }]
        },
        {
            name: "faqs",
            type: "array",
            title: "FAQs",
            of: [{type: "reference", to: [{type: "faq"}]}]
        },
    ]
};
