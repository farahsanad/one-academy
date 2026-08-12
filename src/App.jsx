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


{/* ========================================
    FIRST LEGO LEAGUE
======================================== */}

<section className="fll-section">

  <div className="fll-intro">

    <span className="section-kicker">
      FIRST LEGO LEAGUE
    </span>

    <h2>
      أكثر من مجرد
      <span> مسابقة روبوتكس.</span>
    </h2>

    <p>
      تجربة عالمية تجمع بين الروبوتكس، الهندسة،
      البحث والابتكار والعمل الجماعي.
      يعمل المشاركون كفريق حقيقي يواجه تحديات مرتبطة
      بالعالم الواقعي، ويبحث ويصمم ويبرمج ويختبر
      ويطوّر حلوله بنفسه.
    </p>

  </div>


  <div className="fll-paths">

    {/* EXPLORE */}
    <article className="fll-card fll-explore-card">

      <div className="fll-card-image">
        <img
          src="/images/fllexplore.png"
          alt="FIRST LEGO League Explore"
        />
      </div>

      <div className="fll-card-content">

        <span className="fll-age">
          6–9 سنوات
        </span>

        <h3>FLL Explore</h3>

        <p>
          بداية ممتعة مع الاستكشاف العلمي،
          LEGO® SPIKE Essential، البرمجة والعمل الجماعي.
        </p>

        <button
          className="fll-discover"
          onClick={() => setActiveProgram("fll-explore")}
        >
          اكتشف المسابقة
        </button>

      </div>

    </article>


    {/* CHALLENGE */}
    <article className="fll-card fll-challenge-card">

      <div className="fll-card-image">
        <img
          src="/images/fllchallenge.png"
          alt="FIRST LEGO League Challenge"
        />
      </div>

      <div className="fll-card-content">

        <span className="fll-age">
          10–16 سنة
        </span>

        <h3>FLL Challenge</h3>

        <p>
          تجربة متكاملة تجمع البحث والابتكار،
          تصميم وبرمجة الروبوت، Robot Game والعمل الجماعي.
        </p>

        <button
          className="fll-discover"
          onClick={() => setActiveProgram("fll-challenge")}
        >
          اكتشف المسابقة
        </button>

      </div>

    </article>

  </div>


  <div className="fll-difference">

    <div>
      <strong>EXPLORE</strong>
      <p>نزرع عقلية الباحث.</p>
    </div>

    <span>→</span>

    <div>
      <strong>CHALLENGE</strong>
      <p>نمارس البحث والابتكار بمستوى أعمق.</p>
    </div>

  </div>

</section>

