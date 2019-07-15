import React from 'react'

function Table (props) {
  return (
    <table>
      {props.rows.map(row => (
        <tr key={row._key}>
          {row.cells.map(cell => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default Table
