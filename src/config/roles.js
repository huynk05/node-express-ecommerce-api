const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
};

const paymentGateway = {
  values: ['Gateway1', 'Gateway2', 'Gateway3'],
};

const fullfillmentStatus = {
  values: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));
const payment = paymentGateway.values;
const fullfillment = fullfillmentStatus.values

module.exports = {
  roles,
  roleRights,
  payment,
  fullfillment
};
