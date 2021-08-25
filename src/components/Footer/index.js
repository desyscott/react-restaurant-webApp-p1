import React from "react"
import { 
    FaTwitter, 
    FaFacebook,
    FaWhatsapp,
    FaInstagram,
    FaYoutube,
    FaLinkedin } from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    SocialMediaWrap,
    SocialLogo,
    Pizza,
    SocialIcons,
    SocialIconLink,
    

} from "./FooterElements"


const Footer=()=>{
    return(
        <FooterContainer>
                <FooterWrap>
                <SocialMediaWrap>
                    <SocialLogo to="/">Pizza <Pizza/></SocialLogo>
                    <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="facebook" rel="noopener noreferrer">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer">
                    <FaWhatsapp/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                    <FaYoutube/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                    <FaLinkedin/>
                </SocialIconLink>
              </SocialIcons>
                 </SocialMediaWrap>
                </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;