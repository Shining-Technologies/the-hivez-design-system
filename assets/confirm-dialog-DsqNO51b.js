var e=`import { useState } from 'react'
import { Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ConfirmDialog } from '@/components/ui/confirm-dialog'
import { notifyInfo } from '@/components/ui/notify'

/** Every delete goes through it first; never delete on a single click. \`destructive\` adds the warning icon and a destructive confirm. */
export default function ConfirmDialogs() {
  const [confirm, setConfirm] = useState(false)
  const [danger, setDanger] = useState(false)
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" onClick={() => setConfirm(true)}>
          Confirm
        </Button>
        <Button variant="destructive" onClick={() => setDanger(true)}>
          <Trash2 aria-hidden />
          Delete board
        </Button>
      </div>
      <ConfirmDialog open={confirm} onOpenChange={setConfirm} title="Leave this meeting?" description="You can rejoin from the meetings list." confirmText="Leave" onConfirm={() => undefined} />
      <ConfirmDialog
        open={danger}
        onOpenChange={setDanger}
        destructive
        title="Delete Roadmap board?"
        description="Its 24 cards go to the trash for 30 days."
        confirmText="Delete board"
        onConfirm={() => notifyInfo('Board moved to the trash')}
      />
    </>
  )
}
`;export{e as default};