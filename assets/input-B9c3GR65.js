var e=`import { useState } from 'react'

import type { FieldSize } from '@/components/ui/field-variants'
import { Input } from '@/components/ui/input'

const SIZES: FieldSize[] = ['sm', 'md', 'lg']

/** Heights sm 28 / md 36 / lg 40. A phone types at 16px so iOS does not zoom on focus. */
export default function InputSizes() {
  const [text, setText] = useState('Quarterly planning')
  return (
    <div className="grid w-full max-w-md grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-4 gap-y-3">
      {SIZES.map((s) => (
        <div key={s} className="contents">
          <span className="font-mono text-[11px] text-subtle-foreground">{s}</span>
          <Input size={s} value={text} onChange={(e) => setText(e.target.value)} placeholder="Name" aria-label={\`Input \${s}\`} />
        </div>
      ))}
    </div>
  )
}
`;export{e as default};