var e=`import { Copy, Star, Trash2 } from 'lucide-react'

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from '@/components/ui/context-menu'

/** Right-click (or long-press) the tile. */
export default function ContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-32 w-72 max-w-full items-center justify-center rounded-card border border-dashed border-strong bg-card text-sm text-muted-foreground">
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem>
          <Star aria-hidden /> Favourite <ContextMenuShortcut>S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy aria-hidden /> Copy link
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 aria-hidden /> Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
`;export{e as default};