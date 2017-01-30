/* @flow */

import { GraphQLList } from 'graphql';
import customerType from '../types/customerType';

import CustomerModel from '../../models/customer';

export default { 
  type: new GraphQLList(customerType),
  resolve: (): Promise<any> => {
    return new Promise((resolve: Function, reject: Function) => {
      CustomerModel.find({}).exec((err: string, customers: Array<Object>) => {
        if (err) reject(err);
        resolve(customers);
      });
    });
  }
}