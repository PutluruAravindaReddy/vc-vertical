import { NextPage } from "next";


interface Props{}



const Signin: NextPage=(props):JSX.Element=>{
    
    return (
        <>
        <div className="sign-in-form">
            <form >
                <input required type="email" placeholder="john@email.com" />
                <input required type="password" placeholder="*********" />
                <input type="submit" value="Login"/>
            </form>
            </div>
        </>
    )
}