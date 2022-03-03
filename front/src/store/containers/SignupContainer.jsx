import React from 'react';
import { useSelector } from 'react-redux';
import Signup from '../../components/login/Signup'; 
import { checkToken } from '../../store/modules/checkToken';

const SignupContainer = () => {
    const data = useSelector(state => state.signup.info);
    

    console.log("this is signupcontinaer!!!!!!!!!!!");
    console.log(checkToken());
    console.log("state.info:");
    console.log(data);

    return (
        <Signup data={data} />
    );

};

export default SignupContainer;