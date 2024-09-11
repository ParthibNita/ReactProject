import Navbar from './components/Navbar'
import BodySection from './components/BodySection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import PricingSection from './components/PricingSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <BodySection/>
      <FeatureSection/>
      <Workflow/>
      <PricingSection/>
      <Testimonials/>
      <Footer/>
    </div>
    </>
  )
}

export default App
