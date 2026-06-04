import { useState, useEffect, useRef } from 'react';
import artistImg from './Pic/Artist.jpeg';
import eventVideo from './Pic/sel_video.mp4';
import liveMusicImg from './Pic/live_music.png';
import corporateImg from './Pic/corporate.png';
import weddingImg from './Pic/wedding.png';
import splashImg from './Pic/splash_hero.png';
import logoImg from './Pic/logo.png';

// ─── Scroll Animation Hook ───────────────────────────────────────────────────
function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => { if (elementRef.current) observer.unobserve(elementRef.current); };
  }, []);
  return [elementRef, isVisible];
}

const ScrollSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${className} scroll-reveal ${isVisible ? 'reveal-active' : ''}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const company = {
  name: "Streamline Harmony Event's & Entertainments",
  locations: ['Kolkata', 'Dhanbad', 'Siliguri', 'Assam'],
  contactEmail: 'streamlineharmonyevents@gmail.com',
  contactPhone: '+91 98765 43210',
  facebook: 'https://www.facebook.com/share/14jBRoRDFpT/',
  instagram: 'https://www.instagram.com/streamlineharmonyevents?igsh=cW0zc25lYzh0ZzJx',
};

const serviceTags = ['Live Music', 'Corporate Events', 'Private Parties', 'Puja Bookings', 'Wedding Planning', 'Artist Booking', 'Fest & Social', 'Sound & Light'];

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

const testimonials = [
  {
    name: 'Anuradha Agarwal',
    role: 'Business Owner',
    quote: 'I saw your program at the Lake View Hotel in Baharampur on Poyala Baishakh. The saxophone and violin artists were unbelievable! I never thought such an instrumental program could happen. Full house event, hats off to Streamline Harmony and Debojit!',
    initial: 'AA'
  },
  {
    name: 'Asha R.',
    role: 'College Fest Organizer',
    quote: 'Streamline Harmony made our fest magical with a power-packed band and flawless coordination.',
    initial: 'AR'
  },
  {
    name: 'Soham M.',
    role: 'Cafe Owner',
    quote: 'The acoustic evening was a hit – talented musicians and smooth booking made the night unforgettable.',
    initial: 'SM'
  },
  {
    name: 'Priya S.',
    role: 'Wedding Host',
    quote: 'We got the perfect live set for our reception. Friendly team, great artists, and amazing sound.',
    initial: 'PS'
  }
];

