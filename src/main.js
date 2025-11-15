import '../style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="background-gradient"></div>
  <div class="spline-wrapper">
  <spline-viewer url="https://prod.spline.design/k1FRGjdrrYMZF0K8ERRDFkvv/scene.splinecode"></spline-viewer>
</div>

  <header>
    <nav>
      <div class="logo">Apartmán C2</div>
      <ul class="nav-links">
        <li><a href="#home">Domov</a></li>
        <li><a href="#about">O apartmáne</a></li>
        <li><a href="#vybavenie">Vybavenie</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
      <button class="btn-primary" id="bookBtn">Zarezervovať</button>
    </nav>
  </header>

  <section class="hero" id="home">
    <div class="hero-content">
      <h1>Váš dokonalý únik <span class="highlight">do Slovenského raja</span></h1>
      <p>Zažite nezabudnuteľný pobyt v moderne zariadenom apartmáne v srdci Hrabušíc. Ideálne miesto pre turistov, rodiny a všetkých milovníkov prírody.</p>
      <button class="btn-primary" id="bookBtnHero">Zarezervovať teraz</button>
      <div class="features-grid">
        <div class="feature-badge">Slovenský raj</div>
        <div class="feature-badge">Moderné</div>
        <div class="feature-badge">Parkovanie</div>
        <div class="feature-badge">Príroda v okolí</div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="section-header">
      <h2>Objavte krásu Slovenského raja</h2>
      <p class="subtitle">Váš domov v srdci prírody</p>
    </div>

    <div class="image-placeholder">
  <img src="https://bycafk8doy.ufs.sh/f/WRxqrCjlIMRqJZW12SbNdvgRcZY0KoWMamI913tbx7Qrk6E4"
       alt="Apartmán C2"
       style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
</div>
      <div class="text-content">
        <h3>Moderný komfort v Hrabušiciach</h3>
        <p>Apartmán C2 sa nachádza v malebnej obci Hrabušice, brány do Slovenského raja. Ponúkame Vám priestranné, moderné zariadené ubytovanie s všetkým, co potrebujete pre pohodlný pobyt.</p>
        <p>Ideálna poloha pre turistov, ktorí chcú objavovať národný park, užívať si miestnu kultúru a oddýchnuť si v pokojnom prostredí.</p>
      </div>
    </div>

   <div class="content-row reverse">
  <div class="text-content">
    <h3>Prečo si vybrať Slovenský raj</h3>
    <p>Slovenský raj je jedným z najkrajších národných parkov na Slovensku. Ponúka úchvatné výhľady, jedinečné turistické chodníky, rebríky, vodopády a tiesňavy.</p>
    <p>Či už ste skúsený turista alebo hľadáte pokojnú prechádzku prírodou, Slovenský raj má niečo pre každého.</p>
  </div>

  <div class="image-placeholder">
    <img src="https://bycafk8doy.ufs.sh/f/WRxqrCjlIMRqjX1mjvIpNwGS3m4TcbR79tHIdQhxz6YrVJq1"
         alt="Slovenský raj"
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
  </div>
