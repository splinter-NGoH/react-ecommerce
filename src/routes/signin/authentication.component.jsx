import SignInForm from "../../component/sign-in-form/sign-in.form"
import SignUpForm from "../../component/sign-up-form/sign-up.form"
import './authentication.styles.scss'
const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication