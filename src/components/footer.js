import React from 'react'
import * as FooterStyles from '../styles/footer.module.scss'

const Footer = () => {
    return  (
        <div className="col-12 col-sm-12">
            <br></br> 
            <p className={FooterStyles.footer}>Copyright @ 2021 VCardBook. All Rights Reserved </p>
        </div>
    )
}

export default Footer