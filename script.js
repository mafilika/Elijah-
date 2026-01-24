// LIGHTBOX FOR PORTFOLIO
const portfolioItems = document.querySelectorAll('.portfolio-grid img');

if (portfolioItems.length) {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  const img = document.createElement('img');
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      img.src = item.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

// SMOOTH SCROLL FOR HERO BUTTONS
const scrollBtns = document.querySelectorAll('[data-scroll-to]');
scrollBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.getAttribute('data-scroll-to'));
    if(target){target.scrollIntoView({behavior:'smooth'});}
  });
});

// CONTACT FORM → WHATSAPP LEAD
const quoteForm = document.getElementById('quoteForm');

if(quoteForm){
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = quoteForm.name.value.trim();
    const phone = quoteForm.phone.value.trim();
    const email = quoteForm.email.value.trim();
    const service = quoteForm.service.value;
    const message = quoteForm.message.value.trim();

    if(!name || !phone || !email || !service) return alert('Please fill all required fields');

    const whatsappMsg = `*Quotation Request*\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nProject Details: ${message}`;
    const waLink = `https://wa.me/27815199177?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(waLink, '_blank');
    quoteForm.reset();
  });
      }
