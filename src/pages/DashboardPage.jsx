import Header from "../components/header/Header";
import DashboardBody from "../components/dashboard/DashboardBody";


const DashboardPage = () => (
  <div className="min-h-screen flex bg-red-50 flex-col">
    <Header />
    <DashboardBody className="flex-grow" />
  </div>
);

export default DashboardPage;
