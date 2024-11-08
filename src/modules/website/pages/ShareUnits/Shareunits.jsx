import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Shareunits.module.css'
import vector from './Vector.png'  // Adjust the path to your vector icon

const Shareunits = () => {
  const [selectedPackage, setSelectedPackage] = useState('Select Package')
  const [selectedDays, setSelectedDays] = useState('Select Days')
  // const [showPackageMenu, setShowPackageMenu] = useState(false)
  const [showDaysMenu, setShowDaysMenu] = useState(false)

  const togglePackageMenu = () => {
    setShowPackageMenu(prev => !prev)
  }

  const toggleDaysMenu = () => {
    setShowDaysMenu(prev => !prev)
  }

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg)
    setShowPackageMenu(false)
  }

  const handleDaysClick = (days) => {
    setSelectedDays(days)
    setShowDaysMenu(false)
  }

  return (
    <div>
      <Sidebar />
      <div className={styles.shareunits}>
      <div className={styles.textHeaderTopUp}>
        <h4>Share Units</h4>
        </div>
        <div className={styles.dropdownContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="">Origin Account Id</label>
            <input
              type="text"
              className={styles.dateInput}
              placeholder="Origin Account Id"

            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="">Destination AccountID</label>
            <input
              type="text"
              className={styles.dateInput}
              placeholder="Destination AccountID"
            />
        
          </div>
          <br />
          <br />
          <br />

          <div className={styles.inputGroup}>
            <label htmlFor="">Amount</label>
            <input
              type="text"
              className={styles.dateInput}
              placeholder="Amount"
            />
        
          </div>
        </div>
        <p className={styles.btnshare}>Share</p>
      </div>
    </div>

  )
}

export default Shareunits
