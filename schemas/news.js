export default {
  name: "news",
  type: "document",
  title: "News",
  fields: [
    {
      name: "src",
      type: "image",
      title: "News Logo",
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
};
