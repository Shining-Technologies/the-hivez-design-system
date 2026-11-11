var e=`import { useTheme } from '@/lib/ui/theme'
import { cn } from '@/lib/utils'

import { indexFamily, themeTokens } from '../../lib/tokens'

// Tailwind reads class names statically, so the radius utilities are spelled out; the VALUES shown next to them are read
// from index.css.
const RADII = [
  { token: '--radius-nested', cls: 'rounded-nested', use: 'a control inside an 8px control (active segment, checkbox)' },
  { token: '--radius-chip', cls: 'rounded-chip', use: 'chips, segments, filters' },
  { token: '--radius-control', cls: 'rounded-control', use: 'buttons, fields: THE control radius' },
  { token: '--radius-card', cls: 'rounded-card', use: 'tiles, cards, module pages' },
  { token: '--radius-panel', cls: 'rounded-panel', use: 'page panels, sheets' },
  { token: '--radius-panel-lg', cls: 'rounded-panel-lg', use: 'the largest page panels' },
] as const

/** The radius ramp, named by role rather than by size. */
export default function Radius() {
  const { themeId, scheme } = useTheme()
  const base = themeTokens(themeId, scheme).get('--radius')
  const ramp = indexFamily('--radius-')
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-muted-foreground">The shadcn base --radius is {base ?? ''} in this theme; sm / md / lg / xl derive from it.</p>
      <div className="flex flex-wrap items-end gap-5">
        {RADII.map((r) => (
          <div key={r.token} className="flex w-40 flex-col gap-2">
            <div className={cn('h-20 border border-strong bg-muted', r.cls)} />
            <code className="text-xs font-semibold">{r.cls}</code>
            <span className="font-mono text-[11px] text-subtle-foreground">
              {r.token}: {ramp.find((x) => x.name === r.token)?.value}
            </span>
            <span className="text-xs text-muted-foreground">{r.use}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
`;export{e as default};