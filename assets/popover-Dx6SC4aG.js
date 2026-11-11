var e=`import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

/** A floating panel anchored to its trigger; here with a field-system input inside. */
export default function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Set a status</Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72">
        <FormField label="Status" description="Visible on your avatar." value="In a focus block" onChange={() => undefined} />
      </PopoverContent>
    </Popover>
  )
}
`;export{e as default};