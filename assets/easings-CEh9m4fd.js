var e=`import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/ui/theme'

import { themeFamily } from '../../lib/tokens'

/** An easing utility (\`ease-standard\`, \`ease-decelerate\`, …) names the curve. Same 640ms duration, different curves. */
export default function Easings() {
  const { themeId, scheme } = useTheme()
  const [on, setOn] = useState(false)
  const eases = themeFamily(themeId, scheme, '--motion-ease-')
  return (
    <div className="flex w-full flex-col gap-4">
      <Button variant="primary" className="w-fit" onClick={() => setOn((v) => !v)}>
        {on ? 'Reset' : 'Play'}
      </Button>
      <ul className="flex flex-col gap-3">
        {eases.map((e) => (
          <li key={e.name} className="grid grid-cols-[11rem_1fr] items-center gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col">
              <code className="text-xs font-semibold">{e.name}</code>
              <span className="font-mono text-[11px] text-subtle-foreground">{e.value}</span>
            </div>
            <div className="h-6 rounded-chip bg-muted p-1 [container-type:inline-size]">
              <div
                className="h-full w-6 rounded-nested bg-brand transition-transform"
                style={{
                  transform: on ? 'translateX(calc(100cqw - 1.5rem))' : 'none',
                  transitionDuration: '640ms',
                  transitionTimingFunction: \`var(\${e.name})\`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
`;export{e as default};