{activeProgram === "fll-explore" && (
  <section className="program-details">

    <div className="program-details-inner">

      <button
        className="close-program"
        onClick={() => setActiveProgram(null)}
      >
        ← العودة
      </button>


      {/* HERO */}
      <div className="program-details-hero">

        <div className="program-details-text">

          <span className="program-details-age">
            من 6 إلى 9 سنوات
          </span>

          <p className="program-details-label">
            FIRST LEGO League Explore
          </p>

          <h2>FLL Explore</h2>

          <p className="program-intro">
            رحلة STEM مناسبة للأطفال الأصغر،
            يتعلم فيها الطفل من خلال الاستكشاف،
            البناء، البرمجة والعمل مع فريق باستخدام
            LEGO® Education SPIKE Essential.
          </p>

        </div>

        <img
          className="program-details-main-image"
          src="/images/fllexplore.png"
          alt="FIRST LEGO League Explore"
        />

      </div>


      {/* JOURNEY */}
      <div className="fll-journey">

        <span className="section-kicker">
          رحلة الطفل
        </span>

        <h3>
          من الفضول… إلى فكرة يستطيع شرحها.
        </h3>

        <div className="fll-journey-flow">

          <span>Explore</span>
          <b>←</b>

          <span>Learn</span>
          <b>←</b>

          <span>Imagine</span>
          <b>←</b>

          <span>Build</span>
          <b>←</b>

          <span>Code</span>
          <b>←</b>

          <span>Test</span>
          <b>←</b>

          <span>Improve</span>
          <b>←</b>

          <span>Share</span>

        </div>

      </div>


      {/* FOUR AREAS */}
      <div className="fll-pillars">

        <article>
          <span>01</span>
          <h4>الاستكشاف العلمي</h4>

          <p>
            يستكشف الطفل موضوع الموسم،
            يسأل ويتعلم ويستخدم ما اكتشفه
            لتكوين أفكاره.
          </p>
        </article>


        <article>
          <span>02</span>
          <h4>التصميم والبرمجة</h4>

          <p>
            يبني Team Model باستخدام
            LEGO® SPIKE Essential ويبرمج
            أجزاء منه ثم يختبر ويطور فكرته.
          </p>
        </article>


        <article>
          <span>03</span>
          <h4>العمل كفريق</h4>

          <p>
            يشارك أفكاره ويستمع للآخرين
            ويتعلم توزيع الأدوار والعمل
            للوصول إلى نتيجة مشتركة.
          </p>
        </article>


        <article>
          <span>04</span>
          <h4>العرض والثقة بالنفس</h4>

          <p>
            يعرض الفريق الـTeam Model
            والـTeam Poster ويتحدث عن
            ما تعلمه ورحلة الفريق.
          </p>
        </article>

      </div>


      {/* REAL EXPERIENCE */}
      <div className="fll-gallery-section">

        <div className="fll-gallery-heading">
          <span className="section-kicker">
            التجربة الحقيقية
          </span>

          <h3>
            يتعلم… ثم يقف ليحكي ما صنعه.
          </h3>
        </div>

        <div className="fll-gallery">

          <img
            src="/images/team1explore.png"
            alt="ONE Academy FLL Explore Team"
          />

          <img
            src="/images/team2explore.png"
            alt="ONE Academy FLL Explore Team"
          />

        </div>

      </div>


      {/* BOOKING */}
      <div className="program-booking">

        <p>
          جاهز لطفلك يبدأ أول تجربة FLL؟
        </p>

        <h3>
          احجز مكانك في فريق FLL Explore
        </h3>

        <a
          href="https://wa.me/201036545160?text=مرحبًا%20ONE%20Academy،%20أرغب%20في%20حجز%20مكان%20في%20فريق%20FLL%20Explore."
          target="_blank"
          rel="noopener noreferrer"
        >
          احجز عبر واتساب
        </a>

      </div>

    </div>

  </section>
)}


