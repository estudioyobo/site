import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/hljs/darcula'

function Code ({ language, code }) {
  if (!code) return null
  return (
    <SyntaxHighlighter language={language || 'text'} showLineNumbers wrapLines style={darcula}>
      {code}
    </SyntaxHighlighter>
  )
}

export default Code
