var e=`import { useState } from 'react'

import type { FieldSize } from '@/components/ui/field-variants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SIZES: FieldSize[] = ['sm', 'md', 'lg']
const PRIORITIES = ['Low', 'Medium', 'High', 'Urgent']

/** Reach for Select first (Radix, themed list). */
export default function SelectSizes() {
  const [priority, setPriority] = useState('Medium')
  return (
    <div className="grid w-full max-w-md grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-4 gap-y-3">
      {SIZES.map((s) => (
        <div key={s} className="contents">
          <span className="font-mono text-[11px] text-subtle-foreground">{s}</span>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger size={s} className="w-full" aria-label={\`Select \${s}\`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PRIORITIES.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  )
}
`;export{e as default};