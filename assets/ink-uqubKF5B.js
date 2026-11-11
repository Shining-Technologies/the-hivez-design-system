var e=`/** Text takes one step of the ladder: foreground, muted, label-muted, subtle, disabled. Brand text is a link or an active state. */
export default function Ink() {
  return (
    <div className="flex flex-wrap gap-6 rounded-card border border-hairline bg-card p-4 text-body-lg">
      <span className="text-foreground">foreground</span>
      <span className="text-muted-foreground">muted-foreground</span>
      <span className="text-label-muted">label-muted</span>
      <span className="text-subtle-foreground">subtle-foreground</span>
      <span className="text-text-disabled">text-disabled</span>
      <span className="text-brand">brand</span>
      <span className="text-danger">danger</span>
    </div>
  )
}
`;export{e as default};