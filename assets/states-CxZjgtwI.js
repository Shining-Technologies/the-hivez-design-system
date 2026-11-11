var e=`import { Input } from '@/components/ui/input'

/** Disabled, read-only and invalid (\`aria-invalid\`). Hover the fields and Tab into them to see the brand border and the thin ring. */
export default function States() {
  return (
    <div className="flex w-full flex-wrap items-start gap-3">
      <Input className="w-56" disabled value="Disabled" aria-label="Disabled" readOnly />
      <Input className="w-56" readOnly value="Read-only" aria-label="Read-only" />
      <Input className="w-56" aria-invalid defaultValue="Invalid" aria-label="Invalid" />
    </div>
  )
}
`;export{e as default};