var e=`import { indexFamily } from '../../lib/tokens'

/** The backdrop-blur strengths glass uses (Funky Glass). Floating glass blurs at 20px, scrims at 7px. */
export default function Blur() {
  return (
    <div className="flex flex-wrap gap-3">
      {indexFamily('--blur-').map((b) => (
        <div key={b.name} className="rounded-card border border-hairline bg-card p-4">
          <code className="text-xs font-semibold">{b.name}</code> <span className="font-mono text-[11px] text-subtle-foreground">{b.value}</span>
        </div>
      ))}
    </div>
  )
}
`;export{e as default};