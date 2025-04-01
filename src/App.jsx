import "./App.css";
import "./styles/res1024.css";
import "./styles/res768.css";
import "./styles/res600.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Home from "./components/Home";
import Categoriesfor from "./pages/Categoriesfor";
import Results from "./pages/Results";
import Grants from "./pages/Grants";
import { useTranslation } from "react-i18next";
import Ourhelp from "./pages/Ourhelp";
import Courses from "./pages/Courses";
import WhyUs from "./pages/WhyUs";
import FAQ from "./pages/FAQ";
import Contactus from "./pages/Contactus";
import Footer from "./pages/Footer";


function App() {
  const language = localStorage.getItem("i18nextLng");
  const { t, i18n } = useTranslation();
  

  
  const handleChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };
  return (
    <>
      <Navbar
        handleChange={handleChange}
        t={t}
        i18n={i18n}
        language={language}
        
      />
      <Home/>
      <Hero t={t}/>
      <Categoriesfor t={t} />
      <Results t={t} />
      <Grants t={t} />
      <Ourhelp t={t} />
      <Courses t={t} />
      <WhyUs t={t} />
      <FAQ t={t} />
      <Contactus t={t} />
      <Footer t={t} />
    </>
    )
}

export default App
