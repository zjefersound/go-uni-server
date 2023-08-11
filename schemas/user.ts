import {Rule} from 'sanity'

export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'Username',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      initialValue: 'common',
      options: {
        list: [
          {title: 'Driver', value: 'driver'},
          {title: 'Common', value: 'common'},
        ],
      },
    },
  ],
}
