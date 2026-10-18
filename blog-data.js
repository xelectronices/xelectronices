/*
  X ELECTRONICES BLOG CONTENT — EASY MANAGEMENT
  ------------------------------------------------
  This file is the simple control panel for the Blog's Notices and
  Latest Achievements. You normally only need to edit this file.

  HOW TO ADD A NOTICE:
  Copy one object inside XE_BLOG_NOTICES and change the label/title/
  description/meta. Use type: "service" or type: "closure".

  HOW TO ADD AN ACHIEVEMENT:
  Copy one object inside XE_BLOG_UPDATES and change the date/title/
  description/category.
*/

window.XE_BLOG_NOTICES = [
  {
    type: "service",
    label: "Special Service Announcement",
    title: "Laptop, Computer, Printer, CCTV Camera Installation & Repair Services ",
    description: "We now offering A to Z parts Repair for Laptop, Computer & Printer. Also CCTV Camera Installation & Repair Services for homes, offices, and shops.",
    meta: ["Laptop Repair", "Computer Repair", "CCTV Installation", "Printer Repair"],
    whatsappText: "Hello X ELECTRONICES, I want to check my Annapurna Yojna application status. Please guide me."
  },
  {
    type: "Event & Notice",
    label: "Events & Notice Board",
    title: "শুভ শারদীয়ার প্রীতি শুভেচ্ছা ও আন্তরিক অভিনন্দন",
    description: "শিউলি ফুলের গন্ধ মাখা শরৎ আকাশখানী, কাশফুল আর ঘাসের দোলায় কার ঐ পদধ্বনি? শারদীয় শুভেচ্ছা। মা দুর্গা আপনার এবং আপনার পরিবারের মঙ্গল করুন",
    meta: ["Happy Durga Puja", "শুভ শারদীয়ার প্রীতি, শুভেচ্ছা ও আন্তরিক অভিনন্দন", "Liluah"],
    whatsappText: "Hello X ELECTRONICES, I need help with a digital service during the shop closure period."
  }
];

window.XE_BLOG_UPDATES = [
  {
    date: "18 JULY 2026",
    title: "2nd Anniversary · 1,500+ Customers Served",
    description: "X ELECTRONICES completed two years of its official store journey with 1,500+ customers served, 200+ 5-star Google reviews and ₹2,000 donated towards a Feeding India camp.",
    category: "Milestone"
  },
  {
    date: "10 JULY 2026",
    title: "200+ 5-Star Google Reviews",
    description: "A major customer-trust milestone as X ELECTRONICES crossed 200+ 5-star Google reviews from satisfied customers.",
    category: "Achievement"
  },
  {
    date: "5 DECEMBER 2025",
    title: "100+ 5-Star Google Reviews",
    description: "X ELECTRONICES reached its first 100+ 5-star Google review milestone, reflecting growing customer confidence and support.",
    category: "Achievement"
  }
];
