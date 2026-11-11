var e=`import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  CircleCheck,
  Clock,
  Copy,
  Download,
  Eye,
  EyeOff,
  File,
  Folder,
  HardDrive,
  Info,
  LayoutGrid,
  List,
  Loader2,
  Lock,
  Mic,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Settings,
  Share2,
  SlidersHorizontal,
  Star,
  Trash2,
  Upload,
  Users,
  UsersRound,
  Video,
  X,
  type LucideIcon,
} from 'lucide-react'

// A curated sample of the Lucide glyphs the product leans on. Icons are imported by name (never the whole set), so a page
// ships only what it draws.
const SAMPLE: [string, LucideIcon][] = [
  ['Plus', Plus],
  ['X', X],
  ['Check', Check],
  ['Search', Search],
  ['Pencil', Pencil],
  ['Trash2', Trash2],
  ['Copy', Copy],
  ['Share2', Share2],
  ['Download', Download],
  ['Upload', Upload],
  ['Star', Star],
  ['Settings', Settings],
  ['SlidersHorizontal', SlidersHorizontal],
  ['MoreHorizontal', MoreHorizontal],
  ['ChevronDown', ChevronDown],
  ['ChevronRight', ChevronRight],
  ['ChevronsUpDown', ChevronsUpDown],
  ['ArrowUp', ArrowUp],
  ['ArrowDown', ArrowDown],
  ['LayoutGrid', LayoutGrid],
  ['List', List],
  ['Folder', Folder],
  ['File', File],
  ['HardDrive', HardDrive],
  ['Users', Users],
  ['UsersRound', UsersRound],
  ['Calendar', Calendar],
  ['Clock', Clock],
  ['Bell', Bell],
  ['MessageSquare', MessageSquare],
  ['Mic', Mic],
  ['Video', Video],
  ['Eye', Eye],
  ['EyeOff', EyeOff],
  ['Lock', Lock],
  ['Info', Info],
  ['AlertTriangle', AlertTriangle],
  ['CircleCheck', CircleCheck],
  ['Loader2', Loader2],
]

export default function LucideSample() {
  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fill,minmax(7.5rem,1fr))] gap-2">
      {SAMPLE.map(([name, Icon]) => (
        <li key={name} className="flex flex-col items-center gap-2 rounded-control border border-hairline bg-card px-2 py-3">
          <Icon className="size-5 text-foreground" aria-hidden />
          <span className="font-mono text-[11px] text-subtle-foreground">{name}</span>
        </li>
      ))}
    </ul>
  )
}
`;export{e as default};