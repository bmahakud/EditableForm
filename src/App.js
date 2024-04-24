import React from 'react';
import classes from './App.module.css'; 
import p1 from './search.png';
import p2 from './download.png';
import p3 from './profile (1).png';
import p4 from './question.png';
import p5 from './teach.jpg';
import p6 from './home (1).png';
import p7 from './draft (2).png';
import p8 from './share (2).png';
import p9 from './new-message (1).png';
import p10 from './invoice (1).png';
import p11 from './add.png';
import p12 from './logo2.png';


import { useNavigate } from 'react-router-dom';


const App = () => {
  const history = useNavigate();
  const previewHandler = () => {
    history("/preview");
  }
  return (
    <div className={classes.app}>
        <header className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.logoContainer}>
            <img src={p12} alt="SAP Logo" className={classes.logo} />
            <span className={classes.companyName}>Assertive Solutions Ltd.</span>
          </div>
          <div className={classes.Text}>Invoice Builder</div>
          <div className={classes.blueStripe}>
          <div className={classes.invoiceText}>Invoice Landing Page</div>
          
          </div>
        </div>
        <div className={classes.headerMiddle}>
          <div className={classes.newCustomerForm}>New Customer Invoice Form</div>
        </div>
        <div className={classes.headerRight}>
  <div className={classes.Collaborators}>
  <img src={p3} alt="Add collaborator" className={classes.headerIcon} /> Add collaborator </div>
  <div className={classes.help}>
  <img src={p4} alt="Help" className={classes.headerIcon} /> Help</div>
  <div className={classes.profileicon}>
    <div className={classes.Blank}></div>
    <img src={p5} className={classes.pic}></img>
  </div>
</div>
      </header>
      <div className={classes.Maincontent}>

      <div className={classes.sidebar}>
  <ul>
    <li><img src={p6} alt="Home Icon" className={classes.sidebarIcon} /><a href="#">Home</a></li>
    <li><img src={p7} alt="Drafts Icon" className={classes.sidebarIcon} /><a href="#">My Drafts</a></li>
    <li><img src={p8} alt="Shared Icon" className={classes.sidebarIcon} /><a href="#">Shared With</a></li>
    <li><img src={p9} alt="Shared Icon" className={classes.sidebarIcon} /><a href="#">What's New</a></li>
    <li><img src={p10} alt="Shared Icon" className={classes.sidebarIcon} /><a href="#">Invoice</a></li>
  </ul>
</div>

      <div className={classes.content}>
        <header className={classes.header1}>

        <div className={classes.searchbox1}>
            <div className={classes.searchdropdown1}>
              <select>
                <option value="search_invoice">Filter Invoice</option>
                <option value="search_invoice"> Invoice</option>
                <option value="search_project"> Invoice for Project</option>
                <option value="search_client">Invoice for Client</option>
              </select>          
            </div>
          </div>

        <div className={classes.searchbox}>
  
  <div className={classes["search-dropdown"]}>
    <input type="text"   style={{height:"18px"}}placeholder="Search..." />
    <button>
    <img src={p1} alt="Search Icon" className={classes["search-icon"]} />
      Search</button>
  </div>
</div>


        
        </header>
        <div className={classes.tablecontainer}>
          
    
          <table className={classes.datatable}>
            <thead>
              <tr>
                <th>#</th>
                <th>Invoice No</th>
                <th>Client No</th>
                <th>Project No</th>
                <th>Billing Type</th>
                <th>Invoice Amount</th>
                <th>Professional Service</th>
                <th>Value</th>
                <th>Admin Surcharge</th>
                <th>Expenses</th>
                <th>Discount</th>
                <th>Write-off</th>
                <th>Select Template</th>
              </tr>
            </thead>
            <tbody>
             
              <tr>
                <td>1</td>
                <td>INV001</td>
                <td>C001</td>
                <td>P001</td>
                <td>Hourly</td>
                <td>$1000</td>
                <td>Yes</td>
                <td>$900</td>
                <td>$50</td>
                <td>$100</td>
                <td>10%</td>
                <td>No</td>
                <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>              </tr>
            
              <tr>
                <td>2</td>
                <td>INV002</td>
                <td>C002</td>
                <td>P002</td>
                <td>Fixed Price</td>
                <td>$1500</td>
                <td>No</td>
                <td>$1300</td>
                <td>$70</td>
                <td>$200</td>
                <td>5%</td>
                <td>Yes</td>
                <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>               </tr>
              <tr>
                <td>3</td>
                <td>INV003</td>
                <td>C003</td>
                <td>P003</td>
                <td>Hourly</td>
                <td>$1200</td>
                <td>Yes</td>
                <td>$1100</td>
                <td>$60</td>
                <td>$150</td>
                <td>8%</td>
                <td>No</td>
                <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>               </tr>
             
            </tbody>

           
  
  
    <tr>
      <td>4</td>
      <td>INV004</td>
      <td>C004</td>
      <td>P004</td>
      <td>Hourly</td>
      <td>$1000</td>
      <td>Yes</td>
      <td>$900</td>
      <td>$50</td>
      <td>$100</td>
      <td>10%</td>
      <td>No</td>
      <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>     </tr>
    <tr>
      <td>5</td>
      <td>INV005</td>
      <td>C005</td>
      <td>P005</td>
      <td>Fixed Price</td>
      <td>$1500</td>
      <td>No</td>
      <td>$1300</td>
      <td>$70</td>
      <td>$200</td>
      <td>5%</td>
      <td>Yes</td>
      <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>     </tr>
    <tr>
      <td>6</td>
      <td>INV006</td>
      <td>C006</td>
      <td>P006</td>
      <td>Hourly</td>
      <td>$1200</td>
      <td>Yes</td>
      <td>$1100</td>
      <td>$60</td>
      <td>$150</td>
      <td>8%</td>
      <td>No</td>
      <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>     </tr>
   
    <tr>
      <td>7</td>
      <td>INV007</td>
      <td>C007</td>
      <td>P007</td>
      <td>Hourly</td>
      <td>$1100</td>
      <td>No</td>
      <td>$1000</td>
      <td>$55</td>
      <td>$120</td>
      <td>7%</td>
      <td>No</td>
      <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>     </tr>
    <tr>
      <td>8</td>
      <td>INV008</td>
      <td>C008</td>
      <td>P008</td>
      <td>Fixed Price</td>
      <td>$1600</td>
      <td>Yes</td>
      <td>$1400</td>
      <td>$75</td>
      <td>$250</td>
      <td>6%</td>
      <td>Yes</td>
      <td>
  <button className={classes.button} onClick={previewHandler}>
    <img src={p11} className={classes.add} alt="Add" />
    <span className={classes.tooltip}>Select Template</span>
  </button>
</td>     </tr>

          </table>
        </div>
      </div>
</div>
     {/*
      <footer className={classes.footer}>
        <div className={classes.footerContent}>
          <div className={classes.footerColumn}>
            <h4>Assertive Innovation Solution</h4>
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
    */}



    </div>
  );
};

export default App;
