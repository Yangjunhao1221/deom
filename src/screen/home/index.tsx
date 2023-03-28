import React, { useEffect, useState } from 'react'
import Search from 'screen/Search'
import ShowTable from 'screen/ShowTable'
import * as qs from 'qs'
import { clearObj,useMount,useDeBounces } from 'utils'

const baseUrl = process.env.REACT_APP_BASEURL
export default function Home () {
    const [params, setParams] = useState({
        personId: '',
        name:''
    })
    const [personList, setPersonList] = useState([])
    const [tableList, setTableList] = useState([])
    const useDeBouncesValue=useDeBounces(params,500)
    useMount(() => {
        fetch(`${baseUrl}/users` ).then(async response => {
            setPersonList(await response.json())    
      })
    })
    useEffect(() => {
     fetch(`${baseUrl}/projects?${qs.stringify(clearObj(useDeBouncesValue))}` ).then(async response => {
         setTableList(await response.json()) 
   })
 }, [useDeBouncesValue])
  return (
      <div>
          <Search setParams={setParams} personList={personList} params={params}></Search>
          <br />
          <ShowTable personList={personList} tableList={tableList}></ShowTable>
    </div>
  )
}
