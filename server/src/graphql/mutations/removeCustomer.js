/* @flow */

import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import CustomerModel from '../../models/customer';

import customerType from '../types/customerType';

const removeCustomerMutation = {
  type: customerType,
  args: {
    _id: {
      name: '_id',
      type: GraphQLID
    }
  },
  resolve: (_: any, { _id }:{ _id: string }): Promise<any> => {
    return new Promise((resolve, reject) => {
      CustomerModel.findByIdAndRemove(_id)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
  }
}

export default removeCustomerMutation;