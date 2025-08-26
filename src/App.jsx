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
      <div className="mx-[50px] sm:mx-[100px] lg:mx-[200px]">
        <Header/>
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
