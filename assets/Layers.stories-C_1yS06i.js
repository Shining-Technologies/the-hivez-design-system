import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{dr as n,lr as r,ur as i}from"./iframe-DVPkdZ19.js";import{a,i as o,n as s,o as c,t as l}from"./layout-jgw1TP6Q.js";var u,d,f,p,m,h;e((()=>{n(),c(),u=t(),d={title:`Foundations/Z-index`,parameters:{stage:`padded`}},f=Object.keys(r).map(e=>({name:e,value:r[e],cls:i[e]})).sort((e,t)=>e.value-t.value||e.name.localeCompare(t.name)),p=Math.max(...f.filter(e=>e.name!==`CANVAS_CURSORS`).map(e=>e.value)),m={render:()=>(0,u.jsx)(a,{children:(0,u.jsx)(o,{title:`Bands, lowest to highest`,note:`Read from Z in layers.ts. Rows with the same number are aliases. CANVAS_CURSORS is local to a React Flow viewport.`,children:(0,u.jsx)(s,{className:`flex flex-col gap-1.5`,children:f.map(e=>(0,u.jsxs)(`div`,{className:`grid grid-cols-[14rem_4rem_1fr] items-center gap-3 max-md:grid-cols-[1fr_4rem]`,children:[(0,u.jsx)(`code`,{className:`truncate text-xs font-semibold`,children:e.cls}),(0,u.jsx)(l,{className:`text-right`,children:e.value.toLocaleString(`en`)}),(0,u.jsx)(`span`,{"aria-hidden":!0,className:`h-2 rounded-full bg-brand max-md:hidden`,style:{width:`${String(Math.max(1,Math.min(100,e.value/p*100)))}%`}})]},e.name))})})})},h=[`Bands`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <Section title="Bands, lowest to highest" note="Read from Z in layers.ts. Rows with the same number are aliases. CANVAS_CURSORS is local to a React Flow viewport.">
        <Panel className="flex flex-col gap-1.5">
          {BANDS.map(b => <div key={b.name} className="grid grid-cols-[14rem_4rem_1fr] items-center gap-3 max-md:grid-cols-[1fr_4rem]">
              <code className="truncate text-xs font-semibold">{b.cls}</code>
              <Caption className="text-right">{b.value.toLocaleString('en')}</Caption>
              <span aria-hidden className="h-2 rounded-full bg-brand max-md:hidden" style={{
            width: \`\${String(Math.max(1, Math.min(100, b.value / MAX * 100)))}%\`
          }} />
            </div>)}
        </Panel>
      </Section>
    </Stack>
}`,...m.parameters?.docs?.source},description:{story:"z-index is not a global scale: it only compares inside one stacking context. Every band is\nnamed in `src/lib/ui/layers.ts` (the single source of truth, mirrored by the `--z-index-*` tokens\nthat generate the `z-dock`, `z-overlay`, … utilities), and a raw `z-10` or `z-[9999]` is an eslint\nerror. Pick a band by meaning, not by being one higher than the thing you are losing to.",...m.parameters?.docs?.description}}}}))();export{m as Bands,h as __namedExportsOrder,d as default};