# Make the live site match the sample: page by page

Do the pages in this order. For each page: **A.** paste its CSS file at the very end of **Appearance > Customize > Additional CSS** and click Publish, **B.** do the editor steps, **C.** purge SG Cache and ask for a check.

The DSSD archive is not part of this. All DSSD links stay on the old Squarespace site.

All 9 CSS files were tested together on the live pages (desktop, small laptop and phone): nothing spills off the screen and the pages look like the sample.

---

## Page 1: Header, footer, page-title band and "Are you a researcher" band (every page)

### A. Paste this CSS file
`match-sample/00-shared-header-footer.css`

What it changes:
- Header is a solid white bar with a thin grey line under it on every page (Home, Team, Our Work, News and Contact had a see-through header sitting on the tinted band).
- Header is 84px tall instead of 105px, and its logo/menu sit in a centred 1120px column instead of stretching to the screen edges.
- Header logo is 290px wide (was 250px); 230px on tablets/phones (was shrinking to 134px on phones).
- Menu links are compact (8px/10px padding, 6px apart, 15.2px text), so the violet 'current page' line and the grey hover line sit directly under the word instead of at the very bottom of the bar.
- CONTACT button in the header gets the sample shape: square corners, 9px/22px padding, 13.6px text, 22px from the menu.
- Between 922px and 1120px wide (small laptops) the logo and menu spacing tighten so the header stays on one line.
- Scrolled (violet) header: stays 84px tall, white logo is 276px and aligned with the colour logo.
- Phones/tablets: header 72px tall, violet 28px menu icon (white when scrolled), no box around it, and the -5px offset on small phones is removed for both the white and the violet header.
- Phones/tablets open menu: divider lines removed, current page marked by a 3px violet bar on the left, and 'Contact' shown as a full-width outlined button at the bottom.
- Phones/tablets open menu while scrolled: panel is now violet with white links (it was white with white text, so the links were invisible).
- Page-title band on Team & Partners, News, Contact and Our Work: short teal bar (56 x 5px) centred above the title, title in the sample size/weight (about 54px on desktop, 35px on phones, medium weight), the small dots icon under the title is hidden, and the band's spacing matches the sample.
- 'Are you a researcher...' band: dots icon removed, rounded corners removed, sentence in the sample size (about 30px desktop, 22px phone, medium weight, max 34 characters per line), sample spacing above and below.
- 'Contact us' button in that band gets its padding back (9px/22px outlined box, 13.6px text) and loses the arrow icon. This fixes the squashed-button bug from the earlier CSS.
- Footer: top padding 56px (was 80px), the faint line on top of the footer removed, content in the same 1120px column as the header.
- Footer logos: 24px apart; centre logo 56px tall and school logo 48px tall at all widths above 480px, 42px/36px on small phones.
- Footer 'Get in touch' is 22.4px medium weight; email, address and the copyright line use the sample text size (15.2px) and line spacing.
- Footer bottom line (copyright / Accessibility) sits 32px under the columns with 30px below it, edge to edge with the columns above.

### B. Editor steps (things CSS cannot do)
1. **Where:** Elementor > Templates > Header & Footer (footer template, ID 305) > the band with the sentence 'Are you a researcher, practitioner, policy maker...'
   - **Do:** Click the sentence heading, and in the left panel change HTML Tag from H3 to H2 (the sample uses a level-2 heading here). Looks the same after the CSS; it fixes the heading order for screen readers.
   - **Value:** `H2`
2. **Where:** Same footer template (ID 305) > violet footer > heading 'Get in touch'
   - **Do:** Click the heading and change HTML Tag from H4 to H2.
   - **Value:** `H2`
3. **Where:** Same footer template (ID 305) > button 'Contact us'
   - **Do:** Optional clean-up (the CSS already hides it): click the button, and under Icon choose None to remove the arrow.
   - **Value:** `Icon: None`
4. **Where:** Same footer template (ID 305) > small dots icon above the 'Are you a researcher...' sentence; and the small dots icon under the page title on Team & Partners, News, Contact and Our Work
   - **Do:** Optional clean-up (the CSS already hides them): right-click each of these small icon image blocks and choose Delete.
5. **Where:** Appearance > Customize > Header Builder > click the logo (Site Title & Logo) > Logo Width
   - **Do:** Set the logo width (currently 250 / 250 / 134) so WordPress serves a sharp image at the new size (the CSS already sets the size; without this step the logo can look slightly soft on standard screens).
   - **Value:** `Desktop 290, Tablet 230, Mobile 230`
6. **Where:** Appearance > Customize > Header Builder > Sticky Header > Sticky Header Logo Width
   - **Do:** Set the white logo's width to match.
   - **Value:** `Desktop 276, Tablet 219, Mobile 219`
7. **Where:** Appearance > Customize > Header Builder > Sticky Header
   - **Do:** Turn off the 'Shrink' effect (it is currently on) so the violet header keeps the same height as the white one, as on the sample (the CSS forces the height, but switching the option off avoids any jump).
   - **Value:** `Shrink effect: off`
8. **Where:** Media > Library > logo-chds-nyu-longform.png (the colour header logo) > Alternative Text
   - **Do:** Change the alt text (currently 'NYU Center for Health Data Science') to match the sample (the logo is the link to the home page). Do not change the white footer logo's alt text.
   - **Value:** `NYU Center for Health Data Science, Building Knowledge Ecosystems, home`

