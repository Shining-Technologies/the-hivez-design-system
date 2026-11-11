var e=`import { useState } from 'react'

import { QuickField } from '@/components/shared/collection/QuickField'
import { SortMenu } from '@/components/shared/collection/SortMenu'
import type { SortFieldDef, SortValue } from '@/components/shared/collection/sortVocabulary'
import { ModuleFilterDivider } from '@/components/shared/layout/ModuleFilterDivider'
import { ModuleClearButton, ModuleFilterRow } from '@/components/shared/layout/ModuleToolbar'

const TYPES = [
  { key: 'all', label: 'Type' },
  { key: 'doc', label: 'Documents' },
  { key: 'sheet', label: 'Spreadsheets' },
  { key: 'pdf', label: 'PDFs' },
]
const OWNERS = [
  { key: 'any', label: 'Owner' },
  { key: 'me', label: 'Owned by me' },
  { key: 'others', label: 'Owned by others' },
]
const WHEN = [
  { key: 'any', label: 'Last modified' },
  { key: 'today', label: 'Today' },
  { key: 'week', label: 'Last 7 days' },
]
const SORT_FIELDS: SortFieldDef[] = [
  { key: 'modified', label: 'Last modified', kind: 'date' },
  { key: 'name', label: 'Name', kind: 'text' },
  { key: 'size', label: 'Size', kind: 'number' },
]

/**
 * Filters are \`QuickField\` chips (a dropdown, not a \`<select>\`, so an active filter can turn brand-tinted and show its choice);
 * a pipe separates the last filter from the sort; Clear appears once a filter narrows. Filter controls carry no tooltip.
 */
export default function FilterRow() {
  const [type, setType] = useState('all')
  const [owner, setOwner] = useState('any')
  const [when, setWhen] = useState('any')
  const [sort, setSort] = useState<SortValue>({ key: 'modified', dir: 'desc' })
  const narrowing = type !== 'all' || owner !== 'any' || when !== 'any'
  return (
    <ModuleFilterRow>
      <QuickField label="Type" value={type} options={TYPES} onChange={setType} />
      <QuickField label="Owner" value={owner} options={OWNERS} onChange={setOwner} />
      <QuickField label="Last modified" value={when} options={WHEN} onChange={setWhen} />
      {narrowing && (
        <ModuleClearButton
          onClick={() => {
            setType('all')
            setOwner('any')
            setWhen('any')
          }}
        />
      )}
      <ModuleFilterDivider />
      <SortMenu fields={SORT_FIELDS} value={sort} onChange={setSort} />
    </ModuleFilterRow>
  )
}
`;export{e as default};