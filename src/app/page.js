'use client'
import Image from "next/image";

import Link from "next/link";
import {useRouter} from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    // Dynamically import jQuery after the page loads
    const loadJQuery = async () => {
      const $ = (await import('jquery')).default;

   $(function () {
        $('.about-v-btn').on('click', function () {
          $('.trascript-v-btn-sm').toggleClass('trascript-expand');
        });
      });
    // Dropdown Menu Fade
$(function () {
        $('.dropdown').hover(
          function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn('fast');
          },
          function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut('fast');
          }
        );
      });
  
    };

    loadJQuery();
  }, []);

 const router = useRouter();
 
  return (
    <div>
      <main>
          <div className="navigation-top">
            <ul className="p-lr40">
            <li><Link href="#">BlackRock</Link></li>
            <li><Link href="#">iShares</Link></li>
            <li><Link href="#">Aladdin</Link></li>
            <li><Link href="#">Our company</Link></li>
            <li className="pab-r0"><Link href="#">Local websites</Link></li>
            </ul>
          </div>
{/* Header Section Start */}
<div className="navbar navbar-default navbar-static-top">
    <div className="container-fluid p-lr40">
	
        <div className="navbar-header p-lrb21">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<Link className="navbar-brand" href="/"><img src="images/logo/blackrock-logo.svg" alt="BlackRock" /></Link>
        </div>
		
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
				
				<li className="dropdown menu-large"> <Link href="# " className="dropdown-toggle" data-toggle="dropdown"> About Us <b className="caret "></b> </Link>
					 <ul className="dropdown-menu megamenu nav-dropdown-bg row col-md-12">
                        <li className="col-md-8">
                            <ul>
                                <li><Link href="#">About BlackRock</Link></li>
                                <li><Link href="#">Principles</Link></li>
                                <li><Link href="#">Leadership</Link></li>
                                <li><Link href="#">History</Link></li>
                                <li><Link href="#">Contacts and Locations</Link></li>
                            </ul>
                        </li>
                    </ul>
				</li>
                <li className="dropdown menu-large "> <Link href="# " className="dropdown-toggle " data-toggle="dropdown "> Newsroom <b className="caret "></b></Link>	
                    <ul className="dropdown-menu megamenu nav-dropdown-bg row col-md-12">
                        <li className="col-md-8">
                            <ul>
                                <li><Link href="#">Overview</Link></li>
                                <li><Link href="#">Media Contacts</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
				 <li className="dropdown menu-large "> <Link href="# " className="dropdown-toggle " data-toggle="dropdown "> Insights <b className="caret "></b></Link>	
                    <ul className="dropdown-menu megamenu nav-dropdown-bg row col-md-12">
                        <li className="col-md-8">
                            <ul>
                                <li><Link href="#">About BlackRock</Link></li>
                                <li><Link href="#">Principles</Link></li>
                                <li><Link href="#">Leadership</Link></li>
                                <li><Link href="#">History</Link></li>
                                <li><Link href="#">Contacts and Locations</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
				 <li className="dropdown menu-large ">	<Link href="# " className="dropdown-toggle " data-toggle="dropdown "> Investor Relations <b className="caret "></b></Link>	
                    <ul className="dropdown-menu megamenu nav-dropdown-bg row col-md-12">
                        <li className="col-md-8">
                            <ul>
                                <li><Link href="#">Overview</Link></li>
                                <li><Link href="#">Media Contacts</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
				 <li className="dropdown menu-large ">	<Link href="# " className="dropdown-toggle " data-toggle="dropdown "> Corporate sustainability <b className="caret "></b></Link>	
                    <ul className="dropdown-menu megamenu nav-dropdown-bg row col-md-12">
                        <li className="col-md-8">
                            <ul>
                               <li><Link href="#">About BlackRock</Link></li>
                                <li><Link href="#">Principles</Link></li>
                                <li><Link href="#">Leadership</Link></li>
                                <li><Link href="#">History</Link></li>
                                <li><Link href="#">Contacts and Locations</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
				 <li className="dropdown menu-large ">	<Link href="# " className="dropdown-toggle " data-toggle="dropdown "> Careers <b className="caret "></b></Link>	
                    <ul className="dropdown-menu megamenu nav-dropdown-bg row col-md-12">
                        <li className="col-md-8">
                            <ul>
                                 <li><Link href="#">Overview</Link></li>
                                <li><Link href="#">Media Contacts</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
				
            </ul>
        </div>
    </div>
</div>
{/* Header Section End */}

{/* Banner Section Start */}
<div className="container-fluid home-bnr-bg">
	<div className="row m-0">
		<div className="col-sm-12 col-md-6 home-banner-tp">
			<h1 className="BoldFont">Preqin is now a part of <br/>BlackRock</h1>
			<div className="description">Combining Preqin’s investment data and research tools with the complementary workflow capabilities of Aladdin® establishes a preeminent private markets data and technology service for our clients. This move advances BlackRock’s private markets capabilities so we can better serve our clients’ whole portfolio needs.</div>
									
			<div className="btn-container">
				<Link href="#" className="btn">
					<span className="icon fa fa-angle-right angl-rht" aria-hidden="true"></span>
					<span className="BoldFont">Read the press release</span>
				</Link>
			</div>
			
		</div>
		<div className="col-sm-12 col-md-6 pr-0 home-bnr-bg-img"></div>
	</div>
</div>
{/* Banner Section End */}

{/* Content Section Start */}
<div className="container-fluid container1-pdn40">
	<div className="row btn-container1-raw">		
		<div className="col-sm-12 col-md-4">								
			<div className="btn-container1">
				<Link href="#" className="btn1">
					<h2 className="title BoldFont">BlackRock expands private market capabilities</h2>
					<div className="">
						Read how our recent acquisition of HPS Investment Partners, a global leader in private credit investing, enables us to serve clients across their whole portfolios.
					</div>
				</Link>
			</div>			
		</div>
			<div className="col-sm-12 col-md-4">								
			<div className="btn-container1">
				<Link href="#" className="btn1">
					<h2 className="title BoldFont">Transforming BlackRock for our clients</h2>
					<div className="">
						Read more about the changes we’re making to help our clients meet their investment, portfolio, and business needs.
					</div>
				</Link>
			</div>			
		</div>
			<div className="col-sm-12 col-md-4">								
			<div className="btn-container1">
				<Link href="#" className="btn1">
					<h2 className="title BoldFont">Investing in the transition to a low-carbon economy</h2>
					<div className="">
						Clients are asking for our perspectives on the long-term mega forces - including the transition to a low-carbon economy.
					</div>
				</Link>
			</div>			
		</div>			
	</div>
	<div className="clear pb-60"></div>	
	<div className="row btn-container1-raw">		
		<div className="col-sm-12 col-md-4">								
			<div className="btn-container1">
				<Link href="#" className="btn1">
					<h2 className="title BoldFont">Advancing shareholder democracy</h2>
					<div className="">
						We are committed to a future where all investors can participate in proxy voting if they choose. Find out how we are delivering on this through BlackRock Voting Choice.
					</div>
				</Link>
			</div>			
		</div>
			<div className="col-sm-12 col-md-4">								
			<div className="btn-container1">
				<Link href="#" className="btn1">
					<h2 className="title BoldFont">Implications of an aging population</h2>
					<div className="">
						We track the economic impact of aging – and the investment opportunities and risks it brings. Fewer people of working age limits how much countries can produce and grow – unless they can find ways to adapt.
					</div>
				</Link>
			</div>			
		</div>
			<div className="col-sm-12 col-md-4">								
			<div className="btn-container1">
				<Link href="#" className="btn1">
					<h2 className="title BoldFont">Weekly market commentary</h2>
					<div className="">
						Stay tuned for insights on hot topics, the latest trends in the financial market and our broad asset class views via the Weekly commentary by the BlackRock Investment Institute. Read the latest market commentary.
					</div>
				</Link>
			</div>			
		</div>			
	</div>
	
</div>

<div className="clear pb-60"></div>	
{/* Content Section End */}


{/* About Section Start */}
<div className="container-fluid home-about-bnrbg">
	<div className="row m-0">
		<div className="col-sm-12 col-md-6 home-about-bnrbg-tp">
			<h1 className="BoldFont">About BlackRock</h1>
			<div className="description">BlackRock is one of the world’s leading providers of investment, advisory and risk management solutions. We are a fiduciary to our clients. We’re investing for the future on behalf of our clients, inspiring our employees, and supporting our local communities. Watch the video to learn more.</div>
									
			<div className="btn-container">
				<Link href="#" className="btn learn-more">
					<span className="icon fa fa-angle-right angl-rht learn-more-clr" aria-hidden="true"></span>
					<span className="BoldFont">Learn more</span>
				</Link>
			</div>
			
		</div>
		<div className="col-sm-12 col-md-6 pr-0">
			<video width="78%" controls>
				<source src="images/banner/about-video.mp4" type="video/mp4" />
			</video>
			
			<div className="clear"></div>	
			
			<div className="trascript-v-btn-main">
			<div className="trascript-v-btn-sm ">
			
			<button type="button" className="about-v-btn" data-toggle="collapse" data-target="#demo">Transcript <span className="fa fa-angle-double-down"></span></button>
			
			<div id="demo" className="collapse">
				<div className="panel panel-default trascript-tab">
					<div className="panel-body">
						<p>BlackRock</p>
						<p>How can we help more people benefit from investing?</p>
						<p>And how can we bring the voices of individual shareholders to the companies they invest in?</p>
						<p>How can we transition to a net-zero economy?</p>
						<p>BlackRock is investing for the future so we can better serve our clients, inspire our employees, and support our communities. This is how we remain true to our purpose of helping more and more people experience financial well-being.</p>
						<p>BlackRock</p>
						<p>&nbsp;</p>
					</div>
				</div>
			</div>
			
			</div>
			</div>
			
			
		</div>
	</div>
</div>

<div className="clear pb-60"></div>	
{/* About Section End */}


{/* Corporate Section Start */}
<div className="container-fluid cor-sec-pdn">
	<div className="row m-0">
		<div className="col-md-6 col-sm-6 cor-topic">
			<div className="cor-sus-section"><img src="images/icons/people-icon.jpg" alt="" className="img-responsive" /></div>			
			<div className="cor-text-section">
				<div className="head BoldFont">Corporate sustainability</div>
				<div className="description">We focus on the long-term sustainability of BlackRock so we can continue to deliver value to our clients, shareholders, employees, and communities.</div>
				<div className="btn-container">
					<Link href="#" className="btn learn-more button-clr">
						<span className="icon fa fa-angle-right angl-rht" aria-hidden="true"></span>
						<span className="BoldFont">Learn more</span>
					</Link>
				</div>
			</div>		
		</div>
		<div className="col-md-6 col-sm-6 cor-topic">
			<div className="cor-sus-section"><img src="images/icons/lightbulb-icon.jpg" alt="" className="img-responsive" /></div>			
			<div className="cor-text-section">
				<div className="head BoldFont">Investment stewardship</div>
				<div className="description">We engage with companies to inform our voting and promote sound corporate governance that is consistent with long-term financial value creation.</div>
				<div className="btn-container">
					<Link href="#" className="btn learn-more button-clr">
						<span className="icon fa fa-angle-right angl-rht" aria-hidden="true"></span>
						<span className="BoldFont">Learn more</span>
					</Link>
				</div>
			</div>		
		</div>
		
	</div>
</div>
{/* Corporate Section End */}


{/* Footer Section Start */}
<footer className="footer">
    <div className="container-fluid">

        <h2 className="footer-title BoldFont">Explore more</h2>

        <div className="footer-sections">

            <div className="col-md-2 col-sm-6 footer-column">
                <h3 className="BoldFont">About Us</h3>
                <hr />
                <ul>
                    <li><Link href="#">About BlackRock</Link></li>
                    <li><Link href="#">Principles</Link></li>
                    <li><Link href="#">Leadership</Link></li>
                    <li><Link href="#">History</Link></li>
                    <li><Link href="#">Contacts and Locations</Link></li>
                </ul>
            </div>

            <div className="col-md-2 col-sm-6 footer-column">
                <h3 className="BoldFont">Newsroom</h3>
                <hr />
                <ul>
                    <li><Link href="#">Overview</Link></li>
                    <li><Link href="#">Media Contacts</Link></li>
                </ul>
            </div>

            <div className="col-md-2 col-sm-6 footer-column">
                <h3 className="BoldFont">Insights</h3>
                <hr />
                <ul>
                    <li><strong className="BoldFont">INSIGHTS & VIEWS</strong></li>
                    <li><Link href="#">BlackRock Investment Institute</Link></li>
                    <li><Link href="#">Investment Stewardship</Link></li>
                    <li><Link href="#">Our approach to sustainability</Link></li>
                    <li><Link href="#">Public Policy</Link></li>
                </ul>
            </div>

            <div className="col-md-2 col-sm-6 footer-column">
                <h3 className="BoldFont">Investor Relations</h3>
                <hr />
                <ul>
                    <li><Link href="#">Overview</Link></li>
                    <li><Link href="#">Annual Reports & Proxy Information</Link></li>
                    <li><Link href="#">SEC Filings</Link></li>
                    <li><Link href="#">Stock Information</Link></li>
                    <li><Link href="#">Dividend History</Link></li>
                    <li><Link href="#">Events & Presentations</Link></li>
                    <li><Link href="#">Corporate Governance</Link></li>
                </ul>
            </div>

            <div className="col-md-2 col-sm-6 footer-column">
                <h3 className="BoldFont">Corporate Sustainability</h3>
                <hr />
                <ul>
                    <li><strong className="BoldFont">BLACKROCK SUSTAINABILITY</strong></li>
                    <li><Link href="#">Corporate Sustainability</Link></li>
                    <li><Link href="#">Human Capital</Link></li>
                    <li><Link href="#">Environmental Sustainability</Link></li>
                    <li><Link href="#">Ethics & Integrity</Link></li>
                    <li><Link href="#">Health & Safety</Link></li>
                    <li><Link href="#">Social Impact</Link></li>
                </ul>
            </div>

            <div className="col-md-2 col-sm-6 footer-column">
                <h3 className="BoldFont">Careers</h3>
                <hr />
                <ul>
                    <li><strong className="BoldFont">CAREERS AT BLACKROCK</strong></li>
                    <li><Link href="#">Search Jobs</Link></li>
                    <li><Link href="#">Life at BlackRock</Link></li>
                    <li><Link href="#">Benefits</Link></li>
                    <li><Link href="#">Career Development</Link></li>
                    <li><Link href="#">Students & Graduates</Link></li>
                    <li><Link href="#">Supporting Veterans</Link></li>
                    <li><Link href="#">BlackRock Alumni Network</Link></li>
                </ul>
            </div>

        </div>
    </div>
</footer>

<footer className="footer2">
  <div className="footer-container">

    <div className="footer-left">
      <img src="images/logo/blackrock-logo-white.svg" alt="" />
      <p>
        As a global investment manager and fiduciary to our clients, our purpose at BlackRock is to help everyone experience financial well-being. Since 1999, we've been a leading provider of financial technology, and our clients turn to us for the solutions they need when planning for their most important goals.
      </p>
    </div>

    <div className="footer-right">

      <div className="footer-column2">
        <h4 className="orange-title">CORPORATE</h4>
        <ul>
          <li><Link href="#">Fraud protection tips</Link></li>
          <li><Link href="#">Careers</Link></li>
          <li><Link href="#">Newsroom</Link></li>
          <li><Link href="#">Investor relations</Link></li>
          <li><Link href="#">UK Corporate Tax Strategy</Link></li>
          <li><Link href="#">UK Gender Pay Reporting</Link></li>
          <li><Link href="#">Accessibility</Link></li>
          <li><Link href="#">Responsible Disclosure</Link></li>
        </ul>
      </div>

      <div className="footer-column2">
        <h4 className="orange-title">LEGAL</h4>
        <ul>
          <li><Link href="#">Terms & Conditions</Link></li>
          <li><Link href="#">Privacy Notice</Link></li>
          <li><Link href="#">Business Continuity</Link></li>
          <li><Link href="#">FINRA BrokerCheck</Link></li>
          <li><Link href="#">Best Ex & Order Placement Policy</Link></li>
          <li><Link href="#">Rule 606 Disclosure</Link></li>
          <li><Link href="#">Investor Rights</Link></li>
          <li><Link href="#">Cookie Notice</Link></li>
          <li><Link href="#">Manage Cookies</Link></li>
        </ul>
      </div>

    </div>

  </div>
</footer>


<div className="clear"></div>	
<div className="copyright">© 2025 BlackRock, Inc. All rights reserved.</div>
<div className="clear"></div>
<div className="copyright-cnt">This material is intended for information purposes only, and does not constitute invest ent advice, a recommendation or an offer or solicitation to purchase or sell any securities, funds or strategies to any person in any jurisdiction in which an offer, solicitation, purchase or sale would be unlawful under the securities laws of such jurisdiction. The opinions expressed are subject to change without notice. Reliance upon information in this material is at the sole discretion of the reader. Investing involves risks.</div>
<div className="copyright-cnt">This document is marketing material: Before investing please read the Prospectus and the PRIIPs KID available on www.blackrock.com/it, which contain a summary of investors’ rights.</div>


<div className="copyright-cnt"><strong className="BoldFont">In the UK and Non-European Economic Area (EEA) countries</strong>: this is Issued by BlackRock Investment Management (UK) Limited, authorised and regulated by the Financial Conduct Authority. Registered office: 12 Throgmorton Avenue, London, EC2N 2DL. Tel: + 44 (0)20 7743 3000. Registered in England and Wales No. 02020394. For your protection telephone calls are usually recorded. Please refer to the Financial Conduct Authority website for a list of authorised activities conducted by BlackRock.</div>
<div className="copyright-cnt"><strong className="BoldFont">In the European Economic Area (EEA):</strong> this is Issued by BlackRock (Netherlands) B.V. is authorised and regulated by the Netherlands Authority for the Financial Markets. Registered office Amstelplein 1, 1096 HA, Amsterdam, Tel: 020 – 549 5200, Tel: 31-20-549-5200. Trade Register No. 17068311 For your protection telephone calls are usually recorded.</div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">Switzerland</strong>:&nbsp;This document is marketing material. Issued by BlackRock Investment Management (UK) Limited, authorized and regulated by the Financial Conduct Authority. Registered office: 12 Throgmorton Avenue, London, EC2N 2DL. Tel: + 44 (0)20 7743 3000. Registered in England and Wales No. 02020394. For your protection telephone calls are usually recorded.</div>
<div className="copyright-cnt">In <strong className="BoldFont">Israel</strong>: BlackRock Investment Management (UK) Limited is not licenced under Israel's Regulation of Investment Advice, Investment Marketing and Portfolio Management Law, 5755-1995 (the “Advice Law”), nor does it carry insurance thereunder.</div>
<div className="copyright-cnt">In <strong className="BoldFont">South Africa</strong>: Please be advised that BlackRock Investment Management (UK) Limited is an authorised Financial Services provider with the South African Financial Services Conduct Authority, FSP No. 43288.</div>
<div className="copyright-cnt">In the&nbsp;<strong className="BoldFont">U.S.&nbsp;</strong>and&nbsp;<strong className="BoldFont">Canada</strong>, this material is intended for public distribution.</div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">Latin America</strong>:&nbsp;No securities regulator has confirmed the accuracy of any information contained herein. The provision of investment management and investment advisory services is a regulated activity in Mexico thus is subject to strict rules. For more information on the Investment Advisory Services offered by BlackRock Mexico please refer to the Investment Services Guide available at <Link href="#">www.blackrock.com/mx</Link></div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">Singapore</strong>, this is issued by BlackRock (Singapore) Limited (Co. registration no. 200010143N). This advertisement or publication has not been reviewed by the Monetary Authority of Singapore.</div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">Hong Kong</strong>, this material is issued by BlackRock Asset Management North Asia Limited and has not been reviewed by the Securities and Futures Commission of Hong Kong.</div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">South Korea</strong>,&nbsp;this is issued by BlackRock Investment Management (Korea) Limited. For information or educational purposes only, not for reuse, redistribution, or any commercial activity, and does not constitute investment advice or an offer or solicitation to purchase or sells in any securities or any investment strategies.</div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">Taiwan</strong>, independently operated by BlackRock Investment Management (Taiwan) Limited. Address: 28F., No. 100, Songren Rd., Xinyi Dist., Taipei City 110, Taiwan. Tel: (02)23261600.</div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">Australia</strong>, issued by BlackRock Investment Management (Australia) Limited ABN 13 006 165 975 AFSL 230 523 (BIMAL). The material provides general information only and does not take into account your individual objectives, financial situation, needs or circumstances.</div>
<div className="copyright-cnt">In&nbsp;<strong className="BoldFont">China</strong>, this material is provided for informational or educational purposes in People’s Republic of China ("PRC", for such purposes, excluding Hong Kong, Macau and Taiwan) only and does not constitute a solicitation of any securities or BlackRock funds or any financial services in any jurisdiction in which such solicitation is unlawful or to any person to whom it is unlawful.</div>

<div className="copyright-cnt">©2025 BlackRock, Inc. All Rights Reserved. BLACKROCK is a trademark of BlackRock, Inc., or its subsidiaries in the United States and elsewhere. All other trademarks are those of their respective owners.</div>
<div className="copyright-cnt">MKTGM0225U/M-4282261</div>
{/* Footer Section End */}



      </main>     
    </div>
  )
}





