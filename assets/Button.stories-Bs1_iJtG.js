import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{ar as n,or as r}from"./iframe-DVPkdZ19.js";import{Et as i,K as a,M as o,P as s,Xn as c,t as l,v as u,wn as d}from"./lucide-react-D87-wf3f.js";import{d as f,f as p,i as m,p as h,r as g,t as _,u as v}from"./dropdown-menu-DxaUHzmO.js";import{n as y,t as b}from"./button-qAGlqC5C.js";import{a as x,i as S,o as C,r as w,t as T}from"./layout-jgw1TP6Q.js";function E({className:e,type:t=`button`,header:r=!1,size:i,...a}){return(0,D.jsx)(b,{type:t,variant:`primary`,size:i??(r?`lg`:`md`),className:n(`aria-disabled:opacity-50`,r&&`max-md:size-12 max-md:justify-center max-md:rounded-panel max-md:px-0`,e),...a})}var D,O=e((()=>{y(),r(),D=t(),E.__docgenInfo={description:'THE ONE PRIMARY "New …" BUTTON of the three collection homes (Task Center,\nDocs spaces, Whiteboard boards) — FIX(collection-redesign-r2).\n\nFIX(button-system): now a thin wrapper over the shared `<Button\nvariant="primary">` (docs/architecture/BUTTON_SYSTEM.md). Before: it owned a\nprivate 36px class string (`PRIMARY_BUTTON`) next to a 44px `PRIMARY_BUTTON_HEADER`\nrecipe. After: `md` (36px) by default, `size="lg"` (40px) for empty-state CTAs,\nand `header` for the collection header, which is `lg` and collapses to a 48px\nicon-only square on a phone (the caller makes its label `sr-only` and adds the\nTip + aria-label).\n\nIt forwards every button prop (and the Radix `asChild` trigger\'s ref) so it can\nalso be a `DropdownMenuTrigger` (the Task Center\'s "New ▾" menu). `aria-disabled`\ndims it the way `disabled` does, for the guest-limit buttons that stay hoverable.',methods:[],displayName:`PrimaryButton`,props:{header:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}}}}));function k({size:e=`md`,label:t,className:r,...a}){let o=t??a[`aria-label`];return(0,A.jsx)(i,{className:n(j[e],`shrink-0 animate-spin motion-reduce:animate-none`,r),...o?{role:`status`,"aria-label":o}:{"aria-hidden":!0}})}var A,j,M=e((()=>{l(),r(),A=t(),j={sm:`size-3.5`,md:`size-4`,lg:`size-6`},k.__docgenInfo={description:"THE busy indicator for buttons and inline actions (lists keep skeletons).\nWith a `label` it is a polite `status` the screen reader announces; without\none it is decorative (`aria-hidden`) because the button's own text says what\nis happening. Respects reduced motion.",methods:[],displayName:`Spinner`,props:{size:{required:!1,tsType:{name:`union`,raw:`keyof typeof SIZE`,elements:[{name:`literal`,value:`sm`},{name:`literal`,value:`md`},{name:`literal`,value:`lg`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-hidden":{required:!1,tsType:{name:`union`,raw:`boolean | 'true' | 'false'`,elements:[{name:`boolean`},{name:`literal`,value:`'true'`},{name:`literal`,value:`'false'`}]},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}}));function N({disabled:e=!1,loading:t=!1}){return(0,P.jsxs)(`div`,{className:`grid w-fit grid-cols-[repeat(4,max-content)] items-center gap-x-6 gap-y-4`,children:[(0,P.jsx)(`span`,{}),L.map(e=>(0,P.jsx)(T,{children:e},e)),I.map(n=>(0,P.jsxs)(`div`,{className:`contents`,children:[(0,P.jsx)(T,{children:n}),L.map(r=>(0,P.jsxs)(b,{variant:n,size:r,disabled:e||t,children:[t?(0,P.jsx)(k,{}):(0,P.jsx)(a,{"aria-hidden":!0}),t?`Saving…`:`New item`]},r))]},n))]})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{l(),h(),O(),y(),M(),f(),C(),P=t(),F={title:`Buttons/Button`,component:b,parameters:{stage:`padded`,docs:{description:{component:"THE button. Five variants, three sizes (+ three icon-only), one 12px radius, no pills. The rules\nand the migration table are in `docs/architecture/BUTTON_SYSTEM.md`; the recipes are\n`components/ui/button-variants.ts`. At most one `primary` per surface."}}},args:{children:`Button`,variant:`primary`,size:`md`},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`ghost`,`destructive`,`link`]},size:{control:`select`,options:[`sm`,`md`,`lg`,`icon-sm`,`icon`,`icon-lg`]},disabled:{control:`boolean`}}},I=[`primary`,`secondary`,`ghost`,`destructive`,`link`],L=[`sm`,`md`,`lg`],R=[`icon-sm`,`icon`,`icon-lg`],z={},B={render:()=>(0,P.jsxs)(x,{children:[(0,P.jsx)(S,{title:`Variants`,note:`primary is the one main action; secondary every other action; ghost is chromeless; destructive deletes; link sits inside text.`,children:(0,P.jsx)(w,{children:I.map(e=>(0,P.jsx)(b,{variant:e,children:e},e))})}),(0,P.jsx)(S,{title:`Sizes`,note:`sm 28px, md 36px (the default), lg 40px. The field system uses the same three heights.`,children:(0,P.jsx)(w,{className:`items-end`,children:L.map(e=>(0,P.jsx)(b,{size:e,children:e},e))})}),(0,P.jsx)(S,{title:`Variant × size`,children:(0,P.jsx)(N,{})})]})},V={render:()=>(0,P.jsx)(N,{})},H={render:()=>(0,P.jsx)(N,{}),parameters:{pseudo:{hover:!0}}},U={render:()=>(0,P.jsx)(N,{}),parameters:{pseudo:{focusVisible:!0}}},W={render:()=>(0,P.jsx)(N,{disabled:!0})},G={render:()=>(0,P.jsx)(N,{loading:!0})},K={render:()=>(0,P.jsx)(x,{children:[`ghost`,`secondary`,`primary`,`destructive`].map(e=>(0,P.jsx)(S,{title:e,children:(0,P.jsx)(w,{children:R.map(t=>(0,P.jsx)(p,{label:`Settings (${t})`,children:(0,P.jsx)(b,{variant:e,size:t,"aria-label":`Settings (${t})`,children:(0,P.jsx)(s,{})})},t))})},e))})},q={render:()=>(0,P.jsxs)(x,{children:[(0,P.jsx)(S,{title:`PrimaryButton`,note:`md by default, lg for empty-state calls to action, header for a collection header (an icon square on a phone).`,children:(0,P.jsxs)(w,{children:[(0,P.jsxs)(E,{children:[(0,P.jsx)(a,{"aria-hidden":!0}),`New board`]}),(0,P.jsxs)(E,{size:`lg`,children:[(0,P.jsx)(a,{"aria-hidden":!0}),`New board`]}),(0,P.jsxs)(E,{header:!0,children:[(0,P.jsx)(a,{"aria-hidden":!0}),(0,P.jsx)(`span`,{children:`New board`})]})]})}),(0,P.jsx)(S,{title:`Link variant`,note:"Brand text with an underline on hover. `asChild` turns any variant into a router link.",children:(0,P.jsxs)(w,{children:[(0,P.jsx)(b,{variant:`link`,children:`Read the guide`}),(0,P.jsx)(b,{asChild:!0,variant:`secondary`,children:(0,P.jsx)(`a`,{href:`#settings`,children:`Settings`})})]})}),(0,P.jsx)(S,{title:`With icons and menus`,note:`Glyph size follows the button size; put no size-* on an icon.`,children:(0,P.jsxs)(w,{children:[(0,P.jsxs)(b,{variant:`secondary`,children:[(0,P.jsx)(o,{"aria-hidden":!0}),`Share`]}),(0,P.jsxs)(b,{variant:`secondary`,children:[(0,P.jsx)(d,{"aria-hidden":!0}),`Download`]}),(0,P.jsxs)(b,{variant:`destructive`,children:[(0,P.jsx)(u,{"aria-hidden":!0}),`Delete`]}),(0,P.jsxs)(_,{children:[(0,P.jsx)(v,{asChild:!0,children:(0,P.jsxs)(b,{variant:`primary`,children:[`New `,(0,P.jsx)(c,{"aria-hidden":!0})]})}),(0,P.jsxs)(g,{align:`start`,children:[(0,P.jsx)(m,{children:`Document`}),(0,P.jsx)(m,{children:`Whiteboard`}),(0,P.jsx)(m,{children:`Folder`})]})]})]})}),(0,P.jsx)(S,{title:`Full width`,note:`The sidebar New button: primary, lg, w-full.`,children:(0,P.jsx)(`div`,{className:`w-64`,children:(0,P.jsxs)(b,{variant:`primary`,size:`lg`,className:`w-full`,children:[(0,P.jsx)(a,{"aria-hidden":!0}),`New meeting`]})})})]})},J=[`Playground`,`Variants`,`Default`,`Hover`,`Focus`,`Disabled`,`Loading`,`IconButtons`,`PrimaryAndLink`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{}`,...z.parameters?.docs?.source},description:{story:`Use the controls to try a combination.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Section title="Variants" note="primary is the one main action; secondary every other action; ghost is chromeless; destructive deletes; link sits inside text.">
        <Row>
          {VARIANTS.map(v => <Button key={v} variant={v}>
              {v}
            </Button>)}
        </Row>
      </Section>
      <Section title="Sizes" note="sm 28px, md 36px (the default), lg 40px. The field system uses the same three heights.">
        <Row className="items-end">
          {SIZES.map(s => <Button key={s} size={s}>
              {s}
            </Button>)}
        </Row>
      </Section>
      <Section title="Variant × size">
        <Matrix />
      </Section>
    </Stack>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Matrix />
}`,...V.parameters?.docs?.source},description:{story:`Resting. Same grid as Hover, Focus, Disabled and Loading.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Matrix />,
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...H.parameters?.docs?.source},description:{story:"Forced `:hover` (storybook-addon-pseudo-states), so the hover recipe of every variant is on the page at once.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Matrix />,
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...U.parameters?.docs?.source},description:{story:"Forced `:focus-visible`: the one focus recipe, `ring-2 ring-ring/50`.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Matrix disabled />
}`,...W.parameters?.docs?.source},description:{story:"`disabled` drops the pointer and halves the opacity; a disabled primary also loses its metallic fill, edge and glow.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Matrix loading />
}`,...G.parameters?.docs?.source},description:{story:"There is no `loading` prop: a busy button is `disabled` with a `<Spinner />` in place of the glyph and the progressive label.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      {(['ghost', 'secondary', 'primary', 'destructive'] as const).map(v => <Section key={v} title={v}>
          <Row>
            {ICON_SIZES.map(s => <Tip key={s} label={\`Settings (\${s})\`}>
                <Button variant={v} size={s} aria-label={\`Settings (\${s})\`}>
                  <Settings />
                </Button>
              </Tip>)}
          </Row>
        </Section>)}
    </Stack>
}`,...K.parameters?.docs?.source},description:{story:"Icon-only buttons carry an `aria-label`; the `<Tip>` sits OUTSIDE the trigger.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
        <Section title="PrimaryButton" note="md by default, lg for empty-state calls to action, header for a collection header (an icon square on a phone).">
          <Row>
            <PrimaryButton>
              <Plus aria-hidden />
              New board
            </PrimaryButton>
            <PrimaryButton size="lg">
              <Plus aria-hidden />
              New board
            </PrimaryButton>
            <PrimaryButton header>
              <Plus aria-hidden />
              <span>New board</span>
            </PrimaryButton>
          </Row>
        </Section>
        <Section title="Link variant" note="Brand text with an underline on hover. \`asChild\` turns any variant into a router link.">
          <Row>
            <Button variant="link">Read the guide</Button>
            <Button asChild variant="secondary">
              <a href="#settings">Settings</a>
            </Button>
          </Row>
        </Section>
        <Section title="With icons and menus" note="Glyph size follows the button size; put no size-* on an icon.">
          <Row>
            <Button variant="secondary">
              <Share2 aria-hidden />
              Share
            </Button>
            <Button variant="secondary">
              <Download aria-hidden />
              Download
            </Button>
            <Button variant="destructive">
              <Trash2 aria-hidden />
              Delete
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="primary">
                  New <ChevronDown aria-hidden />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Document</DropdownMenuItem>
                <DropdownMenuItem>Whiteboard</DropdownMenuItem>
                <DropdownMenuItem>Folder</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Row>
        </Section>
        <Section title="Full width" note="The sidebar New button: primary, lg, w-full.">
          <div className="w-64">
            <Button variant="primary" size="lg" className="w-full">
              <Plus aria-hidden />
              New meeting
            </Button>
          </div>
        </Section>
      </Stack>
}`,...q.parameters?.docs?.source},description:{story:'`PrimaryButton` is `<Button variant="primary">` for the collection homes; `header` is the lg collapse-to-square form.',...q.parameters?.docs?.description}}}}))();export{V as Default,W as Disabled,U as Focus,H as Hover,K as IconButtons,G as Loading,z as Playground,q as PrimaryAndLink,B as Variants,J as __namedExportsOrder,F as default};