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
    title: "Now You Can Check Your Annapurna Yojna Application Status Online",
    description: "X ELECTRONICES is now providing online assistance for checking Annapurna Yojna application status. Contact us on WhatsApp or phone for guidance about the status-check process, required details and available assistance.",
    meta: ["Annapurna Yojna", "Online Status Check", "West Bengal Digital Service"],
    whatsappText: "Hello X ELECTRONICES, I want to check my Annapurna Yojna application status. Please guide me."
  },
  {
    type: "closure",
    label: "Shop Closure Notice",
    title: "Shop Will Stay Closed on 2nd & 3rd October 2026",
    description: "Our physical X ELECTRONICES store in Liluah, Howrah will remain closed on 2nd October 2026 and 3rd October 2026. Please plan your in-store visit accordingly. For eligible digital services, you may contact us through WhatsApp or phone.",
    meta: ["2 October 2026", "3 October 2026", "Liluah Store"],
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
