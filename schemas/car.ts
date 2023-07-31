export default {
  name: 'car',
  type: 'document',
	title: 'Car',
  fields: [
    {
      name: 'model',
      type: 'string',
      title: 'Model'
    },
    {
      name: 'freeSeats',
      type: 'number',
      title: 'Free seats'
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo'
    },
  ]
}