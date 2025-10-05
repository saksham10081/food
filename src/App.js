import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import SipsPage from "./components/Sips/SipsPage";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      {/* Replace Body with SipsPage for this task */}
      <SipsPage />
    </div>
  );
};






export default AppLayout;
