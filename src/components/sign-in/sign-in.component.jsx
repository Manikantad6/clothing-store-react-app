import { Component } from 'react';
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import {auth} from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state
        console.log(email, password)
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                'email':'',
                'password':''
            })
        }catch(err){
            console.log('problem while logging in',err)
        }

       
    }

    handleChange = event => {
        const {value, name}  = event.target
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label="email"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label="passowrd"
                    required />

                <div className="buttons">
                <CustomButton type="submit"> Sign in</CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with google</CustomButton>
                </div>
                </form>
            </div>

        )
    }
}


export default SignIn