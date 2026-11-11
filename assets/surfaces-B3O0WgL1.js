var e=`import { QUIET_CARD, TILE } from '@/components/shared/collection/collectionStyles'
import { cn } from '@/lib/utils'

/**
 * \`TILE\` is THE tile surface (a filled step above the content, no resting outline, a stronger fill on hover): Drive,
 * Meetings and Whiteboard tiles. \`QUIET_CARD\` is the outlined card of the quiet grids (spaces, projects, boards): a 1px
 * default edge on bg-card, a stronger edge on hover. Both are class constants from \`components/shared/collection/collectionStyles.ts\`.
 */
export default function Surfaces() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
        {['Roadmap', 'Retro notes', 'Hiring'].map((n) => (
          <div key={n} className={cn(TILE, 'flex h-28 flex-col justify-end p-3')}>
            <span className="text-sm font-medium">{n}</span>
            <span className="font-mono text-[11px] text-subtle-foreground">TILE · hover me</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
        {['Design', 'Engineering', 'Support'].map((n) => (
          <div key={n} className={cn(QUIET_CARD, 'flex h-28 flex-col justify-end p-3')}>
            <span className="text-sm font-medium">{n}</span>
            <span className="font-mono text-[11px] text-subtle-foreground">QUIET_CARD · hover me</span>
          </div>
        ))}
      </div>
    </div>
  )
}
`;export{e as default};