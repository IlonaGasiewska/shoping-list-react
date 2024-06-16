import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./SignInPage.css"


function SignInPage() {

    return (
        <div className="signInPage">
            <h1>Zaloguj</h1>
            <SignInForm />
        </div>
    )
}

export default SignInPage;
