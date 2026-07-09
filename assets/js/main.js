/* AAAC Website Interactions */

/*
  Editable content is loaded from: assets/data/site-content.js
  Do not worry if that file is missing during testing — the fallback content below keeps the website working.
*/

const FALLBACK_PROJECTS = [
  {
    id: 'weekly-class-series',
    no: '1',
    title: 'Weekly Class Series',
    image: 'assets/img/project-1.jpg',
    date: 'Every Wednesday',
    place: 'Classroom 10-2',
    summary: 'A regular aviation learning series for students from Grade 6 to Grade 11, covering aviation fundamentals, physics, aircraft technology and aeronautical science.',
    body: [
      'The Weekly Class Series is one of the key educational initiatives conducted by the Aeronautical Academy of Ananda College to enhance students’ knowledge and interest in aviation.',
      'The sessions introduce students to aviation fundamentals, physics, aircraft technology, aeronautical science and other related fields. The classes are conducted from 2.00 p.m. to 4.00 p.m. every Wednesday, creating a consistent environment where students can ask questions and build confidence.',
      'This project strengthens academic knowledge while inspiring curiosity, confidence and passion among young aviation enthusiasts.'
    ]
  },
  {
    id: 'rc-aviation-workshop',
    no: '2',
    title: 'RC Aviation Workshop',
    image: 'assets/img/project-2.jpg',
    date: '25 June 2025',
    place: 'Ananda College',
    summary: 'A practical workshop conducted with Rylees AeroModels to introduce students to remote-controlled aircraft, drones, aerodynamics and aircraft building.',
    body: [
      'The RC Aviation Workshop was an engaging practical educational project conducted by the Aeronautical Academy in collaboration with Rylees AeroModels.',
      'Students explored the history and evolution of aircraft, modern RC plane and drone technology, lift generation, flight control and basic aerodynamics.',
      'The workshop helped students connect classroom theory with real-world aviation applications through hands-on learning.'
    ]
  },
  {
    id: 'career-guidance-programme',
    no: '3',
    title: 'Career Guidance Programme',
    image: 'assets/img/project-3.jpg',
    date: '10 September 2025',
    place: 'Moore Hall',
    summary: 'A guidance programme conducted with Sri Lanka Airport & Aviation Academy to help students understand aviation career pathways.',
    body: [
      'The Career Guidance Programme was conducted at Moore Hall, Ananda College, in association with the Sri Lanka Airport & Aviation Academy.',
      'The programme guided students who are interested in aviation and helped them understand higher education options, professional training routes and career opportunities in both local and international aviation sectors.',
      'It served as an inspiring platform for young aviation enthusiasts to make informed decisions about their future.'
    ]
  },
  {
    id: 'oversight-25',
    no: '4',
    title: 'Oversight’25',
    image: 'assets/img/project-4.jpg',
    date: '08 October 2025',
    place: 'Ananda College',
    summary: 'An intra-school quiz competition designed to polish aviation-related knowledge and identify top performers for the academy quiz squad.',
    body: [
      'Oversight ’25 was an intra-school quiz competition conducted by the Aeronautical Academy of Ananda College.',
      'The competition tested students on aviation, aeronautics, aircraft and general knowledge while encouraging quick thinking and confidence.',
      'At the conclusion of the competition, the top five contestants earned the opportunity to be recruited to the academy quiz squad.'
    ]
  },
  {
    id: 'field-visit-2025',
    no: '5',
    title: 'Field Visit 2025',
    image: 'assets/img/project-5.jpg',
    date: '10 November 2025',
    place: 'Bandaranaike International Airport',
    summary: 'An educational field visit to Bandaranaike International Airport conducted with the Civil Aviation Authority.',
    body: [
      'The field visit to Bandaranaike International Airport was conducted in collaboration with the Civil Aviation Authority.',
      'Students explored key areas of the airport, including aircraft hangars and front desk operations, gaining practical knowledge of airport services, aircraft handling and flight-related processes.',
      'The visit allowed students to observe real-world aviation operations beyond the classroom.'
    ]
  },
  {
    id: 'drone-workshop',
    no: '6',
    title: 'Drone Workshop',
    image: 'assets/img/project-6.jpg',
    date: '2025',
    place: 'Ananda College',
    summary: 'An interactive learning session introducing students to drone operation, control, safety and modern drone applications.',
    body: [
      'The Drone Workshop introduced students to the modern world of drone technology and unmanned aerial vehicles.',
      'Students learned how drones operate, how they are controlled and how they are used in fields such as aviation, photography, surveillance, mapping and research.',
      'The workshop combined learning with hands-on exposure and encouraged innovation among young aviation enthusiasts.'
    ]
  },
  {
    id: 'aviation-lectures',
    no: '7',
    title: 'Lectures Regarding Aviation',
    image: 'assets/img/project-7.jpg',
    date: '2025',
    place: 'Ananda College',
    summary: 'A lecture series conducted by aviation professionals, Air Force personnel and distinguished past pupils of Ananda College.',
    body: [
      'The aviation lecture series gave students the opportunity to learn directly from experienced aviation professionals, Air Force personnel and distinguished past pupils of Ananda College.',
      'The lectures covered aviation career pathways, aircraft operations, aviation safety, aeronautical knowledge and the discipline required to succeed in the field.',
      'This initiative connected students with experts and role models who helped inspire the next generation of aviators.'
    ]
  },
  {
    id: 'aeroglidex-2',
    no: '8',
    title: 'AeroglideX 2.0',
    image: 'assets/img/project-8.jpg',
    date: '07 November 2025',
    place: 'Ananda College Grounds',
    summary: 'The academy’s biggest event and Sri Lanka’s largest school-based aero festival, welcoming students and aviation enthusiasts from across the country.',
    body: [
      'AeroglideX 2.0 was the biggest event organized by the Aeronautical Academy of Ananda College and was held at the Ananda College ground premises.',
      'As an inter-school event, it welcomed many schools from around the country and created a vibrant platform for young aviation enthusiasts to learn, compete and celebrate aeronautics.',
      'With the participation of old Anandians serving in aviation and Air Force sectors, the festival became both inspiring and educational.'
    ]
  }
];

