import { useEffect } from "react"

export function clearObj (obj) {
    const newObj = { ...obj }
    Object.keys(newObj).forEach(item =>{
        if (!eliminateZero(newObj[item])) {
            delete newObj[item]
        }
    })
    return newObj
}

export function eliminateZero (data) {
    return data?data:(data == '0'?true:data)
}
export const useMount=(callback)=> {
    useEffect(() => {
        callback()
    }, [])
    
}