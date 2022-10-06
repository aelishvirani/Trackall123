import React from 'react';
import './Setub.css'

function Setub() {
  return (
    <div>
       <div className="fullbody container-fluid border border-success">
        <div className="container border border-success">
          <div className=" ">
            <form>
              <div className="mb-3">
                <p className="h1">
                  <b>Set up your account</b>
                </p>
              </div>
              <div className="my-3">
                <p>
                  Login or Register now and get access to the best food order
                  traking app
                </p>
              </div>
              <div className="mb-3 ">
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  placeholder="Add your Zometo Merchandise ID"
                />
              </div>

              <div className="mt-3 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <p className="mx-3">Add another id</p>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <hr />
              <div className="my-3">
                <label className="form-label">
                  Already have an account ? <a href="/">Sign in</a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setub;
