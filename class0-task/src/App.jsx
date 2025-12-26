// import React from 'react'
import './index.css'
import Nav from './components/Nav.jsx'
import people from './people.png'
import Im1 from './components/im1.jsx'
import Im2 from './components/Im2.jsx'

function App() {
  return (
    <div id="app">
        <div id="Top">
          <h5>Home Page</h5>
          <h3>Clean web design and intuitive user experience that reflects the club's dynamic spirit and premium feel</h3>
        </div>

        <div id="bx">
        <Nav />
        <div id="main">
            <div id="dn">
                <button>Start your own journey</button>
                <div id="btm">
                    <div id="con">
                        <h5>Train with real professionals. Get the real results.</h5>
                        <img src={people} alt="" />
                    </div>
                    <div id="lnk">
                        <h3>Instagram<i class="ri-arrow-right-up-fill"></i></h3>
                        <h3>Facebook<i class="ri-arrow-right-up-fill"></i></h3>
                        <h3>TikTok<i class="ri-arrow-right-up-fill"></i></h3>
                    </div>
                </div>
            </div>
        </div>
        <div id="section1">
            <button>About Horizon</button>
            <h2>
                At Horizon, we don't just play tennis - we live it. Since 2021.
                our club has been home to players of all levels. from eager beginners to seasoned pros
            </h2>
        </div>
        <Im1 />
        <div id="facts">
            <h4>A few more facts about our team</h4>
            <div id="stats">
                <div className="stat">
                    <h3>12000+</h3>
                    <h5>Hours of play annualy</h5> 
                </div>
                <div className="stat">
                    <h3>89%</h3>
                    <h5>player Retention Rate</h5>
                </div>
                <div className="stat">
                    <h3>1200+</h3>
                    <h5>Active Members</h5>
                </div>
                <div className="stat">
                    <h3>125+</h3>
                    <h5>Annual Tournaments</h5>
                </div>
            </div>
        </div>
        <Im2 />
        </div>
    </div>)
}

export default App
