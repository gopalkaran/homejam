import React from 'react';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return(
      <nav className={styles.navBar}>

        <img src='https://uploads-ssl.webflow.com/610110919394bc824e22d0d8/610110919394bc95ea22d0e9_Homejam%20Logo.svg' alt='homejam icon' />

        <ul className={styles.navigation}>
          <li >
            <a href='#' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            Search
            </a>
          </li>
          <li>
            <a href='#'>
            Help
            </a>
          </li>
          <li>
            <a href='#'>
            Account
            </a>
          </li>
          <li >
            <a href='#' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/></svg>
            </a>          
          </li>
        </ul>


      </nav>
  )
};

export default NavBar;
