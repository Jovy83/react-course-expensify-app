// import moment from 'moment' // cannot use this as this will produce a stack error

// const moment = require.requireActual("moment"); // will not work in newer versions of jest
const moment = jest.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
};
