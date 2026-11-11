var e=`import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

const VARIANTS = ['primary', 'secondary', 'ghost', 'destructive'] as const

/**
 * \`disabled\` drops the pointer and halves the opacity; a disabled primary also loses its metallic fill, edge and glow.
 * There is no \`loading\` prop: a busy button is \`disabled\` with a \`<Spinner />\` in place of the glyph and a progressive label.
 * Hover and Tab into the first row to see the hover and focus recipes.
 */
export default function States() {
  return (
    <div className="flex flex-col gap-4">
      {(
        [
          ['Resting', false, false],
          ['Disabled', true, false],
          ['Loading', true, true],
        ] as const
      ).map(([title, disabled, loading]) => (
        <div key={title} className="flex flex-wrap items-center gap-3">
          <span className="w-16 font-mono text-[11px] text-subtle-foreground">{title}</span>
          {VARIANTS.map((v) => (
            <Button key={v} variant={v} disabled={disabled}>
              {loading ? <Spinner /> : <Plus aria-hidden />}
              {loading ? 'Saving…' : 'New item'}
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
}
`;export{e as default};