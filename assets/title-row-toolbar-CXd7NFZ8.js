var e=`import { useState } from 'react'

import { QuickField } from '@/components/shared/collection/QuickField'
import { LayoutToggle } from '@/components/shared/collection/LayoutToggle'
import { SortMenu } from '@/components/shared/collection/SortMenu'
import type { SortValue } from '@/components/shared/collection/sortVocabulary'
import { ModuleFilterDivider } from '@/components/shared/layout/ModuleFilterDivider'
import { ModuleTitleRow } from '@/components/shared/layout/ModuleTitleRow'
import { ModuleFilterRow, ModuleToolbar } from '@/components/shared/layout/ModuleToolbar'

const TYPE_OPTIONS = [
  { key: 'all', label: 'Type' },
  { key: 'doc', label: 'Documents' },
  { key: 'pdf', label: 'PDFs' },
]

/** The title row and the toolbar on their own, for the anatomy: view name as h2, one muted summary, the Layout toggle; then the chips, the pipe and the sort. */
export default function TitleRowAndToolbar() {
  const [layout, setLayout] = useState<'grid' | 'list'>('list')
  const [type, setType] = useState('all')
  const [sort, setSort] = useState<SortValue>({ key: 'name', dir: 'asc' })
  return (
    <div className="flex w-full max-w-4xl flex-col gap-2 rounded-card border border-hairline bg-card p-5">
      <ModuleTitleRow title="Spaces" summary="12 spaces · 148 pages" layout={layout} onLayout={setLayout} />
      <ModuleToolbar count="12 spaces" end={<LayoutToggle value={layout} onChange={setLayout} size="sm" />}>
        <ModuleFilterRow>
          <QuickField label="Type" value={type} options={TYPE_OPTIONS} onChange={setType} />
          <ModuleFilterDivider />
          <SortMenu
            fields={[
              { key: 'name', label: 'Name', kind: 'text' },
              { key: 'modified', label: 'Last modified', kind: 'date' },
            ]}
            value={sort}
            onChange={setSort}
          />
        </ModuleFilterRow>
      </ModuleToolbar>
    </div>
  )
}
`;export{e as default};