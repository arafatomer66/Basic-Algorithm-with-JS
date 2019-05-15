const user = {
    first_name: 'bolaji',
    last_name: 'ayodeji',
    email: 'hi@bolajiayodeji.com',
    net_worth: 2000,
    contact: {
        email: 'hi@bolajiayodeji.com',
        telephone: 08109445504,
      }
  }
  Object.freeze(user);
  user.last_name = 'Samson';
  // this won't work, user is still immutable!
  user.net_worth = 983265975975950;
  // this won't work too, user is still immutable and still broke :(!
  console.log(user);  // user is immutated

  user.contact.telephone = 0 ;
// this will work because the nested object is not frozen



