var e=`import { ThemeScope } from '@/lib/ui/ThemeScope'
import { THEMES } from '@/themes/registry'

const KEY_ROLES = [
  { label: 'background', cls: 'bg-background' },
  { label: 'card', cls: 'bg-card' },
  { label: 'muted', cls: 'bg-muted' },
  { label: 'accent', cls: 'bg-accent' },
  { label: 'brand', cls: 'bg-brand' },
  { label: 'brand-tint', cls: 'bg-brand-tint' },
  { label: 'foreground', cls: 'bg-foreground' },
  { label: 'muted-foreground', cls: 'bg-muted-foreground' },
  { label: 'success', cls: 'bg-success' },
  { label: 'info', cls: 'bg-info' },
  { label: 'warning', cls: 'bg-warning' },
  { label: 'danger', cls: 'bg-danger' },
] as const

/** All three themes in light and dark, side by side. Each box is a real \`ThemeScope\`: it wears its theme without changing the page's. */
export default function Palettes() {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] gap-4">
      {THEMES.flatMap((t) =>
        (['light', 'dark'] as const).map((scheme) => (
          <ThemeScope key={\`\${t.id}-\${scheme}\`} themeId={t.id} scheme={scheme} className="flex flex-col gap-3 rounded-card border border-default bg-background p-4 text-foreground">
            <div className="flex items-baseline justify-between">
              <h4 className="text-sm font-semibold">{t.name}</h4>
              <span className="font-mono text-[11px] text-subtle-foreground">{scheme}</span>
            </div>
            <ul className="grid grid-cols-6 gap-2">
              {KEY_ROLES.map((r) => (
                <li key={r.label} className="flex flex-col items-center gap-1">
                  <span aria-hidden className={\`\${r.cls} size-9 rounded-chip border border-default\`} />
                  <span className="max-w-full truncate font-mono text-[9px] text-subtle-foreground">{r.label}</span>
                </li>
              ))}
            </ul>
          </ThemeScope>
        )),
      )}
    </div>
  )
}
`;export{e as default};