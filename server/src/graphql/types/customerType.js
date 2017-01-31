/* @flow */

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLString
} from 'graphql';

import noteType from './noteType';

export default new GraphQLObjectType({
  name: 'Customer',
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    street: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    notes: { type: new GraphQLList(noteType) },
    createdAt: { type: GraphQLString }
  }
});