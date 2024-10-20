import React, { useState } from 'react';
import Modal from 'react-modal';
import './registrationForm.css';

Modal.setAppElement('#root'); // Required for accessibility

function RegisterForm() {
  // State to manage modal visibility
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileno: '',
  });
  const [users, setUsers] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]); // Add the new user to the users list
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      mobileno: '',
    });
    setModalIsOpen(false); // Close the modal after submission
  };

  return (
    <div className="App">
      {/* Button to open modal */}
      <button onClick={() => setModalIsOpen(true)} className="open-modal-btn">
        + Register User
      </button>

      {/* React Modal for Registration Form */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Register User"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Register User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Mobile No:
            <input
              type="text"
              name="mobileno"
              value={formData.mobileno}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </form>
      </Modal>

      {/* Display Registered Users in a Grid */}
      <div className="user-grid">
        <h2>Registered Users</h2>
        {users.length === 0 ? (
          <p>No users registered yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile No</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;
