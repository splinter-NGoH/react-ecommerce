import './button.styles.scss'
const BUTTOM_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

const Button = ({ children, buttonType, ...otherprops }) => {
    return (
        <button className={`button-container ${BUTTOM_TYPE[buttonType]}`} {...otherprops}>{children}</button>
    )
}

export default Button