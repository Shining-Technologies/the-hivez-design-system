var e=`import { Plus } from 'lucide-react'

import { PrimaryButton } from '@/components/shared/collection/PrimaryButton'

/** \`PrimaryButton\` is \`<Button variant="primary">\` for the collection homes: md by default, lg for empty-state calls to action, \`header\` for a collection header (an icon square on a phone). */
export default function PrimaryButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <PrimaryButton>
        <Plus aria-hidden />
        New board
      </PrimaryButton>
      <PrimaryButton size="lg">
        <Plus aria-hidden />
        New board
      </PrimaryButton>
      <PrimaryButton header>
        <Plus aria-hidden />
        <span>New board</span>
      </PrimaryButton>
    </div>
  )
}
`;export{e as default};