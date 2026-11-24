/* Academic website additions, 2026. Keeps existing portrait, icons, thesis and layout intact. */
(function () {
  'use strict';
  const awardUrl = 'https://www.a21italy.it/premio-emilio-dalessio-2026-premiati-i-giovani-laureati-che-promuovono-la-sostenibilita-dei-territori/';
  const nav = document.querySelector('nav.links');
  if (!nav) return;

  const instagram = nav.querySelector('a[href*="instagram.com"]');
  if (instagram) {
    instagram.href = awardUrl;
    instagram.rel = 'noopener noreferrer';
    instagram.target = '_blank';
    instagram.setAttribute('aria-label', 'First Prize — official Emilio D’Alessio Award announcement');
    instagram.innerHTML = '<strong><img src="assets/agenda21-mark-icon.png" width="27" height="27" alt="" loading="lazy"/>First Prize</strong><span aria-hidden="true">↗</span>';
  }

  const facebook = nav.querySelector('a[href*="facebook.com"]');
  if (facebook) {
    facebook.href = 'https://www.academia.edu/'; // Replace with confirmed personal profile URL later.
    facebook.rel = 'noopener noreferrer';
    facebook.target = '_blank';
    facebook.title = 'Academia.edu — personal profile link to be added';
    facebook.innerHTML = '<strong><img src="https://www.google.com/s2/favicons?domain=academia.edu&amp;sz=128" width="27" height="27" alt="" loading="lazy"/>Academia.edu</strong><span aria-hidden="true">↗</span>';
    // Correct the URL escaped in HTML when assigned via innerHTML.
    const favicon = facebook.querySelector('img');
    if (favicon) favicon.src = 'https://www.google.com/s2/favicons?domain=academia.edu&sz=128';
  }

  // Keep the original HTML, profile portrait, all ten research logos,
  // and the original red UniBo dissertation button entirely unchanged.
  if (document.querySelector('#awards-and-mobility')) return;
  const styles = document.createElement('style');
  styles.id = 'mt-research-2026-styles';
  styles.textContent = `
    .mt-recognition{margin-top:0}.mt-recognition h2{font-size:23px;letter-spacing:-.025em;margin:10px 0 22px}
    .mt-award-card{background:var(--card,#fff);border:1px solid var(--line,#dce5e0);border-radius:15px;padding:24px;margin:0 0 18px}
    .mt-award-kicker{font-size:11px;text-transform:uppercase;letter-spacing:.13em;color:var(--accent,#087b69);font-weight:800;margin:0 0 9px}
    .mt-award-card h3{font-size:19px;letter-spacing:-.015em;line-height:1.35;margin:0 0 12px}
    .mt-award-card p{font-size:15px;line-height:1.78;color:#405b56;margin:0}
    .mt-logo{display:block;max-width:285px;max-height:106px;object-fit:contain;object-position:left center;margin:3px 0 17px}
    .mt-logo-agenda{max-width:300px;max-height:90px}
    .mt-award-link{display:inline-block;margin:14px 0 0;color:var(--accent,#087b69);text-underline-offset:4px;font-weight:700}
    .mt-unibo-link{display:inline-flex;align-items:center;gap:11px;max-width:100%;margin:17px 0 0;padding:13px 15px;border:1px solid #dce5e0;border-radius:12px;background:#fff;color:#087b69!important;text-decoration:none!important;font-size:14px;font-weight:700;line-height:1.35;box-sizing:border-box}
    .mt-unibo-link:hover,.mt-unibo-link:focus-visible{border-color:#087b69;box-shadow:0 6px 18px rgba(7,67,55,.08)}
    .mt-unibo-link svg{width:26px;height:26px;flex-shrink:0;display:block}
    .mt-unibo-link .mt-unibo-outbound{font-size:20px;line-height:1;margin-left:7px;flex-shrink:0}
    .mt-photo-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:19px}
    .mt-photo-grid-single{grid-template-columns:1fr}
    .mt-photo-grid figure{margin:0;min-width:0}
    .mt-photo-grid img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;border-radius:9px;border:1px solid var(--line,#dce5e0)}
    .mt-photo-grid img.mt-certificate{object-fit:contain;background:white}
    .mt-photo-grid .mt-nus-campus{aspect-ratio:16/9}
    .mt-photo-grid figcaption{font-size:12px;color:var(--muted,#58706b);line-height:1.55;margin:7px 2px 0}
    @media(max-width:600px){.mt-award-card{padding:19px}.mt-photo-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(styles);
  const section = document.createElement('section');
  section.id = 'awards-and-mobility';
  section.className = 'mt-recognition';
  section.setAttribute('aria-labelledby','mt-recognition-title');
  section.innerHTML = `
    <div class="divider"></div>
    <div class="eyebrow">Awards and International Research</div>
    <h2 id="mt-recognition-title">Recognition &amp; mobility</h2>
    <article class="mt-award-card">
      <p class="mt-award-kicker">National award · Reggio Emilia · 17 November 2026</p>
      <img class="mt-logo mt-logo-agenda" src="assets/agenda21-logo-user-supplied.png" alt="Coordinamento Agende 21 Locali Italiane" loading="lazy"/>
      <h3>First Prize — Emilio D’Alessio Award 2026</h3>
      <p>First-prize recipient at the sixth edition of the national Emilio D’Alessio Award, selected from 44 submitted theses. The award recognises the innovative methodology and relevance of the PhD research to evidence-based municipal energy planning.</p>
      <a class="mt-unibo-link" href="https://da.unibo.it/it/news" target="_blank" rel="noopener noreferrer" aria-label="University of Bologna, Department of Architecture news">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#087b69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-5 9 5"/><path d="M4 10h16M4 21h16M6 11v8M10 11v8M14 11v8M18 11v8"/></svg>
        <span>Department of Architecture · UniBo</span><span class="mt-unibo-outbound" aria-hidden="true">↗</span>
      </a>
      <div class="mt-photo-grid">
        <figure><img class="mt-certificate" src="assets/emilio-dalessio-first-prize-2026.jpg" alt="First-prize certificate for Mahdiyeh Tabatabaei" loading="lazy"/><figcaption>First-prize certificate, 2026</figcaption></figure>
        <figure><img src="assets/emilio-dalessio-ceremony-2026.jpg" alt="Mahdiyeh Tabatabaei receiving the Emilio D’Alessio Award in Reggio Emilia" loading="lazy"/><figcaption>Award ceremony, 17 November 2026</figcaption></figure>
      </div>
    </article>
    <article class="mt-award-card">
      <p class="mt-award-kicker">Research funding · University of Bologna · 2024</p>
      <h3>Marco Polo Research Mobility Scholarship</h3>
      <p>Awarded the University of Bologna Marco Polo Research Mobility Scholarship in 2024 to support international academic research mobility.</p>
    </article>
    <article class="mt-award-card">
      <p class="mt-award-kicker">International research · Singapore · March–June 2024</p>
      <img class="mt-logo" src="assets/nus-seris-logo-user-supplied.png" alt="NUS and SERIS" loading="lazy"/>
      <h3>Solar Energy Research Institute of Singapore (SERIS)</h3>
      <p>Visiting Researcher at SERIS, National University of Singapore (NUS). Contributed to research on urban solar photovoltaics and building-integrated photovoltaics.</p>
      <div class="mt-photo-grid mt-photo-grid-single">
        <figure><img class="mt-nus-campus" src="assets/seris-nus-campus-2024.jpg" alt="Mahdiyeh Tabatabaei at the National University of Singapore campus" loading="lazy"/><figcaption>National University of Singapore campus</figcaption></figure>
      </div>
    </article>`;
  const note = document.querySelector('main .note');
  if (note) note.before(section);
  else (document.querySelector('main') || document.body).appendChild(section);

  // Keep metadata consistent without changing the page's visible identity.
  try {
    const ld = document.querySelector('script[type="application/ld+json"]');
    if (ld) {
      const data = JSON.parse(ld.textContent);
      const person = data.mainEntity;
      if (person && Array.isArray(person.sameAs)) {
        person.sameAs = person.sameAs.filter(u => !/instagram\.com|facebook\.com/.test(u));
        if (!person.sameAs.includes('https://www.academia.edu/')) person.sameAs.push('https://www.academia.edu/');
        person.award = 'First Prize, Emilio D’Alessio Award (2026)';
        ld.textContent = JSON.stringify(data);
      }
    }
  } catch (e) { /* No interruption to the visual website. */ }
})();
