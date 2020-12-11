import Image from 'next/image'
import styles from './../styles/components/Header.module.css'

const Header = () => {
   return (
      <header>
         <div className="container">
            <div className={styles.logo}>
               <Image src="/TEST.svg" width="48" height="48" />
            </div>
            <div className={styles.menu}>
               <Image src="/menu.svg" width="45" height="22" />
            </div>
            <div class="burger">
               <span className={styles.line}></span>
               <span className={styles.line}></span>
               <span className={styles.line}></span>
            </div>
         </div>
      </header>
   )
}

export default Header