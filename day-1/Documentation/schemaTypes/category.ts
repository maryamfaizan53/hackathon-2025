export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', description: 'Name of the category.' },
      { name: 'slug', title: 'Slug', type: 'slug', description: 'URL-friendly identifier for the category.' },
    ],
  };
  