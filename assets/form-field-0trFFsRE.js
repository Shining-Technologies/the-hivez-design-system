var e=`import { useState } from 'react'

import { FormField } from '@/components/ui/form-field'

const PRIORITIES = ['Low', 'Medium', 'High', 'Urgent']

/** One label style (12px medium soft ink), then the control, then ONE row holding the hint, the error and the counter. */
export default function FormFields() {
  const [name, setName] = useState('Design review')
  const [bio, setBio] = useState('Weekly, in the Design room.')
  const [bad, setBad] = useState('x')
  const [pick, setPick] = useState('Medium')
  const [on, setOn] = useState(true)
  const [ok, setOk] = useState(false)
  return (
    <div className="grid w-full max-w-3xl grid-cols-2 gap-5 max-md:grid-cols-1">
      <FormField label="Name" description="Shown to everyone in the room." value={name} onChange={setName} maxLength={40} counter />
      <FormField label="Name" required error="Names need at least 3 characters." value={bad} onChange={setBad} />
      <FormField label="Priority" optional type="select" value={pick} onChange={setPick} options={PRIORITIES.map((p) => ({ value: p, label: p }))} />
      <FormField type="textarea" label="About" description="Markdown is not supported here." value={bio} onChange={setBio} rows={3} maxLength={120} counter />
      <FormField type="switch" label="Notify me" description="Email and in-app." checked={on} onChange={setOn} />
      <FormField type="checkbox" label="Remember this choice" checked={ok} onChange={setOk} />
    </div>
  )
}
`;export{e as default};