var e=`import { ChevronDown, Download, Share2, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

/** Glyph size follows the button size; put no \`size-*\` on an icon. */
export default function WithIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="secondary">
        <Share2 aria-hidden />
        Share
      </Button>
      <Button variant="secondary">
        <Download aria-hidden />
        Download
      </Button>
      <Button variant="destructive">
        <Trash2 aria-hidden />
        Delete
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="primary">
            New <ChevronDown aria-hidden />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Document</DropdownMenuItem>
          <DropdownMenuItem>Whiteboard</DropdownMenuItem>
          <DropdownMenuItem>Folder</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
`;export{e as default};