var e=`import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

/** Checked, unchecked and indeterminate (a partial selection). */
export default function Checkboxes() {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-3 text-body">
        <Checkbox checked={a} onCheckedChange={(v) => setA(v === true)} />
        Remember this choice
      </label>
      <label className="flex items-center gap-3 text-body">
        <Checkbox checked={b} onCheckedChange={(v) => setB(v === true)} />
        Send a copy to me
      </label>
      <label className="flex items-center gap-3 text-body">
        <Checkbox checked="indeterminate" />
        Select all (some selected)
      </label>
      <label className="flex items-center gap-3 text-body text-muted-foreground">
        <Checkbox disabled />
        Disabled
      </label>
    </div>
  )
}
`;export{e as default};