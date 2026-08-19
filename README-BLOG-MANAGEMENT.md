# X ELECTRONICES Blog — Easy Management

The Blog page is designed so routine announcements and new milestones can be added without redesigning `blog.html`.

## 1. Add or remove notices

Open:

`blog-data.js`

Edit:

`window.XE_BLOG_NOTICES`

Each notice has:

- `type`: use `service` or `closure`
- `label`: short label shown on the card
- `title`: announcement headline
- `description`: announcement details
- `meta`: small information tags
- `whatsappText`: optional WhatsApp message; leave as `""` if you do not need a WhatsApp button

Example:

```js
{
  type: "service",
  label: "New Service",
  title: "Now Available: Example Service",
  description: "Write the announcement here.",
  meta: ["New Service", "West Bengal"],
  whatsappText: "Hello X ELECTRONICES, I need help with Example Service."
}
```

## 2. Add a new achievement or milestone

Edit `window.XE_BLOG_UPDATES` in the same file.

Copy an existing item and change:

- `date`
- `title`
- `description`
- `category`

The newest item can be placed at the top of the list.

## 3. Current notices

The page currently contains:

- Annapurna Yojna application status online-check announcement
- Physical shop closure on 2nd & 3rd October 2026

## 4. Important

Do not delete `blog-data.js` or change its filename unless the matching `<script src="./blog-data.js"></script>` in `blog.html` is also changed.

The existing brand story, transaction page, homepage, images, WhatsApp icon and other website functionality are separate and remain unchanged.
