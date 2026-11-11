var e=`import { Z, Z_CLASS, type LayerName } from '@/lib/ui/layers'

const BANDS = (Object.keys(Z) as LayerName[]).map((name) => ({ name, value: Z[name], cls: Z_CLASS[name] })).sort((a, b) => a.value - b.value || a.name.localeCompare(b.name))
// Bands that share a number are aliases of one another (GAME_HUD is PANEL, CHROME is CALL_WINDOW, …).
const MAX = Math.max(...BANDS.filter((b) => b.name !== 'CANVAS_CURSORS').map((b) => b.value))

/** Read from \`Z\` in src/lib/ui/layers.ts. Rows with the same number are aliases. CANVAS_CURSORS is local to a React Flow viewport. */
export default function Bands() {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-card border border-hairline bg-card p-4">
      {BANDS.map((b) => (
        <div key={b.name} className="grid grid-cols-[14rem_4rem_1fr] items-center gap-3 max-md:grid-cols-[1fr_4rem]">
          <code className="truncate text-xs font-semibold">{b.cls}</code>
          <span className="text-right font-mono text-[11px] text-subtle-foreground">{b.value.toLocaleString('en')}</span>
          <span aria-hidden className="h-2 rounded-full bg-brand max-md:hidden" style={{ width: \`\${String(Math.max(1, Math.min(100, (b.value / MAX) * 100)))}%\` }} />
        </div>
      ))}
    </div>
  )
}
`;export{e as default};