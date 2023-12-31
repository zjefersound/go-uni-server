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
      initialValue: 0,
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
      name: 'extraCosts',
      type: 'number',
      title: 'Extra costs',
      initialValue: 0,
    },
    {
      name: 'observations',
      type: 'text',
      title: 'Observations',
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
    {
      name: 'trip',
      type: 'reference',
      title: 'Trip',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'trip'}],
    },
    {
      name: "bills",
      type: "array",
      title: "Bills",
      of: [{ type: "reference", to: [{ type: "bill" }] }],
    },
    {
      name: 'driver',
      type: 'reference',
      title: 'Driver',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'user'}],
    },
  ],
}
