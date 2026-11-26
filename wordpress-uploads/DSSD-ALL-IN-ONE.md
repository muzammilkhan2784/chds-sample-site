# DSSD program archive on the live site (Steps 26-33) - ALL-IN-ONE

This one file has every step **and the full code of every file to paste** (at the bottom, in the Appendix).
The only thing not inside it is the images: download the zip from the link below (or use DSSD-WordPress-Package.zip, which has everything).
When a step says "paste file X", copy the code block for X from the Appendix: everything between the ``` lines, nothing else.

Dr. Chunara (Nov 25): put the DSSD archive **within Our Work**, in **our NYU style**, with **all the information** from the Squarespace site, and list the DSSD visitors on it.
Preview of the finished look: https://muzammilkhan2784.github.io/chds-sample-site/dssd.html

All files: https://github.com/muzammilkhan2784/chds-sample-site/tree/main/wordpress-uploads/dssd-archive
Raw file links (open, Ctrl+A, Ctrl+C): `https://raw.githubusercontent.com/muzammilkhan2784/chds-sample-site/main/wordpress-uploads/dssd-archive/<file name>`
Images zip: https://github.com/muzammilkhan2784/chds-sample-site/raw/main/wordpress-uploads/dssd-archive-images.zip

Final addresses:

| Page | Address |
|---|---|
| Archive home | /work/dssd/ |
| About and leadership | /work/dssd/about-and-leadership/ |
| Workshops | /work/dssd/workshops/ |
| 2026 to 2022 workshops | /work/dssd/workshop-2026/ ... /work/dssd/workshop-2022/ |
| Community of Practice | /work/dssd/community-of-practice/ |
| Visiting trainees | /work/dssd/visiting-trainees/ |

Do the steps in order: the pages need the images (Step 26) and the CSS (Step 27) first.
Squarespace stays on. Do not cancel it until Dr. Chunara and Jessica say so.

---

## Step 26: Upload the 59 DSSD images

