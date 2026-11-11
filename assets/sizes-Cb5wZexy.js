var e=`import { Star } from 'lucide-react'

/** size-3.5 (sm buttons, chips), size-4 (default), size-5 (lg buttons, icon-lg), size-6 (empty states). */
export default function Sizes() {
  return (
    <div className="flex items-end gap-6">
      {(['size-3.5', 'size-4', 'size-5', 'size-6'] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-1.5">
          <Star className={s} aria-hidden />
          <span className="font-mono text-[11px] text-subtle-foreground">{s}</span>
        </div>
      ))}
    </div>
  )
}
`;export{e as default};