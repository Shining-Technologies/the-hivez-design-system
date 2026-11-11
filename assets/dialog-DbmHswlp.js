var e=`import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FormField } from '@/components/ui/form-field'

/** The primitive: header, body, footer. Its fields default to lg (40px) inside it. */
export default function DialogExample() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('amina@example.test')
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite to the room</DialogTitle>
            <DialogDescription>People you invite can enter the room without knocking.</DialogDescription>
          </DialogHeader>
          <FormField label="Email" value={email} onChange={setEmail} />
          <DialogFooter>
            <Button variant="ghost" size="lg" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="lg" onClick={() => setOpen(false)}>
              Send invite
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
`;export{e as default};