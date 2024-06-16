import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUpForm.css";

function SignUpForm() {
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
        event.preventDefault();
        if (errorMessage === "") {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = users.some(user => user.name === name);

            if (userExists) {
                setErrorMessage("Użytkownik już istnieje");
            } else {
                const newUser = { name, password };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("user", name)
                navigate("/dashboard");
            }
        }
    };

    return (
        <form className="signUpForm" onSubmit={submit}>
            <label htmlFor="name">Imie</label>
            <input onInput={(event) => setName(event.target.value)} type="text" name="name" />
            <label htmlFor="password">Hasło</label>
            <input onInput={(event) => setPassword(event.target.value)} type="password" name="password" />
            {<p className="errorMessage">{errorMessage}</p>}
            <button type="submit">Zarejestruj i zaloguj</button>
            <button onClick={() => { navigate("/signIn") }} type="button">Przejdź do logowania</button>
        </form>
    );
}

export default SignUpForm;
