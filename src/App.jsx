import "./App.css";
import { useState } from "react";


function App() {
  const [activeProgram, setActiveProgram] = useState(null);
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
  href="https://wa.me/201036545160"
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

<button
  className="program-link"
  onClick={() => setActiveProgram("little-explorer")}
>
  اكتشف المسار
</button>
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

        <button
  className="program-link"
  onClick={() => setActiveProgram("robotics-engineering")}
>
  اكتشف المسار
</button>
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

{activeProgram === "little-explorer" && (
  <section className="program-details">
    <div className="program-details-inner">

      <button
        className="close-program"
        onClick={() => setActiveProgram(null)}
      >
        ← العودة للبرامج
      </button>

      <div className="program-details-hero">

        <div className="program-details-text">
          <span className="program-details-age">
            من 6 إلى 9 سنوات
          </span>

          <p className="program-details-label">
            LEGO® SPIKE Essential
          </p>

          <h2>المستكشف الصغير</h2>

          <p className="program-intro">
            برنامج عملي يعرّف الطفل بعالم الروبوتات والبرمجة
            والتكنولوجيا من خلال التعلم بالتجربة وبناء المشروعات
            باستخدام LEGO® SPIKE Essential.
          </p>
        </div>

        <img
          className="program-details-main-image"
          src="/images/little-explorer.png"
          alt="أطفال يتعلمون الروبوتات باستخدام LEGO SPIKE Essential"
        />

      </div>



      <div className="learning-section">
        <span className="section-kicker">ماذا سيتعلم؟</span>

        <h3>مهارات تتجاوز بناء الروبوت</h3>

        <div className="learning-grid">

          <div className="learning-item">
            <span>01</span>
            <p>التفكير المنطقي وحل المشكلات.</p>
          </div>

          <div className="learning-item">
            <span>02</span>
            <p>البرمجة بطريقة مبسطة ومناسبة لعمره.</p>
          </div>

          <div className="learning-item">
            <span>03</span>
            <p>تصميم وبناء روبوتات ونماذج عملية.</p>
          </div>

          <div className="learning-item">
            <span>04</span>
            <p>تنفيذ التحديات وتطوير الحلول بالتجربة.</p>
          </div>

          <div className="learning-item">
            <span>05</span>
            <p>العمل الجماعي وتنمية الثقة بالنفس.</p>
          </div>

          <div className="learning-item">
            <span>06</span>
            <p>أساسيات التكنولوجيا والذكاء الاصطناعي.</p>
          </div>

        </div>
      </div>


      <div className="learning-method">

        <div>
          <span className="section-kicker">طريقة التعلم</span>

          <h3>الطفل لا يشاهد فقط… بل يصنع ويجرب.</h3>

          <p>
            كل نشاط قائم على أن الطفل يفكر، ثم يبني،
            ويبرمج، ويجرب، ويكتشف الخطأ، ثم يطوّر الحل.
          </p>
        </div>

        <div className="learning-flow">
          <span>يفكر</span>
          <b>←</b>
          <span>يبني</span>
          <b>←</b>
          <span>يبرمج</span>
          <b>←</b>
          <span>يجرب</span>
          <b>←</b>
          <span>يطوّر</span>
        </div>

      </div>


      <div className="program-tools">

        <div className="tools-heading">
          <span className="section-kicker">الأدوات المستخدمة</span>
          <h3>LEGO® SPIKE Essential</h3>

          <p>
            مجموعة متكاملة من قطع البناء والمحركات
            والمكونات الإلكترونية التي يستخدمها الطفل
            لتنفيذ مشروعاته وتحدياته العملية.
          </p>
        </div>

        <div className="tools-images">

          <img
            src="/images/spike-essential-kit.png"
            alt="مجموعة LEGO SPIKE Essential"
          />

          <img
            src="/images/spike-essential-components.png"
            alt="مكونات LEGO SPIKE Essential"
          />

        </div>

      </div>


      <div className="program-booking">
        <p>جاهز تبدأ رحلة طفلك؟</p>

        <h3>احجز مكانًا في برنامج المستكشف الصغير</h3>

        <a
          href="https://wa.me/201036545160?text=مرحبًا%20ONE%20Academy،%20أرغب%20في%20حجز%20مكان%20في%20برنامج%20المستكشف%20الصغير."
          target="_blank"
          rel="noopener noreferrer"
        >
          احجز عبر واتساب
        </a>
      </div>

    </div>
  </section>
)}

{activeProgram === "robotics-engineering" && (
  <section className="program-details">
    <div className="program-details-inner">

      <button
        className="close-program"
        onClick={() => setActiveProgram(null)}
      >
        ← العودة للبرامج
      </button>

      <div className="program-details-hero">

        <div className="program-details-text">
          <span className="program-details-age">
            من 9 إلى 16 سنة
          </span>

          <p className="program-details-label">
            LEGO® MINDSTORMS EV3
          </p>

          <h2>Robotics Engineering</h2>

          <p className="program-intro">
            مسار عملي ينتقل فيه المتدرب من التعرف على مكونات
            الروبوت وبرمجته، إلى تصميم روبوتات متكاملة
            وحل تحديات هندسية بصورة أكثر استقلالية.
          </p>
        </div>

        <img
          className="program-details-main-image"
          src="/images/robotics-9-16.jpg"
          alt="Robotics Engineering at ONE Academy"
        />

      </div>


      <div className="levels-section">

        <div className="levels-heading">
          <span className="section-kicker">رحلة التعلم</span>
          <h3>3 مستويات من الأساس إلى التحدي الهندسي</h3>
        </div>

        <div className="levels-grid">

          <article className="level-card">
            <span className="level-number">01</span>
            <span className="level-name">LEVEL 1</span>

            <h4>الأساس القوي</h4>

            <ul>
              <li>التعرف على مكونات LEGO EV3.</li>
              <li>الحساسات ووظيفة كل منها.</li>
              <li>وحدة التحكم EV3 Brick.</li>
              <li>الموتورات وطريقة التوصيل.</li>
              <li>أساسيات تركيب الروبوت.</li>
              <li>أساسيات البرمجة خطوة بخطوة.</li>
            </ul>
          </article>


          <article className="level-card featured-level">
            <span className="level-number">02</span>
            <span className="level-name">LEVEL 2</span>

            <h4>التصميم والبرمجة</h4>

            <ul>
              <li>تصميم روبوتات متكاملة.</li>
              <li>برمجة الروبوت لتنفيذ مهام مختلفة.</li>
              <li>التعرف على أفكار هندسية جديدة.</li>
              <li>تطوير التفكير المنطقي والتصميم.</li>
            </ul>
          </article>


          <article className="level-card">
            <span className="level-number">03</span>
            <span className="level-name">LEVEL 3</span>

            <h4>التحديات الهندسية</h4>

            <ul>
              <li>تحليل الـTask أو المشكلة.</li>
              <li>تصميم الحل المناسب.</li>
              <li>اختيار الحساسات والمكونات.</li>
              <li>برمجة الروبوت.</li>
              <li>اختبار الحل وتطويره.</li>
            </ul>
          </article>

        </div>
      </div>


      <div className="engineering-tools">

        <div className="engineering-tools-text">
          <span className="section-kicker">الأدوات المستخدمة</span>

          <h3>LEGO® MINDSTORMS EV3</h3>

          <p>
            يستخدم المتدرب مجموعة EV3 المتكاملة، بما تحتويه
            من وحدة تحكم ومحركات وحساسات ومكونات هندسية،
            لبناء وبرمجة مشروعات وروبوتات مختلفة.
          </p>
        </div>

        <img
          src="/images/ev3-kit.png"
          alt="LEGO MINDSTORMS EV3 Kit"
        />

      </div>


      <div className="engineering-challenge">

        <img
          src="/images/ev3-robot.png"
          alt="LEGO MINDSTORMS EV3 Robot"
        />

        <div>
          <span className="section-kicker">المستوى المتقدم</span>

          <h3>من تنفيذ التعليمات… إلى تصميم الحل بنفسه.</h3>

          <p>
            في المستوى الثالث لا يحصل المتدرب على خطوات جاهزة.
            بل يواجه تحديًا، يحلل المطلوب، يختار التصميم
            والمكونات المناسبة، ثم يبرمج الحل ويختبره ويطوره.
          </p>
        </div>

      </div>


      <div className="skills-section">

        <span className="section-kicker">المهارات التي يطورها</span>

        <div className="skills-list">
          <span>التفكير الهندسي</span>
          <span>حل المشكلات</span>
          <span>البرمجة</span>
          <span>التصميم</span>
          <span>الإبداع والابتكار</span>
          <span>اتخاذ القرار</span>
        </div>

      </div>


      <div className="program-outcome">

        <span className="section-kicker">بنهاية المسار</span>

        <h3>
          قادر على تصميم وبناء وبرمجة روبوتات
          بصورة أكثر استقلالية.
        </h3>

        <p>
          مع تأسيس قوي يساعده على التعامل مع تحديات
          ومسابقات الروبوت مثل FIRST LEGO League (FLL).
        </p>

      </div>


      <div className="program-booking">
        <p>جاهز تبدأ مستوى أقوى في عالم الروبوتكس؟</p>

        <h3>احجز مكانًا في Robotics Engineering</h3>

        <a
          href="https://wa.me/201036545160?text=مرحبًا%20ONE%20Academy،%20أرغب%20في%20حجز%20مكان%20في%20برنامج%20Robotics%20Engineering%20للفئة%20العمرية%209-16%20سنة."
          target="_blank"
          rel="noopener noreferrer"
        >
          احجز عبر واتساب
        </a>
      </div>

    </div>
  </section>
)}

    </main>
  );
}

export default App;