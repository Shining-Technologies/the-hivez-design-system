var e=`import { Inbox } from 'lucide-react'

import { EmptyState } from '@/components/shared/feedback/EmptyState'

/** The title states what is TRUE; the body is one short line; the buttons are verb + noun. sm for a panel, md (default), lg for a whole page. */
export default function EmptyStateSizes() {
  return (
    <div className="grid w-full grid-cols-3 gap-4 max-lg:grid-cols-1">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} className="rounded-card border border-hairline bg-card">
          <EmptyState size={size} icon={<Inbox />} title="Nothing in your inbox" body="New messages and mentions land here." primary={{ label: 'Start a chat', onClick: () => undefined }} />
        </div>
      ))}
    </div>
  )
}
`;export{e as default};