// ─── Splash Screen ────────────────────────────────────────────────────────────
function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('in');
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), 2200);
    const t2 = setTimeout(() => onDone(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <div className={`splash-screen splash-${phase}`}>
      <div className="splash-bg" style={{ backgroundImage: `url(${splashImg})` }} />
      <div className="splash-overlay" />
      <div className="splash-content">
        <img src={logoImg} alt="Streamline Harmony Logo" className="splash-logo" />
        <div className="splash-tagline">Crafting Unforgettable Experiences</div>
        <div className="splash-dots">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <img
          src={logoImg}
          alt="Streamline Harmony"
          className="nav-logo"
          onClick={() => setPage('events')}
        />
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {[
            { key: 'events', label: 'Services' },
            { key: 'about', label: 'About' },
            { key: 'celebrity-artists', label: 'Artists' },
            { key: 'contact', label: 'Contact' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setPage(key); setMenuOpen(false); }}
              className={page === key ? 'nav-btn active' : 'nav-btn'}
            >
              {label}
            </button>
          ))}
          <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="nav-social nav-fb" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="nav-social nav-ig" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ setPage }) {
  return (
    <header className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${splashImg})` }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge animate-badge">Premier Event Management</div>
        <h1 className="hero-title">
          We Craft <span className="hero-highlight">Unforgettable</span><br />
          Experiences
        </h1>
        <p className="hero-subtitle">
          From grand celebrations to intimate gatherings — turning your vision into reality with creativity, precision, and style across {company.locations.join(', ')} & beyond.
        </p>
        <div className="hero-tags">
          {serviceTags.map((tag, i) => (
            <span key={tag} className="hero-tag" style={{ animationDelay: `${i * 0.1}s` }}>{tag}</span>
          ))}
        </div>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setPage('contact')}>Book an Event</button>
          <button className="btn-outline" onClick={() => setPage('events')}>Explore Services</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><strong>2000+</strong><span>Events Delivered</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>50+</strong><span>Celebrity Artists</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>50+</strong><span>Key Locations</span></div>
        </div>
      </div>
      <div className="hero-image-col">
        <div className="hero-artist-frame">
          <img src={artistImg} alt="Celebrity Artist" className="hero-artist-img" />
          <div className="hero-artist-badge">⭐ Exclusive Celebrity Artists</div>
        </div>
      </div>
    </header>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutPage() {
  const values = [
    { icon: '🎯', title: 'Precision', desc: 'Every detail meticulously planned — from venue setup to the last encore.' },
    { icon: '🎨', title: 'Creativity', desc: 'Unique concepts tailored to your vision, never off-the-shelf.' },
    { icon: '✨', title: 'Excellence', desc: 'Over 2000 events delivered with 100% commitment to quality.' },
    { icon: '❤️', title: 'Passion', desc: 'We love what we do — and it shows in every unforgettable moment we create.' },
  ];
  return (
    <main className="page-content">
      <section className="about-hero">
        <ScrollSection className="about-hero-content">
          <span className="section-eyebrow">Our Story</span>
          <h2>About Streamline Harmony Event's</h2>
          <p className="about-lead">
            At Streamline Harmony Event, we don't just create events — we craft <strong>unforgettable experiences</strong> that leave a lasting mark. From grand celebrations to intimate gatherings, our passion lies in turning your vision into reality with creativity, precision, and style.
          </p>
          <p className="about-body">
            Founded with a singular mission — to redefine event experiences in West Bengal and beyond — we have grown into one of the most trusted names in event management. Our team of dedicated professionals brings a wealth of expertise in live music curation, artist management, wedding planning, and large-scale entertainment production.
          </p>
          <p className="about-body">
            We proudly operate across <strong>Kolkata, Dhanbad, Siliguri, Assam</strong>, and expanding to new territories. Whether it's booking iconic Zee Bangla Sa Re Ga Ma artists for your stage, orchestrating a fairy-tale wedding, or producing a corporate gala, we handle every dimension of your event so you can simply enjoy the magic.
          </p>
        </ScrollSection>
        <ScrollSection className="about-logo-col" delay={200}>
          <div className="about-logo-frame">
            <img src={logoImg} alt="Streamline Harmony" className="about-logo" />
            <div className="about-logo-glow" />
          </div>
        </ScrollSection>
      </section>

      <section className="values-section">
        <ScrollSection>
          <span className="section-eyebrow">What Drives Us</span>
          <h2 className="section-title">Our Core Values</h2>
        </ScrollSection>
        <div className="values-grid">
          {values.map((v, i) => (
            <ScrollSection key={v.title} className="value-card" delay={i * 120}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </ScrollSection>
          ))}
        </div>
      </section>

      <ScrollSection className="social-cta-section">
        <div className="social-cta-inner">
          <span className="section-eyebrow">Follow Us</span>
          <h2>Stay Connected With Us</h2>
          <p>Follow our journey, watch live event highlights, and get a backstage pass to what makes every Streamline Harmony event special.</p>
          <div className="social-links">
            <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="social-btn social-fb">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Page</span>
            </a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="social-btn social-ig">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>@streamlineharmonyevents</span>
            </a>
          </div>
        </div>
      </ScrollSection>
    </main>
  );
}

// ─── Events Page ──────────────────────────────────────────────────────────────
function EventPage({ setPage }) {
  const services = [
    {
      title: 'Live Music & Celebrity Acts',
      subtitle: 'Zee Bangla Sa Re Ga Ma Artists',
      details: 'Featuring top-tier talent like Jojo, Nachiketa, and Durnibar for an unforgettable musical journey. We curate the perfect artist for your stage.',
      icon: '🎤',
      image: liveMusicImg
    },
    {
      title: 'Corporate & Private Events',
      subtitle: 'Professional Management',
      details: 'Seamless execution for corporate gatherings, private parties, and grand puja bookings. Trusted by Hard Rock Cafe, Barbeque Nation, and more.',
      icon: '🏢',
      image: corporateImg
    },
    {
      title: 'Weddings & Decorations',
      subtitle: 'Full Service Planning',
      details: 'Complete wedding solutions including catering, thematic decorations — grand gates, cartoon characters for kids, sound, light, and everything in between.',
      icon: '💍',
      image: weddingImg
    }
  ];

  return (
    <main className="page-content">
      <section className="page-intro">
        <ScrollSection className="page-intro-text">
          <span className="section-eyebrow">What We Do</span>
          <h2>Comprehensive Event Solutions</h2>
          <p>From sound and light to full wedding planning, we handle it all with meticulous attention to every detail — including catering and thematic setups for weddings and large-scale festivals.</p>
        </ScrollSection>
        <ScrollSection className="quick-stats-bar" delay={150}>
          <div className="stat-pill"><strong>2000+</strong><span>Events</span></div>
          <div className="stat-pill"><strong>50+</strong><span>Artists</span></div>
          <div className="stat-pill"><strong>50+</strong><span>Locations</span></div>
          <div className="stat-pill"><strong>8+</strong><span>Top Clients</span></div>
        </ScrollSection>
      </section>

      <section className="services-grid">
        {services.map((item, idx) => (
          <ScrollSection key={item.title} className="service-card" delay={idx * 150}>
            <div className="service-img-wrap">
              <img src={item.image} alt={item.title} className="service-img" />
              <div className="service-img-overlay" />
              <span className="service-icon">{item.icon}</span>
            </div>
            <div className="service-body">
              <span className="service-subtitle">{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
              <button className="service-cta" onClick={() => setPage('contact')}>
                Book Now <span className="arrow">→</span>
              </button>
            </div>
          </ScrollSection>
        ))}
      </section>

      <ScrollSection className="featured-event-card">
        <div className="featured-event-text">
          <span className="badge-purple">Featured Recent Event</span>
          <h2>31st Night Spectacular at Chandannagar</h2>
          <p>
            A massive sold-out 31st night event at the Chandannagar Alo Tourism Property. We orchestrated everything — sound, light, catering, live performances, dance groups, and DJs — creating an unforgettable night for thousands.
          </p>
          <div className="featured-tags">
            <span>🎆 New Year's Eve</span>
            <span>🎵 Live Music</span>
            <span>💃 Dance Groups</span>
            <span>🎧 DJ Night</span>
          </div>
        </div>
        <div className="featured-video-wrap">
          <video className="featured-video" controls autoPlay muted loop playsInline>
            <source src={eventVideo} type="video/mp4" />
          </video>
        </div>
      </ScrollSection>

      <ScrollSection className="instrumental-spotlight">
        <div className="spotlight-glow-orb" />
        <div className="spotlight-text">
          <span className="badge-purple accent">Signature Showcase ✨</span>
          <h2>Poyala Baishakh Splendor at Lake View Hotel, Baharampur</h2>
          <p>An unbelievable, full-house instrumental night that left the audience spellbound. A phenomenal saxophone and violin ensemble combined with state-of-the-art acoustics delivered a once-in-a-lifetime performance.</p>
          <div className="spotlight-tags">
            <span>🎷 Virtuoso Saxophone</span>
            <span>🎻 Solo Violinist</span>
            <span>🏨 Lake View Hotel</span>
            <span>🔥 100% Sold Out</span>
          </div>
        </div>
      </ScrollSection>

      <section className="wedding-section">
        <ScrollSection>
          <span className="section-eyebrow">Full Service</span>
          <h2 className="section-title">Wedding Planning & Decor</h2>
        </ScrollSection>
        <div className="wedding-grid">
          {[
            { icon: '🎨', title: 'Thematic Decoration', desc: 'Grand gates, thematic setups, and creative backdrops that transport guests.' },
            { icon: '🍲', title: 'Catering', desc: 'Exquisite culinary experiences tailored to your taste and guest count.' },
            { icon: '🎈', title: 'Special Additions', desc: 'Cartoon characters for kids, special entrances, themed photo booths and more.' },
            { icon: '💡', title: 'Production', desc: 'Professional sound and light systems focusing on creating a magical atmosphere.' },
          ].map((w, i) => (
            <ScrollSection key={w.title} className="wedding-card" delay={i * 100}>
              <span className="wedding-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </ScrollSection>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <ScrollSection>
          <span className="section-eyebrow">What Clients Say</span>
          <h2 className="section-title">Testimonials</h2>
        </ScrollSection>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <ScrollSection key={t.name} className="testimonial-card" delay={i * 120}>
              <div className="quote-mark">"</div>
              <p className="quote-body">{t.quote}</p>
              <div className="author-row">
                <div className="author-avatar">{t.initial}</div>
                <div>
                  <strong className="author-name">{t.name}</strong>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </section>

      <ScrollSection className="why-us-section">
        <span className="section-eyebrow">Why Choose Us</span>
        <h2 className="section-title">Why Streamline Harmony?</h2>
        <div className="why-grid">
          {[
            { icon: '📍', text: 'Experience across Kolkata, Dhanbad, Siliguri, Assam & 50+ locations.' },
            { icon: '⭐', text: 'Access to elite Zee Bangla Sa Re Ga Ma celebrity artists.' },
            { icon: '🏆', text: 'Over 2000 successful events delivered with professionalism.' },
            { icon: '🎯', text: 'Comprehensive management: Booking, Production, and Catering.' },
          ].map((w, i) => (
            <div key={i} className={`why-item animate-fade delay-${i + 1}`}>
              <span className="why-icon">{w.icon}</span>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </ScrollSection>
    </main>
  );
}

// ─── Celebrity Page ───────────────────────────────────────────────────────────
function CelebrityPage() {
  return (
    <main className="page-content">
      <ScrollSection className="page-intro-text" style={{ textAlign: 'center' }}>
        <span className="section-eyebrow">Exclusive Talent</span>
        <h2>Our Celebrity Artist Network</h2>
        <p>We bring the best of Zee Bangla Sa Re Ga Ma and legendary performers to your stage.</p>
      </ScrollSection>

      <ScrollSection className="artists-panel">
        <div className="artists-grid">
          {celebrityArtists.map((artist, i) => (
            <div key={artist} className={`artist-chip animate-fade delay-${(i % 5) + 1}`}>
              {artist}
            </div>
          ))}
          <div className="artist-chip chip-more">And Many More...</div>
        </div>
      </ScrollSection>

      <ScrollSection className="clients-panel" delay={100}>
        <span className="section-eyebrow">Our Clientele</span>
        <h2>Featured Clients</h2>
        <p>Trusted by the best clubs, cafes, and restaurants in the region.</p>
        <div className="clients-grid">
          {clients.map((c, i) => (
            <div key={c} className={`client-chip animate-fade delay-${(i % 5) + 1}`}>{c}</div>
          ))}
        </div>
      </ScrollSection>
    </main>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', eventType: 'Live Music / Celebrity Artist', location: '', message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Event Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nEvent Type: ${formData.eventType}\nLocation: ${formData.location}\nMessage: ${formData.message}`);
    window.location.href = `mailto:${company.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <main className="page-content">
      <div className="contact-layout">
        <ScrollSection className="contact-form-col">
          <span className="section-eyebrow">Get In Touch</span>
          <h2>Book Your Event</h2>
          <p>Complete the form below and our team will match your event with the right musicians and management services.</p>
          {sent && (
            <div className="success-banner">
              ✅ Your email client has been opened with your inquiry!
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Event Type</label>
                <select name="eventType" value={formData.eventType} onChange={handleChange}>
                  <option>Live Music / Celebrity Artist</option>
                  <option>Corporate Event</option>
                  <option>Wedding Planning</option>
                  <option>Private Party</option>
                  <option>Puja Booking</option>
                  <option>Fest & Social</option>
                </select>
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" name="location" placeholder="Kolkata, Dhanbad, Siliguri..." value={formData.location} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Tell Us About Your Event</label>
              <textarea name="message" rows="5" placeholder="Describe your event vision, expected guests, date..." value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-primary btn-full">Send Inquiry →</button>
          </form>
        </ScrollSection>

        <ScrollSection className="contact-info-col" delay={200}>
          <div className="contact-info-card">
            <img src={logoImg} alt="Streamline Harmony" className="contact-logo" />
            <h3>Streamline Harmony</h3>
            <p>Event's & Entertainments</p>
            <div className="contact-details">
              <div className="contact-detail-row">
                <span className="detail-icon">✉️</span>
                <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>
              </div>
              <div className="contact-detail-row">
                <span className="detail-icon">📞</span>
                <a href={`tel:${company.contactPhone}`}>{company.contactPhone}</a>
              </div>
              <div className="contact-detail-row">
                <span className="detail-icon">📍</span>
                <span>{company.locations.join(', ')} & Beyond</span>
              </div>
            </div>
            <div className="contact-social-links">
              <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-fb">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </a>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-ig">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </ScrollSection>
      </div>
    </main>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logoImg} alt="Streamline Harmony" className="footer-logo" />
          <p>Crafting unforgettable experiences across West Bengal & beyond since day one.</p>
          <div className="footer-socials">
            <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="footer-social footer-fb" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="footer-social footer-ig" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <button onClick={() => setPage('events')}>Services</button>
          <button onClick={() => setPage('about')}>About Us</button>
          <button onClick={() => setPage('celebrity-artists')}>Celebrity Artists</button>
          <button onClick={() => setPage('contact')}>Contact</button>
        </div>
        <div className="footer-links-col">
          <h4>Services</h4>
          <span>Live Music</span>
          <span>Corporate Events</span>
          <span>Wedding Planning</span>
          <span>Puja Bookings</span>
          <span>Fest & Social</span>
        </div>
        <div className="footer-links-col">
          <h4>Contact</h4>
          <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>
          <a href={`tel:${company.contactPhone}`}>{company.contactPhone}</a>
          <span>{company.locations.join(' · ')}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 {company.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [page, setPage] = useState('events');

  const handleSetPage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!splashDone) return <SplashScreen onDone={() => setSplashDone(true)} />;

  return (
    <div className="app-root">
      <Navbar page={page} setPage={handleSetPage} />
      <Hero setPage={handleSetPage} />
      <div key={page} className="page-transition">
        {page === 'events' && <EventPage setPage={handleSetPage} />}
        {page === 'about' && <AboutPage />}
        {page === 'celebrity-artists' && <CelebrityPage />}
        {page === 'contact' && <ContactPage />}
      </div>
      <Footer setPage={handleSetPage} />
    </div>
  );
}

export default App;
