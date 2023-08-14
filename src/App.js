import "./App.css";
import Pages from "./components/pages/pages";
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <Theme>
      <div className="bg-neutral-200 font" >
        <Pages/>
      </div>
      </Theme>
  );
}

export default App;
