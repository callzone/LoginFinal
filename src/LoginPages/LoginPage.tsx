


import styles from "./LoginPages.module.css"
import { Title } from "../components/Text-Components/Title"
import { FormLogin } from "../components/form-Components/FormFull/FormLogin"
import { Container } from "../components/Box-Container/Container"



export const LoginPage = () => {

    

   

    return (
        <div id={styles.login}>
           
            <Container>

                <Title text="Faça seu Login aqui" />
                <FormLogin/>
                
            </Container>
            
       </div>
    )
}