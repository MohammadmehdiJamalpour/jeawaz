import { Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import MainPage from "./pages/MainPage";
import DashboardPage from "./pages/DashboardPage";

// import DashboardHome from "./pages/dashboard/Home";
// import DashboardCart from "./pages/dashboard/Cart";
// import DashboardProfile from "./pages/dashboard/Profile";
// import DashboardMessages from "./pages/dashboard/Messages";
// import DashboardMyComments from "./pages/dashboard/MyComments";

function App() {
  return (
    <Routes>

      <Route element={<AppLayout />}>
        <Route path="/" element={<MainPage />} />

        {/* Dashboard + nested routes */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<></>} />
          <Route path="cart" element={<></>} />
          <Route path="profile" element={<></>} />
          <Route path="messages" element={<></>} />
          <Route path="my-comments" element={<></>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
