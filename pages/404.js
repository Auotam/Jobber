import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeMain from '../components/home';
import HeaderOne from '../layout/headers/header';
import FooterOne from '../layout/footers/footer';
import Link from 'next/link';

const index = () => {
  return (
    <>
    

    <section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-12 text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Page not found
		</h3>
		
		<p>The page you are looking for not avaible!</p>
		
		<Link href="/"><a  className="link_404">Go to Home</a></Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>

      {/* <FooterOne /> */}
    </>
  );
};

export default index;