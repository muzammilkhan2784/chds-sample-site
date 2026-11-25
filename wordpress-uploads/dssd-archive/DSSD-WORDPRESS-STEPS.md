# DSSD program archive on the live site (Steps 26-32)

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
