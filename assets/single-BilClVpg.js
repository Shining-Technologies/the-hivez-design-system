var e=`import { useState } from 'react'

import { EntityPicker } from '@/components/shared/inputs/EntityPicker'
import type { FieldSize } from '@/components/ui/field-variants'

import { PICKER_OPTIONS } from '../../lib/sampleData'

/** One choice. The picker takes its options as props, so it renders with no server. */
export default function Single() {
  const [value, setValue] = useState<string[]>(['u1'])
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {(['sm', 'md', 'lg'] as FieldSize[]).map((size) => (
        <EntityPicker key={size} options={PICKER_OPTIONS} value={value} onChange={setValue} size={size} aria-label={\`Assignee \${size}\`} placeholder="Assign to…" />
      ))}
      <span className="font-mono text-[11px] text-subtle-foreground">Selected: {value.join(', ') || 'none'}</span>
    </div>
  )
}
`;export{e as default};