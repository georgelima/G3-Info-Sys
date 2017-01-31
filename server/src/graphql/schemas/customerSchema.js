/* @flow */

import { 
  GraphQLNonNull, 
  GraphQLSchema, 
  GraphQLString, 
  GraphQLObjectType, 
  GraphQLList,
  GraphQLFloat
 } from 'graphql';

// queries
import customersQuery from '../queries/customersQuery';
import customerQuery from '../queries/customerQuery';

// mutations
import addCustomer from '../mutations/addCustomer';
import removeCustomer from '../mutations/removeCustomer';

const schema: Object = new GraphQLSchema({
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
      addCustomer,
      removeCustomer
    }
  })
});


export default schema;