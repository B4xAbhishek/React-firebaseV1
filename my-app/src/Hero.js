import React from "react";

const Hero = ({ handleLogout }) => {
  return (
    <div>
      <section className="hero">
        <nav>
          <h2>User Management System </h2>
          <h3 className = "UniqueNumber">
              <strong>
              Your unique Number is: {Math.floor(Math.random() * 1000000000)}
              </strong>
            </h3>
          <button onClick={handleLogout}>Logout</button>
        </nav>

        <div className="form">
          <div className="formContainer">
            <form>
              <label>
                {" "}
                <u>Fill the form to Apply for Schlorship</u>{" "}
              </label>

              <label>Full Name </label>
              <input type="text" autofocus required placeholder="Full Name" />

              <label>Father's Name </label>
              <input
                type="text"
                autofocus
                required
                placeholder=" Father's Name"
              />

              <label>Highest Qualification </label>
              <input
                type="text"
                autofocus
                required
                placeholder="Highest Qualification"
              /> 


              <label> Address </label>
              <input type="text" autofocus required placeholder=" Address" />

              <button class="formButton">
                {" "}
                Submit and generate unique code
              </button>
            </form>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

{
  /* Name, parentsName, document Upload, address */
}
