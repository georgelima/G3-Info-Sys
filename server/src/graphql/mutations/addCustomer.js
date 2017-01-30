import { 
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import CustomerModel from '../../models/customer';

import customerType from '../types/customerType';

export default {
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
  resolve: (root, { name, email, cellphone, street, city, state }) => {
    return new Promise((resolve, reject) => {
      CustomerModel.create({ name, email, cellphone, street, city, state })
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}