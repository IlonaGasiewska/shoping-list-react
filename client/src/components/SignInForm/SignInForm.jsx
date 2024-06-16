import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignInForm.css";

function SignInForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        handleCheckInputs();
    }, [name, password]);

    const handleCheckInputs = () => {
        if (password === "" && name === "") {
            setErrorMessage("Imię i hasło są wymagane");
        } else if (password === "") {
            setErrorMessage("Hasło jest wymagane");
        } else if (name === "") {
            setErrorMessage("Imię jest wymagane");
        } else {
            setErrorMessage("");
        }
    };

    const submit = (event) => {
        event.preventDefault(); // Prevent form submission to avoid page reload

        if (errorMessage === "") {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(user => user.name === name && user.password === password);

            if (user) {
                localStorage.setItem("user", name);
                navigate("/dashboard");
            } else {
                setErrorMessage("Nieprawidłowe imię lub hasło");
            }
        }
    };

    return (
        <form className="signInForm" onSubmit={submit}>
            <label htmlFor="name">Imie</label>
            <input onInput={(event) => setName(event.target.value)} type="text" name="name" />
            <label htmlFor="password">Hasło</label>
            <input onInput={(event) => setPassword(event.target.value)} type="password" name="password" />
            {<p className="errorMessage">{errorMessage}</p>}
            <button type="submit">Zaloguj</button>
        </form>
    );
}

export default SignInForm;
