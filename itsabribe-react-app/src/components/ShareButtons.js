import React from "react";
import {
	FaTwitter,
	FaFacebook,
	FaEnvelope,
	FaLinkedin
} from "react-icons/fa/";
import { ShareButtonRoundSquare, ShareBlockStandard } from "react-custom-share";
import "../assets/App.css";
// if we want to use custom text from the specific candidate page we can do an axios call with the cid in the url to get their name in the shared text

const ShareButtons = () => {
	const shareBlockProps = {
		url: window.location.href,
		button: ShareButtonRoundSquare,
		buttons: [
			{ network: "Twitter", icon: FaTwitter },
			{ network: "Facebook", icon: FaFacebook },
			{ network: "Email", icon: FaEnvelope },
			{ network: "Linkedin", icon: FaLinkedin }
		],
		text: `You can find out which companies fund which politicians! Hold companies & brands accountable for the controversial politicians they support.
		Check it out.  
		www.itsabribe.com`,
		longtext: `Upset with legislators but don't know how to be heard? Big companies give them money. Take action, boycott these brands, hold them accountable for the controversial politicians they support.
		You can find out which companies fund which politicians! Hold companies & brands accountable for the controversial politicians they support.
		Check it out.  
		www.itsabribe.com`
	};
	return (
		<div className="row">
			<h6 style={{textAlign: "center"}}>Share this page!</h6>
			<ShareBlockStandard {...shareBlockProps} />
		</div>
	);
};

export default ShareButtons;
