import { useState } from "react";
import "./UserForm.css";
import { firestore } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import brochure from "../../Gopin Industrial Park Brochure.pdf";
const UserForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };
  return (
    <section class="vh-100 gradient-custom fs-4">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body p-5 text-center">
                <div class="mb-md-4 mt-md-4">
                  <h2 class=" title fs-4 fw-bold mb-4 text-uppercase">Gopin Industrial Park</h2>
                  <form className=" g-3 needs-validation" noValidate>
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text fs-5" id="addon-wrapping">
                        {" "}
                        <i class="fas fa-phone fa-flip-horizontal"></i>
                      </span>
                      <input
                        type="number"
                        class="form-control fs-6"
                        placeholder="Mobile number"
                        aria-label="mobileNumber"
                        aria-describedby="addon-wrapping"
                        required
                        onChange={(e) => handleInputChange(e)}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid phone number.
                      </div>
                    </div>
                    
                      <button
                        className="btn btn-outline-light mt-4 px-4"
                        type="submit"
                        disabled={!mobileNumber && "disabled" }
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
