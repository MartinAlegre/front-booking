import { Route, Routes } from "react-router-dom";
import AllBookingsPage from "./pages/AllBookinsPage";
import NewBookingPage from "./pages/NewBookingPage";
import Layout from "./components/layout/Layout";

function App() {
  return(
    <div>
      <Layout>
        <Routes>
          <Route path ='/' element={<AllBookingsPage />} />
          <Route path ='/new-bookings' element={<NewBookingPage />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
