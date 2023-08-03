import styles from "./Input.module.css";

type inputType = {
    type: string; 
    name: string;
    label: string;

    onchange?:React.ChangeEventHandler<HTMLInputElement>;
    value?:string;
}


export const Input = ({type, name, label, onchange, value }:inputType) => {
   
    return(
        <div id={styles.inputDiv}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} onChange={onchange} value={value}/>
        </div>
    )

};