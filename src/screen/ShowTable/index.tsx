import React from 'react'
import { personList } from 'screen/Search'
interface tableList{
    id: number,
    name: string,
    personId: number,
    organization: string,
    created: number
}
interface showTableParams{
    tableList: tableList[],
    personList:personList[]
}
export default function ShowTable({tableList,personList}:showTableParams) {
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
                          <td>{personList.filter(i=>i.id===item.personId)[0]?.name||'未知' }</td>
                      </tr>)
                  }
              </tbody>
          </table>
    </div>
  )
}
