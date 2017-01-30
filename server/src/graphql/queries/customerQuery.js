import { GraphQLString } from 'graphql';
import customerType from '../types/customerType';

import CustomerModel from '../../models/customer';

export default { 
  type: customerType,
  args: {
    _id: {
      type: GraphQLString
    }
  },
  resolve: (_, { _id }) => {
    return new Promise((resolve, reject) => {
      CustomerModel.findOne({ _id: _id }).exec((err, customer) => {
        if (err) reject(err);
        resolve(customer);
      });
    });
  }
}