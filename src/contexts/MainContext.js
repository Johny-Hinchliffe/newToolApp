import React, {useState} from 'react';

const Context = React.createContext('english');

export const MainStore = ({children}) => {
  const [drawerState, setDrawerState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})
  
    return (
      <Context.Provider
        value={{ drawerState, setDrawerState }}
      >
        {children}
      </Context.Provider>
    );
  }


export default Context;