const FALLBACK_BOARD_MEMBERS = [
  { post: 'President', name: 'Disala Thevmith' },
  { post: 'Secretary', name: 'Mahima Wijesinghe' },
  { post: 'Treasurer', name: 'Jeran Gamage' },
  { post: 'Vice President', name: 'Matheesha Pabasara' },
  { post: 'Assistant Secretary', name: 'Kenul Withanage' },
  { post: 'Assistant Treasurer', name: 'Nisalitha Abeywickrama' },
  { post: 'Chief Organizer', name: 'Sades Sandeepa' },
  { post: 'Chief Editor', name: 'Shaveen Guruge' },
  { post: 'Chief Organizer', name: 'Bunuja Deegayu' },
  { post: 'Chief Coordinator', name: 'Dunitha Dulmira' },
  { post: 'Coordinator', name: 'Sanketh Bandara' },
  { post: 'Media Coordinator', name: 'Kushan Kalhara' },
  { post: 'Organizer', name: 'Matheesha Thilakarathne' },
  { post: 'Organizer', name: 'Vishwa Divanka' },
  { post: 'Committee Member', name: 'Didul Karunathilake' },
  { post: 'Committee Member', name: 'Enuka Bimsara' },
  { post: 'Committee Member', name: 'Dinelka Ayodya' },
  { post: 'Committee Member', name: 'Haritha Konara' },
  { post: 'Committee Member', name: 'Nethul Nethmina' }
];

const PROJECTS = Array.isArray(window.AAAC_PROJECTS) && window.AAAC_PROJECTS.length ? window.AAAC_PROJECTS : FALLBACK_PROJECTS;
const BOARD_MEMBERS = Array.isArray(window.AAAC_BOARD_MEMBERS) && window.AAAC_BOARD_MEMBERS.length ? window.AAAC_BOARD_MEMBERS : FALLBACK_BOARD_MEMBERS;

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalizeMember(member) {
  if (Array.isArray(member)) return { post: member[0] || '', name: member[1] || '' };
  return { post: member.post || '', name: member.name || '' };
}

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function initMobileNav() {
  const toggle = $('#mobileToggle');
  const links = $('#navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  $all('a', links).forEach(link => link.addEventListener('click', () => links.classList.remove('open')));
}

function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const glow = document.createElement('div');
  glow.className = 'cursor-glow is-hidden';
  document.body.appendChild(glow);

  let raf = null;
  const update = (event) => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
      glow.classList.remove('is-hidden');
    });
  };

  window.addEventListener('mousemove', update, { passive: true });
  document.addEventListener('mouseleave', () => glow.classList.add('is-hidden'));
}

