import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-CnPKFcMr.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{At as i,ar as a,c as o,jt as s,or as c}from"./iframe-DVPkdZ19.js";import{Qn as l,Rt as u,b as d,t as f,wt as p}from"./lucide-react-D87-wf3f.js";import{f as m,p as ee}from"./dropdown-menu-DxaUHzmO.js";import{n as h,t as g}from"./dist-DaRjV8uw.js";import{n as _,t as v}from"./button-qAGlqC5C.js";import{a as y,i as b,o as x,r as S,t as C}from"./layout-jgw1TP6Q.js";import{a as w,c as T,d as E,f as D,i as O,l as k,n as A,o as j,s as M,t as N,u as P}from"./ModuleToolbar-BppXf5Wh.js";function F({className:e,variant:t,size:n,spinner:r=!1,asChild:o=!1,children:c,...l}){return(0,I.jsxs)(o?i:`span`,{"data-slot":`badge`,"data-variant":t,className:a(L({variant:t,size:n}),e),...l,children:[r&&(0,I.jsx)(`span`,{"aria-hidden":!0,className:`size-3 shrink-0 animate-spin rounded-full border-[1.5px] border-current border-t-transparent motion-reduce:animate-none`}),(0,I.jsx)(s,{children:c})]})}var I,L,te=e((()=>{n(),h(),o(),c(),I=r(),L=g(`inline-flex items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none transition-colors`,{variants:{variant:{default:`border-transparent bg-primary text-primary-foreground`,secondary:`border-transparent bg-secondary text-secondary-foreground`,destructive:`border-transparent bg-destructive text-danger-ink`,outline:`border-default text-foreground`,warning:`border-transparent bg-warning-tint text-warning`,success:`border-transparent bg-success-tint text-success`,brand:`border-transparent bg-brand-tint text-brand-tint-foreground dark:bg-brand/15`,danger:`border-transparent bg-destructive-tint text-destructive`},size:{default:`h-5.5 px-2 text-xs`,sm:`h-5 px-1.75 text-[11px]`}},defaultVariants:{variant:`default`,size:`default`}}),F.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},spinner:{required:!1,tsType:{name:`boolean`},description:`Leading busy ring — a badge that reports work in flight ("Saving…").
 Deliberately a bordered ring rather than a lucide spinner: at 12px a
 stroked glyph reads as noise, and this one inherits the badge's colour.`,defaultValue:{value:`false`,computed:!1}}}}}));function R({activeType:e=`all`}){let[t,n]=(0,V.useState)(e),[r,i]=(0,V.useState)(`any`),[a,o]=(0,V.useState)(`any`),[s,c]=(0,V.useState)({key:`modified`,dir:`desc`});return(0,H.jsxs)(A,{children:[(0,H.jsx)(E,{label:`Type`,value:t,options:W,onChange:n}),(0,H.jsx)(E,{label:`Owner`,value:r,options:G,onChange:i}),(0,H.jsx)(E,{label:`Last modified`,value:a,options:K,onChange:o}),(t!==`all`||r!==`any`||a!==`any`)&&(0,H.jsx)(N,{onClick:()=>{n(`all`),i(`any`),o(`any`)}}),(0,H.jsx)(w,{}),(0,H.jsx)(M,{fields:q,value:s,onChange:c})]})}function z(){let[e,t]=(0,V.useState)({});return(0,H.jsxs)(y,{children:[(0,H.jsx)(b,{title:`One SortMenu per field kind`,note:`The Direction group is worded for the field: date (Newest first), text (A to Z), number (Largest first), other (Ascending). A field with noDirection hides the group. Open each menu.`,children:(0,H.jsx)(S,{className:`items-start gap-6`,children:q.map(n=>{let r=e[n.key]??{key:n.key,dir:n.kind===`text`||n.kind===`other`?`asc`:`desc`};return(0,H.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,H.jsx)(M,{fields:[n],value:r,onChange:e=>t(t=>({...t,[n.key]:e}))}),(0,H.jsxs)(C,{children:[`kind: `,n.noDirection?`no direction`:n.kind]})]},n.key)})})}),(0,H.jsx)(b,{title:`Several fields`,note:`Picking a field starts it in its sensible direction.`,children:(0,H.jsx)(M,{fields:q,value:e.all??{key:`modified`,dir:`desc`},onChange:e=>t(t=>({...t,all:e}))})})]})}function B(){let[e,t]=(0,V.useState)(`list`);return(0,H.jsxs)(y,{children:[(0,H.jsx)(b,{title:`LayoutToggle`,note:`One outlined pill split by a rule, the active half filled. md (36px, level with md buttons) and sm (28px, level with sm buttons).`,children:(0,H.jsxs)(S,{className:`gap-6`,children:[(0,H.jsx)(k,{value:e,onChange:t}),(0,H.jsx)(k,{value:e,onChange:t,size:`sm`}),(0,H.jsxs)(C,{children:[`value: `,e]})]})}),(0,H.jsx)(b,{title:`ModuleFilterDivider`,note:`The pipe between the filters and the sort. Render it only when at least one filter chip precedes the sort.`,children:(0,H.jsxs)(S,{className:`h-7.5 gap-3`,children:[(0,H.jsx)(C,{children:`Filters`}),(0,H.jsx)(w,{}),(0,H.jsx)(C,{children:`Sort`})]})})]})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{V=t(n(),1),f(),D(),P(),T(),j(),O(),ee(),te(),_(),x(),H=r(),U={title:`Collection controls/Toolbar controls`,parameters:{stage:`padded`,docs:{description:{component:"The controls of a module list toolbar. Filters are `QuickField` chips (a dropdown, not a `<select>`, so an active filter can turn\nbrand-tinted and show its choice); a pipe (`ModuleFilterDivider`) separates the last filter from the sort; sort is one `SortMenu`\nwith a direction worded for the field; the Grid / List toggle is shared. Filter controls carry no tooltip."}}}},W=[{key:`all`,label:`Type`},{key:`doc`,label:`Documents`},{key:`sheet`,label:`Spreadsheets`},{key:`pdf`,label:`PDFs`}],G=[{key:`any`,label:`Owner`},{key:`me`,label:`Owned by me`},{key:`others`,label:`Owned by others`}],K=[{key:`any`,label:`Last modified`},{key:`today`,label:`Today`},{key:`week`,label:`Last 7 days`}],q=[{key:`modified`,label:`Modified`,kind:`date`},{key:`name`,label:`Name`,kind:`text`},{key:`size`,label:`Size`,kind:`number`},{key:`status`,label:`Status`,kind:`other`},{key:`match`,label:`Best match`,kind:`other`,noDirection:!0}],J={render:()=>(0,H.jsxs)(y,{children:[(0,H.jsx)(b,{title:`Idle`,note:`Each chip shows its own name until it narrows the list.`,children:(0,H.jsx)(R,{})}),(0,H.jsx)(b,{title:`With an active filter`,note:`The chip turns brand-tinted and shows its choice; Clear appears.`,children:(0,H.jsx)(R,{activeType:`pdf`})})]})},Y={render:()=>(0,H.jsx)(z,{})},X={render:()=>(0,H.jsx)(B,{})},Z={render:()=>(0,H.jsxs)(y,{children:[(0,H.jsx)(b,{title:`Badge variants`,note:`Status and count chips. brand is the selected / active wash; success, warning and danger are tints with their own ink.`,children:(0,H.jsx)(S,{children:[`default`,`secondary`,`outline`,`brand`,`success`,`warning`,`danger`,`destructive`].map(e=>(0,H.jsx)(F,{variant:e,children:e},e))})}),(0,H.jsx)(b,{title:`Sizes and glyphs`,children:(0,H.jsxs)(S,{children:[(0,H.jsx)(F,{variant:`brand`,children:`Default size`}),(0,H.jsx)(F,{variant:`brand`,size:`sm`,children:`sm`}),(0,H.jsxs)(F,{variant:`success`,children:[(0,H.jsx)(l,{"aria-hidden":!0}),` Done`]}),(0,H.jsxs)(F,{variant:`secondary`,children:[(0,H.jsx)(p,{"aria-hidden":!0}),` Private`]}),(0,H.jsxs)(F,{variant:`outline`,children:[(0,H.jsx)(d,{"aria-hidden":!0}),` 12`]}),(0,H.jsx)(F,{variant:`warning`,spinner:!0,children:`Saving…`})]})})]})},Q={render:()=>(0,H.jsx)(y,{children:(0,H.jsx)(b,{title:`Tip`,note:`Every hover label goes through <Tip label>. It sits OUTSIDE a trigger and is hover-only, so an icon-only control also needs its own aria-label. Hover or focus the controls.`,children:(0,H.jsxs)(S,{className:`gap-6`,children:[(0,H.jsx)(m,{label:`Add to favourites`,children:(0,H.jsx)(v,{variant:`ghost`,size:`icon`,"aria-label":`Add to favourites`,children:(0,H.jsx)(d,{})})}),[`top`,`right`,`bottom`,`left`].map(e=>(0,H.jsx)(m,{label:`Tip on the ${e}`,side:e,children:(0,H.jsx)(v,{variant:`secondary`,children:e})},e)),(0,H.jsx)(m,{label:(0,H.jsxs)(`span`,{children:[`Rich `,(0,H.jsx)(`strong`,{children:`content`}),` is allowed for the few badges that need it`]}),children:(0,H.jsx)(v,{variant:`secondary`,size:`icon`,"aria-label":`About tips`,children:(0,H.jsx)(u,{})})})]})})})},$=[`FilterRow`,`Sort`,`Layout`,`Badges`,`Tooltips`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Section title="Idle" note="Each chip shows its own name until it narrows the list.">
        <Toolbar />
      </Section>
      <Section title="With an active filter" note="The chip turns brand-tinted and shows its choice; Clear appears.">
        <Toolbar activeType="pdf" />
      </Section>
    </Stack>
}`,...J.parameters?.docs?.source},description:{story:`The Drive-style filter row: chips, Clear once one narrows, the pipe, then the sort.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <SortDemo />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <LayoutDemo />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Section title="Badge variants" note="Status and count chips. brand is the selected / active wash; success, warning and danger are tints with their own ink.">
        <Row>
          {(['default', 'secondary', 'outline', 'brand', 'success', 'warning', 'danger', 'destructive'] as const).map(v => <Badge key={v} variant={v}>
              {v}
            </Badge>)}
        </Row>
      </Section>
      <Section title="Sizes and glyphs">
        <Row>
          <Badge variant="brand">Default size</Badge>
          <Badge variant="brand" size="sm">
            sm
          </Badge>
          <Badge variant="success">
            <Check aria-hidden /> Done
          </Badge>
          <Badge variant="secondary">
            <Lock aria-hidden /> Private
          </Badge>
          <Badge variant="outline">
            <Star aria-hidden /> 12
          </Badge>
          <Badge variant="warning" spinner>
            Saving…
          </Badge>
        </Row>
      </Section>
    </Stack>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Section title="Tip" note="Every hover label goes through <Tip label>. It sits OUTSIDE a trigger and is hover-only, so an icon-only control also needs its own aria-label. Hover or focus the controls.">
        <Row className="gap-6">
          <Tip label="Add to favourites">
            <Button variant="ghost" size="icon" aria-label="Add to favourites">
              <Star />
            </Button>
          </Tip>
          {(['top', 'right', 'bottom', 'left'] as const).map(side => <Tip key={side} label={\`Tip on the \${side}\`} side={side}>
              <Button variant="secondary">{side}</Button>
            </Tip>)}
          <Tip label={<span>Rich <strong>content</strong> is allowed for the few badges that need it</span>}>
            <Button variant="secondary" size="icon" aria-label="About tips">
              <Info />
            </Button>
          </Tip>
        </Row>
      </Section>
    </Stack>
}`,...Q.parameters?.docs?.source}}}}))();export{Z as Badges,J as FilterRow,X as Layout,Y as Sort,Q as Tooltips,$ as __namedExportsOrder,U as default};