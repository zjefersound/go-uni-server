import { Rule } from "sanity";

export default {
  name: 'trip',
  type: 'document',
  title: 'Trip',
  fields: [
    {
      name: 'from',
      type: 'string',
      title: 'From',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'to',
      type: 'string',
      title: 'To',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'distance',
      type: 'number',
      title: 'Distance',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'duration',
      type: 'number',
      title: 'Average duration in minutes',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'user',
      type: 'reference',
      title: 'User',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'user'}],
    },
  ],
}
