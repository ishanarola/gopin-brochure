import { useState } from "react";
import "./UserForm.css";
import { firestore } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import brochure from "../../Gopin Industrial Park Brochure.pdf";
const UserForm = () => {
  const [error, setError] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const handleInputChange = (e) => {
    let input = e.target.value;
    var phoneno = /^\d{10}$/;
    input.match(phoneno)?
    setError(false):
    setError(true)
    setMobileNumber(input);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // var phoneno = /^\d{10}$/;
    // if (mobileNumber.match(phoneno)) {
      try {
        await addDoc(collection(firestore, "users"), {
          mobile_number: mobileNumber,
          created_at: Timestamp.now(),
        });
      } catch (err) {
        console.error(err);
      }
      const link = document.createElement('a');
      link.href = brochure;
      link.setAttribute('download', 'Gopin Industrial Park Brochure.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    //   setError(false);
    // }
    // else {
    //   setError(true);
    // }
  }
  return (
    <section className="vh-100 gradient-custom fs-4">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-4 mt-md-4">
                  <h2 className=" title fs-4 fw-bold mb-4 text-uppercase">Gopin Industrial Park</h2>
                  <form className=" g-3 needs-validation" noValidate>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text fs-5" id="addon-wrapping">
                        {" "}
                        <i className="fas fa-phone fa-flip-horizontal"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control fs-6"
                        placeholder="Please enter your mobile number"
                        aria-label="mobileNumber"
                        aria-describedby="addon-wrapping"
                        required
                        onChange={(e) => handleInputChange(e)}
                      />

                    </div>
                    {error &&
                      <div className="invalid-feedback">
                        Please provide a valid phone number.
                      </div>
                    }
                    <button
                      className="btn btn-outline-light mt-4 px-4"
                      type="submit"
                      disabled={(!mobileNumber || error) ? "disabled":""}
                      onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </button>
                  </form>
                  {/* <div className="col-md-6"> */}
                  {/* <label
                        htmlFor="validationCustom03"
                        className=" form-label"
                      >
                        Mobile number
                      </label> */}
                  {/* <input
                        type="number"
                        className="form-control"
                        id="validationCustom03"
                        required
                        onChange={(e) => handleInputChange(e)}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Submit form
                      </button>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserForm;
