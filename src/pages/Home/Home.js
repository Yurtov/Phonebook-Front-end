import { useAuth } from 'hooks';
import {
  Container,
  Title,
  TitleDecor,
  BtnList,
  BtnLogIn,
  BtnSingUp,
  BtnLogined,
  Text,
} from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Container>
        <Title>
          Phone<TitleDecor>book</TitleDecor>
        </Title>
        {!isLoggedIn ? (
          <BtnList>
            <BtnLogIn to="/login">Login</BtnLogIn>
            <BtnSingUp to="/registration">Sign Up</BtnSingUp>
          </BtnList>
        ) : (
          <>
            <Text>You are already logged in</Text>
            <BtnLogined to="/contacts">Entering</BtnLogined>
          </>
        )}
      </Container>
    </div>
  );
};

export default Home;
