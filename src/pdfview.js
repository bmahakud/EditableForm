import React from "react";
import { useState } from "react";
import classes from "./form.module.css";
import p2 from "./download.png";
import p3 from "./profile (1).png";
import p4 from "./question.png";
import p5 from "./teach.jpg";
import p6 from "./heading (1).png";
import p7 from "./id-card.png";
import p8 from "./mail (1).png";
import p9 from "./location (1).png";
import p10 from "./event.png";
import p11 from "./calendar (1).png";
import p12 from "./curvature (1).png";
import p13 from "./feature.png";
import p14 from "./images (1).png";
import p15 from "./logo2.png";
import p16 from "./edit.png";
import p17 from "./delete.png";
import p18 from "./duplicate (1).png";
import p19 from "./art.png";
import p20 from './capital-letter.png';

import {useNavigate} from 'react-router-dom';

const Invoice = () => {



  const history = useNavigate();

  const products = [
    { name: "Product 1", quantity: 1, unitPrice: 10 },
    { name: "Product 2", quantity: 2, unitPrice: 20 },
    { name: "Product 3", quantity: 3, unitPrice: 30 },
    { name: "Product 4", quantity: 4, unitPrice: 40 },
    { name: "Product 5", quantity: 5, unitPrice: 50 },
  ];

  const [currentSection, setCurrentSection] = useState("general");

  const toggleSection = (section) => {
    setCurrentSection(section);
  };

  // Calculate total amount
  const totalAmount = products.reduce((total, product) => {
    return total + product.quantity * product.unitPrice;
  }, 0);

  // Shipping charge and GST
  const shippingCharge = 10;
  const gstCost = (totalAmount * 0.18).toFixed(2); // Assuming GST is 18%

  // Total amount including shipping and GST
  const grandTotal = totalAmount + shippingCharge + parseFloat(gstCost);



  const buildHandler=()=>{

   history('/form/build');

  }


  const pdfViewHandler=()=>{

  history('/form/pdfview');

  }

  const [buttonColor, setButtonColor] = useState({backgroundColor:"#5a5ab0"});	





  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.logoContainer}>
            <img src={p15} alt="SAP Logo" className={classes.logo} />
            <span className={classes.companyName}>
              Assertive Solutions Ltd.
            </span>
          </div>
          <div className={classes.Text}>Invoice Builder</div>
          <div className={classes.blueStripe}>
            <button type="button" className={classes.invoiceText1} onClick={buildHandler}>BUILD</button>
            <button type="button" className={classes.invoiceText3} onClick={pdfViewHandler} style={buttonColor}>PDF View</button>
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

   	  
   <div className={classes.Maincontent}>
     
      {/*	  
      <div className={classes.sidebar}>
        <h3>Basic Elements</h3>
        <hr />
        <ul>
          <li>
            <img src={p6} alt="Home Icon" className={classes.sidebarIcon} />
            <a href="#">Heading</a>
          </li>
          <li>
            <img src={p7} alt="Drafts Icon" className={classes.sidebarIcon} />
            <a href="#">Full Name</a>
          </li>
          <li>
            <img src={p8} alt="Shared Icon" className={classes.sidebarIcon} />
            <a href="#">Email</a>
          </li>
          <li>
            <img src={p9} alt="Shared Icon" className={classes.sidebarIcon} />
            <a href="#">Address</a>
          </li>
          <li>
            <img src={p10} alt="Shared Icon" className={classes.sidebarIcon} />
            <a href="#">Date picker</a>
          </li>
          <li>
            <img src={p11} alt="Home Icon" className={classes.sidebarIcon} />
            <a href="#">Appointment</a>
          </li>
          <li>
            <img src={p12} alt="Drafts Icon" className={classes.sidebarIcon} />
            <a href="#">Signature</a>
          </li>
          <li>
            <img src={p13} alt="Shared Icon" className={classes.sidebarIcon} />
            <a href="#">Product List</a>
          </li>
          <li>
            <img src={p20} alt="Shared Icon" className={classes.sidebarIcon} />
            <a href="#">Paragraph</a>
          </li>
        </ul>
      </div>
      */}


      <div className={classes.invoice}>
      
       
        <div className={classes.inheader}>
        <div className={classes.head}>
          <h2>INVOICE</h2>
        </div>
        <div className={classes.subhead}>

            <div className={classes.companylogo}>
              <img src={p15} className={classes.logo} alt="Company Logo" />
              <p>Assertive Innovation Technology</p>
            </div>
         

          <div className={classes.companydetails}>
            <p>
              <strong>Invoice Number:</strong> INV-123
            </p>
            <p>
              <strong>Client Number:</strong> CLT-456
            </p>
            <p>
              <strong>Date:</strong> 12/04/2024
            </p>
          </div>
          </div>
        </div>
        <hr />

        <div className={classes.billinginfo}>
          <div className={classes.billingaddress}>
            <h3>Billing Address</h3>
            <p>
              <strong>Company Name:</strong> Awesome Company
            </p>
            <p>
              <strong>Address:</strong> 123 Anywhere St.,{" "}
            </p>
            <p> Any City, ST 12345 </p>
            <p>
              <strong>Ph. Number</strong> 123-456-7890{" "}
            </p>
            <p>
              <strong>Email:</strong> hello@reallygreatsite.com{" "}
            </p>
            <p>
              <strong>Website:</strong> www.reallygreatsite.com{" "}
            </p>
            <div className={classes.editDeleteIcons}>
              <img src={p17} alt="Edit" className={classes.icon} />
              <img src={p16} alt="Delete" className={classes.icon} />
            </div>
          </div>

          <div className={classes.billingdetails}>
            <h3>Shipping Address</h3>
            <p>
              <strong>Company Name:</strong> Olivia Wilson
            </p>
            <p>
              <strong>Account Number:</strong> 0123 4567 8901
            </p>
            <p>
              <strong>Credit Card:</strong> 0123 4567 8901 2345
            </p>
            <p>
              <strong>Address:</strong> 123 Anywhere St.,{" "}
            </p>
            <p> Any City, ST 12345"</p>
          </div>
        </div>
        <hr />

        <div className={classes.productdetails}>
          <h3>Product Details</h3>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>${product.unitPrice.toFixed(2)}</td>
                  <td>${(product.quantity * product.unitPrice).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={classes.editDeleteIcons}>
            <img src={p17} alt="Edit" className={classes.icon} />
            <img src={p16} alt="Delete" className={classes.icon} />
          </div>
        </div>

        <div className={classes.total}>
          <p>Total: ${totalAmount.toFixed(2)}</p>
          <p>Shipping Charge: ${shippingCharge.toFixed(2)}</p>
          <p>GST (18%): ${gstCost}</p>
          <p>
            <strong>Grand Total: ${grandTotal.toFixed(2)}</strong>
          </p>
        </div>

        <hr />

        <div className={classes.signature}>
          <img src={p14} className={classes.sign} alt="Signature" />
          <h3>Signature</h3>
        </div>
      </div>

     {/*
      <div className={classes.settingBox}>
        <h3>Settings</h3>
        <hr />
        <div className={classes.settingHeadlines}>
          <h2 onClick={() => toggleSection("general")}>GENERAL</h2>
          <h2 onClick={() => toggleSection("elementStyle")}>ELEMENT STYLE</h2>
          <h2 onClick={() => toggleSection("templates")}>TEMPLATES</h2>
        </div>

        <hr />
        <div
          className={`${classes.settingBlock} ${
            currentSection === "general" ? classes.active : ""
          }`}
          style={{  maxHeight: "630px", overflowY: "scroll" }}
        >
          <div className={classes.settingItem}>
            <label htmlFor="fieldLabel">Field Label</label>
            <input type="text" id="fieldLabel" placeholder="Full Name" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="labelAlignment">Label Alignment</label>
            <select id="labelAlignment">
              <option value="LEFT">LEFT</option>
              <option value="RIGHT">RIGHT</option>
              <option value="TOP">TOP</option>
            </select>
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="formDefault">Set as form default</label>
            <input type="checkbox" id="formDefault" />
            <span>Select how the label text aligned horizontally</span>
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="isRequired">Required</label>
            <input type="checkbox" id="isRequired" />
            <span>Prevent submission if this field is empty</span>
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="subLabels">Sublabels</label>
            <div className={classes.name}>
              <div>First Name: Willson</div>
              <div>Last Name: Daniel</div>
            </div>
            <button>
              <img src={p18} className={classes.icon1}></img>
              Duplicate Field{" "}
            </button>
          </div>

          <hr />
          <div className={classes.settingItem}>
            <label htmlFor="streetAddress"> Billing Address</label>
            <input
              type="text"
              id="streetAddress"
              placeholder="Street Address"
            />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="City" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="State" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="postalCode">Postal/Zip Code</label>
            <input type="text" id="postalCode" placeholder="Postal/Zip Code" />
          </div>
          <hr />
          <div className={classes.settingItem}>
            <label htmlFor="streetAddress"> Shipping Address</label>
            <input
              type="text"
              id="streetAddress"
              placeholder="Street Address"
            />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="City" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="State" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="postalCode">Postal/Zip Code</label>
            <input type="text" id="postalCode" placeholder="Postal/Zip Code" />
          </div>
        </div>
       

        <div
          className={`${classes.settingBlock} ${
            currentSection === "elementStyle" ? classes.active : ""
          }`}
          style={{ maxHeight: "630px", overflowY: "scroll" }}
        >
          <h3>
            <img src={p19} className={classes.icon1}></img>
            Color Scheme
          </h3>
          <hr />

          <div className={classes.settingItem}>
            <label htmlFor="pageColor">Page Color</label>
            <input type="color" id="pageColor" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="formColor">Form Color</label>
            <input type="color" id="formColor" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="fontColor">Font Color</label>
            <input type="color" id="fontColor" />
          </div>
          <div className={classes.settingItem}>
            <label htmlFor="inputBackground">Input Background</label>
            <input type="color" id="inputBackground" />
          </div>

          <h3>Page Image</h3>
          <div className={classes.settingItem}>
            <label htmlFor="pageImage">Choose a file</label>
            <input type="file" id="pageImage" />
          </div>

          <h3>Form Image</h3>
          <div className={classes.settingItem}>
            <label htmlFor="formImage">Choose a file</label>
            <input type="file" id="formImage" />
          </div>
        </div>

        <hr />

        <div
          className={`${classes.settingBlock} ${
            currentSection === "templates" ? classes.active : ""
          }`}
        >
          <h3>TEMPLATES</h3>
        </div>
      </div>
     */}

      </div>
      

     


    </div>
  );
};

export default Invoice;
