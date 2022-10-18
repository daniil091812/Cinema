import {Route, Routes} from "react-router";
import Layout from "../Components/Layout/Layout";
import Serials from "../Components/SerialsComponent/Serials";
import Films from "../Components/FilmsComponent/Films";
import Multfilms from "../Components/MultfilmsComponents/Multfilms";

function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route path="serials" element={<Serials/>}/>
    <Route path="films" element={<Films/>}/>
    <Route path="multfilms" element={<Multfilms/>}/>
  </Route>
</Routes>
    </div>
  );
}

export default App;
