import styles from "./Button.module.css"

type buttonType = {
    type: "submit" | "reset" | "button";
    name: string;
}


export const Button = ({type, name}:buttonType) => {
    return(
        <div id={styles.buttonDiv}>
            <button type={type}>{name}</button>
        </div>
    )
}