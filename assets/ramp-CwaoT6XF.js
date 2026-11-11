var e=`import { typeRamp } from '../../lib/tokens'

const SAMPLE = 'The quick brown fox jumps over the lazy dog'

/** The \`--text-*\` block of \`src/index.css\`, largest first. Each step is a Tailwind utility (\`text-body\`, \`text-h2\`, …) that carries its own line height, tracking and weight. */
export default function Ramp() {
  return (
    <ul className="flex w-full flex-col divide-y divide-[var(--border-hairline)] rounded-card border border-hairline bg-card">
      {typeRamp()
        .reverse()
        .map((s) => (
          <li key={s.name} className="grid grid-cols-[10rem_1fr] items-baseline gap-4 px-4 py-3 max-sm:grid-cols-1">
            <div className="flex flex-col">
              <code className="text-xs font-semibold text-foreground">text-{s.name}</code>
              <span className="font-mono text-[11px] text-subtle-foreground">
                {s.size} / {s.lineHeight ?? '1.5'}
              </span>
              <span className="font-mono text-[11px] text-subtle-foreground">
                {s.letterSpacing ? \`tracking \${s.letterSpacing}\` : 'tracking 0'} · weight {s.weight ?? '400'}
              </span>
            </div>
            <span className="min-w-0 truncate" style={{ fontSize: s.size, lineHeight: s.lineHeight, letterSpacing: s.letterSpacing, fontWeight: s.weight }}>
              {SAMPLE}
            </span>
          </li>
        ))}
    </ul>
  )
}
`;export{e as default};