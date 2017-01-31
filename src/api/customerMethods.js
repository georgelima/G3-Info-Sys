export function fetchCustomers() {
  return new Promise((resolve, reject) => {

    fetch(`http://localhost:3001/graphql?query={
      customers { _id, name, email, cellphone, city, state }
    }`).then(res => res.json())
      .then(formatedResponse => resolve(formatedResponse))
      .catch(err => reject(err));
  });
  
} 