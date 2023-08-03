import { SyntheticEvent } from "react"
import { useState } from "react"


import { Button } from "../../form-Components/Button"
import { Input } from "../../form-Components/Input"


export const FormLogin = () => {


    const handleSubimit = (e:SyntheticEvent<HTMLFormElement, SubmitEvent>):void => {

        e.preventDefault()
        console.log("submit" , {email} ,  {password})

    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
       
       <form className="form" onSubmit={handleSubimit}>
                
            <Input type="email" name="email" label="Email:" onchange={(e) => setEmail(e.target.value)} value={email} />

            <Input type="password" name="password" label="Senha:" onchange={(e) => setPassword(e.target.value)} value={password}/>

            <Button type="submit" name="Enviar"/>

        </form>
    )

}