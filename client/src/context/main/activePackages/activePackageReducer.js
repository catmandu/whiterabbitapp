import { GET_ACTIVE_PACKAGE } from '../../types';

const activePackageReducer = (state, action) => {
  switch (action.type) {
    case GET_ACTIVE_PACKAGE: {
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

export default activePackageReducer;
