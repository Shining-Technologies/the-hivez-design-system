var e=`import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

const VARIANTS = ['primary', 'secondary', 'ghost', 'destructive', 'link'] as const
const SIZES = ['sm', 'md', 'lg'] as const

/** Every variant at every size. */
export default function Matrix() {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="grid w-fit grid-cols-[repeat(4,max-content)] items-center gap-x-6 gap-y-4">
        <span />
        {SIZES.map((s) => (
          <span key={s} className="font-mono text-[11px] text-subtle-foreground">
            {s}
          </span>
        ))}
        {VARIANTS.map((v) => (
          <div key={v} className="contents">
            <span className="font-mono text-[11px] text-subtle-foreground">{v}</span>
            {SIZES.map((s) => (
              <Button key={s} variant={v} size={s}>
                <Plus aria-hidden />
                New item
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
`;export{e as default};