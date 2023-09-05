import {Rule} from 'sanity'

export default {
  name: 'bill',
  type: 'document',
  title: 'Bill',
  fields: [
    {
      name: 'payer',
      type: 'reference',
      title: 'Payer (Customer)',
      to: [{type: 'user'}],
    },
    {
      name: 'reciever',
      type: 'reference',
      title: 'Reciever',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'user'}],
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'amount',
      type: 'number',
      title: 'Amount',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'currency',
      type: 'string',
      title: 'Currency',
      initialValue: 'BRL',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'paid',
      type: 'boolean',
      title: 'Is paid',
      initialValue: false
    },
  ],
}
