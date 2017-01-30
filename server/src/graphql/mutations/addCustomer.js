/* @flow */

import { 
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import CustomerModel from '../../models/customer';

import customerType from '../types/customerType';

const addCustomerMutation = {
  type: customerType,
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      name: 'email',
      type: new GraphQLNonNull(GraphQLString)
    },
    cellphone: {
      name: 'cellphone',
      type: GraphQLString
    },
    street: {
      name: 'street',
      type: GraphQLString
    },
    city: {
      name: 'city',
      type: GraphQLString
    },
    state: {
      name: 'state',
      type: GraphQLString
    }
  },
  resolve: (_: any, { name, email, cellphone, street, city, state }:{ name: string, email: string, cellphone: string, street:string, city:string, state: string }): Promise<any> => {
    return new Promise((resolve: Function, reject: Function) => {
      CustomerModel.create({ name, email, cellphone, street, city, state })
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}

export default addCustomerMutation;