import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLList,
  GraphQLID,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Item',
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    item: { type: GraphQLString },
    unitValue: { type: GraphQLFloat },
    amount: { type: GraphQLFloat } 
  }
}); 