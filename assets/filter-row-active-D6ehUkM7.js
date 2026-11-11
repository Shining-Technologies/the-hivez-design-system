var e=`import { useState } from 'react'

import { QuickField } from '@/components/shared/collection/QuickField'
import { ModuleClearButton, ModuleFilterRow } from '@/components/shared/layout/ModuleToolbar'

const TYPES = [
  { key: 'all', label: 'Type' },
  { key: 'doc', label: 'Documents' },
  { key: 'pdf', label: 'PDFs' },
]

/** With a filter applied the chip turns brand-tinted and shows its choice; Clear appears. */
export default function FilterRowActive() {
  const [type, setType] = useState('pdf')
  return (
    <ModuleFilterRow>
      <QuickField label="Type" value={type} options={TYPES} onChange={setType} />
      {type !== 'all' && <ModuleClearButton onClick={() => setType('all')} />}
    </ModuleFilterRow>
  )
}
`;export{e as default};