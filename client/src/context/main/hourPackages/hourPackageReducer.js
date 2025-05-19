import { GET_HOUR_PACKAGE } from '../../types';

const hourPackageReducer = (state, action) => {
  switch (action.type) {
    case GET_HOUR_PACKAGE: {
      return {
        ...state,
        current: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default hourPackageReducer;
