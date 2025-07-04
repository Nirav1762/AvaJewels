import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import Links from '../Components/Links';
import { Link } from 'react-router-dom'

const Privacy = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [overrideScrolled] = useState(true);
    const [overrideDelay] = useState(true);

    useEffect(() => {
    window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showSearch={showSearch} setShowSearch={setShowSearch} showCart={showCart} setShowCart={setShowCart} overrideScrolled={overrideScrolled} overrideDelay={overrideDelay} />
        {showMenu && <Menu setShowMenu={setShowMenu} />} {showSearch && <Search setShowSearch={setShowSearch} />} {showCart && <Cart setShowCart={setShowCart} />}
        <div className="navbar-spacer"></div>

        <div className='legalsSection'>
            <div className='legalsHeader'>PRIVACY POLICY</div>
            <div className='legalsText'> <p>Last updated: 15.1.2025</p> This Privacy Policy describes how AVA Jewels (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from <Link to ="/" style={{color: 'black'}}>avajewels.com</Link> (the "Site") or otherwise communicate with us (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.</div>

            <div className='legalsSubHeader'>CHANGES TO THIS PRIVACY POLICY</div>
            <div className='legalsText'>We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.</div>

            <div className='legalsSubHeader'>HOW WE COLLECT AND USE YOUR PERSONAL INFORMATION</div>
            <div className='legalsText'><p>To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.</p><p>In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</p></div>

            <div className='legalsSubHeader'>WHAT PERSONAL INFORMATION WE COLLECT</div>
            <div className='legalsText'>The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.</div>

            <div className='legalsSubHeader'>INFORMATION WE COLLECT DIRECTLY FROM YOU</div>
            <div className='legalsText'><p>Information that you directly submit to us through our Services may include:</p>
                <p><li>Basic contact details including your name, address, phone number, email.</li></p>
                <p><li>Booking information including your name, billing address, payment confirmation, email address, phone number.</li></p>
                <p><li>Account information including your username, password, security questions.</li></p>
                <p><li>Shopping information including the items you view, put in your cart or book.</li></p>
                <p><li>Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</li></p>
                <p>Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.</p>
            </div>

            <div className='legalsSubHeader'>INFORMATION WE COLLECT THROUGH COOKIES</div>
            <div className='legalsText'>We also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.</div>

            <div className='legalsSubHeader'>INFORMATION WE OBTAIN FROM THIRD PARTIES</div>
            <div className='legalsText'><p>Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:</p>
                <p><li>Companies who support our Site and Services, such as Shopify.</li></p>
                <p><li>Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.</li></p>
                <p><li>When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.</li></p>
                <p>Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party's policies or practices.</p>
            </div>

            <div className='legalsSubHeader'>USER GENERATED CONTENT</div>
            <div className='legalsText'><p>The Services may enable you to post product reviews and other user-generated content. If you choose to submit user generated content to any public area of the Services, this content will be public and accessible by anyone.</p>
            <p>We do not control who will have access to the information that you choose to make available to others, and cannot ensure that parties who have access to such information will respect your privacy or keep it secure. We are not responsible for the privacy or security of any information that you make publicly available, or for the accuracy, use or misuse of any information that you disclose or receive from third parties. </p></div>

            <div className='legalsSubHeader'>SECURITY AND RETENTION OF YOUR INFORMATION</div>
            <div className='legalsText'><p>Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee “perfect security.” In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.</p>
            <p>How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.</p></div>

            
            <div className='legalsSubHeader'>COMPLAINTS</div>
            <div className='legalsText'><p>If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.</p></div>
        </div>
        <Links />
    </div>
  )
}

export default Privacy