{activeProgram === "fll-challenge" && (
  <section className="program-details">

    <div className="program-details-inner">

      <button
        className="close-program"
        onClick={() => setActiveProgram(null)}
      >
        ← العودة
      </button>


      {/* HERO */}
      <div className="program-details-hero">

        <div className="program-details-text">

          <span className="program-details-age">
            من 10 إلى 16 سنة
          </span>

          <p className="program-details-label">
            FIRST LEGO League Challenge
          </p>

          <h2>FLL Challenge</h2>

          <p className="program-intro">
            تجربة تجمع بين البحث والابتكار،
            الهندسة، تصميم وبرمجة الروبوت
            والعمل الجماعي في تحدٍ حقيقي
            يعمل فيه الفريق كفريق بحث وتطوير.
          </p>

        </div>

        <img
          className="program-details-main-image"
          src="/images/fllchallenge.png"
          alt="FIRST LEGO League Challenge"
        />

      </div>


      {/* FOUR AREAS */}
      <div className="challenge-areas">

        <div className="levels-heading">
          <span className="section-kicker">
            تجربة متكاملة
          </span>

          <h3>
            أربعة جوانب… وفريق واحد.
          </h3>
        </div>


        <div className="challenge-grid">

          {/* INNOVATION */}
          <article className="challenge-card">

            <span className="challenge-number">
              01
            </span>

            <h4>Innovation Project</h4>

            <p className="challenge-subtitle">
              يفكر كباحث… ويبتكر كصانع حلول.
            </p>

            <p>
              يبدأ الفريق من مشكلة حقيقية مرتبطة
              بموضوع الموسم، ثم يبحث ويحلل ويطور
              حلًا مبتكرًا ويختبره ويحسنه.
            </p>

          </article>


          {/* ROBOT DESIGN */}
          <article className="challenge-card">

            <span className="challenge-number">
              02
            </span>

            <h4>Robot Design</h4>

            <p className="challenge-subtitle">
              يصمم. يبرمج. يختبر. ثم يحسن.
            </p>

            <p>
              يتعلم الفريق مكونات الروبوت والمحركات
              والحساسات والبرمجة ثم يطور تصميمه
              واستراتيجيته لتنفيذ المهام.
            </p>

          </article>


          {/* ROBOT GAME */}
          <article className="challenge-card">

            <span className="challenge-number">
              03
            </span>

            <h4>Robot Game</h4>

            <p className="challenge-subtitle">
              هنا يتحول التدريب إلى تحدٍ حقيقي.
            </p>

            <p>
              ينفذ الروبوت المهام التي تدرب عليها
              الفريق لجمع النقاط وتحقيق أفضل أداء
              ممكن على ملعب المسابقة.
            </p>

          </article>


          {/* CORE VALUES */}
          <article className="challenge-card">

            <span className="challenge-number">
              04
            </span>

            <h4>Core Values</h4>

            <p className="challenge-subtitle">
              لأن الفريق أهم من الروبوت.
            </p>

            <p>
              يتعلم المشاركون التعاون،
              مشاركة الأفكار، احترام الاختلاف،
              الابتكار والعمل كفريق واحد.
            </p>

          </article>

        </div>

      </div>


      {/* RESEARCH PROCESS */}
      <div className="research-process">

        <span className="section-kicker">
          عقلية الباحث
        </span>

        <h3>
          المشكلة ليست شيئًا نجيب عنه…
          بل رحلة نبحث فيها عن أفضل حل.
        </h3>

        <div className="research-flow">

          <span>Identify</span>
          <b>←</b>

          <span>Research</span>
          <b>←</b>

          <span>Analyze</span>
          <b>←</b>

          <span>Design</span>
          <b>←</b>

          <span>Test</span>
          <b>←</b>

          <span>Improve</span>
          <b>←</b>

          <span>Communicate</span>

        </div>

      </div>


      {/* BIG MESSAGE */}
      <div className="fll-big-message">

        <p>
          مش بنجهزه علشان يبني روبوت.
        </p>

        <h3>
          بنجهزه علشان يفكر كباحث،
          يصمم كمهندس، ويعمل كجزء من فريق.
        </h3>

      </div>


      {/* REAL TEAMS */}
      <div className="fll-gallery-section">

        <div className="fll-gallery-heading">

          <span className="section-kicker">
            من داخل التجربة
          </span>

          <h3>
            فرق ONE Academy في أجواء المنافسة.
          </h3>

        </div>

        <div className="fll-gallery">

          <img
            src="/images/team1challenge.png"
            alt="ONE Academy FLL Challenge Team"
          />

          <img
            src="/images/team2challenge.png"
            alt="ONE Academy FLL Challenge Team"
          />

        </div>

      </div>


      {/* BOOKING */}
      <div className="program-booking">

        <p>
          جاهز تكون جزءًا من الفريق؟
        </p>

        <h3>
          احجز مكانك في فريق FLL Challenge
        </h3>

        <a
          href="https://wa.me/201036545160?text=مرحبًا%20ONE%20Academy،%20أرغب%20في%20حجز%20مكان%20في%20فريق%20FLL%20Challenge."
          target="_blank"
          rel="noopener noreferrer"
        >
          احجز عبر واتساب
        </a>

      </div>

    </div>

  </section>
)}

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

<button
  className="program-link"
  onClick={() => setActiveProgram("robotics-ai")}
>
  اكتشف المسار
</button>

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

