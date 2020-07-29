import React from 'react';
import './style.scss'
import IconMan from './asstest/images/IconMan.png'
import IconSearch from './asstest/images/IconSearch.svg'
import map from './asstest/images/map.svg'
import bookmark from './asstest/images/bookmark.svg'
import Adam from './asstest/images/adam.png'
import James from './asstest/images/James.png'
import Andrew from './asstest/images/Andrew.png'
import Elisabeth from './asstest/images/Elisabeth.png'
import Jam from './asstest/images/Jam.png'
import Andre from './asstest/images/Andre.png'
import Anna from './asstest/images/Anna.png'
import JamesImg from './asstest/images/James_Img.png'
import Eleonora from './asstest/images/Eleonora.png'
import AnnaS from './asstest/images/AnnaS.png'
import Roven from './asstest/images/Roven.png'
import Eleonor from './asstest/images/Eleonor.png'
import Tontri from './asstest/images/Tontri.png'
import Gillian from './asstest/images/Gillian.png'

import facebook from './asstest/images/facebook.svg'
import twiter from './asstest/images/twiter.png'
import linkedin from './asstest/images/linkedin.png'
import instagram from './asstest/images/instagram.svg'
import rigth from './asstest/images/rigth.svg'
import iconsNav from './asstest/images/iconsNav.png'



