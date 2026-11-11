import{i as e}from"./preload-helper-xPQekRTU.js";var t,n=e((()=>{t=`/**
 * THEME "Funky Glass" (\`funkyglass\`), DARK mode — the night glass.
 *
 * WHAT FUNKY GLASS IS. The Hivez shell (gold brand, hexagonal avatars, the
 * Hivez typeface, the same rail / header layout) with SEE-THROUGH glass in
 * place of Hivez's opaque panels (owner direction 2026-11; mock:
 * docs/modules/themes/funky-glass-mock.html, the first \`:root\` block). A
 * near-black NEUTRAL ground (#07090d, no blue cast), warm off-white ink
 * (#f4f1ea), and four glass materials: THIN glass (white 8 %, CLEAR rather than
 * smoked, interactive cards), THICK glass (the dark panel colour at 36 %,
 * structural chrome: the rail, the header, the page plate), FLOAT glass (the panel
 * colour at 80 %: dialogs, menus, popovers, toasts, docks, over arbitrary
 * content) and BAR glass (62 %: sticky headers and toolbars in a page), all
 * blurred and saturated by the \`--glass-filter-*\` tokens, with a lit top edge and a
 * fainter rim on the other three (\`--glass-highlight\`, \`--glass-rim\`) and a
 * diagonal sheen. FIX(glass-overhaul): the owner (2026-11-11) said the theme
 * did not read as glass. Before: thin glass a smoked tint at 50 %, thick 55 %,
 * blur 18 / 28 px at 170 %, floating panels solid. After: the fill carries
 * little, the blur (26 / 40 / 44 / 32 px at 180 %), the rim and the sheen carry
 * the material. Gold stays what the design makes gold: the
 * metallic filled actions (\`--brand-fill\`) with DARK ink, the gold-washed
 * selected / active surfaces, focus, and the hexagonal avatars' ring. The
 * hex field behind the glass (resting lines + the travelling glow) arrives
 * through the \`--theme-bg-hex-*\` tokens below; until a later part reads them
 * the backdrop is simply the ground.
 *
 * OPAQUE vs TRANSLUCENT. Two families, on purpose. The ROLE tokens
 * (\`--card\`, \`--popover\`, \`--secondary\`, \`--muted\`, \`--accent\`, the
 * \`--surface-raised/sunken/chip\` and \`--segmented-*\`, \`--table-head\`, \`--drive-*\`,
 * \`--doc-*\`, \`--rail*\`) stay OPAQUE: the app stacks \`/NN\` opacity modifiers on
 * them and paints the popover fallback, the segmented thumb and sticky pieces
 * with them. Only the glass tokens (\`--surface-glass*\`, \`--surface-chrome\`,
 * \`--scrim-glass\`, \`--page-plate\`, \`--glass-float\`, \`--glass-bar\`, \`--glass-rim\`)
 * and the four plate tints (\`--plate-*\`, below) are alpha. INSIDE the plated page and
 * inside a float, \`glass-tints\` (index.css) re-points the tile, well, hover and
 * track roles at the tints, so pieces read as tint on glass and not as opaque
 * boxes. Hivez's
 * \`--rail-decoration\` layered an OPAQUE chrome-coloured fade over a honeycomb,
 * which would hide the glass, so here it is \`none\`.
 *
 * Unlike Remote Desk the BRAND is not shared across modes: bright gold is
 * unreadable as text on paper, so \`./light.css\` uses a deep honey. LIGHT is
 * the mode this theme opens in (\`preferredScheme\` in \`../registry.ts\`) — it
 * is the primary look, not a leftover.
 *
 * COMPLETE BLOCK — the identical token-name set as every other theme file
 * (\`../__tests__/registry.test.ts\` enforces it across themes, not just within
 * one), because a \`<ThemeScope>\` preview puts this block on a div inside a page
 * wearing a different theme. The section order follows \`../hivez/\`.
 *
 * MEASURED CONTRAST (WCAG 2, \`../contrast.ts\`; asserted by
 * \`../__tests__/funkyglassContrast.test.ts\`, so these are gates, not notes).
 * Translucent surfaces are composited over the ground first (thin glass over the
 * ground; thick chrome over the ground; the inset / strong steps over thin glass
 * over the ground; a float or a bar over the ground, the plate, a white sheet
 * (--doc-page) or a dark card). "Under the glow band" adds the glow colour at
 * 0.3 × the token's alpha between ground and surface, the worst case at a
 * band's centre. AT-REST gates are unchanged by the overhaul; the transient
 * glow-peak gates are RELAXED by owner decision 2026-11-11 ("even at some cost
 * to contrast"): primary text 4.5, secondary / muted / label / status text 3.
 *   foreground / background · thin glass · chrome · plate ..... 17.66 · 15.01 · 17.24 · 17.24   (gate 7)
 *   muted-foreground / card · thin · thick chrome ............. 6.35 · 5.94 · 6.82            (gate 4.5)
 *   label-muted / ground · thin · strong over thin ............ 6.66 · 5.66 · 4.93            (gate 4.5)
 *   brand-foreground / brand ...... 11.00     / every --brand-fill stop  ≥ 6.71               (gate 4.5)
 *   brand / background · card · thin glass ................... 10.79 · 9.80 · 9.17
 *   brand / accent · muted · secondary · segmented-track ..... 8.20 · 9.12 · 9.12 · 10.23
 *   brand-tint-foreground / tint 9.32   rail-foreground / rail 8.65 · / thick chrome 8.66   rail-accent 9.32
 *   status as text (success · warning-deep · danger · info):
 *     ground ....... 8.75 · 10.43 · 7.46 · 7.97   thin glass ... 7.44 · 8.86 · 6.34 · 6.78   card ... 7.94 · 9.46 · 6.77 · 7.24   (gate 4.5)
 *   THE SHEEN (first stop white 12 %, 30 % stop 3 %): foreground at the first stop 10.44 (gate 7); muted / label there
 *     4.13 · 3.93 (gate 3.5); every quiet ink at the 30 % stop ≥ 5.23 (gate 4.5)
 *   UNDER THE GLOW BAND (glow 75 %), foreground / muted-foreground / label-muted (gates 4.5 / 3 / 3):
 *     ground 11.04 · 4.37 · 4.16    thin 8.62 · 3.41 · 3.25    plate 13.01 · 5.15 · 4.90    chrome 13.01 · 5.15 · 4.90
 *     float 15.12 · 5.99 · 5.70    bar 14.44 · 5.72 · 5.44
 *   status under the glow band, thin glass · plate (gate 3):
 *     success 4.27 · 6.45   warning-deep 5.09 · 7.68   danger 3.64 · 5.49   info 3.89 · 5.87
 *   A FLOAT (glass-float, panel colour 80 %) over: ground · plate · white sheet · dark card, foreground / muted / label:
 *     16.41 · 6.50 · 6.19    16.30 · 6.45 · 6.14    8.78 · 3.48 · 3.31 (the extreme: gate 4.5 / 3)    16.03 · 6.35 · 6.04
 *   A BAR (glass-bar, panel colour 62 %) over: ground · plate · dark card: foreground / muted / label:
 *     16.89 · 6.69 · 6.37    16.69 · 6.61 · 6.29    16.21 · 6.42 · 6.11      over a white sheet: foreground 4.78 only (gate 4.5)
 *   PLATE-SCOPE TINTS over the plate, worst ink at rest · under the band (gates 4.5 · 3):
 *     tile 5.87 · 4.22   well 5.58 · 3.96   hover 5.11 · 3.59   track 6.20 · 5.48
 *   label-muted, text-subtle, success, danger, info on accent · muted · secondary · table-head · segmented-track · row hover:
 *     worst 5.06 · 5.63 · 5.63 · 5.37 · 6.14 · 5.11                                             (gate 4.5)
 *   Badge ink on its tint, over a card · over thin glass: warning 7.60 · 7.02   success 6.07 · 5.62
 *     danger 5.73 · 5.31   brand 7.26 · 6.69                                                    (gate 4.5)
 *   focus ring (--ring at 50 %) on ground · plate · thin · card ... 3.34 · 3.36 · 3.28 · 3.34    (gate 3)
 *   danger text on its own 20 % wash over a popover (destructive menu row) ... 4.96             (gate 4.5)
 *   success-foreground / success 8.92   warning-foreground / warning 10.63   info-foreground / info 8.13
 *   destructive-foreground / destructive 7.61                         (gate 4.5; status FILLS, not the card)
 *   danger-ink / danger · destructive 7.61 · 7.61                       (gate 4.5; text-danger-ink on the solid red fills)
 */

[data-theme='funkyglass'][data-scheme='dark'] {
  color-scheme: dark;
  --scheme: dark;

  /* Cards read rounder than Remote Desk's 0.5rem, as in Hivez (≈12px). */
  --radius: 0.75rem;

  --font-theme: 'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; /* inherits light */

  /* ── Core roles ─────────────────────────────────────────────────────────
     Neutrals are near-black with a faint cool lean (hue ≈ 265, the mock's
     #07090d ground) under WARM off-white ink. Role colours are OPAQUE: the
     app stacks \`/NN\` opacity modifiers on role tokens and paints dialogs,
     menus and toasts with them, so an alpha value here would compound and let
     the page show through a floating surface. */
  --background: oklch(0.1392 0.0097 261.8);    /* the mock's ground #07090d */
  --foreground: oklch(0.9585 0.0098 87.5);     /* ink #f4f1ea */
  --card: oklch(0.2008 0.0124 270.7);          /* solid tile / panel #14161c (the mock's --solid) */
  --card-foreground: oklch(0.9585 0.0098 87.5);
  --popover: oklch(0.2008 0.0124 270.7);       /* #14161c — menus and dialogs stay solid */
  --popover-foreground: oklch(0.9585 0.0098 87.5);
  --primary: var(--brand);
  --primary-foreground: var(--brand-foreground);
  --secondary: oklch(0.2313 0.012 270.9);      /* card inside a panel #1b1d23 */
  --secondary-foreground: oklch(0.9585 0.0098 87.5);
  --muted: oklch(0.2313 0.012 270.9);          /* #1b1d23 — the same inset step */
  --muted-foreground: oklch(0.6829 0.0045 91.5); /* ink at 62 % over the ground, flattened = #9a9996 */
  --accent: oklch(0.2685 0.0137 267);          /* #23262d — one step above --muted for menu-item hover */
  --accent-foreground: oklch(0.9585 0.0098 87.5);
  --destructive: oklch(0.72 0.17 25.3);        /* a soft red (= --danger): \`Badge\` paints text-destructive on its tint and \`bg-danger/20\` rows carry danger text */
  --destructive-foreground: oklch(0.1186 0.0248 247.3); /* white fails on the soft red (2.5:1); Black ink measures 7.61:1 (funkyglassContrast.test.ts) */
  /* NEUTRAL hairlines — never gold. The glass edge (\`--border-glass\`) is the
     mock's white 12 %; the working field edge is 10 % (as in Hivez). */
  --border: oklch(1 0 0 / 0.1);
  /* \`border-input\` — shadcn's field edge (select triggers, a few legacy
     fields), a step above the hairline. The house Input / Textarea draw
     \`border-default\` instead (components/ui/input.tsx). */
  --input: oklch(1 0 0 / 0.12);
  --ring: var(--brand);                        /* GOLD: focus stays the brand */

  /* The rail is a near-black role colour; its active row is the gold wash
     with gold ink (as Hivez). The rail itself is painted by
     \`--surface-chrome\` (thick glass) — these are the role fallbacks. */
  --rail: oklch(0.1593 0.0111 268);            /* #0b0d12 */
  --rail-foreground: oklch(0.7473 0.0058 95.1); /* ink at 70 % over the rail, flattened = #aeada9 */
  --rail-accent: oklch(0.2225 0.0172 91.8);    /* #1E1B12 */
  --rail-accent-foreground: var(--brand);
  --rail-border: oklch(1 0 0 / 0.08);          /* neutral, like every hairline */

  --scrollbar-thumb: oklch(1 0 0 / 0.14);
  --scrollbar-thumb-hover: oklch(1 0 0 / 0.24);

  /* ── Brand ────────────────────────────────────────────────────────────── */
  --brand: oklch(0.8059 0.122 82.8);           /* Hivez's "golden medium" #E6B85C */
  --brand-foreground: oklch(0.1186 0.0248 247.3); /* Black #01060E — dark ink on gold */
  /* The warm gold wash of selected / active surfaces, opaque. On a DARK wash
     gold ink is the readable choice. */
  --brand-tint: oklch(0.2225 0.0172 91.8);     /* #1E1B12 */
  --brand-tint-foreground: var(--brand);
  --brand-light: oklch(0.876 0.1235 90.6);     /* #F5D371 — the metallic fill's warm highlight; hover step above the fill */
  --brand-ghost: oklch(0.8059 0.122 82.8 / 0.06);
  --brand-subtle: oklch(0.8059 0.122 82.8 / 0.16);
  /* THE METALLIC FILL — Hivez's, unchanged (see ../hivez/dark.css): warm gold
     top-left → the pale cream highlight at ~68 % → gold deep in the
     bottom-right corner. Stops: #F0C35A · #F5D371 · #F6E9C3 · #E6B85C ·
     #C8871A. The dark ink (#01060E) reads ≥ 6.71:1 on every stop — gated per
     stop by funkyglassContrast.test.ts. */
  --brand-fill: linear-gradient(
    135deg,
    oklch(0.8372 0.1324 85.9) 0%,
    oklch(0.876 0.1235 90.6) 38%,
    oklch(0.9348 0.0515 91.4) 68%,
    oklch(0.8059 0.122 82.8) 82%,
    oklch(0.6732 0.1364 73.2) 100%
  );

  /* ── Glass → TRANSLUCENT (unlike Hivez, whose glass is opaque). Two
     materials, as in the mock (thin glass is CLEAR, near-white at a few percent):
       THIN glass ..... --surface-glass, white 8 % (clear, not smoked) — interactive cards.
       THICK glass .... --surface-chrome, rgb(18 20 26) at 36 % — structural
                        chrome (the rail, the header bar, the call controls).
       FLOAT / BAR .... --glass-float (80 %) and --glass-bar (62 %), below.
       CHIPS .......... --surface-chip is NOT glass: FIX(chip-stays-solid).
                        Before: a translucent chip would float over the 2D / 3D
                        WebGL office canvas (active-users pill, view-mode and
                        corner menus, map overlay, jump-to-latest pill, A/V
                        tiles), unreadable under a blur that is not allowed there.
                        After: it is SOLID (the card colour) in both modes; where
                        the theme backdrop is mounted the \`glass-chip\` utility
                        swaps it for --surface-chrome on that element only.
     Alpha glass STACKS (a card inside a panel adds its own lift), so the
     nested steps are small increments: --surface-glass-inset white 2.5 % (glass
     ON glass), --surface-glass-strong white 5 % (hover / chip / badge, painted
     inside inset lists, so it sits above the inset). --scrim-glass is the
     card colour at 72 % for the search palette's lightened, blurred scrim.
     The rail decoration is \`none\`: Hivez's value layers an OPAQUE chrome-coloured
     fade over a honeycomb, which would hide the glass; the hex field behind it
     (later part) is this theme's decoration. */
  --surface-glass: oklch(1 0 0 / 0.08);   /* FIX(glass-overhaul-clear): Before: a smoked dark tint at 50 %. After: white 8 %, CLEAR, closer to the mock's 5.5 %; blur, saturation, rim and sheen carry the material, and the glow-peak gate is relaxed (header) */
  --surface-glass-strong: oklch(1 0 0 / 0.05);
  --surface-glass-inset: oklch(1 0 0 / 0.025);
  --surface-chrome: oklch(0.1919 0.0126 270.7 / 0.36); /* thick glass rgb(18 20 26 / 0.55) */
  /* FIX(search-palette-scrim-glass): see ../hivez/light.css. The search
     palette's \`scrim="glass"\` wants a translucent copy of the panel colour. */
  --scrim-glass: oklch(0.2008 0.0124 270.7 / 0.72);
  --rail-decoration: none;
  --border-glass: oklch(1 0 0 / 0.12);         /* the glass edge */
  --border-hairline: oklch(1 0 0 / 0.08);      /* in-card dividers */
  --elevation-glass-raised: 0 0 0 1px oklch(1 0 0 / 0.1), inset 0 0 4px oklch(1 0 0 / 0.06); /* neutral: its callers are generic lifted glass */

  --surface-raised: oklch(0.2008 0.0124 270.7); /* #14161c */
  --surface-chip: oklch(0.2008 0.0124 270.7);  /* SOLID (= --card), on purpose: FIX(chip-stays-solid) above */
  --surface-sunken: oklch(0.2313 0.012 270.9);  /* #1b1d23 */
  /* Segmented tab switcher: recessed track + raised neutral thumb; thumb is clearly lighter than track. */
  --segmented-track: oklch(0.1778 0.0108 268.1); /* #0f1116 */
  --segmented-thumb: oklch(0.3366 0.013 267.2);  /* #34373e */
  /* NEUTRAL: \`border-strong\` is the app's "stronger edge" (checkbox/radio
     boxes, section dividers). Gold edges ride \`border-brand\` / \`--ring\` / the
     brand-tint surfaces instead. */
  --border-strong: oklch(1 0 0 / 0.16);

  /* ── Text ladder ──────────────────────────────────────────────────────── */
  --label-muted: oklch(0.67 0.0045 91.5);      /* ink at ≈ 60 % over the ground — holds 4.5:1 even on strong glass over thin glass */
  --text-subtle: oklch(0.9585 0.0098 87.5 / 0.58); /* ink at 58 % */
  --avatar-channel: oklch(0.36 0.05 85);

  /* ── Status (Hivez's) ─────────────────────────────────────────────────── */
  --success: oklch(0.723 0.192 149.6);         /* green #22C55E */
  --success-tint: oklch(0.723 0.192 149.6 / 0.16);
  --success-surface: oklch(0.723 0.192 149.6 / 0.16);
  /* success-foreground: the fills are BRIGHT here — white on --success measures
     only 2.28:1, so text on the solid fill takes the Black ink. */
  --success-foreground: oklch(0.1186 0.0248 247.3);
  --destructive-tint: oklch(0.72 0.17 25.3 / 0.12);
  --info: oklch(0.72 0.14 259.8);              /* a lighter blue: text under the glow band on thin glass */
  --info-tint: oklch(0.72 0.14 259.8 / 0.12);
  /* info-foreground: white measures 3.68:1 on --info; Black ink is higher. */
  --info-foreground: oklch(0.1186 0.0248 247.3);
  --danger: oklch(0.72 0.17 25.3);             /* a soft red: text under the glow band on thin glass, and on \`bg-danger/20\` */
  --danger-tint: oklch(0.72 0.17 25.3 / 0.12);
  /* FIX(danger-ink): ink on a SOLID --danger / --destructive fill (\`text-danger-ink\`).
     Before: the fills painted a hard-coded \`text-white\`, which on the soft red above measures 2.67:1 (it was
     3.76:1 on the old red). After: the near-black ink, the same one --destructive-foreground uses (7.61:1);
     gated on both fills in funkyglassContrast.test.ts. */
  --danger-ink: oklch(0.1186 0.0248 247.3);
  --warning: oklch(0.8 0.16 75);
  --warning-tint: oklch(0.8 0.16 75 / 0.12);
  --warning-deep: var(--warning);              /* on near-black the base amber already reads */
  /* warning-foreground: white measures 1.91:1 on --warning; Black ink is higher. */
  --warning-foreground: oklch(0.1186 0.0248 247.3);
  --presence: oklch(0.7837 0.1949 150.7);      /* green light #36DA73 — presence / live dots */

  --label-soft: oklch(0.67 0.0045 91.5);       /* = --label-muted */
  --text-disabled: oklch(0.9585 0.0098 87.5 / 0.4); /* ink at 40 % */
  --icon: var(--foreground);
  --icon-muted: var(--muted-foreground);
  --border-light: oklch(1 0 0 / 0.12);
  --surface-tint: oklch(1 0 0 / 0.08);         /* inverted: a black wash is invisible on near-black */
  --ledger-stripe: oklch(1 0 0 / 0.05); /* FIX(ledger-zebra-tokens): zebra row fill, a translucent wash so the step holds on any host */
  --ledger-hover: oklch(1 0 0 / 0.10);
  --table-head: oklch(0.2487 0.0136 272.8); /* opaque table/list header band #1f2128 — never translucent: it sits on the hex field */
  --scrim: oklch(0 0 0 / 0.6);
  --border-default: oklch(1 0 0 / 0.1);        /* the NEUTRAL hairline — also the house Input's edge */
  --border-subtle: oklch(1 0 0 / 0.08);
  --brand-deep: oklch(0.6732 0.1364 73.2);     /* "gold deep" #C8871A — the filled button's 1px edge */

  /* ── Elevation → GLOW + the mock's panel shadow. Only the BRAND glow is gold
     (the filled gold actions); every other lift is neutral. */
  --elevation-brand: 0 0 24px oklch(0.8059 0.122 82.8 / 0.3);
  --elevation-panel: 0 10px 30px -12px oklch(0 0 0 / 0.55); /* the mock's --glass-shadow */
  --elevation-overlay: 0 18px 44px -8px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.08);
  --elevation-overlay-strong: 0 24px 60px -10px oklch(0 0 0 / 0.7), 0 0 0 1px oklch(1 0 0 / 0.1);
  --elevation-danger-glow:
    0 0 0 3px oklch(0.72 0.17 25.3 / 0.35), 0 0 10px 2px oklch(0.72 0.17 25.3 / 0.5);
  /* Neutral: its callers are floating pills, switch/slider knobs, canvas
     cards — none of them gold. */
  --elevation-raised: 0 0 0 1px oklch(1 0 0 / 0.08), inset 0 0 4px oklch(1 0 0 / 0.06);
  --elevation-flat: 0 1px 2px oklch(0 0 0 / 0.4);

  /* The old per-page wash. This theme paints none (the hex field replaces it). */
  --shell-backdrop: none;

  /* ── Document kinds — identity data, kept as Remote Desk's hues. ───────── */
  /* FIX(kind-ink-contrast): the --kind-* hues are tuned so the white --kind-ink mark clears 3:1. */
  --kind-page: oklch(0.65 0.12 80);
  --kind-document: oklch(0.623 0.188 259.8);
  --kind-sheet: oklch(0.63 0.17 150);
  --kind-slides: oklch(0.65 0.135 75);
  --kind-markdown: oklch(0.66 0.18 293);
  --kind-text: oklch(0.64 0.006 264.5);
  --kind-tint-alpha: 0.08;

  /* ── File kinds — as Remote Desk's dark block. ─────────────────────────── */
  --kind-folder: var(--brand);
  --kind-pdf: oklch(0.637 0.208 25.3);
  --kind-image: oklch(0.656 0.241 354.3);
  --kind-video: var(--kind-markdown);
  --kind-audio: oklch(0.64 0.14 237.3);
  --kind-archive: oklch(0.551 0.023 264.4);
  --kind-code: oklch(0.64 0 0);
  --kind-other: oklch(0.64 0 0);
  /* The mark drawn ON a kind hue (KindGlyph): near-white. It reads on every hue because the
     hues above are tuned to clear 3:1 against it (FIX(kind-ink-contrast)). */
  --kind-ink: oklch(0.985 0 0);

  --fc-brand: var(--brand);
  --fc-green: oklch(0.765 0.177 163.22);  /* emerald, lifted for the dark canvas */
  --fc-amber: var(--warning);
  --fc-sky: var(--info);
  --fc-violet: var(--kind-markdown);
  --fc-pink: var(--kind-image);
  --fc-rose: var(--danger);
  --fc-grey: oklch(0.707 0.022 261.33);   /* cool grey, lifted for the dark canvas */

  /* The printable sheet stays light on purpose (see Remote Desk's light block). */
  --doc-canvas: oklch(0.2008 0.0124 270.7);    /* a panel */
  --doc-page: oklch(0.975 0.003 260);
  --doc-page-ink: oklch(0.2008 0.0124 270.7);
  /* Links ON THE PAPER (Google Docs' #1155CC): the page is paper-light in both
     schemes, so one blue reads at >= 5.9:1 on every page colour we ship. */
  --doc-page-link: oklch(0.488 0.196 261.2);
  /* A commented run on the (always light) sheet: Google Docs' pale yellow, and
     a deeper one for the thread the comments panel is on (editor.css
     \`.doc-comment-mark\`). The same in both modes — the paper does not change. */
  --doc-comment: oklch(0.95 0.07 95);
  --doc-comment-active: oklch(0.88 0.14 88);
  --video-frame: oklch(0.09 0.012 258);

  /* ── Chart ring: starts at the brand gold; the other hues are identity. ─ */
  --chart-1: oklch(0.8059 0.122 82.8);
  --chart-2: oklch(0.72 0.17 150);
  --chart-3: oklch(0.68 0.19 25);
  --chart-4: oklch(0.72 0.13 230);
  --chart-5: oklch(0.7 0.16 320);
  --chart-6: oklch(0.76 0.15 55);
  --chart-7: oklch(0.74 0.12 200);

  /* ── SHELL BACKDROP + AVATAR STYLE ────────────────────────────────────── */
  /* No image, honeycomb tile or glows: the hex field (below) is this theme's
     backdrop, drawn by ThemeBackdrop in a later part. */
  --theme-bg-image: none;
  --theme-bg-pattern: none;
  --theme-bg-pattern-mask: none;
  --theme-bg-glow-1: none;
  --theme-bg-glow-2: none;
  --theme-bg-scrim: oklch(0 0 0 / 0);
  --theme-bg-animate: 1;
  /* THE HEXAGON FACE (FIX(hivez-hex-avatar-redesign), index.css): the same
     pointy-top rounded hexagon, gold ring and glow as Hivez, drawn by the SVG
     filter \`AvatarShapeDefs\` renders for this theme + scheme. The three mask
     images are generated by ../../lib/ui/avatarShape.ts
     (\`cssUrl(HEX_SHAPE_URI)\`, \`cssUrl(HEX_FRAME_RING_URI)\`) and pinned by
     its test — the same path the 2D floor chip and the mini-map trace. */
  --avatar-shape: hexagon;
  --avatar-radius: 50% / 28.87%;
  /* FIX(avatar-ring-lobby-office-only): owner 10-07 — gold hex ring only in the lobby + office. Before: every Hivez face ringed unless scoped .avatar-plain. After: plain by default; .avatar-ring scope on Lobby + OfficeView. */
  --avatar-filter: url(#rd-avatar-hex-plain-funkyglass-dark);  /* DEFAULT face filter: hexagon + card-coloured separator, no gold ring/glow */
  --avatar-filter-plain: url(#rd-avatar-hex-plain-funkyglass-dark);  /* same plain filter — the explicit \`.avatar-plain\` scope */
  --avatar-filter-ring: url(#rd-avatar-hex-funkyglass-dark);  /* gold ring + glow — applied only inside an \`.avatar-ring\` scope (lobby + office) */
  --avatar-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/svg%3E");
  --avatar-frame-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3CclipPath id='c'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23c)' fill='none' stroke='black'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke-width='4' vector-effect='non-scaling-stroke'/%3E%3C/g%3E%3C/svg%3E");
  --avatar-glow-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-25 -25 150 150' preserveAspectRatio='none'%3E%3Cfilter id='b' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3C/filter%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke='black' stroke-width='20' stroke-linejoin='round' filter='url(%23b)'/%3E%3C/svg%3E");
  --avatar-ring-width: 2px;
  --avatar-ring-color: oklch(0.876 0.1235 90.6);   /* #F5D371 */
  --avatar-ring-color-2: oklch(0.6732 0.1364 73.2); /* gold deep #C8871A */
  --avatar-glow-color: oklch(0.8059 0.122 82.8 / 0.55);
  --avatar-away-color: oklch(0.6891 0.0063 264.5);  /* #999B9F, cool grey — the 2D floor chip's away/inactive status ring (FIX(hivez-floor-status-ring)) */
  --avatar-focus-color: var(--danger);        /* the focus (do-not-disturb) status ring, 2D floor + Web view (FIX(hivez-floor-status-ring)) */
  --canvas-dots-ink: oklch(0.8059 0.122 82.8 / 0.1);

  /* THE "EPIC" RING (own-room card, Web view — \`epic-border\` in \`../../index.css\`).
     Hivez's warm ramp: gold → amber → cream → white-gold (the mock's --epic-*). */
  --epic-1: oklch(0.88 0.16 90);  /* gold */
  --epic-2: oklch(0.72 0.17 65);  /* amber */
  --epic-3: oklch(0.95 0.04 85);  /* cream */
  --epic-4: oklch(0.9 0.07 92);   /* white-gold */

  /* LIVE-MEETING SWEEP CORE (Web view room card — \`meeting-sweep\` in
     \`../../index.css\`). The bright centre of the travelling light band; the
     band's flanks use --brand. */
  --meeting-sweep-core: var(--brand-light);

  /* MOTION (docs/audits/MOTION_AUDIT_2026-09.md, "Tokens"). Durations + easings for
     every open / close / move in the app — a theme retunes its PERSONALITY
     here, the same reason radius and glass live in this file. The JS mirror is
     \`DURATION\` / \`EASING\` in ../../lib/ui/motion.ts (a parity test pins the
     two). \`../../index.css\` shortens them under \`prefers-reduced-motion\`.
     Same values in both modes. Every value below inherits light. */
  --motion-duration-fast: 120ms;        /* fades, tooltips, swap cross-fade, backdrop */
  --motion-duration-base: 180ms;        /* popovers, menus, ORIGIN-SCALE, FADE-ONLY windows */
  --motion-duration-slow: 260ms;        /* SLIDE (panes, gallery), docks, highlights */
  --motion-duration-drawer: 240ms;      /* edge drawers */
  --motion-duration-layout: 240ms;      /* LAYOUT: FLIP reflow, width/height transitions */
  --motion-duration-emphasized: 320ms;  /* CONTAINER TRANSFORM enter */
  --motion-duration-exit: 200ms;        /* CONTAINER TRANSFORM / window close */
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-decelerate: cubic-bezier(0, 0, 0, 1);
  --motion-ease-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --motion-ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --motion-ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* DRIVE REDESIGN TOKENS (Figma uFV24QMoKxFW5zFCYjv6aC, section "Drive" 2121:114008,
     2026-11-08). Only the Drive values with no close existing token; every other
     Drive colour maps onto the shared set (see the Drive token map). Utilities:
     bg-drive-card, bg-drive-subtle, bg-drive-chip, bg-drive-scrim, bg-drive-media,
     bg-drive-media-badge, shadow-drive-page / -menu / -sheet / -dialog / -toast /
     -segment / -brand. */
  --drive-surface-card: oklch(0.2008 0.0124 270.7);
  --drive-surface-subtle: oklch(1 0 0 / 0.04);
  --drive-surface-chip: oklch(1 0 0 / 0.08);
  --drive-scrim: oklch(0 0 0 / 0.6);
  --drive-media: oklch(0.09 0.012 258);
  --drive-media-badge: oklch(0 0 0 / 0.6);
  --drive-elevation-page: 0 8px 24px -4px oklch(0 0 0 / 0.45), 0 1px 2px oklch(0 0 0 / 0.4);
  --drive-elevation-menu: 0 12px 32px -6px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.08);
  --drive-elevation-sheet: 0 12px 32px -6px oklch(0 0 0 / 0.6), 0 2px 4px oklch(0 0 0 / 0.4);
  --drive-elevation-dialog: 0 2px 4px oklch(0 0 0 / 0.5);
  --drive-elevation-toast: 0 12px 16px -4px oklch(0 0 0 / 0.5);
  --drive-elevation-segment: 0 0 2px oklch(0 0 0 / 0.5);
  --drive-elevation-brand: 0 0 24px oklch(0.8059 0.122 82.8 / 0.3);

  /* ── FUNKY GLASS materials / hex field ─────────────────────────────────────
     The blur + saturation each glass material is drawn through, the specular
     highlight on its edge and the diagonal sheen across it, the page plate
     (the thick-glass sheet an inner page's content sits on), and the hex
     field behind everything: resting line colour, the travelling glow's
     colour, a vignette toward the ground, and the sweep's period. Values are
     the mock's (docs/modules/themes/funky-glass-mock.html). The glass
     utilities in index.css read the filters, highlight, sheen and plate; the
     hex-field tokens are read by a later part. Remote Desk and Hivez declare
     them OFF. The plate's inset and radius are the gutter and corner of the
     sheet; \`--page-plate-solid\` is the plate composited over the ground (so
     \`bg-background\` pieces inside the plate blend with it). */
  --glass-filter-thin: blur(26px) saturate(180%);
  --glass-filter-thick: blur(40px) saturate(180%);
  --glass-highlight: oklch(1 0 0 / 0.34);
  --glass-rim: oklch(1 0 0 / 0.12);            /* the faint lit edge on the sides and bottom (the top is --glass-highlight) */
  --glass-sheen: linear-gradient(135deg, oklch(1 0 0 / 0.12) 0%, oklch(1 0 0 / 0.03) 30%, oklch(1 0 0 / 0) 55%);
  --glass-filter-float: blur(44px) saturate(180%);
  --glass-float: oklch(0.2008 0.0124 270.7 / 0.8);  /* floating panels (glass-float): more body than the plate, arbitrary content sits behind */
  --glass-filter-bar: blur(32px) saturate(180%);
  --glass-bar: oklch(0.1919 0.0126 270.7 / 0.62);  /* floating chrome inside a page (glass-bar) */
  /* PLATE-SCOPE TINTS: what --card / --muted / --accent / --segmented-track become INSIDE the plated page and
     inside a glass-float (index.css, glass-tints): faint tints, no blur, separated by hairlines. */
  --plate-tile: oklch(1 0 0 / 0.05);
  --plate-well: oklch(1 0 0 / 0.07);
  --plate-hover: oklch(1 0 0 / 0.1);
  --plate-track: oklch(0 0 0 / 0.22);
  --page-plate: oklch(0.1919 0.0126 270.7 / 0.36);   /* thick glass rgb(18 20 26 / 0.36) */
  --page-plate-edge: oklch(1 0 0 / 0.12);
  --page-plate-radius: 24px;
  --page-plate-solid: oklch(0.1593 0.0111 268);       /* the plate composited over the ground: rgb(11 13 18) */
  --theme-bg-hex-line: oklch(0.8407 0.1213 84.1 / 0.045); /* glow gold rgb(240 196 104) at 4.5 % */
  --theme-bg-hex-glow: oklch(0.8407 0.1213 84.1 / 0.75);   /* glow gold at 75 %. FIX(glass-overhaul-glow): Before: 60 % (cut from the mock's 90 % because text under the band fell to 3:1 over thin glass). After: 75 % over CLEAR thin glass; the owner relaxed the glow-peak gate to 4.5 / 3 (header), and 75 % holds it with a margin (thin glass: muted 3.41, label 3.25) */
  --theme-bg-vignette: radial-gradient(120% 90% at 55% 40%, oklch(0.1392 0.0097 261.8 / 0) 35%, oklch(0.1392 0.0097 261.8 / 0.75) 100%); /* to the ground #07090d */
  --sweep-duration: 14s;
}
`})),r,i=e((()=>{r=`/**
 * THEME "Funky Glass" (\`funkyglass\`), LIGHT mode — the daytime glass, and the
 * mode this theme opens in (\`preferredScheme: 'light'\` in \`../registry.ts\`).
 * It is the PRIMARY look: every value below is tuned for it, and
 * \`../__tests__/funkyglassContrast.test.ts\` gates it exactly as it gates dark.
 * What the theme is, which role tokens stay opaque and why: see \`./dark.css\`.
 *
 * By day: a warm paper ground (#f2efe9), near-black ink (#14171d), and
 * frosted-WHITE glass: thin white 26 %, thick white 42 %, FLOAT white 76 %
 * (dialogs, menus, popovers, toasts, docks) and BAR white 60 % (sticky headers and
 * toolbars in a page). FIX(glass-overhaul): the owner (2026-11-11) said the theme
 * did not read as glass. Before: thin white 50 %, thick 58 %, blur 18 / 28 px at
 * 170 %, floating panels solid. After: the fill carries little (a pale ground
 * needs almost none to hold text), the blur (26 / 40 / 44 / 32 px at 180 %), a
 * lit rim on all four edges and a stronger sheen carry the material. INSIDE the
 * plated page and a float, the tile, well, hover and track roles become faint
 * tints (\`--plate-*\`, \`glass-tints\` in index.css). Edges and hairlines are INK at low alpha (not
 * white), shadows are soft and WARM (honey-brown), and the glass edge catches a
 * near-white highlight. Gold appears where the design puts it: the metallic
 * filled actions (\`--brand-fill\`) with WHITE ink, the pale gold wash of selected
 * surfaces, and the hexagonal avatars' ring. The brand is a DEEP HONEY in the
 * mock's olive-leaning gold (hue 80), because bright gold as text on paper
 * measures under 2:1; focus is a deeper ink-honey (\`--ring\`) because the app
 * draws it at 50 % alpha. \`--rail-decoration\` is \`none\` (Hivez's value layers an
 * opaque chrome-coloured fade over a honeycomb, which would hide the glass).
 *
 * MEASURED CONTRAST (WCAG 2, \`../contrast.ts\`; asserted by
 * \`../__tests__/funkyglassContrast.test.ts\`, so these are gates, not notes).
 * Translucent surfaces are composited over the ground first (thin glass over the
 * ground; thick chrome over the ground; the inset / strong steps over thin glass
 * over the ground; a float or a bar over the ground, the plate, a white card or a
 * dark media frame (--video-frame)). "Under the glow band" adds the glow colour
 * at 0.3 × the token's alpha between ground and surface, the worst case at a
 * band's centre. AT-REST gates are unchanged by the overhaul; the transient
 * glow-peak gates are RELAXED by owner decision 2026-11-11 ("even at some cost
 * to contrast"): primary text 4.5, secondary / muted / label / status text 3.
 *   foreground / background · thin glass · chrome · plate ..... 15.64 · 16.22 · 16.59 · 16.59   (gate 7)
 *   muted-foreground / card · thin · thick chrome ............. 6.69 · 6.05 · 6.18            (gate 4.5)
 *   label-muted / ground · thin · strong over thin ............ 5.46 · 5.66 · 5.90            (gate 4.5)
 *   brand-foreground / brand ...... 6.70      / every --brand-fill stop  ≥ 4.64               (gate 4.5)
 *   brand / background · card · thin glass ................... 6.01 · 6.89 · 6.23
 *   brand / accent · muted · secondary · segmented-track ..... 5.18 · 5.59 · 5.59 · 5.18
 *   brand-tint-foreground / tint 7.15   rail-foreground / rail 8.12 · / thick chrome 8.61   rail-accent 7.15
 *   status as text (success · warning-deep · danger · info):
 *     ground ....... 5.67 · 5.62 · 6.06 · 5.47    thin glass ... 5.88 · 5.83 · 6.28 · 5.67    card ... 6.51 · 6.45 · 6.95 · 6.28   (gate 4.5)
 *   THE SHEEN (first stop white 62 %, 30 % stop 14 %): foreground at the first stop 17.28 (gate 7); muted / label there
 *     6.44 · 6.03; every quiet ink at the 30 % stop ≥ 5.74 (gate 4.5)
 *   UNDER THE GLOW BAND (glow 90 %), foreground / muted-foreground / label-muted (gates 4.5 / 3 / 3):
 *     ground 12.41 · 4.63 · 4.33    thin 13.72 · 5.12 · 4.79    plate 14.57 · 5.43 · 5.09    chrome 14.57 · 5.43 · 5.09
 *     float 16.50 · 6.15 · 5.76    bar 15.57 · 5.81 · 5.43
 *   status under the glow band, ground (gate 3) · thin glass · plate:
 *     success 4.50 · 4.98 · 5.28   warning-deep 4.46 · 4.93 · 5.24   danger 4.81 · 5.32 · 5.65   info 4.34 · 4.80 · 5.10
 *   A FLOAT (glass-float, white 76 %) over: ground · plate · white card · dark frame, foreground / muted / label:
 *     17.38 · 6.48 · 6.06    17.61 · 6.57 · 6.15    17.95 · 6.69 · 6.26    10.74 · 4.01 · 3.75 (the extreme: gate 4.5 / 3)
 *   A BAR (glass-bar, white 60 %) over: ground · plate · white card: foreground / muted / label:
 *     17.00 · 6.34 · 5.93    17.39 · 6.49 · 6.07    17.95 · 6.69 · 6.26      over a dark frame: foreground 7.16 only (gate 4.5)
 *   PLATE-SCOPE TINTS over the plate, worst ink at rest · under the band (gates 4.5 · 3):
 *     tile 6.12 · 5.89   well 5.24 · 4.61   hover 4.93 · 4.34   track 4.93 · 4.34
 *   label-muted, text-subtle, success, danger, info on accent · muted · secondary · table-head · segmented-track · row hover:
 *     worst 4.71 · 5.08 · 5.08 · 4.89 · 4.71 · 4.96                                             (gate 4.5)
 *   Badge ink on its tint, over a card · over thin glass: warning 5.08 · 4.63   success 5.08 · 4.63
 *     danger 5.33 · 4.84   brand 7.15 · 7.15                                                    (gate 4.5)
 *   focus ring (--ring at 50 %) on ground · plate · thin · card ... 3.24 · 3.29 · 3.27 · 3.35    (gate 3)
 *   danger text on its own 20 % wash over a popover (destructive menu row) ... 4.72             (gate 4.5)
 *   success-foreground / success 6.51   warning-foreground / warning 6.45   info-foreground / info 6.28
 *   destructive-foreground / destructive 6.95                         (gate 4.5; status FILLS, not the card)
 *   danger-ink / danger · destructive 6.95 · 6.95                       (gate 4.5; text-danger-ink on the solid red fills)
 */

[data-theme='funkyglass'][data-scheme='light'] {
  color-scheme: light;
  --scheme: light;

  --radius: 0.75rem;

  /* The typeface, read by \`--font-sans\` (\`../../index.css\` \`@theme inline\`).
     Plus Jakarta Sans, as Hivez. Loaded in main.tsx via fontsource. */
  --font-theme: 'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;

  /* ── Core roles ─────────────────────────────────────────────────────────
     WARM paper neutrals (hue ≈ 85, the mock's #f2efe9 ground); cards are crisp
     white. Role colours are OPAQUE — see the header. */
  --background: oklch(0.9528 0.0086 84.6);     /* the mock's ground #f2efe9 */
  --foreground: oklch(0.2042 0.0129 264.2);    /* ink #14171d */
  --card: oklch(1 0 0);                        /* solid tile / panel / menu: white */
  --card-foreground: oklch(0.2042 0.0129 264.2);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.2042 0.0129 264.2);
  --primary: var(--brand);
  --primary-foreground: var(--brand-foreground);
  --secondary: oklch(0.9289 0.0116 84.6);      /* warm grey just below white #ebe7df */
  --secondary-foreground: oklch(0.2042 0.0129 264.2);
  --muted: oklch(0.9289 0.0116 84.6);          /* #ebe7df */
  --muted-foreground: oklch(0.4746 0.0034 264.5); /* ink at 68 % over the ground, flattened = #5b5c5e */
  --accent: oklch(0.9043 0.0129 86.8);         /* #e3dfd6 — one step above --muted for menu-item hover */
  --accent-foreground: oklch(0.2042 0.0129 264.2);
  --destructive: oklch(0.49 0.2 27.3);          /* a step deeper than the dark red, for white text (= --danger) */
  --destructive-foreground: oklch(1 0 0);      /* white on --destructive measures 6.95:1 (funkyglassContrast.test.ts) */
  /* INK-alpha hairlines (not white) — never honey. */
  --border: oklch(0.2042 0.0129 264.2 / 0.1);
  --input: oklch(0.2042 0.0129 264.2 / 0.14);  /* \`border-input\` (select triggers); the house Input draws \`border-default\` */
  --ring: oklch(0.22 0.035 80);                /* FIX(focus-ring-contrast): Before: \`var(--brand)\`, and the app draws focus at 50 % alpha (\`ring-ring/50\`), only 2.2:1 on paper. After: an ink-honey, ≥ 3:1 at 50 % on every surface */

  --rail: oklch(0.9528 0.0086 84.6);           /* the ground; the rail is painted by --surface-chrome (thick glass) */
  --rail-foreground: oklch(0.3971 0.0057 258.3); /* ink at 78 % over the ground, flattened = #45474a */
  --rail-accent: oklch(0.968 0.025 89.2);      /* = --brand-tint */
  --rail-accent-foreground: var(--brand-deep);
  --rail-border: oklch(0.2042 0.0129 264.2 / 0.08);

  --scrollbar-thumb: oklch(0.2042 0.0129 264.2 / 0.18);
  --scrollbar-thumb-hover: oklch(0.2042 0.0129 264.2 / 0.32);

  /* ── Brand ────────────────────────────────────────────────────────────── */
  --brand: oklch(0.47 0.08 80);                /* deep honey, the mock's olive-leaning gold (hue 80) darkened until it reads as text on every light surface (incl. the #e3dfd6 hover / track steps: ≥ 5.1:1) */
  --brand-foreground: oklch(0.99 0.01 85);
  --brand-tint: oklch(0.968 0.025 89.2);       /* #FBF4E2 — the pale gold wash of selected / active surfaces */
  /* Honey on the pale tint is thin at chip sizes, so the ink is one step
     deeper (the same move Hivez and Remote Desk make). */
  --brand-tint-foreground: var(--brand-deep);
  --brand-light: oklch(0.54 0.1 82);
  --brand-ghost: oklch(0.47 0.08 80 / 0.06);
  --brand-subtle: oklch(0.47 0.08 80 / 0.16);
  /* THE METALLIC FILL, day edition — Hivez light's, unchanged: the fill carries
     WHITE ink, so no stop may be lighter than L 0.555; the sheen comes from
     DARKER bands. White ink is gated per stop by funkyglassContrast.test.ts.
     Remote Desk sets \`none\`. */
  --brand-fill: linear-gradient(
    135deg,
    oklch(0.555 0.095 84) 0%,
    oklch(0.52 0.09 80) 38%,
    oklch(0.555 0.093 87) 68%,
    oklch(0.5 0.087 79) 84%,
    oklch(0.44 0.078 77) 100%
  );

  /* ── Glass → TRANSLUCENT frosted white (unlike Hivez, whose glass is opaque).
       THIN glass ..... --surface-glass, white 26 % — interactive cards.
       THICK glass .... --surface-chrome, white 42 % — structural chrome (rail,
                        header, call controls).
       FLOAT / BAR .... --glass-float (white 76 %) and --glass-bar (white 60 %), below.
       Alpha glass stacks: --surface-glass-inset (white 28 %, glass ON glass) and
       --surface-glass-strong (white 40 %, hover / chip / badge).
       --scrim-glass is white at 72 % for the search palette's lightened, blurred
       scrim.
     FIX(chip-stays-solid): Before: nothing said why the chip token is not glass,
     and the obvious "make it glass too" would put a translucent chip over the
     2D / 3D WebGL office canvas, unreadable and under a blur that is not allowed
     there. After: --surface-chip stays SOLID white in both modes (the active-users
     pill, the view-mode and corner menus, the map overlay, the jump-to-latest
     pill and the A/V tiles all float over the canvas); where the theme backdrop is
     mounted the \`glass-chip\` utility swaps it for --surface-chrome on that element
     only. */
  --surface-glass: oklch(1 0 0 / 0.26);
  --surface-glass-strong: oklch(1 0 0 / 0.4);
  --surface-glass-inset: oklch(1 0 0 / 0.28);
  --surface-chrome: oklch(1 0 0 / 0.42);
  /* FIX(search-palette-scrim-glass): the search palette's scrim (\`scrim="glass"\`,
     dialog.tsx) wants a BLURRED, LIGHTENED page behind it: the panel colour
     (white) at ~72 % alpha. */
  --scrim-glass: oklch(1 0 0 / 0.72);
  --rail-decoration: none;
  --border-glass: oklch(0.2042 0.0129 264.2 / 0.09); /* the glass edge: ink at 9 % */
  --border-hairline: oklch(0.2042 0.0129 264.2 / 0.08);
  --elevation-glass-raised: 0 0 0 1px oklch(0.2042 0.0129 264.2 / 0.08), inset 0 0 4px oklch(1 0 0);

  --surface-raised: oklch(0.9796 0.0057 84.6); /* #faf8f4 */
  --surface-chip: oklch(1 0 0);                /* SOLID white, on purpose: FIX(chip-stays-solid) above */
  --surface-sunken: oklch(0.9289 0.0116 84.6); /* #ebe7df */
  /* Segmented tab switcher: recessed track + raised neutral thumb; thumb is clearly lighter than track. */
  --segmented-track: oklch(0.9043 0.0129 86.8); /* #e3dfd6 */
  --segmented-thumb: oklch(1 0 0);
  --border-strong: oklch(0.2042 0.0129 264.2 / 0.26); /* NEUTRAL; 0.26 reads on white so a checkbox/radio box shows */

  /* ── Text ladder ──────────────────────────────────────────────────────── */
  --label-muted: oklch(0.49 0.0034 264.5);     /* ink at ≈ 66 % over the ground (= --text-subtle); holds 4.5:1 on the hover / track steps and under the glow band */
  --text-subtle: oklch(0.49 0.0034 264.5);     /* = --label-muted */
  --avatar-channel: oklch(0.5 0.06 75);

  /* ── Status (Hivez light's) ───────────────────────────────────────────── */
  --success: oklch(0.46 0.15 150);             /* deep green — ≥ 4.5:1 as text on the hover / track steps and under the glow band */
  --success-tint: oklch(0.46 0.15 150 / 0.16);
  --success-surface: oklch(0.95 0.05 155);
  /* success-foreground: white on --success; a near-black ink drops below AA here. */
  --success-foreground: oklch(1 0 0);
  --destructive-tint: oklch(0.49 0.2 27.3 / 0.14);
  --info: oklch(0.5 0.2 262.9);                /* a deep blue, ≥ 4.6:1 as text on the hover / track steps */
  --info-tint: oklch(0.5 0.2 262.9 / 0.14);
  --info-foreground: oklch(1 0 0);
  --danger: oklch(0.49 0.2 27.3);               /* ≥ 4.5:1 as text on the hover / track steps and as \`bg-danger/20\` focus wash text */
  --danger-tint: oklch(0.49 0.2 27.3 / 0.14);
  /* FIX(danger-ink): ink on a SOLID --danger / --destructive fill (\`text-danger-ink\`).
     Before: a hard-coded \`text-white\`. After: the same white, now a token so the dark mode can differ; white
     measures 6.95:1 on this deeper red (gated on both fills in funkyglassContrast.test.ts). */
  --danger-ink: oklch(1 0 0);
  --warning: oklch(0.49 0.12 66);               /* FIX(badge-warning-contrast): Before: oklch(0.62 0.15 70), 3.1:1 as \`Badge\` text on its tint. After: deep amber (= --warning-deep) with white --warning-foreground */
  --warning-tint: oklch(0.49 0.12 66 / 0.16);
  --warning-deep: oklch(0.49 0.12 66);
  /* warning-foreground: white on the deep amber (near-black ink would drop to 3:1). */
  --warning-foreground: oklch(1 0 0);
  --presence: oklch(0.627 0.17 149.2);         /* #16A34A */

  --label-soft: oklch(0.49 0.0034 264.5);
  --text-disabled: oklch(0.2042 0.0129 264.2 / 0.42);
  --icon: var(--foreground);
  --icon-muted: var(--muted-foreground);
  --border-light: oklch(1 0 0 / 0.4);
  --surface-tint: oklch(0.2042 0.0129 264.2 / 0.05);
  --ledger-stripe: oklch(0 0 0 / 0.03); /* FIX(ledger-zebra-tokens): zebra row fill, a translucent wash so the step holds on any host */
  --ledger-hover: oklch(0 0 0 / 0.07);
  --table-head: oklch(0.9165 0.0128 86.8); /* opaque table/list header band #e7e3da — never translucent: it sits on the hex field */
  --scrim: oklch(0.2042 0.0129 264.2 / 0.3);
  --border-default: oklch(0.2042 0.0129 264.2 / 0.1); /* the NEUTRAL hairline */
  --border-subtle: oklch(0.2042 0.0129 264.2 / 0.07);
  --brand-deep: oklch(0.44 0.075 80);          /* the brand, one step deeper */

  /* ── Elevation: soft WARM shadows by day (honey-brown rgb(72 56 20), the
     mock's); only the brand glow is gold. ───────────────────────────────── */
  --elevation-brand: 0 6px 14px oklch(0.47 0.08 80 / 0.28);
  --elevation-panel: 0 12px 32px -16px oklch(0.3501 0.0564 85 / 0.3); /* the mock's --glass-shadow */
  --elevation-overlay: 0 18px 44px -8px oklch(0.3501 0.0564 85 / 0.22);
  --elevation-overlay-strong: 0 24px 60px -10px oklch(0.3501 0.0564 85 / 0.26);
  --elevation-danger-glow:
    0 0 0 3px oklch(0.49 0.2 27.3 / 0.3), 0 0 10px 2px oklch(0.49 0.2 27.3 / 0.45);
  --elevation-raised: 0 0 0 1px oklch(0.2042 0.0129 264.2 / 0.1), inset 0 0 4px oklch(1 0 0);
  --elevation-flat: 0 1px 2px oklch(0.3501 0.0564 85 / 0.1);

  --shell-backdrop: none;

  /* ── Document kinds — identity data, kept as Remote Desk's hues. ───────── */
  /* FIX(kind-ink-contrast): the --kind-* hues are tuned so the white --kind-ink mark clears 3:1. */
  --kind-page: var(--brand);
  --kind-document: var(--info);
  --kind-sheet: var(--success);
  --kind-slides: var(--warning);
  --kind-markdown: oklch(0.606 0.216 292.7);
  --kind-text: var(--label-soft);
  --kind-tint-alpha: 0.16;

  --kind-folder: var(--brand);
  --kind-pdf: var(--danger);
  --kind-image: oklch(0.656 0.241 354.3);
  --kind-video: var(--kind-markdown);
  --kind-audio: oklch(0.64 0.14 237.3);
  --kind-archive: oklch(0.551 0.023 264.4);
  --kind-code: oklch(0.58 0 0);
  --kind-other: oklch(0.58 0 0);
  /* The mark drawn ON a kind hue (KindGlyph): near-white. It reads on every hue because the
     hues above are tuned to clear 3:1 against it (FIX(kind-ink-contrast)). */
  --kind-ink: oklch(0.99 0 0);

  --fc-brand: var(--brand);
  --fc-green: oklch(0.696 0.17 162.48);   /* #10B981, Figma New folder swatch 3 */
  --fc-amber: var(--warning);
  --fc-sky: var(--info);
  --fc-violet: var(--kind-markdown);
  --fc-pink: var(--kind-image);
  --fc-rose: var(--danger);
  --fc-grey: oklch(0.551 0.027 264.364);  /* #6B7280, Figma New folder swatch 6 */

  --doc-canvas: oklch(0.9043 0.0129 86.8);     /* #e3dfd6 */
  --doc-page: oklch(1 0 0);
  --doc-page-ink: oklch(0.2042 0.0129 264.2);
  /* Links ON THE PAPER (Google Docs' #1155CC): the page is paper-light in both
     schemes, so one blue reads at >= 5.9:1 on every page colour we ship. */
  --doc-page-link: oklch(0.488 0.196 261.2);
  /* A commented run on the (always light) sheet: Google Docs' pale yellow, and
     a deeper one for the thread the comments panel is on (editor.css
     \`.doc-comment-mark\`). The same in both modes — the paper does not change. */
  --doc-comment: oklch(0.95 0.07 95);
  --doc-comment-active: oklch(0.88 0.14 88);
  --video-frame: oklch(0.22 0.012 260);

  /* ── Chart ring: starts at the brand gold; the other hues are identity. ─ */
  --chart-1: oklch(0.68 0.13 80);
  --chart-2: oklch(0.62 0.17 150);
  --chart-3: oklch(0.6 0.2 25);
  --chart-4: oklch(0.62 0.13 230);
  --chart-5: oklch(0.6 0.17 320);
  --chart-6: oklch(0.68 0.15 55);
  --chart-7: oklch(0.64 0.12 200);

  /* ── SHELL BACKDROP + AVATAR STYLE ────────────────────────────────────── */
  /* No image, honeycomb tile or glows: the hex field (below) is this theme's
     backdrop, drawn by ThemeBackdrop in a later part. */
  --theme-bg-image: none;
  --theme-bg-pattern: none;
  --theme-bg-pattern-mask: none;
  --theme-bg-glow-1: none;
  --theme-bg-glow-2: none;
  --theme-bg-scrim: oklch(1 0 0 / 0);
  --theme-bg-animate: 1;
  /* THE HEXAGON FACE (FIX(hivez-hex-avatar-redesign), index.css): the same
     pointy-top rounded hexagon, gold ring and glow as Hivez, drawn by the SVG
     filter \`AvatarShapeDefs\` renders for this theme + scheme. The three mask
     images are generated by ../../lib/ui/avatarShape.ts
     (\`cssUrl(HEX_SHAPE_URI)\`, \`cssUrl(HEX_FRAME_RING_URI)\`) and pinned by
     its test — the same path the 2D floor chip and the mini-map trace. */
  --avatar-shape: hexagon;
  --avatar-radius: 50% / 28.87%;
  /* FIX(avatar-ring-lobby-office-only): owner 10-07 — gold hex ring only in the lobby + office. Before: every Hivez face ringed unless scoped .avatar-plain. After: plain by default; .avatar-ring scope on Lobby + OfficeView. */
  --avatar-filter: url(#rd-avatar-hex-plain-funkyglass-light);  /* DEFAULT face filter: hexagon + card-coloured separator, no gold ring/glow */
  --avatar-filter-plain: url(#rd-avatar-hex-plain-funkyglass-light);  /* same plain filter — the explicit \`.avatar-plain\` scope */
  --avatar-filter-ring: url(#rd-avatar-hex-funkyglass-light);  /* gold ring + glow — applied only inside an \`.avatar-ring\` scope (lobby + office) */
  --avatar-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/svg%3E");
  --avatar-frame-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3CclipPath id='c'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23c)' fill='none' stroke='black'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke-width='4' vector-effect='non-scaling-stroke'/%3E%3C/g%3E%3C/svg%3E");
  --avatar-glow-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-25 -25 150 150' preserveAspectRatio='none'%3E%3Cfilter id='b' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3C/filter%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke='black' stroke-width='20' stroke-linejoin='round' filter='url(%23b)'/%3E%3C/svg%3E");
  --avatar-ring-width: 2px;
  --avatar-ring-color: oklch(0.8059 0.122 82.8);  /* golden medium #E6B85C */
  --avatar-ring-color-2: oklch(0.47 0.08 80);    /* the brand honey */
  --avatar-glow-color: oklch(0.6732 0.1364 73.2 / 0.35);
  --avatar-away-color: oklch(0.6 0.012 262);    /* the 2D floor chip's away/inactive status ring (FIX(hivez-floor-status-ring)) */
  --avatar-focus-color: var(--danger);        /* the focus (do-not-disturb) status ring, 2D floor + Web view (FIX(hivez-floor-status-ring)) */
  --canvas-dots-ink: oklch(0.47 0.08 80 / 0.1);

  /* THE "EPIC" RING (own-room card, Web view — \`epic-border\` in \`../../index.css\`).
     Hivez's warm ramp: gold → amber → cream → white-gold. */
  --epic-1: oklch(0.82 0.15 85);  /* gold */
  --epic-2: oklch(0.62 0.16 65);  /* amber */
  --epic-3: oklch(0.94 0.04 85);  /* cream */
  --epic-4: oklch(0.9 0.06 88);   /* white-gold */

  /* LIVE-MEETING SWEEP CORE (Web view room card — \`meeting-sweep\` in
     \`../../index.css\`). The bright centre of the travelling light band; the
     band's flanks use --brand. */
  --meeting-sweep-core: var(--brand-light);

  /* MOTION (docs/audits/MOTION_AUDIT_2026-09.md, "Tokens"). Durations + easings for
     every open / close / move in the app — a theme retunes its PERSONALITY
     here, the same reason radius and glass live in this file. The JS mirror is
     \`DURATION\` / \`EASING\` in ../../lib/ui/motion.ts (a parity test pins the
     two). \`../../index.css\` shortens them under \`prefers-reduced-motion\`.
     Same values in both modes. */
  --motion-duration-fast: 120ms;        /* fades, tooltips, swap cross-fade, backdrop */
  --motion-duration-base: 180ms;        /* popovers, menus, ORIGIN-SCALE, FADE-ONLY windows */
  --motion-duration-slow: 260ms;        /* SLIDE (panes, gallery), docks, highlights */
  --motion-duration-drawer: 240ms;      /* edge drawers */
  --motion-duration-layout: 240ms;      /* LAYOUT: FLIP reflow, width/height transitions */
  --motion-duration-emphasized: 320ms;  /* CONTAINER TRANSFORM enter */
  --motion-duration-exit: 200ms;        /* CONTAINER TRANSFORM / window close */
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-decelerate: cubic-bezier(0, 0, 0, 1);
  --motion-ease-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --motion-ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --motion-ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* DRIVE REDESIGN TOKENS (Figma uFV24QMoKxFW5zFCYjv6aC, section "Drive" 2121:114008,
     2026-11-08). Only the Drive values with no close existing token; every other
     Drive colour maps onto the shared set (see the Drive token map). Utilities:
     bg-drive-card, bg-drive-subtle, bg-drive-chip, bg-drive-scrim, bg-drive-media,
     bg-drive-media-badge, shadow-drive-page / -menu / -sheet / -dialog / -toast /
     -segment / -brand. */
  --drive-surface-card: oklch(1 0 0);
  --drive-surface-subtle: oklch(0.2042 0.0129 264.2 / 0.04);
  --drive-surface-chip: oklch(0.2042 0.0129 264.2 / 0.07);
  --drive-scrim: oklch(0.2042 0.0129 264.2 / 0.32);
  --drive-media: oklch(0.22 0.012 260);
  --drive-media-badge: oklch(0 0 0 / 0.6);
  --drive-elevation-page: 0 8px 24px -4px oklch(0.3501 0.0564 85 / 0.1), 0 1px 2px oklch(0.3501 0.0564 85 / 0.08);
  --drive-elevation-menu: 0 12px 32px -6px oklch(0.3501 0.0564 85 / 0.2);
  --drive-elevation-sheet: 0 12px 32px -6px oklch(0.3501 0.0564 85 / 0.18), 0 2px 4px oklch(0.3501 0.0564 85 / 0.08);
  --drive-elevation-dialog: 0 2px 4px oklch(0.3501 0.0564 85 / 0.12);
  --drive-elevation-toast: 0 12px 16px -4px oklch(0.3501 0.0564 85 / 0.12);
  --drive-elevation-segment: 0 0 2px oklch(0.3501 0.0564 85 / 0.2);
  --drive-elevation-brand: 0 6px 14px oklch(0.47 0.08 80 / 0.28);

  /* ── FUNKY GLASS materials / hex field ─────────────────────────────────────
     See ./dark.css for what each token is. By day the highlight is a near-white
     rim, the sheen is brighter, the hex lines are the glow gold deepened
     (mixed 50 % toward black in oklch) at a higher alpha so they read on paper,
     and the travelling glow is deepened 20 %. The glass utilities read the
     filters, highlight, sheen and plate; the hex-field tokens are read by a
     later part. */
  --glass-filter-thin: blur(26px) saturate(180%);
  --glass-filter-thick: blur(40px) saturate(180%);
  --glass-highlight: oklch(1 0 0 / 1);
  --glass-rim: oklch(1 0 0 / 0.55);            /* the faint lit edge on the sides and bottom (the top is --glass-highlight) */
  --glass-sheen: linear-gradient(135deg, oklch(1 0 0 / 0.62) 0%, oklch(1 0 0 / 0.14) 30%, oklch(1 0 0 / 0) 55%);
  --glass-filter-float: blur(44px) saturate(180%);
  --glass-float: oklch(1 0 0 / 0.76);          /* floating panels (glass-float): more body than the plate, arbitrary content sits behind */
  --glass-filter-bar: blur(32px) saturate(180%);
  --glass-bar: oklch(1 0 0 / 0.6);             /* floating chrome inside a page (glass-bar) */
  /* PLATE-SCOPE TINTS: what --card / --muted / --accent / --segmented-track become INSIDE the plated page and
     inside a glass-float (index.css, glass-tints): faint tints, no blur, separated by hairlines. */
  --plate-tile: oklch(1 0 0 / 0.7);
  --plate-well: oklch(0.2042 0.0129 264.2 / 0.05);
  --plate-hover: oklch(0.2042 0.0129 264.2 / 0.08);
  --plate-track: oklch(0.2042 0.0129 264.2 / 0.08);
  --page-plate: oklch(1 0 0 / 0.42);           /* thick glass: white 42 % */
  --page-plate-edge: oklch(0.2042 0.0129 264.2 / 0.09); /* ink at 9 % */
  --page-plate-radius: 24px;
  --page-plate-solid: oklch(0.9728 0.0054 95.1);        /* the plate composited over the ground: rgb(247 246 242) */
  --theme-bg-hex-line: oklch(0.4204 0.0607 84.1 / 0.135); /* glow gold rgb(240 196 104) mixed 50 % toward black, at 13.5 % */
  --theme-bg-hex-glow: oklch(0.6726 0.097 84.1 / 0.9);    /* glow gold mixed 20 % toward black, at 90 %. FIX(glass-overhaul-glow): Before: 60 % (cut from the mock's 90 % because text under the band failed the old gates and gold blotched through 50 % white cards). After: the mock's 90 % again, over CLEAR 26 % glass; the owner relaxed the glow-peak gate to 4.5 / 3 and every peak ratio clears it by a wide margin (header) */
  --theme-bg-vignette: radial-gradient(120% 90% at 55% 40%, oklch(0.9528 0.0086 84.6 / 0) 35%, oklch(0.9528 0.0086 84.6 / 0.75) 100%); /* to the ground #f2efe9 */
  --sweep-duration: 14s;
}
`})),a,o=e((()=>{a=`/**
 * THEME "Hivez" (\`hivez\`), DARK mode — the reference look.
 *
 * WHAT HIVEZ IS. A black-and-gold honeycomb dashboard (owner direction
 * 2026-09-23; contract: docs/modules/themes/HIVEZ_THEME_SPEC.md). A COOL
 * blue-black canvas under a faint gold honeycomb and two soft gold glows,
 * neutral panels (white 4 %) and cards (white 8 %) on NEUTRAL white-alpha
 * hairlines, and gold kept for what the design makes gold: the metallic
 * filled actions (\`--brand-fill\`) with DARK ink, the gold-washed selected /
 * active surfaces, focus, and the hexagonal avatars' glowing ring. It is the
 * theme that proves the system: deliberately different from Remote Desk, not
 * a recolour.
 *
 * SOURCE (retune 2026-09-29): the owner's Figma "Hivez / Lobby" frame (dark
 * only). Its variables are authoritative — Black #01060E, Text #EDEDEF,
 * Muted #FAFAFA/72 %, Subtle #FAFAFA/58 %, greys "60 % flat" #999B9F and
 * "40 % flat" #676A6E, white overlays 4/8/40/60/80 %, golden medium #E6B85C,
 * gold deep #C8871A, green #22C55E, green light #36DA73, red #EF4444, blue
 * #3B82F6. The page ground under the content samples #04070D; panels
 * #0E1116 (= white 4 % over it), cards in panels #171A1F (white 8 %),
 * selected / active surfaces the warm gold wash #1E1B12 on a gold edge. The
 * rail and the header are SOLID Black #01060E, and every panel and card is
 * OPAQUE: the honeycomb shows only in the page gutters between panels
 * (strongest at the right edge / top corners), never through content.
 * Every hex below is converted to oklch exactly (round-trips to the same hex).
 * Before the retune the neutrals were WARM (hue 85) with GOLD hairlines.
 *
 * Unlike Remote Desk the BRAND is not shared across modes: bright gold is
 * unreadable as text on white, so \`./light.css\` uses a deep honey instead.
 *
 * COMPLETE BLOCK — the identical token-name set as every other theme file
 * (\`../__tests__/registry.test.ts\` enforces it across themes, not just within
 * one), because a \`<ThemeScope>\` preview puts this block on a div inside a page
 * wearing a different theme. The section order follows \`../remotedesk/\`.
 *
 * MEASURED CONTRAST (WCAG 2, \`../contrast.ts\`; asserted by
 * \`../__tests__/hivezContrast.test.ts\`, so these are gates, not notes):
 *   foreground / background ........ 17.26 : 1   (gate 7)
 *   muted-foreground / card ........  9.31 : 1   (gate 4.5)
 *   brand-foreground / brand ....... 11.00 : 1   (gate 4.5)
 *   brand-foreground / every --brand-fill stop  ≥ 6.71 : 1 (the deep corner; gate 4.5)
 *   brand / background ............. 10.93 : 1   (gate 4.5)
 *   brand / card ................... 10.24 : 1   (gate 4.5)
 *   brand-tint-foreground / tint ...  9.32 : 1   (gate 4.5)
 *   rail-foreground / rail .........  9.98 : 1   rail-accent-foreground / rail-accent  9.32 : 1
 *   success / card ..................  8.30 : 1   warning / card ...  9.89 : 1
 *   danger / card ...................  5.03 : 1   info / card ......  5.14 : 1
 *   success-foreground / success ...  8.92 : 1   warning-foreground / warning 10.63 : 1
 *   info-foreground / info .........  5.52 : 1   destructive-foreground / destructive 5.40 : 1
 *                                                  (gate 4.5 — status FILLS, not the card)
 */

[data-theme='hivez'][data-scheme='dark'] {
  color-scheme: dark;
  --scheme: dark;

  /* Cards read rounder than Remote Desk's 0.5rem in the reference (≈12px). */
  --radius: 0.75rem;

  --font-theme: 'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; /* inherits light */

  /* ── Core roles ─────────────────────────────────────────────────────────
     Neutrals are COOL blue-black (hue ≈ 260, the Figma frame's) — never the
     old warm brown-black. Role colours are OPAQUE: each is the colour the
     frame's white-overlay step produces over the page, flattened (the same
     architecture decision as \`../remotedesk/dark.css\` — the app stacks
     \`/NN\` opacity modifiers on role tokens, and an alpha value would compound). */
  --background: oklch(0.127 0.016 257.8);      /* the frame's page ground #04070D (Black #01060E + its own faint lift) */
  --foreground: oklch(0.9467 0.0027 286.3);    /* Text/Default #EDEDEF */
  --card: oklch(0.177 0.011 260.6);            /* panel = white 4 % over the ground = #0E1116 */
  --card-foreground: oklch(0.9467 0.0027 286.3);
  --popover: oklch(0.177 0.011 260.6);
  --popover-foreground: oklch(0.9467 0.0027 286.3);
  --primary: var(--brand);
  --primary-foreground: var(--brand-foreground);
  --secondary: oklch(0.217 0.011 260.7);       /* card inside a panel = white 8 % = #171A1F */
  --secondary-foreground: oklch(0.9467 0.0027 286.3);
  --muted: oklch(0.217 0.011 260.7);           /* #171A1F — the same inset step */
  --muted-foreground: oklch(0.776 0.003 264.5); /* Text/Muted #FAFAFA at 72 % over the ground = #B5B6B8 */
  --accent: oklch(0.255 0.01 260.7);           /* white 12 % = #202328 — one step above --muted for menu-item hover */
  --accent-foreground: oklch(0.9467 0.0027 286.3);
  --destructive: oklch(0.637 0.208 25.3);      /* red #EF4444 */
  --destructive-foreground: oklch(0.1186 0.0248 247.3); /* white fails on #EF4444 (3.76:1); Black ink measures 5.40:1 (hivezContrast.test.ts) */
  /* NEUTRAL hairlines — never gold (the pre-retune file drew every edge
     gold). The frame's panel/card edges are white 4–8 %, but at 6 % a field
     edge measured 1.15:1 on a card and the house Input vanished, so the
     working hairline is 10 % (1.29:1 on a card), matching --border-default. */
  --border: oklch(1 0 0 / 0.1);
  /* \`border-input\` — shadcn's field edge (select triggers, a few legacy
     fields), a step above the hairline. The house Input / Textarea draw
     \`border-default\` instead (components/ui/input.tsx). */
  --input: oklch(1 0 0 / 0.12);
  --ring: var(--brand);                        /* GOLD: focus stays the brand */

  /* The rail is the frame's Black; its active row is the gold wash with gold
     ink (the frame's "Lobby" row, #1E1B12 on a gold edge). */
  --rail: oklch(0.1186 0.0248 247.3);          /* Black #01060E */
  --rail-foreground: oklch(0.775 0.004 247.9); /* Text/Muted over the rail = #B4B6B8 */
  --rail-accent: oklch(0.2225 0.0172 91.8);    /* #1E1B12 */
  --rail-accent-foreground: var(--brand);
  --rail-border: oklch(1 0 0 / 0.06);          /* neutral, like every hairline */

  --scrollbar-thumb: oklch(1 0 0 / 0.14);
  --scrollbar-thumb-hover: oklch(1 0 0 / 0.24);

  /* ── Brand ────────────────────────────────────────────────────────────── */
  --brand: oklch(0.8059 0.122 82.8);           /* the frame's "golden medium" #E6B85C */
  --brand-foreground: oklch(0.1186 0.0248 247.3); /* Black #01060E — dark ink on gold */
  /* The warm gold wash of the frame's selected / active surfaces (active rail
     row #1E1B12, selected floor card and "Up next" #1C1B15, outline gold
     buttons #211C11), opaque. On a DARK wash gold ink is the readable choice
     (the owner's 2026-09-08 "white on brand washes" rule is about a navy
     wash; this one is near-black). */
  --brand-tint: oklch(0.2225 0.0172 91.8);     /* #1E1B12 */
  --brand-tint-foreground: var(--brand);
  --brand-light: oklch(0.876 0.1235 90.6);     /* #F5D371 — the metallic fill's warm highlight; hover step above the fill */
  --brand-ghost: oklch(0.8059 0.122 82.8 / 0.06);
  --brand-subtle: oklch(0.8059 0.122 82.8 / 0.16);
  /* THE METALLIC FILL — a background-IMAGE painted over \`bg-brand\` wherever the
     frame shows a filled gold (the selected "Enter", the rail's "New" pill, the
     active "All" chip): warm gold top-left → the pale cream highlight at
     ~68 % → gold deep in the bottom-right corner. Remote Desk sets \`none\`, so
     its flat \`bg-brand\` fill is untouched. Stops: #F0C35A · #F5D371 · #F6E9C3
     · #E6B85C · #C8871A. The dark ink (#01060E) reads ≥ 6.71:1 on every stop
     (the deep corner; 11.0–16.8 on the rest) — gated per stop by
     hivezContrast.test.ts. */
  --brand-fill: linear-gradient(
    135deg,
    oklch(0.8372 0.1324 85.9) 0%,
    oklch(0.876 0.1235 90.6) 38%,
    oklch(0.9348 0.0515 91.4) 68%,
    oklch(0.8059 0.122 82.8) 82%,
    oklch(0.6732 0.1364 73.2) 100%
  );

  /* ── Glass → the frame's white-overlay steps, FLATTENED to OPAQUE (owner
     call 2026-09-29). In the frame every panel and card is solid: the
     honeycomb appears only in the gutters between them. An alpha glass let
     the pattern (and the glows) show through every panel, card and field, so
     here — unlike Remote Desk, whose glass stays alpha — the steps are the
     colours the overlays produce over the ground:
       --surface-glass ........ panel, white 4 %  = #0E1116
       --surface-glass-inset .. glass ON glass (the frame's card-in-panel, the
                                floors-count pill, the activity list), white 8 % = #171A1F.
                                Opaque glass no longer stacks, so the nested
                                step is its own token (Remote Desk: = --surface-glass,
                                which stacks to the same effect there).
       --surface-glass-strong . the hover / chip / badge step, white 10 % = #1D2025.
                                One notch above the inset on purpose: it is
                                painted INSIDE inset cards and lists (the
                                "2 live" badge measures #212428 there, a row
                                hover in the activity list), where an 8 % step
                                would equal the inset and vanish; on the
                                chrome it reads close to the frame's #151A21 chips.
     --surface-chrome is the rail + header: SOLID Black, the page's own ground,
     so the honeycomb never shows through the chrome (Remote Desk: = its
     glass, as before). --rail-decoration is the frame's one piece of rail
     art — a large glowing honeycomb near the rail's foot, faded in and out by
     a chrome-coloured gradient laid over it (layer 1), with a soft gold glow
     under the lines (layer 2). Generated by ../patterns.ts —
     honeycombDataUri({ stroke: '#e6b85c', cell: 40, strokeWidth: 1, opacity: 0.45 });
     pinned by ../__tests__/patterns.test.ts. */
  --surface-glass: oklch(0.177 0.011 260.6);   /* #0E1116 */
  --surface-glass-strong: oklch(0.243 0.011 260.7); /* #1D2025 */
  --surface-glass-inset: oklch(0.217 0.011 260.7);  /* #171A1F */
  --surface-chrome: oklch(0.1186 0.0248 247.3);     /* Black #01060E */
  /* FIX(search-palette-scrim-glass): see light.css. \`--surface-glass\` here is
     also OPAQUE, so the search palette's \`scrim="glass"\` needs its own
     translucent value — the panel colour (\`--surface-glass\`) at 72% alpha. */
  --scrim-glass: oklch(0.177 0.011 260.6 / 0.72);
  --rail-decoration:
    linear-gradient(
      to bottom,
      oklch(0.1186 0.0248 247.3) 0%,
      oklch(0.1186 0.0248 247.3) 66%,
      oklch(0.1186 0.0248 247.3 / 0) 80%,
      oklch(0.1186 0.0248 247.3 / 0) 88%,
      oklch(0.1186 0.0248 247.3) 97%
    ),
    radial-gradient(70% 16% at 50% 84%, oklch(0.8059 0.122 82.8 / 0.12), transparent 70%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='69' height='120' viewBox='0 0 69.282 120' preserveAspectRatio='none'%3E%3Cg fill='none' stroke='%23e6b85c' stroke-width='1' opacity='0.45'%3E%3Cpath d='M0 -40L34.641 -20L34.641 20L0 40L-34.641 20L-34.641 -20ZM69.282 -40L103.923 -20L103.923 20L69.282 40L34.641 20L34.641 -20ZM34.641 20L69.282 40L69.282 80L34.641 100L0 80L0 40ZM0 80L34.641 100L34.641 140L0 160L-34.641 140L-34.641 100ZM69.282 80L103.923 100L103.923 140L69.282 160L34.641 140L34.641 100Z'/%3E%3C/g%3E%3C/svg%3E");
  --border-glass: oklch(1 0 0 / 0.06);
  --border-hairline: oklch(1 0 0 / 0.08);      /* in-card dividers */
  --elevation-glass-raised: 0 0 0 1px oklch(1 0 0 / 0.1), inset 0 0 4px oklch(1 0 0 / 0.06); /* neutral: its callers are generic lifted glass */

  --surface-raised: oklch(0.177 0.011 260.6);  /* #0E1116 */
  --surface-chip: oklch(0.177 0.011 260.6);    /* the header's icon chips = a panel */
  --surface-sunken: oklch(0.217 0.011 260.7);  /* #171A1F */
  /* Segmented tab switcher (owner call 2026-10-19): recessed track + raised neutral thumb; thumb is clearly lighter than track. */
  --segmented-track: oklch(0.15 0.013 259);
  --segmented-thumb: oklch(0.30 0.01 260.7);
  /* NEUTRAL: \`border-strong\` is the app's "stronger edge" (checkbox/radio
     boxes, section dividers), which the frame draws grey. Gold edges ride
     \`border-brand\` / \`--ring\` / the brand-tint surfaces instead. */
  --border-strong: oklch(1 0 0 / 0.16);

  /* ── Text ladder ──────────────────────────────────────────────────────── */
  --label-muted: oklch(0.6891 0.0063 264.5);   /* "60 % flat" #999B9F */
  --text-subtle: oklch(0.985 0 0 / 0.58);      /* Text/Subtle — #FAFAFA at 58 % */
  --avatar-channel: oklch(0.36 0.05 85);

  /* ── Status (the frame's variables) ───────────────────────────────────── */
  --success: oklch(0.723 0.192 149.6);         /* green #22C55E */
  --success-tint: oklch(0.723 0.192 149.6 / 0.16);
  --success-surface: oklch(0.723 0.192 149.6 / 0.16);
  /* success-foreground: the fills are BRIGHT here — white on --success measures
     only 2.28:1, so text on the solid fill takes the frame's Black ink, as
     gold-on-fill does; measured 8.92:1. */
  --success-foreground: oklch(0.1186 0.0248 247.3);
  --destructive-tint: oklch(0.637 0.208 25.3 / 0.12);
  --info: oklch(0.623 0.188 259.8);            /* blue #3B82F6 (the timeline accent bar) */
  --info-tint: oklch(0.623 0.188 259.8 / 0.12);
  /* info-foreground: white measures 3.68:1 on --info; Black ink measures
     5.52:1. */
  --info-foreground: oklch(0.1186 0.0248 247.3);
  --danger: oklch(0.637 0.208 25.3);           /* red #EF4444 */
  --danger-tint: oklch(0.637 0.208 25.3 / 0.12);
  /* Ink on a SOLID --danger / --destructive fill (\`text-danger-ink\`): pure white, exactly what the
     hard-coded \`text-white\` it replaced rendered, so this theme is pixel-identical to before. */
  --danger-ink: oklch(1 0 0);
  /* No amber variable on the frame — the pre-retune amber stays. */
  --warning: oklch(0.8 0.16 75);
  --warning-tint: oklch(0.8 0.16 75 / 0.12);
  --warning-deep: var(--warning);              /* on near-black the base amber already reads */
  /* warning-foreground: white measures 1.91:1 on --warning; Black ink
     measures 10.63:1. */
  --warning-foreground: oklch(0.1186 0.0248 247.3);
  --presence: oklch(0.7837 0.1949 150.7);      /* green light #36DA73 — presence / live dots */

  --label-soft: oklch(0.6891 0.0063 264.5);    /* #999B9F */
  --text-disabled: oklch(0.985 0 0 / 0.4);     /* white 40 % = the frame's "40 % flat" #676A6E over the ground */
  --icon: var(--foreground);
  --icon-muted: var(--muted-foreground);
  --border-light: oklch(1 0 0 / 0.12);
  --surface-tint: oklch(1 0 0 / 0.08);         /* inverted: a black wash is invisible on near-black */
  --ledger-stripe: oklch(1 0 0 / 0.05); /* FIX(ledger-zebra-tokens): zebra row fill, a translucent wash so the step holds on any host */
  --ledger-hover: oklch(1 0 0 / 0.10);
  --table-head: oklch(0.22 0.011 260.7); /* opaque table/list header band — never translucent: it sits on the honeycomb canvas */
  --scrim: oklch(0 0 0 / 0.6);
  --border-default: oklch(1 0 0 / 0.1);        /* the NEUTRAL hairline — also the house Input's edge: 1.29:1 on a card (was 6 % = 1.15:1, invisible) */
  --border-subtle: oklch(1 0 0 / 0.08);
  --brand-deep: oklch(0.6732 0.1364 73.2);     /* "gold deep" #C8871A — the filled button's 1px edge */

  /* ── Elevation → GLOW. Shadows vanish on near-black; Hivez lifts with light.
     Only the BRAND glow is gold (the filled gold actions); every other lift is
     neutral, like the hairlines. */
  --elevation-brand: 0 0 24px oklch(0.8059 0.122 82.8 / 0.3);
  --elevation-panel: 0 10px 26px oklch(0 0 0 / 0.45);
  --elevation-overlay: 0 18px 44px -8px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.08);
  --elevation-overlay-strong: 0 24px 60px -10px oklch(0 0 0 / 0.7), 0 0 0 1px oklch(1 0 0 / 0.1);
  --elevation-danger-glow:
    0 0 0 3px oklch(0.637 0.208 25.3 / 0.35), 0 0 10px 2px oklch(0.637 0.208 25.3 / 0.5);
  /* Neutral: its callers are floating pills, switch/slider knobs, canvas
     cards — none of them gold on the frame. */
  --elevation-raised: 0 0 0 1px oklch(1 0 0 / 0.08), inset 0 0 4px oklch(1 0 0 / 0.06);
  --elevation-flat: 0 1px 2px oklch(0 0 0 / 0.4);

  /* The old per-page wash. The ThemeBackdrop's glows replace it. */
  --shell-backdrop: none;

  /* ── Document kinds — identity data, kept as Remote Desk's hues. ───────── */
  /* FIX(kind-ink-contrast): the --kind-* hues are tuned so the white --kind-ink mark clears 3:1. */
  --kind-page: oklch(0.65 0.12 80);
  --kind-document: var(--info);
  --kind-sheet: oklch(0.63 0.17 150);
  --kind-slides: oklch(0.65 0.135 75);
  --kind-markdown: oklch(0.66 0.18 293);
  --kind-text: oklch(0.64 0.006 264.5);
  --kind-tint-alpha: 0.08;

  /* ── File kinds — as Remote Desk's dark block. ─────────────────────────── */
  --kind-folder: var(--brand);
  --kind-pdf: var(--danger);
  --kind-image: oklch(0.656 0.241 354.3);
  --kind-video: var(--kind-markdown);
  --kind-audio: oklch(0.64 0.14 237.3);
  --kind-archive: oklch(0.551 0.023 264.4);
  --kind-code: oklch(0.64 0 0);
  --kind-other: oklch(0.64 0 0);
  /* The mark drawn ON a kind hue (KindGlyph): near-white. It reads on every hue because the
     hues above are tuned to clear 3:1 against it (FIX(kind-ink-contrast)). */
  --kind-ink: oklch(0.985 0 0);

  --fc-brand: var(--brand);
  --fc-green: oklch(0.765 0.177 163.22);  /* emerald, lifted for the dark canvas */
  --fc-amber: var(--warning);
  --fc-sky: var(--info);
  --fc-violet: var(--kind-markdown);
  --fc-pink: var(--kind-image);
  --fc-rose: var(--danger);
  --fc-grey: oklch(0.707 0.022 261.33);   /* cool grey, lifted for the dark canvas */

  /* The printable sheet stays light on purpose (see Remote Desk's light block). */
  --doc-canvas: oklch(0.177 0.011 260.6);      /* a panel */
  --doc-page: oklch(0.975 0.003 260);
  --doc-page-ink: oklch(0.177 0.011 260.6);
  /* Links ON THE PAPER (Google Docs' #1155CC): the page is paper-light in both
     schemes, so one blue reads at >= 5.9:1 on every page colour we ship. */
  --doc-page-link: oklch(0.488 0.196 261.2);
  /* A commented run on the (always light) sheet: Google Docs' pale yellow, and
     a deeper one for the thread the comments panel is on (editor.css
     \`.doc-comment-mark\`). The same in both modes — the paper does not change. */
  --doc-comment: oklch(0.95 0.07 95);
  --doc-comment-active: oklch(0.88 0.14 88);
  --video-frame: oklch(0.09 0.012 258);

  /* ── Chart ring: starts at the brand gold; the other hues are identity. ─ */
  --chart-1: oklch(0.8059 0.122 82.8);
  --chart-2: oklch(0.72 0.17 150);
  --chart-3: oklch(0.68 0.19 25);
  --chart-4: oklch(0.72 0.13 230);
  --chart-5: oklch(0.7 0.16 320);
  --chart-6: oklch(0.76 0.15 55);
  --chart-7: oklch(0.74 0.12 200);

  /* ── SHELL BACKDROP + AVATAR STYLE ────────────────────────────────────── */
  --theme-bg-image: none;                      /* no licensed image yet */
  /* generated by ../patterns.ts — honeycombDataUri({ stroke: '#e6b85c', cell: 8, strokeWidth: 1, opacity: 0.16 })
     (#e6b85c = the brand gold; a fine R=8px pointy-top lattice, matching the
     Figma lobby render's honeycomb scale — owner call 2026-09-29, replacing
     the earlier R=48 pattern). Pinned by ../__tests__/patterns.test.ts. */
  --theme-bg-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='24' viewBox='0 0 13.856 24' preserveAspectRatio='none'%3E%3Cg fill='none' stroke='%23e6b85c' stroke-width='1' opacity='0.16'%3E%3Cpath d='M0 -8L6.928 -4L6.928 4L0 8L-6.928 4L-6.928 -4ZM13.856 -8L20.785 -4L20.785 4L13.856 8L6.928 4L6.928 -4ZM6.928 4L13.856 8L13.856 16L6.928 20L0 16L0 8ZM0 16L6.928 20L6.928 28L0 32L-6.928 28L-6.928 20ZM13.856 16L20.785 20L20.785 28L13.856 32L6.928 28L6.928 20Z'/%3E%3C/g%3E%3C/svg%3E");
  /* Fades the pattern layer only (never the glows/image — index.css applies
     this to \`.theme-backdrop__pattern\`, a layer split from \`__base\` just for
     this): strong along the right edge + the two right-hand corners, barely
     there toward the centre (the flat last stop keeps ~15 % of the pattern —
     was ~40 %, which read across the whole page), matching the Figma lobby
     render. Panels are opaque, so the pattern only ever shows in the gutters.
     Mask gradients are alpha-only, so the \`#000…\` literals paint no colour. */
  --theme-bg-pattern-mask:
    radial-gradient(ellipse at 100% 0%, #000 0%, transparent 55%),
    radial-gradient(ellipse at 100% 100%, #000 0%, transparent 50%),
    radial-gradient(ellipse at 0% 0%, #000 0%, transparent 40%),
    linear-gradient(#00000026, #00000026);
  --theme-bg-glow-1: radial-gradient(640px 480px at 92% 8%, oklch(0.8059 0.122 82.8 / 0.22), transparent 70%);
  --theme-bg-glow-2: radial-gradient(520px 400px at 88% 96%, oklch(0.8059 0.122 82.8 / 0.16), transparent 70%);
  --theme-bg-scrim: oklch(0 0 0 / 0);
  --theme-bg-animate: 1;
  /* THE HEXAGON FACE (FIX(hivez-hex-avatar-redesign), index.css): a pointy-top
     hexagon with softly rounded vertices, a gold ring \`max(1.5px, 5.5%)\` of
     the face wide running light (top) → deep (bottom), and a soft glow — drawn
     by the SVG filter \`AvatarShapeDefs\` renders for this theme + scheme. The
     two mask images are generated by ../../lib/ui/avatarShape.ts
     (\`cssUrl(HEX_SHAPE_URI)\`, \`cssUrl(HEX_FRAME_RING_URI)\`) and pinned by
     its test — the same path the 2D floor chip and the mini-map trace. */
  --avatar-shape: hexagon;
  --avatar-radius: 50% / 28.87%;
  /* FIX(avatar-ring-lobby-office-only): owner 10-07 — gold hex ring only in the lobby + office. Before: every Hivez face ringed unless scoped .avatar-plain. After: plain by default; .avatar-ring scope on Lobby + OfficeView. */
  --avatar-filter: url(#rd-avatar-hex-plain-hivez-dark);  /* DEFAULT face filter: hexagon + card-coloured separator, no gold ring/glow */
  --avatar-filter-plain: url(#rd-avatar-hex-plain-hivez-dark);  /* same plain filter — the explicit \`.avatar-plain\` scope */
  --avatar-filter-ring: url(#rd-avatar-hex-hivez-dark);  /* gold ring + glow — applied only inside an \`.avatar-ring\` scope (lobby + office) */
  --avatar-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/svg%3E");
  --avatar-frame-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3CclipPath id='c'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23c)' fill='none' stroke='black'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke-width='4' vector-effect='non-scaling-stroke'/%3E%3C/g%3E%3C/svg%3E");
  --avatar-glow-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-25 -25 150 150' preserveAspectRatio='none'%3E%3Cfilter id='b' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3C/filter%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke='black' stroke-width='20' stroke-linejoin='round' filter='url(%23b)'/%3E%3C/svg%3E");
  --avatar-ring-width: 2px;
  --avatar-ring-color: oklch(0.876 0.1235 90.6);   /* #F5D371 */
  --avatar-ring-color-2: oklch(0.6732 0.1364 73.2); /* gold deep #C8871A */
  --avatar-glow-color: oklch(0.8059 0.122 82.8 / 0.55);
  --avatar-away-color: oklch(0.6891 0.0063 264.5);  /* #999B9F, cool grey — the 2D floor chip's away/inactive status ring (FIX(hivez-floor-status-ring)) */
  --avatar-focus-color: var(--danger);        /* the focus (do-not-disturb) status ring, 2D floor + Web view (FIX(hivez-floor-status-ring)) */
  --canvas-dots-ink: oklch(0.8059 0.122 82.8 / 0.1);

  /* THE "EPIC" RING (own-room card, Web view — \`epic-border\` in \`../../index.css\`).
     Remote Desk's cyan/indigo/pink rainbow has no place in the honeycomb palette,
     so Hivez runs its own warm ramp: gold → amber → cream → white-gold. */
  --epic-1: oklch(0.88 0.16 90);  /* gold */
  --epic-2: oklch(0.72 0.17 65);  /* amber */
  --epic-3: oklch(0.95 0.04 85);  /* cream */
  --epic-4: oklch(0.9 0.07 92);   /* white-gold */

  /* LIVE-MEETING SWEEP CORE (Web view room card — \`meeting-sweep\` in
     \`../../index.css\`). The bright centre of the travelling light band; the
     band's flanks use --brand. Hivez reads well on --brand-light. */
  --meeting-sweep-core: var(--brand-light);

  /* MOTION (docs/audits/MOTION_AUDIT_2026-09.md, "Tokens"). Durations + easings for
     every open / close / move in the app — a theme retunes its PERSONALITY
     here, the same reason radius and glass live in this file. The JS mirror is
     \`DURATION\` / \`EASING\` in ../../lib/ui/motion.ts (a parity test pins the
     two). \`../../index.css\` shortens them under \`prefers-reduced-motion\`.
     Same values in both modes. Every value below inherits light. */
  --motion-duration-fast: 120ms;        /* fades, tooltips, swap cross-fade, backdrop */
  --motion-duration-base: 180ms;        /* popovers, menus, ORIGIN-SCALE, FADE-ONLY windows */
  --motion-duration-slow: 260ms;        /* SLIDE (panes, gallery), docks, highlights */
  --motion-duration-drawer: 240ms;      /* edge drawers */
  --motion-duration-layout: 240ms;      /* LAYOUT: FLIP reflow, width/height transitions */
  --motion-duration-emphasized: 320ms;  /* CONTAINER TRANSFORM enter */
  --motion-duration-exit: 200ms;        /* CONTAINER TRANSFORM / window close */
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-decelerate: cubic-bezier(0, 0, 0, 1);
  --motion-ease-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --motion-ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --motion-ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* DRIVE REDESIGN TOKENS (Figma uFV24QMoKxFW5zFCYjv6aC, section "Drive" 2121:114008,
     2026-11-08). Only the Drive values with no close existing token; every other
     Drive colour maps onto the shared set (see the Drive token map). Utilities:
     bg-drive-card, bg-drive-subtle, bg-drive-chip, bg-drive-scrim, bg-drive-media,
     bg-drive-media-badge, shadow-drive-page / -menu / -sheet / -dialog / -toast /
     -segment / -brand. */
  --drive-surface-card: oklch(0.177 0.011 260.6);
  --drive-surface-subtle: oklch(1 0 0 / 0.04);
  --drive-surface-chip: oklch(1 0 0 / 0.08);
  --drive-scrim: oklch(0 0 0 / 0.6);
  --drive-media: oklch(0.09 0.012 258);
  --drive-media-badge: oklch(0 0 0 / 0.6);
  --drive-elevation-page: 0 8px 24px -4px oklch(0 0 0 / 0.45), 0 1px 2px oklch(0 0 0 / 0.4);
  --drive-elevation-menu: 0 12px 32px -6px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.08);
  --drive-elevation-sheet: 0 12px 32px -6px oklch(0 0 0 / 0.6), 0 2px 4px oklch(0 0 0 / 0.4);
  --drive-elevation-dialog: 0 2px 4px oklch(0 0 0 / 0.5);
  --drive-elevation-toast: 0 12px 16px -4px oklch(0 0 0 / 0.5);
  --drive-elevation-segment: 0 0 2px oklch(0 0 0 / 0.5);
  --drive-elevation-brand: 0 0 24px oklch(0.8059 0.122 82.8 / 0.3);

  /* FUNKY GLASS materials / hex field - off here. The glass utilities in index.css (glass-thin,
     glass-thick, glass-chip, glass-float, glass-bar, glass-dim, page-plate) are gated on these, so with them OFF this theme stays
     pixel-identical (the plate inset and radius are 0 and the plate's solid colour is just the
     ground). The live values are in ../funkyglass/. */
  --glass-filter-thin: none;
  --glass-filter-thick: none;
  --glass-highlight: transparent;
  --glass-sheen: none;
  --glass-rim: transparent;
  --glass-filter-float: none;
  --glass-float: var(--popover);
  --glass-filter-bar: none;
  --glass-bar: var(--background);
  --plate-tile: var(--card);
  --plate-well: var(--muted);
  --plate-hover: var(--accent);
  --plate-track: var(--segmented-track);
  --page-plate: transparent;
  --page-plate-edge: transparent;
  --page-plate-radius: 0px;
  --page-plate-solid: var(--background);
  --theme-bg-hex-line: transparent;
  --theme-bg-hex-glow: transparent;
  --theme-bg-vignette: none;
  --sweep-duration: 14s;
}
`})),s,c=e((()=>{s=`/**
 * THEME "Hivez" (\`hivez\`), LIGHT mode — the daytime hive.
 *
 * WHAT HIVEZ IS. A black-and-gold honeycomb dashboard (owner direction
 * 2026-09-23; contract: docs/modules/themes/HIVEZ_THEME_SPEC.md). See
 * \`./dark.css\` for the reference (night) look, retuned 2026-09-29 onto the
 * owner's Figma "Hivez / Lobby" frame. The frame is dark only, so this block
 * carries its STRUCTURE into daylight rather than any measured value: a COOL
 * neutral canvas (hue ≈ 260, not the old cream), white cards, NEUTRAL
 * black-alpha hairlines (not honey), and gold only where the design puts it —
 * the metallic filled actions (\`--brand-fill\`), the gold-washed selected /
 * active surfaces, focus. The brand is a DEEP HONEY derived from the frame's
 * "gold deep" #C8871A, darkened until it reads as text on the canvas — bright
 * gold as text on white measures under 2:1, so the brand is not shared across
 * modes here (unlike Remote Desk). The honeycomb, glows, hexagonal avatars and
 * gold rings carry over at lower strength.
 *
 * COMPLETE BLOCK — the identical token-name set as every other theme file
 * (\`../__tests__/registry.test.ts\`). Section order follows \`../remotedesk/\`.
 *
 * MEASURED CONTRAST (WCAG 2, \`../contrast.ts\`; asserted by
 * \`../__tests__/hivezContrast.test.ts\`):
 *   foreground / background ........ 17.48 : 1   (gate 7)
 *   muted-foreground / card ........  6.51 : 1   (gate 4.5; 6.02 on the canvas)
 *   brand-foreground / brand .......  5.02 : 1   (gate 4.5)
 *   brand-foreground / every --brand-fill stop  ≥ 4.68 : 1 (gate 4.5)
 *   brand / background .............  4.78 : 1   (gate 4.5)
 *   brand / card ...................  5.17 : 1   (gate 4.5)
 *   brand-tint-foreground / tint ...  6.63 : 1   (brand-deep; brand itself is 4.71)
 *   rail-foreground / rail .........  7.03 : 1   rail-accent-foreground / rail-accent  6.63 : 1
 *   success / card ..................  4.60 : 1   (0.54, not 0.55: 0.55 measured 4.42)
 *   warning-deep / card .............  6.18 : 1   (the base amber is 3.75 — as in Remote
 *                                                  Desk, amber TEXT uses --warning-deep)
 *   danger / card ...................  4.83 : 1   info / card ......  5.17 : 1
 *   success-foreground / success ...  4.60 : 1   warning-foreground / warning  5.05 : 1
 *   info-foreground / info .........  5.17 : 1   destructive-foreground / destructive 4.83 : 1
 *                                                  (gate 4.5 — status FILLS, not the card)
 *
 * SELECTOR. The bare \`:root\` is deliberate: Hivez is the DEFAULT theme and light
 * is the no-attribute fallback, so the page is already painted before any JS
 * has set \`data-theme\`. The \`[data-theme='hivez'][data-scheme='light']\` half is
 * what the provider (on <html>) and \`ThemeScope\` (on any element) target.
 * Specificity: on a dark <html> this block matches only through \`:root\`
 * (0,1,0), so the dark block's two attribute selectors (0,2,0) win.
 */

:root,
[data-theme='hivez'][data-scheme='light'] {
  color-scheme: light;
  --scheme: light;

  --radius: 0.75rem;

  /* The typeface, read by \`--font-sans\` (\`../../index.css\` \`@theme inline\`).
     Plus Jakarta Sans, per the owner's Figma "Hivez / Lobby" frame — Remote
     Desk keeps Inter (\`../remotedesk/light.css\`). Loaded in main.tsx via
     fontsource. */
  --font-theme: 'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;

  /* ── Core roles ─────────────────────────────────────────────────────────
     COOL neutrals (hue ≈ 260 — the dark frame's hue, lifted to day); cards
     are crisp white. */
  --background: oklch(0.973 0.003 264.5);      /* #F5F6F8 */
  --foreground: oklch(0.177 0.011 260.6);      /* #0E1116 — the dark frame's panel as ink */
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.177 0.011 260.6);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.177 0.011 260.6);
  --primary: var(--brand);
  --primary-foreground: var(--brand-foreground);
  --secondary: oklch(0.954 0.005 258.3);       /* #EEF0F3 */
  --secondary-foreground: oklch(0.177 0.011 260.6);
  --muted: oklch(0.954 0.005 258.3);
  --muted-foreground: oklch(0.481 0.014 264.4); /* #5A5E66 */
  --accent: oklch(0.931 0.006 264.5);          /* #E6E8EC — one step above --muted for menu-item hover */
  --accent-foreground: oklch(0.177 0.011 260.6);
  --destructive: oklch(0.577 0.215 27.3);      /* #DC2626 — the frame's red #EF4444 is 3.76:1 on white, so a step deeper */
  --destructive-foreground: oklch(1 0 0);      /* white on --destructive measures 4.83:1 (hivezContrast.test.ts) */
  /* NEUTRAL hairlines (the ink at low alpha), never honey — see ./dark.css. */
  --border: oklch(0.177 0.011 260.6 / 0.1);
  --input: oklch(0.177 0.011 260.6 / 0.14);    /* \`border-input\` (select triggers); the house Input draws \`border-default\` */
  --ring: var(--brand);                        /* GOLD: focus stays the brand */

  --rail: oklch(0.973 0.003 264.5);
  --rail-foreground: oklch(0.445 0.013 261.8); /* #50545B */
  --rail-accent: oklch(0.968 0.025 89.2);      /* = --brand-tint */
  --rail-accent-foreground: var(--brand-deep);
  --rail-border: oklch(0.177 0.011 260.6 / 0.08);

  --scrollbar-thumb: oklch(0.177 0.011 260.6 / 0.18);
  --scrollbar-thumb-hover: oklch(0.177 0.011 260.6 / 0.32);

  /* ── Brand ────────────────────────────────────────────────────────────── */
  --brand: oklch(0.54 0.11 73.2);              /* deep honey #95630F — gold deep #C8871A's hue, darkened to read as text */
  --brand-foreground: oklch(0.99 0.01 85);
  --brand-tint: oklch(0.968 0.025 89.2);       /* #FBF4E2 — the pale gold wash of selected / active surfaces */
  /* Honey on the pale tint is 4.71:1 — thin at chip sizes — so the ink
     is one step deeper (the same move Remote Desk's light block makes). */
  --brand-tint-foreground: var(--brand-deep);
  --brand-light: oklch(0.58 0.12 76);
  --brand-ghost: oklch(0.54 0.11 73.2 / 0.06);
  --brand-subtle: oklch(0.54 0.11 73.2 / 0.16);
  /* THE METALLIC FILL (see ./dark.css), day edition: the same diagonal sweep,
     but by day the fill carries WHITE ink, so no stop may be lighter than
     L 0.555 — a lighter highlight band (the first cut used 0.58 / 0.62)
     dropped the label to 4.25 / 3.58:1, failing AA. The sheen comes from
     DARKER bands instead: honey 0.555 → a darker trough → honey again → a
     deeper band → the deep corner. White ink measures 4.70 / 5.46 / 4.68 /
     5.95 / 7.69 : 1 on the five stops (gated per stop by
     hivezContrast.test.ts). Remote Desk sets \`none\`. */
  --brand-fill: linear-gradient(
    135deg,
    oklch(0.555 0.11 76) 0%,
    oklch(0.52 0.105 73.2) 38%,
    oklch(0.555 0.108 80) 68%,
    oklch(0.5 0.1 72.5) 84%,
    oklch(0.44 0.09 71) 100%
  );

  /* Glass is OPAQUE here too (owner call 2026-09-29 — see ./dark.css): the
     honeycomb shows only in the gutters. Panels are white, glass ON glass
     (--surface-glass-inset) is the page grey as a soft well, the hover / chip
     step is one grey further. The chrome (rail + header) is the page's own
     ground, solid; the rail decoration is dark.css's, in honey. Generated by
     ../patterns.ts — honeycombDataUri({ stroke: '#95630f', cell: 40,
     strokeWidth: 1, opacity: 0.25 }); pinned by ../__tests__/patterns.test.ts. */
  --surface-glass: oklch(1 0 0);
  --surface-glass-strong: oklch(0.954 0.005 258.3);  /* #EEF0F3 */
  --surface-glass-inset: oklch(0.973 0.003 264.5);   /* #F5F6F8 */
  --surface-chrome: oklch(0.973 0.003 264.5);        /* the page ground #F5F6F8 */
  /* FIX(search-palette-scrim-glass): the search palette's scrim (\`scrim="glass"\`,
     dialog.tsx) wants a BLURRED, LIGHTENED page behind it, not a solid sheet.
     Hivez's \`--surface-glass\` is OPAQUE (see the comment above), so reusing it
     here painted a flat white sheet over the whole viewport instead. This is
     the light panel colour (\`--surface-glass\`) at ~76% alpha instead — glass
     again, just for this one caller. */
  --scrim-glass: oklch(1 0 0 / 0.76);
  --rail-decoration:
    linear-gradient(
      to bottom,
      oklch(0.973 0.003 264.5) 0%,
      oklch(0.973 0.003 264.5) 66%,
      oklch(0.973 0.003 264.5 / 0) 80%,
      oklch(0.973 0.003 264.5 / 0) 88%,
      oklch(0.973 0.003 264.5) 97%
    ),
    radial-gradient(70% 16% at 50% 84%, oklch(0.54 0.11 73.2 / 0.06), transparent 70%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='69' height='120' viewBox='0 0 69.282 120' preserveAspectRatio='none'%3E%3Cg fill='none' stroke='%2395630f' stroke-width='1' opacity='0.25'%3E%3Cpath d='M0 -40L34.641 -20L34.641 20L0 40L-34.641 20L-34.641 -20ZM69.282 -40L103.923 -20L103.923 20L69.282 40L34.641 20L34.641 -20ZM34.641 20L69.282 40L69.282 80L34.641 100L0 80L0 40ZM0 80L34.641 100L34.641 140L0 160L-34.641 140L-34.641 100ZM69.282 80L103.923 100L103.923 140L69.282 160L34.641 140L34.641 100Z'/%3E%3C/g%3E%3C/svg%3E");
  --border-glass: oklch(0.177 0.011 260.6 / 0.08);
  --border-hairline: oklch(0.177 0.011 260.6 / 0.08);
  --elevation-glass-raised: 0 0 0 1px oklch(0.177 0.011 260.6 / 0.08), inset 0 0 4px oklch(1 0 0);

  --surface-raised: oklch(0.988 0 0);
  --surface-chip: oklch(1 0 0);
  --surface-sunken: oklch(0.954 0.005 258.3);
  /* Segmented tab switcher (owner call 2026-10-19): recessed track + raised neutral thumb; thumb is clearly lighter than track. */
  --segmented-track: oklch(0.925 0.006 264.5);
  --segmented-thumb: oklch(1 0 0);
  --border-strong: oklch(0.177 0.011 260.6 / 0.26); /* NEUTRAL, as in ./dark.css; 0.26 = 1.80:1 on white so a checkbox/radio box reads (0.2 was 1.55) */

  /* ── Text ladder ──────────────────────────────────────────────────────── */
  --label-muted: oklch(0.592 0.012 261.8);     /* #7A7E85 */
  --text-subtle: oklch(0.541 0.012 261.8);     /* #6B6F76 */
  --avatar-channel: oklch(0.5 0.06 75);

  /* ── Status ───────────────────────────────────────────────────────────── */
  --success: oklch(0.54 0.17 150);
  --success-tint: oklch(0.54 0.17 150 / 0.16);
  --success-surface: oklch(0.95 0.05 155);
  /* success-foreground: measured 4.60:1 (white on --success) — a near-black
     ink drops below AA here, so the fill keeps a white text pair. */
  --success-foreground: oklch(1 0 0);
  --destructive-tint: oklch(0.577 0.215 27.3 / 0.14);
  --info: oklch(0.546 0.215 262.9);            /* #2563EB — the frame's blue #3B82F6 is 3.68:1 on white */
  --info-tint: oklch(0.546 0.215 262.9 / 0.14);
  /* info-foreground: measured 5.17:1 (white on --info). */
  --info-foreground: oklch(1 0 0);
  --danger: oklch(0.577 0.215 27.3);
  --danger-tint: oklch(0.577 0.215 27.3 / 0.14);
  /* Ink on a SOLID --danger / --destructive fill (\`text-danger-ink\`): pure white, exactly what the
     hard-coded \`text-white\` it replaced rendered, so this theme is pixel-identical to before. */
  --danger-ink: oklch(1 0 0);
  --warning: oklch(0.62 0.15 70);
  --warning-tint: oklch(0.62 0.15 70 / 0.16);
  --warning-deep: oklch(0.5 0.12 66);
  /* warning-foreground: the amber fill is too light for white text (3.59:1) —
     measured 5.05:1 with the near-black ink on --warning. */
  --warning-foreground: oklch(0.177 0.011 260.6);
  --presence: oklch(0.627 0.17 149.2);         /* #16A34A */

  --label-soft: oklch(0.541 0.012 261.8);
  --text-disabled: oklch(0.177 0.011 260.6 / 0.42);
  --icon: var(--foreground);
  --icon-muted: var(--muted-foreground);
  --border-light: oklch(1 0 0 / 0.4);
  --surface-tint: oklch(0.177 0.011 260.6 / 0.05);
  --ledger-stripe: oklch(0 0 0 / 0.03); /* FIX(ledger-zebra-tokens): zebra row fill, a translucent wash so the step holds on any host */
  --ledger-hover: oklch(0 0 0 / 0.07);
  --table-head: oklch(0.94 0.005 260); /* opaque table/list header band — never translucent: it sits on the honeycomb canvas */
  --scrim: oklch(0.177 0.011 260.6 / 0.3);
  --border-default: oklch(0.177 0.011 260.6 / 0.1); /* the NEUTRAL hairline */
  --border-subtle: oklch(0.177 0.011 260.6 / 0.07);
  --brand-deep: oklch(0.46 0.095 72);          /* #784E08 */

  /* ── Elevation: soft COOL shadows by day; only the brand glow is gold. ─── */
  --elevation-brand: 0 6px 14px oklch(0.54 0.11 73.2 / 0.28);
  --elevation-panel: 0 10px 26px oklch(0.25 0.02 260 / 0.08);
  --elevation-overlay: 0 18px 44px -8px oklch(0.25 0.02 260 / 0.18);
  --elevation-overlay-strong: 0 24px 60px -10px oklch(0.25 0.02 260 / 0.22);
  --elevation-danger-glow:
    0 0 0 3px oklch(0.577 0.215 27.3 / 0.3), 0 0 10px 2px oklch(0.577 0.215 27.3 / 0.45);
  --elevation-raised: 0 0 0 1px oklch(0.177 0.011 260.6 / 0.1), inset 0 0 4px oklch(1 0 0);
  --elevation-flat: 0 1px 2px oklch(0.25 0.02 260 / 0.08);

  --shell-backdrop: none;

  /* ── Document kinds — identity data, kept as Remote Desk's hues. ───────── */
  /* FIX(kind-ink-contrast): the --kind-* hues are tuned so the white --kind-ink mark clears 3:1. */
  --kind-page: var(--brand);
  --kind-document: var(--info);
  --kind-sheet: var(--success);
  --kind-slides: var(--warning);
  --kind-markdown: oklch(0.606 0.216 292.7);
  --kind-text: var(--label-soft);
  --kind-tint-alpha: 0.16;

  --kind-folder: var(--brand);
  --kind-pdf: var(--danger);
  --kind-image: oklch(0.656 0.241 354.3);
  --kind-video: var(--kind-markdown);
  --kind-audio: oklch(0.64 0.14 237.3);
  --kind-archive: oklch(0.551 0.023 264.4);
  --kind-code: oklch(0.58 0 0);
  --kind-other: oklch(0.58 0 0);
  /* The mark drawn ON a kind hue (KindGlyph): near-white. It reads on every hue because the
     hues above are tuned to clear 3:1 against it (FIX(kind-ink-contrast)). */
  --kind-ink: oklch(0.99 0 0);

  --fc-brand: var(--brand);
  --fc-green: oklch(0.696 0.17 162.48);   /* #10B981, Figma New folder swatch 3 */
  --fc-amber: var(--warning);
  --fc-sky: var(--info);
  --fc-violet: var(--kind-markdown);
  --fc-pink: var(--kind-image);
  --fc-rose: var(--danger);
  --fc-grey: oklch(0.551 0.027 264.364);  /* #6B7280, Figma New folder swatch 6 */

  --doc-canvas: oklch(0.931 0.006 264.5);
  --doc-page: oklch(1 0 0);
  --doc-page-ink: oklch(0.177 0.011 260.6);
  /* Links ON THE PAPER (Google Docs' #1155CC): the page is paper-light in both
     schemes, so one blue reads at >= 5.9:1 on every page colour we ship. */
  --doc-page-link: oklch(0.488 0.196 261.2);
  /* A commented run on the (always light) sheet: Google Docs' pale yellow, and
     a deeper one for the thread the comments panel is on (editor.css
     \`.doc-comment-mark\`). The same in both modes — the paper does not change. */
  --doc-comment: oklch(0.95 0.07 95);
  --doc-comment-active: oklch(0.88 0.14 88);
  --video-frame: oklch(0.22 0.012 260);

  /* ── Chart ring: starts at the brand gold; the other hues are identity. ─ */
  --chart-1: oklch(0.68 0.13 80);
  --chart-2: oklch(0.62 0.17 150);
  --chart-3: oklch(0.6 0.2 25);
  --chart-4: oklch(0.62 0.13 230);
  --chart-5: oklch(0.6 0.17 320);
  --chart-6: oklch(0.68 0.15 55);
  --chart-7: oklch(0.64 0.12 200);

  /* ── SHELL BACKDROP + AVATAR STYLE ────────────────────────────────────── */
  --theme-bg-image: none;
  /* generated by ../patterns.ts — honeycombDataUri({ stroke: '#95630f', cell: 8, strokeWidth: 1, opacity: 0.1 })
     (#95630f = the brand honey; a fine R=8px pointy-top lattice, matching the
     Figma lobby render's honeycomb scale — owner call 2026-09-29, replacing
     the earlier R=48 pattern). Pinned by ../__tests__/patterns.test.ts. */
  --theme-bg-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='24' viewBox='0 0 13.856 24' preserveAspectRatio='none'%3E%3Cg fill='none' stroke='%2395630f' stroke-width='1' opacity='0.1'%3E%3Cpath d='M0 -8L6.928 -4L6.928 4L0 8L-6.928 4L-6.928 -4ZM13.856 -8L20.785 -4L20.785 4L13.856 8L6.928 4L6.928 -4ZM6.928 4L13.856 8L13.856 16L6.928 20L0 16L0 8ZM0 16L6.928 20L6.928 28L0 32L-6.928 28L-6.928 20ZM13.856 16L20.785 20L20.785 28L13.856 32L6.928 28L6.928 20Z'/%3E%3C/g%3E%3C/svg%3E");
  /* Same shape as dark's mask (~15 % floor) — see that file's comment. The
     light pattern itself is already fainter (opacity 0.1 vs 0.16). */
  --theme-bg-pattern-mask:
    radial-gradient(ellipse at 100% 0%, #000 0%, transparent 55%),
    radial-gradient(ellipse at 100% 100%, #000 0%, transparent 50%),
    radial-gradient(ellipse at 0% 0%, #000 0%, transparent 40%),
    linear-gradient(#00000026, #00000026);
  --theme-bg-glow-1: radial-gradient(640px 480px at 92% 8%, oklch(0.54 0.11 73.2 / 0.12), transparent 70%);
  --theme-bg-glow-2: radial-gradient(520px 400px at 88% 96%, oklch(0.54 0.11 73.2 / 0.08), transparent 70%);
  --theme-bg-scrim: oklch(1 0 0 / 0);
  --theme-bg-animate: 1;
  /* THE HEXAGON FACE (FIX(hivez-hex-avatar-redesign), index.css): a pointy-top
     hexagon with softly rounded vertices, a gold ring \`max(1.5px, 5.5%)\` of
     the face wide running light (top) → deep (bottom), and a soft glow — drawn
     by the SVG filter \`AvatarShapeDefs\` renders for this theme + scheme. The
     two mask images are generated by ../../lib/ui/avatarShape.ts
     (\`cssUrl(HEX_SHAPE_URI)\`, \`cssUrl(HEX_FRAME_RING_URI)\`) and pinned by
     its test — the same path the 2D floor chip and the mini-map trace. */
  --avatar-shape: hexagon;
  --avatar-radius: 50% / 28.87%;
  /* FIX(avatar-ring-lobby-office-only): owner 10-07 — gold hex ring only in the lobby + office. Before: every Hivez face ringed unless scoped .avatar-plain. After: plain by default; .avatar-ring scope on Lobby + OfficeView. */
  --avatar-filter: url(#rd-avatar-hex-plain-hivez-light);  /* DEFAULT face filter: hexagon + card-coloured separator, no gold ring/glow */
  --avatar-filter-plain: url(#rd-avatar-hex-plain-hivez-light);  /* same plain filter — the explicit \`.avatar-plain\` scope */
  --avatar-filter-ring: url(#rd-avatar-hex-hivez-light);  /* gold ring + glow — applied only inside an \`.avatar-ring\` scope (lobby + office) */
  --avatar-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/svg%3E");
  --avatar-frame-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3CclipPath id='c'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23c)' fill='none' stroke='black'%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke-width='4' vector-effect='non-scaling-stroke'/%3E%3C/g%3E%3C/svg%3E");
  --avatar-glow-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-25 -25 150 150' preserveAspectRatio='none'%3E%3Cfilter id='b' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3C/filter%3E%3Cpath d='M7.361 24.62L42.639 4.25Q50 0 57.361 4.25L92.639 24.62Q100 28.87 100 37.37L100 62.63Q100 71.13 92.639 75.38L57.361 95.75Q50 100 42.639 95.75L7.361 75.38Q0 71.13 0 62.63L0 37.37Q0 28.87 7.361 24.62Z' stroke='black' stroke-width='20' stroke-linejoin='round' filter='url(%23b)'/%3E%3C/svg%3E");
  --avatar-ring-width: 2px;
  --avatar-ring-color: oklch(0.8059 0.122 82.8);  /* the frame's golden medium #E6B85C */
  --avatar-ring-color-2: oklch(0.54 0.11 73.2);   /* the brand honey */
  --avatar-glow-color: oklch(0.6732 0.1364 73.2 / 0.35);
  --avatar-away-color: oklch(0.6 0.012 262);    /* the 2D floor chip's away/inactive status ring (FIX(hivez-floor-status-ring)) */
  --avatar-focus-color: var(--danger);        /* the focus (do-not-disturb) status ring, 2D floor + Web view (FIX(hivez-floor-status-ring)) */
  --canvas-dots-ink: oklch(0.54 0.11 73.2 / 0.1);

  /* THE "EPIC" RING (own-room card, Web view — \`epic-border\` in \`../../index.css\`).
     Remote Desk's cyan/indigo/pink rainbow has no place in the honeycomb palette,
     so Hivez runs its own warm ramp: gold → amber → cream → white-gold. */
  --epic-1: oklch(0.82 0.15 85);  /* gold */
  --epic-2: oklch(0.62 0.16 65);  /* amber */
  --epic-3: oklch(0.94 0.04 85);  /* cream */
  --epic-4: oklch(0.9 0.06 88);   /* white-gold */

  /* LIVE-MEETING SWEEP CORE (Web view room card — \`meeting-sweep\` in
     \`../../index.css\`). The bright centre of the travelling light band; the
     band's flanks use --brand. Hivez reads well on --brand-light. */
  --meeting-sweep-core: var(--brand-light);

  /* MOTION (docs/audits/MOTION_AUDIT_2026-09.md, "Tokens"). Durations + easings for
     every open / close / move in the app — a theme retunes its PERSONALITY
     here, the same reason radius and glass live in this file. The JS mirror is
     \`DURATION\` / \`EASING\` in ../../lib/ui/motion.ts (a parity test pins the
     two). \`../../index.css\` shortens them under \`prefers-reduced-motion\`.
     Same values in both modes. */
  --motion-duration-fast: 120ms;        /* fades, tooltips, swap cross-fade, backdrop */
  --motion-duration-base: 180ms;        /* popovers, menus, ORIGIN-SCALE, FADE-ONLY windows */
  --motion-duration-slow: 260ms;        /* SLIDE (panes, gallery), docks, highlights */
  --motion-duration-drawer: 240ms;      /* edge drawers */
  --motion-duration-layout: 240ms;      /* LAYOUT: FLIP reflow, width/height transitions */
  --motion-duration-emphasized: 320ms;  /* CONTAINER TRANSFORM enter */
  --motion-duration-exit: 200ms;        /* CONTAINER TRANSFORM / window close */
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-decelerate: cubic-bezier(0, 0, 0, 1);
  --motion-ease-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --motion-ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --motion-ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* DRIVE REDESIGN TOKENS (Figma uFV24QMoKxFW5zFCYjv6aC, section "Drive" 2121:114008,
     2026-11-08). Only the Drive values with no close existing token; every other
     Drive colour maps onto the shared set (see the Drive token map). Utilities:
     bg-drive-card, bg-drive-subtle, bg-drive-chip, bg-drive-scrim, bg-drive-media,
     bg-drive-media-badge, shadow-drive-page / -menu / -sheet / -dialog / -toast /
     -segment / -brand. */
  --drive-surface-card: oklch(1 0 0);
  --drive-surface-subtle: oklch(0.177 0.011 260.6 / 0.04);
  --drive-surface-chip: oklch(0.177 0.011 260.6 / 0.07);
  --drive-scrim: oklch(0.177 0.011 260.6 / 0.32);
  --drive-media: oklch(0.22 0.012 260);
  --drive-media-badge: oklch(0 0 0 / 0.6);
  --drive-elevation-page: 0 8px 24px -4px oklch(0.25 0.02 260 / 0.06), 0 1px 2px oklch(0.25 0.02 260 / 0.05);
  --drive-elevation-menu: 0 12px 32px -6px oklch(0.25 0.02 260 / 0.14);
  --drive-elevation-sheet: 0 12px 32px -6px oklch(0.25 0.02 260 / 0.12), 0 2px 4px oklch(0.25 0.02 260 / 0.06);
  --drive-elevation-dialog: 0 2px 4px oklch(0.25 0.02 260 / 0.08);
  --drive-elevation-toast: 0 12px 16px -4px oklch(0.25 0.02 260 / 0.08);
  --drive-elevation-segment: 0 0 2px oklch(0.25 0.02 260 / 0.14);
  --drive-elevation-brand: 0 6px 14px oklch(0.54 0.11 73.2 / 0.28);

  /* FUNKY GLASS materials / hex field - off here. The glass utilities in index.css (glass-thin,
     glass-thick, glass-chip, glass-float, glass-bar, glass-dim, page-plate) are gated on these, so with them OFF this theme stays
     pixel-identical (the plate inset and radius are 0 and the plate's solid colour is just the
     ground). The live values are in ../funkyglass/. */
  --glass-filter-thin: none;
  --glass-filter-thick: none;
  --glass-highlight: transparent;
  --glass-sheen: none;
  --glass-rim: transparent;
  --glass-filter-float: none;
  --glass-float: var(--popover);
  --glass-filter-bar: none;
  --glass-bar: var(--background);
  --plate-tile: var(--card);
  --plate-well: var(--muted);
  --plate-hover: var(--accent);
  --plate-track: var(--segmented-track);
  --page-plate: transparent;
  --page-plate-edge: transparent;
  --page-plate-radius: 0px;
  --page-plate-solid: var(--background);
  --theme-bg-hex-line: transparent;
  --theme-bg-hex-glow: transparent;
  --theme-bg-vignette: none;
  --sweep-duration: 14s;
}
`})),l,u=e((()=>{l=`/**
 * THEME "Remote Desk" (\`remotedesk\`), DARK mode.
 *
 * The second of the theme's two required modes (see \`./light.css\` for the full
 * explanation and \`../README.md\` for how to add a theme). This block is
 * COMPLETE: it declares every token \`./light.css\` declares — the identical
 * name set, enforced by \`registry.test.ts\` — because a \`<ThemeScope>\` preview
 * can put this block on a div inside a LIGHT page, where nothing may leak in
 * from the surroundings. Tokens whose value is the same in both modes are
 * restated with the light value and marked \`inherits light\`.
 *
 * \`--scheme: dark\` is what Tailwind's \`dark:\` variant queries (a container
 * style query in \`../../index.css\`) — the variant follows the NEAREST scope,
 * not any dark ancestor.
 */

[data-theme='remotedesk'][data-scheme='dark'] {
  /* The mode this block is. \`color-scheme\` drives native form controls and
     scrollbars; \`--scheme\` is what the \`dark:\` variant queries. */
  color-scheme: dark;
  --scheme: dark;

  --radius: 0.5rem; /* inherits light */

  --font-theme: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; /* inherits light */

  /* THE FIGMA DARK PALETTE (2026-09-05) — read off the dark-mode Lobby, Figma
     "remote-desk" frame 915:9027 (docs/design-system/figma-remote-desk/
     03-dark-theme/DARK_THEME_USAGE.md; the variable dump is raw/variables.dark.json).
     Until now this block was a HOLDING SET — a cool slate invented because no
     dark design existed. There is one now, and it works like this:

       1. The page is #050506 (Surface/Default). Dark surfaces are WHITE AT LOW
          ALPHA on it, not grey hexes: cards 8% (Glass60), insets 4% (Glass40),
          every one on a 1px 6%-white hairline (Border/Default).
       2. Text has three steps and only three: #FAFAFA, 70%, 50%.
       3. Brand does not change between modes — --brand / --brand-deep carry
          the light value — only its TINT does. Filled buttons stay brand-filled, which is why the
          \`--primary\` override that pinned dark buttons to white is GONE.
       4. Status hues keep their light value and go quieter: danger/info tints
          16% -> 8%; success stays 16%.

     ONE ARCHITECTURE DECISION, on purpose: every token the theme exports as a
     ROLE or TEXT colour (--card, --muted, --accent, --muted-foreground, the
     labels, --brand-tint, the rail set) is written as the OPAQUE colour Figma's
     alpha step produces over its usual backdrop, not as the alpha itself. The
     app stacks opacity modifiers on these tokens in hundreds of places
     (\`bg-muted/60\`, \`text-muted-foreground/70\`), and darkThemeTokens.test
     forbids a modifier on a token that is alpha in one theme and solid in the
     other — an alpha value here would compound to nothing. The GLASS and
     BORDER tokens stay alpha, as they always were in dark. On screen the two
     forms are the same colour; the arithmetic is in each comment. */
  --background: oklch(0.116 0 0);              /* Surface/Default #050506 */
  --foreground: oklch(0.985 0 0);              /* Text/Default #FAFAFA */
  --card: oklch(0.214 0 0);                  /* Glass60 (8% white) flattened over the page = #19191a — opaque so menus/dialogs stay readable over busy content */
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.214 0 0);
  --popover-foreground: oklch(0.985 0 0);
  /* --primary / --primary-foreground / --ring carry the LIGHT value: they
     resolve to var(--brand) / var(--brand-foreground) as in light. Every filled
     button on the dark frame is brand. */
  --primary: var(--brand);
  --primary-foreground: var(--brand-foreground);
  --ring: var(--brand);
  --secondary: oklch(0.252 0 0);            /* Glass40 (4% white) over a card = #222223 */
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.252 0 0);                /* the same inset step — hovers and lanes lighten a card by 4% white */
  --muted-foreground: oklch(0.758 0 0);       /* Text/Muted — 70% white over the page = #b0b0b1 */
  --accent: oklch(0.325 0 0);              /* 12% white over a card = #343435 — one step above --muted for menu-item hover */
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216); /* the destructive-ACTION red; not a Figma token, unchanged */
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 0.06);        /* Border/Default */
  --input: oklch(1 0 0 / 0.12);         /* Border/Strong */
  --rail: oklch(0.160 0.006 285.7);                  /* the side nav's #0D0D10 — hardcoded on the frame, promoted here (and to --surface-raised) */
  --rail-foreground: oklch(0.767 0 0);     /* inactive row label = Text/Muted over the rail = #b3b3b4 */
  --rail-accent: oklch(0.245 0.006 286.0);        /* active row = Glass60 over the rail = #202023 (+ Border/Default, see RailButton) */
  --rail-accent-foreground: oklch(0.985 0 0);
  --rail-border: oklch(1 0 0 / 0.12);   /* the rail's right edge is Border/Strong on the frame */
  --scrollbar-thumb: oklch(0.75 0.012 265 / 0.28);
  --scrollbar-thumb-hover: oklch(0.85 0.01 265 / 0.42);

  /* ── Redesign tokens, dark side ─────────────────────────────────────────── */
  --brand: oklch(0.55 0.253 278);              /* inherits light (rule 3) */
  --brand-light: oklch(0.578 0.235 278.29);    /* inherits light */
  --brand-deep: oklch(0.51 0.262 277);         /* inherits light */
  --brand-foreground: oklch(0.985 0 0);        /* Text/OnPrimary #FAFAFA (light is pure white) */
  /* Figma binds Primary/extra light to a 60% BRAND ALPHA in dark, and nothing on
     the frame uses it. Under the app's chip ink (those pairs now read
     \`bg-brand-tint text-brand-tint-foreground\`, white in dark) 60% brand would
     be brand-on-brand, and the 86 \`dark:bg-brand/15\` overrides already in the
     tree say what the app means by a dark tint. So this is the frame's
     Primary/subtle (16%) over a card, opaque: */
  --brand-tint: oklch(0.267 0.055 286.6);            /* 16% brand over #19191a = #24213f */
  /* FIX(tint-ink): the ink that rides that navy — Text/OnPrimary #FAFAFA. See
     the light block for the owner call this answers. */
  --brand-tint-foreground: var(--brand-foreground);
  --surface-glass: oklch(0.985 0 0 / 0.04);        /* Glass40 — insets inside cards, the header bar, icon buttons */
  --surface-glass-strong: oklch(0.985 0 0 / 0.08); /* Glass60 — cards, tiles, the active menu item */
  --border-glass: oklch(1 0 0 / 0.08);             /* Border/glassy — the rail's collapse pill */
  --surface-glass-inset: var(--surface-glass);     /* inherits light — alpha glass stacks by itself */
  --surface-chrome: var(--surface-glass);          /* inherits light — rail + header keep the glass glaze */
  --scrim-glass: var(--surface-glass);             /* inherits light — the search palette's scrim */
  --rail-decoration: none;                         /* inherits light */
  --surface-raised: oklch(0.160 0.006 285.7);        /* #0D0D10 — the side-nav fill */
  --surface-chip: var(--card);          /* opaque, for the same 3D-canvas reason as light; it is also Glass60 flattened, so an active menu row lands on the frame's colour */
  --surface-sunken: var(--muted);       /* the inset step below a card (Glass40) */
  /* Segmented tab switcher (owner call 2026-10-19): recessed track + raised neutral thumb; thumb is clearly lighter than track. */
  --segmented-track: oklch(0.165 0 0);
  --segmented-thumb: oklch(0.34 0 0);
  --border-strong: oklch(1 0 0 / 0.12); /* Border/Strong */
  --label-muted: oklch(0.600 0 0);           /* collapses onto Subtle: dark has three text steps, not four */
  --label-soft: oklch(0.600 0 0);            /* Text/Subtle — 50% white over the page = #808080 */
  --text-subtle: oklch(0.985 0 0 / 0.5);     /* Text/Subtle as the file binds it in dark: 50% white */
  /* --avatar-channel carries the light value on purpose — see the light block. */
  --avatar-channel: oklch(0.53 0.02 280);
  --text-disabled: oklch(0.985 0 0 / 0.35);  /* inferred — the frame binds no dark Text/Disabled; 35% is the step below Subtle */
  /* --icon / --icon-muted carry the light value: they resolve through
     --foreground / --muted-foreground, which are already the dark text steps. */
  --icon: var(--foreground);
  --icon-muted: var(--muted-foreground);
  /* --border-light (30% white) and --brand-ghost / --brand-subtle carry the
     SAME value in both modes on the frame (inherits light). */
  --border-light: oklch(1 0 0 / 0.3);
  --brand-ghost: oklch(0.55 0.253 278.01 / 0.06);
  --brand-subtle: oklch(0.55 0.253 278.01 / 0.16);
  --brand-fill: none;                        /* inherits light — no metallic fill, the flat brand stays */
  --surface-tint: oklch(1 0 0 / 0.08);       /* inverted: a black wash is invisible on near-black */
  --ledger-stripe: oklch(1 0 0 / 0.04); /* FIX(ledger-zebra-tokens): zebra row fill, a translucent wash so the step holds on any host */
  --ledger-hover: oklch(1 0 0 / 0.09);
  --table-head: oklch(0.255 0 0); /* opaque table/list header band — never translucent: it sits on the honeycomb canvas */
  --success-surface: oklch(0.627 0.17 149.21 / 0.16); /* inferred — no dark binding; the opaque light field becomes the 16% wash */
  --danger-tint: oklch(0.643 0.245 16.5 / 0.08);      /* Danger/subtle — 8%, quietened like info (rule 4) */
  /* --success / --info / --danger / --warning keep their light values on the
     frame (rule 4); only the tints quieten. --success-tint stays 16% = light. */
  --success: oklch(0.627 0.17 149);
  --success-tint: oklch(0.627 0.17 149 / 0.16);
  --info: oklch(0.694 0.161 241);
  --danger: oklch(0.643 0.245 16.5);
  /* Ink on a SOLID --danger / --destructive fill (\`text-danger-ink\`): pure white, exactly what the
     hard-coded \`text-white\` it replaced rendered, so this theme is pixel-identical to before. */
  --danger-ink: oklch(1 0 0);
  --warning: oklch(0.769 0.165 70.08);
  --info-tint: oklch(0.694 0.161 241 / 0.08);        /* Info/subtle — 8% */
  --destructive-tint: oklch(0.704 0.191 22.216 / 0.08);
  --warning-tint: oklch(0.769 0.165 70.08 / 0.08);   /* no dark binding; quietened like danger/info. FIX(ds-2026-09): chroma follows --warning. Before: 0.188. After: 0.165 */
  --warning-deep: var(--warning);                    /* on near-black the base amber is already the readable text colour */
  /* --success-foreground / --warning-foreground / --info-foreground: same white
     as light (rule 4 — the fills keep their light values, so does their text). */
  --success-foreground: oklch(0.985 0 0);
  --warning-foreground: oklch(0.985 0 0);
  --info-foreground: oklch(0.985 0 0);
  --elevation-danger-glow:
    0 0 0 3px oklch(0.643 0.245 16.5 / 0.35), 0 0 10px 2px oklch(0.643 0.245 16.5 / 0.5);
  --presence: oklch(0.75 0.15 162);     /* app-only canvas green; not in the file */
  /* The chart hues lift slightly on near-black so a 4 px line still reads;
     the hues themselves are unchanged, so a series keeps its identity across
     a theme flip. */
  --chart-1: oklch(0.70 0.16 264);
  --chart-2: oklch(0.70 0.16 310);
  --chart-3: oklch(0.70 0.16 350);
  --chart-4: oklch(0.73 0.15 55);
  --chart-5: oklch(0.73 0.13 120);
  --chart-6: oklch(0.73 0.12 175);
  --chart-7: oklch(0.70 0.14 220);
  /* Heavier than light mode's 24% veil: dark surfaces sit near the scrim's own
     luminance, so the veil has to darken to register at all. */
  --scrim: oklch(0 0 0 / 0.5);
  --border-default: oklch(1 0 0 / 0.06);  /* Border/Default — 6% */
  --border-subtle: oklch(1 0 0 / 0.08);   /* inverted: the frame's active-chip edge is a leaked black 8% */
  --border-hairline: oklch(1 0 0 / 0.12); /* in-card dividers are unbound on the frame; a touch brighter than the edge */
  --elevation-raised: 0 0 1px oklch(0 0 0 / 0.4), inset 0 0 4px oklch(1 0 0 / 0.06);
  --elevation-glass-raised: 0 0 1px oklch(1 0 0 / 0.2), inset 0 0 4px oklch(1 0 0 / 0.08);
  /* The frame renders the brand glow as 0 8 6 at 24%. This stays the app's
     softer 0 4 18 at 18% by an earlier call: a COLOURED shadow on near-black
     works by adding violet light, and at the frame's strength it became a
     purple band bleeding past the header's bottom edge and pooling under the
     neutral "New room" chrome. Shadows are not colours; revisit separately. */
  --elevation-brand: 0 4px 18px oklch(0.55 0.253 278 / 0.18);
  --elevation-panel: 0 10px 26px oklch(0 0 0 / 0.3);
  /* Same geometry, deeper alpha: a 14% shadow is invisible on a near-black page,
     so the overlay lift has to carry most of the separation itself. */
  --elevation-overlay: 0 18px 44px -8px oklch(0.15 0.02 260 / 0.5);
  --elevation-overlay-strong: 0 24px 60px -10px oklch(0.15 0.02 260 / 0.6);
  --elevation-flat: 0 1px 2px oklch(0 0 0 / 0.3);   /* the same flat lift, deepened: a 5% shadow does nothing on near-black */
  --shell-backdrop:
    radial-gradient(60rem 40rem at 8% -10%, oklch(0.55 0.253 278 / 0.14), transparent 60%),
    radial-gradient(50rem 35rem at 100% 0%, oklch(0.627 0.17 149 / 0.08), transparent 55%);

  /* Kind hues in dark: the role tokens they alias already flip, so only the two
     that DON'T are restated — markdown lifts (a 0.606 violet is muddy on
     #141416) and the tint drops to 8 % (the kit's \`--kind-tint-alpha\`). */
  --kind-markdown: oklch(0.66 0.18 293);
  --kind-tint-alpha: 0.08;
  /* inherits light — these alias role tokens that already flip. */
  /* FIX(kind-ink-contrast): the --kind-* hues are tuned so the white --kind-ink mark clears 3:1. */
  --kind-page: var(--brand);
  --kind-document: oklch(0.64 0.15 241);
  --kind-sheet: var(--success);
  --kind-slides: oklch(0.66 0.145 70);
  --kind-text: var(--label-soft);

  /* File kinds in dark: the ones that alias a role token flip with it, so only
     the flat greys are restated — #7C7C7C on #141416 is barely a colour, and a
     zip tile has to read as deliberately neutral rather than as a dead glyph. */
  --kind-code: oklch(0.64 0 0);            /* neutral grey, tuned for the white mark */
  --kind-other: oklch(0.64 0 0);
  /* The mark drawn ON a kind hue (KindGlyph): near-white. It reads on every hue because the
     hues above are tuned to clear 3:1 against it (FIX(kind-ink-contrast)). */
  --kind-ink: oklch(0.985 0 0);
  --fc-grey: oklch(0.707 0.022 261.33);   /* cool grey, lifted for the dark canvas */
  /* inherits light — aliases, or identity hues that read on both canvases. */
  --kind-folder: var(--brand);
  --kind-pdf: var(--danger);
  --kind-image: oklch(0.656 0.241 354.3);   /* #EC4899 */
  --kind-video: var(--kind-markdown);
  --kind-audio: oklch(0.64 0.14 237.3);   /* sky, tuned for the white mark */
  --kind-archive: oklch(0.551 0.023 264.4); /* #6B7280 */
  --fc-brand: var(--brand);
  --fc-green: oklch(0.765 0.177 163.22);  /* emerald, lifted for the dark canvas */
  --fc-amber: var(--warning);
  --fc-sky: var(--info);
  --fc-violet: var(--kind-markdown);
  --fc-pink: var(--kind-image);
  --fc-rose: var(--danger);

  /* The canvas darkens; the SHEET stays light, on purpose (see the light block). */
  --doc-canvas: oklch(0.176 0.002 285);   /* #141416 */
  --doc-page: oklch(0.967 0.001 286);     /* #F4F4F5 */
  --doc-page-ink: oklch(0.116 0.003 285.88);
  /* Links ON THE PAPER (Google Docs' #1155CC): the page is paper-light in both
     schemes, so one blue reads at >= 5.9:1 on every page colour we ship. */
  --doc-page-link: oklch(0.488 0.196 261.2);
  /* A commented run on the (always light) sheet: Google Docs' pale yellow, and
     a deeper one for the thread the comments panel is on (editor.css
     \`.doc-comment-mark\`). The same in both modes — the paper does not change. */
  --doc-comment: oklch(0.95 0.07 95);
  --doc-comment-active: oklch(0.88 0.14 88);
  --video-frame: oklch(0.09 0.005 280);

  /* ── SHELL BACKDROP + AVATAR STYLE (theme system Phase 1B, 2026-09-23) ────
     Tokens EVERY theme declares, read by \`components/shell/ThemeBackdrop.tsx\`
     (a fixed layer under the page canvas and the rail) and by the shared avatar
     class \`.avatar-shape\` in \`../../index.css\`. Remote Desk
     paints no backdrop and keeps plain circles, so every value here is the
     "off" value — \`none\`, transparent, 0px — and the app renders exactly as it
     did before these tokens existed. See \`../README.md\` → "Shared tokens". */
  --theme-bg-image: none;      /* a cover image, bottom layer */
  --theme-bg-pattern: none;    /* a repeating tile over it (see ../patterns.ts) */
  --theme-bg-pattern-mask: none; /* an optional mask fading the pattern layer only (see hivez) */
  --theme-bg-glow-1: none;     /* soft radial glows over the pattern */
  --theme-bg-glow-2: none;
  --theme-bg-scrim: transparent; /* a flat veil over everything above */
  --theme-bg-animate: 0;       /* 1 = the glows breathe (off under reduced motion) */
  --avatar-shape: none;        /* \`none\` = a circle (\`hexagon\` in a shaped theme) */
  --avatar-radius: 9999px;
  --avatar-filter: initial;    /* the face's SVG filter (shape + ring + glow); \`initial\` = none, and composes with a caller's \`grayscale\` (index.css) */
  --avatar-filter-plain: initial;  /* the plain-ring variant (\`.avatar-plain\`); \`initial\` = none here too */
  --avatar-filter-ring: initial;  /* the ringed variant (\`.avatar-ring\`); \`initial\` = none — Remote Desk has no ring */
  --avatar-mask: none;         /* the shape as a mask image (fills, overlays) */
  --avatar-frame-mask: none;   /* a frame's semantic-ring mask image */
  --avatar-glow-mask: none;    /* a frame's speaking-glow mask image (FIX(hivez-web-status-ring)) */
  --avatar-ring-width: 0px;    /* 0 = no theme ring (keeps FaceStack's card gap) */
  --avatar-ring-color: transparent;   /* ring gradient, light (top) end */
  --avatar-ring-color-2: transparent; /* ring gradient, deep (bottom) end */
  --avatar-glow-color: transparent;
  --avatar-away-color: oklch(0.7 0.01 265);   /* a shaped theme's away status ring on the 2D floor; unused by the circle */
  --avatar-focus-color: var(--danger);        /* a shaped theme's focus status ring; unused by the circle */
  /* The dot colour of the \`bg-app-dots\` / \`bg-page-dots\` canvas texture. Was a
     literal inside the utility; the same value in both modes. */
  --canvas-dots-ink: oklch(0.55 0.02 265 / 0.1);

  /* THE "EPIC" RING (own-room card, Web view — \`epic-border\` in \`../../index.css\`).
     Four gradient stops, tokenised out of the utility so a theme can pick its own
     ring hues instead of inheriting Remote Desk's rainbow. These are the EXACT
     hexes the utility hardcoded before (cyan → indigo → pink), so this is
     pixel-identical to the old literal gradient — same value in both modes. */
  --epic-1: #67e8f9;
  --epic-2: #818cf8;
  --epic-3: #e879f9;
  --epic-4: #f9a8d4;

  /* LIVE-MEETING SWEEP CORE (Web view room card — \`meeting-sweep\` in
     \`../../index.css\`). The bright centre of the travelling light band; the
     band's flanks use --brand. Same reason as light: a bright indigo (hue 278) that lifts off the dark card. */
  --meeting-sweep-core: oklch(0.8 0.13 278);

  /* MOTION (docs/audits/MOTION_AUDIT_2026-09.md, "Tokens"). Durations + easings for
     every open / close / move in the app — a theme retunes its PERSONALITY
     here, the same reason radius and glass live in this file. The JS mirror is
     \`DURATION\` / \`EASING\` in ../../lib/ui/motion.ts (a parity test pins the
     two). \`../../index.css\` shortens them under \`prefers-reduced-motion\`.
     Same values in both modes. Every value below inherits light. */
  --motion-duration-fast: 120ms;        /* fades, tooltips, swap cross-fade, backdrop */
  --motion-duration-base: 180ms;        /* popovers, menus, ORIGIN-SCALE, FADE-ONLY windows */
  --motion-duration-slow: 260ms;        /* SLIDE (panes, gallery), docks, highlights */
  --motion-duration-drawer: 240ms;      /* edge drawers */
  --motion-duration-layout: 240ms;      /* LAYOUT: FLIP reflow, width/height transitions */
  --motion-duration-emphasized: 320ms;  /* CONTAINER TRANSFORM enter */
  --motion-duration-exit: 200ms;        /* CONTAINER TRANSFORM / window close */
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-decelerate: cubic-bezier(0, 0, 0, 1);
  --motion-ease-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --motion-ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --motion-ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* DRIVE REDESIGN TOKENS (Figma uFV24QMoKxFW5zFCYjv6aC, section "Drive" 2121:114008,
     2026-11-08). Only the Drive values with no close existing token; every other
     Drive colour maps onto the shared set (see the Drive token map). Utilities:
     bg-drive-card, bg-drive-subtle, bg-drive-chip, bg-drive-scrim, bg-drive-media,
     bg-drive-media-badge, shadow-drive-page / -menu / -sheet / -dialog / -toast /
     -segment / -brand. */
  --drive-surface-card: oklch(0.985 0 0 / 0.06);
  --drive-surface-subtle: oklch(1 0 0 / 0.04);
  --drive-surface-chip: oklch(1 0 0 / 0.08);
  --drive-scrim: oklch(0 0 0 / 0.5);
  --drive-media: oklch(0.09 0.005 280);
  --drive-media-badge: oklch(0 0 0 / 0.6);
  --drive-elevation-page: 0 8px 24px -4px oklch(0 0 0 / 0.3), 0 1px 2px oklch(0 0 0 / 0.3);
  --drive-elevation-menu: 0 12px 32px -6px oklch(0 0 0 / 0.5);
  --drive-elevation-sheet: 0 12px 32px -6px oklch(0 0 0 / 0.5), 0 2px 4px oklch(0 0 0 / 0.3);
  --drive-elevation-dialog: 0 2px 4px oklch(0 0 0 / 0.4);
  --drive-elevation-toast: 0 12px 16px -4px oklch(0 0 0 / 0.4);
  --drive-elevation-segment: 0 0 2px oklch(0 0 0 / 0.4);
  --drive-elevation-brand: 0 4px 18px oklch(0.55 0.253 278 / 0.18);

  /* FUNKY GLASS materials / hex field - off here. The glass utilities in index.css (glass-thin,
     glass-thick, glass-chip, glass-float, glass-bar, glass-dim, page-plate) are gated on these, so with them OFF this theme stays
     pixel-identical (the plate inset and radius are 0 and the plate's solid colour is just the
     ground). The live values are in ../funkyglass/. */
  --glass-filter-thin: none;
  --glass-filter-thick: none;
  --glass-highlight: transparent;
  --glass-sheen: none;
  --glass-rim: transparent;
  --glass-filter-float: none;
  --glass-float: var(--popover);
  --glass-filter-bar: none;
  --glass-bar: var(--background);
  --plate-tile: var(--card);
  --plate-well: var(--muted);
  --plate-hover: var(--accent);
  --plate-track: var(--segmented-track);
  --page-plate: transparent;
  --page-plate-edge: transparent;
  --page-plate-radius: 0px;
  --page-plate-solid: var(--background);
  --theme-bg-hex-line: transparent;
  --theme-bg-hex-glow: transparent;
  --theme-bg-vignette: none;
  --sweep-duration: 14s;
}
`})),d,f=e((()=>{d=`/**
 * THEME "Remote Desk" (\`remotedesk\`), LIGHT mode.
 *
 * A THEME is one palette with TWO required modes: this file and its sibling
 * \`./dark.css\`. Every colour, radius, glass, shadow and shell token the app
 * paints with is declared in both; nothing in the app hardcodes a palette
 * value, so changing a value here restyles the whole product. The
 * \`@theme inline\` block in \`../../index.css\` is what maps these tokens onto
 * Tailwind utilities — it is theme-independent and lives there.
 *
 * COMPLETE BLOCK. This block and the dark one declare the IDENTICAL token-name
 * set (\`registry.test.ts\` enforces it). A block is applied to whatever element
 * carries the attributes — <html> for the page, a \`<ThemeScope>\` div for a
 * preview — and a preview inside a page of the other mode must not inherit a
 * single value from its surroundings.
 *
 * SELECTOR. This is no longer the bare-\`:root\` fallback; the default theme's
 * light file (\`../hivez/light.css\`) carries it.
 *
 * \`--scheme\` is what Tailwind's \`dark:\` variant queries (a container style
 * query in \`../../index.css\`), so it must be set in every block.
 *
 * The runtime layout vars (\`--app-bar-h\`, \`--app-*-inset\`) are NOT here: they
 * are JS-set app state, not design, and live in a plain \`:root\` in index.css.
 *
 * Adding a theme: see \`../registry.ts\` and \`../README.md\`.
 */

[data-theme='remotedesk'][data-scheme='light'] {
  /* The mode this block is. \`color-scheme\` drives native form controls and
     scrollbars; \`--scheme\` is what the \`dark:\` variant queries. */
  color-scheme: light;
  --scheme: light;

  /* The shadcn base radius. 0.5rem (8px), not the stock 0.625rem: the design
     system's ramp is 4/6/8/12 (sm/md/lg/xl), which this base is what derives —
     \`--radius-lg\` IS the ramp's 8px chip radius. Before: 0.625rem, which pushed
     the whole derived ramp 2px up (6/8/10/14) and left every shadcn control a
     visible step rounder than the artboards. */
  --radius: 0.5rem;

  /* The typeface, read by \`--font-sans\` (\`../../index.css\` \`@theme inline\`).
     Every exported Remote Desk text style specifies Inter, and the tracking
     values baked into those styles are tuned for its metrics. Loaded in
     main.tsx via fontsource. */
  --font-theme: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;

  /* Subtle cool-neutral identity (hue ~265, tiny chroma) — barely-tinted greys
     in the spirit of Jira/Linear. Cards stay crisp white to pop off the canvas. */
  /* Figma "bg light" #E5E5E5. The page background is a mid GREY on purpose —
     it is what makes the 40%-white glass surfaces read as glass. On the old
     near-white (oklch(0.994 0.0015 265)) a translucent white panel was
     invisible, which is why the rail and cards looked flat. Note this is the
     same value as --surface-sunken: an active menu item is literally the page
     colour showing through the glass above it. */
  --background: oklch(0.922 0 0);
  /* Text/Default. The DS now LEADS the app (design-sync 2026-09-05): the token
     file's near-black is oklch(0.116 0.003 285.88) ≈ #09090B, a touch deeper and
     with the system's faint cool cast. Before: oklch(0.231 0 0) (Figma "Black"
     #1D1D1D), read off the 2026-08 export — every heading rendered a step
     lighter than the redesign artboards. */
  --foreground: oklch(0.116 0.003 285.88);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.116 0.003 285.88);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.116 0.003 285.88);
  /* Brand-driven since the 2026-08 redesign — the value lives in \`--brand\`
     below, so the brand is stated ONCE and \`--primary\` is just its role.
     Before: oklch(0.21 0.012 265) — a near-black with no brand identity. */
  --primary: var(--brand);
  --primary-foreground: var(--brand-foreground);
  --secondary: oklch(0.968 0.004 265);
  --secondary-foreground: oklch(0.116 0.003 285.88); /* FIX(ds-2026-09): follows Text/Default. Before: oklch(0.21 0.012 265). After: #050506 */
  --muted: oklch(0.968 0.004 265);
  /* Figma "gray 500" #666666 — the design system's secondary-text colour, and
     the one the exported components reference for every label and caption.
     Before: oklch(0.553 0.013 265), a slightly lighter COOL grey from the old
     palette; against the redesign's neutral greys it read faintly blue. Neutral
     chroma 0 on purpose — this sits beside pure-grey surfaces everywhere.
     Retuned 2026-09-05 to the DS token file's Text/Muted, oklch(0.398 0 0)
     ≈ #525252 — a step darker than the old #666666, which the redesign
     artboards need for 14px secondary copy on an 80%-white sheet. */
  --muted-foreground: oklch(0.398 0 0);
  --accent: oklch(0.965 0.006 265);
  --accent-foreground: oklch(0.116 0.003 285.88); /* FIX(ds-2026-09): follows Text/Default. Before: oklch(0.21 0.012 265). After: #050506 */
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.922 0.004 265);
  --input: oklch(0.922 0.004 265);
  /* Focus rings are brand-tinted. Applied at 50% by the \`outline-ring/50\` base
     rule, so full brand chroma here is deliberate — it lands as a soft halo. */
  --ring: var(--brand);
  /* Slim global scrollbars (see the block after @layer base). */

  /* The left app rail (AppRail + its buttons). FIX(rail-theme-unresponsive): the
     rail was hard-coded to \`bg-slate-900 / text-slate-300 / hover:bg-slate-800\`,
     so it stayed dark in light mode and ignored the theme toggle entirely. It gets
     its OWN tokens rather than reusing \`--card\`, because the rail wants to read as
     a recessed chrome surface distinct from the content cards beside it — and
     naming both modes here means the contrast can't accidentally invert. Hue 265
     and the soft-slate feel match the rest of the palette (no pure black). */
  --rail: oklch(0.965 0.005 265);
  --rail-foreground: oklch(0.44 0.014 265);
  --rail-accent: oklch(0.925 0.007 265);
  --rail-accent-foreground: oklch(0.21 0.012 265);
  --rail-border: oklch(0.90 0.005 265);

  --scrollbar-thumb: oklch(0.65 0.02 265 / 0.45);
  --scrollbar-thumb-hover: oklch(0.55 0.02 265 / 0.6);

  /* ─────────────────────────────────────────────────────────────────────────
     REDESIGN TOKENS — the 2026-08 Figma system (file HZyLvenPBOxeGwXeKq1hOh).

     Every colour the new UI needs, stated once, here. Components must consume
     these through the generated utilities (\`bg-brand\`, \`border-glass\`, …) and
     must NOT re-type a hex or an rgba() at the call site — that is the whole
     point of the phase.

     ON ALPHA: oklch carries alpha natively via the slash form, exactly as
     \`--border\` and \`--scrollbar-thumb\` above already do. So the design's
     translucent swatches ("white 40", "Surface/Glass60", the 16% status tints)
     survive as first-class tokens. Do NOT convert this file to rgba() to
     "preserve alpha" — nothing is lost here. The alpha loss people see comes
     from Figma's own \`get_variable_defs\` export, which flattens \`green 100\`
     and \`green 500\` both to #16A34A; read alpha off the CSS export instead.

     LIGHT ONLY, by decision — the Figma file has no dark variant yet. The
     \`.dark\` counterparts below are conservative placeholders that keep dark
     mode legible during the migration. They are NOT a dark design; replace
     them wholesale when one exists.
     ───────────────────────────────────────────────────────────────────────── */

  /* Brand. Figma: Primary/Default #5B4BFF, Primary/extra light #E4E2FD.
     White on brand measures 5.39:1 — AA at any size. Identical in both modes;
     only the TINT changes (see the .dark block). */
  --brand: oklch(0.55 0.253 278);
  /* Text/OnPrimary. The DS names #FAFAFA rather than pure white — matching the
     dark side, which already used it. Before: oklch(1 0 0). */
  --brand-foreground: oklch(0.985 0 0);
  --brand-tint: oklch(0.923 0.037 289.06);
  /* FIX(tint-ink): text ON a brand wash — \`bg-brand-tint\`, \`bg-brand-subtle\`,
     \`bg-brand/NN\`, \`bg-primary/NN\`. LIGHT keeps brand ink, because the tint is a
     pale lavender and brand-on-lavender IS the design's chip colouring. DARK is
     Text/OnPrimary, because there the tint is a NAVY on which brand ink (L 0.55)
     went dim — owner call 2026-09-08: "When I have a blue background I want the
     text to be white, so it is visible throughout the system."
     Before: every wash carried \`text-brand\`/\`text-primary\` (dim in dark, patched
     ad hoc with \`dark:text-indigo-300\` / \`dark:text-foreground\`). After: one
     token, white in dark. LIGHT is Primary/Deep rather than Primary/Default
     because brand on the lavender tint is ≈4.3:1 — under AA at chip text sizes
     (10–12px) — while brand-deep measures ≈5.1:1, the same step
     \`CLUSTER_INK.sharing\` (rowMeta.ts) already took for the same reason. */
  --brand-tint-foreground: var(--brand-deep);
  /* Primary/light — the hover step above --brand on a filled control, and the
     ring on a focused brand chip. */
  --brand-light: oklch(0.578 0.235 278.29);
  /* The two ALPHA brand washes the Task Center leans on. \`--brand-tint\` is the
     opaque Primary-100 chip fill; these two are for surfaces that must let the
     glass sheet show through: \`--brand-ghost\` (6%) is a hover/selected row,
     \`--brand-subtle\` (16%) is a selected VIEWS row or an active filter chip. */
  --brand-ghost: oklch(0.55 0.253 278.01 / 0.06);
  --brand-subtle: oklch(0.55 0.253 278.01 / 0.16);
  /* A metallic IMAGE painted over a filled \`bg-brand\` (the \`brand\` button, the
     active chip, the rail's "New" pill — see \`../README.md\` → "Shared tokens").
     Remote Desk's brand is a flat violet, so this is \`none\`: the flat fill is
     untouched and those surfaces render exactly as before the token existed.
     Its value also gates the \`brand-fill:\` variant in \`../../index.css\`. */
  --brand-fill: none;

  /* Glass. Figma: "white 40" (the rail body), Surface/Glass60, Border/glassy. */
  --surface-glass: oklch(1 0 0 / 0.4);
  --surface-glass-strong: oklch(1 0 0 / 0.6);
  --border-glass: oklch(1 0 0 / 0.6);
  /* Glass ON glass (a card or pill inside a glass panel) and the app CHROME
     (rail + header). Both are just \`--surface-glass\` here — alpha glass
     stacks, so a nested pane reads a step up by itself, and the chrome is the
     same glaze as the panels, exactly as before these tokens existed. They
     are separate names because a theme with OPAQUE glass (Hivez) needs a
     real nested step and a solid chrome (see \`../README.md\` → "Shared tokens"). */
  --surface-glass-inset: var(--surface-glass);
  --surface-chrome: var(--surface-glass);
  /* The search palette's scrim (\`DIALOG_SCRIM.glass\`, dialog.tsx): blurs and
     LIGHTENS the page instead of darkening it. Remote Desk's glass IS that
     wash already, so this is just \`--surface-glass\` — pixel-identical to
     before the token existed (see \`../README.md\` → "Shared tokens"). */
  --scrim-glass: var(--surface-glass);
  /* A background image on the rail (Hivez: a glowing honeycomb at its foot).
     Remote Desk has none. */
  --rail-decoration: none;

  /* The SOLID-white hairline (\`border-hairline\` / \`bg-hairline\`). The exports
     draw two different whites and mixing them up is visible: the edge of a
     glass panel against the page is \`border-glass\` (white 60%), but the
     dividers and card edges INSIDE a glass sheet — the Task Center's header
     divider, its sidebar rule, the quick-create and meta-card borders — are
     flat \`#FFFFFF\`. Rendering those at 60% made every internal line read a
     step dimmer than the mock (user report 2026-08-22). */
  --border-hairline: oklch(1 0 0);

  /* The WHITE raised recipe for a selected item ON a glass sheet (Figma "menu
     item main": 0 0 1px white-16 + inset 0 0 4px #FFF). Deliberately separate
     from --elevation-raised, whose OUTER ring is black-16 — right for a card
     on the grey page, but on an 80%-white sheet that dark ring is exactly the
     grey halo that made the selection look dirty. */
  --elevation-glass-raised: 0 0 1px oklch(1 0 0 / 0.16), inset 0 0 4px oklch(1 0 0);

  /* Raised chrome. Figma: #F3F3F3 (profile card), "bg light" #E5E5E5 (the
     active menu item), "stock strong" #C0C0C0 — "stock" is a typo for stroke
     in the source file; the name is corrected here on purpose. */
  --surface-raised: oklch(0.964 0 0);

  /* Figma #EFEFEF — the app header's floating chips (user call 2026-08-22):
     the header paints no bar, so each control carries this OPAQUE fill. A
     step below white on purpose — solid so the scene behind can't re-tint it
     (the glass fills shifted blue over the 3D sky), and off-white so the
     chips read as chrome rather than glaring cards. */
  --surface-chip: oklch(0.952 0 0);
  --surface-sunken: oklch(0.922 0 0);
  /* Segmented tab switcher (owner call 2026-10-19): recessed track + raised neutral thumb; thumb is clearly lighter than track. */
  --segmented-track: oklch(0.922 0 0);
  --segmented-thumb: oklch(1 0 0);
  --border-strong: oklch(0.808 0 0);

  /* Section headers ("Workspace", "General"). Figma: gray 300 #A2A2A2.
     LEGACY, kept so the 2026-08 kits keep rendering: the 2026-09 system has
     three text steps and only three (Default / Muted / Subtle), and this is a
     fourth with no binding in the file. Prefer --label-soft (Text/Subtle) for
     anything new; this stays because dozens of section headers reference it. */
  --label-muted: oklch(0.712 0 0);

  /* Figma \`Text/Subtle\` #7c7c7c — the overlay kit's quiet ink (section labels,
     row meta, read timestamps, keycaps). See
     docs/design-system/figma-remote-desk/OVERLAY_KIT.md §5/§9, which flags it as
     having no exact token: --muted-foreground is a step darker and --label-muted
     (#a2a2a2) a step lighter, and the overlays use this middle step everywhere.
     EXPOSED AS \`--color-subtle-foreground\` (→ \`text-subtle-foreground\`,
     \`bg-subtle-foreground\`), NOT \`--color-subtle\`: that theme key is already
     taken by --border-subtle, which is what generates the \`border-subtle\` the
     chip primitive is built on. */
  --text-subtle: oklch(0.57 0 0);

  /* Figma #6c6d82 — the fill behind a CHANNEL avatar's \`#\` (OVERLAY_KIT §4).
     A channel avatar is the same box as a person's, squared off at
     \`Radius/Medium\`, on this one slate tint instead of the per-user hash colour.
     One value in both themes on purpose: it is an identity colour, not a
     surface, and it has to read the same against a white card and a dark one. */
  --avatar-channel: oklch(0.53 0.02 280);

  /* Status. Figma: green 500 #16A34A with its 16% tint behind "2 Live". */
  --success: oklch(0.627 0.17 149);
  --success-tint: oklch(0.627 0.17 149 / 0.16);
  /* Success/surface — the OPAQUE pale-green card fill (#D1FAE5-ish) the DS uses
     behind a "Done"/"Shipped" block. Distinct from --success-tint, which is the
     16% alpha wash for a chip that must let its backdrop through. */
  --success-surface: oklch(0.943 0.044 163.84);
  /* The readable text pair for a --success FILL (a solid pill/button), not the tint. */
  --success-foreground: oklch(0.985 0 0);
  --destructive-tint: oklch(0.577 0.245 27.325 / 0.16);

  /* Figma #07A6F6 — the informational blue, introduced by the Lobby's
     Attendance stat tile. A fourth status hue alongside success/danger/brand,
     carrying no judgement: it marks a measure rather than a good/bad state. */
  --info: oklch(0.694 0.161 241);
  --info-tint: oklch(0.694 0.161 241 / 0.16);
  /* The readable text pair for an --info FILL, matching today's text-white. */
  --info-foreground: oklch(0.985 0 0);

  /* Figma "color/danger/default" #FF2056 — the unread dot on the header bell.
     A distinct hue from --destructive (which is our destructive-ACTION red, on
     buttons); this one is a status marker, so the two are kept separate. */
  --danger: oklch(0.643 0.245 16.5);
  /* Ink on a SOLID --danger / --destructive fill (\`text-danger-ink\`): pure white, exactly what the
     hard-coded \`text-white\` it replaced rendered, so this theme is pixel-identical to before. */
  --danger-ink: oklch(1 0 0);
  /* The 16% wash behind a danger STATUS marker (the Overdue pill's fill).
     --destructive-tint is the same recipe over the destructive-ACTION red; the
     two hues are kept apart, so their tints are too. */
  --danger-tint: oklch(0.643 0.245 16.5 / 0.16);

  /* Figma #F59E0B — the CAUTION amber. A fifth status hue, and the one the
     alert ladder needs: a knock, a screen-share request or a meeting wrap-up
     warning is neither good (--success) nor bad (--danger) — it is a decision
     waiting on you. Introduced by the alerts redesign
     (docs/modules/notifications/ALERTS_REDESIGN_PROMPT.md §1); before it, the
     toast sink's amber accent was the app's one raw-hue holdout
     (\`bg-amber-500/15 text-amber-600 dark:text-amber-400\`).
     The notification-centre redesign arrived at the same token independently,
     for its Presence category accent (REDESIGN_CHECKLIST §4.2) — both branches
     picked Tailwind's own amber-500 oklch, so migrating the toast sink onto it
     changes no pixels. One definition, two callers.
     Chroma retuned 0.188 -> 0.165 on 2026-09-05 to the DS token file's value. */
  --warning: oklch(0.769 0.165 70.08);
  --warning-tint: oklch(0.769 0.165 70.08 / 0.16);
  /* The READABLE text pair for --warning-tint. Amber at full chroma fails
     contrast as text, so a "Medium" priority pill is --warning-deep on
     --warning-tint — which is also what retires the tracker's raw \`amber-500\`
     (design kit README deviation #6). */
  --warning-deep: oklch(0.512 0.132 66);
  /* The readable text pair for a --warning FILL (a solid pill/button), matching
     today's text-white — distinct from --warning-deep, which is for TEXT on the
     16% --warning-tint wash, not for text on the solid fill. */
  --warning-foreground: oklch(0.985 0 0);

  /* Figma #10B981 — the CANVAS presence green. The export uses TWO greens on
     purpose: chrome keeps "green 500" #16A34A (--success — the rail's "2 Live"
     tag, its 16% tint), while everything presence-shaped on the card wall —
     the Active dot/label on Web-view cards, the "N active" chip (8% fill,
     13.3% edge), the speaking halos, the avatar mini-dots — reads this
     brighter emerald. The status-dot mirrors (channels/occupantStatus.ts,
     topdown/statusPip.ts, office3d NameplateLayer.tsx) carry it as a literal
     hex because the 2D/3D pips bake into canvas textures, out of CSS-var
     reach — keep them in step with this value. */
  --presence: oklch(0.696 0.149 162);

  /* Figma "Text/Subtle" #7C7C7C — meta lines, timestamps, eyebrows, section
     labels; the third and lightest step of the 2026-09 text ramp.
     FIX(ds-2026-09): Before: oklch(0.603 0 0) (#818181, the 2026-08 export's
     "Discussion topic :" lead-in). After: oklch(0.586 0 0) — Text/Subtle. */
  --label-soft: oklch(0.586 0 0);

  /* Figma "Text/Disabled" — the text step at black 50%, for a control that is
     present but not actionable. ALPHA on purpose: it has to sit on both the
     grey page and a white card and read the same on each. */
  --text-disabled: oklch(0.116 0.003 285.88 / 0.5);

  /* Figma "Icon/Default" and "Icon/muted". Icons follow the TEXT ramp rather
     than carrying their own greys — named separately so a future icon-only
     retune has somewhere to land, and so a component can say \`text-icon\`
     instead of borrowing a text token by accident. Both resolve through the
     text vars, so neither needs a .dark restatement. */
  --icon: var(--foreground);
  --icon-muted: var(--muted-foreground);

  /* Figma "Border/light" — 30% white. Bound on the dark frame only; mirrored
     here (inferred) so a component can name one edge for both themes. */
  --border-light: oklch(1 0 0 / 0.3);

  /* Figma "Surface/Tint" — a black 8% wash laid OVER a surface to knock it back
     a step without introducing a new grey. Inverted to white 8% in dark, where
     a black wash on near-black is invisible. */
  --surface-tint: oklch(0.116 0.003 285.88 / 0.08);
  --ledger-stripe: oklch(0 0 0 / 0.03); /* FIX(ledger-zebra-tokens): zebra row fill, a translucent wash so the step holds on any host */
  --ledger-hover: oklch(0 0 0 / 0.07);
  --table-head: oklch(0.955 0 0); /* opaque table/list header band — never translucent: it sits on the honeycomb canvas */

  /* The modal backdrop. Figma: rgba(20,20,20,0.24) + blur(7px) — a LIGHT veil,
     not the stock black/50: the panel's own 80%-white glass (see dialog.tsx)
     does the separating. Pair with \`backdrop-blur-scrim\`. */
  --scrim: oklch(0.191 0 0 / 0.24);

  /* Figma "stock medium" #DADADA — the DEFAULT border, one step lighter than
     "stock strong" #C0C0C0. The header search field, the icon buttons and the
     occupancy track all use it. */
  --border-default: oklch(0.888 0 0);

  /* The chip/segment edge: Figma "black 8%, inside, weight 1". An ALPHA black
     rather than a flat grey on purpose — it has to sit on both the page grey and
     a white active chip and read the same on each, which a solid hex cannot do.
     Figma's "inside" stroke is just border-box, which is our default. */
  --border-subtle: oklch(0 0 0 / 0.08);

  /* Figma "primary deep" #4F39F6 — the 1px edge on a filled brand button,
     which sits a shade darker than the fill so the button reads as raised. */
  --brand-deep: oklch(0.51 0.262 277);

  /* The brand glow under filled brand buttons (Enter / Join / New room).
     Figma: 0 8px 12px rgba(91,75,255,0.24). */
  --elevation-brand: 0 8px 12px oklch(0.55 0.253 278 / 0.24);

  /* The soft lift under a full-width page panel (Recent activity).
     Figma: 0 10px 26px rgba(12,17,33,0.05) — much wider and softer than
     --elevation-raised, which is a 1px control edge. */
  --elevation-panel: 0 10px 26px oklch(0.2 0.02 265 / 0.05);

  /* THE OVERLAY LIFT. Figma \`0 18 44 -8 rgba(18,20,33,.14)\` on the Messages
     card and the notifications panel; the search palette wears the deeper
     \`0 24 60 -10 rgba(18,20,33,.18)\` because it floats over a scrim rather than
     over the page (OVERLAY_KIT.md §1). Bigger and softer than --elevation-panel,
     which is an in-flow block's lift, not a popover's. */
  --elevation-overlay: 0 18px 44px -8px oklch(0.15 0.02 260 / 0.14);
  --elevation-overlay-strong: 0 24px 60px -10px oklch(0.15 0.02 260 / 0.18);
  /* The barely-there lift under a SOLID card on the grey page — a tracker board
     card, a dialog, a feed toast. Not a Figma effect; it names what the app was
     already writing as Tailwind's \`shadow-xs\`, so those call sites can stop
     reaching for a stock step that the design does not own.
     FIX(theme-1a): this file declared --elevation-flat TWICE, with the same
     value. The first copy (here) was removed; the one declaration left is
     further down, beside --elevation-raised. */

  /* The subtle halo an URGENT unread pill wears on the header bell (redesign
     artboard N7) — a soft --danger glow so an urgent count reads as more
     alarming than an ordinary one without changing the pill's size. Same
     restated-LCH recipe as --destructive-tint above (a relative-color
     derivation off --danger would work too, but every tint/glow token in this
     file already re-states its base colour's numbers rather than deriving
     from the var, so this matches). */
  --elevation-danger-glow:
    0 0 0 3px oklch(0.643 0.245 16.5 / 0.3), 0 0 10px 2px oklch(0.643 0.245 16.5 / 0.45);

  /* The single elevation recipe the design reuses on every lifted surface —
     active nav item, profile card, collapsed profile button. One token, not a
     shadow re-typed per component. */
  --elevation-raised: 0 0 1px oklch(0 0 0 / 0.16), inset 0 0 4px oklch(1 0 0);

  /* The lightest lift in the system — a 1px hairline drop, no inner highlight.
     For a nested card that sits ON a white sheet and needs separation without
     the raised recipe's ring (a project card in the Browse-projects grid, a
     settings section card). Figma: 0 1px 2px rgba(0,0,0,0.05). */
  --elevation-flat: 0 1px 2px oklch(0 0 0 / 0.05);

  /* A faint brand wash over the grey page background. The grey (--background,
     #E5E5E5) is what actually makes the glass read; this only adds the soft
     colour cast the mockups have in the top corners. Applied via \`bg-shell\`. */
  --shell-backdrop:
    radial-gradient(60rem 40rem at 8% -10%, oklch(0.55 0.253 278 / 0.07), transparent 60%),
    radial-gradient(50rem 35rem at 100% 0%, oklch(0.627 0.17 149 / 0.04), transparent 55%);

  /* DOCUMENT-KIND HUES (docs redesign 2026-09, brief 02 §2). One hue per doc
     kind, so a glyph, a chip and a card preview all read as the same thing at a
     glance. Five of the six REUSE an existing role token — page = brand,
     document = info, sheet = success, slides = warning, text = the subtle label
     grey — so only markdown introduces a colour of its own (identity violet;
     the kinds it sits between are already spoken for). The 16 %/8 % TINT behind
     each glyph is mixed at the call site from these, never a second token. */
  /* FIX(kind-ink-contrast): the --kind-* hues are tuned so the white --kind-ink mark clears 3:1. */
  --kind-page: var(--brand);
  --kind-document: oklch(0.64 0.15 241);
  --kind-sheet: var(--success);
  --kind-slides: oklch(0.66 0.145 70);
  --kind-markdown: oklch(0.606 0.216 292.7);
  --kind-text: var(--label-soft);
  /* Kind tints are the hue at 16 % in light, 8 % in dark (kit \`--kind-tint-alpha\`). */
  --kind-tint-alpha: 0.16;

  /* FILE-KIND HUES (Drive redesign 2026-09, \`drive-design-2026-09/kit/drive-kit.css\`).
     The Drive shows every file type, not just the six document kinds above, so
     the ramp continues here. Same rule: reuse a role token wherever the design's
     hex IS that token (folder = brand #5B4BFF, pdf = danger, image = the identity
     pink, video = the markdown violet, audio = a sky blue), and introduce a
     colour only where nothing existing matches. \`archive\`/\`code\`/\`other\` share
     one neutral grey on purpose — they are the "no preview to promise" kinds. */
  --kind-folder: var(--brand);
  --kind-pdf: var(--danger);
  --kind-image: oklch(0.656 0.241 354.3);   /* #EC4899 */
  --kind-video: var(--kind-markdown);
  --kind-audio: oklch(0.64 0.14 237.3);   /* sky, tuned for the white mark */
  --kind-archive: oklch(0.551 0.023 264.4); /* #6B7280 */
  --kind-code: oklch(0.58 0 0);             
  --kind-other: oklch(0.58 0 0);
  /* The mark drawn ON a kind hue (KindGlyph): near-white. It reads on every hue because the
     hues above are tuned to clear 3:1 against it (FIX(kind-ink-contrast)). */
  --kind-ink: oklch(0.99 0 0);

  /* FOLDER COLOURS — the \`color\` field on a folder, a user choice rather than a
     derived hue, so it is its own ramp. The eight names are the server's enum
     (\`drive.validators.ts\` → \`folderColor\`); \`kinds.ts\` maps a name to the token. */
  --fc-brand: var(--brand);
  --fc-green: oklch(0.696 0.17 162.48);   /* #10B981, Figma New folder swatch 3 */
  --fc-amber: var(--warning);
  --fc-sky: var(--info);
  --fc-violet: var(--kind-markdown);
  --fc-pink: var(--kind-image);
  --fc-rose: var(--danger);
  --fc-grey: oklch(0.551 0.027 264.364);  /* #6B7280, Figma New folder swatch 6 */

  /* THE DOCUMENT SHEET. A \`document\` renders as a printable A4 page, and a page
     you are laying out for print is WHITE — in both themes. So these are not
     \`--card\`/\`--background\` by another name: in dark mode the canvas goes to
     #141416 and the sheet stays a light #F4F4F5 with dark ink, deliberately
     (docs design 2026-09, \`docs-kit.css\`). A dark "page" would show you a
     document that looks nothing like what comes out of the printer. */
  --doc-canvas: oklch(0.912 0.001 286);   /* #E3E3E5 */
  --doc-page: oklch(1 0 0);
  --doc-page-ink: oklch(0.116 0.003 285.88);
  /* Links ON THE PAPER (Google Docs' #1155CC): the page is paper-light in both
     schemes, so one blue reads at >= 5.9:1 on every page colour we ship. */
  --doc-page-link: oklch(0.488 0.196 261.2);
  /* A commented run on the (always light) sheet: Google Docs' pale yellow, and
     a deeper one for the thread the comments panel is on (editor.css
     \`.doc-comment-mark\`). The same in both modes — the paper does not change. */
  --doc-comment: oklch(0.95 0.07 95);
  --doc-comment-active: oklch(0.88 0.14 88);

  /* A VIDEO FRAME. The letterbox behind a poster (and the whole tile before one
     exists) is near-black in BOTH themes — a video thumbnail on a white card
     would read as a broken image, and the play button needs something to be
     white against. Darker still in dark mode, so a recording tile keeps an edge
     against the card it sits on (\`drive-kit.css\`). */
  --video-frame: oklch(0.22 0.01 280);

  /* ── Categorical chart hues (\`--chart-1\` … \`--chart-7\`) ──────────────────
     A CATEGORY palette, not a semantic one: these say "this is a different
     series from that one" and nothing else, so they must never be reached for
     when a colour is supposed to MEAN something (that is --success/--danger/
     --warning/--info). Added 2026-09-17 for the attendance activity timeline,
     where each product surface (Docs, Chat, Tracker, …) needs its own line —
     reusing the status hues there would make "in Docs" read as a state.
     Seven, evenly spread around the wheel at one lightness/chroma, so any two
     neighbours in a lane stay distinguishable. */
  --chart-1: oklch(0.62 0.17 264);
  --chart-2: oklch(0.62 0.17 310);
  --chart-3: oklch(0.62 0.17 350);
  --chart-4: oklch(0.65 0.16 55);
  --chart-5: oklch(0.65 0.14 120);
  --chart-6: oklch(0.65 0.13 175);
  --chart-7: oklch(0.62 0.15 220);

  /* ── SHELL BACKDROP + AVATAR STYLE (theme system Phase 1B, 2026-09-23) ────
     Tokens EVERY theme declares, read by \`components/shell/ThemeBackdrop.tsx\`
     (a fixed layer under the page canvas and the rail) and by the shared avatar
     class \`.avatar-shape\` in \`../../index.css\`. Remote Desk
     paints no backdrop and keeps plain circles, so every value here is the
     "off" value — \`none\`, transparent, 0px — and the app renders exactly as it
     did before these tokens existed. See \`../README.md\` → "Shared tokens". */
  --theme-bg-image: none;      /* a cover image, bottom layer */
  --theme-bg-pattern: none;    /* a repeating tile over it (see ../patterns.ts) */
  --theme-bg-pattern-mask: none; /* an optional mask fading the pattern layer only (see hivez) */
  --theme-bg-glow-1: none;     /* soft radial glows over the pattern */
  --theme-bg-glow-2: none;
  --theme-bg-scrim: transparent; /* a flat veil over everything above */
  --theme-bg-animate: 0;       /* 1 = the glows breathe (off under reduced motion) */
  --avatar-shape: none;        /* \`none\` = a circle (\`hexagon\` in a shaped theme) */
  --avatar-radius: 9999px;
  --avatar-filter: initial;    /* the face's SVG filter (shape + ring + glow); \`initial\` = none, and composes with a caller's \`grayscale\` (index.css) */
  --avatar-filter-plain: initial;  /* the plain-ring variant (\`.avatar-plain\`); \`initial\` = none here too */
  --avatar-filter-ring: initial;  /* the ringed variant (\`.avatar-ring\`); \`initial\` = none — Remote Desk has no ring */
  --avatar-mask: none;         /* the shape as a mask image (fills, overlays) */
  --avatar-frame-mask: none;   /* a frame's semantic-ring mask image */
  --avatar-glow-mask: none;    /* a frame's speaking-glow mask image (FIX(hivez-web-status-ring)) */
  --avatar-ring-width: 0px;    /* 0 = no theme ring (keeps FaceStack's card gap) */
  --avatar-ring-color: transparent;   /* ring gradient, light (top) end */
  --avatar-ring-color-2: transparent; /* ring gradient, deep (bottom) end */
  --avatar-glow-color: transparent;
  --avatar-away-color: oklch(0.7 0.01 265);   /* a shaped theme's away status ring on the 2D floor; unused by the circle */
  --avatar-focus-color: var(--danger);        /* a shaped theme's focus status ring; unused by the circle */
  /* The dot colour of the \`bg-app-dots\` / \`bg-page-dots\` canvas texture. Was a
     literal inside the utility; the same value in both modes. */
  --canvas-dots-ink: oklch(0.55 0.02 265 / 0.1);

  /* THE "EPIC" RING (own-room card, Web view — \`epic-border\` in \`../../index.css\`).
     Four gradient stops, tokenised out of the utility so a theme can pick its own
     ring hues instead of inheriting Remote Desk's rainbow. These are the EXACT
     hexes the utility hardcoded before (cyan → indigo → pink), so this is
     pixel-identical to the old literal gradient — same value in both modes. */
  --epic-1: #67e8f9;
  --epic-2: #818cf8;
  --epic-3: #e879f9;
  --epic-4: #f9a8d4;

  /* LIVE-MEETING SWEEP CORE (Web view room card — \`meeting-sweep\` in
     \`../../index.css\`). The bright centre of the travelling light band; the
     band's flanks use --brand. Remote Desk's --brand-light is barely lighter than --brand, so the core is its own brighter indigo (hue 278). */
  --meeting-sweep-core: oklch(0.72 0.17 278);

  /* MOTION (docs/audits/MOTION_AUDIT_2026-09.md, "Tokens"). Durations + easings for
     every open / close / move in the app — a theme retunes its PERSONALITY
     here, the same reason radius and glass live in this file. The JS mirror is
     \`DURATION\` / \`EASING\` in ../../lib/ui/motion.ts (a parity test pins the
     two). \`../../index.css\` shortens them under \`prefers-reduced-motion\`.
     Same values in both modes. */
  --motion-duration-fast: 120ms;        /* fades, tooltips, swap cross-fade, backdrop */
  --motion-duration-base: 180ms;        /* popovers, menus, ORIGIN-SCALE, FADE-ONLY windows */
  --motion-duration-slow: 260ms;        /* SLIDE (panes, gallery), docks, highlights */
  --motion-duration-drawer: 240ms;      /* edge drawers */
  --motion-duration-layout: 240ms;      /* LAYOUT: FLIP reflow, width/height transitions */
  --motion-duration-emphasized: 320ms;  /* CONTAINER TRANSFORM enter */
  --motion-duration-exit: 200ms;        /* CONTAINER TRANSFORM / window close */
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-decelerate: cubic-bezier(0, 0, 0, 1);
  --motion-ease-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --motion-ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --motion-ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* DRIVE REDESIGN TOKENS (Figma uFV24QMoKxFW5zFCYjv6aC, section "Drive" 2121:114008,
     2026-11-08). Only the Drive values with no close existing token; every other
     Drive colour maps onto the shared set (see the Drive token map). Utilities:
     bg-drive-card, bg-drive-subtle, bg-drive-chip, bg-drive-scrim, bg-drive-media,
     bg-drive-media-badge, shadow-drive-page / -menu / -sheet / -dialog / -toast /
     -segment / -brand. */
  --drive-surface-card: oklch(1 0 0 / 0.8);
  --drive-surface-subtle: oklch(0.116 0.003 285.88 / 0.04);
  --drive-surface-chip: oklch(0.116 0.003 285.88 / 0.07);
  --drive-scrim: oklch(0.116 0.003 285.88 / 0.32);
  --drive-media: oklch(0.192 0.013 270.7);
  --drive-media-badge: oklch(0 0 0 / 0.6);
  --drive-elevation-page: 0 8px 24px -4px oklch(0.116 0.003 285.88 / 0.05), 0 1px 2px oklch(0.116 0.003 285.88 / 0.04);
  --drive-elevation-menu: 0 12px 32px -6px oklch(0 0 0 / 0.1);
  --drive-elevation-sheet: 0 12px 32px -6px oklch(0.116 0.003 285.88 / 0.1), 0 2px 4px oklch(0.116 0.003 285.88 / 0.06);
  --drive-elevation-dialog: 0 2px 4px oklch(0.116 0.003 285.88 / 0.08);
  --drive-elevation-toast: 0 12px 16px -4px oklch(0 0 0 / 0.06);
  --drive-elevation-segment: 0 0 2px oklch(0.2 0.015 260 / 0.12);
  --drive-elevation-brand: 0 8px 6px oklch(0.55 0.253 278 / 0.24);

  /* FUNKY GLASS materials / hex field - off here. The glass utilities in index.css (glass-thin,
     glass-thick, glass-chip, glass-float, glass-bar, glass-dim, page-plate) are gated on these, so with them OFF this theme stays
     pixel-identical (the plate inset and radius are 0 and the plate's solid colour is just the
     ground). The live values are in ../funkyglass/. */
  --glass-filter-thin: none;
  --glass-filter-thick: none;
  --glass-highlight: transparent;
  --glass-sheen: none;
  --glass-rim: transparent;
  --glass-filter-float: none;
  --glass-float: var(--popover);
  --glass-filter-bar: none;
  --glass-bar: var(--background);
  --plate-tile: var(--card);
  --plate-well: var(--muted);
  --plate-hover: var(--accent);
  --plate-track: var(--segmented-track);
  --page-plate: transparent;
  --page-plate-edge: transparent;
  --page-plate-radius: 0px;
  --page-plate-solid: var(--background);
  --theme-bg-hex-line: transparent;
  --theme-bg-hex-glow: transparent;
  --theme-bg-vignette: none;
  --sweep-duration: 14s;
}
`})),p,m=e((()=>{p=`@import 'tailwindcss';
@import 'tw-animate-css';

/* THE \`dark:\` VARIANT follows the NEAREST theme scope, not any dark ancestor.

   Every theme block (\`./themes/<id>/{light,dark}.css\`) sets an inherited
   \`--scheme: light|dark\`, and every element is a style container, so
   \`@container style(--scheme: dark)\` asks "is the scope I am in dark?". A light
   \`<ThemeScope>\` preview inside a dark page therefore gets NO \`dark:\` styles,
   and a dark preview inside a light page gets all of them. The old selector
   form, \`&:is([data-scheme='dark'] *)\`, matched ANY dark ancestor, so a nested
   light scope still wore every \`dark:\` class of the page around it.

   KNOWN LIMITATION: a style query tests the element's PARENT (the nearest
   ancestor container), so a scope element's OWN \`dark:\` classes read the scheme
   of the scope OUTSIDE it. \`ThemeScope\` renders an inner wrapper for exactly
   this reason — put classes on its children, not on the scope element. For the
   same reason \`dark:\` on <html> itself never matches (nothing is above it);
   <body> and everything below read <html>'s scheme as before.

   SPECIFICITY PARITY: \`&:is([class])\` is there only to keep a \`dark:\` utility at
   (0,2,0), what the old \`:is([data-scheme='dark'] *)\` form produced, so no
   existing \`dark:x\` vs \`hover:y\` / \`data-[state]:y\` tie changes winner. It
   always matches: an element wearing a \`dark:\` class has a class attribute —
   true for every utility user, but a future \`@apply dark:...\` written on a
   classless selector would not match either arm below.

   Support: container style queries on custom properties are Chrome/Edge 111+,
   Safari 18+, Firefox 151+ (Electron + Android WebView are Chromium). An engine
   WITHOUT them (Safari < 18, older Firefox) would otherwise drop every \`dark:\`
   rule outright — the token blocks would still flip, but nothing painted with
   a \`dark:\` utility would follow. The second arm below is the fallback: when
   \`theme.tsx\`'s startup probe finds no style-query support it stamps
   \`data-no-style-queries\` on \`<html>\`, and this plain-selector form (mirroring
   the pre-container-query \`:is([data-scheme='dark'] *)\` shape) takes over. */
@custom-variant dark {
  @container style(--scheme: dark) {
    &:is([class]) {
      @slot;
    }
  }
  &:is(:root[data-no-style-queries][data-scheme='dark'] *) {
    @slot;
  }
}

/* THE \`brand-fill:\` VARIANT — "the theme I am in paints a METALLIC brand
   fill" (\`--brand-fill\` is not \`none\`; today: Hivez). Every theme declares
   \`--brand-fill\` (./themes/<id>/{light,dark}.css): a background IMAGE painted
   over a filled \`bg-brand\` — \`bg-(image:--brand-fill)\` next to \`bg-brand\` —
   which is all a surface that is ALREADY brand-filled needs (the \`brand\`
   button). This variant is for the few surfaces the design fills with gold
   while Remote Desk does NOT (the active filter chip, the rail's "New" pill,
   the active rail row, the outline gold button's wash): their Hivez look is
   written as \`brand-fill:*\` classes, and under Remote Desk (\`none\`) the
   query never matches, so nothing changes there.

   Same machinery as \`dark:\` above: an inherited token read by a container
   style query (follows the NEAREST theme scope), \`&:is([class])\` for the same
   (0,2,0) specificity.

   The second arm is the \`data-no-style-queries\` fallback (as for \`dark:\`,
   and the same root-or-nested \`:is()\` as FIX(loader-hivez-fallback) below):
   without it an engine lacking style queries would still paint the brand
   button's gold IMAGE (a plain \`bg-(image:…)\`) but never its \`brand-fill:\`
   hover, so the Hivez button had no hover feedback at all there. It names
   the one metallic theme outright — a plain selector cannot read a token —
   and the \`:not(…)\` is the nearest-scope counter-rule folded in: an element
   inside a NESTED non-Hivez scope (a Remote Desk ThemeScope preview on a
   Hivez page) is excluded. Add a theme's id here if it ever sets a
   \`--brand-fill\` other than \`none\` (\`funkyglass\` does, like \`hivez\`).

   FIX(brand-fill-fallback-specificity): the fallback arm used to be
   \`&:is(:root[...][data-theme='hivez'] *, ...):not(...)\`, which weighed in at
   (0,7,0) — \`&\` (the utility class) + the \`:is()\` list's own specificity
   (0,3,0, since \`:is()\`/\`:not()\` each count as their most specific argument,
   not zero) + the \`:not()\`'s own (0,3,0). The query arm above is (0,2,0)
   (\`&:is([class])\`), so on an engine WITHOUT style queries (the only one that
   ever matches this arm) a \`brand-fill:\` class outranked a same-specificity
   state variant it should lose to — \`hover:bg-brand\` on \`brandOutline\`, e.g.,
   lost to \`brand-fill:bg-(image:--brand-fill)\` it should have beaten. Wrapping
   the whole \`:is(…):not(…)\` condition in \`:where(…)\` keeps it as the exact
   same match (a \`:where()\` argument list matches identically to \`:is()\`) but
   its specificity is always zero, so all that is left is \`&:is([class])\` —
   the same (0,2,0) as the query arm. Verified by compiling this file with
   \`@tailwindcss/node\` and reading the emitted rule's selector: both arms
   produce \`.brand-fill\\:<utility>:is([class])…\`, i.e. (0,2,0). */
@custom-variant brand-fill {
  @container not style(--brand-fill: none) {
    &:is([class]) {
      @slot;
    }
  }
  &:is([class]):where(
      :is(
          :root[data-no-style-queries]:is([data-theme='hivez'], [data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='hivez'], [data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='hivez'], [data-theme='funkyglass']) *)
    ) {
    @slot;
  }
}

/* Tailwind v4 dropped v3's \`cursor: pointer\` button reset; restore it so
   every clickable control reads as clickable (official upgrade-guide fix). */
@layer base {
  button:not(:disabled),
  [role='button']:not(:disabled) {
    cursor: pointer;
  }
}

/* ── THEMES ────────────────────────────────────────────────────────────────
   A THEME is one palette with TWO required modes: a folder \`./themes/<id>/\`
   holding \`light.css\` and \`dark.css\`, each a COMPLETE block of design-token
   values. Every colour, radius, glass, shadow and shell token the app paints
   with is declared there; changing a value restyles the whole product. The
   \`@theme inline\` map below (token → Tailwind utility) is theme-independent and
   stays here.

   TWO ATTRIBUTES pick a block, on <html> (set by \`lib/ui/theme.tsx\`) or on any
   element (\`lib/ui/ThemeScope.tsx\`, for previews):
     • \`data-theme="<theme id>"\` — which palette.
     • \`data-scheme="light|dark"\` — which of its two modes. A separate user
       preference from the theme; the block it selects sets \`--scheme\`, which
       the \`dark:\` variant (above) queries, and \`color-scheme\`.
   Light is also the bare-\`:root\` fallback, so the page is painted correctly
   before JS runs.

   Registry + how to add a theme: \`./themes/registry.ts\`, \`./themes/README.md\`. */
@import './themes/remotedesk/light.css';
@import './themes/remotedesk/dark.css';
@import './themes/hivez/light.css';
@import './themes/hivez/dark.css';
@import './themes/funkyglass/light.css';
@import './themes/funkyglass/dark.css';

/* ── REDUCED MOTION: ONE RULE FOR THE WHOLE APP ───────────────────────────────
   docs/audits/MOTION_AUDIT_2026-09.md, "Reduced-motion policy": TRAVEL BECOMES A FADE;
   A SIGNAL NEVER DISAPPEARS. tw-animate-css (the app's whole enter/exit
   vocabulary) ships no reduced-motion handling, and before this block only ~40
   feature sites guarded themselves by hand — every shared primitive (dialog,
   popover, menus, select, hover card, tooltip) zoomed and slid regardless.

   1. Every tw-animate \`enter\` / \`exit\` keeps its OPACITY and loses its
      translate / scale / rotate / blur. One rule converts every Radix
      dialog / popover / menu / tooltip AND the origin primitive's inline vars
      (lib/ui/originMotion.ts — a stylesheet \`!important\` beats an inline
      non-important declaration) into plain fades.
   2. Durations: fades stay short; LAYOUT (reflow, width/height) is instant.

   It sits AFTER the theme imports on purpose: \`[data-theme][data-scheme]\` has
   the same (0,2,0) specificity as each theme block, so source order is what
   lets it win — for a nested \`<ThemeScope>\` too. Windows maps "Show animations
   in Windows" to this media query in Chromium, so it reaches the Electron app
   and most RDP / VDI sessions: this path is mainstream here, not an edge.

   Rule 1 is SCOPED to the elements that can run tw-animate's keyframes — a
   class containing \`animate-\` (\`animate-in\`, \`data-[state=open]:animate-in\`,
   \`motion-safe:animate-in\`, …), plus their pseudo-elements — rather than \`*\`.
   Behaviour is identical: tw-animate registers every \`--tw-enter-*\` /
   \`--tw-exit-*\` with \`@property … inherits: false\`, so a value only ever
   matters on the element whose OWN \`enter\` / \`exit\` animation reads it, and
   nothing in the app runs those keyframes except through an \`animate-*\`
   class (no inline \`animation: enter\`, no arbitrary \`animate-[enter…]\` that
   would dodge the match — and those would still contain \`animate-\`). The
   origin primitive's inline vars sit on \`DialogContent\`, which carries
   \`data-[state=open]:animate-in\`. What it saves is a universal selector
   re-matching every node on every style recalc of a large DOM. */
/* FIX(in-app-reduced-motion): Before: only the OS media query shortened the
   durations and removed travel, so the in-app "Reduce motion" setting changed
   the sweep but not the app's own animations. After: both switches share every
   rule. "Reduced motion" is two switches that mean the same thing: the OS media
   query and the in-app preference \`appearance.reducedMotion\`, which the preferences
   provider mirrors onto <html> as \`data-reduced-motion="true"\`. One variant
   names both so the rules below are written once. The attribute arm matches the
   element itself or any descendant of <html>, with \`:where()\` so it adds no
   specificity (the theme blocks it must beat are (0,2,0), see above). */
@custom-variant reduced-motion {
  @media (prefers-reduced-motion: reduce) {
    @slot;
  }
  &:where(:root[data-reduced-motion='true'], :root[data-reduced-motion='true'] *) {
    @slot;
  }
}
[class*='animate-'] {
  @variant reduced-motion {
    &,
    &::before,
    &::after {
      --tw-enter-translate-x: 0 !important;
      --tw-enter-translate-y: 0 !important;
      --tw-enter-scale: 1 !important;
      --tw-enter-rotate: 0 !important;
      --tw-enter-blur: 0 !important;
      --tw-exit-translate-x: 0 !important;
      --tw-exit-translate-y: 0 !important;
      --tw-exit-scale: 1 !important;
      --tw-exit-rotate: 0 !important;
      --tw-exit-blur: 0 !important;
    }
  }
}
[data-theme][data-scheme] {
  @variant reduced-motion {
    --motion-duration-base: 120ms;
    --motion-duration-slow: 120ms;
    --motion-duration-drawer: 120ms;
    --motion-duration-emphasized: 120ms;
    --motion-duration-exit: 100ms;
    --motion-duration-layout: 0ms;
  }
}

/* A SWAP / Suspense hand-off keeps the scrim: the dialog overlay that replaces
   an identical one (a rail SWAP, rule 3) or the "Opening…" fallback's scrim
   (first open of a lazy window) must not fade in from 0 — that reads as
   close-then-open. \`data-motion-entry="instant"\` is written by
   components/ui/dialog.tsx; it only suppresses the OPEN animation, so the exit
   still runs when \`data-state\` flips to \`closed\`. */
[data-slot='dialog-overlay'][data-motion-entry='instant'][data-state='open'] {
  animation: none;
}

/* A dialog that is LEAVING takes no pointer input. A routed window now stays
   mounted through its exit (components/shell/windowPresence.ts), and a second
   click on its X / scrim in those ~200ms would call \`closeDestination()\` again
   and pop the window beneath. \`!important\` because Radix's DismissableLayer
   writes an inline \`pointer-events: auto\` on the content. */
[data-slot='dialog-overlay'][data-state='closed'],
[data-slot='dialog-content'][data-state='closed'] {
  pointer-events: none !important;
}

/* APP CURSORS. Windows' built-in \`crosshair\` and \`text\` (I-beam) are INVERTED
   system cursors, which Chromium/Electron often renders plain white — invisible
   on a white whiteboard or doc page. These are outlined glyphs (1px black line
   inside a 3px white halo) that read on any background, so they are
   deliberately theme-independent, not tokens. */
:root {
  /* theme: cursor glyph must be black-on-white on every theme */
  --cursor-crosshair: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12.5 3v19M3 12.5h19' stroke='white' stroke-width='3' fill='none'/%3E%3Cpath d='M12.5 3v19M3 12.5h19' stroke='black' stroke-width='1' fill='none'/%3E%3C/svg%3E") 12 12, crosshair;
  /* theme: cursor glyph must be black-on-white on every theme */
  --cursor-text: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12.5 5v14M9.5 5h6M9.5 19h6' stroke='white' stroke-width='3' fill='none'/%3E%3Cpath d='M12.5 5v14M9.5 5h6M9.5 19h6' stroke='black' stroke-width='1' fill='none'/%3E%3C/svg%3E") 12 12, text;
}

/* Excalidraw sets \`cursor: crosshair\` inline on its canvas; a stylesheet
   \`!important\` beats a non-important inline style. */
.excalidraw canvas[style*='cursor: crosshair'] {
  cursor: var(--cursor-crosshair) !important;
}

/* RUNTIME LAYOUT STATE, set by JS — not theme tokens. These describe where the
   app's chrome sits (AppShell / AppHeader write them on <html>), not how
   anything looks, so no theme declares them and a \`<ThemeScope>\` never resets
   them. The defaults below are what applies with no shell mounted. */
:root {
  /* THE app-bar height. The rail's head block and every page header must be
     exactly this tall so their bottom borders land on one baseline and read as
     a single line across the top of the app.

     It is a variable rather than a repeated \`h-[74px]\` because that is precisely
     how it broke: the rail and the real lobby's header were set to 74 while the
     redesigned Lobby's top bar was still deriving ~70 from its own padding, so
     the seam stepped. Consume it as \`h-[var(--app-bar-h)]\` — never re-type the
     number, and never let a header size itself from padding. 64px matches the
     2026-08-22 design revision (the header frame's VISIBLE bar: 32px content +
     14/15 padding ≈ 61-64px; the frame's own 84px includes dead space, and the
     earlier 72px was a trim of that). The rail's head block consumes this same
     variable, so the logo square, the rail seam and the header still sit on
     one line at every rail width. */
  --app-bar-h: 64px;

  /* THE PAGE INSET: the gutter the shell keeps round every routed page from md up
     (\`page-inset\`, on <main>), between the app chrome and the page. ONE value for
     EVERY theme (owner, 2026-11-11: themes never change placement), so it is
     declared here and in no theme file; a theme may only PAINT the sheet that sits
     in the gutter (the glass page plate). Module pages (moduleFrame.ts) take their
     12px from it instead of padding themselves. */
  --page-inset: 12px;

  /* How far down the viewport the app's chrome starts — what a VIEWPORT-FIXED
     surface must clear to avoid landing under the app header.

     0 by default, because the header is not universal: the full-screen routes
     outside AppShell (login, the floor editor, /office3d, the collision editor)
     have no bar, and a surface hardcoding \`top: var(--app-bar-h)\` would float in
     a 74px void on them. \`AppShell\` raises it to --app-bar-h on <html> while it
     is mounted and clears it on unmount, so each surface just reads this.

     It lives on <html> rather than on the shell's own div because its consumers
     PORTAL TO document.body (the meeting notch bars) — a variable on a div in
     the React tree never reaches them. */
  --app-top-inset: 0px;

  /* The LEFT twin of --app-top-inset: how much of the viewport's LEFT edge the
     app's chrome (the desktop rail) owns. 0 by default; AppShell sets it on
     <html> to the rail's persisted width (272px expanded / 67px collapsed,
     0 on mobile where the rail is off-canvas). A maximized window reads it so
     it fills the CONTENT area beside the rail rather than running under it
     (FIX(maximize-under-chrome), user call 2026-09-06). */
  --app-left-inset: 0px;

  /* The bottom twin of --app-top-inset: how much of the viewport's BOTTOM edge
     the app's chrome owns. 0 by default; AppHeader raises it on <html> while
     the PHONE presence navbar is mounted (below md with a live session, the
     device cluster docks to the bottom edge instead of the header band — user
     call 2026-08-27). Bottom-anchored surfaces (the floating chat panel, the
     page-header FAB, the office user pill) read this instead
     of hardcoding \`bottom-4\`, so they ride above the navbar when it exists and
     sit flush to the edge when it doesn't. On <html> for the same reason as
     the top inset: consumers portal to document.body. */
  --app-bottom-inset: 0px;
}

@theme inline {
  /* The typeface is a THEME TOKEN (\`--font-theme\`, declared in every
     \`src/themes/<id>/{light,dark}.css\`), not a literal here — Remote Desk's
     tracking values (-0.5px on body, -1px on H1) are tuned for Inter's metrics,
     while Hivez's Figma specifies Plus Jakarta Sans. \`inline\` keeps this a live
     \`var()\` reference rather than Tailwind baking in whichever value resolved
     first, so \`font-sans\` / \`var(--font-sans)\` re-resolves \`--font-theme\`
     against the NEAREST \`[data-theme]\` scope (the page, or a \`<ThemeScope>\`
     preview) exactly like every colour token. Both families are loaded in
     main.tsx; fontsource only downloads the one a rule actually uses. */
  --font-sans: var(--font-theme);
  --font-mono: 'Geist Mono Variable', ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
  /* Handwriting, for the sticky notes in the office's Notes board (font-hand).
     PLATFORM FONTS ONLY, on purpose: no webfont is bundled or fetched for this.
     A CDN link breaks the strict-CSP / offline VPS deploys the whiteboard fonts
     were vendored to protect, and the handwriting faces already on disk
     (Excalifont, ComicShanns under public/excalidraw-assets) are gitignored,
     content-hash-named copies of Excalidraw's package assets — their filenames
     change on every upgrade, so an @font-face pointing at one would rot.
     Windows first, then Apple, then the near-universal fallback. */
  --font-hand:
    'Segoe Print', 'Segoe Script', 'Ink Free', 'Bradley Hand', 'Chalkboard SE', 'Noteworthy',
    'Marker Felt', 'Comic Sans MS', cursive;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  /* The redesign's own radius scale. It does NOT line up with the shadcn ramp
     above (6/8/10/14), so these are named by ROLE rather than size — that way a
     component says what it is, and a future retune moves every instance.
     Figma: nested controls 6, chips 8, controls 12, inner cards 16, page
     panels 24 (retuned from 32 on user call 2026-09-01), largest panels 32.

     \`--radius-panel-lg\` is deliberately NOT named \`--radius-2xl\`: that key is
     Tailwind's own, and redefining it would silently retune every
     \`rounded-2xl\` in the app. */
  --radius-nested: 6px; /* Radius/XSmall — a control INSIDE an 8px control: the active segment, a checkbox */
  --radius-chip: 8px; /* Radius/Small — chips, segments, filters, desk placeholders */
  --radius-control: 12px;
  --radius-card: 16px;
  --radius-panel: 24px;
  --radius-panel-lg: 32px; /* Radius/2XLarge — the largest page panels */
  /* The design's two backdrop-blur strengths (the --blur-* namespace feeds
     both \`blur-*\` and \`backdrop-blur-*\` utilities). Floating glass — menus,
     popovers, modal panels — blurs at 20px, the export's modal-panel value;
     the modal scrim at 7px; chips use the stock \`backdrop-blur-xs\` (4px),
     which IS the export's chip blur. Tailwind's own \`xl\` step is 24px — what
     every panel wore before, visibly foggier than the mock — so glass
     surfaces take these named steps, not a stock one. */
  --blur-glass: 20px;
  --blur-scrim: 7px;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-rail: var(--rail);
  --color-rail-foreground: var(--rail-foreground);
  --color-rail-accent: var(--rail-accent);
  --color-rail-accent-foreground: var(--rail-accent-foreground);
  --color-rail-border: var(--rail-border);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  /* Redesign tokens → utilities. \`bg-brand\`, \`text-brand\`, \`bg-brand-tint\`,
     \`bg-surface-glass\`, \`border-glass\`, \`border-strong\`, \`bg-success-tint\`,
     \`text-label-muted\`, \`shadow-raised\`, … Alpha rides along inside the token,
     so \`bg-surface-glass\` IS the 40%-white — no \`/40\` modifier needed, and no
     hex or rgba() should ever appear in a component again.

     \`--shadow-raised\` maps to \`--elevation-raised\` rather than sharing a name:
     a theme key and a :root property with the SAME name collide, and the
     utility silently resolves to nothing. */
  --color-brand: var(--brand);
  --color-brand-foreground: var(--brand-foreground);
  --color-brand-tint: var(--brand-tint);
  --color-brand-tint-foreground: var(--brand-tint-foreground);
  --color-brand-deep: var(--brand-deep);
  --color-brand-light: var(--brand-light);
  --color-brand-ghost: var(--brand-ghost);
  --color-brand-subtle: var(--brand-subtle);
  --color-text-disabled: var(--text-disabled);
  --color-icon: var(--icon);
  --color-icon-muted: var(--icon-muted);
  /* \`border-edge-light\`, not \`border-border-light\`: a theme key with the SAME
     name as its :root property collides and resolves to nothing (see the note
     above --shadow-raised), and the five --border-* tokens already follow this
     rename convention (\`default\`, \`subtle\`, \`glass\`, \`hairline\`, \`strong\`). */
  --color-edge-light: var(--border-light);
  --color-surface-tint: var(--surface-tint);
  --color-ledger-stripe: var(--ledger-stripe);
  --color-ledger-hover: var(--ledger-hover);
  --color-table-head: var(--table-head);
  --color-danger: var(--danger);
  --color-danger-tint: var(--danger-tint);
  --color-danger-ink: var(--danger-ink);
  --color-default: var(--border-default);
  --color-subtle: var(--border-subtle);
  --color-surface-glass: var(--surface-glass);
  --color-surface-glass-strong: var(--surface-glass-strong);
  --color-surface-glass-inset: var(--surface-glass-inset);
  --color-surface-chrome: var(--surface-chrome);
  --color-scrim-glass: var(--scrim-glass);
  --color-surface-raised: var(--surface-raised);
  --color-surface-chip: var(--surface-chip);
  --color-surface-sunken: var(--surface-sunken);
  --color-segmented-track: var(--segmented-track);
  --color-segmented-thumb: var(--segmented-thumb);
  --color-glass: var(--border-glass);
  --color-hairline: var(--border-hairline);
  --color-strong: var(--border-strong);
  --color-label-muted: var(--label-muted);
  /* \`text-subtle-foreground\` / \`bg-subtle-foreground\` — the overlay kit's quiet
     ink (and, as a FILL, the grey unread pill on a muted channel row). The key
     cannot be \`--color-subtle\`: that one is already --border-subtle, which is
     what \`border-subtle\` on every Chip resolves to. */
  --color-subtle-foreground: var(--text-subtle);
  --color-avatar-channel: var(--avatar-channel);
  --color-success: var(--success);
  --color-success-tint: var(--success-tint);
  --color-success-surface: var(--success-surface);
  --color-success-foreground: var(--success-foreground);
  --color-info: var(--info);
  --color-info-tint: var(--info-tint);
  --color-info-foreground: var(--info-foreground);
  --color-warning: var(--warning);
  --color-warning-tint: var(--warning-tint);
  --color-warning-deep: var(--warning-deep);
  --color-warning-foreground: var(--warning-foreground);
  --color-destructive-tint: var(--destructive-tint);
  --color-presence: var(--presence);
  /* \`bg-chart-3\`, \`text-chart-1\`, … — the categorical series utilities. */
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-chart-6: var(--chart-6);
  --color-chart-7: var(--chart-7);
  --color-label-soft: var(--label-soft);
  --color-scrim: var(--scrim);
  /* Doc-kind hues as utilities (\`text-kind-document\`, \`bg-kind-sheet\`, …). The
     16 %/8 % TINT is not a utility: only the Drive Thumb card and DetailsPanel mix it,
     from these with \`--kind-tint-alpha\` (KindGlyph itself is filled and no longer tints). */
  --color-kind-page: var(--kind-page);
  --color-kind-document: var(--kind-document);
  --color-kind-sheet: var(--kind-sheet);
  --color-kind-slides: var(--kind-slides);
  --color-kind-markdown: var(--kind-markdown);
  --color-kind-text: var(--kind-text);
  /* …and the Drive's file kinds on the same footing (\`text-kind-video\`, …). */
  --color-kind-folder: var(--kind-folder);
  --color-kind-pdf: var(--kind-pdf);
  --color-kind-image: var(--kind-image);
  --color-kind-video: var(--kind-video);
  --color-kind-audio: var(--kind-audio);
  --color-kind-archive: var(--kind-archive);
  --color-kind-code: var(--kind-code);
  --color-kind-other: var(--kind-other);
  --color-kind-ink: var(--kind-ink);
  --color-doc-canvas: var(--doc-canvas);
  --color-doc-page: var(--doc-page);
  --color-doc-page-ink: var(--doc-page-ink);
  --color-video-frame: var(--video-frame);
  --shadow-raised: var(--elevation-raised);
  --shadow-glass-raised: var(--elevation-glass-raised);
  --shadow-brand: var(--elevation-brand);
  --shadow-panel: var(--elevation-panel);
  --shadow-overlay: var(--elevation-overlay);
  --shadow-overlay-strong: var(--elevation-overlay-strong);
  --shadow-flat: var(--elevation-flat);
  --shadow-danger-glow: var(--elevation-danger-glow);
  /* Drive redesign (Figma 2121:114008) — values in each theme file's DRIVE block. */
  --color-drive-card: var(--drive-surface-card);
  --color-drive-subtle: var(--drive-surface-subtle);
  --color-drive-chip: var(--drive-surface-chip);
  --color-drive-scrim: var(--drive-scrim);
  --color-drive-media: var(--drive-media);
  --color-drive-media-badge: var(--drive-media-badge);
  --shadow-drive-page: var(--drive-elevation-page);
  --shadow-drive-menu: var(--drive-elevation-menu);
  --shadow-drive-sheet: var(--drive-elevation-sheet);
  --shadow-drive-dialog: var(--drive-elevation-dialog);
  --shadow-drive-toast: var(--drive-elevation-toast);
  --shadow-drive-segment: var(--drive-elevation-segment);
  --shadow-drive-brand: var(--drive-elevation-brand);
  /* MOTION easings (docs/audits/MOTION_AUDIT_2026-09.md, "Tokens") → \`ease-standard\`,
     \`ease-decelerate\`, \`ease-accelerate\`, \`ease-emphasized-in\` (the
     decelerating curve an ENTER uses) and \`ease-emphasized-out\` (the
     accelerating one an EXIT uses). The theme files own the curves. Durations
     have no Tailwind namespace — use \`duration-(--motion-duration-<name>)\`. */
  --ease-standard: var(--motion-ease-standard);
  --ease-decelerate: var(--motion-ease-decelerate);
  --ease-accelerate: var(--motion-ease-accelerate);
  --ease-emphasized-in: var(--motion-ease-emphasized-decelerate);
  --ease-emphasized-out: var(--motion-ease-emphasized-accelerate);
}

/* THE APP TYPE RAMP — Figma's 13 text styles (01 Foundations, node 249:434,
   plus "disply 2 medium" from the dark Lobby) reduced to nine named sizes, and
   the two micro steps the alert ladder needs on top.

   \`@theme\`, not \`@theme inline\`, so Tailwind generates real \`text-*\` utilities
   AND emits the custom properties for the rare rule that reads one directly.
   Every name here is new — none collides with a Tailwind default, so
   \`text-xs\`/\`text-sm\`/\`text-base\`/… are untouched and no existing class
   changes meaning.

   Line-height is 150% everywhere except the display steps (130%) and h1 (a
   FIXED 28px, tighter than any ratio). Weight is carried on the styles that
   have one in the file; nothing in the system is 700.

   The two MICRO steps (\`meta\`, \`eyebrow\`) are a design-system extension: the
   Figma ramp stops at 12px, but the alert ladder and the notification centre
   need an 11px meta line ("Design · 3 people inside · 45s life") and a 10px
   uppercase eyebrow ("KNOCK AT YOUR DOOR"), and both are structural rather
   than decorative. */
@theme {
  --text-eyebrow: 10px;
  --text-eyebrow--line-height: 1.3;
  --text-eyebrow--letter-spacing: 0.06em;
  --text-eyebrow--font-weight: 600;
  --text-meta: 11px;
  --text-meta--line-height: 1.4;
  --text-caption: 12px; /* "small x/small X" — badges, chips, timestamps */
  --text-caption--line-height: 1.5;
  --text-body: 14px; /* "body small/14" — row text, captions, meta */
  --text-body--line-height: 1.5;
  --text-body-lg: 16px; /* "body/16" — labels, buttons, menu rows, card body */
  --text-body-lg--line-height: 1.5;
  --text-h2: 20px; /* "H2" — card titles, the org name in the rail */
  --text-h2--line-height: 1.5;
  --text-h2--letter-spacing: -0.2px;
  --text-h2--font-weight: 600;
  --text-h1: 24px; /* "H1" — page greeting, section titles */
  --text-h1--line-height: 28px;
  --text-h1--letter-spacing: -1px;
  --text-h1--font-weight: 600;
  --text-display-2: 40px; /* "disply 2 medium" — the stat-card value ("04", "91%") */
  --text-display-2--line-height: 1.3;
  --text-display-2--letter-spacing: -1px;
  --text-display-2--font-weight: 500;
  --text-display: 48px; /* "disply" — the big stat number ("23 active") */
  --text-display--line-height: 1.3;
  --text-display--letter-spacing: -0.6px;
  --text-display--font-weight: 600;
}

/* The wash that glass surfaces sit on — without it, a 40%-white panel over our
   near-white page background is invisible. Put this on the shell, not on body,
   so full-bleed views (the office canvas) can opt out.
   FIX(theme-backdrop): the ground colour is TRANSPARENT — \`body\` already paints
   \`--background\` right under every page root, so Remote Desk renders the same
   pixels, while a theme's ThemeBackdrop (honeycomb, glows) can show through.
   Before: \`background-color: var(--background)\` hid the backdrop on the Lobby. */
@utility bg-shell {
  background-color: transparent;
  background-image: var(--shell-backdrop);
}

/* DOM layering. These generate the \`z-*\` utilities (\`z-dock\`, \`z-overlay\`, …)
   via Tailwind v4's \`--z-index-*\` theme namespace, and also expose each band as
   a custom property for the rare rule that needs \`var(--z-index-toast)\`.

   THIS BLOCK MIRRORS \`src/lib/layers.ts\` — that file is the source of truth and
   carries the full rationale (what each band is FOR, the stacking-context traps
   that make raw z-index unreliable, and the incidents behind the odd values).
   \`src/lib/layers.test.ts\` fails if the two ever drift. Do not add a band here
   without adding it there; do not tune a number in one place only.

   Not \`@theme inline\`: emitting real custom properties is what lets non-Tailwind
   CSS and inline styles reference a band by name. */
@theme {
  --z-index-base: 0;
  --z-index-canvas-overlay: 10;
  --z-index-canvas-cursors: 1000000; /* local to a React Flow viewport — above any node z */
  --z-index-panel: 20;
  --z-index-game-hud: 20; /* alias of panel */
  --z-index-dock: 30;
  --z-index-game-overlay: 30; /* alias of dock */
  --z-index-rail: 40;
  --z-index-scrim: 40; /* alias of rail */
  --z-index-map: 45;
  --z-index-people-list: 46; /* occupant lists — UNDER the user menu they open */
  /* The right-hand dock (Messages, Deskly's tab included) — over the page,
     UNDER modals. 47 and 49 are deliberately reserved on either side. The
     \`--z-index-launcher\` alias went with the Deskly launcher (2026-09-05). */
  --z-index-side-dock: 48;
  --z-index-overlay: 50;
  --z-index-floating-panel-scrim: 51; /* one band under floating-panel */
  /* The floating right-hand overlays (Messages card, notifications popover) —
     ABOVE the modal band, because a 448-wide card cannot be carved out of the
     dialog scrim the way the full-height dock column is. */
  --z-index-floating-panel: 52;
  --z-index-editor-popup: 70;
  --z-index-call-window: 80;
  --z-index-chrome: 80; /* alias of call-window — rail + header, one plane */
  --z-index-file-preview-scrim: 84; /* one band under file-preview */
  /* FIX(RMS-115), owner call 2026-09-09: the preview is a FULL takeover — over
     the docks, the floating panel, the sheet it opened from AND the chrome plane
     (rail + header + mic/cam). Was 53/54, under chrome. Still under call-banner. */
  --z-index-file-preview: 85;
  --z-index-call-banner: 90; /* a ringing call outranks the call window itself */
  --z-index-announcement: 97;
  --z-index-meeting-pill: 100;
  --z-index-reaction-picker: 100; /* alias of meeting-pill — the reaction picker popover */
  --z-index-reaction-dialog-scrim: 101; /* one band under reaction-dialog */
  --z-index-reaction-dialog: 102; /* the team-sound dialogs the picker raises */
  --z-index-theater: 110;
  --z-index-voice-reply: 111; /* the Deskly voice pill + reply bubble, above the theater */
  --z-index-drawer-scrim: 114; /* one band under drawer */
  --z-index-drawer: 115; /* mobile slide-over nav (max-md use only) */
  --z-index-drawer-popover: 118; /* menus owned by the drawer */
  /* The ALERT LADDER (docs/modules/notifications/ALERTS_REDESIGN_2026-09.md).
     Four surfaces that must be orderable AGAINST EACH OTHER, which is why
     \`--z-index-toast\` now exists: the feed used to be pinned at the max 32-bit
     int, so nothing could ever be carved above it (AL-5). */
  --z-index-bee-scrim: 188; /* the bee intro's dim, one band under bee */
  --z-index-bee: 189; /* the Deskly bee — over dialogs, under the alert ladder */
  --z-index-ambient: 195; /* tier 0 — the presence strip, under the feed */
  --z-index-toast: 200; /* tiers 1–2 — the transient feed */
  --z-index-request: 210; /* tier 3 — decisions, always over the feed */
  --z-index-interrupt-scrim: 220; /* one band under interrupt */
  --z-index-interrupt: 221; /* tier 4 — the must-answer modal */
  /* Hover bubbles clear the WHOLE ladder: a Tip on a request card or an
     interrupt modal portals to <body> and must not paint under its own card
     (at 120 it sat under AMBIENT 195 — every tooltip inside an alert surface
     was invisible, found 2026-09-04). Only DRAG stays above it. */
  --z-index-tooltip: 230;
  --z-index-drag: 999;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis-weight: none;
    text-rendering: optimizeLegibility;
  }
  /* \`font-family\` is an INHERITED property: \`body\`'s declaration above resolves
     \`--font-sans\` (-> \`--font-theme\`) once, against body's own scope, and every
     descendant inherits that already-resolved font list — a nested
     \`<ThemeScope>\` overriding \`--font-theme\` on a descendant div changes
     nothing unless something re-reads the variable inside that scope. Every
     \`[data-theme]\` element (the \`<html>\` the provider sets it on, AND a
     \`ThemeScope\`'s \`display: contents\` wrapper — see lib/ui/ThemeScope.tsx) is
     exactly that boundary, so re-declaring here re-resolves \`--font-theme\`
     locally and a preview picks up its own theme's font. */
  [data-theme] {
    font-family: var(--font-sans);
  }
  /* Document-level backstop: a wide inner view (e.g. the tracker board's columns)
     must never produce a PAGE-level horizontal scrollbar — real horizontal
     scrolling lives in inner overflow containers. \`clip\` suppresses the viewport
     x-scroll without creating a scroll container (so position:sticky and vertical
     document scroll are unaffected). */
  html {
    overflow-x: clip;
  }
  #root {
    overflow-x: clip;
  }
  /* Geist's optical niceties: enable contextual alternates + tabular figures so
     monospaced keys/numbers in dense tables line up. */
  code, kbd, pre, .font-mono {
    font-feature-settings: 'ss01', 'zero';
  }
}

/* Very subtle dot-grid canvas — an enterprise-SaaS texture (Linear/Vercel-ish)
   for large content areas. Faint enough to read as paper, not noise. */
@utility bg-app-dots {
  background-color: var(--background);
  background-image: radial-gradient(var(--canvas-dots-ink) 1px, transparent 1.4px);
  background-size: 22px 22px;
  background-position: -11px -11px;
}
/* The same dot texture with NO ground colour, for a PAGE canvas: the page sits
   on \`body\` (which paints --background) and on the theme's ThemeBackdrop, and an
   opaque ground here would hide the backdrop. \`bg-app-dots\` stays for boxes that
   need their own ground (board thumbnails). */
@utility bg-page-dots {
  background-image: radial-gradient(var(--canvas-dots-ink) 1px, transparent 1.4px);
  background-size: 22px 22px;
  background-position: -11px -11px;
}

/* ── THEME BACKDROP ──────────────────────────────────────────────────────────
   \`components/shell/ThemeBackdrop.tsx\`: a fixed, inert layer under the page
   canvas and the rail, painted entirely from theme tokens (themes/README.md →
   "Shared tokens"). Remote Desk sets them all to \`none\`, so it paints nothing.
   Bottom → top: image (cover), pattern (tiled, optionally masked), glow 1 +
   glow 2, the hex field (resting outlines, the sweep, a vignette; Funky Glass
   only), then a flat scrim. The glows are their own element so they can
   breathe without the pattern flickering. The pattern is its OWN element too
   (split from the image — FIX(hivez-pattern-mask)): \`--theme-bg-pattern-mask\`
   fades the pattern only, never the image, by masking just this layer. */
/* In \`@layer components\` so a caller utility (\`absolute\` — the Settings gallery
   card's mini backdrop) overrides \`position: fixed\`. */
@layer components {
  .theme-backdrop {
    position: fixed;
    inset: 0;
    pointer-events: none;
  }
  .theme-backdrop > * {
    position: absolute;
    inset: 0;
  }
  .theme-backdrop__base {
    background-image: var(--theme-bg-image);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .theme-backdrop__pattern {
    background-image: var(--theme-bg-pattern);
    background-repeat: repeat;
    background-size: auto;
    background-position: 0 0;
    mask-image: var(--theme-bg-pattern-mask);
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
    -webkit-mask-image: var(--theme-bg-pattern-mask);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
  }
  .theme-backdrop__glow {
    background-image: var(--theme-bg-glow-2), var(--theme-bg-glow-1);
    background-repeat: no-repeat;
  }
  .theme-backdrop__scrim {
    background: var(--theme-bg-scrim);
  }

  /* THE HEX FIELD (Funky Glass) — \`ThemeBackdrop\` passes the mask tiles
     (themes/hexField.ts) as \`--hex-line-tile\` / \`--hex-glow-tile\` and their
     whole-pixel size as \`--hex-tile-w/h\`; SHAPE is the mask, COLOUR is a token.
     Painted after the glows, before the scrim. All three layers are
     \`display: none\` unless the theme paints a hex glow (gate below). */
  .theme-backdrop__hex,
  .theme-backdrop__sweep,
  .theme-backdrop__vignette {
    display: none;
  }
  .theme-backdrop__hex {
    background-color: var(--theme-bg-hex-line);
    mask-image: var(--hex-line-tile);
    mask-size: var(--hex-tile-w) var(--hex-tile-h);
    mask-repeat: repeat;
    mask-position: 0 0;
    -webkit-mask-image: var(--hex-line-tile);
    -webkit-mask-size: var(--hex-tile-w) var(--hex-tile-h);
    -webkit-mask-repeat: repeat;
    -webkit-mask-position: 0 0;
  }
  /* The sweep layer is STATIC: it fills the backdrop, clips, and its only mask
     is the glow hex tile — so the lit hexagons never move or repaint. The lit
     colour comes from \`__band\`, moved by \`transform\` alone (compositor-only;
     animating a mask-position instead repainted the whole viewport every
     frame). The band is a STRIP, not a screen-sized layer: as long as the
     viewport diagonal, as thick as the glow, centred on the sweep layer. Its size
     (\`--band-length\`, \`--band-thickness\`) and its rotated, sliding \`transform\`
     are px values \`ThemeBackdrop\` computes from the viewport at each
     pass start (themes/hexField.ts → \`bandStrip\`, \`bandKeyframes\`, which also
     carries the geometry's proof); until the first pass it has no size, and at
     rest it is parked 200vmax away, far off-screen. A pass is a finite Web
     Animations API animation started by lib/ui/sweepClock, NEVER a CSS
     \`infinite\` animation (FIX(glow-static) below). No \`will-change\`: the
     animation promotes the strip for the length of a pass only. The gradient
     runs across the strip, so the falloff is the mock's (clear → 35 % → full at
     the centre → 35 % → clear) with the stops at 0 / 25 / 50 / 75 / 100 % of the
     strip's thickness, token-only (\`color-mix\` of --theme-bg-hex-glow).
     FIX(band-strip): Before: \`__band\` was a 300 % × 300 % child (9 viewports of
     layer, 75 Mpx at 4K). After: a strip of about 1.2 viewports with the same
     band width, direction, falloff, eased path and off-screen ends. */
  .theme-backdrop__sweep {
    overflow: hidden;
    mask-image: var(--hex-glow-tile);
    mask-size: var(--hex-tile-w) var(--hex-tile-h);
    mask-repeat: repeat;
    mask-position: 0 0;
    -webkit-mask-image: var(--hex-glow-tile);
    -webkit-mask-size: var(--hex-tile-w) var(--hex-tile-h);
    -webkit-mask-repeat: repeat;
    -webkit-mask-position: 0 0;
  }
  .theme-backdrop__band {
    position: absolute;
    inset: 0;
    margin: auto;
    width: var(--band-length, 0px);
    height: var(--band-thickness, 0px);
    transform: translateY(-200vmax);
    background: linear-gradient(
      to bottom,
      transparent 0%,
      color-mix(in oklch, var(--theme-bg-hex-glow) 35%, transparent) 25%,
      var(--theme-bg-hex-glow) 50%,
      color-mix(in oklch, var(--theme-bg-hex-glow) 35%, transparent) 75%,
      transparent 100%
    );
  }
  .theme-backdrop__vignette {
    background: var(--theme-bg-vignette);
  }
  /* THE GATE: the layers show only when the THEME paints a hex glow
     (\`--theme-bg-hex-glow\` is a real colour; Remote Desk and Hivez declare
     \`transparent\`), by a container style query on the inherited token, as the
     \`brand-fill:\` variant does. The second rule is the \`data-no-style-queries\`
     fallback, with the same shape as \`brand-fill:\`'s: it names the one theme
     that paints the field — add a theme's id to it if that theme sets the
     token to a colour. Pinned by themes/__tests__/hexBackdropGate.test.ts. */
  @container not style(--theme-bg-hex-glow: transparent) {
    .theme-backdrop__hex,
    .theme-backdrop__sweep,
    .theme-backdrop__vignette {
      display: block;
    }
  }
  :is(.theme-backdrop__hex, .theme-backdrop__sweep, .theme-backdrop__vignette) {
    &:is(
        :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
        :root[data-no-style-queries] :is([data-theme='funkyglass']) *
      ):not(:root [data-theme]:not([data-theme='funkyglass']) *) {
      display: block;
    }
  }
  /* FIX(forced-colors-backdrop): Before: the gold hex field painted behind
     system-coloured text. After: hidden under forced colours. System colours
     replace the palette, so a gold hex field would be noise behind Canvas
     text. \`visibility\`, not \`display\`: the
     component decides once, from the computed \`display\`, whether to join the
     sweep clock, and must keep doing so if forced colours turn off while the
     page is open (the clock itself stops under forced colours). */
  @media (forced-colors: active) {
    .theme-backdrop__hex,
    .theme-backdrop__sweep,
    .theme-backdrop__vignette {
      visibility: hidden;
    }
  }
}
/* FIX(glow-static): Before: an infinite \`theme-glow-breathe\` opacity animation
   (12 s) ran on the full-window \`.theme-backdrop__glow\` layer when a theme set
   \`--theme-bg-animate: 1\`. After: no animation. An infinite opacity animation on
   a window-sized layer is re-composited at display rate (~53% of a core in the
   GPU process on a 165 Hz screen with the main thread idle). The glow stays,
   static at opacity 1. \`--theme-bg-animate\` is still defined by the themes (and
   pinned by the registry test) but nothing reads it any more. The hex field's
   sweep moves, but never by an infinite CSS animation: lib/ui/sweepClock starts
   one finite pass per period and the compositor idles between passes. */

/* ── SWEEP LIGHT ─────────────────────────────────────────────────────────────
   \`components/shell/SweepLight.tsx\`: the layers that light up as the backdrop's
   glow band passes under them (Funky Glass; themes/README.md → "Sweep light").
   REAL elements — cards and faces already own \`::before\` / \`::after\`.
   \`.sweep-edge\` is the last child of a positioned card root: a crisp 1.5px ring
   in \`--theme-bg-hex-glow\` plus a soft inner and outer glow, all a STATIC
   \`box-shadow\` (no \`filter: blur\`). \`.sweep-face\` sits behind an avatar and
   shows only what the face does not cover: the blurred hexagon glow plus a
   rounded-hex line 6px out, the same two masks as the speaking halo
   (\`.avatar-frame[data-avatar-glow='speaking']::before\`). Both rest at
   \`opacity: 0\`; the ONLY thing that ever moves is that opacity, in a finite
   animation lib/ui/sweepLight starts per pass — never a CSS animation here.
   ONE GATE, three conditions, so everything is inert elsewhere (Remote Desk and
   Hivez run no animation and paint nothing):
   1. the theme paints a hex glow — the container style query on
      \`--theme-bg-hex-glow\` (the \`.theme-backdrop__hex\` gate; the second rule is
      its \`data-no-style-queries\` fallback naming \`funkyglass\`: add a theme's id
      to it if that theme sets the token to a colour);
   2. the theme backdrop is mounted (the element follows a \`[data-theme-backdrop]\`,
      as the glass utilities do);
   3. motion is not reduced (\`prefers-reduced-motion: no-preference\`, and not the
      in-app preference, which sets \`data-reduced-motion="true"\` on <html>) and
      the browser is not in forced colours.
   \`.sweep-face\` additionally needs \`--avatar-shape\` to be a real shape (it is
   drawn through the avatar masks). The hook subscribes to the clock only when the
   theme paints the glow, and checks the computed \`display\` at each pass.
   Pinned by themes/__tests__/sweepLightGate.test.ts. */
@layer components {
  .sweep-edge,
  .sweep-face {
    display: none;
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }
  /* One pixel past the padding box, so the ring sits over the card's 1px border. */
  .sweep-edge {
    inset: -1px;
    border-radius: inherit;
    box-shadow:
      inset 0 0 0 1.5px var(--theme-bg-hex-glow),
      inset 0 0 12px color-mix(in oklch, var(--theme-bg-hex-glow) 45%, transparent),
      0 0 14px 1px color-mix(in oklch, var(--theme-bg-hex-glow) 50%, transparent);
  }
  /* 1.5 × the face, centred: the frame-ring mask is the face + 12px (3px ring + 1px gap + 2px line). */
  .sweep-face {
    inset: -25%;
    background: var(--theme-bg-hex-glow);
    mask-image: var(--avatar-glow-mask), var(--avatar-frame-mask);
    mask-size:
      100% 100%,
      calc(100% / 1.5 + 12px) calc(100% / 1.5 + 12px);
    mask-position: center;
    mask-repeat: no-repeat;
  }
  @media (prefers-reduced-motion: no-preference) and (forced-colors: none) {
    @container not style(--theme-bg-hex-glow: transparent) {
      .sweep-edge:where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(
          :root:not([data-reduced-motion='true']) *
        ) {
        display: block;
      }
      /* The face ring is two avatar masks: with \`--avatar-shape: none\` they are
         \`none\` and the span would be a solid block, so it needs a hexagon. */
      @container not style(--avatar-shape: none) {
        .sweep-face:where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(
            :root:not([data-reduced-motion='true']) *
          ) {
          display: block;
        }
      }
    }
    :is(.sweep-edge, .sweep-face) {
      &:is(
          :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='funkyglass']) *):where(
          [data-theme-backdrop] ~ *,
          [data-theme-backdrop] ~ * *
        ):where(:root:not([data-reduced-motion='true']) *) {
        display: block;
      }
    }
  }
}

/* ── GLASS MATERIALS ─────────────────────────────────────────────────────────
   \`glass-thin\`, \`glass-thick\`, \`glass-chip\`, \`glass-float\`, \`glass-bar\`, \`glass-dim\` and
   \`page-plate\` (+ its underlay): how a theme with SEE-THROUGH surfaces (Funky Glass) turns
   a surface into glass. This is the canonical description; themes/README.md → "Glass
   materials" says how to wire a surface.
   FIX(glass-overhaul): the owner looked at Funky Glass and said it did not read as a glass
   redesign (2026-11-11). Before: glass on page-level chrome and cards only, dialogs, menus,
   popovers and toasts SOLID by rule, pages full of opaque tiles, glass thin = 50 % white /
   smoked 50 %. After: (1) dialogs, menus, popovers, toasts and docks are glass
   (\`glass-float\`); (2) the inside of a plated page is tint-on-glass (\`glass-tints\`) and the
   things that float in a page are glass (\`glass-bar\`), not one blur per tile; (3) the fills
   are clearer and the blur, rim and sheen stronger (tokens only). For Remote Desk and Hivez
   nothing changes: every rule below is behind the theme's own token.
   Layers: backdrop (paint) / content on the plate (tint + hairline, NO blur) / chrome
   and bars (\`glass-thick\`, \`glass-chip\`, \`glass-bar\`) / card walls (\`glass-thin\`) / floating
   panels (\`glass-float\`, the thickest). A utility does not choose a colour:
   the element keeps its \`bg-surface-glass\` / \`bg-surface-chrome\` class, which the
   theme makes translucent. What the utility adds, when it is ACTIVE:
     • \`backdrop-filter\` from \`--glass-filter-thin\` / \`--glass-filter-thick\`;
     • the box-shadow stack of \`glass-shadow\` below: the bright top edge
       (\`--glass-highlight\`), the ambient drop shadow, then Tailwind's own
       \`--tw-*\` stack re-read, never replaced, so an element's \`shadow-*\` /
       \`ring-*\` utilities still draw;
     • the diagonal sheen, \`--glass-sheen\`, as the TOP background-image layer. An
       element that paints its own background image (the rail's
       \`bg-(image:--rail-decoration)\`) also sets \`--glass-under\` to it, which
       the sheen then sits over. No pseudo-elements: room cards and avatars
       already own \`::before\` and \`::after\`.
   OPAQUE GLASS. When the user asked for less transparency (the OS "reduce
   transparency", "increase contrast") or runs forced colours, there is no
   filter and no sheen and the fill is OPAQUE: the glass tokens are re-pointed
   at \`--card\` (or \`Canvas\` in forced colours) on the element, so its own
   \`bg-surface-*\` class paints solid. The \`glass-opaque\` variant names those
   three conditions once.

   TWO GATES, both must hold, so the rules are INERT everywhere else:
   1. The THEME turns the material on: a container style query on the glass
      token, exactly as the \`brand-fill:\` variant above does it (Remote Desk and
      Hivez declare every glass token OFF). It is a query rather than a
      \`background-image: none\` default, because a utility that sets a property
      even to "nothing" would wipe an element's own value (the rail's
      honeycomb in Hivez). The second arm of each variant is the
      \`data-no-style-queries\` fallback with the same shape as \`brand-fill:\`'s;
      add a theme's id to it if that theme turns the glass on.
   2. The THEME BACKDROP is mounted: the element FOLLOWS a
      \`[data-theme-backdrop]\` in the DOM (a following sibling, or inside one).
      \`AppShell\` renders \`ThemeBackdrop\` as the FIRST child of the shell root
      and unmounts it while a 2D/3D floor (a live WebGL canvas) is on screen,
      so blur never runs over the scene. Radix portals (dialogs, menus,
      popovers, toasts) render to <body>, outside the shell root, so they do
      not match. Everything else that floats inside the shell (the Deskly dock,
      the Messages overlay host, the mobile dock sheet, the banners) IS a
      following sibling of the backdrop and WOULD match: it is solid only
      because it carries no glass utility. Those that should be glass say so with
      \`glass-float\` (below), whose gate is different. NEVER give a floating surface
      \`glass-thin|thick|chip\` or a blur class by hand. The Settings gallery's
      \`ThemeCard\` mounts its own backdrop, so its preview can show glass.
   THE FLOAT GATE (\`glass-float-on\`). Gate 2 for \`glass-float\` is NOT the sibling gate:
      Radix portals render under <body>, outside the shell. The page-level
      \`ThemeBackdrop\` sets \`data-backdrop-mounted\` on <html> while it is mounted
      and the float follows THAT (any descendant of such a root). A panel opened over
      the 2D/3D WebGL floor (no backdrop, no attribute) stays SOLID.
   THE NESTING GUARD. FIX(glass-overhaul-nesting): Before: nothing stopped a shared
   component that carries \`glass-bar\` / \`glass-thin\` / \`glass-chip\` / \`glass-float\`
   (a SettingsPage save bar, a selection bar, a sidebar) from being rendered INSIDE a
   glass dialog, dock or overlay, where a second \`backdrop-filter\` only sees its
   parent's paint: a layer and a blur for nothing, and a second fill on a fill.
   After: all four variants end in \`:where(:not(.glass-float *))\`, so inside a
   \`.glass-float\` they are INERT (no filter, no fill swap, no sheen, no shadow) and
   the element falls back to its own class fill, which \`glass-tints\` has already
   turned into a faint tint. One glass level per stack, enforced in the stylesheet
   (zero specificity, so the variants still weigh (0,2,0)). A menu opened FROM a
   dialog is a separate portal, not a DOM descendant, so it is not affected.
   LATENT TRAP: a glass utility writes \`background-image\` (the sheen). An element
   that ALSO carries its own \`bg-(image:…)\` / gradient class loses it, because
   the utility's rule is more specific; route the element's own image through
   \`--glass-under\` (as the rail does with \`--rail-decoration\`) or it vanishes.
   The backdrop condition is in a \`:where()\` so each variant weighs (0,2,0),
   like \`dark:\` and \`brand-fill:\`. */
@custom-variant glass-thin-on {
  @container not style(--glass-filter-thin: none) {
    &:is([class]):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(:not(.glass-float *)) {
      @slot;
    }
  }
  &:is([class]):where(
      :is(
          :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='funkyglass']) *)
    ):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(:not(.glass-float *)) {
    @slot;
  }
}
@custom-variant glass-thick-on {
  @container not style(--glass-filter-thick: none) {
    &:is([class]):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(:not(.glass-float *)) {
      @slot;
    }
  }
  &:is([class]):where(
      :is(
          :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='funkyglass']) *)
    ):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(:not(.glass-float *)) {
    @slot;
  }
}
/* The plate is on when \`--page-plate\` is a real colour (off = \`transparent\`). */
@custom-variant page-plate-on {
  @container not style(--page-plate: transparent) {
    &:is([class]):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *) {
      @slot;
    }
  }
  &:is([class]):where(
      :is(
          :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='funkyglass']) *)
    ):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *) {
    @slot;
  }
}
/* \`inset-page:\` (LAYOUT, every theme) - "this element is inside the shell's inset page (md and up)".
   The shell keeps \`--page-inset\` round every routed page from md up (\`page-inset\` on <main>), so a module page
   (moduleFrame.ts) drops its OWN outer padding there instead of adding a second gutter: the content box is the same
   in every theme. It matches on the \`.page-inset\` ancestor alone - no theme condition - so a module rendered in a
   dialog / window (no such ancestor) keeps its padding. */
@custom-variant inset-page {
  @media (width >= 48rem) {
    &:is([class]):where(.page-inset *) {
      @slot;
    }
  }
}
/* FIX(glass-corners): \`plated:\` (PAINT ONLY) - "this element is inside the glass page plate AND the plate is inset (md and up)".
   Before: a module page (moduleFrame.ts) drew its own padded, bordered, rounded card INSIDE the plate's own inset and
   rounded edge, so a glass theme showed two frames, two padding layers and a 12px gap that is wider at the corners
   (the plate and the card had near-equal radii). After: inside the plate the module card drops its border colour,
   shadow and radius (\`plated:\` utilities in \`MODULE_CARD\`), so the plate IS the one painted frame. It must NEVER carry
   a layout utility (padding, margin, border WIDTH): themes never change placement - the box stays where it is and
   only its paint goes (a transparent border keeps the 1px). Below md the plate is full-bleed (no inset, no radius), so
   the module keeps its own card there and the variant is off. It needs the plate class on an ancestor
   (\`.page-plate\`, which only <main> wears) plus the same theme gate as \`page-plate-on\`, so a module rendered in a
   dialog or on the lobby, or under Remote Desk and Hivez, never matches. */
@custom-variant plated {
  @media (width >= 48rem) {
    @container not style(--page-plate: transparent) {
      &:is([class]):where(.page-plate *):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *) {
        @slot;
      }
    }
    &:is([class]):where(
        :is(
            :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
            :root[data-no-style-queries] :is([data-theme='funkyglass']) *
          ):not(:root [data-theme]:not([data-theme='funkyglass']) *)
      ):where(.page-plate *):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *) {
      @slot;
    }
  }
}
/* FIX(glass-contrast-modes): Before: only \`prefers-reduced-transparency\` made glass
   opaque. After: increased contrast and forced colours do too (one media list,
   named once), and forced colours get system colours. */
@custom-variant glass-opaque {
  @media (prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active) {
    @slot;
  }
}
/* FIX(glass-overhaul-floats): \`glass-float\` — floating panels (dialog, popover, menus,
   toast, dock). Before: floating surfaces were solid by rule. After: in a glass
   theme they are thick glass. Gate 1 is the theme's own token (\`--glass-filter-float\`,
   \`none\` in Remote Desk and Hivez). Gate 2 CANNOT be the sibling gate the other
   utilities use: Radix portals render under <body>, outside the shell, so they
   never follow a \`[data-theme-backdrop]\`. \`ThemeBackdrop\` (the page-level
   instance only) sets \`data-backdrop-mounted\` on <html> while it is mounted, and
   the gate is "inside that root". A dialog or menu opened over the 2D/3D WebGL
   floor (backdrop unmounted, attribute absent) therefore stays SOLID, as does
   anything in a ThemeScope preview that wears another theme (its token is off).
   \`:where()\` keeps the weight at (0,2,0), like the other variants. */
@custom-variant glass-float-on {
  @container not style(--glass-filter-float: none) {
    &:is([class]):where(:root[data-backdrop-mounted] *):where(:not(.glass-float *)) {
      @slot;
    }
  }
  &:is([class]):where(
      :is(
          :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='funkyglass']) *)
    ):where(:root[data-backdrop-mounted] *):where(:not(.glass-float *)) {
    @slot;
  }
}
/* \`glass-bar\` — floating chrome INSIDE a page. It lives in the shell, so it uses
   the same sibling gate as thin / thick glass, and its own token. */
@custom-variant glass-bar-on {
  @container not style(--glass-filter-bar: none) {
    &:is([class]):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(:not(.glass-float *)) {
      @slot;
    }
  }
  &:is([class]):where(
      :is(
          :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='funkyglass']) *)
    ):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *):where(:not(.glass-float *)) {
    @slot;
  }
}

/* INTERNAL (applied by the glass utilities, never written in markup): the shadow
   stack of every glass surface. FIX(glass-ambient-shadow): Before: only the
   inset rim, so light-mode cards and the plate looked flat next to the mock.
   After: the theme's panel shadow (\`--elevation-panel\`, the mock's
   \`--glass-shadow\`) sits under the rim. An element that carries its own
   \`shadow-*\` class gets none (\`--glass-ambient: 0 0 #0000\`) rather than two
   shadows. The \`--tw-*\` slots are Tailwind's own stack, in its order.
   FIX(glass-overhaul-rim): Before: only the bright TOP edge (\`--glass-highlight\`),
   so a pane read as a lit film at the top and nothing at the sides and bottom.
   After: a second inset ring, \`--glass-rim\`, a faint lit edge on all four sides
   (the bright top stays on top of it): the double edge of a pane of glass. */
@utility glass-shadow {
  --glass-ambient: var(--elevation-panel);
  box-shadow:
    inset 0 1px 0 var(--glass-highlight),
    inset 0 0 0 1px var(--glass-rim),
    var(--glass-ambient),
    var(--tw-inset-shadow, 0 0 #0000),
    var(--tw-inset-ring-shadow, 0 0 #0000),
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow, 0 0 #0000);
  &[class*='shadow-'] {
    --glass-ambient: 0 0 #0000;
  }
}
/* INTERNAL: the opaque fill of \`glass-thin\` / \`glass-thick\` (inside \`glass-opaque\`). */
@utility glass-opaque-fill {
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  background-image: var(--glass-under, none);
  --surface-glass: var(--card);
  --surface-chrome: var(--card);
  @media (forced-colors: active) {
    --surface-glass: Canvas;
    --surface-chrome: Canvas;
  }
}

/* THIN glass: interactive cards on the page (the Web view's room / person cards,
   the Hive lobby's panels). Never on an inset INSIDE a glass card — one blur per
   stack, the inner piece keeps \`bg-surface-glass-inset\`. */
@utility glass-thin {
  @variant glass-thin-on {
    -webkit-backdrop-filter: var(--glass-filter-thin);
    backdrop-filter: var(--glass-filter-thin);
    background-image: var(--glass-sheen), var(--glass-under, none);
    @apply glass-shadow;
    @variant glass-opaque {
      @apply glass-opaque-fill;
    }
  }
}

/* THICK glass: structural chrome (the rail, the header bar). */
@utility glass-thick {
  @variant glass-thick-on {
    -webkit-backdrop-filter: var(--glass-filter-thick);
    backdrop-filter: var(--glass-filter-thick);
    background-image: var(--glass-sheen), var(--glass-under, none);
    @apply glass-shadow;
    @variant glass-opaque {
      @apply glass-opaque-fill;
    }
  }
}

/* A floating office CHIP (view menu, corner menu, active-users pill, the header's
   round buttons). \`--surface-chip\` is OPAQUE in every theme, because chips float
   over the WebGL office; where the backdrop is mounted (the Web view, every inner
   page) the chip becomes thick glass instead. The fill is swapped by re-pointing
   the TOKEN, not by setting a background — so the chip's own \`bg-surface-chip\`
   still decides when it paints, and its open / hover states (\`bg-card\`,
   \`hover:bg-card\`) are untouched. The blur and the ambient shadow are skipped
   when the chip sits inside another glass element (the header bar): a nested
   \`backdrop-filter\` can only see its parent's own paint, so it would cost a layer
   and blur nothing, and a drop shadow there is noise. */
@utility glass-chip {
  @variant glass-thick-on {
    --surface-chip: var(--surface-chrome);
    @apply glass-shadow;
    &:is(:is(.glass-thick, .glass-thin) *) {
      --glass-ambient: 0 0 #0000;
    }
    &:not(:is(.glass-thick, .glass-thin) *) {
      -webkit-backdrop-filter: var(--glass-filter-thick);
      backdrop-filter: var(--glass-filter-thick);
    }
    @variant glass-opaque {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      --surface-chip: var(--card);
      @media (forced-colors: active) {
        --surface-chip: Canvas;
      }
    }
  }
}

/* INTERNAL (applied by \`page-plate\` and \`glass-float\`, never written in markup):
   the role tokens that paint TILES, WELLS, hover rows and tracks become faint
   TRANSLUCENT TINTS (\`--plate-tile|well|hover|track\`, no blur) inside a plated page
   and inside a glass panel, so the pieces read as tint-on-glass separated by the
   hairline tokens, not as boxes. FIX(glass-overhaul-plate-tints): Before: every
   one of these was an opaque role colour, so an inner page was a sheet of glass
   covered in opaque tiles. After: \`--card\` + \`--surface-raised\` + \`--drive-surface-card\`
   are the tile tint; \`--muted\` + \`--secondary\` + \`--surface-sunken\` + \`--table-head\`
   the well tint; \`--accent\` the hover tint; \`--segmented-track\` the track tint.
   Kept OPAQUE on purpose (see themes/README.md → "Plate-scope tints"):
   \`--popover\` (floats paint it as their fill and fallback), \`--segmented-thumb\`
   (a knob), \`--doc-canvas\`, \`--rail*\`, \`--surface-chip\` (the chip swaps it itself),
   and \`--drive-surface-subtle|chip\`, \`--ledger-stripe|hover\`, \`--input\`, which are
   ALREADY washes. A \`/NN\` modifier on a re-pointed token multiplies its alpha
   (\`bg-card/80\` is \`color-mix(in oklab, var(--card) 80%, transparent)\`), so the
   result is fainter, never opaque. */
@utility glass-tints {
  --card: var(--plate-tile);
  --surface-raised: var(--plate-tile);
  --drive-surface-card: var(--plate-tile);
  --muted: var(--plate-well);
  --secondary: var(--plate-well);
  --surface-sunken: var(--plate-well);
  --table-head: var(--plate-well);
  --accent: var(--plate-hover);
  --segmented-track: var(--plate-track);
}
/* INTERNAL: the OPAQUE form of \`glass-tints\`, for (1) opaque glass (reduced
   transparency, increased contrast, forced colours), and (2) anything inside the
   plate that is \`sticky\` or \`fixed\` and paints a role token as its fill: it
   scrolls over content, and a tint with no blur would let that content read
   through its text. A tile is the popover colour; a well / hover / track is the
   base (\`--tint-base\`, set by the caller: the plate's solid colour, or the
   popover colour inside a float) mixed toward the ink, the same direction as the
   tints (darker by day, lighter by night). */
@utility glass-tints-solid {
  --card: var(--popover);
  --surface-raised: var(--popover);
  --drive-surface-card: var(--popover);
  --muted: color-mix(in oklab, var(--tint-base, var(--popover)), var(--foreground) 6%);
  --secondary: color-mix(in oklab, var(--tint-base, var(--popover)), var(--foreground) 6%);
  --surface-sunken: color-mix(in oklab, var(--tint-base, var(--popover)), var(--foreground) 6%);
  --table-head: color-mix(in oklab, var(--tint-base, var(--popover)), var(--foreground) 8%);
  --accent: color-mix(in oklab, var(--tint-base, var(--popover)), var(--foreground) 10%);
  --segmented-track: color-mix(in oklab, var(--tint-base, var(--popover)), var(--foreground) 10%);
}

/* FLOAT glass: a dialog sheet, popover, dropdown / context / select / hover-card
   menu, toast, dock. The thickest, most body, deepest shadow. The element keeps
   its opaque \`bg-popover\` / \`bg-card\` / \`bg-background\` as the FALLBACK and the
   utility replaces that fill while it is active (\`background-color\` here,
   \`.glass-float[class]\` outranks \`.bg-popover\`). Opaque under reduced
   transparency / increased contrast / forced colours. Inside it the tile, well,
   hover and track tokens are the same faint tints as on the plate. Never on a
   scrim, a row, or inside another \`glass-float\` (one level per stack). */
@utility glass-float {
  @variant glass-float-on {
    --tint-base: var(--popover);
    /* FIX(glass-overhaul-fade): Before: a panel opened and closed with tw-animate's \`fade-in-0\` / \`fade-out-0\`, a
       cross-fade of the WHOLE layer from 0, which fades the blur and the fill with it: the panel flashed see-through for
       120-180 ms. After: in a glass theme the fade runs from this floor, not from 0, so at its most transparent the
       panel still has at least as much body as the plate (fill 0.76-0.80 x 0.6 is 0.46-0.48, the plate is 0.36-0.42);
       the zoom and slide still carry the entrance. Pure CSS: it only overrides the animation's own custom properties (\`!important\`, because
       \`data-[state=open]:fade-in-0\` ties this rule on specificity and the order of two utilities is not a contract).
       Outside a glass theme this rule does not exist, so Remote Desk and Hivez fade from 0 as before. */
    --tw-enter-opacity: 0.6 !important;
    --tw-exit-opacity: 0.6 !important;
    background-color: var(--glass-float);
    background-image: var(--glass-sheen), var(--glass-under, none);
    -webkit-backdrop-filter: var(--glass-filter-float);
    backdrop-filter: var(--glass-filter-float);
    @apply glass-shadow;
    --glass-ambient: var(--elevation-overlay-strong);
    @apply glass-tints;
    /* The same safety net as the plate's: a sticky, fixed or shadowed-absolute piece inside the panel (a dialog's sticky
       header, a tab switcher's sliding thumb) keeps an OPAQUE fill. */
    & :is([class*='sticky'], [class*='fixed'], [class*='absolute'][class*='shadow-']):not(.glass-bar, .glass-float) {
      @apply glass-tints-solid;
    }
    @variant glass-opaque {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      background-image: var(--glass-under, none);
      background-color: var(--popover);
      @apply glass-tints-solid;
      @media (forced-colors: active) {
        background-color: Canvas;
      }
    }
  }
}

/* BAR glass: floating chrome INSIDE a page — a sticky header, toolbar, filter bar,
   selection bar or in-page sidebar that content scrolls under or beside. It is the
   one sanctioned blur inside a plated page: it blurs the page content passing
   beneath it, which is its job (the plate rule turns every OTHER nested blur off).
   Replaces the element's opaque fill while active; opaque otherwise. */
@utility glass-bar {
  @variant glass-bar-on {
    background-color: var(--glass-bar);
    background-image: var(--glass-sheen), var(--glass-under, none);
    -webkit-backdrop-filter: var(--glass-filter-bar);
    backdrop-filter: var(--glass-filter-bar);
    @apply glass-shadow;
    /* FLAT: the rim (top highlight + four-edge ring) and the element's own hairline
       border, no ambient drop shadow. Bars include full-height sidebars and rails, and a
       card-style drop shadow under a rail looks wrong. FIX(glass-overhaul-rail-shadow). */
    --glass-ambient: 0 0 #0000;
    @variant glass-opaque {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      background-image: var(--glass-under, none);
      background-color: var(--background);
      @media (forced-colors: active) {
        background-color: Canvas;
      }
    }
  }
}

/* DIM: the "you cannot go here" state of a glass card (the Web view's locked rooms).
   FIX(glass-overhaul-dim): Before: \`opacity-60 saturate-50\` on the card ROOT, which
   fades the card's blur and fill along with its contents, so the raw hex field
   showed through and a locked room looked transparent next to frosted open ones.
   After: in a glass theme the card keeps its material at full strength and its
   CONTENTS (every child except the sweep-edge light; the rings are the root's own
   shadow) are dimmed and desaturated. Everywhere else (Remote Desk, Hivez, glass
   not active) the declarations are EXACTLY \`opacity-60 saturate-50\`. */
@utility glass-dim {
  @apply opacity-60 saturate-50;
  @variant glass-thin-on {
    opacity: 100%;
    filter: none;
    & > :not(.sweep-edge) {
      @apply opacity-60 saturate-50;
    }
  }
  @variant glass-float-on {
    opacity: 100%;
    filter: none;
    & > :not(.sweep-edge) {
      @apply opacity-60 saturate-50;
    }
  }
}
/* \`glass-dim-soft\`: the same state at the strength a "spent" request card uses
   (FIX(glass-overhaul-dim): Before: \`opacity-[0.78]\` on the card root, fading its blur and
   fill). Without glass it is EXACTLY \`opacity-[0.78]\` (no desaturation); with glass the root
   keeps its material and every child but the sweep-edge light is dimmed to 78 %. Works on a
   \`glass-thin\` card and on a \`glass-float\` panel. */
@utility glass-dim-soft {
  opacity: 78%;
  @variant glass-thin-on {
    opacity: 100%;
    & > :not(.sweep-edge) {
      opacity: 78%;
    }
  }
  @variant glass-float-on {
    opacity: 100%;
    & > :not(.sweep-edge) {
      opacity: 78%;
    }
  }
}

/* THE PAGE INSET (layout, every theme): <main> keeps \`--page-inset\` from the chrome on all four sides from md
   up and is flush below it. It carries NO theme condition and sets nothing but the margin, so every theme puts a
   page's content box in the same place; the plate below only paints. */
@utility page-inset {
  margin: var(--page-inset);
  @media (width < 48rem) {
    margin: 0;
  }
}
/* THE PAGE PLATE: one sheet of thick glass behind a whole inner page (only on
   the routes \`pagePlateVisibility.ts\` allows). Lists, tables and documents sit
   on it instead of on the hex field; nothing inside needs a blur of its own.
   It is TWO elements in ShellContent, on purpose:
     • \`page-plate-underlay\` — an \`aria-hidden\`, pointer-events-none sibling
       BEHIND <main> that paints the glass itself (fill, edge, thick filter,
       highlight, ambient shadow, sheen, radius);
     • \`page-plate\` — on <main>, only what the CONTENT needs to PAINT: the corner
       radius (clipping the scrolling page to the plate's shape) and
       \`--background\` re-pointed at \`--page-plate-solid\`
       — the plate composited over the ground — so the many page pieces that
       paint \`bg-background\` (sticky headers) blend with the plate instead of
       showing as darker / lighter patches.
   FIX(page-plate-containing-block): Before: the thick glass sat on <main>. A
   \`backdrop-filter\` (like \`filter\`, \`transform\`, \`will-change\`, \`contain:
   paint\`) on an ANCESTOR makes it the containing block of every \`position:
   fixed\` descendant, so the tracker's selection bar, the bulk-export bar and
   the phone FAB scrolled away with the page. After: the glass is the underlay
   (a sibling), <main> carries none of those properties, and no ancestor of page
   content may. Pinned by glassUtilities.test.ts and shellContentPagePlate.test.tsx.
   FIX(plate-double-blur): Before: a \`backdrop-blur-*\` class on anything inside
   the page re-blurred the plate for nothing (a second backdrop layer per card).
   After: the plate turns those filters off, except on sticky / fixed / absolute
   elements (see the rule on \`page-plate\`).
   The plate PAINTS ONLY (owner, 2026-11-11: themes never change placement). The gutter
   that lets the backdrop show round it is the shared \`--page-inset\` (\`page-inset\`
   above, every theme, no theme token); \`--page-plate-radius\` is paint. It collapses
   to a full-bleed rectangle below md. The underlay's top edge is the chrome spacer
   ShellContent renders above <main> (app bar + impersonation + announcement,
   KEEP IN STEP with that spacer) plus the inset <main> keeps from it. */
@utility page-plate {
  @variant page-plate-on {
    --background: var(--page-plate-solid);
    --tint-base: var(--page-plate-solid);
    @apply glass-tints;
    border-radius: var(--page-plate-radius);
    /* FIX(glass-corners): the radius a piece that touches the plate's edge needs (a glass sidebar or header).
       Before: nothing published it, and a \`backdrop-filter\` child is NOT clipped by an ancestor's rounded
       \`overflow\` in Chromium, so a glass sidebar painted a square corner over the plate's curve. After: the
       plate's INNER radius (outer minus the 1px border), so the child rounds itself concentrically. Only set from md,
       where the plate is rounded; elsewhere \`var(--plate-corner, <fallback>)\` falls back. */
    @media (width >= 48rem) {
      --plate-corner: calc(var(--page-plate-radius) - 1px);
    }
    @media (width < 48rem) {
      border-radius: 0;
    }
    /* Positioned bars and badges keep their blur: a sticky header, a fixed bar
       or an overlay badge blurs content or imagery scrolling UNDER it, not the
       plate (Attendance's \`bg-background/80\` header, the tracker settings bars,
       cover and asset badges). */
    & [class*='backdrop-blur']:not([class*='sticky'], [class*='absolute'], [class*='fixed'], .glass-bar, .glass-float) {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
    }
    /* FIX(glass-overhaul-bars): \`glass-bar\` is the sanctioned nested blur: it blurs
       the page content scrolling beneath it, which is its job. Before: the rule above
       turned off any \`backdrop-blur-*\` descendant that was not positioned, so a bar
       (or a float) that still carried its old blur class would have lost its glass.
       After: both are named in its \`:not()\`, so it only ever switches off the
       blur of something that is NOT glass. (The bar's own filter comes from its
       token and is never touched by this rule.) A sticky or
       fixed element that paints a role token as its fill must stay readable over
       the content it scrolls across, so it gets the OPAQUE tints (a bar or a
       float re-applies its own glass instead). So does an \`absolute\` piece that
       carries a drop shadow: a shadow means it floats over something (a hover
       action toolbar over a row's title, the sliding thumb of a tab switcher
       built on \`bg-card\`), and a tint there would let that something show
       through. (A pure decoration without a shadow keeps the tint.) */
    & :is([class*='sticky'], [class*='fixed'], [class*='absolute'][class*='shadow-']):not(.glass-bar, .glass-float) {
      @apply glass-tints-solid;
    }
    @variant glass-opaque {
      @apply glass-tints-solid;
    }
  }
}
@utility page-plate-underlay {
  /* GEOMETRY (every theme, no theme condition): the sheet's box, derived from the shared \`--page-inset\` and the
     chrome. The edge is a token (\`--page-plate-edge\`, transparent outside Funky Glass) and the radius a token, so
     the box is the same in every theme and only its paint differs. */
  top: calc(
    var(--app-bar-h) + var(--app-impersonation-h, 0px) + var(--app-announcement-h, 0px) + var(--page-inset)
  );
  right: var(--page-inset);
  bottom: var(--page-inset);
  left: var(--page-inset);
  border: 1px solid var(--page-plate-edge);
  border-radius: var(--page-plate-radius);
  @media (width < 48rem) {
    top: calc(var(--app-bar-h) + var(--app-impersonation-h, 0px) + var(--app-announcement-h, 0px));
    right: 0;
    bottom: 0;
    left: 0;
    border-width: 0;
    border-radius: 0;
  }
  /* PAINT (behind the theme's plate gate). */
  @variant page-plate-on {
    background-color: var(--page-plate);
    background-image: var(--glass-sheen);
    -webkit-backdrop-filter: var(--glass-filter-thick);
    backdrop-filter: var(--glass-filter-thick);
    box-shadow:
      inset 0 1px 0 var(--glass-highlight),
      inset 0 0 0 1px var(--glass-rim),
      var(--elevation-panel);
    @media (width < 48rem) {
      box-shadow: inset 0 1px 0 var(--glass-highlight);
    }
    @variant glass-opaque {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      background-image: none;
      background-color: var(--page-plate-solid);
      @media (forced-colors: active) {
        background-color: Canvas;
        border-color: CanvasText;
      }
    }
  }
}

/* ── LITE GLASS ──────────────────────────────────────────────────────────────
   FIX(sweep-lite-glass): Before: a page with more than 24 blurred surfaces (the
   Web view: a thin card per room and person) got NO sweep, because every blurred
   surface under the band is re-blurred each frame. After: lib/ui/sweepClock sets
   \`data-glass-lite="true"\` on <html> for as long as that page is swept, and this
   ONE rule takes the \`backdrop-filter\` off thin glass CARDS (\`.glass-thin\`). A
   lite card keeps everything else glass paints — fill, rim, sheen, shadow — and
   its text contrast is gated without the blur (funkyglassContrast.test.ts), so
   only the frosting goes. Structural glass (rail, header bar, plate underlay,
   chips) keeps its blur, which is what bounds the cost again. The rule has the
   same two gates as the utility it modifies (the theme's own token, the backdrop
   mounted), so it is inert in Remote Desk and Hivez, and the attribute is only
   ever set by a running Funky Glass sweep. In \`@layer utilities\` so it sits after
   \`glass-thin\` and wins on specificity (themes/__tests__/glassBudgetGuard.test.ts
   pins that it removes a filter and nothing else). */
@layer utilities {
  @container not style(--glass-filter-thin: none) {
    :root[data-glass-lite='true'] .glass-thin:is([class]):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *) {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
    }
  }
  :root[data-glass-lite='true']
    .glass-thin:is([class]):where(
      :is(
          :root[data-no-style-queries]:is([data-theme='funkyglass']) *,
          :root[data-no-style-queries] :is([data-theme='funkyglass']) *
        ):not(:root [data-theme]:not([data-theme='funkyglass']) *)
    ):where([data-theme-backdrop] ~ *, [data-theme-backdrop] ~ * *) {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}

/* ── AVATAR SHAPE + RING ─────────────────────────────────────────────────────
   The theme owns the avatar's SHAPE and RING (THEME_SYSTEM_PLAN §6). ONE class,
   \`.avatar-shape\`, goes on the photo <img> / initials element ITSELF — the
   shared primitives (Face/FaceStack, chat UserAvatar, the 3D NameplateLayer,
   the \`components/ui/avatar\` Avatar root, avatar-bubbles) add no wrapper, so
   their DOM (and every consumer test's "photo immediately before the name") is
   exactly what it was before themes.

   FIX(avatar-dom-contract): Before: the photo/initials sat in an \`.avatar-ring\`
   WRAPPER that drew the ring as a five-layer drop-shadow \`filter\` around a
   \`clip-path\`ed child. It changed Face's root from <img> to <span> (14 consumer
   tests failed), gave every avatar a filter stacking context (a FaceStack's \`+N\`
   chip slid UNDER the last face), repainted five shadows per avatar on scroll,
   and — to keep the filter from outlining a caller's round \`ring-*\` — wiped
   caller rings with \`box-shadow: none !important\`, including SEMANTIC ones
   (RsvpRoster's green "in the room" ring). After: no wrapper. (The ring was then
   drawn with \`corner-shape\` — superseded by FIX(hivez-hex-avatar-redesign)
   below, which keeps the no-wrapper contract. The \`+N\` chip is an
   \`.avatar-shape\` too, so it shares the faces' paint order; semantic rings go
   on an \`.avatar-frame\` wrapper.)

   FIX(hivez-hex-avatars): the owner saw ROUND avatars under Hivez. Before: only
   the four shared primitives wore the class — every other face (the header
   account button, the shadcn Avatar behind PersonRow / the Web view / pickers,
   meeting tiles, call cards, notifications, lobby, profile dialog, the 2D floor
   chip…) kept a hard-coded \`rounded-full\` / \`rounded-control\`, and a round
   \`overflow-hidden\` wrapper clipped the hexagon of a Face placed inside it back
   to a circle. After: every face routes through the classes below. Remote Desk
   still resolves each class to the exact \`rounded-full\` / \`rounded-control\` it
   replaced.

   FIX(hivez-hex-avatar-redesign): the owner: the hexagons "look odd and bad".
   Before: \`corner-shape: bevel\` + \`border-radius: 50% / 28.87%\` — SHARP
   vertices and a flat 2px border ring whatever the size — and, in engines
   without \`corner-shape\` (the desktop app's Electron 33 / Chromium 130,
   Firefox), a \`clip-path\` polygon that clipped the ring and glow away
   entirely. After: the reference design — a pointy-top hexagon with softly
   ROUNDED vertices, a gold ring that scales with the face (\`max(1.5px,
   5.5%)\`), a light→deep gold gradient and a soft glow — drawn by ONE SVG
   filter on the face element itself (\`--avatar-filter\`,
   \`components/shared/people/AvatarShapeDefs.tsx\`). A filter works on an
   <img> (which can host no pseudo-element and, by the DOM contract above, no
   wrapper), scales in \`objectBoundingBox\` units, and draws the face — hexagon, ring,
   glow — in Chromium of any recent version (the desktop app's Electron 33
   included) and in Firefox. What still needs container style queries
   (Chromium only) are the refinements around it: the frame's rounded-hex
   semantic ring, dropping cut-out borders, the hexagonal crop veil — Firefox
   keeps the caller's round ring / border there. The geometry lives once, in
   \`lib/ui/avatarShape.ts\`; the mask images the theme files paste
   (\`--avatar-mask\`, \`--avatar-frame-mask\`) are generated there and pinned by
   its test. A semantic ring (speaking, presence, selection) is a rounded-hex
   outline an \`.avatar-frame\` draws AROUND its face.

   The classes:
     .avatar-shape          THE face (the <img> / initials element): shape,
                            ring and glow (the theme's filter).
     .avatar-shape-control  add to \`.avatar-shape\` where Remote Desk draws a
                            squircle (\`rounded-control\`) — the header account
                            button. A shaped theme's filter reshapes it anyway.
     .avatar-frame          a WRAPPER around a face that carries a SEMANTIC ring
                            (\`ring-*\`, or \`--avatar-frame-ring\` for a colour
                            that is not a Tailwind ring): Remote Desk draws the
                            caller's ring as always; a shaped theme turns it
                            into a rounded-hex outline just outside the face.
     .avatar-fill           a child filling a shaped box (shadcn AvatarFallback,
                            a hover/reaction overlay): the shape only — its
                            parent face or frame owns the ring.
     .avatar-cutout         marks a caller \`border-*\` on an \`.avatar-shape\`
                            whose only job is to cut an overlapping face out of
                            its neighbour; a ringed theme's ring does that job,
                            so the border is dropped (unlayered rule).
     .avatar-mask           a crop-preview veil (the avatar uploader): darkens
                            everything OUTSIDE the avatar shape.
     .avatar-stack-gap      FaceStack's card-coloured separation ring; a ringed
                            theme's own ring replaces it.
     .avatar-plain          a SCOPE (put it on a card's footer row): every
                            \`.avatar-shape\` inside keeps the theme's hexagon but
                            drops the gold ring + glow for a thin card-coloured
                            separator (\`--avatar-filter-plain\`). Remote Desk has
                            none, so it stays unfiltered. This is now also the
                            DEFAULT look (see \`.avatar-ring\`).
     .avatar-ring           a SCOPE (lobby page root + OfficeView root): every
                            \`.avatar-shape\` inside gets the theme's gold ring +
                            glow (\`--avatar-filter-ring\`). Outside it faces are
                            plain (hexagon, no ring). Remote Desk has no ring.

   Tokens (every theme declares all of them — registry.test.ts):
     --avatar-shape         \`none\` (a circle) or \`hexagon\`; read by the style
                            queries below and by JS (\`lib/ui/avatarShape.ts\`)
     --avatar-radius        border-radius (Remote Desk 9999px = a circle)
     --avatar-filter        the DEFAULT face filter — the PLAIN hexagon, no ring
                            (\`initial\` = none, or \`url(#…)\`)
     --avatar-filter-plain  the same plain hexagon (\`initial\` = none)
     --avatar-filter-ring   the ringed filter, applied only by \`.avatar-ring\`
                            (\`initial\` = none)
     --avatar-mask          the shape as a mask image (\`none\`, or a data URI)
     --avatar-frame-mask    a frame's semantic-ring mask image
     --avatar-ring-width    \`0px\` = no theme ring (keeps \`.avatar-stack-gap\`)
     --avatar-ring-color / -color-2 / --avatar-glow-color   the filter's colours

   Remote Desk (\`none\` everywhere, ring 0px) matches none of the queries below,
   so an avatar gets only \`border-radius: 9999px\` — the \`rounded-full\` it always
   had: pixel-identical. Everything in \`@layer components\` yields to any caller
   utility (\`rounded-md\`, \`border-2\`, \`ring-2 ring-success\`, \`shadow\`). */
@layer components {
  .avatar-shape {
    border-radius: var(--avatar-radius);
  }
  /* Remote Desk's header account button is a squircle, not a circle.
     FIX(avatar-shape-control-fallback): this is the UNCONDITIONAL default — no
     \`@container\`/\`@supports\` guard an older engine could drop wholesale (it
     once fell back to \`9999px\`, a circle, there). A shaped theme's filter
     reshapes the button without touching the radius. */
  .avatar-shape-control {
    border-radius: var(--radius-control);
  }
  .avatar-fill {
    border-radius: inherit;
    mask-image: var(--avatar-mask);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
  }
  .avatar-frame {
    border-radius: var(--avatar-radius);
    /* The frame's semantic ring colour, resolved ON the frame: Tailwind's
       \`--tw-ring-color\` is registered \`inherits: false\`, so the frame's
       \`::after\` could not read it — this unregistered copy can. */
    --avatar-frame-ring-resolved: var(--avatar-frame-ring, var(--tw-ring-color, transparent));
  }
  /* FIX(avatar-mask-fallback-clip): the uploader's crop-preview veil. Remote
     Desk: the caller's giant \`box-shadow\` spread around this circle. A shaped
     theme swaps the shadow for a veil masked to everything but the hexagon
     (below) — a box-shadow can only follow a border-radius, never a hexagon. */
  .avatar-mask {
    border-radius: var(--avatar-radius);
  }
  /* The card-coloured separation ring between overlapping faces in a
     FaceStack (≡ the \`ring-2 ring-card\` it replaced). It shrinks to nothing as
     the theme's own ring grows, so a themed ring REPLACES it. */
  .avatar-stack-gap {
    box-shadow: 0 0 0 max(0px, calc(2px - var(--avatar-ring-width))) var(--card);
  }
  /* A shaped theme positions every frame so its ring can hang off it —
     layered, so a caller's \`absolute\` / \`fixed\` still wins. */
  @container not style(--avatar-shape: none) {
    .avatar-frame {
      position: relative;
    }
  }
}
/* \`.avatar-plain\` — an explicit opt-out scope. Plain is now the DEFAULT (the ring
   is opt-in via \`.avatar-ring\` on the Lobby + Office), so nothing needs this today;
   keep it for a surface nested inside a ringed scope that must go plain again.
   It re-points \`--avatar-filter\` at the theme's plain variant for every
   \`.avatar-shape\` inside it (the custom property inherits). Remote Desk's
   \`--avatar-filter-plain\` is \`initial\` → the empty fallback → no filter. */
.avatar-plain {
  --avatar-filter: var(--avatar-filter-plain,);
}
/* FIX(avatar-ring-lobby-office-only): owner 10-07 — gold hex ring only in the lobby + office. Before: every Hivez face ringed unless scoped .avatar-plain. After: plain by default; .avatar-ring scope on Lobby + OfficeView.
   \`.avatar-ring\` — the opt-in scope: re-points \`--avatar-filter\` at the ringed
   filter. Remote Desk's \`--avatar-filter-ring\` is \`initial\` → no filter. */
.avatar-ring {
  --avatar-filter: var(--avatar-filter-ring,);
}
/* THE FACE FILTER — unlayered and UNCONDITIONAL, so no engine lets a caller's
   Tailwind filter utility (\`grayscale\` on an inactive face, UserActionMenu)
   replace it: it composes the utility's own \`--tw-*\` functions with the
   theme's \`--avatar-filter\` (the caller's effects first, so the ring keeps
   its colour). Remote Desk's token is \`initial\` (guaranteed-invalid), so it
   falls back to nothing: with no caller filter the whole value is empty →
   invalid at computed time → \`filter: none\`, exactly as before; with
   \`grayscale\` it is exactly the utility's own \`grayscale(100%)\`.
   (It sits outside the style query below because Firefox has no container
   style queries for custom properties — there the face keeps its hexagon,
   ring and glow, and only the frame / cut-out / crop-veil refinements below
   are skipped: frames keep the caller's round ring, cut-out borders stay.) */
.avatar-shape {
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,)
    var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,)
    var(--tw-drop-shadow,) var(--avatar-filter,);
}
/* Shaped themes only, and UNLAYERED on purpose: each rule must beat a caller
   utility (\`border-2 border-white\`, \`ring-2 ring-success\`,
   \`overflow-hidden\`). Remote Desk (\`--avatar-shape: none\`) never matches. */
@container not style(--avatar-shape: none) {
  /* The theme ring separates overlapping faces; a cut-out border would only
     push the photo inward and leave a gap inside the ring. */
  .avatar-shape.avatar-cutout {
    border-width: 0;
  }
  /* The caller's ring/border becomes the rounded-hex outline in \`::after\`.
     \`overflow: visible\` so the outline (outside the box) and the face's glow
     are not clipped: every child of a frame is itself shaped (\`.avatar-shape\`
     / \`.avatar-fill\`). A caller border keeps its WIDTH (made transparent), so
     the face keeps exactly the box it reserved — the outline is positioned
     off the padding box, i.e. the face's own edge. A frame must not pad its
     face (ReplayPlayer uses a margin + ring offset instead): the outline
     would sit that padding away from it. */
  .avatar-frame {
    box-shadow: none;
    border-color: transparent;
    overflow: visible;
  }
  .avatar-frame::after {
    content: '';
    position: absolute;
    /* FRAME_RING_PX + FRAME_RING_GAP_PX (lib/ui/avatarShape.ts), measured from
       the padding box — the face's edge. */
    inset: -3px;
    pointer-events: none;
    background: var(--avatar-frame-ring-resolved);
    mask-image: var(--avatar-frame-mask);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
  }
  /* FIX(hivez-web-status-ring): a frame whose ring IS the person's presence
     (\`data-avatar-status\` = the DISPLAY status — WebCards \`Face\`,
     RoomChannelRow). Before: the face's own theme filter drew the decorative
     gold ring + glow, the frame's outline drew the status colour around it,
     and a speaking halo / status dot stacked a third and fourth mark. After:
     the face drops the theme filter (the hexagon comes from the mask instead)
     and the frame's outline — 2px, 1px off the face, the reserved box
     unchanged — is the only border: active = brand gold, away / inactive =
     \`--avatar-away-color\` with the face greyscale, focus =
     \`--avatar-focus-color\`. Same rules as the 2D floor chip
     (topdown/avatarTexture.ts, FIX(hivez-floor-status-ring)). */
  .avatar-frame[data-avatar-status] > .avatar-shape {
    filter: none;
    mask-image: var(--avatar-mask);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
  }
  .avatar-frame[data-avatar-status='away'] > .avatar-shape,
  .avatar-frame[data-avatar-status='inactive'] > .avatar-shape {
    filter: grayscale(1);
  }
  .avatar-frame[data-avatar-status='active']::after {
    background: var(--brand);
  }
  .avatar-frame[data-avatar-status='away']::after,
  .avatar-frame[data-avatar-status='inactive']::after {
    background: var(--avatar-away-color);
  }
  .avatar-frame[data-avatar-status='focus']::after {
    background: var(--avatar-focus-color);
  }
  /* The ring carries the status, so the separate dot beside a status frame
     goes (\`StatusDot className="avatar-status-dot"\`). */
  .avatar-status-dot {
    display: none;
  }
  /* Speaking / mic-open: a soft \`--presence\` glow OUTSIDE the ring, never a
     second outline — the old halo element (\`data-avatar-halo\`) is dropped.
     Painted before the face (tree order, no z-index), so the face covers the
     glow's centre; the mask is a blurred hexagon (\`--avatar-glow-mask\`,
     HEX_GLOW_MASK_PAD % wider than the face on every side). */
  [data-avatar-halo] {
    display: none;
  }
  .avatar-frame[data-avatar-glow]::before {
    content: '';
    position: absolute;
    inset: -25%;
    pointer-events: none;
    background: var(--presence);
    mask-image: var(--avatar-glow-mask);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
  }
  .avatar-frame[data-avatar-glow='mic']::before {
    opacity: 0.45;
  }
  /* Speaking (owner call 2026-09-23): the glow PLUS a thin \`--presence\`
     rounded-hex line just outside the status ring — a second mask layer, the
     frame ring's own 2px mask on a box 1px past the ring on every side
     (face + 2 × (3px ring + 1px gap + 2px line)), centred in this 1.5×-face
     pseudo-element. Mask layers add, so the line is solid over the glow.
     Mic-open keeps the faint glow only. */
  .avatar-frame[data-avatar-glow='speaking']::before {
    mask-image: var(--avatar-glow-mask), var(--avatar-frame-mask);
    mask-size:
      100% 100%,
      calc(100% / 1.5 + 12px) calc(100% / 1.5 + 12px);
    mask-position: center;
  }
  .avatar-mask {
    box-shadow: none;
    /* square box: the veil must reach the corners the radius would cut */
    border-radius: 0;
    background: var(--scrim);
    /* theme: alpha-only mask layers — colour is irrelevant, only coverage. */
    mask-image: linear-gradient(black, black), var(--avatar-mask);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    mask-composite: exclude;
  }
}

/* Global slim scrollbars: the native Windows bar (17px track + arrow buttons)
   read as clunky inside panels like the attendance log. Every scroll container
   gets a 6px rounded thumb on a transparent track, theme-aware via the
   --scrollbar-thumb vars. Chromium/Safari are styled with ::-webkit-scrollbar;
   Firefox gets the standard properties INSIDE the @supports guard — on
   Chromium ≥121 setting scrollbar-width/scrollbar-color would DISABLE the
   ::-webkit-scrollbar styling, so the standard props must stay Firefox-only. */
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-corner {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 9999px;
  /* The thumb used to butt against the content it scrolls (user call
     2026-08-29). A transparent border + padding-box clip insets it 2px from
     BOTH edges of the 10px track, so the visible thumb stays 6px but always
     sits in a small gutter between it and the content. */
  border: 2px solid transparent;
  background-clip: padding-box;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-hover);
}
@supports (-moz-appearance: none) {
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb) transparent;
  }
}

/* Auto-hiding scrollbar: the track width stays reserved (so there's no layout
   shift) but the thumb only appears while the pointer is over the scroll area.
   Used on scroll panels (e.g. the item drawer's left/right columns) so the bar
   isn't permanently visible. */

/* The design's "epic" card edge — the rainbow ring on the LIVE room card
   (Web view wall). A masked gradient overlay rather than border-image, so it
   follows the card's own border-radius; the element keeps a transparent real
   border so the ring adds no layout shift. Colours read off the export:
   cyan into indigo into pink, running 135deg like the mock — now the four
   \`--epic-1..4\` tokens (every theme file, \`registry.test.ts\`) rather than raw
   hex, so a theme can pick its own ring hues (Hivez: gold/amber/cream/white-gold)
   instead of inheriting Remote Desk's rainbow. Remote Desk's tokens equal these
   exact hexes, so this is pixel-identical there. */
@utility epic-border {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, var(--epic-1), var(--epic-2) 45%, var(--epic-3) 80%, var(--epic-4));
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
}

/* Live-meeting room card edge (Web view wall, features/office/channels/WebCards.tsx):
   an "AI-style" light sweep — ONE soft bright band that travels around the
   card's rounded border (3.5s, linear, looping), over the card's dim
   \`ring-[1.5px] ring-brand/40\` track. A masked conic-gradient on \`::before\`
   (\`::after\` belongs to \`epic-border\`), rotated by animating a registered
   \`<angle>\` custom property — a pure CSS animation, no JS loop, and only live
   cards carry the class. Geometry: the pseudo-element is inset -2.5px from the
   card's padding box = 1px card border + 1.5px ring, so its 2.5px-thick masked
   track lies exactly on border + ring (outer radius = (1.5rem - 1px) + 2.5px)
   and adds no layout shift. Theme tokens only (\`--brand\`, \`--meeting-sweep-core\` for the bright centre);
   the mask colours are alpha-only. Without \`@property\` support the angle never
   animates and the band just sits at its initial position (a static lit
   ring). Reduced motion: no movement, a steady full lit ring instead. */
@property --meeting-sweep-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
@keyframes meeting-sweep {
  to {
    --meeting-sweep-angle: 360deg;
  }
}
@utility meeting-sweep {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: -2.5px;
    padding: 2.5px;
    border-radius: calc(1.5rem + 1.5px);
    background: conic-gradient(
      from var(--meeting-sweep-angle),
      transparent 0deg,
      transparent 270deg,
      color-mix(in oklch, var(--brand) 35%, transparent) 300deg,
      var(--brand) 320deg,
      var(--meeting-sweep-core) 340deg,
      var(--brand) 355deg,
      transparent 360deg
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
    animation: meeting-sweep 3.5s linear infinite;
  }
}
@media (prefers-reduced-motion: reduce) {
  .meeting-sweep::before {
    animation: none;
    background: color-mix(in oklch, var(--brand) 70%, transparent);
  }
}

/* FIX(TRK-AUD-74): a thin scrollbar that is ALWAYS visible (the board's horizontal scroll cue).
   Before: the board used \`scroll-on-hover\`, so a clipped Done column had no visible scroll affordance.
   After: this utility keeps the thumb shown at rest. */
@utility scroll-visible {
  scrollbar-width: thin;
  scrollbar-color: color-mix(in oklab, var(--muted-foreground) 45%, transparent) transparent;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: color-mix(in oklab, var(--muted-foreground) 45%, transparent);
    border-radius: 9999px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
}

@utility scroll-on-hover {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* Firefox: hide thumb + track until hover */
  &:hover {
    scrollbar-color: oklch(0.65 0.02 265 / 0.5) transparent;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* invisible by default */
    border-radius: 9999px;
    /* Same 2px inset as the global bar (see the *::-webkit-scrollbar-thumb
       block) so the hover-revealed thumb sits in the same gutter. */
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: oklch(0.65 0.02 265 / 0.45);
  }
}

/* Lobby tower sky: clouds drift slowly left→right across the viewport, looping
   off-screen on both sides (see components/lobby/SkyBackdrop.tsx). */
@keyframes lobby-cloud {
  from {
    transform: translate3d(-40vw, 0, 0) scale(var(--cloud-scale, 1));
  }
  to {
    transform: translate3d(135vw, 0, 0) scale(var(--cloud-scale, 1));
  }
}

/* Weather overlays for the lobby sky (rain streaks, snow drift, lightning flash)
   — driven by the current weather code (see components/lobby/SkyBackdrop.tsx). */
@keyframes lobby-rain {
  to {
    background-position: -6px 20px;
  }
}
@keyframes lobby-snow {
  to {
    background-position:
      10px 120px,
      -20px 120px,
      6px 120px,
      -14px 120px;
  }
}
@keyframes lobby-flash {
  0%,
  92%,
  100% {
    opacity: 0;
  }
  93%,
  96% {
    opacity: 0.9;
  }
  94% {
    opacity: 0.2;
  }
}

/* Lobby birds: a loose flock glides left→right across the sky, bobbing gently as
   it crosses, while each bird's wings flap on a faster, independent cycle (see
   components/lobby/SkyBackdrop.tsx). \`--bird-scale\` is preserved through the
   drift transform so per-bird sizing isn't clobbered, exactly like lobby-cloud. */
@keyframes lobby-bird-fly {
  0% {
    transform: translate3d(-12vw, 0, 0) scale(var(--bird-scale, 1));
  }
  25% {
    transform: translate3d(20vw, -16px, 0) scale(var(--bird-scale, 1));
  }
  50% {
    transform: translate3d(52vw, 6px, 0) scale(var(--bird-scale, 1));
  }
  75% {
    transform: translate3d(84vw, -10px, 0) scale(var(--bird-scale, 1));
  }
  100% {
    transform: translate3d(116vw, 4px, 0) scale(var(--bird-scale, 1));
  }
}
/* Each wing pivots about the body: a quick power down-stroke, an up recovery,
   then a brief glide hold at the top before the next beat. Left/right mirror. */
@keyframes lobby-wing-l {
  0% {
    transform: rotate(-30deg);
  }
  28% {
    transform: rotate(24deg);
  }
  56% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(-30deg);
  }
}
@keyframes lobby-wing-r {
  0% {
    transform: rotate(30deg);
  }
  28% {
    transform: rotate(-24deg);
  }
  56% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(30deg);
  }
}

/* Speaking wave in the 3D nameplate (office3d/live/NameplateLayer.tsx): three
   mini equalizer bars that bounce while the person talks — readable even when
   the avatar is seated and the green floor ring is hidden by the chair. Each
   bar staggers via animation-delay set inline. */
@keyframes speak-bar {
  0%,
  100% {
    transform: scaleY(0.35);
  }
  50% {
    transform: scaleY(1);
  }
}
.speak-bar {
  transform-origin: 50% 100%;
  animation: speak-bar 0.9s ease-in-out infinite;
}

/* "Jump to message" from the AI chat files panel (features/ai/lib/jumpToMessage.ts): the message
   it scrolled to is washed with the primary token and fades out. */
@keyframes ai-jump-flash {
  0%,
  35% {
    background-color: color-mix(in oklab, var(--primary) 16%, transparent);
  }
  100% {
    background-color: transparent;
  }
}
[data-message-id][data-jump-flash] {
  border-radius: 0.75rem;
  /* Reduced motion: a still tint for the same duration, no fade. */
  background-color: color-mix(in oklab, var(--primary) 16%, transparent);
}
@media (prefers-reduced-motion: no-preference) {
  [data-message-id][data-jump-flash] {
    background-color: transparent;
    animation: ai-jump-flash 1.8s ease-out;
  }
}

/* Recording indicator (features/session/meeting/RecordingChip.tsx): the red dot
   beats like a pulse rather than blinking — two quick swells and a rest, so it
   reads as "live" in peripheral vision without the strobe of a plain blink.
   Tailwind's \`animate-pulse\` is a symmetric opacity fade; this is deliberately
   asymmetric (scale + opacity, ~1.6 s cycle) for that heartbeat feel. */
@keyframes rec-heartbeat {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  14% {
    transform: scale(1.45);
    opacity: 0.85;
  }
  28% {
    transform: scale(1);
    opacity: 1;
  }
  42% {
    transform: scale(1.3);
    opacity: 0.9;
  }
  56%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.rec-heartbeat {
  animation: rec-heartbeat 1.6s ease-in-out infinite;
}
/* Reduced motion: a plain steady dot. The dot is the SIGNAL (a recording is
   running) — it must not disappear with the animation, only stop moving. */
@media (prefers-reduced-motion: reduce) {
  .rec-heartbeat {
    animation: none;
  }
}

/* Just-created project (features/tracker/center/ProjectPanes.tsx) or docs space
   (features/docs/page/SpacesHome.tsx, via the neutral \`.item-new-glow\` alias): the new card /
   row carries a brand ring and a soft brand glow that breathes until the project
   is opened. Theme tokens only (\`--brand\`); the ring lives IN the keyframes
   because an animated box-shadow would replace a \`ring-*\` utility. */
@keyframes project-new-glow {
  0%,
  100% {
    box-shadow:
      0 0 0 2px var(--brand),
      0 4px 16px color-mix(in oklab, var(--brand) 18%, transparent);
  }
  50% {
    box-shadow:
      0 0 0 2px var(--brand),
      0 6px 26px color-mix(in oklab, var(--brand) 42%, transparent);
  }
}
.project-new-glow,
.item-new-glow {
  box-shadow:
    0 0 0 2px var(--brand),
    0 6px 22px color-mix(in oklab, var(--brand) 30%, transparent);
  animation: project-new-glow 2.4s ease-in-out infinite;
}
/* Reduced motion: the static ring + glow stay (the signal), only the breathing stops. */
@media (prefers-reduced-motion: reduce) {
  .project-new-glow,
  .item-new-glow {
    animation: none;
  }
}

/* "Created from anywhere" confirmation (components/shared/feedback/createdFeedback.ts,
   \`useFlashHighlight\`): the row / card that was just created pulses a brand
   ring for ~2 s, then settles. Theme tokens only; the ring is inside the
   keyframes for the same reason as \`.project-new-glow\`. */
@keyframes flash-highlight {
  0% {
    box-shadow: 0 0 0 2px var(--brand);
    background-color: color-mix(in oklab, var(--brand) 22%, transparent);
  }
  100% {
    box-shadow: 0 0 0 2px transparent;
    background-color: transparent;
  }
}
.flash-highlight {
  animation: flash-highlight 2s ease-out 1;
}
/* Reduced motion: a steady tint (the signal) instead of the fade; the hook
   removes the class after the same 2 s. */
@media (prefers-reduced-motion: reduce) {
  .flash-highlight {
    animation: none;
    box-shadow: 0 0 0 2px var(--brand);
    background-color: color-mix(in oklab, var(--brand) 14%, transparent);
  }
}

/* ── Branded loaders ──────────────────────────────────────────────────────────
   components/shared/feedback/BrandLoader.tsx (A · the tracing tile) and
   DeskGridLoader.tsx (B · the desk grid). Colours are theme tokens only.

   ANTI-FLASH (both): \`.loader-fade-in\` holds the loader at opacity 0 AND
   \`visibility: hidden\` (so assistive tech skips it too) for \`--loader-delay\`
   (the \`delayMs\` prop, default 200ms), then fades it in. \`both\` fill mode is
   what applies the \`from\` frame during the delay. No timer and no React state,
   so a load that ends inside the delay unmounts a loader nobody saw. */
@keyframes loader-fade-in {
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
}
.loader-fade-in {
  animation: loader-fade-in 180ms ease-out both;
  animation-delay: var(--loader-delay, 200ms);
}

/* A · the dash running round the track. \`pathLength="100"\` on the <rect>
   normalises the perimeter, so a 25/75 dash is a quarter of the ring at every
   size and one full lap is an offset of -100. */
@keyframes loader-trace {
  to {
    stroke-dashoffset: -100;
  }
}
.loader-trace {
  stroke-dasharray: 25 75;
  animation: loader-trace 1.6s linear infinite;
}
@keyframes loader-breathe {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.94);
  }
}
.loader-breathe {
  animation: loader-breathe 2.4s ease-in-out infinite;
}

/* B · the desk grid. Each cell lights once per 1.8s cycle, offset by its
   sweep step (\`--cell-step\`, 0–8, set inline) × 0.2s — clockwise round the
   ring, centre last. */
@keyframes loader-cell {
  0%,
  28%,
  100% {
    background-color: var(--brand-subtle);
  }
  9% {
    background-color: var(--brand);
  }
}
.desk-loader-cell {
  border-radius: 4px;
  background-color: var(--brand-subtle);
  animation: loader-cell 1.8s ease-in-out infinite;
  animation-delay: calc(var(--cell-step, 0) * 0.2s);
}
/* A SHAPED theme (Hivez: \`--avatar-shape: hexagon\`) draws hexagonal cells.
   Keyed on the inherited token through a style query — the same mechanism as
   the \`dark:\` variant and the avatar rules above — so it follows the NEAREST
   theme scope (a ThemeScope preview), not whatever sits on <html>. */
@container style(--avatar-shape: hexagon) {
  .desk-loader-cell {
    border-radius: 0;
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%);
  }
}
/* Engines without style queries (theme.tsx stamps \`data-no-style-queries\`):
   the plain-selector fallback, as for \`dark:\`.
   FIX(loader-hivez-fallback): \`lib/ui/theme.tsx\` puts the APP-WIDE theme's
   \`data-theme\` on \`<html>\` itself, not on a nested wrapper — so a plain
   descendant selector (\`:root[…] [data-theme='hivez']\`) can only ever match a
   ThemeScope PREVIEW nested under a non-Hivez root; it never matches the app
   actually running Hivez, because that is one element carrying both
   attributes, not two. \`:is()\` below covers both shapes: the root itself
   (first branch) and a nested scope (second branch, unchanged). */
:is(
    :root[data-no-style-queries]:is([data-theme='hivez'], [data-theme='funkyglass']),
    :root[data-no-style-queries] :is([data-theme='hivez'], [data-theme='funkyglass'])
  )
  .desk-loader-cell {
  border-radius: 0;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%);
}
/* Nearest-scope counter-rule: the style-query path gets "nearest scope wins"
   for free (a container query re-evaluates per scope); this plain-selector
   fallback does not, so a Hivez ROOT would otherwise hexagon every cell below
   it, including one inside a NESTED scope that overrides the theme back to
   something else (e.g. a \`remotedesk\` ThemeScope preview inside a Hivez page).
   This resets those. Higher specificity than the rule above by construction
   (an extra \`[data-theme]:not(...)\` term), so it wins regardless of source
   order — it does not depend on appearing after it in the file. */
:root[data-no-style-queries] [data-theme]:not([data-theme='hivez'], [data-theme='funkyglass']) .desk-loader-cell {
  border-radius: 4px;
  clip-path: none;
}

/* FIX(scene-loader-unmount): pause the loop the instant a loader's wrapper is
   marked \`aria-hidden="true"\` — office3d/Scene's SceneLoader sets that at the
   same moment it starts fading the card out, and a hidden office
   (PersistentOffice's desktop keep-alive sets \`display:none\` mid-fade) then
   never reaches the JS unmount below until a fallback timer fires, so without
   this the nine cells (and BrandLoader's ring) kept animating — and the GPU
   kept compositing them — for the whole window between "gone to assistive
   tech" and "actually removed". Scoped to the loader internals so it never
   touches an unrelated aria-hidden decorative element. */
[aria-hidden='true'] .desk-loader-cell,
[aria-hidden='true'] .loader-trace,
[aria-hidden='true'] .loader-breathe {
  animation-play-state: paused;
}

/* Reduced motion: nothing loops, but the SIGNAL stays. A: a still tile inside
   a fully tinted ring (the dash becomes the whole ring). B: a still grid — the
   first ⌈progress/11⌉ cells (sweep order, \`data-lit\`) filled when determinate,
   the track tint otherwise. The fade-in stays: it is an opacity change, not
   motion, and it is what implements the anti-flash delay. */
@media (prefers-reduced-motion: reduce) {
  .loader-trace {
    animation: none;
    stroke-dasharray: none;
    opacity: 0.6;
  }
  .loader-breathe {
    animation: none;
  }
  .desk-loader-cell {
    animation: none;
  }
  .desk-loader-cell[data-lit] {
    background-color: var(--brand);
  }
}

/* ── Stat tile icon chips ─────────────────────────────────────────────────────
   features/lobby/components/panels/StatTiles.tsx. Everywhere the chip is the
   tone-tinted rounded square its utility classes draw; under a SHAPED theme
   (Hivez: \`--avatar-shape: hexagon\`) it becomes a NEUTRAL rounded pointy-top
   hexagon — the Hivez lobby design's grey chip with a 1px edge, the icon in
   the foreground colour rather than the tone. The chip's own fill goes
   transparent and the \`.stat-icon-hex\` SVG behind the icon shows.

   The hexagon is absolutely positioned over the square chip's box: full width
   and 115% of its height (a regular pointy-top hexagon is √3/2 as wide as it
   is tall, so 40px wide → 46px tall), centred, so it overhangs the chip by
   ~3px top and bottom without moving anything in the tile. Same geometry at
   the phone (32px) and desktop (40px) chip — it is all percentages. Tokens
   only; the edge is the foreground at low alpha because every Hivez border
   token is gold-tinted and the design's edge is neutral. */
.stat-icon-hex {
  display: none;
  position: absolute;
  top: -7.5%;
  left: 0;
  width: 100%;
  height: 115%;
  overflow: visible;
  fill: var(--muted);
  stroke: color-mix(in oklab, var(--foreground) 22%, transparent);
  stroke-width: 1px;
}
/* The icon paints OVER the positioned hexagon (a positioned element would
   otherwise stack above an in-flow sibling regardless of DOM order). */
.stat-icon-chip > :not(.stat-icon-hex) {
  position: relative;
}
/* Keyed on the inherited token through a style query — the same mechanism as
   the loader's hex cells above — so it follows the NEAREST theme scope. */
@container style(--avatar-shape: hexagon) {
  .stat-icon-chip {
    background-color: transparent;
    color: var(--foreground);
  }
  .stat-icon-hex {
    display: block;
  }
}
/* Engines without style queries: the plain-selector fallback, root or nested
   scope — see FIX(loader-hivez-fallback) above for why it is an \`:is()\`. */
:is(
    :root[data-no-style-queries]:is([data-theme='hivez'], [data-theme='funkyglass']),
    :root[data-no-style-queries] :is([data-theme='hivez'], [data-theme='funkyglass'])
  )
  .stat-icon-chip {
  background-color: transparent;
  color: var(--foreground);
}
:is(
    :root[data-no-style-queries]:is([data-theme='hivez'], [data-theme='funkyglass']),
    :root[data-no-style-queries] :is([data-theme='hivez'], [data-theme='funkyglass'])
  )
  .stat-icon-hex {
  display: block;
}
/* Nearest-scope counter-rule (as for \`.desk-loader-cell\`): a non-Hivez scope
   nested under a Hivez root gets its square back. \`revert-layer\` hands the
   fill and colour back to the chip's tone utilities (these rules are
   unlayered, the utilities are not). Wins on specificity, not source order. */
:root[data-no-style-queries] [data-theme]:not([data-theme='hivez'], [data-theme='funkyglass']) .stat-icon-chip {
  background-color: revert-layer;
  color: revert-layer;
}
:root[data-no-style-queries] [data-theme]:not([data-theme='hivez'], [data-theme='funkyglass']) .stat-icon-hex {
  display: none;
}

/* Hive lobby hexagon (features/lobby/hive). The Hivez lobby layout renders only
   in every theme (one shell), so a hard hexagon is allowed here: icon chips,
   the floor-number chip, numbered briefing badges and team badges. A regular
   pointy-top hexagon — pair it with a square box and a centred glyph. */
.hive-hex {
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
}

/* The docs editor's REST → live remount (features/docs/window/DocumentSurface):
   the live editor settles in over the REST one's last frame instead of
   snapping, so the swap reads as intended. Short, and opacity only. */
@keyframes loader-settle {
  from {
    opacity: 0.55;
  }
  to {
    opacity: 1;
  }
}
/* No fill mode on purpose: once it ends the editor carries no animation at
   all, so no lingering stacking context under its menus and popovers. */
.loader-settle {
  animation: loader-settle 240ms ease-out;
}
@media (prefers-reduced-motion: reduce) {
  .loader-settle {
    animation: none;
  }
}

/* Meeting reactions — RISING PARTICLES (features/session/reactions/
   reactionEmitter.ts, flight maths in reactionStream.ts, numbers in
   reactionMotion.ts).

   FIX(rising-reactions-1): the grow-and-burst model is gone.
     Before: \`.reaction-stack-core\` scaled per repeat, \`.reaction-burst-*\` popped
       and flung shards, and \`.reaction-rise-card/-floor/-plate\` carried the
       per-surface travel — holding an emoji made it giant.
     After: every hit is one \`.rx-float\` whose WHOLE flight (pop, sway, tilt,
       fade) is Web Animations keyframes built in JS from a seed, so CSS owns
       only the resting look: the particle, the sound ring, the counter chip
       and the sound-name pill. \`reaction-inline-pop\` stays, because a list row
       genuinely has no flight. */

/* One particle. Positioned by \`left/top\` (the layer is its containing block);
   the animation's \`translate(-50%,-100%)\` puts its bottom centre on that point. */
.rx-float {
  position: absolute;
  pointer-events: none;
  line-height: 1;
  white-space: nowrap;
  will-change: transform, opacity;
  opacity: 0; /* the animation owns it; this is the pre-first-frame state */
  filter: drop-shadow(0 1px 2px color-mix(in oklab, var(--foreground) 30%, transparent));
}

/* A sound reaction's particle: two soft brand-coloured rings pulse out of it. */
.rx-float-hero::after {
  content: '';
  position: absolute;
  inset: -0.25em;
  border-radius: 9999px;
  border: 2px solid var(--brand);
  opacity: 0;
  animation: rx-hero-ring 900ms ease-out 2;
}
@keyframes rx-hero-ring {
  0% {
    transform: scale(0.6);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

/* "🔊 Drumroll · Nadia" under a sound particle's start point. Opaque, per the
   floating-surface rule. */
.rx-sound-label {
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, 6px);
  max-width: 14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1px 8px;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: var(--popover);
  color: var(--popover-foreground);
  font-size: 11px;
  font-weight: 500;
  line-height: 1.5;
}

/* A lane at the stage's right edge right-aligns the pill to the lane. */
.rx-sound-label-right {
  transform: translate(-100%, 6px);
}

/* The ×N counter chip: face, first name, glyph, count. Opaque. Hidden until
   \`.on\`; \`.bump\` re-pops it on every increment (the individual \`scale\`
   property, so it never fights the positioning transform). */
.rx-combo {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  pointer-events: none;
  white-space: nowrap;
  transform: translate(-50%, -100%);
  padding: 2px 8px 2px 3px;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: var(--popover);
  color: var(--popover-foreground);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  opacity: 0;
  transition: opacity 200ms ease-out;
}
.rx-combo-right {
  transform: translate(-100%, -100%);
}
.rx-combo.on {
  opacity: 1;
}
.rx-combo.bump {
  animation: rx-combo-bump 220ms ease-out;
}
@keyframes rx-combo-bump {
  0% {
    scale: 1;
  }
  40% {
    scale: 1.22;
  }
  100% {
    scale: 1;
  }
}
.rx-combo-face {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  object-fit: cover;
  background: var(--muted);
  color: var(--muted-foreground);
  font-size: 9px;
  font-weight: 600;
}
.rx-combo-name {
  max-width: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rx-combo-arrow:empty {
  display: none;
}
.rx-combo-count {
  font-variant-numeric: tabular-nums;
}

/* The static tile badge (TileReactionBadge): the newest glyph at a FIXED size
   and a ring flash on the tile. Both pop in through a transition from
   \`@starting-style\` (no keyframes, so nothing here can grow or burst); the
   element is removed 1.4 s after the person's last hit. */
.rx-badge {
  opacity: 1;
  scale: 1;
  transition:
    opacity 160ms ease-out,
    scale 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.rx-badge-ring {
  opacity: 1;
  transition: opacity 200ms ease-out;
}
@starting-style {
  .rx-badge {
    opacity: 0;
    scale: 0.4;
  }
  .rx-badge-ring {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .rx-badge {
    transition: opacity 160ms linear;
  }
}

/* The picker's hold-progress ring (usePressStream writes \`--hold\`, 0..1, and
   \`data-on\`). A brand-coloured conic sweep masked down to a 2px ring; hidden
   while nothing is being held. */
.rx-hold-ring {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background: conic-gradient(var(--brand) calc(var(--hold, 0) * 360deg), transparent 0);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), black 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), black 0);
}
.rx-hold-ring[data-on='true'] {
  opacity: 1;
}

/* The list rows and the notch's avatar pile: a pop beside the name and out
   again. No flight — at 14 px there is nowhere to fly to, and a row that grows
   a travelling emoji would reflow the list it sits in. */
@keyframes reaction-inline-pop {
  0% {
    transform: scale(0.4);
    opacity: 0;
  }
  15% {
    transform: scale(1.15);
    opacity: 1;
  }
  25% {
    transform: scale(1);
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}
.reaction-inline-pop {
  animation: reaction-inline-pop 1.5s ease-out both;
}

/* Reduced motion: a PLAIN FADE (the owner's rule). The rising particle itself
   is swapped for a fade-in-place in JS (\`reducedKeyframes\`); here the inline
   pop becomes a fade, the counter bump stops and the sound ring is not drawn. */
@keyframes reaction-fade-out {
  0%,
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .reaction-inline-pop {
    animation: reaction-fade-out 1.5s ease-out both;
  }
  .rx-combo.bump {
    animation: none;
  }
  .rx-float-hero::after {
    display: none;
  }
}

/* The Excalidraw Library trigger is now SHOWN (static component library);
   its mutation controls are hidden in features/whiteboard/whiteboardLibrary.css. */

/* Shrunken board (rail tile / compact thumbnail): a static, chrome-free preview.
   Hide ALL Excalidraw UI (toolbar, menu, zoom/undo footer) so it never covers the
   drawing, and make the canvas non-interactive so the tile reads as a thumbnail
   (the Whiteboard also forces view-mode + fit-to-content at this size). The pin
   button overlays from VideoOverlay, outside .wb-canvas, so it still works. */
.wb-canvas.wb-shrunk {
  pointer-events: none;
}
.wb-canvas.wb-shrunk .layer-ui__wrapper {
  display: none !important;
}

/* --- Daily report export (Attendance → Daily report → Export) --------------
   PNG snapshot: while the body attribute is set (DailyLogDialog's Export
   handler, around the html-to-image capture) the scroll pane unlocks to its
   full height and the chrome that shouldn't appear in the image (the Export
   button itself) hides, so the capture contains the WHOLE report. */
body[data-export-daily-report] .daily-report-scroll {
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
}
/* The right column is absolutely positioned (clamped to the left rail's height)
   in the live dialog — re-static it during export so the capture grows to the
   full report height instead of clipping at the rail. */
body[data-export-daily-report] .daily-report-body {
  position: static !important;
}
body[data-export-daily-report] .no-print {
  display: none !important;
}

/* --- Sonner: collapsed back-card bleed-through (AL-3) ----------------------
   FIX(AL-3): hide a COLLAPSED back-card's content for the JSX toasts this app
   raises. Before: a tall status card sitting behind a short pill was squashed to
   the front card's height with its content still painted, so the two overlapped
   into an unreadable smear. After: the same opacity rule sonner applies to its
   own cards.

   The bug is a gap between two rules in sonner/dist/styles.css:

     :293  [data-expanded='false'][data-front='false']                  → height clamp
     :311  [data-expanded='false'][data-front='false'][data-styled='true'] > * → opacity 0

   The HEIGHT clamp is ungated, but the rule that hides the clamped content is
   gated on \`data-styled='true'\`. Sonner sets \`data-styled\` to
   \`!Boolean(toast.jsx)\` (index.mjs:650), and EVERY card here goes through
   \`toast.custom()\` — so our toasts always get the clamp and never the hide.

   This selector is the complement (\`data-styled='false'\`), so it is disjoint
   from sonner's own rule rather than competing with it — no specificity or
   source-order fight, and sonner's \`> * { transition: opacity 400ms }\` (:298)
   still supplies the fade. Height variance is real and unavoidable here: a
   tier-1 pill is a fixed 40px while a tier-2 status card with a body, an action
   row and a depleting bar is several times that. */
[data-sonner-toast][data-styled='false'][data-expanded='false'][data-front='false'] > * {
  opacity: 0;
}

/* --- Sonner: the SYSTEM lane centres on the content region (feed-lanes) -------
   FIX(feed-lanes): the system toaster (\`components/ui/sonner.tsx\`, class
   \`toaster-system\`) sits at top-centre. Before: sonner's own
   \`[data-x-position='center'] { left: 50% }\` centres it on the VIEWPORT, which
   an open Messages dock or the app rail shifts off the middle of what the user
   is looking at — the same bug MeetingMenuBar fixed for the meeting pill. After:
   it centres on \`--content-center\` (shell/contentRegion.ts), falling back to
   \`50vw\` outside the shell. Sonner's \`translateX(-50%)\` is kept.

   Wide screens only (the exact complement of sonner's own \`max-width: 600px\`
   query, so no width falls between the two): at <= 600px sonner switches to
   its own full-width mobile layout (\`left\`/\`right\` from \`--mobile-offset-*\`,
   \`transform: none\`), and a
   higher-specificity \`left\` here would break it. The extra class makes this win
   over sonner's rule at :68 without \`!important\`. */
@media not all and (max-width: 600px) {
  .toaster-system[data-sonner-toaster][data-x-position='center'] {
    left: var(--content-center, 50vw);
  }
}

/* NATIVE APP FRAME (mobile/e2e/specs/run-1-web.md). \`data-native-frame\` is set on
   <html> by index.html / main.tsx when \`__RD_NATIVE__.frame\` is true; nothing
   below applies anywhere else.
   FIX(mobile-r1-web-7): the page body is the theme background, never white.
   FIX(mobile-r1-web-4): the native top bar already shows the destination title,
   so a page's own h1 (\`.frame-title\`) is hidden — its subtitle and action buttons
   stay in the remaining header row. One mechanism for every destination. */
html[data-native-frame] {
  background-color: var(--background);
}
html[data-native-frame] .frame-title {
  display: none;
}
/* FIX(mobile-r2-dup-title): a modal's own close button (native top bar has one). */
html[data-native-frame] .frame-close {
  display: none;
}
`}));function h(e){return e.replace(/\/\*[\s\S]*?\*\//g,``)}function g(e){let t=h(e),n=new Map,r=/(--[A-Za-z0-9_-]+)\s*:/g;for(let e=r.exec(t);e;e=r.exec(t)){let i=0,a=``,o=r.lastIndex,s=o;for(;o<t.length;o++){let e=t[o];if(a)e===a&&(a=``);else if(e===`"`||e===`'`)a=e;else if(e===`(`)i++;else if(e===`)`){if(i===0)break;i--}else if(e===`;`&&i===0||e===`}`&&i===0)break}let c=t.slice(s,o).replace(/\s+/g,` `).trim();n.has(e[1])||n.set(e[1],c),r.lastIndex=o}return n}function _(e,t){let n=T[`../../themes/${e}/${t}.css`];return n?g(n):new Map}function v(e,t){let n=e.get(t)??``;for(let t=0;t<8;t++){let t=D.exec(n);if(!t)break;n=e.get(t[1])??t[2]??``}return n}function y(e){return O.test(e.trim())}function b(){let e=new Map;for(let[t,n]of E){if(!t.startsWith(`--color-`))continue;let r=D.exec(n);r&&!e.has(r[1])&&e.set(r[1],t.slice(8))}return e}function x(e,t){let n=_(e,t),r=b(),i={title:`Other colours`,match:/./},a=new Map;for(let[e,t]of n){let o=v(n,e);if(!y(o))continue;let s=k.find(t=>t.match.test(e))??i,c=a.get(s)??[];c.push({name:e,value:o,declared:t,stem:r.get(e)}),a.set(s,c)}return[...k,i].filter(e=>a.has(e)).map(e=>({group:e,tokens:a.get(e)??[]}))}function S(){let e=[];for(let[t,n]of E){let r=/^--text-([a-z0-9-]+)$/.exec(t);!r||r[1].includes(`--`)||!/^\d/.test(n)||e.push({name:r[1],size:n,lineHeight:E.get(`${t}--line-height`),letterSpacing:E.get(`${t}--letter-spacing`),weight:E.get(`${t}--font-weight`)})}return e.sort((e,t)=>parseFloat(e.size)-parseFloat(t.size))}function C(e){return[...E].filter(([t])=>t.startsWith(e)).map(([e,t])=>({name:e,value:t}))}function w(e,t,n){return[..._(e,t)].filter(([e])=>e.startsWith(n)).map(([e,t])=>({name:e,value:t}))}var T,E,D,O,k,A=e((()=>{n(),i(),o(),c(),u(),f(),m(),T=Object.assign({"../../themes/funkyglass/dark.css":t,"../../themes/funkyglass/light.css":r,"../../themes/hivez/dark.css":a,"../../themes/hivez/light.css":s,"../../themes/remotedesk/dark.css":l,"../../themes/remotedesk/light.css":d}),E=g(p),D=/^var\(\s*(--[A-Za-z0-9_-]+)\s*(?:,\s*(.+))?\)$/,O=/^(oklch|oklab|rgb|rgba|hsl|hsla|lab|lch|color-mix|color)\(|^#[0-9a-f]{3,8}$|^transparent$/i,k=[{title:`Core roles`,note:`The shadcn base: page, card, popover, primary, secondary, muted, accent, destructive, the default edge and the focus ring.`,match:/^--(background|foreground|card|card-foreground|popover|popover-foreground|primary|primary-foreground|secondary|secondary-foreground|muted|muted-foreground|accent|accent-foreground|destructive|destructive-foreground|border|input|ring)$/},{title:`Brand`,note:`The accent family. Hivez is gold by night and deep honey by day.`,match:/^--brand/},{title:`Text and icons`,match:/^--(label-|text-|icon)/},{title:`Borders`,match:/^--border-/},{title:`Surfaces`,note:`Tiles, wells, chips and tables. In Funky Glass a plated page turns the role tokens into faint tints.`,match:/^--(surface-|scrim|segmented-|table-head|ledger-|shell-|plate-|page-plate)/},{title:`Rail`,match:/^--rail/},{title:`Status`,match:/^--(success|info|warning|danger|destructive-tint|presence)/},{title:`Chart series`,match:/^--chart-/},{title:`Document and file kinds`,note:`Identity data (a hue per kind of file), not chrome.`,match:/^--(kind-|fc-|doc-|video-frame)/},{title:`Drive`,match:/^--drive-/},{title:`Glass`,match:/^--(glass-|theme-bg-hex)/}]}));export{_ as a,w as i,C as n,S as o,A as r,x as t};