import React from 'react'
import Header from './Header'

import '../styles/layout.css'
import styles from './layout.module.css'
import Footer from './Footer'

const Layout = ({ children, companyInfo, showNav }) => (
  <>
    {showNav && <Header />}
    <div className={styles.content}>{children}</div>
    <Footer companyInfo={companyInfo} />
  </>
)

export default Layout
