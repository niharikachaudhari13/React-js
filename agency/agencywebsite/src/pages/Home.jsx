
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from '../components/About/About'
import Features from "../components/Features/Features";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Services from '../components/Services/Services'
function Home() {
  return (
    <div>
      
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Features/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
