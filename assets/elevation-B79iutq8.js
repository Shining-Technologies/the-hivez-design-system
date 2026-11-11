var e=`import { useTheme } from '@/lib/ui/theme'
import { cn } from '@/lib/utils'

import { themeFamily } from '../../lib/tokens'

const ELEVATION_UTILITIES = [
  { stem: 'flat', cls: 'shadow-flat' },
  { stem: 'raised', cls: 'shadow-raised' },
  { stem: 'glass-raised', cls: 'shadow-glass-raised' },
  { stem: 'panel', cls: 'shadow-panel' },
  { stem: 'overlay', cls: 'shadow-overlay' },
  { stem: 'overlay-strong', cls: 'shadow-overlay-strong' },
  { stem: 'brand', cls: 'shadow-brand' },
  { stem: 'danger-glow', cls: 'shadow-danger-glow' },
] as const

/** Shadows are theme tokens (soft cool shadows by day; only the brand glow is gold). Use the shadow-* utility, never a literal box-shadow. */
export default function Elevation() {
  const { themeId, scheme } = useTheme()
  const decl = new Map(themeFamily(themeId, scheme, '--elevation-').map((d) => [d.name, d.value]))
  return (
    <div className="flex flex-wrap gap-6">
      {ELEVATION_UTILITIES.map((e) => (
        <div key={e.cls} className="flex w-44 flex-col gap-2">
          <div className={cn('h-20 rounded-card border border-hairline bg-card', e.cls)} />
          <code className="text-xs font-semibold">{e.cls}</code>
          <span className="break-words font-mono text-[11px] text-subtle-foreground">{decl.get(\`--elevation-\${e.stem}\`)}</span>
        </div>
      ))}
    </div>
  )
}
`;export{e as default};