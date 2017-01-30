/* @flow */

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
  resolve: (_: any, _id: any): Promise<any> => {
    return new Promise((resolve: Function, reject: Function) => {
      CustomerModel.findOne({ _id: _id }).exec((err: string, customer: Object) => {
        if (err) reject(err);
        resolve(customer);
      });
    });
  }
}