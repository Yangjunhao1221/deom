import React,{FormEvent} from 'react'
const baseUrl = process.env.REACT_APP_BASEURL
export default function Login() {
    const handerSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        let userName = (e.currentTarget.elements[0] as HTMLInputElement).value
        let password = (e.currentTarget.elements[1] as HTMLInputElement).value
        login({userName,password})
        
    }
    const login = (params:{userName: string, password: string}) => {
        fetch(`${baseUrl}/login`, {
            method:'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then(async res => {
            if (res.ok) {
              console.log(res.json() );
               
           }
        })
    }
  return (
      <div>
          <form action="" onSubmit={handerSubmit}>
              <label htmlFor="userName" >姓名:</label>
              <input type="text" id='userName' />
              <br />
              <label htmlFor="password" >密码:</label>
              <input type="password" id='password' />
              <br />
              <button type='submit'>登录</button>
          </form>
    </div>
  )
}
