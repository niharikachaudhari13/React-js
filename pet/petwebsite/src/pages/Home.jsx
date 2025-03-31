import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import Offers from '../components/Offers/Offers'
import Products from '../components/Products/Products'
import Services  from '../components/Services/Services'
import CTA from '../components/CTA/CTA'
import Brand from '../components/Brand/Brand'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
       <Header/> 
      <Hero/>
      <Category/>
      <Offers/>
      <Products/>
      <Services/>
      <CTA/>
      <Brand/>
      <Footer/>
    </div>
  )
}

export default Home
