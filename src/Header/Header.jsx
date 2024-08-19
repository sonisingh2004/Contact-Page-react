import styles from './Header.module.css'
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>HOME</div>
            <div className={styles.menu}>ABOUT</div>
            <div className={styles.menu}>CONTACT</div>
        </div>
    )
}
export default Header
