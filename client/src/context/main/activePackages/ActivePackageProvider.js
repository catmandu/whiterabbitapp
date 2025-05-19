import { useReducer, useContext } from 'react';
import activePackageContext from './activePackageContext';
import activePackageReducer from './activePackageReducer';
import { GET_ACTIVE_PACKAGE } from '../../types';
import axios from 'axios';

const ActivePackageProvider = ({ children }) => {
  const initialState = {
    current: {},
  };

  const [state, Dispatch] = useReducer(activePackageReducer, initialState);

  const GetActivePackage = async () => {
    try {
      const response = await axios.get(
        '/api/active-packages/67abcf533edd9d3b3baa41d7'
      );

      Dispatch({ type: GET_ACTIVE_PACKAGE, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const providerValue = {
    current: state.current,
    GetActivePackage,
  };

  return (
    <activePackageContext.Provider value={providerValue}>
      {children}
    </activePackageContext.Provider>
  );
};

export default ActivePackageProvider;
