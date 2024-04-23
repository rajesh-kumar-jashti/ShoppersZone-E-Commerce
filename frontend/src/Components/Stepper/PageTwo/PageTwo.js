import React from "react";
import "./PageTwo.css";
import { useState, useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";


const PageTwo = ({onButtonClick}) => {
  const {cartItems} = useContext(ShopContext);

  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    address: '',
    paymentMethod: 'cashOnDelivery', 
    productData: cartItems
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Orders = async (e) => {
    try {
      const response = await fetch('http://localhost:4000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
      console.log('Form data submitted successfully');
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error
    }
  };

    return (
      <main>
        <div className="but">
          <div className='details-container'>
            <h1>Add Details</h1>
            <div className="details-input">
              <input name="username" value={formData.username} onChange={handleChange}  type="text" placeholder="Enter Name" />
              <input name="phoneNumber" type="number" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
              <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Enter Address" />
              <select name="paymentmethod" value={formData.paymentMethod} onChange={handleChange} id="">
                <option value="cashOnDelivery">Cash on Delivery</option>
                <option value="onlinePayment">Online Payment</option>
              </select>
            </div>
          </div>
          <div className="pagetwo-button">
            <button onClick={() => onButtonClick("pageone")}>Previous</button>
            <button onClick={() => {onButtonClick("pagethree"); Orders()}}>Next</button>
          </div>
        </div>
      </main>
    );
}

export default PageTwo;