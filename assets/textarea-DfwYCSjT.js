var e=`import { useState } from 'react'

import type { FieldSize } from '@/components/ui/field-variants'
import { Textarea } from '@/components/ui/textarea'

const SIZES: FieldSize[] = ['sm', 'md', 'lg']

/** Same box as the input, with a minimum height per size. */
export default function TextareaSizes() {
  const [notes, setNotes] = useState('')
  return (
    <div className="grid w-full max-w-md grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-4 gap-y-3">
      {SIZES.map((s) => (
        <div key={s} className="contents">
          <span className="pt-2 font-mono text-[11px] text-subtle-foreground">{s}</span>
          <Textarea size={s} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" aria-label={\`Textarea \${s}\`} />
        </div>
      ))}
    </div>
  )
}
`;export{e as default};