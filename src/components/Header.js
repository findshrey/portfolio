import Image from 'next/image'
// import styles from './../styles/components/Header.module.scss'

const Header = () => {
   return (
      <header>
         <div className="container">
            <div className="logo">
               <Image src="/TEST.svg" width="48" height="48" />
            </div>
            <div >
               <Image src="/menu.svg" width="45" height="22" />
            </div>
            <div className="burger">
               <span ></span>
               <span ></span>
               <span ></span>
            </div>
         </div>
      </header>
   )
}

export default Header