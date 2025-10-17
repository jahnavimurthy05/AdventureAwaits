
    const pages = [
      { img: "paris.webp", title: "Paris, France — City of Lights", desc: "Experience the eternal romance of the Eiffel Tower and the historic streets of the Latin Quarter. Paris is a flawless blend of culture, art, and exquisite dining.", rating: "⭐⭐⭐⭐⭐" },
      { img: "norway.webp", title: "Tromsø, Norway — Aurora Borealis", desc: "Journey to the Arctic Circle to witness the ethereal glow of the Northern Lights. The vast, silent, and snow-covered landscape provides the most dramatic setting for nature's greatest light show.", rating: "⭐⭐⭐⭐⭐" },
      { img: "bali.webp", title: "Bali, Indonesia — Island Paradise", desc: "Discover Bali's stunning beaches, lush rice terraces, and vibrant culture. Perfect for both adventure seekers and those looking for serene relaxation.", rating: "⭐⭐⭐⭐⭐" },
      { img: "malayssia.webp", title: "Malaysia — Truly Asia", desc: "Experience the diverse cultures, languages, and cuisines of Malaysia. From the bustling streets of Kuala Lumpur to the tranquil beaches of Langkawi, Malaysia offers a unique blend of experiences.", rating: "⭐⭐⭐⭐⭐" },
      { img: "maldeves.webp", title: "Maldives — Tropical Paradise", desc: "Relax in the luxurious resorts of the Maldives, where white sandy beaches meet crystal clear waters. Ideal for honeymooners and those seeking a tranquil escape.", rating: "⭐⭐⭐⭐⭐" }


    ];

    let currentPage = 0;
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    function updateBookPages() {
      page1.querySelector("img").src = pages[currentPage].img;
      page2.querySelector("h3").textContent = pages[currentPage].title;
      page2.querySelector("p:nth-of-type(1)").textContent = pages[currentPage].desc;
      page2.querySelector("p:nth-of-type(2)").textContent = pages[currentPage].rating;

      const nextIndex = (currentPage + 1) % pages.length;
      page3.querySelector("img").src = pages[nextIndex].img;
      page4.querySelector("h3").textContent = pages[nextIndex].title;
      page4.querySelector("p:nth-of-type(1)").textContent = pages[nextIndex].desc;
      page4.querySelector("p:nth-of-type(2)").textContent = pages[nextIndex].rating;
    }

    updateBookPages();

    nextBtn.addEventListener("click", () => {
      currentPage = (currentPage + 1) % pages.length;
      updateBookPages();
      document.getElementById("page-control-2").checked = true;
    });

    prevBtn.addEventListener("click", () => {
      currentPage = (currentPage - 1 + pages.length) % pages.length;
      updateBookPages();
      document.getElementById("page-control-1").checked = true;
    });

    const faqData = [
      { q: "What is included in the travel package?", a: "Accommodation, guided tours, local transport, and breakfast. Flights and personal expenses are extra." },
      { q: "Can I customize my trip?", a: "Yes! You can personalize your itinerary by adding destinations, activities, or extra days." },
      { q: "Is travel insurance mandatory?", a: "Not mandatory but highly recommended for your safety." },
      { q: "How do I book a trip?", a: "Book directly via 'Booking' section or contact us via email/WhatsApp." },
      { q: "Do you offer group discounts?", a: "Yes, for groups of 5 or more. Contact us for details." },
      { q: "Are meals included? If yes, which ones (Veg/Non - Veg)?", a: "Yes, breakfast, lunch, and dinner are included. You can choose between vegetarian and non-vegetarian options." },
      { q: "What documents do I need to carry (ID, passport, visa, other?", a: "Yes, The Documents need to be carried will be informed before the trip." },
      { q: "Will the company assist with visa processing?", a: "Yes, we provide assistance with visa processing." },
      { q: "Can I choose my preferred travel dates?", a: "No, travel dates are fixed as per the itinerary." },
      { q: "Can I change my travel dates after booking?", a: "No, changes are not allowed after booking." },
      { q: "What is the cancellation policy?", a: "Cancellations made 30 days before the trip will receive a full refund. Cancellations made within 30 days will incur a 50% charge." },
      { q: "Are there any hidden costs?", a: "No, all costs are clearly mentioned in the package details." },
      { q: "What if I have special dietary requirements?", a: "Please inform us at the time of booking, and we will accommodate your needs." }




    ];

    const search = document.getElementById("faq-search");
    const answerBox = document.getElementById("faq-answer");
    const askMore = document.getElementById("ask-more");

    search.addEventListener("input", () => {
      const query = search.value.toLowerCase();
      const found = faqData.find(faq => faq.q.toLowerCase().includes(query));
      answerBox.innerHTML = query ? (found ? `<p>${found.a}</p>` : "<p>No matching answer found.</p>") : "<p>Answers will appear here as you type.</p>";
    });

    askMore.addEventListener("click", () => {
      answerBox.innerHTML = faqData.map(faq => `<p><strong>Q:</strong> ${faq.q}<br><strong>A:</strong> ${faq.a}</p><hr>`).join('');
    });