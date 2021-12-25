import React from 'react'

function Contact() {
  return (
    <div>
      <div className="page-heading about-page-heading" id="top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-content">
                        <h2>Contact Us</h2>
                        <span>Awesome, clean &amp; creative HTML5 Template</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div id="map">
                      <image src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth" width="100%" height="400px" frameborder="0" style={{"border":"0"}} allowfullscreen/>
                      
                      
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-heading">
                        <h2>Say Hello. Don't Be Shy!</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    <form id="contact" action="" method="post">
                        <div className="row">
                          <div className="col-lg-6">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your name" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="Your email" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                              </fieldset>
                          </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
    <div className="subscribe">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-heading">
                        <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div className="row">
                          <div className="col-lg-5">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-5">
                            <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-2">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Store Location:<br/><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                <li>Phone:<br/><span>010-020-0340</span></li>
                                <li>Office Location:<br/><span>North Miami Beach</span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Work Hours:<br/><span>07:30 AM - 9:30 PM Daily</span></li>
                                <li>Email:<br/><span>info@company.com</span></li>
                                <li>Social Media:<br/><span><a href="/">Facebook</a>, <a href="/">Instagram</a>, <a href="/">Behance</a>, <a href="/">Linkedin</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="first-item">
                        <div className="logo">
                            <img src="assets/images/white-logo.png" alt="hexashop ecommerce templatemo"/>
                        </div>
                        <ul>
                            <li><a href="/">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                            <li><a href="/">hexashop@company.com</a></li>
                            <li><a href="/">010-020-0340</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h4>Shopping &amp; Categories</h4>
                    <ul>
                        <li><a href="/">Men's Shopping</a></li>
                        <li><a href="/">Women's Shopping</a></li>
                        <li><a href="/">Kid's Shopping</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4>Help &amp; Information</h4>
                    <ul>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">FAQ's</a></li>
                        <li><a href="/">Shipping</a></li>
                        <li><a href="/">Tracking ID</a></li>
                    </ul>
                </div>
                <div className="col-lg-12">
                    <div className="under-footer">
                        <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved. 
                        
                        <br/>Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a>

                        <br/>Distributed By: <a href="/https://themewagon.com" target="_blank" title="free & premium responsive templates">ThemeWagon</a></p>
                        <ul>
                            <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="/"><i className="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      
    </div>
  )
}

export default Contact;
