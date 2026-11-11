var e=`import { Button } from '@/components/ui/button'

/** sm 28px, md 36px (the default), lg 40px. The field system uses the same three heights. */
export default function Sizes() {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <Button variant="secondary" size="sm">sm</Button>
      <Button variant="secondary" size="md">md</Button>
      <Button variant="secondary" size="lg">lg</Button>
    </div>
  )
}
`;export{e as default};