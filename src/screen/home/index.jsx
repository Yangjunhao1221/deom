import React, { useEffect, useState } from 'react'
import Search from 'screen/Search'
import ShowTable from 'screen/ShowTable'
import * as qs from 'qs'
import { clearObj,useMount } from 'utils'

const baseUrl = process.env.REACT_APP_BASEURL
export default function Home () {
    const [params, setParams] = useState({
        personId: '',
        name:''
    })
    const [personList, setPersonList] = useState([])
    const [tableList, setTableList] = useState([])
    useMount(() => {
        fetch(`${baseUrl}/users` ).then(async response => {
            setPersonList(await response.json())    
      })
    })
    useEffect(() => {
     fetch(`${baseUrl}/projects?${qs.stringify(clearObj(params))}` ).then(async response => {
         setTableList(await response.json()) 
   })
 }, [params])
  return (
      <div>
          <Search setParams={setParams} personList={personList} params={params}></Search>
          <br />
          <ShowTable personList={personList} tableList={tableList}></ShowTable>
    </div>
  )
}
