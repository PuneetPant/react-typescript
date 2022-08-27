
import './App.css';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonListArrayOfObjects';
import { Person } from './components/PersonObject';

function App() {
  const name = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const personList = [
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Peter',
      last: 'Pan'
    },
    {
      first: 'Robin',
      last: 'Hood'
    }
  ]
  return (
    <div className="App">
      <Greet name='Lala' messages={20} isLoggedIn={true} />
      <Person name={name} />
      <PersonList personList={personList} />
    </div>
  );
}

export default App;