### Could not be matched or needs a decision
- Nothing here was tested in a browser. The theme's and footer template's own rules were checked against saved copies, but the saved copies do not include the Team/News/Contact/Our Work pages' own Elementor stylesheet or Astra's core stylesheet, so the starting values for the page-title bands and the menu link layout are partly unknown; the rules force the sample values with !important. After pasting, check Team, Home and one project page on desktop and phone (including the open phone menu, before and after scrolling).
- The sample switches to the hamburger menu below 1120px; Astra switches at 921px and that cannot be changed safely with CSS. Between 922px and 1120px the live site keeps the full menu, with a smaller logo (210px) and tighter spacing so it fits.
- On Home, Team, Our Work, News and Contact the header still sits on top of the page (Astra 'transparent header' setting) and is only painted white, rather than pushing the page down as on the sample. Because the header is now 85px instead of 105px, the first section of the Home page shows about 20px more space under the header; the Home hero's own padding belongs to the Home page group.
- The sample header turns violet after 30px of scrolling; on the live site Astra decides when its separate sticky header appears (it slides in). CSS cannot change that trigger point.
- On phones the sample shows 'Contact' as a separate button under the menu; live it is the last menu item (menu-item-1315) styled to look like that button. If that menu item is ever removed or recreated, the button styling will stop applying.
- The page-title rules cover only the three bands confirmed in the saved pages: Team (9764818), News and Contact (both use ae89c74), Our Work (656ff4b1). Building Capacity, Public Health and Stakeholders (first section fc783d3) and the project/Student Opportunities pages (template section 58e1d2e) use different blocks, do not have the see-through header, and are not touched here.
- Header and footer are set to the sample's 1120px column. The width of the page content between them is set per page, so the logo's left edge may not line up exactly with page content unless the page groups also use 1120px.
- Footer columns are 50/50 on live versus roughly 55/45 on the sample; with left-aligned logos and right-aligned contact text this makes no visible difference, so it was left alone. The footer stacks into one column below 768px on live versus below 800px on the sample.
- Text sizes are written in px (the sample's rem values at its 16px base: 15.2px menu and footer text, 13.6px buttons) because the live theme shrinks its base size to 91.2% on tablets and phones, which would otherwise make everything slightly smaller than the sample.

---

## Page 2: Home

### A. Paste this CSS file
`match-sample/01-home.css`

What it changes:
- Whole home body: content width becomes 1120px with 20px side gutters, body text 17px with 1.65 line spacing, in grey #404040 (sample values).
- Hero: the light-violet tint now covers exactly the left half (was 60%), and the text and photo columns are forced to exactly half each so the text ends where the tint ends (review fix: the earlier draft moved the tint but not the columns). Text and photo are vertically centred with a 48px gap.
- Hero: the small bar above the headline is teal again, 56px wide and 5px thick (the earlier colour block had turned it violet).
- Hero headline: scales between 41.6px and 73.6px with the screen, weight 500, line-height 1.2. Intro paragraph is 16.8px and capped at about 46 characters per line.
- Hero 'View our projects' link: fixed at 14.4px, arrow sits after the words, 10px gap above it.
- Hero photo: 4:3 crop with 14px rounded corners; the coloured block/overlay behind the photo is removed so the right half is plain white as on the sample.
- About: 'About' becomes a small grey label (16px, weight 600, #595959); the statement is 24-32px violet, weight 500, line-height 1.25.
- About layout on desktop: the label and statement run the full page width, with the group photo on the left and the two paragraphs plus button on the right (48px gap). Each piece is pinned to its own row so nothing can land in the wrong place.
- About: section background forced white, group photo gets 14px rounded corners and fills its column.
- About 'Learn more' button: gets its 9px 22px padding back (fixes the bug where the earlier block removed padding from outlined buttons) and is 13.6px.
- Section headings 'Our Activities' and 'In the News': 27-37px, weight 500 (sample size). The heading and its 'View all projects' / 'View more' link sit on one line, aligned on the text baseline.
- 26px gap between each heading row and the cards below it (review fix: in the earlier draft this gap was cancelled by another rule in the same block and would have been 0).
- The small dots icon above 'Our Activities' is hidden (the sample does not have it).
- Both card rows: 3 equal cards with 28px gaps, folding to 2 and then 1 card per row on narrower screens (same rule as the sample).
- Our Activities cards: pictures cropped to 16:10 with 12px rounded corners, 14px above the title (the middle diagram is fitted whole on white instead of cropped); titles 19.2px, bold 600, violet, underline only on hover; text 17px.
- In the News cards: logo moved ABOVE the title (44px tall, max 160px wide, left-aligned); title 19.2px, bold 600, line-height 1.2; description 17px.
- 'Learn more' / 'Read more' under every card: small 12.8px underlined violet link without the thick bar or the arrow icon.
- 'View all projects' / 'View more' links fixed at 13.6px (they were shrinking on tablets and phones because the theme shrinks its base font size there).
- Phones: hero text then photo with a 48px gap; the hero link and all six card links (activities and news) are left-aligned; About photo full width with 48px before the text.
- Sections About / Our Activities / In the News: top and bottom spacing set to the sample's 40-80px (scales with screen width).

### B. Editor steps (things CSS cannot do)
1. **Where:** Pages > Home > Edit with Elementor > Our Activities > first card ('Building Capacity'), the paragraph under the title
   - **Do:** There is a forced line break after the word 'exchanges'. Click the paragraph, delete the line break and make sure there is one normal space in its place, so the text wraps naturally like the sample.
   - **Value:** `Promoting cross-border knowledge transfer through student and faculty exchanges based on long-term partnerships.`
2. **Where:** Pages > Home > Edit with Elementor > Our Activities > second card ('Developing Best Practices in Public Health Data Science'), the paragraph under the title
   - **Do:** There is a forced line break after 'impact by'. Delete it and leave one normal space.
   - **Value:** `Enhancing interdisciplinary public health research, teaching and impact by our novel data science methods.`
3. **Where:** Pages > Home > Edit with Elementor > In the News > second card ('Flaws in AI Are Deciding Your Future...'), the Image Box's image
   - **Do:** The card currently shows the small square Chronicle icon (logo-chronicle-icon.png). The sample shows the full Chronicle wordmark. Click the card, in the left panel click the image, and upload / choose the wordmark file from the wordpress-uploads folder. Keep the alt text.
   - **Value:** `Image file: logo-chronicle.png (in Desktop/chds-website-draft/wordpress-uploads). Alt text: The Chronicle of Higher Education`
4. **Where:** WordPress admin > Media > Library > logo-nyc-dot.png (the logo on the first In the News card)
   - **Do:** Change the image's Alternative Text so it matches the sample (live currently says 'NYC DOT'), then click Update. If the card still shows the old alt afterwards, re-select the image in the Image Box on the Home page.
   - **Value:** `NYC Department of Transportation`
5. **Where:** Pages > Home > Edit with Elementor > the heading widgets (not visible; for screen readers and search engines)
   - **Do:** Set the HTML Tag in each widget's Content tab so the heading order matches the sample. Live now: 'About' is H4, the About statement is H3, the three Our Activities card titles are H4, the three In the News titles are H5. Change: 'About' heading -> H2; the three Our Activities card titles ('Building Capacity', 'Developing Best Practices in Public Health Data Science', 'Valuing Diverse Stakeholder Collaborations') -> H3; the three In the News Image Boxes -> Title HTML Tag H3. Optional: the About statement ('The Center for Health Data Science (CHDS) is a hub and conduit...') -> p. The CSS does not depend on the tags, so the look will not change.
   - **Value:** `About: H2. Activity card titles: H3. News card titles: H3. About statement: p`

### Could not be matched or needs a decision
- The saved copy of the live home page does not include Elementor's own page stylesheet (a separate file on the server that this job was not allowed to fetch). So the live paddings, margins, column widths and font sizes could not be seen; the CSS sets every value explicitly instead. It needs one visual check after pasting, especially spacing inside the hero.
- Hero top and bottom padding left untouched on purpose: the live header is a transparent header that sits on top of the hero, so the hero's current top padding is what keeps the headline clear of the menu. The sample's hero padding (44-80px) assumes a header that takes its own space.
- Hero photo column: live has a background and an overlay on that column that could not be seen (only that they exist). The CSS removes both to match the sample's plain white right half. If a coloured block behind the photo was wanted, delete the two lines mentioning elementor-element-04914f9 with 'background: none' and 'display: none'.
- Breakpoint: the sample switches the hero and About to one column at 800px; Elementor stacks columns at 767px. Between 768 and 800px wide the live page stays two-column.
- About section uses 'display: contents' on the left column so the statement can span the full width. It works in all current browsers on the public page, but inside the Elementor editor that column's edit handles may look odd. The alternative is rebuilding that section in Elementor (statement in its own full-width row above a two-column row).
- The 'View our projects' arrow is an Elementor icon on live and a typed arrow character on the sample; shape and thickness differ slightly.
- The sample's 'Learn more' / 'Read more' links carry hidden screen-reader text ('about Building Capacity' etc.). Elementor's button widget has no field for that, so it is not reproduced.
- NYC DOT logo: live is a PNG (950x570), the sample uses an SVG file that is not in the uploads folder; at 44px tall the proportions may differ a little.
- ACM logo alt text: live says 'Association for Computing Machinery (ACM)', the sample says 'ACM'. Left as is because the live text is the more descriptive one.
- Apostrophes in the Chronicle card ('Here's', 'people's') are straight on live and curly on the sample; not worth an edit.
- Outside this group but related: the 'Contact us' button in the band above the footer (element 2b09c86, footer template) has the same zero-padding bug from rule 3b of the earlier block; it must be fixed in the footer/global group, not here.
- No DSSD content or DSSD link exists in the home page body (checked the saved page: no match), so nothing was needed or changed for DSSD here.
- Review note: all 51 element IDs used in the CSS were checked and exist in the saved live home page, and every rule starts with 'body.home .elementor-1316', which wraps only the page body (not the header or footer). The final CSS text could not be run through an automatic brace checker in this read-only session; it was checked by hand.

---

## Page 3: Our Work

### A. Paste this CSS file
`match-sample/02-work.css`

What it changes:
- Project list area becomes 1120px wide on a white background, with the sample's top/bottom spacing (40-80px) and a 20px side gutter.
- Filters become a centred row of plain text buttons (15.2px, semi-bold, grey) with 22px between them; the active one is violet with a violet underline, hover turns violet. No pill or background.
- On phones the 'All' dropdown is hidden and the same wrapping filter row is shown instead, as on the sample.
- Each project is a two-column row: image left (slightly wider, 1.05 : 1), text right, 36px gap, vertically centred, 28px above and below.
- A thin grey line (#d6d6d6) separates rows; no line above the first row. Any card background, border, shadow or overlap offset from the plugin is removed.
- Project images fill their column with 12px rounded corners.
- Project titles are 24px, semi-bold, violet, tight line height, not underlined until hover (darker once visited).
- The small decorative line under each title is hidden.
- Descriptions are 17px with 1.65 line height in grey #404040.
- 'Learn more' is 13.6px uppercase violet with a violet bar underneath and no arrow icon. The size is fixed in pixels so it no longer shrinks to about 12px on phones.
- The invisible whole-row link is removed, so only the image, title and 'Learn more' are clickable (also removes the unhelpful 'Link Complete Box' screen-reader label).
- Below 800px wide each project stacks: image on top, text underneath.

### B. Editor steps (things CSS cannot do)
1. **Where:** Posts > 'Using Data To Capture and Change Structural Factors' > Edit (WordPress editor, not Elementor) > Excerpt box in the right-hand Post panel
   - **Do:** The Our Work row for this project currently shows the description followed by run-on text ('Relevant Papers Zhao, Y., Paul, R. ...' ending in '...'). Type a manual excerpt so only the description shows, then Update.
   - **Value:** `Upstream factors are important for preventing and mitigating health disparities. We bring focus to how data can be used to capture these social and environmental factors, and how to incorporate them in models that affect change.`
2. **Where:** Our Work page: click the 'Data Science with Stakeholders' filter. If it shows no projects: Posts > Categories > hover 'Data Science with Stakeholders' > Quick Edit > Slug
   - **Do:** Likely bug: the filter button looks for 'stakeholders' but the Smart Community project row is labelled 'data-science-with-stakeholders', so the filter probably shows nothing (on the sample it shows the Smart Community project). The usual cause is a category whose slug ('stakeholders') differs from its name. Change the slug to the value below and Update, then reload Our Work and test the filter. Note this changes that category's archive web address. If instead you find two separate similar categories, tick the one the filter uses on the post 'Smart Community-level Targeting by Combining Artificial Intelligence and Mobile Tools' and remove the other.
   - **Value:** `data-science-with-stakeholders`
3. **Where:** Pages > Our Work > Edit with Elementor > click the project list (Posts widget) > Content tab > Title section > HTML Tag
   - **Do:** Change the project title tag from H4 to H2 (the sample uses H2 directly under the page's H1, which is the correct heading order for screen readers). The CSS above keeps the size the same whichever tag is used.
   - **Value:** `H2`
4. **Where:** Optional, low priority: Posts > 'Social Determinants and Risk Prediction' > Edit > Excerpt box
   - **Do:** The live description has a double space after 'as well as' (hidden non-breaking spaces in the post text). Barely visible; only if you want it exact, type this manual excerpt and Update.
   - **Value:** `Social determinants play an important role in shaping noncommunicable disease. We are examining the role of social determinants in clinical risk prediction as well as appropriate modeling strategies for their integration.`

### Could not be matched or needs a decision
- Review correction: the earlier draft used 25.5px / 16.15px / 14.45px for title, filters and 'Learn more'. The sample's real sizes are 24px / 15.2px / 13.6px (its rem units are based on 16px, only body text is 17px). Fixed in the CSS above.
- The live Elementor/UAEL stylesheet is not in the saved files (one external combined file), so the widget's current padding, floats, image position and filter styling could not be seen. The CSS overrides these defensively with !important but is untested; check the page in a private window at desktop and phone width after pasting.
- The plugin positions rows with a script for filtering; row heights are recalculated on load. If rows overlap or leave gaps after pasting, reload once and report it - that would need a different approach.
- After filtering, the first visible row can show a grey line above it (the sample behaves the same way, so left as is).
- Showing the filter row on phones instead of the 'All' dropdown relies on the plugin keeping click handling on the top row at small sizes; untested. If tapping a filter does nothing on a phone, delete the '.uael-filters-dropdown { display: none }' rule and the rule above it that forces 'display: flex'.
- Whether the 'Data Science with Stakeholders' filter is really broken, and whether the cause is a slug mismatch or duplicate categories, cannot be confirmed from the saved HTML (only the mismatch between the filter's 'stakeholders' and the row's 'data-science-with-stakeholders' is visible).
- The page title band above the list (teal bar, 'Our Work' heading, dots icon) is not changed here; its colour is already handled by the applied brand CSS and its layout was outside this plan.
- Sample 'Learn more' links have hidden screen-reader text ('Learn more about <project title>'); live links only announce 'Learn More'. The widget does not offer this and CSS cannot add it.
- Sample marks the image links as decorative; live images have descriptive alt text and the image link is announced. Left as is - the live alt text is fine and the widget does not expose this setting.
- Sample filter buttons are real buttons with pressed state; live filters are list items generated by the plugin. Appearance matches, underlying markup cannot be changed.
- The three placeholder projects (E-Bike Project, NYC Health + Hospitals, LLM Robustness) and the sample's yellow review note are intentionally not included.
- Sample loads 1024px-wide images; live loads the full-size originals. Looks the same, only loading weight differs; not changeable with CSS.

---

## Page 4: Team & Partners

### A. Paste this CSS file
`match-sample/03-team-body.css`

What it changes:
- Only the Team & Partners page is touched: every rule starts with body.page-id-481 (the live page's body class). Every element ID and class used was checked against the saved live HTML and exists exactly once; the footer and header are not matched by any rule.
- Section bands alternate like the sample: Director white, PhD/MS student rows light violet, Visitors white, Affiliates white, Alumni light violet, Across NYU white (it was tinted by the earlier brand CSS, which put two violet bands back to back), Collaborations light violet, Funding white. All of these are now set explicitly, so nothing depends on whatever colour Elementor currently has.
- Every section gets the sample's top/bottom spacing (40-80px depending on screen width), a 1120px content width and 20px side margins on small screens.
- Section headings (Team, Visitors, Affiliates, Alumni, Across NYU, Research and Community Collaborations, Funding and Support) become the sample h2: centred, violet, weight 500, 27-37px depending on screen width, letter-spacing -0.01em (the earlier brand CSS forced -0.02em). The 'Alumni' title, which is a small h4 on the live page, is styled the same.
- People are laid out like the sample: cards up to 300px wide, centred as a group with a 28px gap (instead of being spread across the full width), 36px between rows.
- Photos are all 150 x 150px circles, cropped to fill, with a thin grey ring and 12px below.
- Names are 18.4px semibold near-black; the lines under the name are 15.2px grey with 1.65 line height (the sample's 1.15rem and 0.95rem).
- The role line (PhD Student, MS Student, the Visitors' trainee link) is semibold as on the sample. For Rumi Chunara and Prince Amegbor this switches on automatically once 'Director' / 'Associate Director' is moved out of the name field (editor step).
- Links inside a person card are violet and underlined; long raw URLs can wrap instead of overflowing.
- Alumni table matches the sample style: 760px wide and centred, no purple header bar and no striped rows; violet bold column headings with a 2px violet line underneath, thin grey line under each row, 17px text, 10px 12px cell padding. The 3 columns and 12 people are untouched.
- On phones under 600px the alumni table uses 15px text and tighter padding (the sample has no such rule, but the live table has one more column).
- The intro paragraph above 'Across NYU' is centred, 17.6px, about 70 characters wide, with 36px below.
- Organisation logos become the sample's cards: 250px wide white boxes with a thin grey border, 20px 16px padding, at least 150px tall, logo fitted into a 190 x 76px area, name underneath as a semibold violet underlined link (the live links were grey because of an inline 'color: inherit').
- Cards in each group are centred and wrap with a 16px gap. Funding and Support flows as one group (4 + 4 + 3 on desktop) instead of two separate rows of 6 and 5 tiny logos; the two empty spacer columns in the second Funding row are hidden.
- At 800px wide and below the people stack in one centred column with 36px between them, the same breakpoint as the sample; organisation cards stay 250px wide and centred.
- Includes inert rules for a section with CSS ID chds-core-team-heading. They do nothing until that section is added in Elementor (editor step 2); after that the new 'Core Team' heading sits on the light violet band directly above the PhD students.

### B. Editor steps (things CSS cannot do)
1. **Where:** Team & Partners page, the Heading widget that says "Team" (first heading under the page title band)
   - **Do:** Change the heading text. Keep the HTML tag as H2.
   - **Value:** `Director`
2. **Where:** Team & Partners page, between the Director row (Rumi Chunara / Prince Michael Amegbor) and the PhD students row (Dongkyu Cho / Aditya Jain / Jonghwan Kim)
   - **Do:** Add a new one-column section (a classic Section like the others on the page, not a Container). Put one Heading widget in it, HTML tag H2. Then select the section, open Advanced > CSS ID and enter the ID below (no # sign). The CSS already contains the styling for this ID (light violet band, centred violet heading).
   - **Value:** `Heading text: Core Team   |   Section CSS ID: chds-core-team-heading`
3. **Where:** Team & Partners page, team member block "Rumi Chunara, PhD"
   - **Do:** The role is currently typed inside the Name field after a line break, so it shows in the big name style. Move it: Name = name only, Designation = the role, Description = the two affiliation lines separated by a line break.
   - **Value:** `Name: Rumi Chunara, PhD   |   Designation: Director   |   Description: Associate Professor, Department of Biostatistics and Computer Science & Engineering<br>NYU School of Global Public Health and Tandon School of Engineering`
4. **Where:** Team & Partners page, team member block "Prince Michael Amegbor, PhD"
   - **Do:** Same fix as Rumi's block, and change the visible link text from the raw URL to the word Website (the link address stays https://wp.nyu.edu/schoolofglobalpublichealth-e2hwlab/).
   - **Value:** `Name: Prince Michael Amegbor, PhD   |   Designation: Associate Director   |   Description: Assistant Professor, Department of Global and Environmental Health<br>NYU School of Global Public Health<br><a href="https://wp.nyu.edu/schoolofglobalpublichealth-e2hwlab/">Website</a>`
5. **Where:** Team & Partners page, team member block "Dongkyu Cho"
   - **Do:** On the sample the name is plain text and the link is a separate "Website" line. Remove the link from the Name field and add the Website link as the last line of the Description.
   - **Value:** `Name: Dongkyu Cho   |   Description: NYU Tandon School of Engineering<br><a href="https://sites.google.com/view/dongkyu-cho/home">Website</a>`
6. **Where:** Team & Partners page, PhD students row (three columns: Dongkyu Cho, Aditya Jain, Jonghwan Kim)
   - **Do:** Reorder so Jonghwan Kim is the middle column and Aditya Jain is the right column (drag the column handles in the Navigator).
   - **Value:** `Order: Dongkyu Cho, Jonghwan Kim, Aditya Jain`
7. **Where:** Team & Partners page, the small "Alumni" title above the alumni table (a Text Editor widget containing a Heading 4)
   - **Do:** In the text editor's format dropdown change it from Heading 4 to Heading 2 so it is a real section heading like the others (the CSS styles it the same either way). Keep the text "Alumni", since the live table also lists postdocs and students, not only PhDs.
   - **Value:** `Alumni (Heading 2)`
8. **Where:** Media Library (or each team member block's image), photos on the Team & Partners page that currently have empty alt text
   - **Do:** Add alt text in the sample's wording.
   - **Value:** `Photo of Rumi Chunara | Photo of Prince Michael Amegbor | Photo of Mengjie Wang | Photo of Sanjana Battula | Photo of Philomena Ngugi | Photo of Job Nyameino | Photo of Joshua Epstein | Photo of Siyu Heng | Photo of Mark Jit | Photo of Emmanuel Peprah | Photo of Hai Shu | Photo of Wen Zhou. Also change Dongkyu's from "Dongkyu Cho" to: Photo of Dongkyu Cho`
9. **Where:** Team & Partners page, placeholder images for Aditya Jain and Jonghwan Kim (placeholder-aditya-jain.png, placeholder-jonghwan-kim.png)
   - **Do:** These are decorative initials circles (the sample hides them from screen readers). Clear the alt text so the name is not read twice.
   - **Value:** `Alt text: (leave empty)`
10. **Where:** Team & Partners page, MS students row (Mengjie Wang, Sanjana Battula)
   - **Do:** Content difference, your decision, no CSS hides it: the sample has no MS students. Instead it has one centred paragraph under the PhD students. If you want to match the sample, delete this row and add a one-column section in its place with a Text Editor widget (section background #EEE6F3, text centred, 17.6px, max width about 650px, 32px space above).
   - **Value:** `We also work with many master's students who make important contributions across our research projects. Their involvement is highlighted through our project pages, publications and news.  (link "project pages" to https://healthdatasci.org/work/ ; link "news" to the live News page)`
11. **Where:** Team & Partners page, "Affiliates" heading and its two rows (Joshua Epstein, Siyu Heng, Mark Jit, Emmanuel Peprah, Hai Shu, Wen Zhou)
   - **Do:** Content difference, your decision, no CSS hides it: the sample has no Affiliates section. Keep it or delete the heading section and both rows. If you keep it, change each visible raw URL link text to the word Website so it matches the other cards (addresses unchanged).
   - **Value:** `Link text: Website`
12. **Where:** Team & Partners page, all team member blocks (optional, lower priority)
   - **Do:** In each block's Name settings set the HTML tag to H3 instead of H4, so names sit directly under the H2 section headings as on the sample. The look does not change.
   - **Value:** `H3`
13. **Where:** Team & Partners page, organisation cards under Across NYU, Research and Community Collaborations, Funding and Support (optional, lower priority)
   - **Do:** On the sample only the name under the logo is a link and the logo is decorative. On the live page both logo and name link to the same address, so keyboard and screen-reader users hit every link twice. To match, set each logo Image widget's Link to None and clear its alt text; leave the name links as they are.
   - **Value:** `Image link: None, alt text: (empty)`

### Could not be matched or needs a decision
- The live page's own Elementor stylesheet is not in the saved files, so the current paddings, margins, heading sizes and photo sizes could not be seen. The CSS therefore sets every value explicitly with !important rather than adjusting known ones; check the page once after pasting, especially the spacing between sections.
- Review correction: the earlier draft of this CSS converted the sample's rem sizes using 17px; the sample's rem is 16px. Sizes are now 27.2-36.8px for section headings, 18.4px for names, 15.2px for the lines under a name and 17.6px for the intro paragraph.
- The sample splits the top of the page into 'Director' (white) and 'Core Team' (light violet) sections. CSS cannot add the 'Core Team' heading; until editor step 2 is done the light violet band simply starts with the PhD students.
- Until 'Director' / 'Associate Director' are moved out of the Name field (editor steps 3 and 4) those two roles keep showing in the larger name style; CSS cannot restyle text after a line break inside the name.
- Affiliates is not on the sample. It is kept white, so Visitors and Affiliates are two white bands in a row before the light violet Alumni band.
- Dongkyu Cho's affiliation: sample says 'NYU Computer Science', live says 'NYU Tandon School of Engineering'. The files do not show which is the approved wording, so the live wording is kept.
- NYU School of Global Public Health, Biostatistics link: sample points to https://publichealth.nyu.edu/about/departments, live points to https://publichealth.nyu.edu/department/biostatistics. The live address is more specific and the sample's own review note called its link a placeholder, so it is left; not verified that the live address works.
- Sample shows Jonghwan Kim and Aditya Jain with CSS initials circles (JK, AJ on pale violet); live uses uploaded placeholder PNGs. The images could not be viewed; the CSS only makes them the same 150px circle with a grey ring.
- Sample logos for NYU SGPH, NYU Langone, NYC DOT and NYC Health + Hospitals are SVG files; live uses PNG uploads. Sharpness and exact artwork could not be compared from the files.
- The Visitors' role links go to the old DSSD site (nyu-moi-dssd.squarespace.com) on the live page and to the new DSSD trainees page on the sample. Left as is, per the plan to keep DSSD links pointing at the old site for now.
- Alumni table: the sample has 2 columns, 5 people, the title 'PhD Alumni' and a 760px width. The live 3 columns and 12 people are kept on purpose; the sample's 760px width is used plus a small-phone size reduction the sample does not have. If 760px feels tight for three columns, change max-width in the .chds-alumni-wrap rule to 900px.
- The 'role line is semibold' rule for the directors and the 'PhD row followed by MS row' spacing rule use the CSS :has() selector. Browsers from before 2023 ignore those two rules (slightly different weight/spacing only, nothing breaks).
- The sample's centred master's-students paragraph and the removal of MS students and Affiliates are content decisions; listed as editor steps, not done in CSS. The live News page address for the 'news' link in that paragraph is not in the Team page's saved HTML.
- The page title band ('Team & Partners') and the 'Are you a researcher...' band and footer are not covered here; they belong to the hero/global groups.

---

## Page 5: News

### A. Paste this CSS file
`match-sample/04-news-body.css`

What it changes:
- All 13 news stories sit in one even grid (3 across on desktop, 2 on tablets, 1 on phones) with 28px gaps, instead of uneven rows of 3, 2, 3, 3, 2.
- The cards area is 1120px wide at most with 20px side gutters, 40 to 80px of space above and below, and a plain white background, as on the sample.
- Each card is stacked and left aligned: logo on top, then title, then summary (the live page has the logo to the left of the text).
- Logos are all 44px tall and at most 160px wide, with 12px of space underneath.
- Story titles are 22px, semi-bold, NYU violet, not underlined; underlined and deep violet on hover, darker violet once visited.
- Summary text is 17px, line height 1.65, dark grey #404040.
- A small uppercase underlined violet 'Read more' appears under every story that has a link; it opens the same article as the title.
- The empty spare column at the end of the last row no longer takes up space.
- On phones the cards stay left aligned instead of being centred.

### B. Editor steps (things CSS cannot do)
1. **Where:** News page > card 'Cities With More Hateful Tweets Have More Hate Crimes, Study Finds' (Vice) > Image Box > Link
   - **Do:** Replace the link with the one used on the sample (the live one still has the old 'd3njx7' address).
   - **Value:** `https://www.vice.com/en/article/cities-with-more-hateful-tweets-have-more-hate-crimes-study-finds/`
2. **Where:** News page > card 'Disease Sleuths Surf For Outbreaks Online' (NPR) > Image Box > Link
   - **Do:** The link ends with a stray quote mark (shows as %22), which breaks it. Replace the link with the clean one.
   - **Value:** `https://www.npr.org/sections/health-shots/2012/02/07/146519243/disease-sleuths-surf-for-outbreaks-online`
3. **Where:** News page > card 'Flaws in AI Are Deciding Your Future. Here's How to Fix Them.' > Image Box > Image
   - **Do:** Swap the square Chronicle icon (logo-chronicle-icon.png) for the full wordmark the sample uses. Upload it from Desktop/chds-website-draft/wordpress-uploads/logo-chronicle.png if it is not already in the Media Library, and set its alt text.
   - **Value:** `File: logo-chronicle.png. Alt text: The Chronicle of Higher Education`
4. **Where:** Media Library > logo-nyc-dot.png (used on the News card 'NYC DOT Collaborates With NYU on New E-Bike Health Study') > Alternative Text
   - **Do:** Change the alt text from 'NYC DOT' to the sample's wording.
   - **Value:** `NYC Department of Transportation`
5. **Where:** Media Library > Association_for_Computing_Machinery_ACM_logo.svg.png (News cards 'Finding the Fairness in AI' and 'Text Messages Quickly Track Healthcare Use During Ebola Outbreak') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `ACM`
6. **Where:** Media Library > pngfind.com-wall-street-png-6793891.png (News card 'Covid-19 Patients Put Remote Care to the Test') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `The Wall Street Journal`
7. **Where:** Media Library > 1200px-Vice_Logo.svg.png (News card 'Cities With More Hateful Tweets...') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `Vice`
8. **Where:** Media Library > WNYCStudiosWebsite.png (News card 'Flu-dunnit?') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `WNYC Studios`
9. **Where:** Media Library > tw-full-color.jpg (News card 'Scientists are working on ways of predicting where the flu will strike next') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `The World`
10. **Where:** Media Library > logo_ts_notagline.svg (News card 'Online Platforms to Share Medical Data Launch') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `The Scientist`
11. **Where:** Media Library > Time_Magazine_logo.svg.png (News card 'The Latest Tool for Tracking Obesity? Facebook Likes') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `Time`
12. **Where:** Media Library > npr-logo.svg (News card 'Disease Sleuths Surf For Outbreaks Online') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `NPR`
13. **Where:** Media Library > header-86f1267ea01eccd46b530284be10585e.svg (News card 'Twitter data accurately tracked Haiti cholera outbreak') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `Nature`
14. **Where:** Media Library > CNN-Logo.png (News card 'Tracking infectious disease on Twitter') > Alternative Text
   - **Do:** Alt text is empty. Fill it in.
   - **Value:** `CNN`
15. **Where:** News page > each of the 13 Image Box cards > Content tab > Title HTML Tag
   - **Do:** Change the title tag from H5 to H2, so headings go H1 (News) then H2 as on the sample. The look does not change, the CSS sets the size either way.
   - **Value:** `H2`
16. **Where:** SiteGround Optimizer (Speed Optimizer) > Caching > Purge Cache, after the steps above
   - **Do:** Clear the cache so the new links, logo and alt text show up on the live page.

### Could not be matched or needs a decision
- Not tested in a browser: this was a read-only comparison of saved files. Every class and ID in the CSS was confirmed to exist in the saved live News page, and the titles and summaries of all 13 cards already match the sample word for word. But the page's own Elementor stylesheet (inside the SiteGround combined CSS file) was not in the saved copy, so the current image-box widths, margins, title sizes and section background could not be seen; the CSS overrides them blind with !important. Check the page on desktop and phone after pasting.
- 'Read more' is drawn by CSS as part of the title link, not a separate link as on the sample. It looks the same and opens the same article, but it cannot be given its own text or destination, and it only appears on cards whose title has a link. Hovering 'Read more' also underlines the title.
- Time card ('The Latest Tool for Tracking Obesity? Facebook Likes') and CNN card ('Tracking infectious disease on Twitter'): the sample shows these with no link and no 'Read more', because the original links were dead. The live page links them to web.archive.org (Time) and hms.harvard.edu (CNN). They were left as is and not checked. For an exact match, clear the Link field on those two cards.
- NYC DOT logo: the sample uses an SVG file, the live page uses a PNG of the same logo (950x570). It should look the same at 44px tall; no change proposed.
- Small punctuation differences left alone: the sample uses curly quotes and apostrophes in the Chronicle title (Here's) and around "cholera" / "#cholera" in the CNN summary; the live page has straight ones.
- The yellow 'Note for review' box on the sample is a draft note for the reviewer, not page content; it is deliberately not added to the live page.
- The sample's 2-column and 1-column switch points depend on its 1120px wrapper; the live grid uses the same rule, but the exact widths at which it changes can differ by a few pixels if the live section has extra padding that could not be seen.
- On very old browsers without :has() support the empty spare column keeps one invisible cell at the very end of the grid; nothing visible changes.
- Until the alt text is filled in (editor steps), the logos are announced with no name, or skipped, by screen readers; CSS cannot add alt text.

---

## Page 6: Student Opportunities

### A. Paste this CSS file
`match-sample/05-students.css`

What it changes:
- Top of page: light violet band with the classroom photo on the left (rounded corners, slightly wider than half) and the title 'Student Opportunities' on the right, vertically centred, 40px apart, content 1120px wide.
- Page title: violet, medium weight, 32 to 48px depending on screen width (the sample's 2rem to 3rem; the earlier draft of this block had 34 to 51px, which was too big).
- Tabs and text use the full 1120px width on a white background; the doubled inner padding from the nested Elementor sections and widgets is removed.
- Tabs: Elementor's box around the panel is removed. Tab titles are violet, semi-bold, 16.8px, left-aligned, padding 22px 26px; one grey line runs under the row and the open tab is a white box with a grey border on top and sides that covers the line, as on the sample. Underline on hover.
- Below 1000px wide the tabs become a stacked list with grey borders; the open tab is light violet with a 4px violet left edge. On phones all six tab names are listed first and the open tab's text appears under the list (instead of Elementor's accordion).
- Tab text: 17.28px, line-height 1.65, grey #404040, starting 28px below the tabs. Removes the mixed sizes (16px, 11px, 1rem) typed into individual paragraphs.
- Section headings inside tabs (Internships, Learning Opportunities, Networking and Mentorship, AI in Public Health Working Group, What Participants Loved, etc.): 24px, semi-bold, violet, with space above. Works for today's bold lines and tiny Heading 6 lines, and for real Heading 2 once changed in the editor.
- Hides two stray blanks in the first tab (an empty bold line-break after the Internships paragraph and a blank space in front of the 'Internships' line) so heading spacing is even.
- Flyers inside the text: centred, capped at 440px wide, thin grey border; captions (once added in the editor) centred at 15.2px.
- Flyers tab: flyers sit in one centred row, 232px wide each, 24px apart, thin grey border; two per row below 1000px, one per row on phones. The runs of blank spaces typed between the flyers no longer push them around.
- Bullet list in the GenAI tab: tighter indent (1.2em) as on the sample.
- Below 800px the photo stacks above the title.
- Links in the tab text are already violet and underlined by the site-wide block (section 3d), and keyboard focus rings by section 5, so nothing is repeated here.

### B. Editor steps (things CSS cannot do)
1. **Where:** Posts > Student Opportunities (post 2466) > Edit with Elementor > click the Tabs widget > tab 'NYU Students & Potential Trainees' > content box
   - **Do:** Delete the first line, the lone bold word 'NYU'. The sample starts straight with 'The Center for Health Data Science at NYU offers...'. (Until it is deleted, the CSS shows 'NYU' as a violet heading.)
2. **Where:** Same tab, first paragraph
   - **Do:** Fix typo 'hand-on' to 'hands-on'.
   - **Value:** `hands-on learning experiences`
3. **Where:** Same tab, paragraph under 'Networking and Mentorship'
   - **Do:** Replace the comma before 'Our industry thesis opportunity' with a full stop.
   - **Value:** `...guidance for academic and career growth. Our industry thesis opportunity, for example, allows students...`
4. **Where:** Same tab: the bold lines 'Internships', 'Learning Opportunities', 'Networking and Mentorship', 'AI in Public Health Working Group'
   - **Do:** Click in each line, remove bold, and set the format dropdown (second toolbar row; click the 'Toolbar Toggle' button if it is hidden) from Paragraph to Heading 2. Also delete the empty line above 'AI in Public Health Working Group' and the stray blank at the end of the Internships paragraph. After this is done on both tabs, the CSS block marked E2 can be deleted.
   - **Value:** `Heading 2`
5. **Where:** Same tab: internship flyer image (under the Internships paragraph)
   - **Do:** Click the image > pencil icon > Size: change from Medium (232x300) to Large (791x1024) so it is sharp at 440px. Keep the link to the full file. Type the caption in the Caption box.
   - **Value:** `Caption: Flyer: 2025 matching grants for summer internships  |  Link: https://healthdatasci.org/wp-content/uploads/2025/01/CHDS-Internship-Poster-2.png`
6. **Where:** Same tab: thesis flyer image (under the Networking and Mentorship paragraph)
   - **Do:** Image > pencil icon > Size: Large (791x1024). Keep the link. Add the caption.
   - **Value:** `Caption: Flyer: industry collaboration thesis opportunity  |  Link: https://healthdatasci.org/wp-content/uploads/2025/01/Thesis-Opportunity-2.png`
7. **Where:** Tabs widget > tab 'External Students & Potential Trainees' > bold line 'AI in Public Health Working Group'
   - **Do:** Remove bold and set format to Heading 2.
   - **Value:** `Heading 2`
8. **Where:** Tabs 'NYU Students & Potential Trainees' and 'External Students & Potential Trainees' > paragraph under 'AI in Public Health Working Group'
   - **Do:** OPTIONAL, wording only: the live paragraph differs from the sample. Replace it with the sample wording only if that is the approved text (see cannotMatch). Keep the link on 'Learn more and join the working group' pointing to https://humane-intelligence.org/get-involved/working-groups/.
   - **Value:** `In partnership with Humane Intelligence, the Center co-leads the AI in Public Health Working Group, a collaborative community with members from around the world. Learn more and join the working group.`
9. **Where:** Tabs widget > tab 'Workshop: GenAI & HPC' > flyer image at the top
   - **Do:** Image > pencil icon > Size: Large (724x1024) instead of Medium (212x300). Keep the link. Add the caption and replace the alt text.
   - **Value:** `Caption: Flyer: Generative AI workshop, April 23, 2025  |  Alt: Flyer for the Generative AI workshop on April 23, 2025, 2:00 to 5:30 PM, GPH 708 Broadway Room 801, in partnership with NYU HPC  |  Link: https://healthdatasci.org/wp-content/uploads/2025/01/CHDS-GENAI-Workshop-2025-1.png`
10. **Where:** Tab 'Workshop: GenAI & HPC' > headings 'What Participants Loved', 'Suggestions for Future Workshops', 'Looking Ahead'
   - **Do:** Change each from Heading 6 to Heading 2 (the look is already fixed by CSS; this fixes the heading order for screen readers). Delete the empty line between the first paragraph and 'What Participants Loved'.
   - **Value:** `Heading 2`
11. **Where:** Tabs widget > tab 'Workshop: Assessing climate impacts on population health'
   - **Do:** Delete the symposium agenda image under the paragraph. On the sample this tab is text only; the agenda flyer lives only in the Flyers tab.
12. **Where:** Tabs widget > tab 'Flyers'
   - **Do:** Add the symposium agenda flyer as the FIRST image (Add Media > NYU-CHDS-Symposium-Agenda, size Medium 232x300), so the order is: Symposium agenda, GenAI workshop, Thesis opportunity, Internship poster. Keep all four images in ONE paragraph (no Enter between them) so they sit in a row. The long runs of blank spaces between the images can be deleted (the CSS ignores them either way).
   - **Value:** `Image: https://healthdatasci.org/wp-content/uploads/2025/05/NYU-CHDS-Symposium-Agenda-232x300.png  |  Alt: CHDS symposium agenda: Friday, September 15, Kimmel Center 802, 9:00 AM to 5:00 PM`
13. **Where:** Tab 'Flyers' > each of the four flyer images
   - **Do:** Make each flyer a link to its full-size file (click image > link icon), as on the sample. Currently none of them is clickable.
   - **Value:** `Symposium: https://healthdatasci.org/wp-content/uploads/2025/05/NYU-CHDS-Symposium-Agenda.png  |  GenAI: https://healthdatasci.org/wp-content/uploads/2025/01/CHDS-GENAI-Workshop-2025-1.png  |  Thesis: https://healthdatasci.org/wp-content/uploads/2025/01/Thesis-Opportunity-2.png  |  Internship: https://healthdatasci.org/wp-content/uploads/2025/01/CHDS-Internship-Poster-2.png`
14. **Where:** Tab 'Flyers' > GenAI workshop flyer
   - **Do:** Replace the alt text with the fuller sample wording.
   - **Value:** `Flyer for the Generative AI workshop on April 23, 2025, 2:00 to 5:30 PM, GPH 708 Broadway Room 801, in partnership with NYU HPC`
15. **Where:** Tab 'Flyers' > the three existing images
   - **Do:** Their addresses start with http:// (not https://). Easiest fix: delete each and re-insert it from the Media Library (size Medium), or in the Text view change http://healthdatasci.org to https://healthdatasci.org in each image address.
   - **Value:** `https://healthdatasci.org/wp-content/uploads/...`

### Could not be matched or needs a decision
- Review corrections made to the earlier draft of this block: (1) font sizes were calculated from a 17px base, but the sample's rem is 16px, so tab titles are now 16.8px (not 17.85), tab text 17.28px (not 18.36), panel headings 24px (not 25.5), captions 15.2px (not 16.15) and the page title 32 to 48px (not 34 to 51); (2) removed selectors that do not exist in the saved page ('.elementor-tab-title a', '.elementor-active') - the open tab is now matched only by aria-selected="true", which is in the saved HTML; (3) added overflow: visible on the tab row, otherwise Elementor clips the open tab and the grey line would run under it; (4) the heading stopgap no longer shares a selector list with a :has() selector, so an older browser cannot drop the whole heading rule.
- The live page is a blog POST (body class postid-2466) rendered through the shared single-post template 2029, which the project pages also use. All CSS is scoped to body.postid-2466 so project pages, header and footer are untouched, but if this post is ever recreated the ID changes and the block stops applying.
- Elementor's own stylesheet for template 2029 and post 2466 is in an external combined CSS file that was not saved, so the current background, padding, column widths, title alignment and tab colours could not be read. Every value is set explicitly with !important instead; the result should match, but it has not been seen rendered.
- The open-tab styling relies on Elementor switching aria-selected to "true" on the clicked tab (its standard behaviour, and the attribute is in the saved HTML), and on Elementor showing the row of titles from 768px and its second set of titles below that.
- Heading stopgap (block E2): CSS cannot tell a bold heading line from a paragraph of normal text that contains exactly one bold phrase, so until the bold lines are turned into real Heading 2 and block E2 is deleted, any such paragraph added to a tab would have its bold phrase shown as a violet heading. No current paragraph is affected except the lone 'NYU' line, which the editor steps delete.
- The Flyers tab rules use the panel ID #elementor-tab-content-7476. It exists in the saved HTML, but Elementor regenerates it if the Tabs widget is deleted and re-added; the flyers would then fall back to the centred 440px in-text style.
- The caption rules use WordPress's standard wp-caption / wp-caption-text classes, which are not on the page yet (no captions exist; they appear only after the caption editor steps). If Elementor's editor outputs captions differently, the caption will still show but may not be centred at 15.2px.
- Sample flyers in the text use the large image files (791x1024 / 724x1024) shown up to 440px wide. Live uses the 232x300 / 212x300 thumbnails; CSS deliberately does not stretch them (they would blur), so they stay small until the image size is changed in the editor.
- AI in Public Health Working Group paragraph: live says 'Students interested in artificial intelligence and public health can join...'; sample says 'In partnership with Humane Intelligence, the Center co-leads...'. The files do not show which wording is the approved one (the live text may be a later, deliberate edit), so that step is marked optional.
- Prospective PhD tab: live reads '...statement of purpose. This helps route...' while the sample has a comma splice ('...statement of purpose, this helps...'). The live wording is the better one, so no change is listed.
- Sample keeps tabs stacked from 1000px down with the panel below the list. On phones (under 768px) this is reproduced by reordering Elementor's accordion titles; tapping a tab changes the text below the list, and Elementor may auto-scroll slightly differently from the sample.
- The symposium agenda alt text says 'Friday, September 15' with no year in both sample and live; the year is not in the files.
- On the live 'External Students' tab the email link opens in a new tab (target=_blank); the sample opens it normally. Minor, left as is.
- Nothing on this page touches the DSSD archive pages; no DSSD link or redirect is part of this block.

---

## Page 7: Contact

### A. Paste this CSS file
`match-sample/06-contact-body.css`

What it changes:
- The text-and-form section gets the sample's spacing: 40 to 80px above and below (scales with screen width), content capped at 1120px wide with a 20px gutter on small screens, on a plain white background.
- The two columns become exactly equal with a 48px gap, and both start at the top (live currently centres them vertically against each other).
- The light-violet panel behind the form is removed, with its padding: on the sample the form sits directly on white. This deliberately overrides the panel colour (#eee6f3) that the earlier brand CSS set. If you prefer to keep the panel, delete the one rule commented 'The form sits on plain white'.
- 'Get in touch' heading: violet, weight 500, about 37px on desktop shrinking to about 27px on phones, tighter line height, left-aligned.
- Intro paragraph and address: 17px text, 1.65 line height, dark grey #404040.
- Email address: the envelope icon is hidden; the address shows as a plain violet underlined link at body-text size, darker on hover and once visited.
- Address: the map-pin icon is hidden so the two address lines sit flush left under the email.
- The thin divider line under the address is hidden (not on the sample).
- Form labels: bold (600), 17px, dark grey, 4px above each box; the required asterisk takes the label colour instead of red.
- Form boxes: full column width, 10px inner padding, 1px dark-grey (#595959) border, square corners, white background, 16px gap below each; the message box is about 6 lines tall (about 190px).
- Submit button: fixes the earlier brand CSS making it small; now 17px text with 9px/26px padding, white with a 2px violet border, turning solid violet with white text on hover.
- At 800px wide and below the two columns stack into one (text first, form underneath, 48px apart), matching the sample's phone layout.
- The form rules skip WPForms' hidden anti-spam field, so it stays invisible.

### B. Editor steps (things CSS cannot do)
None for this page.

### Could not be matched or needs a decision
- Review result: every class and ID in the CSS was found in the saved live Contact page, every rule is limited to the Contact page (page-id-533) and does not touch the header, footer or other pages, and the braces are balanced. Three corrections were made: the heading size (the earlier draft was about 2px too large; the sample works out to 27.2px to 36.8px), the form rules now explicitly skip the hidden anti-spam field, and the section is forced to white like the sample.
- The live page's own Elementor stylesheet and the WPForms stylesheet are not in the saved copy, so the current paddings, font sizes and colours on these blocks could not be seen. The CSS forces the sample's values with !important but is untested against those hidden rules; check the page after pasting, especially column spacing and the form box heights.
- No text, link or field changes are needed: the intro paragraph, email (healthdatasci@nyu.edu), address, the four visible form fields (Name, Email, Subject, Comment or Message) and the Submit label already match the sample word for word, so there are no editor steps.
- The saved HTML shows a fifth field labelled 'Comment or Subject'. This is WPForms' hidden anti-spam trap (the page hides it with its own script), not a real field. Do not delete or unhide it; the CSS leaves it alone.
- The envelope icon, map-pin icon and the divider under the address are hidden by CSS rather than deleted. They can optionally be deleted in Elementor later for a cleaner page, but that is not required for the look.
- The sample's yellow 'Note for review' box under the address is a draft-only note and is intentionally not reproduced on the live page.
- On the sample the address is marked up as a proper address element; on live it is an ordinary paragraph inside a text block. It looks the same, and changing it would need an HTML widget, so it is left as is.
- Form validation errors and the 'message sent' confirmation are not designed on the sample (its form does not send), so those WPForms messages keep their current styling.
- The font family (Inter) is not set here; it is assumed to come from the global brand CSS already applied.
- The Contact title band above this section and the 'Are you a researcher...' band and footer below it are outside this area and are not touched by this CSS.

---

## Page 8: The 6 project pages

### A. Paste this CSS file
`match-sample/07-project-pages.css`

What it changes:
- All rules apply only to the six project pages (post IDs 2365, 2136, 2092, 2077, 2050, 2019); the header, the 'Are you a researcher' band and the footer sit outside the targeted blocks and are not touched.
- Top of each project page becomes a light violet band (#eee6f3) with 40-80px of space above and below, as on the sample.
- Image and title sit side by side in a 1120px-wide row with a 40px gap; the image column is slightly wider (1.05 : 1), and the title is vertically centred next to the image.
- Featured image fills its column and gets 12px rounded corners.
- Page title is NYU violet, weight 500, 32-48px depending on screen width (the sample's 2rem-3rem), line height 1.2, left-aligned.
- At 800px and below the image stacks on top and the title goes underneath with a 40px gap and 20px side margins.
- Text area is a white band with the same 40-80px spacing; the text column is left-aligned and limited to about 78 characters per line instead of running full width.
- Body text and list items are a uniform 17px, line height 1.65, grey #404040; sizes typed into individual paragraphs (16px, 1rem) no longer make some citations a different size.
- The many empty paragraphs in the page content (52 on NSF CAREER, 28 on Social Determinants, 23 on NYU-Moi) are hidden and the padding of nested Elementor blocks is removed, so the space between paragraphs is one even line.
- Structural Factors page: a stray blank block after the last paper is hidden so the gap above 'Funders' matches the other pages.
- Section headings (Relevant Papers, Funders, Students, Broader Impacts, Acknowledgement) are 24px (the sample's 1.5rem), weight 600, violet, with a larger gap above than below.
- Bulleted lists use a small 1.2em indent like the sample.
- Funder logos are capped at 130px tall with natural proportions, left-aligned and side by side with a 20px gap (Social Determinants and New data logos no longer sit in wide columns). The Facebook logo on New data becomes larger than now (about 370px wide instead of 287px) and the NIH logo on NYU-Moi slightly smaller (130px tall instead of 143px), as on the sample.
- New data page: 'Award Page' becomes a normal violet underlined text link instead of an outlined uppercase button, as on the sample.
- NYU-Moi page: the three links at the bottom (Program Website, NIH reporter page, Social Determinant Data Community of Practice) become a bulleted list; their destinations are unchanged and still go to the old Squarespace site.
- Prepared for the 'Back to Our Work' link: once the widget from the editor step is added, it appears in bold 15px text above the image inside the violet band; until then this part does nothing.

### B. Editor steps (things CSS cannot do)
1. **Where:** Elementor > Templates > Theme Builder > Single Post template (ID 2029, the one used by all six project pages). Left column of the top row, above the Featured Image.
   - **Do:** Drag a Text Editor widget into the left column so it sits above the Featured Image. Type the text below, select it and link it to https://healthdatasci.org/work/ . Then on the widget open Advanced > CSS Classes and type chds-back (no dot). Update the template. The CSS in this block then moves the link to the top of the violet band, above the image, as on the sample. Before saving, check the template's Display Conditions: if it is also used by posts that are not projects, stop and ask first, because the link would show on those too (without the styling).
   - **Value:** `← Back to Our Work`
2. **Where:** NYU-Moi Data Science for Social Determinants Training Program page (post 2019), near the bottom of the text block: after the NIH logo and just above the three links that start with 'Program Website'.
   - **Do:** Add a heading in the same style as 'Funders' (Heading 4) above the three links. Do not change the three links or their addresses; they stay on nyu-moi-dssd.squarespace.com for now (the DSSD pages are being handled later).
   - **Value:** `Related links`
3. **Where:** NYU-Moi page (post 2019), first paragraph, the sentence ending '...as well as a Social Determinant Data Community of Practice for data scientists in the region.'
   - **Do:** Optional, small: extend the existing link so it covers the whole phrase instead of only the words 'Community of Practice', as on the sample. Keep the same address it has now (https://nyu-moi-dssd.squarespace.com/cop).
   - **Value:** `Social Determinant Data Community of Practice`
4. **Where:** New data in public health page (post 2136), Relevant Papers list, fifth paper.
   - **Do:** Delete the duplicate paragraph that has no link: 'Chunara, R. and Cook, S.H., 2020. Using digital data to protect and promote the most vulnerable in the fight against COVID-19. Frontiers in Public Health, 8, p.296.' Keep the copy directly below it, whose title is a link. The sample lists this paper once.
5. **Where:** New data in public health page (post 2136), Relevant Papers list, 2017 papers.
   - **Do:** The paper 'Baltrusaitis, K., Santillana, M., Crawley, A.W., Chunara, R., Smolinski, M. and Brownstein, J.S., 2017. Determinants of participants' follow-up...' appears twice (once before and once after the 'Liu, J., Weitzman, E.R. and Chunara, R., 2017' paper). Delete one of the two; the sample lists it once.
6. **Where:** All six project pages, the section headings inside the page text: 'Relevant Papers', 'Funders', and on NSF CAREER also the three headings above Relevant Papers. On Structural Factors these two headings are separate Elementor Heading widgets (change 'HTML Tag' in the widget); on the other pages they are Heading 4 inside the text.
   - **Do:** Optional (no visual change, better for screen readers): change these headings from Heading 4 to Heading 2, as on the sample. The CSS styles H2, H3 and H4 identically, so the look stays the same either way.
   - **Value:** `H2`

### Could not be matched or needs a decision
- Review result: every element ID and class used in the CSS was found in the saved live HTML of the page it targets, and the footer and 'Are you a researcher' band are outside the targeted blocks. Three values were corrected to the sample stylesheet (1rem = 16px there): title size 32-48px (was 34-51px), section headings 24px (was 25.5px), Back link 15.2px (was 16.15px, with its offset changed from 44px to 40px). One rule was added (Structural Factors stray blank block).
- The CSS could not be run through a browser or an automated syntax checker in this read-only review; it was checked by hand only. The saved pages also do not include the Elementor stylesheet for template 2029 (it is inside SiteGround's combined CSS file), so the template's current padding, column widths and title size are unknown. The CSS sets these explicitly with !important, but check one page on desktop and on a phone after pasting.
- The 'Back to Our Work' link relies on a class (chds-back) that does not exist on the live site yet; it is created by the first editor step. On old browsers without :has() support the link still shows but sits closer to the top edge of the band. If a title is so long that it is taller than the image, the link stays at the top of the band and a gap opens between it and the image.
- The saved files do not show whether template 2029 is also used by posts other than these six. The CSS is limited to the six post IDs, so any other post keeps its current look; a future seventh project page needs its post ID added to each list.
- DSSD: nothing on the DSSD archive pages is included. On the NYU-Moi page the live links already point to the old Squarespace site (nyu-moi-dssd.squarespace.com and /cop), so no redirect or link change is needed there; the sample's 'Program archive' callout box, its dssd.html links and the label 'Program website (archive)' are deliberately not reproduced.
- The sample text is missing two things that are on the live site and look like conversion slips in the sample, so the live versions are left alone: the linked title 'From the user to the medium: neural profiling across web communities' (New data page, Akbari 2018) and the 'Highlighted in ACM News' link (NSF CAREER page, Singh 2022). The sample's yellow 'Note for review' box is a draft note and is not part of the design.
- Funder logos load lazily on the live site, so for a moment before each logo loads it shows as a tiny dot instead of reserving its space; this is cosmetic and settles as soon as the image loads.
- The Facebook logo on the New data page has the placeholder alt text 'This image has an empty alt attribute; its file name is Facebook-Logo-Meaning-1024x360.jpg' on both sample and live; it should be changed to something like 'Meta (Facebook)' in the image block, but that is not a sample-versus-live difference.
- The line length uses 78ch, which depends on the Inter font loading; if Inter fails to load the column width shifts slightly, same as on the sample.
- The 'Are you a researcher...' band and the footer below each project page are shared site-wide parts and were not touched here.

---

## Page 9: The 3 activity pages (Building Capacity, Public Health, Stakeholders)

### A. Paste this CSS file
`match-sample/08-activity-listing-pages.css`

What it changes:
- Applies only to the three listing pages (Building Capacity, Public Health Best Practices, Valuing Diverse Stakeholder Collaborations, including page 2 of Stakeholders). They share the same block IDs because they are copies of each other, so one block of CSS covers all three. Header, footer and every other page are untouched.
- Page title becomes a full-width light violet band with the title centred, large (37-58px, weight 500, violet) and a small teal bar above it, as on the sample.
- Title band and list are held to the sample's content width (1120px maximum, 20px margin each side on small screens) and the sample's top and bottom spacing; the list area is plain white.
- Each project becomes a row: picture on the left (slightly wider column), text on the right, vertically centred, 36px gap, 28px space above and below, with a thin grey line between rows (none above the first).
- Pictures show at their natural shape with 12px rounded corners instead of being cropped to a fixed ratio; any card background, shadow or border around a row is removed.
- The Student Opportunities row (which has no picture) keeps its text in the left column, as on the sample.
- Project titles: 22px, semi-bold, violet, not underlined (underline appears on hover; darker violet once visited).
- Summary text: 17px, line-height 1.65, dark grey #404040, left aligned; the small divider line between title and summary is hidden.
- "Learn more" links: sample size (14.45px instead of 13.6px), arrow icon removed, left aligned, keeping the violet bar underneath from the brand CSS.
- The invisible layer that made the whole box one big link is switched off, so only the picture, the title and "Learn more" are links (this is also what lets the title underline on hover).
- Stakeholders page numbers (1, 2, Next) become a centred line of plain semi-bold violet underlined links, with the current page number in grey.
- At 800px wide and below, each row stacks: picture on top, text underneath.

### B. Editor steps (things CSS cannot do)
1. **Where:** Building Capacity, Public Health Best Practices and Stakeholders pages (Edit with Elementor on each, three separate edits) - the big page title heading at the top ("Building Capacity" / "Public Health Best Practices" / "Valuing Diverse Stakeholder Collaborations")
   - **Do:** Click the heading, then Content > HTML Tag: change from H2 to H1, then Update. None of these pages currently has an H1; the sample uses H1 for the page title. The look does not change (the CSS sets the size).
   - **Value:** `H1`
2. **Where:** Same three pages - the list of projects (the Posts widget under the title)
   - **Do:** Click the list, then in the Content tab open the Title section and change HTML Tag (Title Tag) from H4 to H2, then Update, so the heading order matches the sample (H1 page title, H2 project titles). The look does not change.
   - **Value:** `H2`
3. **Where:** WordPress admin > Posts > "Using Data To Capture and Change Structural Factors" > Edit (normal WordPress editor, not Elementor) > Excerpt box (if you cannot see it: Screen Options at top right > tick Excerpt). Shows on Public Health Best Practices and Stakeholders.
   - **Do:** Paste the text below into the Excerpt box and Update. Right now the summary on the listing pages runs on into "Relevant Papers Zhao, Y., Paul, R. ..." and is cut off with "..."; the sample shows only these two sentences.
   - **Value:** `Upstream factors are important for preventing and mitigating health disparities. We bring focus to how data can be used to capture these social and environmental factors, and how to incorporate them in models that affect change.`
4. **Where:** WordPress admin > Posts > "Student Opportunities" (the one whose address is /student-focused-initiatives-2/; if it is not under Posts, look under Pages) > Edit (normal WordPress editor) > Excerpt box. Shows as the first row on Stakeholders.
   - **Do:** Paste the text below into the Excerpt box and Update. Right now the summary on the Stakeholders page is a jumble of the tab names ("NYU Students & Potential Trainees External Students & Potential Trainees Prospective PhD Students Workshop: GenAI & HPC ...") cut off with "...". The text below is the sample's wording (it also fixes the live typo "hand-on" to "hands-on").
   - **Value:** `The Center for Health Data Science at NYU offers a diverse array of opportunities for students to engage in hands-on learning experiences in the field of Health Data Science. Our programs are designed to provide practical skills, foster academic growth, and prepare students for successful careers in this rapidly evolving field.`
5. **Where:** WordPress admin > Posts > "Social Determinants and Risk Prediction" > Edit (normal WordPress editor) > Excerpt box. Shows on Public Health Best Practices and Stakeholders.
   - **Do:** Paste the text below into the Excerpt box and Update. The live summary has stray non-breaking spaces around the word "appropriate" ("as well as  appropriate modeling"), which can show as a double gap; the sample has clean single spaces. Small fix, lowest priority.
   - **Value:** `Social determinants play an important role in shaping noncommunicable disease. We are examining the role of social determinants in clinical risk prediction as well as appropriate modeling strategies for their integration.`
6. **Where:** WordPress admin > Pages > "Stakeholders" > Quick Edit
   - **Do:** Change the Title only (leave the Slug as "stakeholders" so the address does not change), then Update. The browser tab and the share title currently read "Stakeholders - Center for Health Data Science"; the sample reads "Valuing Diverse Stakeholder Collaborations - Center for Health Data Science". If the tab title does not change afterwards, the All in One SEO box on that page has a hand-typed title that needs the same change.
   - **Value:** `Valuing Diverse Stakeholder Collaborations`

### Could not be matched or needs a decision
- The live Elementor/UAEL stylesheet for these pages is not in the saved copies (it sits in an external combined CSS file that was not to be fetched), so the current live values (container width, picture ratio, card padding, hover effects, pagination style) could not be read. The CSS therefore sets every relevant property explicitly with !important rather than adjusting known values; it needs one visual check on desktop and phone after pasting.
- Pagination wording on Stakeholders: sample reads "Page 1 of 2 · Next page »" (and "« Previous page · Page 2 of 2" on page 2); the live widget prints "1  2  Next »". CSS only restyles it (centred, semi-bold violet links); the wording comes from the plugin.
- Live Stakeholders page 2 (/stakeholders/page/2/) was not among the saved files. It uses the same page ID (2066) and widget so the same CSS should apply, but its content could not be confirmed (sample page 2 shows one row: NYU-Moi Data Science for Social Determinants Training Program).
- Hidden screen-reader text on "Learn more" (sample: "Learn more about <project title>") cannot be added with CSS or widget settings; live links are announced as just "Learn More".
- Picture alt text: the sample uses empty alt (its picture link is hidden from screen readers), live has descriptive alt text on each picture. Left alone on purpose: on live the picture link is a real link, so emptying the alt would create an unnamed link.
- Whether the manual Excerpt is honoured by the Posts widget could not be verified from the files (it normally is). If a summary does not change after saving, the fallback is the widget's Excerpt Length setting or moving the extra content lower in the post.
- Title band decoration: the sample uses a small teal bar above every page title. These three pages have no dots icon in their HTML, so the teal bar is drawn per the sample. Other pages' title bands are outside this group.
- Sample stacks rows at 800px; Elementor's own phone breakpoint is 767px. The sample's 800px is used for the row layout; anything Elementor itself changes at 767px in the unseen stylesheet could not be checked.
- The "Are you a researcher..." contact band below the list belongs to the site-wide footer template (section 25e2f0b), not to these pages, so it is not handled here.
- Review result: every class and block ID used in the CSS was confirmed present in all three saved live pages (pagination classes exist on Stakeholders only, which is expected); none of the three pages links to DSSD, so nothing here touches the DSSD redirect.
