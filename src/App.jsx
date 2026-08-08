import "./App.css";

function App() {
  return (
    <main className="site">
      <header className="header">
        <img
          src="/images/logo.png"
          alt="ONE Academy"
          className="logo"
        />

        <button className="menu" aria-label="فتح القائمة">
          ☰
        </button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">ONE ACADEMY</span>

          <h1>
            ابنك قادر على
            <span> أكثر مما تتخيل.</span>
          </h1>

          <p>
            في ONE Academy نحول الفضول إلى مهارة، والمهارة إلى إنجاز،
            والإنجاز إلى ثقة تصنع المستقبل.
          </p>

          <a className="booking-button" href="#contact">
            احجز الآن
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/images/hero-composition.png"
            alt="طلاب ONE Academy أثناء التعلم والعمل والإنجاز"
          />
        </div>
      </section>
    </main>
  );
}

export default App;