import { Rule } from "sanity";

export default {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'course',
      type: 'string',
      title: 'Course',
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
