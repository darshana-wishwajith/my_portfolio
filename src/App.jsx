import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'
import Content from './components/Content'
import BGCircle from './components/BGCircle'

const App = () => {
  return (
    <>
      {/* Floating social icons */}
      <div className='hidden lg:flex'>
        <SocialBar/>
      </div>
      

      {/* Main container */}
      <div className="overflow-hidden">
        <div className='lg:mx-[200px] md:mx-[100px] mx-[25px] relative'>
          <Header/>
          <Content />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
