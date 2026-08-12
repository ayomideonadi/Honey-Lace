import { Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Man from './components/Man.jsx'
import Woman from './components/Woman.jsx'
import About from './components/About.jsx'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <Header />

      <Routes>
        <Route path="/" element={
          <main className="hero-section" aria-label="Fashion showcase banner">
            <div className="hero-controls" aria-label="Slider controls">
              <button className="control-button active" type="button" aria-label="Selected slide">
                <i className="bi bi-gear-fill" aria-hidden="true"></i>
              </button>
              <button className="control-button" type="button" aria-label="Previous slide">
                <i className="bi bi-square" aria-hidden="true"></i>
              </button>
              <button className="control-button" type="button" aria-label="Next slide">
                <i className="bi bi-square" aria-hidden="true"></i>
              </button>
            </div>

            <div className="hero-content">
              <span className="eyebrow">Welcome To Honey Lace</span>
              <h1>For your softest moments</h1>
              <button className="shop-button" type="button">Shop Now</button>
            </div>
          </main>
        } />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={
          <main className="page-content section-dark">
            <div className="content-card">
              <h2>404 - Page Not Found</h2>
              <p>Sorry, the page you're looking for doesn't exist.</p>
            </div>
          </main>
        } />
      </Routes>
    </div>
  )
}

export default App;