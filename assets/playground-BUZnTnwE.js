var e=`import { useState } from 'react'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

const VARIANTS = ['primary', 'secondary', 'ghost', 'destructive', 'link'] as const
const SIZES = ['sm', 'md', 'lg', 'icon-sm', 'icon', 'icon-lg'] as const

/** Pick a combination; the JSX that produces it is printed underneath. */
export default function Playground() {
  const [variant, setVariant] = useState<(typeof VARIANTS)[number]>('primary')
  const [size, setSize] = useState<(typeof SIZES)[number]>('md')
  const [disabled, setDisabled] = useState(false)
  const [label, setLabel] = useState('New item')
  const iconOnly = size.startsWith('icon')
  const props = [variant !== 'primary' && \`variant="\${variant}"\`, size !== 'md' && \`size="\${size}"\`, disabled && 'disabled', iconOnly && 'aria-label="New item"']
    .filter(Boolean)
    .join(' ')
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex min-h-24 items-center justify-center rounded-control border border-dashed border-default p-6">
        <Button variant={variant} size={size} disabled={disabled} aria-label={iconOnly ? label : undefined}>
          <Plus aria-hidden />
          {!iconOnly && label}
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <label className="flex flex-col gap-1.5 text-caption text-muted-foreground">
          variant
          <Select value={variant} onValueChange={(v) => setVariant(v as (typeof VARIANTS)[number])}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {VARIANTS.map((v) => (
                <SelectItem key={v} value={v}>
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
        <label className="flex flex-col gap-1.5 text-caption text-muted-foreground">
          size
          <Select value={size} onValueChange={(v) => setSize(v as (typeof SIZES)[number])}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SIZES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
        <label className="flex flex-col gap-1.5 text-caption text-muted-foreground">
          label
          <Input value={label} onChange={(e) => setLabel(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1.5 text-caption text-muted-foreground">
          disabled
          <Switch checked={disabled} onCheckedChange={setDisabled} aria-label="disabled" />
        </label>
      </div>
      <code className="overflow-x-auto rounded-control bg-muted px-3 py-2 font-mono text-caption whitespace-pre">{\`<Button\${props ? \` \${props}\` : ''}>…</Button>\`}</code>
    </div>
  )
}
`;export{e as default};