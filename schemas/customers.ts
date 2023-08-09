import { Rule } from "sanity";

export default {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'course',
      type: 'string',
      title: 'Course',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
