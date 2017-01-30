import { 
  GraphQLNonNull, 
  GraphQLSchema, 
  GraphQLString, 
  GraphQLObjectType, 
  GraphQLList,
  GraphQLFloat
 } from 'graphql';

import customersQuery from '../queries/customersQuery';
import customerQuery from '../queries/customerQuery';

import addCustomer from '../mutations/addCustomer';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      customers: customersQuery,
      customer: customerQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      addCustomer: addCustomer 
    }
  })
});


export default schema;