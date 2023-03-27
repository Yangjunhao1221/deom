import React from 'react'

export default function ShowTable({tableList,personList}) {
  return (
      <div>
          <table>
              <thead>
                  <tr>
                      <th>部门</th>
                      <th>姓名</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      tableList.map(item => <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{personList.filter(i=>i.id===item.personId)[0]?.name }</td>
                      </tr>)
                  }
              </tbody>
          </table>
    </div>
  )
}
