var e=`import { Folder, Search } from 'lucide-react'

import { EmptyState } from '@/components/shared/feedback/EmptyState'
import { Button } from '@/components/ui/button'

/** A search with no results (a secondary action only), and an empty collection (a custom primary button). */
export default function EmptyStateVariants() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 max-lg:grid-cols-1">
      <div className="rounded-card border border-hairline bg-card">
        <EmptyState icon={<Search />} title="No results for “roadmap”" body="Try another word, or clear the filters." secondary={{ label: 'Clear filters', onClick: () => undefined }} />
      </div>
      <div className="rounded-card border border-hairline bg-card">
        <EmptyState
          icon={<Folder />}
          title="No folders yet"
          body="Folders keep related files together."
          primary={
            <Button variant="primary" size="sm">
              Create a folder
            </Button>
          }
          secondary={{ label: 'Upload files', onClick: () => undefined }}
        />
      </div>
    </div>
  )
}
`;export{e as default};