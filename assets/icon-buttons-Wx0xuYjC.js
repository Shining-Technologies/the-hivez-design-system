var e=`import { Settings } from 'lucide-react'

import { Tip } from '@/components/shared/Tip'
import { Button } from '@/components/ui/button'

const ICON_SIZES = ['icon-sm', 'icon', 'icon-lg'] as const

/** Icon-only buttons carry an \`aria-label\`; the \`<Tip>\` sits OUTSIDE the trigger. */
export default function IconButtons() {
  return (
    <div className="flex flex-col gap-4">
      {(['ghost', 'secondary', 'primary', 'destructive'] as const).map((v) => (
        <div key={v} className="flex items-center gap-3">
          <span className="w-20 font-mono text-[11px] text-subtle-foreground">{v}</span>
          {ICON_SIZES.map((s) => (
            <Tip key={s} label={\`Settings (\${s})\`}>
              <Button variant={v} size={s} aria-label={\`Settings (\${s})\`}>
                <Settings />
              </Button>
            </Tip>
          ))}
        </div>
      ))}
    </div>
  )
}
`;export{e as default};