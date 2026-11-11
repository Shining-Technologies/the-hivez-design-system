var e=`import { FileText } from 'lucide-react'

import { FileCard } from '@/features/files/surface/FileCard'
import { FolderCard } from '@/features/files/surface/FolderCard'

import { FILES, FOLDERS } from '../../lib/sampleData'

const MENU = [
  { key: 'open', label: 'Open', icon: FileText, onSelect: () => undefined },
  { key: 'rename', label: 'Rename', icon: FileText, onSelect: () => undefined, shortcut: 'F2' },
  { key: 'delete', label: 'Move to trash', icon: FileText, onSelect: () => undefined, danger: true, separatorBefore: true },
]

/**
 * The real Drive cards, fed made-up rows. Click to select; the ⋯ appears on hover; folders are drop targets. The files are
 * kinds with no poster, so no thumbnail is requested (a PDF or slide deck would ask the server for one).
 */
export default function DriveCards() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
        {FOLDERS.map((f) => (
          <FolderCard key={f.id} folder={f} actions={MENU} onOpen={() => undefined} onSelect={() => undefined} />
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
        {FILES.map((f, i) => (
          <FileCard key={f.id} entry={f} selfId="u1" selected={i === 1} actions={MENU} onOpen={() => undefined} onSelect={() => undefined} />
        ))}
      </div>
    </div>
  )
}
`;export{e as default};