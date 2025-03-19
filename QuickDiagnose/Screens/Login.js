import React from 'react';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../Components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/Logo.webp')} />
                <PageTitle>Quick Diagnose</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;
