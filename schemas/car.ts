import { Rule } from "sanity";

export default {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'model',
      type: 'string',
      title: 'Model',
    },
    {
      name: 'freeSeats',
      type: 'number',
      title: 'Free seats',
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
    },
    {
      name: 'distancePerLiter',
      type: 'number',
      title: 'Distance (KM) per liter',
    },
    {
      name: 'owner',
      type: 'reference',
      title: 'Owner',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'user'}],
    },
  ],
}
