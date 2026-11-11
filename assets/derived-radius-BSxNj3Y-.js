var e=`import { cn } from '@/lib/utils'

/** The older shadcn steps, kept for primitives that still use rounded-sm / md / lg / xl. */
export default function DerivedRadius() {
  return (
    <div className="flex flex-wrap items-end gap-5">
      {(['rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl'] as const).map((c) => (
        <div key={c} className="flex w-28 flex-col gap-2">
          <div className={cn('h-14 border border-strong bg-muted', c)} />
          <code className="text-xs font-semibold">{c}</code>
        </div>
      ))}
      <div className="flex w-28 flex-col gap-2">
        <div className="h-14 rounded-full border border-strong bg-muted" />
        <code className="text-xs font-semibold">rounded-full</code>
        <span className="font-mono text-[11px] text-subtle-foreground">dots and pills only (never a text button)</span>
      </div>
    </div>
  )
}
`;export{e as default};