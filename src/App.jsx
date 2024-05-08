import Nav from "./components/NavigationBar/Nav";
import Footer from "./components/Footer/Foot";
import Hero from "./components/Hero/NotLoggedIn/Hero";
import Dashboard from "./components/Hero/LoggedIn/Dashboard/Dash";
import { useState } from "react";

const App = () => {
  // All States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      <main className="flex-grow">{isLoggedIn ? <Dashboard /> : <Hero />}</main>
      <Footer />
    </div>
  );
};

export default App;
