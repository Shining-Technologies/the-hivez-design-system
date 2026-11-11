import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{Bn as n,E as r,Et as i,Hn as a,K as o,Kn as s,Kt as c,M as l,Mn as u,Ot as d,P as f,Pn as p,Pt as m,Qn as h,R as g,Rt as _,Sn as v,Xn as y,b,bn as x,c as S,er as C,et as w,f as T,fr as E,g as D,gr as O,in as k,mt as A,n as j,nn as M,o as N,t as P,u as ee,ut as F,v as I,vn as L,vr as R,wn as z,wt as B}from"./lucide-react-D87-wf3f.js";import{a as V,i as H,n as U,o as W,r as G,t as K}from"./layout-jgw1TP6Q.js";import{n as q,t as J}from"./moduleIcons-DzmbUA_p.js";var Y,X,Z,Q,$;e((()=>{P(),q(),W(),Y=t(),X={title:`Foundations/Icons`,parameters:{stage:`padded`}},Z=[[`Plus`,o],[`X`,j],[`Check`,h],[`Search`,g],[`Pencil`,w],[`Trash2`,I],[`Copy`,u],[`Share2`,l],[`Download`,z],[`Upload`,T],[`Star`,b],[`Settings`,f],[`SlidersHorizontal`,r],[`MoreHorizontal`,v],[`ChevronDown`,y],[`ChevronRight`,s],[`ChevronsUpDown`,a],[`ArrowUp`,O],[`ArrowDown`,R],[`LayoutGrid`,m],[`List`,d],[`Folder`,M],[`File`,k],[`HardDrive`,c],[`Users`,S],[`UsersRound`,ee],[`Calendar`,C],[`Clock`,p],[`Bell`,E],[`MessageSquare`,A],[`Mic`,F],[`Video`,N],[`Eye`,L],[`EyeOff`,x],[`Lock`,B],[`Info`,_],[`AlertTriangle`,D],[`CircleCheck`,n],[`Loader2`,i]],Q={render:()=>(0,Y.jsxs)(V,{children:[(0,Y.jsx)(H,{title:`Sizes`,note:`size-3.5 (sm buttons, chips), size-4 (default), size-5 (lg buttons, icon-lg), size-6 (empty states).`,children:(0,Y.jsx)(G,{className:`items-end gap-6`,children:[`size-3.5`,`size-4`,`size-5`,`size-6`].map(e=>(0,Y.jsxs)(`div`,{className:`flex flex-col items-center gap-1.5`,children:[(0,Y.jsx)(b,{className:e,"aria-hidden":!0}),(0,Y.jsx)(K,{children:e})]},e))})}),(0,Y.jsx)(H,{title:`Inks`,note:`An icon is as muted as the text beside it; colour comes from a token class.`,children:(0,Y.jsxs)(G,{className:`gap-5`,children:[(0,Y.jsx)(_,{className:`size-5 text-foreground`,"aria-hidden":!0}),(0,Y.jsx)(_,{className:`size-5 text-muted-foreground`,"aria-hidden":!0}),(0,Y.jsx)(_,{className:`size-5 text-brand`,"aria-hidden":!0}),(0,Y.jsx)(n,{className:`size-5 text-success`,"aria-hidden":!0}),(0,Y.jsx)(D,{className:`size-5 text-warning`,"aria-hidden":!0}),(0,Y.jsx)(D,{className:`size-5 text-danger`,"aria-hidden":!0})]})}),(0,Y.jsx)(H,{title:`Lucide sample (${String(Z.length)})`,children:(0,Y.jsx)(`ul`,{className:`grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-2`,children:Z.map(([e,t])=>(0,Y.jsxs)(`li`,{className:`flex flex-col items-center gap-2 rounded-control border border-hairline bg-card px-2 py-3`,children:[(0,Y.jsx)(t,{className:`size-5 text-foreground`,"aria-hidden":!0}),(0,Y.jsx)(K,{children:e})]},e))})}),(0,Y.jsx)(H,{title:`Module icons`,note:`MODULE_ICON in components/shared/layout/moduleIcons.ts: the same glyph on the rail and in the module's sidebar header.`,children:(0,Y.jsx)(U,{children:(0,Y.jsx)(`ul`,{className:`flex flex-wrap gap-6`,children:Object.entries(J).map(([e,t])=>(0,Y.jsxs)(`li`,{className:`flex flex-col items-center gap-2`,children:[(0,Y.jsx)(t,{className:`size-6 text-foreground`,"aria-hidden":!0}),(0,Y.jsx)(K,{children:e})]},e))})})})]})},$=[`Glyphs`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Section title="Sizes" note="size-3.5 (sm buttons, chips), size-4 (default), size-5 (lg buttons, icon-lg), size-6 (empty states).">
        <Row className="items-end gap-6">
          {(['size-3.5', 'size-4', 'size-5', 'size-6'] as const).map(s => <div key={s} className="flex flex-col items-center gap-1.5">
              <Star className={s} aria-hidden />
              <Caption>{s}</Caption>
            </div>)}
        </Row>
      </Section>
      <Section title="Inks" note="An icon is as muted as the text beside it; colour comes from a token class.">
        <Row className="gap-5">
          <Info className="size-5 text-foreground" aria-hidden />
          <Info className="size-5 text-muted-foreground" aria-hidden />
          <Info className="size-5 text-brand" aria-hidden />
          <CircleCheck className="size-5 text-success" aria-hidden />
          <AlertTriangle className="size-5 text-warning" aria-hidden />
          <AlertTriangle className="size-5 text-danger" aria-hidden />
        </Row>
      </Section>
      <Section title={\`Lucide sample (\${String(SAMPLE.length)})\`}>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-2">
          {SAMPLE.map(([name, Icon]) => <li key={name} className="flex flex-col items-center gap-2 rounded-control border border-hairline bg-card px-2 py-3">
              <Icon className="size-5 text-foreground" aria-hidden />
              <Caption>{name}</Caption>
            </li>)}
        </ul>
      </Section>
      <Section title="Module icons" note="MODULE_ICON in components/shared/layout/moduleIcons.ts: the same glyph on the rail and in the module's sidebar header.">
        <Panel>
          <ul className="flex flex-wrap gap-6">
            {Object.entries(MODULE_ICON).map(([key, Icon]) => <li key={key} className="flex flex-col items-center gap-2">
                <Icon className="size-6 text-foreground" aria-hidden />
                <Caption>{key}</Caption>
              </li>)}
          </ul>
        </Panel>
      </Section>
    </Stack>
}`,...Q.parameters?.docs?.source},description:{story:"The icon set is `lucide-react`. Icons inherit the text colour (`currentColor`), take their size from\nthe control they sit in (a Button sizes its glyph: sm 14, md 16, lg 20) and are decorative\n(`aria-hidden`) unless they are the control's only content, when the control carries the\n`aria-label`. Module glyphs (the app rail, sidebar headers) come from one table, `MODULE_ICON`.",...Q.parameters?.docs?.description}}}}))();export{Q as Glyphs,$ as __namedExportsOrder,X as default};