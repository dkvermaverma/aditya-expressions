import Link from 'next/link';

export default function Header() {
    return (
        <>
            {/* Header Section Start */}
            <div className="navigation-top">
                <ul className="p-lr40">
                    <li><Link href="#">BlackRock</Link></li>
                    <li><Link href="#">iShares</Link></li>
                    <li><Link href="#">Aladdin</Link></li>
                    <li><Link href="#">Our company</Link></li>
                    <li className="pab-r0"><Link href="#">Local websites</Link></li>
                </ul>
            </div>
            <div className="navbar navbar-default navbar-static-top">
                <div className="container-fluid p-lr40">

                    <div className="navbar-header p-lrb21">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" href="/"><Image src="images/logo/blackrock-logo.svg" alt="BlackRock" /></Link>
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
        </>
    );
}
