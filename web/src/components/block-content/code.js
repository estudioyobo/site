import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

function Code ({ language, code }) {
  if (!code) return null
  return (
    <SyntaxHighlighter language={language || 'text'} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  )
}

export default Code
