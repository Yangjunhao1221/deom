import React from 'react'
export interface personList{
  id: number,
  name:string
}
interface SearchParams{
  setParams: (params:SearchParams['params']) => void,
  personList: personList[],
   params: {
    name: string,
    personId:string
    }
}
export default function Search ({setParams,personList,params}:SearchParams) {
  return (
      <div>
          <input type="text" onChange={(e) => setParams({ ...params, name: e.target.value })} />
          <select name="" id="" onChange={e=>setParams({...params,personId:e.target.value})}>
              <option value="" >全部</option>
             { personList.map(item=> <option value={item.id} key={item.id}>{item.name}</option>)}
          </select>
          
    </div>
  )
}
