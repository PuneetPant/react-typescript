
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/HeadingChildren';
import { Oscar } from './components/OscarComponent';
import { PersonList } from './components/PersonListArrayOfObjects';
import { Person } from './components/PersonObject';
import { Status } from './components/StatusConditional';
import { name, personList } from './constants';

function App() {
  return (
    <div className="App">
      <Greet name='Lala' messages={20} isLoggedIn={true} />
      <Person name={name} />
      <PersonList personList={personList} />
      <Status status='success' />
      <Heading> SuperHero Movie </Heading>
      <Oscar>
        <Heading>SuperHero Movie</Heading>
      </Oscar>
    </div>
  );
}

export default App;
