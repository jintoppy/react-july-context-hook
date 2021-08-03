import { useReducer } from 'react';
import useSize from './hooks/useSize';
import DeviceCheck from './DeviceCheck';
import AppContext from './context';
import { AppReducer, initialState } from './reducer';
// import GithubSearch from './GithubSearch';
import Todo from './Todo';
import './App.css';

const App = () => {
  // const size = useSize();
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const store = {
    state,
    dispatch
  };

  return (
    <AppContext.Provider value={store}>
      <div className="App">
        {/* <h2>Width: {size.width}</h2>
        <h2>Height: {size.height}</h2>
        <DeviceCheck /> 
        <GithubSearch />*/}
        <Todo />
      </div>
    </AppContext.Provider>
  );
};

export default App;
