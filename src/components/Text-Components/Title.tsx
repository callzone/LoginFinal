import styles from "./Title.module.css"

type titleType = {
    text: string;
    subText?: string;
}


export const Title = ({text, subText}:titleType) => {
    return(

       <div id={styles.titleDiv}>
            <h1>{text}</h1>
            <h3>{subText}</h3>
       </div>
    )
}