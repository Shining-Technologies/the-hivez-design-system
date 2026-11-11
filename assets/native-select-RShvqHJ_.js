var e=`import { useState } from 'react'

import type { FieldSize } from '@/components/ui/field-variants'
import { NativeSelect } from '@/components/ui/native-select'

const SIZES: FieldSize[] = ['sm', 'md', 'lg']
const PRIORITIES = ['Low', 'Medium', 'High', 'Urgent']

/** NativeSelect is for an option whose value is the empty string (Radix Select cannot hold one). */
export default function NativeSelectSizes() {
  const [native, setNative] = useState('')
  return (
    <div className="grid w-full max-w-md grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-4 gap-y-3">
      {SIZES.map((s) => (
        <div key={s} className="contents">
          <span className="font-mono text-[11px] text-subtle-foreground">{s}</span>
          <NativeSelect size={s} value={native} onChange={(e) => setNative(e.target.value)} className="w-full" aria-label={\`Native select \${s}\`}>
            <option value="">Anyone</option>
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </NativeSelect>
        </div>
      ))}
    </div>
  )
}
`;export{e as default};