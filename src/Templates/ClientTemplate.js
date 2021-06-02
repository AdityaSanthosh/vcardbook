import React from 'react'
import {graphql} from 'gatsby'
import TwitterImg from "../images/twitter.png"
import InstagramImg from "../images/instagram.png"
import FacebookImg from "../images/facebook.png"
import LinkedInImg from "../images/linked-in.png"
import callMobileImg from "../images/call-mobile.png"
import EmailMeImg from "../images/email-me.png"
import bookApptImg from "../images/book-appt.png"
import dlvcardImg from "../images/dl-vcard.png"
import callOfficeImg from "../images/call-office.png"
import VisitWebsiteImg from "../images/visit-website.png"
import * as clientTemplateStyles from '../styles/clientTemplate.module.scss'
import { Helmet } from 'react-helmet'
import VCard from 'vcard-creator'

export const query = graphql`
query ($clientName:String!) {
    contentfulClient(clientName:{eq:$clientName}) {
    email
    clientName
    personalmobile
    officemobile
	website
	bookAppointment
	clientPicture {
		resize(width:2000,height:2000) {
		  src
		}
	}
}
site {
	siteMetadata {
	  title
	  url
	  keywords
	  description
	}
  }
}
`


export default function Client(props) {
		const vcardGenerator = () => {
			const myVCard = new VCard();
			const name = `${props.data.contentfulClient.clientName}`
			const email = `${props.data.contentfulClient.email}`
			const personalphone = `${props.data.contentfulClient.personalmobile}`
			const officephone = `${props.data.contentfulClient.officemobile}`
			const website = `${props.data.contentfulClient.website}`
			myVCard
			// Add personal data
			.addName(name)
			// Add work data
			.addEmail(email)
			.addPhoneNumber(personalphone, 'PREF;WORK')
			.addPhoneNumber(officephone, 'WORK')
			.addURL(website)

			var data = new Blob([myVCard],{type:'text/vcf'});
			var vcfURL = window.URL.createObjectURL(data)
			var tempLink = document.createElement('a');
			tempLink.href = vcfURL;
			tempLink.setAttribute('download', 'vcard.vcf');
			tempLink.click();
		}
		return (
		<div>
			<Helmet>
				<title>{props.data.contentfulClient.clientName}</title>
				<meta name="description" content={props.data.contentfulClient.clientName} />
				<meta name="keywords" content={props.data.site.siteMetadata.keywords} />
				<meta property="og:title" content={props.data.site.siteMetadata.title} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={props.data.contentfulClient.clientPicture.resize.src} />
				<meta property="og:description" content={props.data.contentfulClient.clientName} />
				<meta property="og:locale" content="en-US" />
				<meta property="og:url" content={`${props.data.site.siteMetadata.url}/${props.data.contentfulClient.clientName}`} />
				<link rel="canonical" href={`${props.data.site.siteMetadata.url}/${props.data.contentfulClient.clientName}`} />
			</Helmet>
		<div className="container-lg">
			<div id={clientTemplateStyles.contentArea}>
			<div className={clientTemplateStyles.imagediv}>
			<img src={props.data.contentfulClient.clientPicture.resize.src}/>
			</div>
			{/* <div className={clientTemplateStyles.Name}>
				<h1>{props.data.contentfulClient.clientName}</h1>
			</div> */}
			<div id={clientTemplateStyles.buttons}>
					<div className={clientTemplateStyles.butColR}>
						<div className={clientTemplateStyles.but}><a href={`tel:${props.data.contentfulClient.personalmobile}`}><img src={callMobileImg} width="377" height="98" alt=""/></a></div>
						<div className={clientTemplateStyles.but}><a href={`tel:${props.data.contentfulClient.officemobile}`}><img src={callOfficeImg} width="377" height="98" alt=""/></a></div>
						<div className={clientTemplateStyles.but}><a href={`mailto:${props.data.contentfulClient.email}`}><img src={EmailMeImg} width="377" height="98" alt=""/></a></div>
					</div>
					<div className={clientTemplateStyles.butColL}>
						<div className={clientTemplateStyles.but}><a href={`${props.data.contentfulClient.website}`} target="_blank"><img src={VisitWebsiteImg} width="377" height="98" alt=""/></a></div>
						<div className={clientTemplateStyles.but}><a href={`${props.data.contentfulClient.bookAppointment}`} target="_blank"><img src={bookApptImg} width="377" height="98" alt=""/></a></div>
						<div className={clientTemplateStyles.but}><a href={vcardGenerator.vcfURL} onClick={vcardGenerator}><img src={dlvcardImg} width="377" height="98" alt=""/></a></div>
					</div>
					<div id={clientTemplateStyles.socmed}>
						<div className={clientTemplateStyles.socmed1}><a href="https://www.facebook.com/ALUXREALTY" target="_blank"><img src={FacebookImg} width="85" height="85" alt=""/></a></div>
						<div className={clientTemplateStyles.socmed2}><a href="https://www.instagram.com/aluxrealty/" target="_blank"><img src={InstagramImg} width="85" height="85" alt=""/></a></div>
						<div className={clientTemplateStyles.socmed3}><a href="https://twitter.com/AluxRealty" target="_blank"><img src={TwitterImg} width="85" height="85" alt=""/></a></div>
						<div className={clientTemplateStyles.socmed4}><a href="https://www.linkedin.com/in/zaheer-khanzada-06176516a/" target="_blank"><img src={LinkedInImg} width="85" height="85" alt=""/></a></div>
					</div>
			</div>
			</div>
			<div className={clientTemplateStyles.copyrightcontainer}>
				<h1>Copyright © {props.data.contentfulClient.clientName}, 2021</h1>
			</div>
		</div>
		</div>
    )
}