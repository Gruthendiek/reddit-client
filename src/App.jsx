import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main>MAIN FEED</main>
      </div>
    </>
  );
}

export default App;