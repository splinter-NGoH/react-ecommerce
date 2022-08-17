import { useState } from "react"
import { createAuthUserWithEmailPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-up.styles.scss'
import Button from "../button/button.component"
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("password don't match")
            return
        }
        try {
            const { user } = await createAuthUserWithEmailPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("cannot create user, email already exist")
            } else {
                console.log(error)
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
            <h2>Don't have an account?</h2>
            <span>Sign up your account</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="display Name" type="text" requierd="true" onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="email" type="email" requierd="true" onChange={handleChange} name="email" value={email} />
                <FormInput label="password" type="password" requierd="true" onChange={handleChange} name="password" value={password} />
                <FormInput label="confirm password" type="password" requierd="true" onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm