import { useState, useEffect, useRef } from 'react';
import artistImg from './Pic/Artist.jpeg';
import eventVideo from './Pic/sel_video.mp4';
import liveMusicImg from './Pic/live_music.png';
import corporateImg from './Pic/corporate.png';
import weddingImg from './Pic/wedding.png';
import splashImg from './Pic/splash_hero.png';
import logoImg from './Pic/logo.png';
import artistCollageImg from './Pic/artist_collage.jpg';
import eventsGridImg from './Pic/events_grid.jpg';
import galleryCollageImg from './Pic/gallery_collage.jpg';
import djArtistCollageImg from './Pic/dj_artist_collage.jpg';

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
  locations: ['Kolkata', 'Dhanbad', 'Siliguri', 'Assam', 'All Over India'],
  contactEmail: 'streamlineharmonyevents@gmail.com',
  contactPhone: '+91 7980171580',
  whatsapp: 'https://wa.me/917980171580',
  facebook: 'https://www.facebook.com/share/14jBRoRDFpT/',
  instagram: 'https://www.instagram.com/streamlineharmonyevents?igsh=cW0zc25lYzh0ZzJx',
  youtube: 'https://youtube.com/@streamlineharmonyevents?si=ANKzMDdJwFMIIh_O',
  linkedin: 'https://www.linkedin.com/in/streamline-harmony-4b1685414?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

const serviceTags = ['Live Music', 'Corporate Events', 'Private Parties', 'Puja Bookings', 'Wedding Planning', 'Artist Booking', 'Collage Fest & Social', 'Sound & Light'];

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
    name: 'Vinod Gupta',
    role: 'Wedding Client, Jharkhand',
    quote: "I have known Streamline Harmony Event's since the moment they had planned my friend's wedding in Jharkhand. I've been staying in Jharkhand and I had my wedding last year in Dec. I was constantly in touch with the team of Streamline Harmony Event's, and honestly they have kept a very smooth communication throughout. They carried out every single detail which was presented to me as my wedding plan. Overall the whole family was happy with the management from the pre-wed party to the reception ceremony.",
    initial: 'VG'
  },
  {
    name: 'Shreya Roy',
    role: 'Family Get-Together Client',
    quote: "I've been following Streamline Harmony Event's via instagram and I have always looked up to the videos they post and the work which they do. I texted them one day asking that I want to arrange a family get-together party and they showed me with all possible ideas of venue, food, setup, pricing, guestlist maintenance and the cost. It was very convenient for me to choose amongst them and I have always appreciated their dedication towards their clients.",
    initial: 'SR'
  },
  {
    name: 'Niraj Shaw',
    role: 'Owner, Air Casa Resto Cafe',
    quote: '"It is hard to work with anyone else after working with your team, been working from 3 years and no complaints."',
    initial: 'NS'
  },
  {
    name: 'Susmita Dutta',
    role: 'Event Client',
    quote: 'I was a bit hesitant with balloon setup, didn\'t want it to look like child birthday party. I asked Guneet if muscularity and cute balloons would go blizzard oxymoron style. But omg! No words can explain how amazing the whole decor turned out to be.',
    initial: 'SD'
  },
  {
    name: 'Biswajit Ghosh',
    role: 'Birthday Party Client',
    quote: "Streamline Harmony Event's arranged a birthday party for my partner and they executed it end to end. It was very well planned. I honestly want to thank them that they managed it without any hassle. The setup was so cute and they made sure that it fits under my budget. Debojit da — You gave me beyond my imagination, thank you, dada ♥️🙏",
    initial: 'BG'
  },
  {
    name: 'Sharmistha Roychowdhury',
    role: 'Wedding Guest, Siliguri',
    quote: "I saw your show at my sister's wedding in Siliguri. Your show was amazing and everything from your test setup to the decorations was amazing. And your female artiste... the performance of the women was unbelievable. We enjoyed it very much. After watching that show, we will see your performance at my son's birthday get-together last November. We are all happy. We will be in touch with your event from now on at every event at home. Hats Off to Streamline Harmony Events and Entertainment.",
    initial: 'SR'
  },
  {
    name: 'Ramgopal Gupta',
    role: 'First-Time Client',
    quote: "Streamline Harmony Event's is an Events Management company for us first time to deal with them. We are very satisfied with work quality, very helpful team members, they were present whole time during the show time to support us. Thanks Debojit ji & Team.",
    initial: 'RG'
  },
  {
    name: 'Soumojit Ghorai',
    role: 'Reception Event Guest',
    quote: 'As the name reflects harmony, so as you guys united us through the music! What a splendid artistic performance in Siliguri Reception Event. I am sure, in upcoming days, "Streamlined hard works" and "harmonious dedication" will surely paid off.',
    initial: 'SG'
  },
  {
    name: 'Shankha Chakroborty',
    role: 'Manager, Novotel Hotel',
    quote: 'Streamline Harmony is a very professional and well-managed musical event organization. The team is supportive, organized, and passionate about delivering quality performances. It was a pleasure working with them. Highly recommended!',
    initial: 'SC'
  },
  {
    name: 'Sharmila Adhikary',
    role: 'Performing Artist',
    quote: 'Working with Streamline Harmony as a performing artist was an amazing experience. From sound check to stage management, everything was handled in a very professional and artist-friendly manner. The technical team was supportive, responsive, and made sure the sound, monitors, and lighting were perfectly balanced for the performance. Their coordination backstage was smooth, timings were well-managed. I would highly recommend Streamline Harmony to fellow artists and event organizers who want a smooth, high-quality show experience.',
    initial: 'SA'
  },
  {
    name: 'Souvick Das',
    role: 'Young Musician',
    quote: 'Streamline Harmony is very good for young generation musicians, singers, it gives us the opportunity to make our career better.',
    initial: 'SD'
  },
  {
    name: 'Shibnath Sengupta',
    role: 'Client',
    quote: 'Everything is very prominent 😍😍😍 Management is really great 👌👌👌',
    initial: 'SS'
  },
  {
    name: 'Titas Pyne',
    role: 'DJ Artist',
    quote: "Management is really great...! As an artist I'm really comfortable with the Streamline Harmony Event's.",
    initial: 'TP'
  },
  {
    name: 'Diganta Dhara',
    role: 'Client',
    quote: 'Excellent production in every aspect, simply fantastic. Thank you, Debajit Basak ♥️👍🏻',
    initial: 'DD'
  },
  {
    name: 'Sourav Das',
    role: 'Client',
    quote: 'Good Management and good service.',
    initial: 'SD'
  },
  {
    name: 'Anuradha Agarwal',
    role: 'Business Woman',
    quote: 'I saw your program at the Lake view Hotel in Baharampur. It was very beautiful. What a beautiful program you did on Poyala Baishakh last year. And tell me the saxophone artist, violin artist — unbelievable! I never thought that such an instrumental program could happen. Excellent. A full house event and special thanks to Streamline Harmony Event and Entertainment and Debojit — hats off. I still follow you on Instagram. You are working hard and will do more great things in the future. I wish you all the best.',
    initial: 'AA'
  },
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
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="nav-social nav-wa" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="nav-social nav-fb" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
          <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="nav-social nav-ig" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
          <a href={company.youtube} target="_blank" rel="noopener noreferrer" className="nav-social nav-yt" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="nav-social nav-li" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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

      {/* ── Desktop Layout ── */}
      <div className="hero-desktop-layout">
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
            <div className="hero-stat"><strong>500+</strong><span>Celebrity Artists</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><strong>500+</strong><span>Locations Pan India</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><strong>250+</strong><span>Top Clients</span></div>
          </div>
        </div>
        <div className="hero-image-col">
          <div className="hero-artist-frame">
            <img src={artistImg} alt="Celebrity Artist" className="hero-artist-img" />
            <div className="hero-artist-badge">⭐ Exclusive Celebrity Artists</div>
          </div>
        </div>
      </div>

      {/* ── Mobile Layout ── */}
      <div className="hero-mobile-layout">
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

        {/* Celebrity Artist Photo exactly under the top text on mobile */}
        <div className="hero-image-col">
          <div className="hero-artist-frame">
            <img src={artistImg} alt="Celebrity Artist" className="hero-artist-img" />
            <div className="hero-artist-badge">⭐ Exclusive Celebrity Artists</div>
          </div>
        </div>

        {/* Moments scrolling photos gallery placed before Book an Event buttons on mobile */}
        <EventsPhotoGallery />

        {/* Buttons & Stats exact under the celebrity artist photo on mobile */}
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setPage('contact')}>Book an Event</button>
          <button className="btn-outline" onClick={() => setPage('events')}>Explore Services</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><strong>2000+</strong><span>Events Delivered</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>500+</strong><span>Celebrity Artists</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>500+</strong><span>Locations Pan India</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>250+</strong><span>Top Clients</span></div>
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

  useEffect(() => {
    if (window.innerWidth <= 900) {
      const timer = setTimeout(() => {
        const element = document.querySelector('.page-content');
        if (element) {
          const yOffset = -85; // accounts for fixed header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

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

      <section className="brand-pillars-section">
        <ScrollSection>
          <span className="section-eyebrow">Our Philosophy</span>
          <h2 className="section-title">Who We Are, Our Vision & Mission</h2>
        </ScrollSection>
        <div className="brand-pillars-grid">
          <ScrollSection className="brand-pillar-card who-we-are-card" delay={100}>
            <div className="pillar-icon">✨</div>
            <h3>Who We Are?</h3>
            <p>
              We cover all your A to Z needs at one place, be it a business need, celebratory event, product launch or a private gathering. Make your special moments even more special without going through the hassle of conceptualising it and that too in the most fancy and classy way, keeping your budget constraints in mind. We take charge of all the aspects to ease the burden on you and create fabulous events.
            </p>
          </ScrollSection>
          
          <ScrollSection className="brand-pillar-card vision-card" delay={200}>
            <div className="pillar-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To become one of India’s most trusted and innovative event management companies, known for creativity, excellence, and unmatched service quality.
            </p>
          </ScrollSection>

          <ScrollSection className="brand-pillar-card mission-card" delay={300}>
            <div className="pillar-icon">🚀</div>
            <h3>Our Mission</h3>
            <ul className="pillar-list">
              <li>
                <span className="bullet-point">✦</span>
                <span>To craft personalized experiences that exceed expectations</span>
              </li>
              <li>
                <span className="bullet-point">✦</span>
                <span>To deliver events with precision, passion, and professionalism</span>
              </li>
              <li>
                <span className="bullet-point">✦</span>
                <span>To innovate continuously and bring fresh concepts to every project</span>
              </li>
              <li>
                <span className="bullet-point">✦</span>
                <span>To create meaningful moments that last a lifetime</span>
              </li>
            </ul>
          </ScrollSection>
        </div>
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
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn social-wa">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
            <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="social-btn social-fb">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook Page</span>
            </a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="social-btn social-ig">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>@streamlineharmonyevents</span>
            </a>
            <a href={company.youtube} target="_blank" rel="noopener noreferrer" className="social-btn social-yt">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Channel</span>
            </a>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn social-li">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </ScrollSection>
    </main>
  );
}

// ─── Testimonials Auto Horizontal Scroller ───────────────────────────────────
function TestimonialsHScroller() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.3; // px per frame — slow, readable scroll

    const animate = () => {
      if (!pausedRef.current && !isDragging.current) {
        posRef.current += speed;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.scrollLeft = posRef.current;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Sync posRef when user releases drag
  const syncPos = () => {
    if (trackRef.current) posRef.current = trackRef.current.scrollLeft;
  };

  // Mouse drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };
  const onMouseUp = () => {
    isDragging.current = false;
    trackRef.current.style.cursor = 'grab';
    syncPos();
  };
  const onMouseLeave = () => {
    // Only stop drag — don't touch pausedRef (that's managed by outer wrapper)
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
    syncPos();
  };

  // Touch support for mobile swipe
  const touchStartX = useRef(0);
  const touchScrollStart = useRef(0);
  const onTouchStart = (e) => {
    pausedRef.current = true;
    touchStartX.current = e.touches[0].pageX;
    touchScrollStart.current = trackRef.current.scrollLeft;
  };
  const onTouchMove = (e) => {
    const walk = (touchStartX.current - e.touches[0].pageX) * 1.2;
    trackRef.current.scrollLeft = touchScrollStart.current + walk;
    posRef.current = trackRef.current.scrollLeft;
  };
  const onTouchEnd = () => {
    syncPos();
    pausedRef.current = false;
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
    posRef.current = trackRef.current.scrollLeft;
  };

  const doubled = [...testimonials, ...testimonials];

  return (
    <div
      className="testimonials-h-wrap"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        className="testimonials-h-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {doubled.map((t, i) => (
          <div key={i} className="testimonial-card testi-h-card">
            <div className="quote-mark">"</div>
            <p className="quote-body">{t.quote}</p>
            <div className="author-row">
              <div className="author-avatar">{t.initial}</div>
              <div>
                <strong className="author-name">{t.name}</strong>
                <span className="author-role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Events Photo Gallery ─────────────────────────────────────────────────────
const galleryData = [
  { src: artistCollageImg,   label: 'Exclusive Artists',  caption: 'Our curated network of celebrity performers' },
  { src: eventsGridImg,      label: 'Live Events',         caption: 'Electrifying stages across India' },
  { src: galleryCollageImg,  label: "Event's Gallery",     caption: 'Grand weddings & spectacular celebrations' },
  { src: djArtistCollageImg, label: 'DJ & Instrumental',   caption: 'DJs, Saxophonists, Violinists & more' },
];

function EventsPhotoGallery({ hideOnMobile = false }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 900 : false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (hideOnMobile && isMobile) return null;

  return (
    <section className="events-photo-gallery">
      <ScrollSection>
        <span className="section-eyebrow">Our Events</span>
        <h2 className="section-title">Moments We've Created</h2>
      </ScrollSection>

      <div
        className={`events-photo-strip ${hoveredIdx !== null ? 'strip-has-hover' : ''}`}
      >
        {galleryData.map((img, i) => (
          <div
            key={i}
            className={`events-photo-card ${hoveredIdx === i ? 'card-focused' : ''} ${hoveredIdx !== null && hoveredIdx !== i ? 'card-blurred' : ''}`}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <img
              src={img.src}
              alt={img.label}
              className="events-photo-img"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="events-photo-overlay">
              <span className="events-photo-label">{img.label}</span>
              <p className="events-photo-caption">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
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

      {/* ── Moments We've Created — Photo Gallery ── */}
      <EventsPhotoGallery hideOnMobile={true} />

      {/* ── Why Choose Us ── */}
      <ScrollSection className="why-us-section">
        <span className="section-eyebrow">Why Choose Us</span>
        <h2 className="section-title">Why Streamline Harmony?</h2>
        <div className="why-grid">
          {[
            { icon: '📍', text: 'Experience across Kolkata, Dhanbad, Siliguri, Assam & 500+ locations Pan India.' },
            { icon: '⭐', text: 'Access to elite Zee Bangla Sa Re Ga Ma celebrity artists — 500+ artists network.' },
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

      {/* ── What We Do ── */}
      <section className="page-intro">
        <ScrollSection className="page-intro-text">
          <span className="section-eyebrow">What We Do</span>
          <h2>Comprehensive Event Solutions</h2>
          <p>From sound and light to full wedding planning, we handle it all with meticulous attention to every detail — including catering and thematic setups for weddings and large-scale festivals.</p>
        </ScrollSection>
        <ScrollSection className="quick-stats-bar" delay={150}>
          <div className="stat-pill"><strong>2000+</strong><span>Events</span></div>
          <div className="stat-pill"><strong>500+</strong><span>Artists</span></div>
          <div className="stat-pill"><strong>500+</strong><span>Locations</span></div>
          <div className="stat-pill"><strong>250+</strong><span>Top Clients</span></div>
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
        <TestimonialsHScroller />
      </section>

    </main>
  );
}

// ─── Celebrity Page ───────────────────────────────────────────────────────────
const artistGalleryImages = [
  { src: artistCollageImg,   label: 'Exclusive Artists',   caption: 'Our curated network of celebrity performers' },
  { src: eventsGridImg,      label: 'Live Events',          caption: 'Electrifying stages across India' },
  { src: galleryCollageImg,  label: "Event's Gallery",      caption: 'Grand weddings & spectacular celebrations' },
  { src: djArtistCollageImg, label: 'DJ & Instrumental',    caption: 'DJs, Saxophonists, Violinists & more' },
];

function CelebrityPage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      const timer = setTimeout(() => {
        const element = document.querySelector('.page-content');
        if (element) {
          const yOffset = -85; // accounts for fixed header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="page-content">
      <ScrollSection className="page-intro-text" style={{ textAlign: 'center' }}>
        <span className="section-eyebrow">Exclusive Talent</span>
        <h2>Our Celebrity Artist Network</h2>
        <p>We bring the best of Zee Bangla Sa Re Ga Ma and legendary performers to your stage.</p>
      </ScrollSection>

      {/* ── HD Image Gallery ── */}
      <ScrollSection className="artist-gallery-section">
        <div className="artist-gallery-main">
          {artistGalleryImages.map((img, i) => (
            <div
              key={i}
              className={`artist-gallery-item ${active === i ? 'gallery-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="gallery-img"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="gallery-img-overlay" />
              <div className="gallery-label">
                <span className="gallery-label-badge">{img.label}</span>
                <p className="gallery-label-caption">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Thumbnail strip */}
        <div className="artist-gallery-thumbs">
          {artistGalleryImages.map((img, i) => (
            <button
              key={i}
              className={`gallery-thumb ${active === i ? 'thumb-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={img.label}
            >
              <img src={img.src} alt={img.label} />
              <span>{img.label}</span>
            </button>
          ))}
        </div>
      </ScrollSection>

      {/* ── Lightbox / Expanded View ── */}
      <div
        className={`gallery-lightbox ${active !== null ? 'lightbox-open' : ''}`}
        onClick={() => {}}
      >
        <img src={artistGalleryImages[active]?.src} alt="" className="lightbox-img" />
      </div>

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

  useEffect(() => {
    if (window.innerWidth <= 900) {
      const timer = setTimeout(() => {
        const formElement = document.querySelector('.contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

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
                  <option>Collage Fest & Social</option>
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
                <span>Kolkata · Dhanbad · Siliguri · Assam · All Over India</span>
              </div>
            </div>
            <div className="contact-social-links">
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-wa">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-fb">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-ig">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
              <a href={company.youtube} target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-yt">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube Channel
              </a>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-li">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
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
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-social footer-wa" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="footer-social footer-fb" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="footer-social footer-ig" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href={company.youtube} target="_blank" rel="noopener noreferrer" className="footer-social footer-yt" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social footer-li" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
          <span>Collage Fest & Social</span>
        </div>
        <div className="footer-links-col">
          <h4>Contact</h4>
          <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>
          <a href={`tel:${company.contactPhone}`}>{company.contactPhone}</a>
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: {company.contactPhone}</a>
          <span>Kolkata · Dhanbad · Siliguri · Assam · All Over India</span>
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
