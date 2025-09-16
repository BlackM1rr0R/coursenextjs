import React from "react";
import styles from './wrapper.module.css'
type WrapperProps={
    children:React.ReactNode
}
export default function Wrapper({ children }: WrapperProps) {
    return <div className={styles.wrapper}>{children}</div>;
    }