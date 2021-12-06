import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>Book Your Table</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Type your Email" />
        <textarea placeholder="Write Here..."></textarea>
      </form>
    </div>
  );
}

export default Contact;
