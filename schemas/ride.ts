import { Rule } from "sanity";

export default {
  name: 'ride',
  type: 'document',
  title: 'Ride',
  fields: [
    {
      name: 'passengers',
      type: 'number',
      title: 'Number of passangers',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'passengersOneWay',
      type: 'number',
      title: 'Number of one way passangers',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'pricePerPassenger',
      type: 'number',
      title: 'Price per Passenger',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'paid',
      type: 'boolean',
      title: 'Is paid',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'car',
      type: 'reference',
      title: 'Car',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'car'}],
    },
  ],
}
