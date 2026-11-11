var e=`import { MODULE_BODY_PAGE, MODULE_BODY_WINDOW, MODULE_FRAME, MODULE_SIDEBAR_PAGE, MODULE_SIDEBAR_WINDOW } from '@/components/shared/layout/moduleFrame'

/** The module page's paddings are constants in components/shared/layout/moduleFrame.ts; a module never writes its own. */
export default function ModuleFrameSpacing() {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-card border border-hairline bg-card p-4">
      {(
        [
          ['MODULE_FRAME', MODULE_FRAME, 'the outer frame: 12px, edge to edge on a phone'],
          ['MODULE_BODY_PAGE', MODULE_BODY_PAGE, 'the content column on a page'],
          ['MODULE_BODY_WINDOW', MODULE_BODY_WINDOW, 'the content column in a window'],
          ['MODULE_SIDEBAR_PAGE', MODULE_SIDEBAR_PAGE, 'the sidebar on a page'],
          ['MODULE_SIDEBAR_WINDOW', MODULE_SIDEBAR_WINDOW, 'the sidebar in a window'],
        ] as const
      ).map(([name, value, use]) => (
        <div key={name} className="grid grid-cols-[13rem_1fr] gap-3 max-sm:grid-cols-1">
          <code className="text-xs font-semibold">{name}</code>
          <span className="text-xs text-muted-foreground">
            <span className="font-mono text-subtle-foreground">{value}</span> · {use}
          </span>
        </div>
      ))}
    </div>
  )
}
`;export{e as default};