import React from 'react'
import styles from './Navbar.css'


class Navbar extends React.Component {

  render() {

    return (
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>FleetMED</h1>
        <ul className={styles.navbarlist}>
          <li className={styles.navbarlist__item}>SETTINGS</li>
        </ul>
      </nav>
    )
  }

}

export default Navbar
