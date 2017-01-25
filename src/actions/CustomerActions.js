export function addCustomer(state, customer) {
  return state.concat(customer);
}

export function deleteCustomer(state, customer) {
  return state.filter(currentCustomer => currentCustomer._id !== customer._id);
}

export function changeCustomer(state, customer) {
  return state.map((current, i) => 
    current._id === customer._id ? customer : current
  );
}