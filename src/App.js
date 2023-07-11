import { Routes, Route, HashRouter } from "react-router-dom";

import Layout from "./layout";
import Homepage from "pages/homepage";
import About from "pages/about";
import List from "pages/list";
import Bless from "pages/bless";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="list" element={<List />} />
          <Route path="bless" element={<Bless />} />
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
