var e=`import { Info, Star } from 'lucide-react'

import { Tip } from '@/components/shared/Tip'
import { Button } from '@/components/ui/button'

/**
 * Every hover label goes through \`<Tip label>\`. It sits OUTSIDE a trigger and is hover-only, so an icon-only control also
 * needs its own \`aria-label\`. Hover or focus the controls. Filter controls carry no tooltip.
 */
export default function Tips() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Tip label="Add to favourites">
        <Button variant="ghost" size="icon" aria-label="Add to favourites">
          <Star />
        </Button>
      </Tip>
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tip key={side} label={\`Tip on the \${side}\`} side={side}>
          <Button variant="secondary">{side}</Button>
        </Tip>
      ))}
      <Tip
        label={
          <span>
            Rich <strong>content</strong> is allowed for the few badges that need it
          </span>
        }
      >
        <Button variant="secondary" size="icon" aria-label="About tips">
          <Info />
        </Button>
      </Tip>
    </div>
  )
}
`;export{e as default};