{activeProgram === "robotics-ai" && (
  <section className="program-details">
    <div className="program-details-inner">

      <button
        className="close-program"
        onClick={() => setActiveProgram(null)}
      >
        ← العودة للبرامج
      </button>

      {/* HERO */}
      <div className="program-details-hero">

        <div className="program-details-text">
          <span className="program-details-age">
            المسار المتقدم
          </span>

          <p className="program-details-label">
            Electronics • Robotics • IoT • AI
          </p>

          <h2>Robotics & AI</h2>

          <p className="program-intro">
            مسار عملي متدرج يبدأ من أساسيات الإلكترونيات،
            ثم ينتقل إلى بناء وبرمجة الروبوتات، وإنترنت الأشياء،
            وصولًا إلى البرمجة والذكاء الاصطناعي.
          </p>
        </div>

        <img
          className="program-details-main-image"
          src="/images/coding-ai.png"
          alt="Robotics and AI at ONE Academy"
        />

      </div>


      {/* LEVELS */}
      <div className="levels-section">

        <div className="levels-heading">
          <span className="section-kicker">رحلة التعلم</span>
          <h3>4 مستويات من الإلكترونيات إلى الذكاء الاصطناعي</h3>
        </div>

        <div className="levels-grid robotics-ai-levels">

          {/* LEVEL 1 */}
          <article className="level-card">
            <span className="level-number">01</span>
            <span className="level-name">LEVEL 1</span>

            <h4>أساسيات الإلكترونيات</h4>

            <ul>
              <li>التعرف على أنواع البوردات والقطع الإلكترونية.</li>
              <li>التعرف على Arduino.</li>
              <li>المقاومات والمكثفات.</li>
              <li>الحساسات المختلفة.</li>
              <li>توصيل المكونات مع Arduino.</li>
            </ul>

            <p className="level-meta">
              3 محاضرات • ساعة للمحاضرة
            </p>

            <p className="level-meta">
              من 10 سنوات فما فوق
            </p>
          </article>


          {/* LEVEL 2 */}
          <article className="level-card featured-level">
            <span className="level-number">02</span>
            <span className="level-name">LEVEL 2</span>

            <h4>الروبوت والأردوينو</h4>

            <ul>
              <li>بناء روبوت باستخدام Arduino.</li>
              <li>استخدام أنواع مختلفة من الحساسات.</li>
              <li>توصيل الحساسات مع Arduino.</li>
              <li>تنفيذ مشروعات Arduino عملية.</li>
            </ul>

            <p className="level-meta">
              8 محاضرات • ساعتان للمحاضرة
            </p>

            <p className="level-meta">
              من 10 سنوات فما فوق
            </p>
          </article>


          {/* LEVEL 3 */}
          <article className="level-card">
            <span className="level-number">03</span>
            <span className="level-name">LEVEL 3</span>

            <h4>إنترنت الأشياء IoT</h4>

            <ul>
              <li>الانتقال إلى Internet of Things (IoT).</li>
              <li>استخدام لوحة ESP32.</li>
              <li>تنفيذ مشروعات إنترنت الأشياء.</li>
            </ul>

            <p className="level-meta">
              6 محاضرات • ساعتان للمحاضرة
            </p>

            <p className="level-meta">
              من 15 سنة فما فوق
            </p>
          </article>


          {/* LEVEL 4 */}
          <article className="level-card">
            <span className="level-number">04</span>
            <span className="level-name">LEVEL 4</span>

            <h4>الذكاء الاصطناعي</h4>

            <ul>
              <li>البداية في استخدام الذكاء الاصطناعي.</li>
              <li>دراسة لغة Python.</li>
              <li>استخدام البرمجة في تطبيقات الذكاء الاصطناعي.</li>
            </ul>

            <p className="level-meta">
              6 محاضرات • ساعتان للمحاضرة
            </p>

            <p className="level-meta">
              من 17 سنة فما فوق
            </p>
          </article>

        </div>

      </div>


      {/* TOOLS */}
      <div className="program-tools">

        <div className="tools-heading">
          <span className="section-kicker">الأدوات المستخدمة</span>

          <h3>Electronics & Robotics Kit</h3>

          <p>
            مكونات إلكترونية وبوردات وحساسات تُستخدم عمليًا
            خلال مراحل المسار لتنفيذ الدوائر والمشروعات
            والروبوتات والتطبيقات الذكية.
          </p>
        </div>

        <div className="tools-images">
          <img
            src="/images/robotics-ai-kit.png"
            alt="Electronics and Robotics Kit"
          />
        </div>

      </div>


      {/* BOOKING */}
      <div className="program-booking">

        <p>جاهز تبدأ المسار المتقدم؟</p>

        <h3>احجز مكانًا في Robotics & AI</h3>

        <a
          href="https://wa.me/201036545160?text=مرحبًا%20ONE%20Academy،%20أرغب%20في%20حجز%20مكان%20في%20برنامج%20Robotics%20%26%20AI."
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