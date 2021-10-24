import React from "react";
import { IconButton } from '@mui/material';
import CallEndIcon from '@mui/icons-material/CallEnd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { withRouter } from "react-router-dom";
import "../common/footer.css";


function footer(props) {
	if ("/" ===window.location.pathname )return null;
    return (
			<footer id="footer">
				<div className="inner">
            
					<ul className="actions">
						<li><IconButton   ><CallEndIcon  style={{color:"#bebdbd"}}/></IconButton>Call (054) 478-7114</li>
						<li><IconButton><MailOutlineIcon  style={{color:"#bebdbd"}} /></IconButton> FAX : (054) 478-7114 E-mail</li>
						<li><IconButton><AddLocationIcon  style={{color:"#bebdbd"}}/></IconButton>금오공과대학교,(39177) 경북 구미시 대학로 61</li>
					</ul>
				</div>
				<div className="copyright">
					 © PICKPLE Corp. ALL RIGHTS RESERVED.
				</div>
			</footer>
    );
}
export default withRouter(footer);

