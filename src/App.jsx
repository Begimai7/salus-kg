import { AboutUs } from "./components/about-us/AboutUs";
import { ContactUs } from "./components/contact-us/ContactUs";
import { Footer } from "./components/footer/Footer";
import { InformationBlock } from "./components/information-block/InformationBlock";
import { Main } from "./components/main/Main";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <AboutUs />
      <ContactUs />
      <InformationBlock />
      <Footer />
    </div>
  );
}

export default App;
