var e=`import { useState } from 'react'
import { Clock, FileText, Folder, HardDrive, Share2, Star, Trash2 } from 'lucide-react'

import { QuickField } from '@/components/shared/collection/QuickField'
import { SortMenu } from '@/components/shared/collection/SortMenu'
import type { SortValue } from '@/components/shared/collection/sortVocabulary'
import { TILE } from '@/components/shared/collection/collectionStyles'
import { EmptyState } from '@/components/shared/feedback/EmptyState'
import { ModuleFilterDivider } from '@/components/shared/layout/ModuleFilterDivider'
import { ModulePage } from '@/components/shared/layout/ModulePage'
import { ModuleSidebar, ModuleSidebarNewButton, type ModuleSidebarItem } from '@/components/shared/layout/ModuleSidebar'
import { ModuleTitleRow } from '@/components/shared/layout/ModuleTitleRow'
import { ModuleFilterRow, ModuleToolbar } from '@/components/shared/layout/ModuleToolbar'
import { MODULE_COLUMN, MODULE_SCROLL } from '@/components/shared/layout/moduleFrame'
import { cn } from '@/lib/utils'

import { PageStage } from '../../lib/PageStage'

const FILES = [
  ['Q4 roadmap.pdf', '2.4 MB · Amina · 2d ago'],
  ['Brand guidelines.pptx', '18 MB · Ben · 5d ago'],
  ['Budget 2027.xlsx', '640 KB · You · 1w ago'],
  ['Standup notes.md', '4 KB · Chiara · 1w ago'],
  ['Hiring plan.docx', '88 KB · Dev · 2w ago'],
  ['Offsite photos.zip', '212 MB · Elena · 3w ago'],
  ['Pricing model.xlsx', '1.1 MB · Farid · 3w ago'],
  ['Onboarding.pdf', '3.2 MB · You · 1mo ago'],
] as const

const TYPE_OPTIONS = [
  { key: 'all', label: 'Type' },
  { key: 'doc', label: 'Documents' },
  { key: 'pdf', label: 'PDFs' },
]
const PEOPLE_OPTIONS = [
  { key: 'any', label: 'People' },
  { key: 'me', label: 'Owned by me' },
]

// The rows are made up: the frame is what this page is about.
function Rows({ layout }: { layout: 'grid' | 'list' }) {
  if (layout === 'grid') {
    return (
      <div className="grid shrink-0 grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
        {FILES.map(([name, meta]) => (
          <div key={name} className={cn(TILE, 'flex h-36 flex-col justify-end gap-1 p-3')}>
            <FileText className="mb-auto size-5 text-muted-foreground" aria-hidden />
            <span className="truncate text-sm font-medium text-foreground">{name}</span>
            <span className="truncate text-xs text-subtle-foreground">{meta}</span>
          </div>
        ))}
      </div>
    )
  }
  return (
    <ul className="flex shrink-0 flex-col">
      {FILES.map(([name, meta]) => (
        <li key={name} className="flex items-center gap-3 border-b border-hairline px-1 py-2.5 last:border-b-0">
          <FileText className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <span className="min-w-0 flex-1 truncate text-sm text-foreground">{name}</span>
          <span className="shrink-0 text-xs text-subtle-foreground max-sm:hidden">{meta}</span>
        </li>
      ))}
    </ul>
  )
}

/** The whole frame: sidebar, title row, toolbar and the one scroller. Also used by the empty-view example. */
export function DriveFrame({ empty = false, initialLayout = 'grid' }: { empty?: boolean; initialLayout?: 'grid' | 'list' }) {
  const [view, setView] = useState('mine')
  const [layout, setLayout] = useState<'grid' | 'list'>(initialLayout)
  const [type, setType] = useState('all')
  const [people, setPeople] = useState('any')
  const [sort, setSort] = useState<SortValue>({ key: 'modified', dir: 'desc' })
  const items: ModuleSidebarItem[] = [
    { key: 'mine', label: 'My Drive', icon: HardDrive, active: view === 'mine', onSelect: () => setView('mine'), count: '8' },
    { key: 'shared', label: 'Shared with me', icon: Share2, active: view === 'shared', onSelect: () => setView('shared'), group: 1 },
    { key: 'recent', label: 'Recent', icon: Clock, active: view === 'recent', onSelect: () => setView('recent'), group: 1 },
    { key: 'favourites', label: 'Favourites', icon: Star, active: view === 'favourites', onSelect: () => setView('favourites'), group: 1 },
    { key: 'trash', label: 'Trash', icon: Trash2, active: view === 'trash', onSelect: () => setView('trash'), group: 2 },
  ]
  const title = items.find((i) => i.active)?.label ?? 'My Drive'
  return (
    <PageStage>
      <ModulePage className="min-h-0 flex-1">
        <ModuleSidebar width="page" title="Drive" module="files" navLabel="Drive views" items={items} action={<ModuleSidebarNewButton label="New" onClick={() => undefined} />} />
        <div className={MODULE_COLUMN}>
          <ModuleTitleRow title={title} summary={empty ? undefined : '8 files'} layout={layout} onLayout={setLayout} />
          <ModuleToolbar>
            <ModuleFilterRow>
              <QuickField label="Type" value={type} options={TYPE_OPTIONS} onChange={setType} />
              <QuickField label="People" value={people} options={PEOPLE_OPTIONS} onChange={setPeople} />
              <ModuleFilterDivider />
              <SortMenu
                fields={[
                  { key: 'modified', label: 'Last modified', kind: 'date' },
                  { key: 'name', label: 'Name', kind: 'text' },
                ]}
                value={sort}
                onChange={setSort}
              />
            </ModuleFilterRow>
          </ModuleToolbar>
          <div className={MODULE_SCROLL}>
            {empty ? (
              <EmptyState icon={<Folder />} title="This folder is empty" body="Drop files here or create something new." primary={{ label: 'New document', onClick: () => undefined }} />
            ) : (
              <Rows layout={layout} />
            )}
          </div>
        </div>
      </ModulePage>
    </PageStage>
  )
}

export default function Drive() {
  return <DriveFrame />
}
`;export{e as default};