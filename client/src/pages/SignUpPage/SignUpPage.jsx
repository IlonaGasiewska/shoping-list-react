import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import "./SignUpPage.css"


function SignUpPage() {
    const navigate = useNavigate()

    return (
        <div className="signUpPage">
            <h1>Rejestracja</h1>
            <SignUpForm />
        </div>
    )
}

export default SignUpPage;
