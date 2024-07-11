
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reuse from "./allinone/Reuse";
import Demo from "./Demo";
import Listofusers from "./Listofusers";
import Spinner from "./Spinners/Spinner";
import Loader from "./Loaders/Loader";
import Alert from "./Notifyandalert/Alert";
import Setlogic from "./Skeleton/Setlogic";
import Loaderindex from "./Loaders/Loaderindex";
import CustomizedProgressBars from "./Loaders/CustomizedProgressBars";
import CircularIntegration from "./Loaders/CircularIntegration";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reuse" element={<Reuse />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/listofusers" element={<Listofusers />} />
          <Route path="/spinner" element={<Spinner />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/setlogic" element={<Setlogic />} />
          <Route path="/loaderindex" element={<Loaderindex />} />
          <Route path="/customized" element={<CustomizedProgressBars />} />
          <Route path="/circularintegration" element={<CircularIntegration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
