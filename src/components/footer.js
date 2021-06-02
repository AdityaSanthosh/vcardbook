import React from 'react'
import * as FooterStyles from '../styles/footer.module.scss'

const Footer = () => {
    return  (
        <div className="fixed-bottom">
            <div className="container">
            <p className={FooterStyles.footer}>Copyright @ 2021 VCardBook. All Rights Reserved </p>
            </div>
        </div>
    )
}

export default Footer