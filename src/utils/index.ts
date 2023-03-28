import { useEffect, useState } from "react"

export function clearObj (obj:object) {
    const newObj = { ...obj }
    Object.keys(newObj).forEach(item => {
        // @ts-ignore
        if (!eliminateZero(newObj[item])){
        // @ts-ignore
            delete newObj[item]
        }
    })
    return newObj
}

export const eliminateZero= (data:unknown)=>  data===0 ? true : !!data
    
export const useMount = (callback:()=>void) => {
    useEffect(() => {
        callback()
    }, [])

}
//防抖 
export const useDeBounces =<T> (value:T, delay:number)=> {
    const [debouncesValue, setdebouncesValue] = useState(value)
    useEffect(() => {
        let timer = setTimeout(() => {
            setdebouncesValue(value)
        }, delay)
        return () => clearTimeout(timer)
    }, [value,delay])
    return debouncesValue
}

export const useArray = <T>(persons:T[] ) => { 
    const [value, setPersonsValue] = useState(persons) 
   function  add (person:T) {
        setPersonsValue([...value,person])
    }
    function clear() { 
        setPersonsValue([])
    }
    function removeIndex(index: number) {
        const arr = [...value]
        arr.splice(index, 1)
        setPersonsValue(arr)
    }
return{add,value,removeIndex,clear}
}