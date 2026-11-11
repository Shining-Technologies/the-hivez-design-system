var e=`import { useState } from 'react'
import { LayoutGrid, List } from 'lucide-react'

import { Segmented } from '@/components/ui/segmented'

/** A value-driven switch between 2 to 4 short options: a radio group, not a tab widget. \`label\` names the group for assistive tech. */
export default function Segments() {
  const [when, setWhen] = useState<'day' | 'night'>('day')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  return (
    <div className="flex flex-col items-start gap-4">
      <Segmented
        label="Time of day"
        value={when}
        onChange={setWhen}
        options={[
          { value: 'day', label: 'Day' },
          { value: 'night', label: 'Night' },
        ]}
      />
      <Segmented
        label="View"
        value={view}
        onChange={setView}
        options={[
          { value: 'grid', label: 'Grid', icon: LayoutGrid },
          { value: 'list', label: 'List', icon: List },
        ]}
      />
    </div>
  )
}
`;export{e as default};