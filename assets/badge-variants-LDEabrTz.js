var e=`import { Badge } from '@/components/ui/badge'

/** Status and count chips. brand is the selected / active wash; success, warning and danger are tints with their own ink. */
export default function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {(['default', 'secondary', 'outline', 'brand', 'success', 'warning', 'danger', 'destructive'] as const).map((v) => (
        <Badge key={v} variant={v}>
          {v}
        </Badge>
      ))}
    </div>
  )
}
`;export{e as default};