function initGlassSpotlight() {
  const glassBlocks = $all('.glass');
  glassBlocks.forEach(block => {
    block.addEventListener('pointermove', event => {
      const rect = block.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      block.style.setProperty('--mx', `${x}%`);
      block.style.setProperty('--my', `${y}%`);
    }, { passive: true });
  });
}

function initF16Cursor() {
  const wrap = $('#f16Wrap');
  const hero = $('.hero');
  if (!wrap || !hero) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let active = false;

  const animate = () => {
    currentX += (targetX - currentX) * 0.09;
    currentY += (targetY - currentY) * 0.09;
    const rotateY = currentX * 14;
    const rotateX = -currentY * 10;
    const translateX = currentX * 22;
    const translateY = currentY * 16;
    wrap.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(${translateX}px, ${translateY}px, 0) scale(${active ? 1.025 : 1})`;
    hero.style.setProperty('--radar-rotation', `${currentX * 22}deg`);
    requestAnimationFrame(animate);
  };

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    active = true;
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    active = false;
  });

  requestAnimationFrame(animate);
}

function initProjectCarousel() {
  const rail = $('#projectRail');
  if (!rail) return;
  rail.innerHTML = PROJECTS.map(project => `
    <article class="project-card tilt-card">
      <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}">
      <div class="project-card-content">
        <h3>${escapeHTML(project.no)}. ${escapeHTML(project.title)}</h3>
        <a class="btn btn-outline" href="project.html?id=${encodeURIComponent(project.id)}">View <span aria-hidden="true">→</span></a>
      </div>
    </article>
  `).join('');

  const prev = $('#projectPrev');
  const next = $('#projectNext');
  const scrollAmount = 310;
  if (prev) prev.addEventListener('click', () => rail.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => rail.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
}

function initBoard() {
  const grid = $('#boardGrid');
  if (!grid) return;
  const avatar = `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="24" r="13" fill="rgba(255,255,255,.92)"></circle>
      <path d="M12 56c4-13 13-20 20-20s16 7 20 20" fill="rgba(255,255,255,.92)"></path>
    </svg>`;
  grid.innerHTML = BOARD_MEMBERS.map(normalizeMember).map(member => `
    <article class="member-card tilt-card">
      <div class="avatar">${avatar}</div>
      <div><strong>${escapeHTML(member.post)}</strong><span>${escapeHTML(member.name)}</span></div>
    </article>
  `).join('');
}

function initTiltCards() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  $all('.tilt-card').forEach(card => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hovering = false;
    let rafStarted = false;

    const animate = () => {
      currentX += (targetX - currentX) * 0.13;
      currentY += (targetY - currentY) * 0.13;
      const rotateX = -currentY * 7;
      const rotateY = currentX * 9;
      const lift = hovering ? -8 : 0;
      card.style.transform = `perspective(950px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, ${lift}px, 0)`;
      requestAnimationFrame(animate);
    };

    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      targetX = (px / rect.width - 0.5) * 2;
      targetY = (py / rect.height - 0.5) * 2;
      card.style.setProperty('--mx', `${(px / rect.width) * 100}%`);
      card.style.setProperty('--my', `${(py / rect.height) * 100}%`);
      hovering = true;
      if (!rafStarted) {
        rafStarted = true;
        requestAnimationFrame(animate);
      }
    }, { passive: true });

    card.addEventListener('pointerleave', () => {
      targetX = 0;
      targetY = 0;
      hovering = false;
    });
  });
}

function initProjectArticle() {
  const holder = $('#projectArticle');
  if (!holder) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || PROJECTS[0].id;
  const project = PROJECTS.find(item => item.id === id) || PROJECTS[0];
  document.title = `${project.title} | Aeronautical Academy`;
  holder.innerHTML = `
    <div class="project-main-image"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}"></div>
    <p class="eyebrow">Project ${escapeHTML(project.no)}</p>
    <h1 class="project-heading">${escapeHTML(project.title)}</h1>
    <div class="project-meta">
      <span class="pill">${escapeHTML(project.date)}</span>
      <span class="pill">${escapeHTML(project.place)}</span>
      <span class="pill">Aeronautical Academy</span>
    </div>
    <div class="project-body">
      ${(project.body || []).map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join('')}
      <h2>Project Impact</h2>
      <p>${escapeHTML(project.summary)}</p>
      <div class="form-actions"><a class="btn btn-primary" href="index.html#projects">Back to Projects</a><a class="btn btn-outline" href="join.html">Join Force</a></div>
    </div>
  `;
}

function showToast(message) {
  let toast = $('#toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 4200);
}

function collectFormData(form) {
  const data = {};
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    data[key] = value.trim();
  }
  return data;
}

async function imageToDataUrl(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function safeName(value) {
  return (value || 'AAAC-Membership-Application')
    .replace(/[^a-z0-9\-\s]/gi, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 55) || 'AAAC-Membership-Application';
}

async function generateMembershipPdf(data) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showToast('PDF library is not loaded. Check your internet connection and try again.');
    return;
  }

  const doc = new window.jspdf.jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 14;
  let y = 14;

  const header = await imageToDataUrl('assets/img/form-header.png');
  if (header) {
    doc.addImage(header, 'PNG', margin, y, pageWidth - margin * 2, 38);
    y += 46;
  } else {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('CLUBS AND SOCIETIES MEMBERSHIP APPLICATION - 2026', pageWidth / 2, y + 8, { align: 'center' });
    doc.setFontSize(12);
    doc.text('AERONAUTICAL ACADEMY - ANANDA COLLEGE', pageWidth / 2, y + 16, { align: 'center' });
    y += 28;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('Applicant Submission Copy', margin, y);
  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(`Generated on ${new Date().toLocaleString()}`, margin, y);
  y += 8;

  const section = (title, rows) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(title, margin, y);
    y += 3;
    doc.autoTable({
      startY: y,
      margin: { left: margin, right: margin },
      styles: { fontSize: 8.5, cellPadding: 2.6, overflow: 'linebreak' },
      headStyles: { fillColor: [138, 16, 36], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [247, 247, 247] },
      body: rows.map(([label, value]) => [label, value || '']),
      theme: 'grid',
      columns: [{ header: 'Field', dataKey: 0 }, { header: 'Details', dataKey: 1 }]
    });
    y = doc.lastAutoTable.finalY + 10;
    if (y > 260) {
      doc.addPage();
      y = 18;
    }
  };

  section('Student Information', [
    ['Full Name', data.studentFullName],
    ['Name with Initials', data.studentInitials],
    ['Date of Birth', data.dob],
    ['Grade', data.grade],
    ['Admission Number', data.admissionNumber],
    ['Hosteller', data.hosteller],
    ['National / Postal Identity Card Number', data.studentId],
    ['Email Address', data.studentEmail]
  ]);

  section('Father Information', [
    ['Full Name', data.fatherName],
    ['NIC Number', data.fatherNic],
    ['Occupation', data.fatherOccupation],
    ['Residential Address', data.fatherAddress],
    ['Contact Number', data.fatherContact]
  ]);

  section('Mother Information', [
    ['Full Name', data.motherName],
    ['NIC Number', data.motherNic],
    ['Occupation', data.motherOccupation],
    ['Residential Address', data.motherAddress],
    ['Contact Number', data.motherContact]
  ]);

  section('Guardian Information', [
    ['Full Name', data.guardianName],
    ['NIC Number', data.guardianNic],
    ['Occupation', data.guardianOccupation],
    ['Address', data.guardianAddress],
    ['Contact Number', data.guardianContact]
  ]);

  section('Emergency Contact', [
    ['Full Name', data.emergencyName],
    ['Contact Number', data.emergencyContact]
  ]);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Declaration', margin, y);
  y += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('I confirm that the details entered above are true and accurate to the best of my knowledge.', margin, y, { maxWidth: pageWidth - margin * 2 });
  y += 22;
  doc.line(margin, y, margin + 70, y);
  doc.line(pageWidth - margin - 70, y, pageWidth - margin, y);
  doc.text('Student Signature', margin, y + 5);
  doc.text('Parent / Guardian Signature', pageWidth - margin - 70, y + 5);

  doc.save(`${safeName(data.studentFullName)}-AAAC-Membership-Application.pdf`);
}

function initJoinForm() {
  const form = $('#joinForm');
  if (!form) return;

  $('#downloadPdfBtn')?.addEventListener('click', async () => {
    if (!form.reportValidity()) return;
    const data = collectFormData(form);
    await generateMembershipPdf(data);
    showToast('PDF downloaded. Print it and hand it over to the academy after checking all details.');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = collectFormData(form);
    localStorage.setItem('aaacMembershipDraft', JSON.stringify(data));
    await generateMembershipPdf(data);
    showToast('Application saved in this browser and PDF downloaded.');
  });

  const saved = localStorage.getItem('aaacMembershipDraft');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      Object.entries(data).forEach(([key, value]) => {
        const input = form.elements[key];
        if (input) input.value = value;
      });
    } catch (error) {
      console.warn('Could not load saved draft', error);
    }
  }
}

function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;
  form.addEventListener('submit', () => {
    showToast('Sending your message. The first FormSubmit message may need email activation by the club.');
  });
}

function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  $all('[data-nav]').forEach(link => {
    const nav = link.getAttribute('data-nav');
    if (page === nav || (page === '' && nav === 'index.html')) link.classList.add('active');
  });
}


function initHeroNavigation() {
  const projectsTarget = $('#projects');
  const scrollToProjects = (event) => {
    if (!projectsTarget) return;
    event.preventDefault();
    projectsTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const explore = $('.hero-actions a[href="#projects"]');
  const scrollBtn = $('[data-scroll-target="#projects"]');
  explore?.addEventListener('click', scrollToProjects);
  scrollBtn?.addEventListener('click', scrollToProjects);

  const joinButtons = $all('.hero-actions a[href="join.html"], .join-strip a[href="join.html"]');
  joinButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'join.html';
    });
  });
}

function initEngine360() {
  const stage = $('#engineStage');
  if (!stage) return;

  let rotateY = -18;
  let rotateX = 9;
  let startX = 0;
  let startY = 0;
  let baseY = rotateY;
  let baseX = rotateX;
  let dragging = false;

  const apply = () => {
    stage.style.setProperty('--engine-rotate-y', `${rotateY}deg`);
    stage.style.setProperty('--engine-rotate-x', `${rotateX}deg`);
  };

  const start = (event) => {
    dragging = true;
    stage.classList.add('is-dragging');
    startX = event.clientX;
    startY = event.clientY;
    baseY = rotateY;
    baseX = rotateX;
    stage.setPointerCapture?.(event.pointerId);
  };

  const move = (event) => {
    if (!dragging) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    rotateY = baseY + dx * 0.65;
    rotateX = Math.max(-18, Math.min(18, baseX - dy * 0.22));
    apply();
  };

  const end = (event) => {
    dragging = false;
    stage.classList.remove('is-dragging');
    stage.releasePointerCapture?.(event.pointerId);
  };

  stage.addEventListener('pointerdown', start);
  stage.addEventListener('pointermove', move);
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);
  stage.addEventListener('pointerleave', () => {
    if (!dragging) stage.classList.remove('is-dragging');
  });

  apply();
}

function init() {
  initMobileNav();
  initCursorGlow();
  initGlassSpotlight();
  initF16Cursor();
  initHeroNavigation();
  initEngine360();
  initProjectCarousel();
  initBoard();
  initProjectArticle();
  initJoinForm();
  initContactForm();
  initTiltCards();
  setActiveNav();
}

document.addEventListener('DOMContentLoaded', init);
