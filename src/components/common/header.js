import React from "react";
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { withRouter } from "react-router-dom";
import "../common/header.css";


function header(props) {
	if ("/" ===window.location.pathname )return null;
    return (
			<header  id="header">
                <div className="header_container">
                    <div className="header_logo">
                        학교모집관리시스템
                    </div>

                    <div className="header_account">
                    <IconButton   ><AccountCircleIcon  style={{color:"#696969",fontSize:"40px"}}/></IconButton>
                    </div>
                </div>
            </header>
    );
}
export default withRouter(header);

