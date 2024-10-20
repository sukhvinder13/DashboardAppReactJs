import React, { useEffect, useState } from 'react';
import './Customer.css';
import axios from 'axios';

const Customer = () => {
  // Sample customer data stored in state
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch customers from the backend API
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://nodejsstartup-qqdt.onrender.com/getCustomers');
        setCustomers(response.data.posts); // Set the customer data
        setLoading(false); // Set loading to false when data is loaded
        console.log(response)
      } catch (err) {
        setError('Error fetching customers');
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="customer-container">
      <h2>Customer Records</h2>
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer,index) => (
            <tr key={customer._id}>
              <td>{index+1}</td>
              <td>{customer.name}</td>
              <td>{customer.username}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
