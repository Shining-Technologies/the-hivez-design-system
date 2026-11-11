var e=`import { useTheme } from '@/lib/ui/theme'
import { THEMES } from '@/themes/registry'

import { colourTokenGroups } from '../../lib/tokens'

/**
 * Every colour token of the theme and mode chosen in the top bar, read from \`src/themes/<id>/<scheme>.css\` (so a token
 * added to the theme files appears here by itself). The swatch paints \`var(--token)\`; the caption is what the theme file
 * declares, with the Tailwind utility when \`index.css\` maps one.
 */
export default function SemanticTokens() {
  const { themeId, scheme } = useTheme()
  const groups = colourTokenGroups(themeId, scheme)
  const name = THEMES.find((t) => t.id === themeId)?.name ?? themeId
  return (
    <div className="flex w-full flex-col gap-8">
      <p className="max-w-3xl text-sm text-muted-foreground">
        Showing <strong className="text-foreground">{name}</strong>, {scheme}. Switch the theme and the mode in the top bar; the same token names exist in all six
        files (the registry test fails on a mismatch).
      </p>
      {groups.map(({ group, tokens }) => (
        <section key={group.title} className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-sm font-semibold text-foreground">{\`\${group.title} (\${String(tokens.length)})\`}</h3>
            {group.note && <p className="max-w-3xl text-xs text-muted-foreground">{group.note}</p>}
          </div>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-2">
            {tokens.map((t) => (
              <li key={t.name} className="flex min-w-0 items-center gap-3 rounded-control border border-hairline bg-card p-2">
                <span aria-hidden className="ds-checker size-10 shrink-0 overflow-hidden rounded-chip border border-default">
                  <span className="block size-full" style={{ background: \`var(\${t.name})\` }} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <code className="truncate text-xs font-semibold text-foreground">{t.name}</code>
                  <span className="truncate font-mono text-[11px] text-subtle-foreground" title={t.value}>
                    {t.declared}
                  </span>
                  {t.stem && <span className="truncate font-mono text-[11px] text-brand">bg-{t.stem}</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
`;export{e as default};