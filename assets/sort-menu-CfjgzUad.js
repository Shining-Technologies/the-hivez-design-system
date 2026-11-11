var e=`import { useState } from 'react'

import { SortMenu } from '@/components/shared/collection/SortMenu'
import type { SortFieldDef, SortValue } from '@/components/shared/collection/sortVocabulary'

const FIELDS: SortFieldDef[] = [
  { key: 'modified', label: 'Last modified', kind: 'date' },
  { key: 'name', label: 'Name', kind: 'text' },
  { key: 'size', label: 'Size', kind: 'number' },
  { key: 'status', label: 'Status', kind: 'other' },
  { key: 'match', label: 'Best match', kind: 'other', noDirection: true },
]

/**
 * One SortMenu per field kind. The Direction group is worded for the field: date (Newest first), text (A to Z), number
 * (Largest first), other (Ascending). A field with \`noDirection\` hides the group. Open each menu.
 */
export default function SortMenus() {
  const [value, setValue] = useState<Record<string, SortValue>>({})
  return (
    <div className="flex flex-wrap items-start gap-6">
      {FIELDS.map((f) => {
        const v = value[f.key] ?? { key: f.key, dir: f.kind === 'text' || f.kind === 'other' ? 'asc' : 'desc' }
        return (
          <div key={f.key} className="flex flex-col gap-1.5">
            <SortMenu fields={[f]} value={v} onChange={(next) => setValue((cur) => ({ ...cur, [f.key]: next }))} />
            <span className="font-mono text-[11px] text-subtle-foreground">kind: {f.noDirection ? 'no direction' : f.kind}</span>
          </div>
        )
      })}
    </div>
  )
}
`;export{e as default};