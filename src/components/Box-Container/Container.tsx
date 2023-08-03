import styles from "./Container.module.css"

type element = {
    children: React.ReactNode
}

export const Container = ({children}:element) => {
   
  return (
        <div id={styles.container}>
            {children}
        </div>
    )
}