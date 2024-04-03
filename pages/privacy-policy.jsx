import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CheckoutMain from '../components/checkout';
import PrivacyMain from '../components/privacy';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Privacy'} />
      <PrivacyMain/>
    </Wrapper>
  );
};

export default index;