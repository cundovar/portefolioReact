import "./App.css";
import Pages from "./components/pages/pages";
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <Theme>
      <div className="bg-neutral-200" >
        <Pages/>
      </div>
      </Theme>
  );
}

export default App;
