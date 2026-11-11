var e=`import { MODULE_ICON } from '@/components/shared/layout/moduleIcons'

/** MODULE_ICON in components/shared/layout/moduleIcons.ts: the same glyph on the rail and in the module's sidebar header. */
export default function ModuleIcons() {
  return (
    <ul className="flex w-full flex-wrap gap-6 rounded-card border border-hairline bg-card p-4">
      {Object.entries(MODULE_ICON).map(([key, Icon]) => (
        <li key={key} className="flex flex-col items-center gap-2">
          <Icon className="size-6 text-foreground" aria-hidden />
          <span className="font-mono text-[11px] text-subtle-foreground">{key}</span>
        </li>
      ))}
    </ul>
  )
}
`;export{e as default};