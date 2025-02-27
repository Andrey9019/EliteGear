import Router from "./router";
import Header from "./components/layout/Header/Header";
// import Footer from "./components/layout/Footer";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Router />
    </main>
    {/* <Footer /> */}
  </div>
);

export default App;
