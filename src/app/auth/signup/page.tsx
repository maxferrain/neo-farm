import SignUp from '@/components/Auth/SignUp';
import Breadcrumb from '@/components/Common/Breadcrumb';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Регистрация - Neo farm',
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Регистрация" />

      <SignUp />
    </>
  );
};

export default SignupPage;
