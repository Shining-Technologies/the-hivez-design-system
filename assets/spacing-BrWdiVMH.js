var e=`import { cn } from '@/lib/utils'

const SPACING_STEPS = [
  ['size-0.5', 0.5],
  ['size-1', 1],
  ['size-1.5', 1.5],
  ['size-2', 2],
  ['size-3', 3],
  ['size-4', 4],
  ['size-5', 5],
  ['size-6', 6],
  ['size-8', 8],
  ['size-10', 10],
  ['size-12', 12],
  ['size-16', 16],
] as const

/** Tailwind's 4px base (--spacing: 0.25rem). Padding and gaps are multiples of it; nothing in the system is a one-off pixel value. */
export default function Spacing() {
  return (
    <ul className="flex flex-col gap-2">
      {SPACING_STEPS.map(([box, n]) => (
        <li key={box} className="flex items-center gap-4">
          <code className="w-16 text-xs font-semibold">{box.replace('size-', '')}</code>
          <span className={cn('rounded-nested bg-brand', box)} aria-hidden />
          <span className="font-mono text-[11px] text-subtle-foreground">{n * 4}px</span>
        </li>
      ))}
    </ul>
  )
}
`;export{e as default};