class App extends React.Component {
    render() {
        return (
            <main>
                <header>
                    <div className="header-main">
                        <img className="iconNav" src={iconsNav} alt="iconsNav" />
                        {/* <span className="fa fa-bars"></span> */}
                        <div className="group-icon">
                            <img src={IconSearch} alt="header_icon2" />
                            <img src={IconMan} alt="header_icon3" />
                        </div>
                    </div>
                </header>

                <section className="main-Images">
                    <div className="cover">
                        {/* <img className="main-img" src={mainImg} style={{ width: "100%" }} alt="main-img"/> */}
                    </div>

                    <div className="foundation">
                        <div className="foundation-main">
                            <span>Goal</span>
                            <h2>$ 1150000<span> of </span> <p>$ 1132500 raised</p></h2>
                            <p className="foundation-text"><span className="foundation-color">*</span> 40% of required amount was donated by Charity <span className="foundation-span">Foundation</span></p>

                            <div className="foundation-form">
                                <input type="text" placeholder="Domation amount"></input>
                                <select>
                                    <option value="USD">USD</option>
                                    <option value="AMD">AMD</option>
                                </select>
                            </div>

                            <button>DONATE NOW</button>
                            <h5 className="foundation-text-end1">Can help with anything else?<p className="foundation-text-end2"> More about it</p></h5>

                        </div>

                    </div>

                    <div className="hospital">
                        <div className="hospital-map">
                            <img src={map} alt="images" />
                            <span> &ensp;Yerevan, Armenia</span>
                        </div>
                        <h1>Gyumri Hospital Reconstruction</h1>
                        <div className="hospital-bookmark">
                            <img src={bookmark} alt="images" />
                            <span> &ensp;Save project</span>
                        </div>
                        <div className="hospital-result">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="hospital-collect">
                            <div>
                                <p>Work progress</p>
                                <h6>for 07 Nov</h6>
                            </div>

                            <div>
                                <p>Collected</p>
                                <h6>$ 1132500‬</h6>
                            </div>
                        </div>

                    </div>
                </section>
                <section>

                    <div className="second-header">
                        <div className="second-header-main">
                            <a className="about" href="about">About</a>
                            <a className="coments" href="comments">Comments</a>
                        </div>

                        <div className="second-header-number">
                            <div className="second-header-nov">
                                <h5>25 Nov</h5>
                                <p>Finish</p>
                            </div>
                            <div>
                                <h5>1982</h5>
                                <p>Donators</p>
                            </div>
                        </div>
                    </div>

                    <section className="list-flex">
                        <div className="div-list">
                            <div className="Adam">
                                <img src={Adam} alt="images" />
                                <div className="Adam-input">
                                    <input placeholder="Write your comment..."></input>
                                    <p>+ Upload image</p>
                                </div>
                            </div>
                            <div className="collect">
                                <h5>46 comments</h5>
                                <ul className="list">
                                    <li>
                                        <img src={Adam} className="img" alt="images" />
                                        <div>
                                            <div>
                                                <h5>Adam Smith</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <p className="list-p ">Very good job!</p>
                                        </div>
                                    </li>

                                    <li>
                                        <img src={James} className="img" alt="James" />
                                        <div>
                                            <div>
                                                <h5>James Stewart</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <img className="james" src={JamesImg} alt="James" />
                                        </div>
                                    </li>

                                    <li>
                                        <img src={Andrew} className="img" alt="Andrew" />
                                        <div>
                                            <div>
                                                <h5>Andrew Ralphen-Sow</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <p className="list-p ">Lets get together!!!</p>
                                        </div>
                                    </li>

                                    <li>
                                        <img src={Elisabeth} className="img" alt="Elisabeth" />
                                        <div>
                                            <div>
                                                <h5>Elisabeth Jefferson</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <p className="list-p ">Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too</p>
                                        </div>
                                    </li>

                                    <li>
                                        <img src={Adam} className="img" alt="Adam" />
                                        <div>
                                            <div>
                                                <h5>Adam Smith</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <p className="list-p ">Very good job!</p>
                                        </div>
                                    </li>


                                    <li>
                                        <img src={Jam} className="img" alt="Jam" />
                                        <div>
                                            <div>
                                                <h5>James Stewart</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <p className="list-p ">I am glad that some foundation is trying to make our city more beautiful</p>
                                        </div>
                                    </li>

                                    <li>
                                        <img src={Andre} className="img" alt="Andre" />
                                        <div>
                                            <div>
                                                <h5>Andrew Ralphen-Sow</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <p className="list-p ">Lets get together!!!</p>
                                        </div>
                                    </li>

                                    <li>
                                        <img src={Anna} className="img" alt="Anna" />
                                        <div>
                                            <div>
                                                <h5>Anna Jefferson</h5>
                                                <p>Oct 29 16:47</p>
                                            </div>
                                            <p className="list-p ">Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too</p>
                                        </div>

                                    </li>

                                </ul>
                                <h4 className="comment">Load more comments</h4>
                            </div>
                        </div>


                        <aside>
                            <div>
                                <h3>Donations</h3>
                                <ul>
                                    <li>
                                        <img src={Eleonora} alt="Elonora" />
                                        <div>
                                            <p>22 Oct 16:04</p>
                                            <h4>Eleonora Saimon</h4>
                                        </div>
                                        <h5>$60</h5>
                                    </li>

                                    <li>
                                        <img src={AnnaS} alt="AnnaS" />
                                        <div>
                                            <p>22 Oct 15:07</p>
                                            <h4>Anna Smith</h4>
                                        </div>
                                        <h5>$40</h5>
                                    </li>

                                    <li>
                                        <img src={Roven} alt="Roven" />
                                        <div>
                                            <p>22 Oct 10:49</p>
                                            <h4>Roven Joseph Smith</h4>
                                        </div>
                                        <h5>$50</h5>
                                    </li>

                                    <li>
                                        <img src={Eleonor} alt="Elonor" />
                                        <div>
                                            <p>21 Oct 22:17</p>
                                            <h4>Eleonora Saimon</h4>
                                        </div>
                                        <h5>$70</h5>
                                    </li>

                                    <li>
                                        <img src={Tontri} alt="Tontri" />
                                        <div>
                                            <p>21 Oct 15:09</p>
                                            <h4>Tontri Qutier</h4>
                                        </div>
                                        <h5>$80</h5>
                                    </li>

                                    <li>
                                        <img src={Gillian} alt="Gillian" />
                                        <div>
                                            <p>21 Oct 10:08</p>
                                            <h4>Gillian Silence</h4>
                                        </div>
                                        <h5>$150</h5>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </section>


                </section>

                <footer>
                    <div className="footer-main">
                        <div className="footer-call">
                            <p>Tel: &ensp; <span> &ensp; +3740111111</span></p>
                            <p>Mail: &ensp; <span> charity@gmail.com</span></p>

                        </div>

                        <div className="footer-compony">
                            <h4>Company</h4>
                            <ul>
                                <li>Home</li>
                                <li>Projects</li>
                                <li>Community</li>
                                <li>About us</li>
                                <li>News</li>
                            </ul>
                        </div>
                        <div className="footer-halp">
                            <h4>Help and Support</h4>
                            <ul>
                                <li>FAQ</li>
                                <li>Terms and Condition</li>
                                <li>Privacy Policy</li>
                                <li>Contacts</li>
                            </ul>
                        </div>

                        <div className="footer-follow">
                            <h4>Follow us in social</h4>
                            <div className="footer-img">
                                <img src={facebook} alt="facebook" />
                                <img src={twiter} alt="twiter" />
                                <img src={linkedin} alt="linkedin" />
                                <img src={instagram} alt="instagram" />
                            </div>
                            <h5>Subscribe for new projects</h5>
                            <div className="footer-email">
                                <p>Your email</p>
                                <img src={rigth} alt="rigth" />
                            </div>
                        </div>

                    </div>
                    <h6 className="finish">Address Line, Yerevan, RA, 374154</h6>
                </footer>
            </main>
        );
    }
}

export default App;
