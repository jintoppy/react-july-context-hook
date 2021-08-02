import useSize from './hooks/useSize';
import DeviceCheck from './DeviceCheck';
import GithubSearch from './GithubSearch';
import './App.css';

const App = () => {
  // const size = useSize();
  return (
    <div className="App">
      {/* <h2>Width: {size.width}</h2>
      <h2>Height: {size.height}</h2>
      <DeviceCheck /> */}
      <GithubSearch />
    </div>
  );
};

export default App;
