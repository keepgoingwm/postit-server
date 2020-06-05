export default {
  prefix: 'v1',
  schemaOptions: [
    {
      route: "/docs/:id",
      method: "GET",
      schema: {
        type: "object",
        properties: {
          type: {
            type: "string",
            title: "type",
            minLength: 0,
            maxLength: 5,
          },
        },
      },
    },
    {
      route: "/docs",
      method: "POST",
      schema:
        { type: 'object', properties: { content: { type: 'string', title: 'content', minLength: 0, maxLength: 5000 }, type: { type: 'string', title: 'type', mock: { mock: '@string' }, 'minLength': 1, maxLength: 20, enum: ['example', 'hexo', 'weibo'] } }, required: ['content', 'type'] },
    }
  ],
}