</div>

  <section id="vybavenie">
    <div class="section-header">
      <h2>Vybavenie apartmánu</h2>
      <p class="subtitle">Všetko, čo potrebujete pre pohodlný pobyt</p>
    </div>

    <div class="amenities-grid">
      <div class="amenity-card">
        <div class="amenity-icon">🛏️</div>
        <h4>Pohodlné ubytovanie</h4>
        <p>Priestranné spálne s kvalitnými posteľami a čistou posteľnou bielizňou pre váš maximálny odpočinok.</p>
      </div>

      <div class="amenity-card">
        <div class="amenity-icon">🍳</div>
        <h4>Plne vybavená kuchyňa</h4>
        <p>Moderná kuchyňa s chladničkou, sporák, mikrovlnkou a všetkým potrebným riadom.</p>
      </div>

      <div class="amenity-card">
        <div class="amenity-icon">📺</div>
        <h4>Zábava a Wi-Fi</h4>
        <p>Rýchle Wi-Fi pripojenie, televízia a zábavné možnosti pre relaxačné večery.</p>
      </div>

      <div class="amenity-card">
        <div class="amenity-icon">🚿</div>
        <h4>Moderná kúpeľňa</h4>
        <p>Čistá, priestranná kúpeľňa so sprchovacím kútom a teplou vodou.</p>
      </div>

      <div class="amenity-card">
        <div class="amenity-icon">🚗</div>
        <h4>Parkovanie</h4>
        <p>Bezplatné parkovanie priamo pri apartmáne pre váš pohodlný príjazd.</p>
      </div>

      <div class="amenity-card">
        <div class="amenity-icon">🏔️</div>
        <h4>Turistické trasy</h4>
        <p>Blízkosť turistických chodníkov, vodopádov a najkrajších miest Slovenského raja.</p>
      </div>
    </div>
  </section>

  <div class="content-row">
  <div class="image-placeholder">
    <img src="https://bycafk8doy.ufs.sh/f/WRxqrCjlIMRqMc5nFNkFYWj0Bu2ha7iRVbsoJteLxD1Ivl8K"
         alt="Okolie Slovenského raja"
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
  </div>

  <div class="text-content">
    <h3>Čo v okolí navštíviť</h3>
    <p>🏞️ Suchá Belá - najnavštevovanejší kaňon s rebríkmi a vodopádmi</p>
    <p>🌊 Tomášovský výhľad - panoramatický výhľad na celý národný park</p>
    <p>⛰️ Prielom Hornádu - úchvatná tiesňava s unikátnymi skalami</p>
    <p>🏰 Spišský hrad - UNESCO pamiatka vzdialená len 20 km</p>
  </div>
</div>

  <section class="cta-section" id="kontakt">
    <h2>Pripravený na nezabudnuteľný zážitok?</h2>
    <p>Rezervujte si svoj pobyt v Apartmáne C2 a objavte krásu Slovenského raja. Tešíme sa na vašu návštevu!</p>
    <button class="btn-primary" id="bookBtnCta">Zarezervovať pobyt</button>
  </section>

  <footer>
    <p>&copy; 2025 Apartmán C2 Hrabušice. Všetky práva vyhradené.</p>
  </footer>

  <div class="modal" id="bookingModal">
    <div class="modal-content">
      <button class="modal-close" id="modalClose">&times;</button>
      <h3>Rezervácia apartmánu</h3>
      <form id="bookingForm">
        <div class="form-group">
          <label for="checkin">Dátum príchodu</label>
          <input type="date" id="checkin" required>
        </div>
        <div class="form-group">
          <label for="checkout">Dátum odchodu</label>
          <input type="date" id="checkout" required>
        </div>
        <div class="form-group">
          <label for="adults">Počet osôb</label>
          <select id="adults" required>
            <option value="">Vyberte počet osôb</option>
            <option value="1">1 osoba</option>
            <option value="2">2 osoby</option>
            <option value="3">3 osoby</option>
            <option value="4">4 osoby</option>
            <option value="5">5 osôb</option>
            <option value="6">6 osôb</option>
          </select>
        </div>
        <button type="submit" class="btn-primary" style="width: 100%;">Pokračovať na Booking.com</button>
      </form>
    </div>
  </div>
`

const modal = document.getElementById('bookingModal')
const bookBtns = document.querySelectorAll('#bookBtn, #bookBtnHero, #bookBtnCta')
const modalClose = document.getElementById('modalClose')
const bookingForm = document.getElementById('bookingForm')

bookBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active')
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('active')
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active')
  }
})

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const checkin = document.getElementById('checkin').value
  const checkout = document.getElementById('checkout').value
  const adults = document.getElementById('adults').value

  const bookingUrl = `https://www.booking.com/hotel/sk/apartman-c2-hrabusice.sk.html?checkin=${checkin}&checkout=${checkout}&group_adults=${adults}&group_children=0&no_rooms=1`

  window.location.href = bookingUrl
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    }
  })
}, observerOptions)

document.querySelectorAll('.section-header, .content-row, .amenity-card, .cta-section').forEach(el => {
  observer.observe(el)
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})
