import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "components/HeaderStyle.css";
import GoogleAuth from "components/auth/GoogleAuth";
import { auth } from 'firebase/firebase.utils';
import * as actions from "actions";

import Header from "../Header";
import { Item } from "semantic-ui-react";

it('shows header',()=>{
    const div = document.create('div');
    ReactDOM.render(<Header/>,div);
    //checks to see if the header is in there
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
});

