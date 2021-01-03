import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
  

    <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
        { console.log('inver', inverted)}
    </button>

)
export default CustomButton;