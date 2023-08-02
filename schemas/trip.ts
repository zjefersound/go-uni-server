export default {
  name: 'trip',
  type: 'document',
  title: 'Trip',
  fields: [
    {
      name: 'from',
      type: 'string',
      title: 'From',
    },
    {
      name: 'to',
      type: 'string',
      title: 'To',
    },
    {
      name: 'distance',
      type: 'number',
      title: 'Distance',
    },
    {
      name: 'duration',
      type: 'number',
      title: 'Average duration in minutes',
    },
  ],
}
