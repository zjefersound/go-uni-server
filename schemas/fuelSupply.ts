import { Rule } from "sanity";

export default {
  name: 'fuelSupply',
  type: 'document',
  title: 'Fuel supply',
  fields: [
    {
      name: 'pricePerLiter',
      type: 'number',
      title: 'Price per liter',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
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
