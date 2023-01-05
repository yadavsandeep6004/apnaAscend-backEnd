export default {
    name: 'ourCompanies',
    title: 'Infinite Scroll',
    type: 'document',
    fields: [
          {
            name: "src", //InfiniteScrollSection images
            type: "image",
            title: "Comapny logo",
            description: "Image of company hiring from us",

          },
          {
            name: "Alt",
            type: "string",
            title: "Alt text",
            options: {
              isHighlighted: true,
            },
          },
    ],
}
