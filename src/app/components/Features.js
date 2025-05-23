import Link from 'next/link';
import Image from 'next/image';

export default function Features() {
    return (
        <>
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
                        <div className="cor-sus-section"><Image src="images/icons/people-icon.jpg" alt="" className="img-responsive" /></div>
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
                        <div className="cor-sus-section"><Image src="images/icons/lightbulb-icon.jpg" alt="" className="img-responsive" /></div>
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
        </>
    );
}
