import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-[#333]'>
      <Navbar brand={'Sheriyans'}>
        <span className='text-amber-200'>Something Good</span>
      </Navbar>
      <Sections>
        <h2>superman</h2>
        <h2>batman</h2>
      </Sections>
      {/* <Footer /> */}
    </div>
  )
}

export default App
