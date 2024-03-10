import Signin from '@/components/Auth/SignIn';
import Breadcrumb from '@/components/Common/Breadcrumb';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Вход - Neo farm',
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Войти" />

      <Signin />
    </>
  );
};

export default SigninPage;
