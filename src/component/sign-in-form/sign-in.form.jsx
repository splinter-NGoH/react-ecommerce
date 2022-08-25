import { useState } from "react"
import { signInWithGooglePopup, signInAuthUserEmailAndPassword } from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"
import './sign-in.styles.scss'
import Button from "../button/button.component"

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const logGoogleUser = async () => {
        await signInWithGooglePopup()
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const { user } = await signInAuthUserEmailAndPassword(email, password)
            console.log(user)
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("cannot create user, email already exist")
            } else {
                console.log(error)
                resetFormFields()

            }
        }

    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
        console.log(formFields)

    }
    return (
        <div className="sign-up-container">
            <h2>Already have account</h2>
            <span>Sign in your account</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="email" type="email" requierd="true" onChange={handleChange} name="email" value={email} />
                <FormInput label="password" type="password" requierd="true" onChange={handleChange} name="password" value={password} />
                <div className="btns-container">
                    <Button type="submit" onSubmit={signInAuthUserEmailAndPassword}>Sign In</Button>
                    <Button type="button" buttonType="google" onClick={logGoogleUser}>Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm