var e=`import { Button } from '@/components/ui/button'

/** primary is the one main action; secondary every other action; ghost is chromeless; destructive deletes; link sits inside text. */
export default function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="link">link</Button>
    </div>
  )
}
`;export{e as default};