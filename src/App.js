import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className='m-3'>
      <Counter title="Profile" value={1} image="images/profile.png"/>
      <Counter title="User" value={1} image="images/user.jpg"/>
    </div>
  );
}

export default App;
