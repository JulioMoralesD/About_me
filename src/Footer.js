import facebookIcon from "./icons/f_logo_RGB-White_72.png"
import gitHubIcon from "./icons/GitHub-Mark-Light-64px.png"
import apolloIcon from "./icons/V7 icon64.png"
import youtubeIcon from "./icons/yt_logo_mono_dark.png"
import twitterLogo from "./icons/2021 Twitter logo - white.png"
import instagramLogo from "./icons/glyph-logo_May2016.png"

export default function Footer(){
    return(
        <footer>
            <a
                href="https://www.facebook.com/Apollox10"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={facebookIcon} alt="Facebook icon" className="footerIcon"/>
            </a>

            <a
                href="https://github.com/apollox10"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={gitHubIcon} alt="GitHub icon" className="footerIcon"/>
            </a>
            <a
                href="https://www.youtube.com/Apollox10"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={youtubeIcon} alt="YouTube icon" className="footerIcon"/>
            </a>
            <a
                href="https://twitter.com/ElApollox10"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={twitterLogo} alt="Twitter icon" className="footerIcon"/>
            </a>
            <a
                href="https://www.instagram.com/apollox.10/"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={instagramLogo} alt="Instagram icon" className="footerIcon"/>
            </a>
            <a
                href="https://www.Apollox10.com/"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={apolloIcon} alt="Apollox icon" className="footerIcon"/>
            </a>
        </footer>
    )
}