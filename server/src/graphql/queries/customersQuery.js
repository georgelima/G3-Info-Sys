import { GraphQLList } from 'graphql';
import customerType from '../types/customerType';

import CustomerModel from '../../models/customer';

export default { 
  type: new GraphQLList(customerType),
  resolve: () => {
    return new Promise((resolve, reject) => {
      CustomerModel.find({}).exec((err, customers) => {
        if (err) reject(err);
        resolve(customers);
      });
    });
  }
}