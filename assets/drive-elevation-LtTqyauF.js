var e=`import { useTheme } from '@/lib/ui/theme'
import { cn } from '@/lib/utils'

import { themeFamily } from '../../lib/tokens'

const DRIVE_UTILITIES = [
  { stem: 'page', cls: 'shadow-drive-page' },
  { stem: 'menu', cls: 'shadow-drive-menu' },
  { stem: 'sheet', cls: 'shadow-drive-sheet' },
  { stem: 'dialog', cls: 'shadow-drive-dialog' },
  { stem: 'toast', cls: 'shadow-drive-toast' },
  { stem: 'segment', cls: 'shadow-drive-segment' },
  { stem: 'brand', cls: 'shadow-drive-brand' },
] as const

/** From the Drive redesign; used by module pages, menus, sheets, dialogs and toasts. */
export default function DriveElevation() {
  const { themeId, scheme } = useTheme()
  const decl = new Map(themeFamily(themeId, scheme, '--drive-elevation-').map((d) => [d.name, d.value]))
  return (
    <div className="flex flex-wrap gap-6">
      {DRIVE_UTILITIES.map((e) => (
        <div key={e.cls} className="flex w-44 flex-col gap-2">
          <div className={cn('h-20 rounded-card border border-hairline bg-card', e.cls)} />
          <code className="text-xs font-semibold">{e.cls}</code>
          <span className="break-words font-mono text-[11px] text-subtle-foreground">{decl.get(\`--drive-elevation-\${e.stem}\`)}</span>
        </div>
      ))}
    </div>
  )
}
`;export{e as default};