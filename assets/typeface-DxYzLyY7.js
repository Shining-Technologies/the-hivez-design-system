var e=`import { useTheme } from '@/lib/ui/theme'

import { themeTokens } from '../../lib/tokens'

const SAMPLE = 'The quick brown fox jumps over the lazy dog'

/** The typeface is one theme token, \`--font-theme\`, read by \`font-sans\`. Change the theme in the top bar. */
export default function Typeface() {
  const { themeId, scheme } = useTheme()
  const font = themeTokens(themeId, scheme).get('--font-theme') ?? ''
  return (
    <div className="flex w-full flex-col gap-1 rounded-card border border-hairline bg-card p-4">
      <span className="text-h1">{SAMPLE}</span>
      <span className="font-mono text-[11px] text-subtle-foreground">--font-theme: {font}</span>
      <span className="mt-3 font-mono text-body">{SAMPLE} (font-mono, Geist Mono)</span>
    </div>
  )
}
`;export{e as default};