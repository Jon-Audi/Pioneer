# Pioneer OEL Gallery — Project Todo

---

## Deployment

- [ ] Deploy to Vercel (import `Jon-Audi/Pioneer` at vercel.com/new)
- [ ] Set up Proxmox Docker deployment (`docker build -t pioneer-gallery . && docker run -d -p 8080:80`)
- [ ] Add custom domain (optional)

---

## CYD Hardware (ESP32-2432S028R)

- [ ] Flash and test `pioneer_cyd.ino` on actual hardware
- [ ] Tune `AUDIO_SENSITIVITY` in `config.h` (default 600.0) to match microphone/aux input level
- [ ] Verify SD card compatibility (FAT32, copy `SD_CARD/ANIM/` to root)
- [ ] Test touch input for animation switching
- [ ] Verify all 21 animations play correctly on the ILI9341 display

---

## Gallery — More Animations

### Lost Pioneer content (research needed)
- [ ] Search Japanese 2channel / 5channel archives for Carrozzeria-exclusive LKD files
- [ ] Try to recover "Night Cruising", "Air Show", "Arctic Ocean", "Matrix" animations
      (confirmed to have existed on pioneer.co.jp/car/pclink3b — never archived)
- [ ] Check archive.org captures of pioneer.co.jp download portals (2003–2007)

### Other formats to investigate
- [ ] Panasonic CQ-C8303U "Image Studio" format — 172×54 OEL, 4096 colors, never reversed
- [ ] Sony CDX-M9900 — used standard animated GIF, worth finding original factory animations
- [ ] Scion OEL Screensaver Studio packs (Texas Longhorn, bB logo, toaster animations)

### Procedural animations to add
- [ ] Fire effect (classic cellular automata fire)
- [ ] Tunnel / hyperspace
- [ ] Bouncing Pioneer logo
- [ ] Audio waveform (scrolling FFT-style)
- [ ] Retro TV noise / static

---

## Gallery — Features

- [ ] **Head Units** — add more unit designs:
  - [ ] Sony Xplod CDX style (silver with large blue display)
  - [ ] Alpine CDA style (clean minimalist)
  - [ ] Clarion DXZ style
- [ ] **Head Units** — mobile swipe gesture support (swipe left/right for animations)
- [ ] **Head Units** — fullscreen mode button
- [ ] Favorites / star system — mark animations to a shortlist
- [ ] "Random" play button — cycles through all animations automatically
- [ ] Download all as ZIP
- [ ] Share link per animation (URL hash `#ANIM_00`)
- [ ] PWA manifest — installable on iPhone/iPad home screen

---

## Gallery — Polish

- [ ] Improve Plasma GIF compression (currently 1.6 MB — largest file)
- [ ] Add animated WebP versions as smaller alternatives
- [ ] `og:image` meta tags with animation previews for social sharing
- [ ] Add animation count badge to each category filter tab
- [ ] Better mobile layout for Head Units page (currently best on tablet+)
- [ ] Lazy-load GIFs only when scrolled into view (save bandwidth on mobile)

---

## Done

- [x] Reverse-engineer .LKD format (zLKD → gzip → TAR → BMP)
- [x] Extract all 21 original Pioneer animations to RGB565 BIN
- [x] Build `pioneer_cyd.ino` (waves, VU meter, animation player, audio reactive)
- [x] Extract remaining LKDs: level meters (7), level indicators (8), patterns (23)
- [x] Generate 8 procedural animations (spectrum, oscilloscope, star warp, plasma, scanner, matrix, VU needles, synthwave)
- [x] Build `pioneer-gallery` Next.js app (67 animations, 6 categories)
- [x] Head Units showcase page (Pioneer DEH, Vintage Receiver, VFD Classic, Modern LCD)
- [x] Local preview app (`preview_app.py`) — Flask server with animation player
- [x] Push to GitHub (`Jon-Audi/Pioneer`)
- [x] Set up `gh` CLI authenticated as Jon-Audi
