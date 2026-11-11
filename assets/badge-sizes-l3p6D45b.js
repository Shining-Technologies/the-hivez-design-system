var e=`import { Check, Lock, Star } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

/** Two sizes, an optional leading glyph, and a \`spinner\` for a busy state. */
export default function BadgeSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="brand">Default size</Badge>
      <Badge variant="brand" size="sm">
        sm
      </Badge>
      <Badge variant="success">
        <Check aria-hidden /> Done
      </Badge>
      <Badge variant="secondary">
        <Lock aria-hidden /> Private
      </Badge>
      <Badge variant="outline">
        <Star aria-hidden /> 12
      </Badge>
      <Badge variant="warning" spinner>
        Saving…
      </Badge>
    </div>
  )
}
`;export{e as default};