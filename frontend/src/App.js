import { Route, Routes } from "react-router-dom";
import History from "./pages/History";
import AddElection from "./pages/AddElection";
import Elections from "./pages/Elections";
import Home from "./pages/Home";
import Election from "./pages/Election";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import HowToUse from "./pages/HowToUse";
import News from "./pages/News";
import OpenElections from "./pages/OpenElections";
import Requests from "./pages/Requests";
import Request from "./pages/Request";
import Apply from "./pages/Apply";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elections" element={<Elections />} />
        <Route path="/open-elections" element={<OpenElections />} />
        <Route path="/elections/:id" element={<Election />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/requests/:id" element={<Request />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/history" element={<History />} />
        <Route path="/add-election" element={<AddElection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
