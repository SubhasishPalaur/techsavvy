import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundLogo from '../../assets/backgroundImage.png'
import CompanyLogo from '../../assets/Group.svg'

const LoginContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${BackgroundLogo}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

const LoginContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  color:black
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledCheckbox = styled.input<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid #333;
  border-radius: 3px;
  background-color: ${({ checked }) => (checked ? '#333' : 'white')};
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    border-color: #555;
  }

  &::after {
    position: absolute;
    top: 3px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: ${({ checked }) => (checked ? 'rotate(45deg) scale(1)' : 'rotate(45deg) scale(0)')};
    transition: transform 0.2s ease;
    transform-origin: center;
  }
`;

const SignInButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a4bd8;
  }
`;

const ForgotPasswordLink = styled.a`
  margin-top: 10px;
  color: #6c5ce7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div style={LoginContainer}>
      <LoginContent>
        <Logo
          src={CompanyLogo}
          alt="TechSavvy Logo"
        />
        <Heading>Welcome Back!</Heading>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RememberMeContainer>
            <StyledCheckbox
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label style={{'color':'#303030', 'fontWeight': '400', 'fontSize':' 14px'}}>Remember Me</label>
          </RememberMeContainer>
          <SignInButton type="submit">Sign In</SignInButton>
          <ForgotPasswordLink href="/forgot-password">Forgot Password?</ForgotPasswordLink>
        </LoginForm>
      </LoginContent>
    </div>
  );
};

export default LoginPage;
