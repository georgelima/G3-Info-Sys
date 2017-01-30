import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLList,
  GraphQLID,
} from 'graphql';

import itemType from './itemType';

export default new GraphQLObjectType({
  name: 'Note',
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    idCustomer: { type: GraphQLID },
    totalValue: { type: GraphQLFloat },
    items: { type: new GraphQLList(itemType) } 
  }
});