var e=`import { Button } from '@/components/ui/button'
import { notifyError, notifyInfo, notifySuccess, notifyWarning } from '@/components/ui/notify'

/**
 * Every toast goes through the \`notify*\` helpers (never sonner directly): one branded card, one corner (the user's
 * preference), a policy that decides the surface. Press each.
 */
export default function Toasts() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="secondary" onClick={() => notifySuccess('Board saved')}>
        Success
      </Button>
      <Button variant="secondary" onClick={() => notifyInfo('Link copied', { description: 'Anyone in the org can open it.' })}>
        Info
      </Button>
      <Button variant="secondary" onClick={() => notifyWarning('You are about to reach the guest limit')}>
        Warning
      </Button>
      <Button variant="secondary" onClick={() => notifyError('Could not save', { description: 'Check your connection and try again.' })}>
        Error
      </Button>
      <Button variant="secondary" onClick={() => notifySuccess('Moved to the trash', { action: { label: 'Undo', onClick: () => notifyInfo('Restored') } })}>
        With undo
      </Button>
    </div>
  )
}
`;export{e as default};