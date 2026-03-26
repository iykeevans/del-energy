import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

type LexicalHtmlProps = {
  data: unknown
  className?: string
}

export function LexicalHtml({ data, className }: LexicalHtmlProps) {
  if (!data || typeof data !== 'object') return null

  let html: string
  try {
    html = convertLexicalToHTML({
      data: data as Parameters<typeof convertLexicalToHTML>[0]['data'],
    })
  } catch {
    return null
  }

  if (!html) return null
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
