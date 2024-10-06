import React from 'react';
import './Home.css';  // Link the CSS for styling

const Home = () => {
  return (
    <div>
      {/* Features Section */}
      <section id="features" className="section-features">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Mood-Based Recommendations</h3>
            <p>Get personalized movie suggestions based on your current emotions.</p>
          </div>
          <div className="feature-item">
            <h3>Extensive Movie Database</h3>
            <p>Access a vast library of films across various genres and eras.</p>
          </div>
          <div className="feature-item">
            <h3>User Profiles</h3>
            <p>Create and customize your profile for better recommendations.</p>
          </div>
          <div className="feature-item">
            <h3>Rating System</h3>
            <p>Rate movies to improve future suggestions and track your favorites.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-container">
          <div className="how-it-works-item">
            <h3>Tell Us Your Mood</h3>
            <p>Share how you are feeling right now.</p>
          </div>
          <div className="how-it-works-item">
            <h3>Get Recommendations</h3>
            <p>Our AI suggests movies that match your mood.</p>
          </div>
          <div className="how-it-works-item">
            <h3>Enjoy Your Movie</h3>
            <p>Watch and rate to improve future recommendations.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-newsletter">
        <h2>Ready to Find Your Perfect Movie?</h2>
        <p>Sign up now and start discovering films that resonate with your emotions!</p>
        <div className="newsletter-signup">
          <input type="email" placeholder="Enter your email" />
          <button>Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Home;