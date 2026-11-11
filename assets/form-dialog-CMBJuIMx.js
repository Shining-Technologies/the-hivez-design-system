var e=`import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { FormDialog } from '@/components/ui/form-dialog'
import { FormField } from '@/components/ui/form-field'
import { notifySuccess } from '@/components/ui/notify'

/**
 * Fill in fields and submit: it owns the form (Enter submits), the busy and error plumbing, and a ghost lg Cancel beside a
 * primary lg submit. Throwing from \`onSubmit\` keeps it open and shows the message. Try a name shorter than three characters.
 */
export default function FormDialogExample() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('Design review')
  const [notes, setNotes] = useState('')
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Rename room
      </Button>
      <FormDialog
        open={open}
        onOpenChange={setOpen}
        title="Rename room"
        description="Everyone in the room sees the new name."
        submitText="Save"
        submitDisabled={name.trim() === ''}
        onSubmit={async () => {
          await new Promise((r) => setTimeout(r, 600))
          if (name.length < 3) throw new Error('Names need at least 3 characters.')
          notifySuccess('Room renamed')
        }}
      >
        <FormField label="Name" required value={name} onChange={setName} maxLength={40} counter />
        <FormField type="textarea" label="Description" optional value={notes} onChange={setNotes} rows={3} />
      </FormDialog>
    </>
  )
}
`;export{e as default};