export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      { name: 'shipmentId', title: 'Shipment ID', type: 'string', description: 'Unique identifier for the shipment.' },
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }],
        description: 'Associated order for the shipment.',
      },
      { name: 'carrier', title: 'Carrier', type: 'string', description: 'Shipping carrier name.' },
      { name: 'status', title: 'Status', type: 'string', description: 'Current status of the shipment.' },
      { name: 'trackingId', title: 'Tracking ID', type: 'string', description: 'Tracking ID for the shipment.' },
      {
        name: 'estimatedDeliveryDate',
        title: 'Estimated Delivery Date',
        type: 'datetime',
        description: 'Expected delivery date.',
      },
      {
        name: 'actualDeliveryDate',
        title: 'Actual Delivery Date',
        type: 'datetime',
        description: 'Actual delivery date.',
      },
      { name: 'shippingLabel', title: 'Shipping Label', type: 'url', description: 'URL of the shipping label.' },
      { name: 'createdAt', title: 'Created At', type: 'datetime', description: 'Shipment creation date.' },
      { name: 'updatedAt', title: 'Updated At', type: 'datetime', description: 'Last update date for the shipment.' },
    ],
  };
  