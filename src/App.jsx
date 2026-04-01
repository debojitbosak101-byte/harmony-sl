import { useState, useEffect, useRef } from 'react';
import artistImg from './Pic/Artist.jpeg';
import eventVideo from './Pic/sel_video.mp4';

const company = {
  name: "Streamline Harmony Event's & Entertainment",
  locations: ['Kolkata', 'Dhanbad', 'Siliguri', 'Assam'],
  description:
    "Based in Kolkata, Dhanbad, Siliguri, and Assam, we specialize in organizing live music, corporate events, private parties, and puja bookings. We provide comprehensive event management including artist booking, sound, and light, focusing on creating memorable musical experiences.",
  contactEmail: 'streamlineharmonyevents@gmail.com',
  contactPhone: '+91 98765 43210'
};

// Custom Hook for Scroll Animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isVisible];
}

const ScrollSection = ({ children, className = "" }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${className} scroll-reveal ${isVisible ? 'reveal-active' : ''}`}
    >
      {children}
    </div>
  );
};

const celebrityArtists = [
  'Deyashini', 'Srijan', 'Jojo', 'Rathijeet', 'Nachiketa', 'Durnibar', 
  'Supratip', 'Anwesha', 'Snigdhajit', 'Aratika', 'Mayuri', 'Mansi', 
  'Lopa Mudra', 'Sayantani', 'Sneha', 'Bullet', 'Subhamita', 
  'Tanmay Kar', 'Keshab Dey', 'Suman Majumder'
];

const clients = [
  'Chai Break', 'Barbeque Nation', 'Hard Rock Cafe', 'Scrapyard', 
  'Tall Tales', 'Carpe Diem', 'Dizzy Dragon', 'Club Aeries'
];

const eventCards = [
  {
    title: 'Live Music & Celebrity Acts',
    subtitle: 'Zee Bangla Sa Re Ga Ma Artists',
    details: 'Featuring top-tier talent like Jojo, Nachiketa, and Durnibar for an unforgettable musical journey.'
  },
  {
    title: 'Corporate & Private Events',
    subtitle: 'Professional Management',
    details: 'Seamless execution for corporate gatherings, private parties, and grand puja bookings.'
  },
  {
    title: 'Weddings & Decorations',
    subtitle: 'Full Service Planning',
    details: 'Complete wedding solutions including catering, thematic decorations (Gates, Cartoons), and sound/light.'
  }
];

const serviceTags = ['Live Music', 'Corporate Events', 'Private Parties', 'Puja Bookings', 'Wedding Planning', 'Artist Booking', 'Sound & Light'];

const testimonials = [
  {
    name: 'Asha R.',
    role: 'College Fest Organizer',
    quote: 'Streamline Harmony made our fest magical with a power-packed band and flawless coordination.'
  },
  {
    name: 'Soham M.',
    role: 'Cafe Owner',
    quote: 'The acoustic evening was a hit – talented musicians and smooth booking made the night unforgettable.'
  },
  {
    name: 'Priya S.',
    role: 'Wedding Host',
    quote: 'We got the perfect live set for our reception. Friendly team, great artists, and amazing sound.'
  }
];

const galleryItems = [
  {
    title: 'College Fest Stage',
    subtitle: 'Vibrant live performance frames',
    label: 'Band Night',
    className: 'gallery-band'
  },
  {
    title: 'Cafe Music Session',
    subtitle: 'Warm acoustic evening scenes',
    label: 'Lounge Vibe',
    className: 'gallery-cafe'
  },
  {
    title: 'Private Showcase',
    subtitle: 'Elegant performance and lighting',
    label: 'Stage Show',
    className: 'gallery-stage'
  }
];

function App() {
  const [page, setPage] = useState('events');

  return (
    <div className="app-shell animate-fade">
      <header className="hero-panel animate-slide-up">
        <div className="hero-copy-block animate-slide-left delay-1">
          <p className="eyebrow">Streamline Harmony Event's & Entertainment</p>
          <h1>Expert Event Management in {company.locations.join(', ')}.</h1>
          <p className="hero-copy">
            We specialize in live music, corporate events, private parties, and puja bookings. We feature renowned celebrity artists and provide full-service event management, including sound, light, and decorations.
          </p>
          <div className="hero-features">
            {serviceTags.map((tag, idx) => (
              <span key={tag} className={`animate-fade delay-${(idx % 5) + 1}`}>{tag}</span>
            ))}
          </div>
          <div className="nav-buttons">
            <button onClick={() => setPage('events')} className={page === 'events' ? 'active' : ''}>
              Our Services
            </button>
            <button onClick={() => setPage('celebrity-artists')} className={page === 'celebrity-artists' ? 'active' : ''}>
              Celebrity Artists
            </button>
            <button onClick={() => setPage('contact')} className={page === 'contact' ? 'active' : ''}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image animate-slide-right delay-2">
          <div className="celebrity-poster-container">
            <img src={artistImg} alt="Exclusive Celebrity Artist" className="celebrity-poster" />
            <div className="poster-overlay">
              <span>EXCLUSIVE CELEBRITY ARTISTS</span>
            </div>
          </div>
        </div>
      </header>

      <div key={page} className="page-transition">
        {page === 'events' && <EventPage setPage={setPage} />}
        {page === 'celebrity-artists' && <CelebrityPage />}
        {page === 'contact' && <ContactPage />}
      </div>

      <footer className="footer-bar animate-fade delay-5">
        <span>{company.name} — Premier Event Management across West Bengal & Beyond.</span>
      </footer>
    </div>
  );
}

function CelebrityPage() {
  return (
    <main className="content-grid">
      <ScrollSection className="wide-card">
        <div className="artist-header">
          <h2>Our Celebrity Artist Network</h2>
          <p>We bring the best of Zee Bangla Sa Re Ga Ma and legendary performers to your stage.</p>
        </div>
        <div className="artist-list">
          {celebrityArtists.map((artist, idx) => (
            <div key={artist} className={`artist-tag animate-fade delay-${(idx % 5) + 1}`}>
              {artist}
            </div>
          ))}
          <div className="artist-tag more animate-fade delay-5">And Many More...</div>
        </div>
      </ScrollSection>

      <ScrollSection className="gallery-card">
        <div className="gallery-header">
          <div>
            <h2>Featured Clients</h2>
            <p>Our work at prominent clubs, cafes, and restaurants.</p>
          </div>
        </div>
        <div className="client-grid">
          {clients.map((client, idx) => (
            <div key={client} className={`client-item animate-fade delay-${(idx % 5) + 1}`}>
              {client}
            </div>
          ))}
        </div>
      </ScrollSection>
    </main>
  );
}

function EventPage({ setPage }) {
  const services = [
    {
      title: 'Live Music & Celebrity Acts',
      subtitle: 'Zee Bangla Sa Re Ga Ma Artists',
      details: 'Featuring top-tier talent like Jojo, Nachiketa, and Durnibar for an unforgettable musical journey.',
      icon: '🎤'
    },
    {
      title: 'Corporate & Private Events',
      subtitle: 'Professional Management',
      details: 'Seamless execution for corporate gatherings, private parties, and grand puja bookings.',
      icon: '🏢'
    },
    {
      title: 'Weddings & Decorations',
      subtitle: 'Full Service Planning',
      details: 'Complete wedding solutions including catering, thematic decorations (Gates, Cartoons), and sound/light.',
      icon: '💍'
    }
  ];

  return (
    <main className="content-grid">
      <ScrollSection className="intro-card">
        <div>
          <h2>Comprehensive Event Solutions</h2>
          <p>
            From sound and light to full wedding planning and decoration, we handle it all. Our expertise covers every detail, including catering and thematic setups for weddings and large-scale festivals.
          </p>
        </div>
        <div className="quick-stats">
          <div className="animate-fade delay-2">
            <strong>2000+</strong>
            <p>Events delivered</p>
          </div>
          <div className="animate-fade delay-3">
            <strong>50+</strong>
            <p>Celebrity artists</p>
          </div>
          <div className="animate-fade delay-4">
            <strong>4</strong>
            <p>Key Locations</p>
          </div>
        </div>
      </ScrollSection>

      <section className="event-list">
        {services.map((item, idx) => (
          <ScrollSection key={item.title} className="event-card-wrapper">
            <article className="event-card">
              <div className="card-image-wrapper">
                <div className="image-block" />
                <div className="card-icon">{item.icon}</div>
              </div>
              <div className="card-content">
                <span className="subtitle">{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <div 
                  className="card-footer-link" 
                  onClick={() => setPage('contact')}
                  style={{ cursor: 'pointer' }}
                >
                  Learn More <span>→</span>
                </div>
              </div>
            </article>
          </ScrollSection>
        ))}
      </section>

      <ScrollSection className="wide-card">
        <div className="recent-event-highlight">
          <div className="highlight-content">
            <span className="badge">Featured Recent Event</span>
            <h2>31st Night Spectacular at Chandannagar</h2>
            <p>
              Last year, we organized a massive 31st night event at the Chandannagar Alo Tourism Property. We handled everything from sound, light, and catering to live performances, dance groups, and DJs.
            </p>
            <div className="video-container">
              <video 
                className="event-video" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={eventVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="wedding-services">
        <h2>Full Wedding Planning & Decor</h2>
        <p>We provide all-inclusive wedding services for a stress-free celebration:</p>
        <div className="wedding-grid">
          <div className="wedding-item animate-fade delay-1">
            <span className="icon">🎨</span>
            <h3>Thematic Decoration</h3>
            <p>Grand gates, thematic setups, and creative backdrops.</p>
          </div>
          <div className="wedding-item animate-fade delay-2">
            <span className="icon">🍲</span>
            <h3>Catering</h3>
            <p>Exquisite culinary experiences tailored to your taste.</p>
          </div>
          <div className="wedding-item animate-fade delay-3">
            <span className="icon">🎈</span>
            <h3>Special Additions</h3>
            <p>Cartoon characters for kids, special entrances, and more.</p>
          </div>
          <div className="wedding-item animate-fade delay-4">
            <span className="icon">💡</span>
            <h3>Production</h3>
            <p>Professional sound and light focusing on creating a magical atmosphere.</p>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="wide-card">
        <h2>Why Choose Streamline Harmony?</h2>
        <div className="feature-list">
          <div className="feature-item animate-fade delay-1">
            <div className="feature-icon">✓</div>
            <p>Experience across Kolkata, Dhanbad, Siliguri, and Assam.</p>
          </div>
          <div className="feature-item animate-fade delay-2">
            <div className="feature-icon">✓</div>
            <p>Access to elite Zee Bangla Sa Re Ga Ma celebrity artists.</p>
          </div>
          <div className="feature-item animate-fade delay-3">
            <div className="feature-icon">✓</div>
            <p>Over 2000 successful events delivered with professionalism.</p>
          </div>
          <div className="feature-item animate-fade delay-4">
            <div className="feature-icon">✓</div>
            <p>Comprehensive management: Booking, Production, and Catering.</p>
          </div>
        </div>
      </ScrollSection>
    </main>
  );
}


function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Live Music / Celebrity Artist',
    location: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Event Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AEvent Type: ${formData.eventType}%0D%0ALocation: ${formData.location}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:streamlineharmonyevents@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="content-grid">
      <ScrollSection className="wide-card">
        <h2>Contact Streamline Harmony</h2>
        <p>Complete the form below and our team will match your event with the right musicians and management services.</p>
        <form className="contact-panel" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="you@example.com" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Event Type</label>
            <select 
              className="form-select"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
            >
              <option>Live Music / Celebrity Artist</option>
              <option>Corporate Event</option>
              <option>Wedding Planning</option>
              <option>Private Party</option>
              <option>Puja Booking</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input 
              type="text" 
              name="location"
              placeholder="Kolkata, Dhanbad, Siliguri, Assam..." 
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              rows="5" 
              name="message"
              placeholder="Tell us about your event requirements..." 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="primary-button">Send Message</button>
        </form>
      </ScrollSection>

      <ScrollSection className="contact-summary">
        <h3>Reach out anytime</h3>
        <p>Email: streamlineharmonyevents@gmail.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Service Locations: Kolkata, Dhanbad, Siliguri, Assam & Beyond</p>
        <p className="small-note">We provide comprehensive event solutions for all your musical and entertainment needs.</p>
      </ScrollSection>
    </main>
  );
}

export default App;
