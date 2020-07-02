import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps { 
    icon: string,
    number?: number,
    onIconClick?: () => void, 
    onNumberClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({ icon, number, onIconClick, onNumberClick }) => {
    return (
        <button className={styles.buttonContainer}>
            <img alt='icon' onClick={onIconClick} src={icon} />
            <h1  onClick={onNumberClick}>{number}</h1>
        </button>
    )
}

export default Button
