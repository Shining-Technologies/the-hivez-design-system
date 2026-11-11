var e=`import { useState } from 'react'

import { Switch } from '@/components/ui/switch'

/** On is brand. Name it with a visible label or an \`aria-label\`. */
export default function Switches() {
  const [on, setOn] = useState(true)
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-3 text-body">
        <Switch checked={on} onCheckedChange={setOn} />
        Notify me
      </label>
      <label className="flex items-center gap-3 text-body text-muted-foreground">
        <Switch disabled checked={false} />
        Disabled
      </label>
    </div>
  )
}
`;export{e as default};