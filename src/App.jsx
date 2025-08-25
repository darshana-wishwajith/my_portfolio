import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'
import Content from './components/Content'

const App = () => {
  return (
    <>
      {/* Floating social icons */}
      <SocialBar/>

      {/* Main container */}
      <div className="mx-[200px]">
        <Header/>
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
