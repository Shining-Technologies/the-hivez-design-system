var e=`import { AlertTriangle, CircleCheck, Info } from 'lucide-react'

/** An icon is as muted as the text beside it; colour comes from a token class. */
export default function Inks() {
  return (
    <div className="flex items-center gap-5">
      <Info className="size-5 text-foreground" aria-hidden />
      <Info className="size-5 text-muted-foreground" aria-hidden />
      <Info className="size-5 text-brand" aria-hidden />
      <CircleCheck className="size-5 text-success" aria-hidden />
      <AlertTriangle className="size-5 text-warning" aria-hidden />
      <AlertTriangle className="size-5 text-danger" aria-hidden />
    </div>
  )
}
`;export{e as default};