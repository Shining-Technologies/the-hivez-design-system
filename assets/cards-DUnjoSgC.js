var e=`import { ThemeScope } from '@/lib/ui/ThemeScope'
import { THEMES } from '@/themes/registry'

/** One card per registered theme, each wrapped in a \`ThemeScope\` so it wears its own tokens whatever the page is wearing. The list is \`THEMES\` in \`src/themes/registry.ts\`. */
export default function ThemeCards() {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
      {THEMES.map((t) => (
        <ThemeScope key={t.id} themeId={t.id} className="flex h-full flex-col gap-3 rounded-card border border-default bg-background p-4 text-foreground">
          <div className="flex items-center gap-2">
            <span aria-hidden className="size-6 rounded-chip border border-brand-deep bg-brand" />
            <h4 className="text-body font-semibold">{t.name}</h4>
          </div>
          <p className="text-caption text-muted-foreground">{t.description}</p>
          <code className="font-mono text-[11px] text-subtle-foreground">data-theme=&quot;{t.id}&quot;</code>
        </ThemeScope>
      ))}
    </div>
  )
}
`;export{e as default};