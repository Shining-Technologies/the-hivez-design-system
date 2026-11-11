var e=`import { useState } from 'react'

import { SortMenu } from '@/components/shared/collection/SortMenu'
import type { SortFieldDef, SortValue } from '@/components/shared/collection/sortVocabulary'

const FIELDS: SortFieldDef[] = [
  { key: 'modified', label: 'Last modified', kind: 'date' },
  { key: 'name', label: 'Name', kind: 'text' },
  { key: 'size', label: 'Size', kind: 'number' },
]

/** Several fields in one menu: picking a field starts it in its sensible direction. */
export default function SortMenuFields() {
  const [value, setValue] = useState<SortValue>({ key: 'modified', dir: 'desc' })
  return <SortMenu fields={FIELDS} value={value} onChange={setValue} />
}
`;export{e as default};