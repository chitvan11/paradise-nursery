import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p className="tagline">Bring Nature Into Your Home</p>

        <div className="about-box">
          <h2>About Us</h2>
          <p>
            At Paradise Nursery, we believe every home deserves greenery.
            We offer beautiful indoor plants that improve air quality,
            reduce stress, and make your space feel alive.
          </p>
        </div>

        <Link to="/plants">
          <button className="main-btn">Get Started</button>
        </Link>
      </div>
    </div>
  )
}