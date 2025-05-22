import Link from 'next/link';

export default function Hero() {
    return (
        <>
            {/* Banner Section Start */}
            <div className="container-fluid home-bnr-bg">
                <div className="row m-0">
                    <div className="col-sm-12 col-md-6 home-banner-tp">
                        <h1 className="BoldFont">Preqin is now a part of <br />BlackRock</h1>
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
        </>
    );
}