import Link from 'next/link';

export default function Hero() {
    return (
        <>
       
            <div className="container-fluid home-bnr-bg">
                <div className="row m-0">
                    <div className="col-sm-12 col-md-6 home-banner-tp">
                        <h1 className="BoldFont">Preqin is now a part of >BlackRock</h1>
                        <div className="description">Combining Preqins investment data</div>

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
        </>
    );
}
