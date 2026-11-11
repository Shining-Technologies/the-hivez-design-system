var e=`import { ModuleFilterDivider } from '@/components/shared/layout/ModuleFilterDivider'

/** The pipe between the filters and the sort. Render it only when at least one filter chip precedes the sort. */
export default function FilterDivider() {
  return (
    <div className="flex h-7.5 items-center gap-3">
      <span className="font-mono text-[11px] text-subtle-foreground">Filters</span>
      <ModuleFilterDivider />
      <span className="font-mono text-[11px] text-subtle-foreground">Sort</span>
    </div>
  )
}
`;export{e as default};