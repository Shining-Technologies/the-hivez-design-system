var e=`import { SpaceCard } from '@/features/docs/page/SpaceCard'
import type { Space } from '@/features/docs/types'

import { SPACE } from '../../lib/sampleData'

/** The Docs space card (\`QUIET_CARD\`): avatar, name, page count, a face stack, a star on hover. */
export default function SpaceCards() {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
      <SpaceCard space={SPACE} onSelect={() => undefined} onToggleStar={() => undefined} />
      <SpaceCard space={{ ...SPACE, id: 's2', name: 'Engineering wiki', starred: true }} onSelect={() => undefined} onToggleStar={() => undefined} />
      <SpaceCard space={{ ...SPACE, id: 's3', name: 'Private notes', visibility: 'private' as Space['visibility'], memberCount: 1 }} onSelect={() => undefined} onToggleStar={() => undefined} />
    </div>
  )
}
`;export{e as default};