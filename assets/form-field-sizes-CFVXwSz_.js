var e=`import { useState } from 'react'

import { FormField } from '@/components/ui/form-field'
import type { FieldSize } from '@/components/ui/field-variants'

const SIZES: FieldSize[] = ['sm', 'md', 'lg']

/** FormField defaults to md on a page and to lg inside a dialog (DialogContent provides it). Pass \`size\` to override. */
export default function FormFieldSizes() {
  const [name, setName] = useState('Design review')
  return (
    <div className="grid w-full max-w-3xl grid-cols-3 gap-4 max-md:grid-cols-1">
      {SIZES.map((s) => (
        <FormField key={s} size={s} label={\`Size \${s}\`} value={name} onChange={setName} />
      ))}
    </div>
  )
}
`;export{e as default};