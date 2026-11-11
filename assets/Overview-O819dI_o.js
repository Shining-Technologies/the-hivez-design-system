import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{a as n,h as r,o as i,v as a}from"./blocks-Cw4NQZL0.js";var o=e((()=>{r()}));function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Overview`}),`
`,(0,l.jsx)(t.h1,{id:`the-hivez-design-system`,children:`The Hivez design system`}),`
`,(0,l.jsxs)(t.p,{children:[`This Storybook renders the `,(0,l.jsx)(t.strong,{children:`real components`}),` from the Hivez client (`,(0,l.jsx)(t.code,{children:`client/src`}),`), not copies. Every story imports the
component the app imports, wears the app's own CSS, and runs with no server. Use the `,(0,l.jsx)(t.strong,{children:`Theme`}),` and `,(0,l.jsx)(t.strong,{children:`Scheme`}),` switches in the
toolbar to see the same component in Remote Desk, Hivez (the default) and Funky Glass, in light and dark.`]}),`
`,(0,l.jsx)(t.h2,{id:`the-rules`,children:`The rules`}),`
`,(0,l.jsx)(t.h3,{id:`one-button-system`,children:`One button system`}),`
`,(0,l.jsxs)(t.p,{children:[`Buttons are `,(0,l.jsx)(t.code,{children:`<Button variant size>`}),`: five variants (`,(0,l.jsx)(t.code,{children:`primary`}),`, `,(0,l.jsx)(t.code,{children:`secondary`}),`, `,(0,l.jsx)(t.code,{children:`ghost`}),`, `,(0,l.jsx)(t.code,{children:`destructive`}),`, `,(0,l.jsx)(t.code,{children:`link`}),`), three sizes
(`,(0,l.jsx)(t.code,{children:`sm`}),` 28, `,(0,l.jsx)(t.code,{children:`md`}),` 36, `,(0,l.jsx)(t.code,{children:`lg`}),` 40) and three icon-only sizes, one 12px radius, no pills. At most one `,(0,l.jsx)(t.code,{children:`primary`}),` per surface. There are no
hand-rolled filled or outlined buttons and no module-local button classes. See `,(0,l.jsx)(t.strong,{children:`Buttons`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`one-field-system`,children:`One field system`}),`
`,(0,l.jsxs)(t.p,{children:[`Fields are `,(0,l.jsx)(t.code,{children:`FormField`}),`, `,(0,l.jsx)(t.code,{children:`Input`}),`, `,(0,l.jsx)(t.code,{children:`Textarea`}),`, the shared `,(0,l.jsx)(t.code,{children:`Select`}),`, the pickers and `,(0,l.jsx)(t.code,{children:`NativeSelect`}),`: one box (`,(0,l.jsx)(t.code,{children:`border-default`}),` on
`,(0,l.jsx)(t.code,{children:`bg-card`}),`, 12px radius, a brand border and a thin ring on focus, `,(0,l.jsx)(t.code,{children:`aria-invalid`}),` for errors), the same three heights as Button, one
label, hint, counter and error style. Dialog forms use `,(0,l.jsx)(t.code,{children:`lg`}),`, pages use `,(0,l.jsx)(t.code,{children:`md`}),`. See `,(0,l.jsx)(t.strong,{children:`Fields`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`theme-tokens-only`,children:`Theme tokens only`}),`
`,(0,l.jsxs)(t.p,{children:[`A component never writes a raw colour (`,(0,l.jsx)(t.code,{children:`oklch(…)`}),`, `,(0,l.jsx)(t.code,{children:`#rrggbb`}),`, `,(0,l.jsx)(t.code,{children:`bg-slate-800`}),`). It uses a token utility (`,(0,l.jsx)(t.code,{children:`bg-card`}),`, `,(0,l.jsx)(t.code,{children:`text-brand`}),`,
`,(0,l.jsx)(t.code,{children:`border-hairline`}),`, `,(0,l.jsx)(t.code,{children:`shadow-panel`}),`), so a theme can change it. A theme is one palette with two required modes
(`,(0,l.jsx)(t.code,{children:`src/themes/<id>/{light,dark}.css`}),`, identical token names); the `,(0,l.jsx)(t.strong,{children:`mode`}),` (light or dark) is a separate preference from the
`,(0,l.jsx)(t.strong,{children:`theme`}),`. Both are set as `,(0,l.jsx)(t.code,{children:`data-theme`}),` and `,(0,l.jsx)(t.code,{children:`data-scheme`}),` on any element, and the `,(0,l.jsx)(t.code,{children:`dark:`}),` variant follows the nearest scope. See
`,(0,l.jsx)(t.strong,{children:`Foundations`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`themes-never-change-placement`,children:`Themes never change placement`}),`
`,(0,l.jsxs)(t.p,{children:[`A theme changes values (colours, radii, shadows, glass, typeface, avatar shape), never where things are: a component does not
branch on the theme id to move itself. The structural exception is the shell layout, read through one hook, never by comparing ids.
Funky Glass makes the same layout see-through (`,(0,l.jsx)(t.code,{children:`glass-float`}),`, `,(0,l.jsx)(t.code,{children:`glass-bar`}),`, `,(0,l.jsx)(t.code,{children:`glass-thin`}),`, the page plate) and every one of those
utilities is inert in the other two themes.`]}),`
`,(0,l.jsx)(t.h3,{id:`floating-panels-solid-by-default-glass-in-a-glass-theme`,children:`Floating panels: solid by default, glass in a glass theme`}),`
`,(0,l.jsxs)(t.p,{children:[`Dialogs, menus, popovers and toasts keep an opaque fill and carry `,(0,l.jsx)(t.code,{children:`glass-float`}),`, which swaps it for thick glass only in a glass
theme while the theme backdrop is mounted. See `,(0,l.jsx)(t.strong,{children:`Overlays`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`components-that-are-not-here`,children:`Components that are not here`}),`
`,(0,l.jsxs)(t.p,{children:[`The staff `,(0,l.jsx)(t.strong,{children:`admin`}),` app (`,(0,l.jsx)(t.code,{children:`admin/`}),`) has its own conventions and is out of scope. So is anything that needs the live app (auth,
the realtime session, the tracker's data layer, the 3D office): a component that cannot render without that state has no story.`]}),`
`,(0,l.jsx)(t.h2,{id:`what-is-in-here`,children:`What is in here`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Foundations`}),`: colour tokens read from the theme CSS, type ramp, radii, shadows, spacing, z-index bands, icons, motion.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Buttons`}),`: every variant and size, hover, focus, disabled and loading states, icon buttons, the primary and link forms.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Fields`}),`: Input, Textarea, Select, NativeSelect, date and time pickers, `,(0,l.jsx)(t.code,{children:`EntityPicker`}),`, `,(0,l.jsx)(t.code,{children:`FormField`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Collection controls`}),`: `,(0,l.jsx)(t.code,{children:`QuickField`}),` filter chips, `,(0,l.jsx)(t.code,{children:`SortMenu`}),`, the filter divider, `,(0,l.jsx)(t.code,{children:`LayoutToggle`}),`, `,(0,l.jsx)(t.code,{children:`Badge`}),`, `,(0,l.jsx)(t.code,{children:`Tip`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Overlays`}),`: Dialog, `,(0,l.jsx)(t.code,{children:`FormDialog`}),`, `,(0,l.jsx)(t.code,{children:`ConfirmDialog`}),`, dropdown and context menus, popover, toasts.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Layout`}),`: the module page frame, tiles and cards, `,(0,l.jsx)(t.code,{children:`EmptyState`}),`.`]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`where-the-rules-live`,children:`Where the rules live`}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:`docs/architecture/BUTTON_SYSTEM.md`}),`, `,(0,l.jsx)(t.code,{children:`docs/architecture/FIELD_SYSTEM.md`}),`, `,(0,l.jsx)(t.code,{children:`client/src/themes/README.md`}),` and `,(0,l.jsx)(t.code,{children:`client/CLAUDE.md`}),`
in the main repository.`]})]})}function c(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(),o(),i()}))();export{c as default};