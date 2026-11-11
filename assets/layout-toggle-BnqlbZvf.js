var e=`import { useState } from 'react'

import { LayoutToggle } from '@/components/shared/collection/LayoutToggle'

/** One outlined pill split by a rule, the active half filled. md (36px, level with md buttons) and sm (28px, level with sm buttons). */
export default function LayoutToggles() {
  const [layout, setLayout] = useState<'grid' | 'list'>('list')
  return (
    <div className="flex flex-wrap items-center gap-6">
      <LayoutToggle value={layout} onChange={setLayout} />
      <LayoutToggle value={layout} onChange={setLayout} size="sm" />
      <span className="font-mono text-[11px] text-subtle-foreground">value: {layout}</span>
    </div>
  )
}
`;export{e as default};