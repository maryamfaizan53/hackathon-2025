export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      { name: 'customerId', title: 'Customer ID', type: 'string', description: 'Unique identifier for the customer.' },
      { name: 'name', title: 'Name', type: 'string', description: 'Full name of the customer.' },
      { name: 'email', title: 'Email', type: 'string', description: 'Email address of the customer.' },
      { name: 'phone', title: 'Phone', type: 'string', description: 'Contact phone number.' },
      { name: 'address', title: 'Address', type: 'text', description: 'Residential address.' },
      { name: 'city', title: 'City', type: 'string', description: 'City of residence.' },
      { name: 'state', title: 'State', type: 'string', description: 'State of residence.' },
      { name: 'zipCode', title: 'ZIP Code', type: 'string', description: 'ZIP or postal code.' },
    ],
  };
  