import { useReducer } from 'react';
import hourPackageContext from './hourPackageContext';
import hourPackageReducer from './hourPackageReducer';
import { GET_HOUR_PACKAGE } from '../../types';
import axios from 'axios';

const HourPackageProvider = ({ children }) => {
  const initialState = {
    current: {},
  };

  const [state, Dispatch] = useReducer(hourPackageReducer, initialState);

  const GetHourPackage = async (id) => {
    try {
      const response = await axios.get(`/api/hour-packages/${id}`);
      Dispatch({ type: GET_HOUR_PACKAGE, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const providerValue = {
    current: state.current,
    GetHourPackage,
  };

  return (
    <hourPackageContext.Provider value={providerValue}>
      {children}
    </hourPackageContext.Provider>
  );
};

export default HourPackageProvider;
