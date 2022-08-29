import "./App.css";
import { Button } from "./components/ButtonClickEvent";
import { Greet } from "./components/Greet";
import { Heading } from "./components/HeadingChildren";
import { Input } from "./components/InputChangeEvent";
import { Oscar } from "./components/OscarComponent";
import { PersonList } from "./components/PersonListArrayOfObjects";
import { Person } from "./components/PersonObject";
import { Status } from "./components/StatusConditional";
import { name, personList } from "./constants";

function App() {
  return (
    <div className="App">
      <Greet name="Lala" messages={20} isLoggedIn={true} />
      <Person name={name} />
      <PersonList personList={personList} />
      <Status status="success" />
      <Heading> SuperHero Movie </Heading>
      <Oscar>
        <Heading>SuperHero Movie</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("clicked", event, id);
        }}
      />
      <Input
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
