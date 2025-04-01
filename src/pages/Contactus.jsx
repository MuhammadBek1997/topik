/* eslint-disable react/prop-types */

import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contactus = ({t}) => {
    
    const sendMessage = (event) => {
        event.preventDefault();
        
        const token = "7157344958:AAHLka3iQnKDPjyvobBZQrDB_Yd82wrFyuw";
        const chatID = "958496624";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        
        // Assuming you have form inputs with ids 'name' and 'number'
        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        // const notify = () => toast.success(`Send to ${name}`,{position:"top-right"});

        axios.post(url, {
          chat_id: chatID,
          text: `Name: ${name}, Number: ${number}`
        })
        .then(() => ()=>alert(`${t("send"),name}`))
        .catch((error) => {
          console.log("Error", error);
        });
      }
      

  return (
    <div className="contact">
        <div className="contact-cont">
            <div className="contact-left">
                <h2>
                    {t("contacttext")}
                </h2>
                <p>
                    {t("contactextra")}
                </p>
            </div>
            <form className="contact-right" onSubmit={sendMessage}>
                <input type="text" placeholder={t("ismingiz")} className="contactinp" id="name" />
                <input type="text" placeholder={t("telraqam")} className="contactinp" id="number"/>
                <button className="contactbtn">
                    {t("arizaqoldirish")}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contactus
