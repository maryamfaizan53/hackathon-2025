export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'orderId', title: 'Order ID', type: 'string', description: 'Unique identifier for the order.' },
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
        description: 'Reference to the customer who placed the order.',
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }] },
              { name: 'quantity', title: 'Quantity', type: 'number' },
              { name: 'price', title: 'Price', type: 'number' },
            ],
          },
        ],
      },
      { name: 'totalAmount', title: 'Total Amount', type: 'number', description: 'Total cost of the order.' },
      { name: 'status', title: 'Status', type: 'string', description: 'Current order status.' },
      {
        name: 'shipping',
        title: 'Shipping',
        type: 'object',
        fields: [
          { name: 'carrier', title: 'Carrier', type: 'string' },
          { name: 'trackingId', title: 'Tracking ID', type: 'string' },
        ],
      },
      { name: 'createdAt', title: 'Created At', type: 'datetime', description: 'Order creation date.' },
      { name: 'updatedAt', title: 'Updated At', type: 'datetime', description: 'Last update date for the order.' },
    ],
  };
  