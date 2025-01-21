export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'id', title: 'Product ID', type: 'string', description: 'Unique identifier for the product.' },
      { name: 'name', title: 'Name', type: 'string', description: 'Name of the product.' },
      { name: 'price', title: 'Price', type: 'number', description: 'Current selling price of the product.' },
      { name: 'stock', title: 'Stock', type: 'number', description: 'Quantity available in stock.' },
      { name: 'description', title: 'Description', type: 'text', description: 'Detailed description of the product.' },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'List of image URLs for the product.',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
        description: 'Associated category of the product.',
      },
      { name: 'createdAt', title: 'Created At', type: 'datetime', description: 'Product creation date.' },
      { name: 'slug', title: 'Slug', type: 'slug', description: 'URL-friendly identifier for the product.' },
      { name: 'rating', title: 'Rating', type: 'number', description: 'Average customer rating.' },
      { name: 'originalPrice', title: 'Original Price', type: 'number', description: 'Price before any discounts.' },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Available colors for the product.',
      },
      {
        name: 'sizes',
        title: 'Sizes',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Available sizes for the product.',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Searchable tags associated with the product.',
      },
      {
        name: 'isNewArrival',
        title: 'Is New Arrival?',
        type: 'boolean',
        description: 'Flag indicating if the product is a new arrival.',
      },
      {
        name: 'isTopSelling',
        title: 'Is Top Selling?',
        type: 'boolean',
        description: 'Flag indicating if the product is a top-seller.',
      },
      {
        name: 'productDetails',
        title: 'Product Details',
        type: 'object',
        fields: [
          { name: 'key', title: 'Key', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
        ],
      },
      {
        name: 'faqs',
        title: 'FAQs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'question', title: 'Question', type: 'string' },
              { name: 'answer', title: 'Answer', type: 'text' },
            ],
          },
        ],
      },
    ],
  };
  