import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    backgroundColor: 'white',
    border: '3px',
    borderStyle: 'solid',
    borderColor: 'rgb(155, 177, 202)',
    borderRadius: '15px',
    boxShadow: '0 0 15px 5px inset rgb(155, 177, 202)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};

Modal.setAppElement("#root");

//Modal commands
const AboutModals = ({Info}) => {
const [isOpen, SetIsOpen] = useState(false);
const OpenAbout = () => {
    SetIsOpen(true)
  }
 const CloseAbout = () =>{
  SetIsOpen(false)
 }

 return (
  <>
  <button id="OpenMod" onClick={OpenAbout}> More Cat Details</button>
  <Modal
      isOpen = {isOpen}
      onRequestClose = {CloseAbout}
      // Close = {CloseAbout}
      style={customStyles}
  >
    <h2> Meow! I'm {Info.name}</h2>
    
    <p>Breed: {Info.breed}</p>
    <p>Price: £{Info.price}</p>
    <p>Owner's Name: {Info.humanName}</p>
    <p>Contact: {Info.phone}</p>
    <p>Email: {Info.email}</p>
    <p>Collection Address: <br></br>
    {Info.Address1} <br></br>
    {Info.Address2} <br></br>
    {Info.Address3}
    </p>
    {/* <button> Add to Basket (null)</button> */}
    <button onClick={CloseAbout}> Close</button>
  </Modal>
  </>
 )
};

export default AboutModals;