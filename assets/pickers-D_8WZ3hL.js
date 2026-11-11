var e=`import { useState } from 'react'

import { DatePicker } from '@/components/ui/date-picker'
import { DateTimePicker } from '@/components/ui/datetime-picker'
import type { FieldSize } from '@/components/ui/field-variants'
import { TimePicker } from '@/components/ui/time-picker'

const SIZES: FieldSize[] = ['sm', 'md', 'lg']

/** The triggers are fields; the panels are the Material-style calendar and clock dial. Never a native date or time input. */
export default function Pickers() {
  const [date, setDate] = useState('2026-11-11')
  const [time, setTime] = useState('09:30')
  const [dt, setDt] = useState('2026-11-11T09:30')
  return (
    <div className="grid w-full max-w-xl grid-cols-[3rem_repeat(3,minmax(0,1fr))] items-center gap-x-3 gap-y-3 max-sm:grid-cols-1 max-sm:gap-y-2">
      {SIZES.map((s) => (
        <div key={s} className="contents">
          <span className="font-mono text-[11px] text-subtle-foreground">{s}</span>
          <DatePicker size={s} value={date} onChange={setDate} aria-label={\`Date \${s}\`} />
          <TimePicker size={s} value={time} onChange={setTime} aria-label={\`Time \${s}\`} />
          <DateTimePicker size={s} value={dt} onChange={setDt} />
        </div>
      ))}
    </div>
  )
}
`;export{e as default};