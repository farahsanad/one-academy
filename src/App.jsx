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

<a
  className="booking-button"
  href="https://wa.me/201036545160?text=مرحبًا%20ONE%20Academy،%20أرغب%20في%20الاستفسار%20عن%20الكورسات"
  target="_blank"
  rel="noopener noreferrer"
>
  احجز الآن
</a>

<div className="hero-contact">
  <span>واتساب / اتصال</span>
  <strong dir="ltr">01036545160</strong>
</div>
        </div>

        <div className="hero-image">
          <img
            src="/images/hero-composition.png"
            alt="طلاب ONE Academy أثناء التعلم والعمل والإنجاز"
          />
        </div>
      </section>


<section className="programs">
  <div className="programs-heading">
    <span className="section-kicker">OUR PROGRAMS</span>

    <h2>
      مسارات تبدأ بالشغف…
      <span> وتنتهي بمهارة حقيقية</span>
    </h2>

    <p>
      من أول تجربة مع LEGO® والبرمجة، إلى الروبوتات
      والذكاء الاصطناعي.
    </p>
  </div>

  <div className="programs-grid">
    <article className="program-card">
      <img
        src="/images/little-explorer.png"
        alt="المستكشف الصغير"
      />

      <div className="program-card-content">
        <span className="program-age">6–9 سنوات</span>

        <h3>المستكشف الصغير</h3>

        <p>LEGO® SPIKE Essential</p>

        <a href="#little-explorer">اكتشف المسار</a>
      </div>
    </article>

    <article className="program-card">
      <img
        src="/images/robotics-9-16.jpg"
        alt="Robotics Engineering"
      />

      <div className="program-card-content">
        <span className="program-age">9–16 سنة</span>

        <h3>Robotics Engineering</h3>

        <p>LEGO® MINDSTORMS EV3</p>

        <a href="#robotics-engineering">اكتشف المسار</a>
      </div>
    </article>

    <article className="program-card">
      <img
        src="/images/coding-ai.png"
        alt="Robotics and AI"
      />

      <div className="program-card-content">
        <span className="program-age">المسار المتقدم</span>

        <h3>Robotics & AI</h3>

        <p>Electronics • Robotics • IoT • AI</p>

        <a href="#robotics-ai">اكتشف المسار</a>
      </div>
    </article>
  </div>
</section>


    </main>
  );
}

export default App;