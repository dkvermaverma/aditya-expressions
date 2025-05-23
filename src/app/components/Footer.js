import Link from 'next/link';

export default function Footer() {
    return (
        <>
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
                        <Image src="images/logo/blackrock-logo-white.svg" alt="" />
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


        </>
    );
}
