var e=`import { Button } from '@/components/ui/button'

/** Brand text with an underline on hover. \`asChild\` turns any variant into a router link. */
export default function LinkButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="link">Read the guide</Button>
      <Button asChild variant="secondary">
        <a href="#settings">Settings</a>
      </Button>
    </div>
  )
}
`;export{e as default};