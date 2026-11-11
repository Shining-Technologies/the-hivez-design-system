var e=`import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/ui/theme'

import { themeFamily } from '../../lib/tokens'

const GUIDE: Record<string, string> = {
  fast: 'fades, tooltips, swap cross-fade, backdrop',
  base: 'popovers, menus, origin-scale, fade-only windows',
  slow: 'slides (panes, gallery), docks, highlights',
  drawer: 'edge drawers',
  layout: 'FLIP reflow, width and height transitions',
  emphasized: 'container-transform enter',
  exit: 'container-transform and window close',
}

/** Durations are theme tokens (\`--motion-duration-*\`). Press Play: every bar runs on its own token, on the standard curve. */
export default function Durations() {
  const { themeId, scheme } = useTheme()
  const [on, setOn] = useState(false)
  const durations = themeFamily(themeId, scheme, '--motion-duration-')
  return (
    <div className="flex w-full flex-col gap-4">
      <Button variant="primary" className="w-fit" onClick={() => setOn((v) => !v)}>
        {on ? 'Reset' : 'Play'}
      </Button>
      <ul className="flex flex-col gap-3">
        {durations.map((d) => {
          const key = d.name.replace('--motion-duration-', '')
          return (
            <li key={d.name} className="grid grid-cols-[11rem_1fr] items-center gap-4 max-sm:grid-cols-1">
              <div className="flex flex-col">
                <code className="text-xs font-semibold">{d.name}</code>
                <span className="font-mono text-[11px] text-subtle-foreground">
                  {d.value} · {GUIDE[key] ?? ''}
                </span>
              </div>
              <div className="h-6 rounded-chip bg-muted p-1 [container-type:inline-size]">
                <div
                  className="h-full w-6 rounded-nested bg-brand transition-transform"
                  style={{
                    transform: on ? 'translateX(calc(100cqw - 1.5rem))' : 'none',
                    transitionDuration: \`var(\${d.name})\`,
                    transitionTimingFunction: 'var(--motion-ease-standard)',
                  }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
`;export{e as default};