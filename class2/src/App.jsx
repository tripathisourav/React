import React from 'react'
import './index.css'
import bg from './assets/bgc.png';
import wn from './assets/winter.png';


const App = () => {
  return (
    <div id='app' className='px-3 w-full min-h-screen bg-black'>
      <div id='nav' className="py-7.25 flex flex-row justify-between items-center w-full h-10 text-[#bebebe]">
        <h2 className='text-[1.5rem]'>DVSY</h2>
        <div className='flex align-center gap-3 text-[0.7rem]'>
          <h4 className='uppercase bg-[#222222] px-3 py-2  rounded-md'>Designers</h4>
          <h4 className='uppercase bg-[#222222] px-3 py-2  rounded-md'>Collabs</h4>
          <h4 className='uppercase bg-[#222222] px-3 py-2  rounded-md'>Events</h4>
          <h4 className='uppercase bg-[#222222] px-3 py-2  rounded-md'>Blog</h4>
          <h4 className='uppercase bg-[#222222] px-3 py-2  rounded-md'>Card</h4>
          <h4 className='uppercase bg-[#222222] px-3 py-2  rounded-md'>Get IN TOUCH</h4>
        </div>
      </div>
      <div className="h-[92vh] w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${bg})` }}></div>

      
      <div className='flex justify-between items-start w-full py-3'>
        <div className='flex flex-col justify-between items-start px-10 py-10 bg-[#1E1E1E] text-white h-[28vh] w-[22vw] rounded-lg'>
          <div>
            <h2 className='text-[1.12rem] mb-3'>INDEPENDENCY</h2>
            <p className='text-[0.8rem]'>Explore the creativity of Independent designers from around the globe.</p>
          </div>
          <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5 text-xl"></i>LEARN MORE</button>
        </div>
        <div className='flex flex-col justify-between items-start px-10 py-10 bg-[#1E1E1E] text-white h-[28vh] w-[22vw] rounded-lg'>
          <div>
            <h2 className='text-[1.12rem] mb-3'>UNIQUITY</h2>
            <p className='text-[0.8rem]'>Discoder the charm of unique pieces that stands out effortlessly.</p>
          </div>
          <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5  text-xl"></i>LEARN MORE</button>
        </div>
        <div className='flex flex-col justify-between items-start px-10 py-10 bg-[#1E1E1E] text-white h-[28vh] w-[22vw] rounded-lg'>
          <div>
            <h2 className='text-[1.12rem] mb-3'>QUALITY</h2>
            <p className='text-[0.8rem]'>Experience unparalleled craftsmanship and attention to detail.</p>
          </div>
          <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5  text-xl"></i>LEARN MORE</button>
        </div>
        <div className='flex flex-col justify-between items-start px-10 py-10 bg-[#1E1E1E] text-white h-[28vh] w-[22vw] rounded-lg'>
          <div>
            <h2 className='text-[1.12rem] mb-3'>SUSTAINABILITY</h2>
            <p className='text-[0.8rem]'>Embrace eco-conscious fashion choices without compromising on style.</p>
          </div>  
          <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5  text-xl"></i>LEARN MORE</button>
        </div>
      </div>

      <div className='flex justify-between w-full px-35 py-8 text-amber-50'>
        <div>
          <h4 className='text-[0.8rem] uppercase'>Designers</h4>
          <h1 className='text-[2.5rem]'>150+</h1>
        </div>
        <div>
          <h4 className='text-[0.8rem] uppercase'>Clients</h4>
          <h1 className='text-[2.5rem]'>500+</h1>
        </div>
        <div>
          <h4 className='text-[0.8rem] uppercase'>Masterpieces</h4>
          <h1 className='text-[2.5rem]'>20k+</h1>
        </div>
        <div>
          <h4 className='text-[0.8rem] uppercase'>Events</h4>
          <h1 className='text-[2.5rem]'>50+</h1>
        </div>
      </div>

      <div className='flex justify-between text-amber-50 w-full '>
        <div className='flex flex-col justify-between items-start px-10 py-10 bg-[#1E1E1E]  w-[48vw] rounded-lg gap-8'>
          <h4 className='text-[1.1rem]'>ABOUT</h4>
          <div className='flex flex-col align-center gap-3'>
            <h1 className='text-[2.2rem] text-white'>WHERE FASHION MEETS FREEDOM</h1>
            <div className='flex align-center justify-between text-[0.9rem] font-light'>
              <p className='w-[45%]'>We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we we offer, presenting customers with exclusive collections from Independent designers. With a commitement to fostering a community of creativity and innovation,</p>
              <p className='w-[45%]'>we strive to connect designers with fashion enthusiasts who appreciate the artistry individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
            </div>
          </div>
        </div>
        <div className="w-[48vw] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${wn})` }}></div>
      </div>

      <h1>OUR ADVANTAGES</h1>

      <div>
        <div className="w-[48vw] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${wn})` }}></div>
        <div>
          <div>
            <div>
              <h3>Independent designers</h3>
              <p>Our platform celebrates the ingenuity of Independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by Independent designers.</p>
            </div>
            <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5  text-xl"></i>LEARN MORE</button>
          </div>

          <div>
            <div>
              <h3>Independent designers</h3>
              <p>Our platform celebrates the ingenuity of Independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by Independent designers.</p>
            </div>
            <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5  text-xl"></i>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[48vw] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${wn})` }}></div>
        <div>
          <div>
            <div>
              <h3>Independent designers</h3>
              <p>Our platform celebrates the ingenuity of Independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by Independent designers.</p>
            </div>
            <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5  text-xl"></i>LEARN MORE</button>
          </div>

          <div>
            <div>
              <h3>Independent designers</h3>
              <p>Our platform celebrates the ingenuity of Independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by Independent designers.</p>
            </div>
            <button className='text-[0.9rem]'><i class="ri-arrow-right-up-line border-2 px-1 py-1 rounded-4xl bg-[#bababaa4] mx-2.5  text-xl"></i>LEARN MORE</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default App

