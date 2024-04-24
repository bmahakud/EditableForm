import React, { useState } from "react";
import classes from "./preview.module.css";
import p1 from "./search.png";
import p2 from "./download.png";
import p3 from "./profile (1).png";
import p4 from "./question.png";
import p5 from "./teach.jpg";
import p6 from "./layer.png";
import p7 from "./down-arrow.png";
import p8 from "./Template1.png";
import p9 from "./Template2.png";
import p10 from "./Template3.png";
import p11 from './logo2.png';

import { useNavigate } from "react-router-dom";

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const history = useNavigate();
  const formHandler = () => {
    history("/form/build");
  };
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.logoContainer}>
            <img src={p11} alt="SAP Logo" className={classes.logo} />
            <span className={classes.companyName}>
              Assertive Solutions Ltd.
            </span>
          </div>
          <div className={classes.Text}>Invoice Builder</div>
          <div className={classes.blueStripe}>
            <div className={classes.dropdownBox}>
             Template Selection
            </div>
          </div>
        </div>
        <div className={classes.headerMiddle}>
          <div className={classes.newCustomerForm}>
            New Customer Invoice Form
          </div>
        </div>
        <div className={classes.headerRight}>
          <div className={classes.Collaborators}>
            <img
              src={p3}
              alt="Add collaborator"
              className={classes.headerIcon}
            />{" "}
            Add collaborator
          </div>
          <div className={classes.help}>
            <img src={p4} alt="Help" className={classes.headerIcon} /> Help
          </div>
          <div className={classes.profileicon}>
            <div className={classes.Blank}></div>
            <img src={p5} className={classes.pic} alt="Profile" />
          </div>
        </div>
      </header>
      <div className={classes.textBelowBlueStripe}>
     
        <div className={classes.chooseTemplate}>Choose a template</div>
        <div className={classes.exploreTemplates}>
          Explore ready-made templates to create a form in minutes or
          create form from scratch
        </div>
      </div>
      <div className={classes.searchbox}>
     
        <input
          type="text"
          placeholder="Search..."
          className={classes.searchInput}
        />
        <button className={classes.searchButton}>
          <img src={p1} alt="Search" className={classes.searchIcon} />
        </button>
      </div>
     
      <div className={classes.templatebox}>
        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p8} className={classes.img} alt="Template 1" />
            <div className={classes.previewtext}>New Customer Invoice</div>
          </div>
          <div className={classes.use} onClick={formHandler}>
            Use Template
          </div>
        </div>
        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p9} className={classes.img} alt="Template 2" />
            <div className={classes.previewtext}>Business Invoice</div>
          </div>
          <div className={classes.use} onClick={formHandler}>
            Use Template
          </div>
        </div>
        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p10} className={classes.img} alt="Template 3" />
            <div className={classes.previewtext}>
              Personal Business Template
            </div>
          </div>
          <div className={classes.use} onClick={formHandler}>
            Use Template
          </div>
        </div>
        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p8} className={classes.img} alt="Template 1" />
            <div className={classes.previewtext}>Professional Template</div>
          </div>
          <div className={classes.use} onClick={formHandler}>
            Use Template
          </div>
        </div>
      </div>

      <footer className={classes.footer}>
        <div className={classes.footerContent}>
          <div className={classes.footerColumn}>
            <h4>Assertive  Solutions Ltd. </h4>
            <ul>
              <li>Create a Form</li>
              <li>My Forms</li>
              <li>Pricing</li>
              <li>Assertive Solution Pvt. Ltd.</li>
              <li>Examples</li>
              <li>Products</li>
              <li>Features</li>
              <li>Tools</li>
              <li>Alternatives</li>
              <li>Marketplace</li>
            </ul>
          </div>
          <div className={classes.footerColumn}>
            <h4>Templates</h4>
            <ul>
              <li>Form Themes</li>
              <li>Form Widgets</li>
              <li>Integrations</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={classes.footerColumn}>
            <h4>Contact Us</h4>
            <ul>
              <li>User Guide</li>
              <li>Help</li>
              <li>Assertive Academy</li>
              <li>Webinars</li>
              <li>Professional Services</li>
              <li>Report Abuse</li>
              <li>Report Copyright Issue</li>
            </ul>
          </div>
          <div className={classes.footerColumn}>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Media Kit</li>
              <li>In the News</li>
              <li>Newsletters</li>
              <li>Partnerships</li>
              <li>Blog</li>
              <li>Apps</li>
            </ul>
          </div>
        </div>
        <div className={classes.footerBottom}>
          <p>
            4 Embarcadero Center, Suite 780, New York CA 94111 <br />© 2024
            Assertive Sol. The name "Assertive" and the Assertive logo are registered
            trademarks of Assertive Inc.
          </p>
          <div className={classes.footerLanguage}>
            <span>English</span>
          </div>
          <div className={classes.footerLinks}>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Security</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
