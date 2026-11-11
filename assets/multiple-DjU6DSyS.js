var e=`import { useState } from 'react'

import { EntityPicker } from '@/components/shared/inputs/EntityPicker'
import type { FieldSize } from '@/components/ui/field-variants'

import { PICKER_OPTIONS } from '../../lib/sampleData'

/** Several choices, shown as removable chips. */
export default function Multiple() {
  const [value, setValue] = useState<string[]>(['u0', 'u2'])
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as FieldSize[]).map((size) => (
        <EntityPicker key={size} options={PICKER_OPTIONS} value={value} onChange={setValue} multiple size={size} aria-label={\`Assignees \${size}\`} placeholder="Assign to…" />
      ))}
      <span className="font-mono text-[11px] text-subtle-foreground">Selected: {value.join(', ') || 'none'}</span>
    </div>
  )
}
`;export{e as default};