1. Download `dssd-archive-images.zip`. Right-click it, then **Extract All**, then **Extract**. You get 59 files, all starting with `dssd-`.
2. WordPress Dashboard: **Media**, then **Add New Media File**.
3. Open the extracted folder, press **Ctrl + A** to select all 59 files, and drag them into the upload box. Wait until every file has finished. The bars disappear and each file shows a thumbnail.
4. Check:
   - Go to **Media, Library**, switch to list view, and search `dssd-`. It should show **59 items**.
   - Click `dssd-moi-building.jpg`. Its **File URL** must be exactly `https://healthdatasci.org/wp-content/uploads/2026/11/dssd-moi-building.jpg`.
   - **If the folder is not `2026/11`** (for example, it says `2026/12` because it's now December), or any file name has gained a `-1` or `-scaled`, **stop and tell me**. The page files point at those exact addresses, and I'll regenerate them.
5. Do not rename anything and do not add alt text here. The descriptions are already in the page code.

## Step 27: Add the DSSD archive CSS (one paste)

1. **Appearance, Customize, Additional CSS.**
2. Click inside the box, press **Ctrl + End** to jump to the very end, then press **Enter** twice.
3. Paste the whole of `00-dssd-archive-additional-css.css`, which starts with `/* ===== DSSD program archive`. Paste it **below** everything already there. Do not delete anything.
4. Click **Publish**.
   - It only styles the DSSD pages, through the `.dssd-wp` class, so no other page changes.

## Step 28: Create the archive home page (/work/dssd/)

1. **Pages, Add New Page.**
2. Title: `DSSD Program Archive`
3. In the right sidebar, on the **Page** tab:
   - **Parent**: `Our Work`. It's under "Page Attributes", or click the "Parent" field in the Summary.
   - **Template**: `Elementor Full Width`.
   - **URL / Permalink slug**: `dssd`. The URL should read `healthdatasci.org/work/dssd/`.
4. Click **Save draft**, then **Edit with Elementor**.
5. In Elementor, click the **gear icon (Page Settings)**. Confirm **Page Layout = Elementor Full Width** and turn **Hide Title = On**.
6. In the widget panel, search `HTML` and drag the **HTML** widget into the drop area.
7. **Alignment.** This makes the light-violet title band run edge to edge, like the other pages:
   - Click the **section handle** (the small tab on top of the new section), then **Layout**: set **Content Width = Full Width** and **Columns Gap = No Gap**. Then **Advanced**: set **Padding** to 0 on all sides (click the link icon and type 0).
   - Click the **column handle**, then **Advanced**: set **Padding** to 0 on all sides.
   - If your Elementor shows a **Container** instead of a section: set **Content Width = Full Width**, **Width = 100%**, **Gaps = 0**, and **Advanced, Padding = 0**.
8. Click the HTML widget. In **HTML Code**, paste the whole of `01-dssd.html`, from `<div class="dssd-wp">` to the last `</div>`.
9. Check the preview. You should see:
   - the title band;
   - the breadcrumb *Our Work › NYU-Moi DSSD Training Program › Program archive*;
   - the 5 pill tabs, with "Overview" filled violet;
   - the intro beside the Moi University photo;
   - the video, the 4 cards, the 6 visiting trainees, and Contact us.

   Images only show if Step 26 is done.
10. Click **Publish**.

## Step 29: Create the 9 sub-pages

These are the same as Step 28, except **Parent = DSSD Program Archive**, not Our Work.

| # | Title | Slug | Paste this file |
|---|---|---|---|
| 1 | DSSD About and Leadership | about-and-leadership | 02-about-and-leadership.html |
| 2 | DSSD Workshops | workshops | 03-workshops.html |
| 3 | DSSD 2026 Workshop | workshop-2026 | 04-workshop-2026.html |
| 4 | DSSD 2025 Workshop | workshop-2025 | 05-workshop-2025.html |
| 5 | DSSD 2024 Workshop | workshop-2024 | 06-workshop-2024.html |
| 6 | DSSD 2023 Workshop | workshop-2023 | 07-workshop-2023.html |
| 7 | DSSD 2022 Workshop | workshop-2022 | 08-workshop-2022.html |
| 8 | DSSD Community of Practice | community-of-practice | 09-community-of-practice.html |
| 9 | DSSD Visiting Trainees | visiting-trainees | 10-visiting-trainees.html |

- Use the slugs exactly as written. The links between the pages depend on them.
- **Faster way (optional):** on the Step 28 page in Elementor, right-click the section handle, then **Save as Template**, and name it `DSSD page`. On each new page, click the **folder icon**, then **My Templates**, then **Insert** next to `DSSD page`. This keeps the 0-padding and full-width settings. Then click the HTML widget and replace its code with the new file.

## Step 30: Add the archive card to Our Work

1. Open https://healthdatasci.org/work/ and click **Edit with Elementor**.
2. Search `HTML` and drag an **HTML** widget **directly below the project list**, in the same column, so it lines up with the project cards.
3. Paste the whole of `11-our-work-dssd-card.html`.
4. **Alignment:** no padding changes are needed. The card has its own top line and spacing, like the other cards. Its left edge should line up with the project images above it.
5. Click **Update**.

## Step 31: Point the NYU-Moi project page at the archive

1. Open https://healthdatasci.org/nyu-moi-data/ and click **Edit Post** in the black top bar.
2. **Change the three Squarespace links.** Click each link, then the pencil (edit). Paste the new URL and switch **Open in new tab** OFF.
   - In the intro paragraph, "Social Determinant Data Community of Practice": `/work/dssd/community-of-practice/`
   - Under Related links, "Program Website": `/work/dssd/`. Change its text to `Program website (archive)`.
   - Under Related links, "Social Determinant Data Community of Practice": `/work/dssd/community-of-practice/`
3. **Add the archive box at the top:**
   - Click just before the first word of the first paragraph, click the **+** (block inserter), search `Custom HTML`, and add it.
   - Paste the whole of `12-nyu-moi-archive-callout.html`.
   - If this post opens in Elementor instead, use an **HTML** widget at the top of the text instead.
4. Click **Update**.

## Step 32: Purge and check

1. Click **Purge SG Cache**.
2. Tell me "check". I'll verify:
   - all 10 pages and their addresses;
   - every link between them, and the 59 images;
   - the Our Work card and the NYU-Moi links;
   - phone and desktop layout, headings and contrast.

**To undo anything:** delete the page, or remove the CSS block from Additional CSS. The Squarespace site is untouched.

---

## Step 33: Fixes found in the live check (video, map, phone button)

**33a. Video and map not showing.** SiteGround's lazy-loading holds back the embedded video (archive home) and the data-index map (Community of Practice), so they stay as an empty black or white box. Add one line to each of those two pages:
1. Open **https://healthdatasci.org/work/dssd/** and click **Edit with Elementor**. Click the HTML widget.
2. In **HTML Code**, press **Ctrl + End** to go to the very end, after the last `</div>`. Press **Enter** and paste this line exactly:
   ```html
   <script>document.querySelectorAll('.dssd-wp iframe[data-src]').forEach(function(f){if(!f.getAttribute('src')){f.src=f.getAttribute('data-src');}});</script>
   ```
3. Click **Update**.
4. Do the same on **https://healthdatasci.org/work/dssd/community-of-practice/**.

(The updated `01-dssd.html` and `09-community-of-practice.html` already include this line, so re-pasting either whole file does the same thing.)

**33b. Button running off the screen on phones.** On the NYU-Moi page, the "Visit the DSSD program archive" button is wider than a phone screen.
1. **Appearance, Customize, Additional CSS.** Press **Ctrl + End**, then **Enter**.
2. Paste:
   ```css
   /* DSSD: long button text wraps on phones instead of running off the screen */
   body .dssd-wp .btn-outline { white-space: normal; max-width: 100%; text-align: center; }
   ```
3. Click **Publish**.

Then click **Purge SG Cache** and tell me "check".

---

# Appendix: full code of every file

## File: `00-dssd-archive-additional-css.css`

```css
/* ===== DSSD program archive (NYU-Moi Data Science for Social Determinants), November 2026 =====
   Used only by the DSSD archive pages under Our Work and the archive card / callout.
   Everything is inside .dssd-wp, so no other page changes. To undo: delete this whole block. */
body .dssd-wp { color: #404040; font-family: "Inter", Arial, sans-serif; font-size: 17px; line-height: 1.65; }
body .dssd-wp *, body .dssd-wp *::before, body .dssd-wp *::after { box-sizing: border-box; }
body .dssd-wp img { max-width: 100%; height: auto; }
body .dssd-wp a { color: #57068c; text-decoration: underline; text-underline-offset: 2px; }
body .dssd-wp a:hover { color: #330662; }
body .dssd-wp h1, body .dssd-wp h2, body .dssd-wp h3, body .dssd-wp h4 { color: #57068c; line-height: 1.2; margin: 0 0 .5em; font-weight: 600; font-family: "Inter", Arial, sans-serif; }
body .dssd-wp h1 { font-size: clamp(35.2px, 5vw, 54.4px); letter-spacing: -.02em; font-weight: 500; }
body .dssd-wp h2 { font-size: clamp(27.2px, 3vw, 36.8px); font-weight: 500; letter-spacing: -.01em; }
body .dssd-wp h3 { font-size: 20.8px; font-weight: 500; }
body .dssd-wp p { margin: 0 0 1em; }
body .dssd-wp ul { margin: 0 0 1em; }
body .dssd-wp a:visited:not(.btn-outline):not(.learn):not([aria-current="page"]) { color: #3b0a63; }
body .dssd-wp .dssd-nav a, body .dssd-wp .dssd-nav a:visited { color: #57068c; text-decoration: none; }
body .dssd-wp .dssd-nav a[aria-current="page"], body .dssd-wp .dssd-nav a[aria-current="page"]:visited { color: #fff; }
body .dssd-wp .btn-outline, body .dssd-wp .btn-outline:visited { text-decoration: none; }
body .dssd-wp .btn-outline:hover { color: #fff; }
body .dssd-wp .wrap { width: min(1120px, 100% - 40px); margin-inline: auto; }
body .dssd-wp .btn-outline { display: inline-block; border: 2px solid #57068c; color: #57068c; background: #fff; padding: 9px 22px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; font-size: 13.6px; text-decoration: none; white-space: nowrap; }
body .dssd-wp .btn-outline:hover { background: #57068c; color: #fff; }
@media (max-width: 1120px) {
  body .dssd-wp .btn-outline { text-align: center; }
}
body .dssd-wp .section { padding: clamp(40px, 6vw, 80px) 0; }
body .dssd-wp .bar { display: block; width: 56px; height: 5px; background: #00a99d; margin: 0 0 22px; }
body .dssd-wp .page-title { background: #eee6f3; padding: clamp(40px, 6vw, 72px) 0; text-align: center; }
body .dssd-wp .page-title .bar { margin-inline: auto; }
body .dssd-wp .page-title h1 { margin: 0; }
body .dssd-wp .hero .wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
@media (max-width: 800px) {
  body .dssd-wp .hero .wrap { grid-template-columns: 1fr; }
}
body .dssd-wp .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
body .dssd-wp .cards { display: grid; gap: 28px; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); }
body .dssd-wp .card img.cover { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 12px; margin-bottom: 14px; display: block; }
body .dssd-wp .card img.cover.fit { object-fit: contain; background: #fff; }
body .dssd-wp .card h3 { font-size: 19.2px; font-weight: 600; margin-bottom: .4em; }
body .dssd-wp .card h3 a { color: #57068c; text-decoration: none; }
body .dssd-wp .card h3 a:hover { text-decoration: underline; }
body .dssd-wp .card p { margin-bottom: .6em; }
body .dssd-wp .card .learn { font-weight: 600; letter-spacing: .08em; text-transform: uppercase; font-size: 12.8px; }
body .dssd-wp .prose { max-width: 78ch; }
body .dssd-wp .prose h2 { font-size: 24px; font-weight: 600; margin-top: 1.6em; }
body .dssd-wp .prose .funders img { max-height: 130px; max-width: 100%; width: auto; display: inline-block; margin: 0 20px 14px 0; vertical-align: middle; }
body .dssd-wp .back { font-weight: 600; font-size: 15.2px; }
body .dssd-wp .people-grid { display: grid; gap: 36px 28px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); justify-items: center; }
body .dssd-wp .people-grid.two { grid-template-columns: repeat(2, minmax(220px, 300px)); justify-content: center; }
body .dssd-wp .person { text-align: center; max-width: 300px; }
body .dssd-wp .person img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin: 0 auto 12px; border: 1px solid #d6d6d6; display: block; }
body .dssd-wp .person h3 { font-size: 18.4px; font-weight: 600; margin-bottom: .15em; color: #1d1d1d; }
body .dssd-wp .person p { margin: 0 0 .2em; font-size: 15.2px; }
body .dssd-wp .person .role { font-weight: 600; }
@media (max-width: 800px) {
  body .dssd-wp .two-col { grid-template-columns: 1fr; }
  body .dssd-wp .people-grid.two { grid-template-columns: 1fr; }
}
body .dssd-wp .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
body .dssd-wp .prose ul { padding-left: 1.2em; }
body .dssd-wp a:visited:not(.btn-outline):not(.hero-link):not(.learn):not(.more):not([aria-current="page"]) { color: #3b0a63; }
body .dssd-wp h2.c { text-align: center; }
body .dssd-wp .people-grid.three { grid-template-columns: repeat(3, minmax(180px, 300px)); justify-content: center; }
@media (max-width: 800px) {
  body .dssd-wp .people-grid.three { grid-template-columns: 1fr; }
}
body .dssd-wp .person .avatar { width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 12px; border: 1px solid #d6d6d6; background: #f4eef8; color: #57068c; display: flex; align-items: center; justify-content: center; font-size: 38.4px; font-weight: 600; }
body .dssd-wp .archive-tag { display: inline-block; margin: 0 0 12px; padding: 4px 12px; border-radius: 999px; background: #eee6f3; color: #57068c; font-weight: 600; font-size: 13.1px; letter-spacing: .04em; text-transform: uppercase; }
body .dssd-wp .dssd-nav ul { list-style: none; display: flex; flex-wrap: wrap; gap: 8px 10px; padding: 0; margin: 0 0 20px; }
body .dssd-wp .dssd-nav a { display: block; padding: 8px 16px; border: 1px solid #d6d6d6; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 15.2px; color: #57068c; background: #fff; }
body .dssd-wp .dssd-nav a:hover { background: #eee6f3; }
body .dssd-wp .dssd-nav a[aria-current="page"] { background: #57068c; color: #fff; border-color: #57068c; }
body .dssd-wp .dssd-h2 { font-size: 24px; font-weight: 600; margin: 2em 0 .8em; }
body .dssd-wp .dssd-intro { gap: 40px; align-items: start; }
body .dssd-wp .dssd-photo { margin: 0; }
body .dssd-wp .dssd-photo img { width: 100%; height: auto; border-radius: 12px; display: block; }
body .dssd-wp .dssd-photo figcaption { font-size: 14.4px; color: #555; margin-top: 8px; }
body .dssd-wp .embed { position: relative; aspect-ratio: 16 / 9; max-width: 820px; border-radius: 12px; overflow: hidden; background: #000; }
body .dssd-wp .embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
body .dssd-wp .embed.map { aspect-ratio: 4 / 3; background: #fff; border: 1px solid #d6d6d6; margin-bottom: 24px; }
body .dssd-wp .partner-logos { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
body .dssd-wp .partner-logos li { background: #fff; border: 1px solid #d6d6d6; border-radius: 10px; display: flex; align-items: center; justify-content: center; padding: 12px; min-height: 110px; }
body .dssd-wp .partner-logos img { max-width: 100%; max-height: 84px; width: auto; height: auto; object-fit: contain; display: block; }
body .dssd-wp .dssd-people.people-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); align-items: start; }
body .dssd-wp .dssd-people .person img { width: 130px; height: 130px; }
body .dssd-wp .dssd-people .person h3 { font-size: 16.8px; }
body .dssd-wp .dssd-people .person .role { font-weight: 400; font-size: 14.4px; color: #444; }
body .dssd-wp .dssd-cards .card h3 { margin-top: 0; }
body .dssd-wp .photo-row { display: flex; flex-wrap: wrap; gap: 16px; margin: 28px 0; }
body .dssd-wp .photo-row img { flex: 1 1 280px; min-width: 0; max-width: 480px; max-height: 420px; width: 100%; object-fit: cover; border-radius: 12px; }
body .dssd-wp .gallery { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); }
body .dssd-wp .gallery img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 10px; display: block; }
body .dssd-wp .members { list-style: none; padding: 0; margin: 0; display: grid; gap: 20px 28px; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
body .dssd-wp .members h3 { font-size: 16.8px; font-weight: 600; margin: 0 0 .3em; }
body .dssd-wp .members ul { padding-left: 1.1em; margin: 0; }
body .dssd-wp .trainees { display: grid; gap: 40px; max-width: 900px; }
body .dssd-wp .trainee { display: grid; grid-template-columns: 170px 1fr; gap: 28px; align-items: start; }
body .dssd-wp .trainee img { width: 170px; height: 170px; object-fit: cover; border-radius: 50%; border: 1px solid #d6d6d6; }
body .dssd-wp .trainee h2 { font-size: 21.6px; margin: 0 0 .1em; }
body .dssd-wp .trainee .role { font-weight: 600; color: #57068c; margin: 0 0 .6em; }
@media (max-width: 720px) {
  body .dssd-wp .trainee { grid-template-columns: 1fr; justify-items: start; }
  body .dssd-wp .trainee img { width: 130px; height: 130px; }
}
body .dssd-wp .dssd-top .back { margin-top: 2.4em; }
body .dssd-wp .archive-callout .archive-tag { background: #fff; }
body .dssd-wp .dssd-people.people-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 36px 28px; }
body .dssd-wp .dssd-people .person { flex: 0 1 200px; }
body .dssd-wp .dssd-h2.dssd-first { margin-top: .4em; }
body .dssd-wp .dssd-wide p { max-width: none; }
body .dssd-wp .dssd-wide h3 { font-size: 17.6px; font-weight: 600; margin: 1.2em 0 .2em; color: #1d1d1d; }
body .dssd-wp .partner-logos { display: flex; flex-wrap: wrap; justify-content: center; }
body .dssd-wp .partner-logos li { flex: 0 1 160px; }
body .dssd-wp .dssd-nav a[aria-current="page"]:hover, body .dssd-wp .dssd-nav a[aria-current="page"]:focus, body .dssd-wp .dssd-nav a[aria-current="page"]:active { background: #330662; color: #fff; border-color: #330662; }
body .dssd-wp .dssd-nav a:not([aria-current]):active { background: #eee6f3; color: #57068c; }
body .dssd-wp .crumbs ol { list-style: none; display: flex; flex-wrap: wrap; gap: 4px 0; padding: 0; margin: 0 0 14px; font-size: 14.4px; }
body .dssd-wp .crumbs li + li::before { content: "\203A"; margin: 0 8px; color: #6b6b6b; }
body .dssd-wp .crumbs a { color: #57068c; }
body .dssd-wp .crumbs [aria-current="page"] { color: #404040; }
body .dssd-wp .visitor-list { columns: 2 260px; }
body .dssd-wp .photo-row.wide img { width: 100%; height: auto; border-radius: 12px; }

/* Our Work: the archive card under the project list */
body .dssd-wp.dssd-card { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: center; padding: 28px 0; border-top: 1px solid #d6d6d6; }
body .dssd-wp.dssd-card img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; border-radius: 12px; display: block; }
body .dssd-wp.dssd-card h2 { font-size: 25.6px; font-weight: 600; margin: 0 0 .4em; }
body .dssd-wp.dssd-card h2 a { color: #57068c; text-decoration: none; }
body .dssd-wp.dssd-card h2 a:hover { text-decoration: underline; }
body .dssd-wp.dssd-card .learn, body .dssd-wp.dssd-card .learn:visited { display: inline-block; color: #57068c; text-decoration: none; border-bottom: 2px solid #57068c; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; font-size: 13.6px; padding-bottom: 2px; }
body .dssd-wp.dssd-card .learn:hover { color: #330662; border-bottom-color: #330662; }
@media (max-width: 767px) { body .dssd-wp.dssd-card { grid-template-columns: 1fr; gap: 18px; } }
/* NYU-Moi project page: the archive callout */
body .dssd-wp.dssd-callout { margin: 0 0 2em; padding: 20px 24px; background: #eee6f3; border-left: 5px solid #57068c; }
body .dssd-wp.dssd-callout p { margin: 0 0 .8em; }
body .dssd-wp.dssd-callout p:last-child { margin-bottom: 0; }
body .dssd-wp.dssd-callout .archive-tag { background: #fff; }

/* The site header sits over the top of each page, so the title band leaves room for it (same as the other title bands) */
body .dssd-wp .page-title { padding: 121px 0 56px; }
@media (max-width: 921px) { body .dssd-wp .page-title { padding: 110px 0 44px; } }
/* Long button text wraps on phones instead of running off the screen */
body .dssd-wp .btn-outline { white-space: normal; max-width: 100%; text-align: center; }
```

## File: `01-dssd.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>NYU-Moi Data Science for Social Determinants Training Program</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/" aria-current="page">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<div class="two-col dssd-intro">
<div class="prose">
<h2>What is the Data Science for Social Determinants Training Program?</h2>
<p>The overarching goal of the Data Science for Social Determinants (DSSD) pre- and post-doctoral training program is to develop future leaders in data science who are equipped to develop and analyze data to better leverage deep and rich survey as well as Internet and other digitized data sources that can help us capture information on the social determinants of health. Such data can provide unique illumination into factors on where we live, work, and play which can be used to better understand and address health disparities across noncommunicable disease, infectious disease and injuries in the Kenyan context.</p>
<h2>Moi University</h2>
<p>The program leverages excellent international standard biostatistics and informatics faculty and programming at Moi alongside advanced data science coursework at NYU.</p>
<p>Our vision is to expand the base of local expertise and capacity in data science by developing Masters and PhD data science tracks at the Institute for Biomedical Informatics and Biostatistics programs at Moi within 5 years.</p>
<p>Continuing education opportunities and networking will also occur through workshops bringing together experts in health and data science in Kenya and surrounding countries. Programs will be evaluated annually by our Internal Advisory Board and Training Advisory Committee.</p>
</div>
<figure class="dssd-photo"><img src="/wp-content/uploads/2026/11/dssd-moi-building.jpg" alt="Front of the Moi University administration and senate building, with a paved path and gardens" loading="lazy"><figcaption>Moi University, Eldoret, Kenya</figcaption></figure>
</div>
<h2 class="dssd-h2">Watch to learn more about the program</h2>
<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/bfmzdUmxQ0k" title="Video introducing the Data Science for Social Determinants Training Program" loading="lazy" allowfullscreen></iframe></div>
<h2 class="dssd-h2">Explore the archive</h2>
<div class="cards dssd-cards">
<article class="card"><h3><a href="/work/dssd/about-and-leadership/">About and leadership</a></h3><p>Partners, program leadership, advisory boards and past coordinators.</p></article>
<article class="card"><h3><a href="/work/dssd/workshops/">Workshops</a></h3><p>The four annual workshops from 2022 to 2025, with slides and photos, and the planned 2026 workshop.</p></article>
<article class="card"><h3><a href="/work/dssd/community-of-practice/">Community of Practice</a></h3><p>The social determinants working group, its members and the data index.</p></article>
<article class="card"><h3><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></h3><p>The six visiting faculty trainees and their bios.</p></article>
</div>
<h2 class="dssd-h2">Visiting trainees</h2>
<div class="prose"><p>Faculty from Moi University who joined the program as visiting trainees:</p>
<ul class="visitor-list"><li><a href="/work/dssd/visiting-trainees/#ngugi">Philomena Ngugi, PhD</a> &ndash; Spring 2023</li><li><a href="/work/dssd/visiting-trainees/#nyameino">Job Nyameino, MD, MSc</a> &ndash; Spring 2023</li><li><a href="/work/dssd/visiting-trainees/#mbugua">Samuel Mbugua, MSc</a> &ndash; Spring 2024</li><li><a href="/work/dssd/visiting-trainees/#njenga">Edwin Kabi Njenga, MSc</a> &ndash; Spring 2025</li><li><a href="/work/dssd/visiting-trainees/#gesicho">Milka Gesicho, PhD</a> &ndash; 2025</li><li><a href="/work/dssd/visiting-trainees/#tarus">John Tarus, PhD</a> &ndash; Fall 2026</li></ul>
<p><a href="/work/dssd/visiting-trainees/">Read their bios</a></p></div>
<h2 class="dssd-h2" id="contact">Contact us</h2>
<div class="prose">
<p>For questions or comments about the program, please reach out by email or phone from 9 a.m. to 5 p.m. EST, Monday through Friday.</p>
<p><strong>Email:</strong> <a href="mailto:rumi.chunara@nyu.edu">rumi.chunara@nyu.edu</a><br>
<strong>Phone:</strong> <a href="tel:+16465013663">(646) 501-3663</a></p>
</div>
<p class="back"><a href="/nyu-moi-data/">&larr; Back to the NYU-Moi project page</a></p>
</div></section>
</div>
<script>document.querySelectorAll('.dssd-wp iframe[data-src]').forEach(function(f){if(!f.getAttribute('src')){f.src=f.getAttribute('data-src');}});</script>
```

## File: `02-about-and-leadership.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>About and leadership</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">About and leadership</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/" aria-current="page">About and leadership</a></li><li><a href="/work/dssd/workshops/">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<h2 class="dssd-h2 c dssd-first">About us</h2>
<div class="dssd-wide">
<p>The DSSD Training Program is a collaboration between New York University, The NYU Grossman School of Medicine, Moi University, and Brown University that is funded by the National Institutes of Health.</p>
<p>A broader network of academic, industrial and non-governmental organizations (see below to learn more), opens a wide pool of potential, strong trainees from both data science and health backgrounds.</p>
</div>
<h2 class="dssd-h2 c">Stakeholders and partners</h2>
<ul class="partner-logos"><li><a href="https://www.datakind.org"><img src="/wp-content/uploads/2026/11/dssd-logo-datakind.jpg" alt="DataKind" loading="lazy"></a></li><li><a href="https://med.nyu.edu/about-us/"><img src="/wp-content/uploads/2026/11/dssd-logo-nyu-grossman.jpg" alt="NYU Grossman School of Medicine" loading="lazy"></a></li><li><a href="https://www.brown.edu"><img src="/wp-content/uploads/2026/11/dssd-logo-brown.jpg" alt="Brown University" loading="lazy"></a></li><li><a href="https://publichealth.nyu.edu"><img src="/wp-content/uploads/2026/11/dssd-logo-nyu-sgph.jpg" alt="NYU School of Global Public Health" loading="lazy"></a></li><li><a href="https://www.ibm.com/ke-en"><img src="/wp-content/uploads/2026/11/dssd-logo-ibm.jpg" alt="IBM Research Africa" loading="lazy"></a></li><li><a href="https://globalhealth.iu.edu"><img src="/wp-content/uploads/2026/11/dssd-logo-iu.jpg" alt="Indiana University Center for Global Health" loading="lazy"></a></li><li><a href="https://www.nyu.edu"><img src="/wp-content/uploads/2026/11/dssd-logo-nyu.png" alt="New York University" loading="lazy"></a></li><li><a href="https://www.mu.ac.ke"><img src="/wp-content/uploads/2026/11/dssd-logo-moi.jpg" alt="Moi University" loading="lazy"></a></li><li><a href="https://dsi-africa.org"><img src="/wp-content/uploads/2026/11/dssd-logo-dsi-africa.png" alt="DSI-Africa" loading="lazy"></a></li><li><a href="https://cds.nyu.edu/bulletin/"><img src="/wp-content/uploads/2026/11/dssd-logo-nyu-cds.jpg" alt="NYU Center for Data Science" loading="lazy"></a></li><li><a href="https://www.ampathkenya.org"><img src="/wp-content/uploads/2026/11/dssd-logo-ampath.jpg" alt="AMPATH Kenya" loading="lazy"></a></li><li><a href="https://deeplearningindaba.com/2022/"><img src="/wp-content/uploads/2026/11/dssd-logo-indaba.jpg" alt="Deep Learning Indaba" loading="lazy"></a></li><li><a href="https://engineering.nyu.edu"><img src="/wp-content/uploads/2026/11/dssd-logo-nyu-tandon.jpg" alt="NYU Tandon School of Engineering" loading="lazy"></a></li><li><a href="https://www.aku.edu/Pages/home.aspx"><img src="/wp-content/uploads/2026/11/dssd-logo-aku.jpg" alt="Aga Khan University" loading="lazy"></a></li><li><a href="https://kenya.ai"><img src="/wp-content/uploads/2026/11/dssd-logo-kenya-ai.jpg" alt="Kenya AI" loading="lazy"></a></li></ul>
<h2 class="dssd-h2 c">Program leadership</h2>
<div class="people-grid dssd-people "><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-kafu.jpg" alt="Photo of Catherine Kafu" loading="lazy"><h3><a href="https://cartafrica.org/fellows-and-graduate/catherine-kafu/">Catherine Kafu, PhD</a></h3><p class="role">Program Coordinator (Moi)</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-chunara.jpg" alt="Photo of Rumi Chunara" loading="lazy"><h3><a href="https://publichealth.nyu.edu/faculty/rumi-chunara">Rumi Chunara, PhD, ScM</a></h3><p class="role">Program Co-Director (MPI) - NYU</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-mwangi.jpg" alt="Photo of Ann Mwangi" loading="lazy"><h3><a href="https://profiles.mu.ac.ke/annmwangi/biocv">Ann Mwangi, PhD</a></h3><p class="role">Program Co-Director (MPI) - Moi</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-vedanthan.jpg" alt="Photo of Rajesh Vedanthan" loading="lazy"><h3><a href="https://med.nyu.edu/faculty/rajesh-vedanthan">Rajesh Vedanthan, MD, MPH</a></h3><p class="role">Program Co-Director (MPI) - NYU</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-hogan.jpg" alt="Photo of Joseph Hogan" loading="lazy"><h3>Joseph Hogan, ScD, MS</h3><p class="role">Program Co-Director (MPI) - Brown</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-mangeni.jpg" alt="Photo of Judy Mangeni" loading="lazy"><h3><a href="https://cartafrica.org/fellows-and-graduate/judith-mangeni/">Judy Mangeni, PhD</a></h3><p class="role">Key Investigator - Moi</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-immaculee.jpg" alt="Photo of Eileen Immaculee" loading="lazy"><h3><a href="https://ke.linkedin.com/in/eileen-immaculate-bb254ab0">Eileen Immaculee, BBM, MS</a></h3><p class="role">Program Coordinator (IBM/Moi)</p></div></div>
<h2 class="dssd-h2 c">Internal Advisory Board</h2>
<div class="people-grid dssd-people "><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-ogedegbe.jpg" alt="Photo of Olugbenga G. Ogedegbe" loading="lazy"><h3><a href="https://nyulangone.org/doctors/1538227699/olugbenga-g-ogedegbe">Olugbenga G. Ogedegbe, MD, MPH</a></h3><p class="role">Director - Institute for Excellence in Health Equity (NYU)</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-betensky.jpg" alt="Photo of Rebecca Betensky" loading="lazy"><h3><a href="https://publichealth.nyu.edu/faculty/rebecca-betensky">Rebecca Betensky, ScD</a></h3><p class="role">Professor and Chair - Department of Biostatistics at NYU School of Global Public Health</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-kempe.jpg" alt="Photo of Julia Kempe" loading="lazy"><h3><a href="https://cims.nyu.edu/~kempe/">Julia Kempe, PhD</a></h3><p class="role">Director - Center for Data Science (NYU)</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-nyandiko.jpg" alt="Photo of Winstone Nyandiko" loading="lazy"><h3><a href="https://profiles.mu.ac.ke/wnyandiko/biocv">Winstone Nyandiko, MBChB, MMED, MPH</a></h3><p class="role">Associate Professor - Child Health and Pediatrics (Moi)</p></div></div>
<h2 class="dssd-h2 c">Training Advisory Board</h2>
<div class="people-grid dssd-people "><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-mocumbi.jpg" alt="Photo of Ana Mocumbi" loading="lazy"><h3><a href="https://globalhealth.washington.edu/faculty-profile/ana-mocumbi/">Ana Mocumbi, MD, PhD</a></h3><p class="role">Associate Professor - Universidade Eduardo Mondlane (Mozambique) &amp; Affiliate Professor - University of Washington</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-laar.jpg" alt="Photo of Amos Laar" loading="lazy"><h3>Amos Laar, PhD</h3><p class="role">Associate Professor - Department of Population, Family and Reproductive Health at the University of Ghana</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-akuku.jpg" alt="Photo of Boniface Akuku" loading="lazy"><h3><a href="https://www.rd-alliance.org/members/boniface-akuku/">Boniface Akuku, PhD</a></h3><p class="role">Assistant Director - ICT at the Kenya Agricultural &amp; Livestock Research Organization</p></div><div class="person"><img src="/wp-content/uploads/2026/11/dssd-p-bhutta.jpg" alt="Photo of Zulfiqar Bhutta" loading="lazy"><h3><a href="https://www.healthdata.org/about/people/zulfiqar-bhutta">Zulfiqar Bhutta, MBBS</a></h3><p class="role">Robert Harding Inaugural Chair in Global Health - Hospital for Sick Children (Toronto, Canada)</p></div></div>
<h2 class="dssd-h2 c">Program leadership alumni</h2>
<div class="dssd-wide">
<h3>Iris Wagna, BSc.N, MPH</h3>
<p>Iris served as Program Coordinator at AMPATH Kenya and Moi University, from the program&rsquo;s inception until May 2024.</p>
<h3>Julia Dickhaus, MSN, PhD Candidate</h3>
<p>Julia served as Program Coordinator at NYU Langone Grossman School of Medicine from the program&rsquo;s inception until May 2022. Julia is currently a PhD Candidate at Columbia University&rsquo;s School of Nursing.</p>
<h3>Jessica Gjonaj, MPH</h3>
<p>Jessica served as Program Coordinator at NYU Langone Grossman School of Medicine from July 2022 thru October 2026. Jessica is currently a Data Analyst in the Rapid RCT Lab in the Department of Population Health at NYU Langone.</p>
</div>
</div></section>
</div>
```

## File: `03-workshops.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>Workshops</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">Workshops</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/" aria-current="page">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<h2 class="sr-only">All workshops</h2>
<div class="prose"><p>The program held a workshop each year for statisticians, data analysts, informatics professionals, faculty and graduate students from Kenya and across Africa. The workshops were free and by application, and were run with NAMBARI, the Moi-Brown Partnership for HIV Biostatistics Training, from 2023 on.</p></div>
<div class="cards dssd-cards"><article class="card"><img src="/wp-content/uploads/2026/11/dssd-w26-plan.jpg" alt="Large group photo of workshop participants on a rooftop terrace beside program banners" class="cover" loading="lazy"><h3><a href="/work/dssd/workshop-2026/">2026 workshop</a></h3><p><strong>Dates to be announced</strong><br>Causal Modeling &amp; Machine Learning with Applications to Social Determinants of Health</p><a class="learn" href="/work/dssd/workshop-2026/">Read more<span class="sr-only"> about the 2026 workshop</span></a></article><article class="card"><img src="/wp-content/uploads/2026/11/dssd-w25-a.jpg" alt="Workshop participants and instructors gathered for a group photo indoors" class="cover" loading="lazy"><h3><a href="/work/dssd/workshop-2025/">2025 workshop</a></h3><p><strong>July 14th-17th, 2025</strong><br>Survival Analysis and Machine Learning in Health Research</p><a class="learn" href="/work/dssd/workshop-2025/">Read more<span class="sr-only"> about the 2025 workshop</span></a></article><article class="card"><img src="/wp-content/uploads/2026/11/dssd-w24-prev.jpg" alt="Aerial view of a hotel with lawns, gardens and a swimming pool" class="cover" loading="lazy"><h3><a href="/work/dssd/workshop-2024/">2024 workshop</a></h3><p><strong>October 7th-10th, 2024</strong><br>Machine Learning for Real-World Data</p><a class="learn" href="/work/dssd/workshop-2024/">Read more<span class="sr-only"> about the 2024 workshop</span></a></article><article class="card"><img src="/wp-content/uploads/2026/11/dssd-w23-08.jpg" alt="An instructor presenting at the front of a conference hall while participants work at laptops" class="cover" loading="lazy"><h3><a href="/work/dssd/workshop-2023/">2023 workshop</a></h3><p><strong>July 3rd-7th, 2023</strong><br>Machine Learning &amp; Predictive Inference</p><a class="learn" href="/work/dssd/workshop-2023/">Read more<span class="sr-only"> about the 2023 workshop</span></a></article><article class="card"><img src="/wp-content/uploads/2026/11/dssd-w23-asset-b.jpg" alt="Laptop on a desk showing a video call with several participants" class="cover" loading="lazy"><h3><a href="/work/dssd/workshop-2022/">2022 workshop</a></h3><p><strong>May 16th-20th, 2022</strong><br>How do I integrate social determinants into my work?</p><a class="learn" href="/work/dssd/workshop-2022/">Read more<span class="sr-only"> about the 2022 workshop</span></a></article></div>
</div></section>
</div>
```

## File: `04-workshop-2026.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>2026 Workshop (planned)</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">2026 Workshop (planned)</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/" aria-current="page">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<div class="prose">
<p class="archive-tag">Applications are not open yet</p>
<h2>Introducing the 9th Workshop on Advanced Biostatistical Methods</h2>
<p><strong>Theme:</strong> &ldquo;Causal Modeling &amp; Machine Learning with Applications to Social Determinants of Health&rdquo;<br>
<strong>Dates:</strong> To be announced<br>
<strong>Host:</strong> AMPATH / Moi University School of Medicine<br>
<strong>Location:</strong> To be announced<br>
<strong>Accommodations:</strong> To be announced<br>
<strong>Application deadline:</strong> To be announced</p>
<p><strong>Note:</strong> This course is primarily hands-on and centered around group-based activities rather than traditional lectures. It is designed for those who already have experience using statistical software such as R, SPSS, SAS, Stata, or Python for advanced data analysis. Activities will be mainly conducted in R and there will be <strong>no instructions on the basics of coding given</strong>.</p>
<p>Applications will be reviewed by the course organizers and invitations will be issued no later than a date to be announced.</p>
<p>NAMBARI, the <a href="https://sites.brown.edu/nambari/">Moi-Brown Partnership for HIV Biostatistics Training</a>, and the Data Science for Social Determinants program are pleased to announce a training workshop that is primarily hands-on and centered around group-based activities rather than traditional lectures. Activities will be focused on teaching students different techniques in machine learning and causal modeling that they can apply to their own work. We will also hold a brief meeting during the workshop to discuss our <a href="/work/dssd/community-of-practice/">Social Determinant Working Group</a> for those who are interested in getting involved.</p>
<h2>Target audience</h2>
<p>Professional statisticians, data analysts, university faculty members, and graduate students in sub-Saharan Africa working at universities, research centers, government ministries, or NGOs that are focused on the analysis of biomedical and health data. This workshop is geared toward those with advanced training in statistics. Attendees must have a strong working knowledge of basic statistical analysis methods, including regression analysis, and familiarity with the use of statistical software such as R, SAS or Stata. Activities will be mainly conducted in R and there will be no instructions on the basics of coding given.</p>
<h2>Cost and other requirements</h2>
<ul>
<li>Selection for both the course and working group is by application only. Tuition for the course is free.</li>
<li>Accommodation at EKA Hotel Eldoret will be provided for participants from outside of Eldoret.</li>
<li>The cost of transport to and from Eldoret must be covered by the attendee.</li>
</ul>
<h2>Equipment</h2>
<p>Participants must bring a laptop with R software installed (instructions will be provided in advance).</p>
<h2>Workshop structure and content</h2>
<p>Details will be provided closer to the meeting date, and some guides and content materials will also be provided before the meeting to accepted applicants.</p>
<h2>Instructors</h2>
<ul>
<li><strong>Rumi Chunara, PhD</strong> is Associate Professor of Biostatistics and Computer Science, and Director of the Center for Health Data Science at New York University.</li>
<li><strong>Joseph Hogan, ScD</strong> is Professor of Biostatistics and Deputy Director of the Data Science Initiative at Brown University.</li>
<li><strong>Ann Mwangi, PhD</strong> is an Associate Professor of Biostatistics, School of Science and Aerospace Studies, Moi University and Adjunct Assistant Professor at Brown University.</li>
<li><strong>Ziv Shkedy, PhD</strong> is a Professor of Biostatistics and Bioinformatics at Hasselt University in Belgium.</li>
</ul>
<p><strong>Funding:</strong> Funded by U.S. NIH-FIC Grants D43TW010050 &amp; 1U2RTW012121.</p>
<p><a href="/work/dssd/workshops/">More information on our previous workshops</a></p>
</div><div class="photo-row wide"><img src="/wp-content/uploads/2026/11/dssd-w26-plan.jpg" alt="Large group photo of workshop participants on a rooftop terrace beside program banners" loading="lazy"></div>
<p class="back"><a href="/work/dssd/workshops/">&larr; Back to all workshops</a></p>
</div></section>
</div>
```

## File: `05-workshop-2025.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>Workshop 4: July 14th-17th, 2025</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">Workshop 4: July 14th-17th, 2025</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/" aria-current="page">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<div class="prose">
<p><strong>Theme:</strong> &ldquo;Survival Analysis and Machine Learning in Health Research&rdquo;<br>
<strong>Dates:</strong> July 14th-17th, 2025<br>
<strong>Host:</strong> AMPATH / Moi University School of Medicine<br>
<strong>Location:</strong> <a href="https://ekaeldoret.com/">EKA</a> &amp; Noble Hotel, Eldoret, Kenya</p>
<p>NAMBARI, the Moi-Brown Partnership for HIV Biostatistics Training, and the Data Science for Social Determinants program held a training workshop that was primarily hands-on and centered around group-based activities rather than traditional lectures. Activities focused on teaching students different techniques in machine learning and survival analysis that they can apply to their work. A brief meeting was also held during the workshop to discuss the Social Determinant Working Group for those interested in getting involved.</p>
<p><strong>Funding:</strong> Financial support is provided by the Fogarty International Center of the US National Institutes of Health through grants D43TW010050 and 5U2RTW012121.</p>
<h2>Instructors</h2>
<ul>
<li><strong>Rumi Chunara, PhD</strong> is Associate Professor of Biostatistics and Computer Science, and Director of the Center for Health Data Science at New York University. <a href="mailto:rumi.chunara@nyu.edu">rumi.chunara@nyu.edu</a></li>
<li><strong>Joseph Hogan, ScD</strong> is Professor of Biostatistics and Deputy Director of the Data Science Initiative at Brown University. <a href="mailto:jhogan@stat.brown.edu">jhogan@stat.brown.edu</a></li>
<li><strong>Ann Mwangi, PhD</strong> is an Associate Professor of Biostatistics, School of Science and Aerospace Studies, Moi University and Adjunct Assistant Professor at Brown University.</li>
<li><strong>Ziv Shkedy, PhD</strong> is a Professor of Biostatistics and Bioinformatics at Hasselt University in Belgium. <a href="mailto:ziv.shkedy@uhasselt.be">ziv.shkedy@uhasselt.be</a></li>
</ul>
<h2>Course materials</h2>
<p>Course materials for this workshop were not posted on the original program website.</p>
</div><div class="photo-row"><img src="/wp-content/uploads/2026/11/dssd-w25-a.jpg" alt="Workshop participants and instructors gathered for a group photo indoors" loading="lazy"><img src="/wp-content/uploads/2026/11/dssd-w25-b.jpg" alt="Workshop participants gathered for a group photo outside the venue" loading="lazy"></div>
<p class="back"><a href="/work/dssd/workshops/">&larr; Back to all workshops</a></p>
</div></section>
</div>
```

## File: `06-workshop-2024.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>Workshop 3: October 7th-10th, 2024</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">Workshop 3: October 7th-10th, 2024</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/" aria-current="page">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<div class="prose">
<p><strong>Theme:</strong> &ldquo;Machine Learning for Real-World Data&rdquo;<br>
<strong>Dates:</strong> October 7th-10th, 2024<br>
<strong>Host:</strong> AMPATH / Moi University School of Medicine<br>
<strong>Location:</strong> <a href="https://ekaeldoret.com/">EKA Hotel</a>, Eldoret, Kenya</p>
<p>NAMBARI, the <a href="https://sites.brown.edu/nambari/">Moi-Brown Partnership for HIV Biostatistics Training</a>, and the Data Science for Social Determinants program held a five-day course on machine learning and predictive inference, with emphasis on topics in HIV. The course included a meeting on the last day (October 10th) for the Social Determinant Working Group (<a href="/work/dssd/community-of-practice/">Community of Practice</a>).</p>
<p><strong>Funding:</strong> Financial support is provided by the Fogarty International Center of the US National Institutes of Health through grants D43TW010050 and 5U2RTW012121.</p>
<h2>Instructors</h2>
<ul>
<li><strong>Rumi Chunara, PhD</strong> is Associate Professor of Biostatistics and Computer Science, and Director of the Center for Health Data Science at New York University. <a href="mailto:rumi.chunara@nyu.edu">rumi.chunara@nyu.edu</a></li>
<li><strong>Joseph Hogan, ScD</strong> is Professor of Biostatistics and Deputy Director of the Data Science Initiative at Brown University. <a href="mailto:jhogan@stat.brown.edu">jhogan@stat.brown.edu</a></li>
<li><strong>Ann Mwangi, PhD</strong> is an Associate Professor of Biostatistics, School of Science and Aerospace Studies, Moi University and Adjunct Assistant Professor at Brown University.</li>
<li><strong>Allison DeLong, MSc</strong> is a Biostatistician at the Brown University School of Public Health. <a href="mailto:allison_delong@brown.edu">allison_delong@brown.edu</a></li>
<li><strong>Ziv Shkedy, PhD</strong> is a Professor of Biostatistics and Bioinformatics at Hasselt University in Belgium. <a href="mailto:ziv.shkedy@uhasselt.be">ziv.shkedy@uhasselt.be</a></li>
</ul>
<h2>Course materials</h2>
<ul>
<li>Session 1: Prediction Models in Health: Goals, Uses, and Challenges &mdash; <a href="https://drive.google.com/drive/folders/1KchJO5J6S1uleIgXa4boiv01yaadJsdS?usp=share_link">Folder access<span class="sr-only"> for Session 1: Prediction Models in Health: Goals, Uses, and Challenges</span></a></li>
<li>Session 2: Case Study: Predicting Loss to Follow-Up (AMPATH) &mdash; <a href="https://drive.google.com/drive/folders/1YzU4VN8gjCVFDPLkj3eyfxfAlwa9cWR6?usp=share_link">Folder access<span class="sr-only"> for Session 2: Case Study: Predicting Loss to Follow-Up (AMPATH)</span></a></li>
<li>Session 3: Case Study: Building and Validating a Prediction Model &mdash; <a href="https://drive.google.com/drive/folders/1BEbPONaP57IJooW5cN6b-P0KDmQhF6Ai?usp=share_link">Folder access<span class="sr-only"> for Session 3: Case Study: Building and Validating a Prediction Model</span></a></li>
<li>Session 4: Machine Learning Implementation Part I &mdash; <a href="https://drive.google.com/drive/folders/1EjZSwvaZnrwa5wQflyfYvayokYqXMVDL?usp=share_link">Folder access<span class="sr-only"> for Session 4: Machine Learning Implementation Part I</span></a></li>
<li>Session 5: Machine Learning for High-Dimensional Data &mdash; <a href="https://drive.google.com/drive/folders/1cfgS0QP8s9nsDy8ML9VBW5IRicW2EiqU?usp=share_link">Folder access<span class="sr-only"> for Session 5: Machine Learning for High-Dimensional Data</span></a></li>
<li>Session 6: Machine Learning Implementation Part II (see the Session 4 folder)</li>
<li>Session 7: Introduction to Synthetic Data &mdash; <a href="https://drive.google.com/drive/folders/16V9EKHRh2Rc0mD0mryXGIGm_M-22mUe1?usp=share_link">Folder access<span class="sr-only"> for Session 7: Introduction to Synthetic Data</span></a></li>
<li>Session 8: Creating Synthetic Data (see the Session 7 folder)</li>
<li>Session 9: Synthetic Data in the Real World (see the Session 7 folder)</li>
</ul>
</div>
<p class="back"><a href="/work/dssd/workshops/">&larr; Back to all workshops</a></p>
</div></section>
</div>
```

## File: `07-workshop-2023.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>Workshop 2: July 3rd-7th, 2023</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">Workshop 2: July 3rd-7th, 2023</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/" aria-current="page">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<div class="prose">
<p><strong>Theme:</strong> &ldquo;Machine Learning &amp; Predictive Inference&rdquo;<br>
<strong>Dates:</strong> July 3rd-7th, 2023<br>
<strong>Location:</strong> Noble Conference Center, Eldoret, Kenya</p>
<h2>Audience</h2>
<p>From July 3rd to July 5th, we held a three-day course on machine learning and predictive inference in partnership with NAMBARI, the Moi-Brown Partnership for HIV Biostatistics Training. We also held a two-day optional working group for social determinants from July 6th-7th.</p>
<p><strong>Attendees:</strong> 44 trainees from multiple institutions in Kenya and across the African continent attended all days, including professional statisticians, data analysts, informatics professionals, university faculty members, and graduate students in statistics, informatics, or data science working at universities, research centers, government ministries or NGOs focused on the analysis of health data.</p>
<p><strong>Operations:</strong> Tuition-free and selection by application only. The workshop was held entirely in person at the Noble Conference Center in Eldoret, Kenya. During the short course from July 3rd-5th, trainees&rsquo; days consisted of a combination of lectures, presentations/case studies, and hands-on activities. The optional social determinants working group consisted of discussions surrounding relevant social determinants research and how to continue working on the development of a database which led to the formation of the working group.</p>
<h2>Workshop topics</h2>
<ul><li>Machine learning background and overview</li><li>Machine learning workflows (training, testing, evaluation)</li><li>Specific machine learning algorithms (Random forest, CART, etc.)</li><li>Real-world challenges with machine learning implementation (generalizability, distribution shift, algorithmic fairness, etc.)</li><li>Social Determinants and ML</li></ul>
<p>Funding and financial support is provided by the Fogarty International Center of the US National Institutes of Health (NIH) through grant <a href="https://reporter.nih.gov/search/vxPO2_iKEUa5HIwnq0LtcA/project-details/10490322">U2RTW012121</a>.</p>
<p>Sessions led by Rumi Chunara, PhD; Ann Mwangi, PhD, and Joseph Hogan, ScD. Hands-on sessions facilitated by Amos Okutse, MSc, and Rophence Ojiambo, MSc.</p>
<h2>Workshop slides</h2>
<ul>
<li><a href="https://drive.google.com/file/d/1KMXGWuj0I1-gWF7SHAiJnRqokOVsAcgA/view?usp=sharing">NAMBARI-DSSD Machine Learning Workshop Real-World Challenges: Generalizability</a> (Rumi Chunara, PhD)</li>
<li><a href="https://drive.google.com/file/d/1_5liZqfwe8LpwfKvVXS2R1RXM9x0tp4B/view?usp=sharing">NAMBARI-DSSD Workshop Algorithmic Fairness Overview</a> (Rumi Chunara, PhD)</li>
<li><a href="https://drive.google.com/file/d/1EARlL6W8F7Q16ZnKRoyuakfKGKNBwN7R/view?usp=sharing">Social Determinants Working Group: Social Determinants Theory</a> (Rumi Chunara, PhD)</li>
<li><a href="https://drive.google.com/file/d/1zSRMIKde30YJYxvwnIEly7J6GOyoW-Hv/view?usp=sharing">Social Determinants Working Group: Next Steps</a> (Rumi Chunara, PhD)</li>
</ul>
</div><h2 class="dssd-h2">Photos from the workshop</h2><ul class="gallery"><li><img src="/wp-content/uploads/2026/11/dssd-w23-01.jpg" alt="Participants gathered for a group photo on a lawn" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-02.jpg" alt="Participants working at laptops in the conference hall in Eldoret" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-03.jpg" alt="Participants seated at U-shaped tables in the conference hall" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-04.jpg" alt="Rows of participants at tables facing a projector screen" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-05.jpg" alt="Participants working at laptops in the conference hall" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-06.jpg" alt="Participants at tables with laptops during a session" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-07.jpg" alt="Participants and a presenter at the far end of the hall" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-08.jpg" alt="An instructor presenting at the front of the hall while participants work at laptops" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-09.jpg" alt="Participants working in groups at laptops" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-10.jpg" alt="An instructor presenting slides while participants follow along at their laptops" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-11.jpg" alt="A presenter speaking to participants seated at tables" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-12.jpg" alt="An instructor and a presenter in front of a projected slide" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-13.jpg" alt="A participant working at a laptop during a session" loading="lazy"></li><li><img src="/wp-content/uploads/2026/11/dssd-w23-14.jpg" alt="An instructor leading a discussion next to a flipchart" loading="lazy"></li></ul>
<p class="back"><a href="/work/dssd/workshops/">&larr; Back to all workshops</a></p>
</div></section>
</div>
```

## File: `08-workshop-2022.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>Workshop 1: May 16th-20th, 2022</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">Workshop 1: May 16th-20th, 2022</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/" aria-current="page">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<div class="prose">
<p><strong>Theme:</strong> &ldquo;How do I integrate social determinants into my work?&rdquo;<br>
<strong>Dates:</strong> May 16th-20th, 2022 (held online over Zoom)</p>
<h2>Audience</h2>
<p>From May 16-20 we held the first workshop as a continuing education opportunity. The workshops are both for helping create capacity as well as seeding networking and collaboration opportunities.</p>
<p><strong>Attendees:</strong> 16 attendees from multiple institutions in Kenya attended all days including professional statisticians, data analysts, informatics professionals, university faculty members, and graduate students in statistics, informatics, or data science in Kenya working at universities, research centers, government ministries or NGOs focused on the analysis of biomedical and health data. Given that attendees all had previous training in foundational statistics and active project(s), the workshop focused on providing a breadth introduction to social determinants and data/analytic-specific challenges to their consideration in quantitative analyses.</p>
<p><strong>Operations:</strong> Tuition free and selection by application only. The workshop was held entirely over Zoom, over the course of 5 days. Each day consisted of a combination of lectures, presentations/case studies and hands-on activities. Each topic is underpinned by relevant case studies from Kenya that will also provide continuity across the week. The fifth day is reserved for student consultations on projects and publishing.</p>
<h2>Workshop topics</h2>
<ul><li>Social determinants theory</li><li>Examples of research studies in Kenya with reference to social determinants and data science challenges</li><li>Types of analytic questions (e.g. machine learning (ML) vs regression, prediction vs causal inference)</li><li>Decision trees</li><li>Social Determinants and ML</li><li>Causal questions in health</li><li>Multi-level regression and relevance of multi-level models for social determinants</li><li>Bias in AI, algorithmic fairness &amp; health disparities</li></ul>
<p>Funding and financial support is provided by the Fogarty International Center of the US National Institutes of Health (NIH) through grant <a href="https://reporter.nih.gov/search/vxPO2_iKEUa5HIwnq0LtcA/project-details/10490322">U2RTW012121</a>.</p>
<p>Sessions led by Rumi Chunara, PhD; Rajesh Vedanthan, MD, MPH; Joseph Hogan, ScD and guest lectures (see links to daily materials below). Hands-on sessions facilitated by Richard Ngarigo and Edwin Sang.</p>
<h2>Workshop slides</h2>
<ul>
<li><a href="https://drive.google.com/drive/folders/1kDFRE7Z4zbDBvBZhjBf_14fq5u2XEFYN?usp=sharing">Day 1: Social Determinants: Theory and Data</a></li>
<li><a href="https://drive.google.com/drive/folders/13Su807XzIa_0ZIz9qGb4JLCNW70P5fUA?usp=sharing">Day 2: Machine learning and analyses of social determinants</a></li>
<li><a href="https://drive.google.com/drive/folders/1eM71p9prBj7Fohagxj7VuufC81tWyhDK?usp=sharing">Day 3: Causal and multi-level models and social determinants</a></li>
<li><a href="https://drive.google.com/drive/folders/12DlOk7q1SRxWGG28InZM5ROj2Cl6cRPR?usp=sharing">Day 4: Health disparities and algorithmic fairness</a> (including Dr. Becky Genberg on her work with AMPATH, HIV care and social determinants)</li>
<li>Recorded video on Data Equity Systems by Prof. Julia Stoyanovich: <a href="https://www.youtube.com/watch?v=g5epgc8m8Ho">watch on YouTube</a></li>
</ul>
<h2>Further resources</h2>
<p>Papers corresponding to data used in hands-on activities:</p>
<ul>
<li>Ruchman SG, Delong AK, Kamano JH, Bloomfield GS, Chrysanthopoulou SA, Fuster V, Horowitz CR, Kiptoo P, Matelong W, Mugo R, Naanyu V, Orango V, Pastakia SD, Valente TW, Hogan JW, Vedanthan R. Egocentric social network characteristics and cardiovascular risk among patients with hypertension or diabetes in western Kenya: a cross-sectional analysis from the BIGPIC trial. BMJ Open. 2021 Sep 2;11(9):e049610. doi: 10.1136/bmjopen-2021-049610. PMID: 34475172</li>
<li>Vedanthan R, Kamano JH, Lee H, Andama B, Bloomfield GS, DeLong AK, Edelman D, Finkelstein EA, Hogan JW, Horowitz CR, Manyara S, Menya D, Naanyu V, Pastakia SD, Valente TW, Wanyonyi CC, Fuster V. Bridging Income Generation with Group Integrated Care for cardiovascular risk reduction: Rationale and design of the BIGPIC study. Am Heart J. 2017 Jun;188:175-185. doi: 10.1016/j.ahj.2017.03.012. Epub 2017 Mar 23. PMID: 28577673</li>
</ul>
</div><div class="photo-row"><img src="/wp-content/uploads/2026/11/dssd-w23-asset-b.jpg" alt="Laptop on a desk showing a video call with several participants" loading="lazy"></div>
<p class="back"><a href="/work/dssd/workshops/">&larr; Back to all workshops</a></p>
</div></section>
</div>
```

## File: `09-community-of-practice.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>Community of Practice</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">Community of Practice</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/">Workshops</a></li><li><a href="/work/dssd/community-of-practice/" aria-current="page">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/">Visiting trainees</a></li></ul></nav>
<div class="two-col dssd-intro">
<div class="prose">
<h2>Social Determinants Data Community of Practice</h2>
<p>Our community of data scientists, spanning diverse areas of East Africa and beyond, is driven by a shared recognition: the imperative to inform data analytic models that holistically embrace the social determinants of health (SDoH). We are propelled by the idea that knowledge and best practices which are established globally, find their most potent expression when nurtured by local insights. Here, we are not just architects of databases and models; we are stewards of a Community of Practice. We are committed to harnessing the collective wisdom of our experts, fostering social learning, and channeling this rich tapestry of expertise and local context into models that transcend convention. These models shall not only rigorously capture the intricate effects of SDoH but also catalyze transformative interventions, refine practice, shape informed policies, and, above all, propel us toward healthier, more equitable societies across our home and beyond.</p>
</div>
<figure class="dssd-photo"><img src="/wp-content/uploads/2026/11/dssd-cop-1.jpg" alt="Workshop participants gathered for a group photo inside a conference room" loading="lazy"><figcaption>Participants of the July 2025 workshop</figcaption></figure>
</div>
<div class="prose">
<h2>Other social determinant efforts</h2>
<ul>
<li><a href="https://www.phenxtoolkit.org">PhenX Toolkit</a>: This toolkit collects measures for phenotypes and exposures in many areas of biomedical research and is funded/directed by the NIH/NHLBI. They have data on substance abuse and addiction, tobacco usage, mental health research, COVID-19, blood diseases, and social determinants of health.</li>
<li><a href="https://www.atsdr.cdc.gov/placeandhealth/eji/fact_sheet.html">Environmental Justice Index</a>: EJI uses data from the US Census Bureau, EPA and Mine Safety, Health Administration and CDC to study environmental injustice across the country. EJI collects 36 environmental, social and health factors including race, ethnicity, age, Internet access, disability, language barriers, and more.</li>
<li><a href="https://www.ahrq.gov/sdoh/data-analytics/sdoh-data.html">SDOH - Agency for Healthcare Research &amp; Quality</a>: The main five domains of SDOH are covered in this US focused project including social factors, economic context, education, physical infrastructure, and healthcare context (area-based data).</li>
</ul>
<h2>Group forum</h2>
<p>The working group had a forum where members could share their research, database knowledge, grants, funding opportunities and papers. Members can use it to share about the projects and social determinants databases they are working on and learn from others; examples of local social determinant projects and data sources contributed there were to be added to this page. <a href="https://64bebfaaa8c92.site123.me">Visit the working group forum</a>.</p>
</div>
<h2 class="dssd-h2">Working group members</h2>
<ul class="members"><li><h3><a href="https://www.ampathkenya.org">AMPATH Kenya</a></h3><ul><li>Getrude Anusu, BSc</li><li>Antony Ngeresa, BSc</li><li>Richard Near, MSc</li><li>Michael Odawa, MSc Student</li></ul></li><li><h3><a href="https://www.mu.ac.ke">Moi University</a></h3><ul><li>Rodrigue Ndabashinze, MSc</li><li>Robert Mengich, MSc</li><li>Vitalis Orango, MSc [also AMPATH Kenya]</li><li>Doreen Kiconco, MSc</li></ul></li><li><h3><a href="https://aphrc.org">African Population Health and Research Centre (APHRC)</a></h3><ul><li>Adero Ooko, MSc</li><li>Nelson Langat, MSc</li></ul></li><li><h3><a href="https://www.aku.edu/Pages/home.aspx">Aga Khan University</a></h3><ul><li>James Orwa, MSc</li><li>Jasmit Shah, PhD</li></ul></li><li><h3><a href="https://gu.ac.ug">Gulu University</a></h3><ul><li>Peace Aber, MSc</li></ul></li><li><h3><a href="https://www.mak.ac.ug">Makerere University</a></h3><ul><li>Ezra Musingye, BSc</li></ul></li><li><h3><a href="https://kisiiuniversity.ac.ke">Kisii University</a></h3><ul><li>Lameck Ondieki, MSc</li></ul></li><li><h3><a href="https://www.umaryland.edu/mgic/">Maryland Global Initiatives Cooperative</a></h3><ul><li>Paul Mubiri, MSc</li></ul></li><li><h3><a href="https://www.brown.edu/academics/population-studies/">Brown University</a></h3><ul><li>Rophence Ojiambo, MSc</li></ul></li><li><h3>Centre for Health &amp; Development, University of Port Harcourt, Nigeria &amp; Durban University of Technology, Durban, South Africa</h3><ul><li>Felix Emeka Anyiam, MPH MSc (Leader of Scoping Review)</li></ul></li></ul>
<h2 class="dssd-h2" id="data-index">Social Determinant of Health Data Index</h2>
<div class="prose">
<p>The DSSD Community of Practice conducted a survey to identify and organize existing data sources related to social determinants of health across Sub-Saharan Africa. This living index, continuously updated to reflect new and evolving data, will address a critical gap in data resources while also fostering expertise in social determinants of health.</p>
<p>All ownership and access rights will remain with the original data holders, respecting their preferences, while the index will simply enhance visibility and discoverability.</p>
<p><a class="btn-outline" href="https://openredcap.nyumc.org/apps/redcap/surveys/?s=CFYKTK3FYYLCAMXE">Open the data indexing form</a></p>
<p>A summary of the collected datasets is shown on the map below. If the map does not appear, <a href="https://flo.uri.sh/visualisation/24891695/embed">open it in its own page</a>.</p>
</div>
<div class="embed map"><iframe src="https://flo.uri.sh/visualisation/24891695/embed" title="Map of Africa summarizing the datasets collected in the Social Determinant Data Index" loading="lazy"></iframe></div>
<div class="photo-row"><img src="/wp-content/uploads/2026/11/dssd-cop-2.jpg" alt="A participant pointing at a flipchart during a group session" loading="lazy"><img src="/wp-content/uploads/2026/11/dssd-cop-3.jpg" alt="A participant writing on a flipchart during a group session" loading="lazy"></div>
</div></section>
</div>
<script>document.querySelectorAll('.dssd-wp iframe[data-src]').forEach(function(f){if(!f.getAttribute('src')){f.src=f.getAttribute('data-src');}});</script>
```

## File: `10-visiting-trainees.html`

```html
<div class="dssd-wp">
<div class="page-title"><div class="wrap"><span class="bar"></span><h1>Visiting trainees</h1></div></div>
<section class="section dssd-top"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/work/">Our Work</a></li><li><a href="/nyu-moi-data/">NYU-Moi DSSD Training Program</a></li><li><a href="/work/dssd/">Program archive</a></li><li aria-current="page">Visiting trainees</li></ol></nav>
<p class="archive-tag">Archive of the program website</p>
<nav class="dssd-nav" aria-label="Program archive"><ul><li><a href="/work/dssd/">Overview</a></li><li><a href="/work/dssd/about-and-leadership/">About and leadership</a></li><li><a href="/work/dssd/workshops/">Workshops</a></li><li><a href="/work/dssd/community-of-practice/">Community of Practice</a></li><li><a href="/work/dssd/visiting-trainees/" aria-current="page">Visiting trainees</a></li></ul></nav>
<div class="prose"><p>Faculty from Moi University who joined the program as visiting trainees, by the term they joined. They were listed as Visitors on the Center&rsquo;s Team page.</p></div><div class="trainees"><article class="trainee" id="ngugi"><img src="/wp-content/uploads/2026/11/dssd-t-ngugi.jpg" alt="Photo of Philomena N. Ngugi" loading="lazy"><div><h2>Philomena N. Ngugi, PhD</h2><p class="role">Spring 2023 Visiting Trainee</p><p>Dr. Ngugi is currently a Tutorial Fellow and Researcher at Moi University (Kenya) and has been teaching courses in information technology, computer science, and health informatics for over 18 years. Dr. Ngugi received her MSc. of Information Technology Management from the University of Sunderland (UK) in 2005 and obtained her PhD in Health Informatics from the University of Bergen (Norway) in 2021. She joined the DSSD program as a 2023 trainee and is currently working on a project proposal which will be shared soon. Dr. Ngugi also holds membership in the Kenya Health Informatics Association (KEHIA) and Norwegian Research School of Global Health (NRSGH).</p></div></article><article class="trainee" id="nyameino"><img src="/wp-content/uploads/2026/11/dssd-t-nyameino.jpg" alt="Photo of Job N. Nyameino" loading="lazy"><div><h2>Job N. Nyameino, MD, MSc</h2><p class="role">Spring 2023 Visiting Trainee</p><p>Dr. Nyameino first obtained his medical degree from Moi University&rsquo;s School of Medicine (Kenya) in 2011, followed by his MSc. in Health Information from the University of London (UK) in 2015. Currently, Dr. Nyameino is a PhD candidate in Health Informatics from the University of Bergen (Norway). Dr. Nyameino&rsquo;s work is mainly in the Kenyan Ministry of Health working in health informatics. He joined the DSSD program as a trainee as part of the 2023 cohort and is currently working on a research proposal.</p></div></article><article class="trainee" id="mbugua"><img src="/wp-content/uploads/2026/11/dssd-t-mbugua.jpg" alt="Photo of Samuel T. Mbugua" loading="lazy"><div><h2>Samuel T. Mbugua, MSc., BSc., CCNA</h2><p class="role">Spring 2024 Visiting Trainee</p><p>Samuel is currently the Senior ICT Planning and Development Officer at Moi University&rsquo;s Institute of Biomedical Informatics where he is also the head of Service and innovations. He is a lead developer for the mUzima suite of products and contributes to several open-source research projects, especially in the health sector. Previously, Samuel worked at the finance department of Moi University where he implemented and managed the Financial Management Information System (FMIS). Samuel joined the program in Spring 2024.</p></div></article><article class="trainee" id="njenga"><img src="/wp-content/uploads/2026/11/dssd-t-njenga.jpg" alt="Photo of Edwin K. Njenga" loading="lazy"><div><h2>Edwin K. Njenga, MSc., PhD Candidate</h2><p class="role">Spring 2025 Visiting Trainee</p><p>Edwin Kabi Njenga is currently an Assistant Lecturer in the Computer Science (CS) and Information Technology department at Moi University in Eldoret, Kenya. He is also a first-year PhD student of Computer Science at Jomo Kenyatta University of Agriculture and Technology in Juja, Kenya. Kabi also has a background in Software Engineering, having obtained his master&rsquo;s degree from the Beijing Institute of Technology in China. His current research interests lie in the application of Machine Learning/AI to learning management systems specifically in medical education.</p></div></article><article class="trainee" id="gesicho"><img src="/wp-content/uploads/2026/11/dssd-t-gesicho.jpg" alt="Photo of Milka B. Gesicho" loading="lazy"><div><h2>Milka B. Gesicho, PhD, MSc</h2><p class="role">2025 Visiting Trainee</p><p>Dr. Milka Gesicho currently works as an independent digital health consultant for various organizations. Her most recent work is on the Uwezo wa Dijit Kenya (UWADI-KE) project which is a collaboration between Swedish and Kenyan healthcare researchers focused on educating healthcare providers on treating musculoskeletal conditions. Dr. Gesicho obtained her PhD in Health Informatics from the University of Bergen in Norway where she still serves as a member of the Norwegian Research School of Global Health. Dr. Gesicho&rsquo;s current research interests focus on the general applications and implications of Machine Learning and AI in data science.</p></div></article><article class="trainee" id="tarus"><img src="/wp-content/uploads/2026/11/dssd-t-tarus.jpg" alt="Photo of John Tarus" loading="lazy"><div><h2>John Tarus, PhD, MPhil</h2><p class="role">Fall 2026 Visiting Trainee</p><p>Dr. Tarus received his PhD degree in Computer Science from Beijing Institute of Technology, Beijing, China in 2017 and he also holds an M.Phil. Information Technology from Moi University (2011). He is currently a Lecturer in the Department of Information Technology, School of Information Sciences, Moi University. He is also the President of Internet Society, Kenya Chapter. His research interests include recommender systems, e-Learning, data mining, and open source software.</p></div></article></div>
</div></section>
</div>
```

## File: `11-our-work-dssd-card.html`

```html
<div class="dssd-wp dssd-card">
<a href="/work/dssd/" tabindex="-1" aria-hidden="true"><img src="/wp-content/uploads/2026/11/dssd-w26-plan.jpg" alt=""></a>
<div>
<p class="archive-tag">Program archive</p>
<h2><a href="/work/dssd/">NYU-Moi Data Science for Social Determinants (DSSD) Program Archive</a></h2>
<p>The full record of the DSSD training program&rsquo;s website: its partners and leadership, the 2022&ndash;2025 workshops and the planned 2026 workshop, the Social Determinants Community of Practice and data index, and the visiting trainees.</p>
<a class="learn" href="/work/dssd/">Visit the archive</a>
</div>
</div>
```

## File: `12-nyu-moi-archive-callout.html`

```html
<div class="dssd-wp dssd-callout">
<p class="archive-tag">Program archive</p>
<p>This program is coming to an end. Its own website is kept here as an archive, so the training, workshops, community of practice and trainees stay on record.</p>
<p><a class="btn-outline" href="/work/dssd/">Visit the DSSD program archive</a></p>
</div>
```
