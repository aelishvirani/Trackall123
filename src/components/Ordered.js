import React from "react";
import Detail from "./Detail";
import "./Ordered.css";
import { useEffect, useState } from "react";
import Zomato from "./Zomato";

function Ordered() {
  const mystyle = {
    margintop: "112px",
    marginleft: "261px",
  };

  const [Details, setDetails] = useState([{}]);
  const FetchData = async () => {
    let res = await fetch(
      "https://heyq.bsite.net/api/api/orderapi/71897957-87eb-45c0-8d50-a73c5490f17e",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    setDetails(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  // function Zomato(data){

  //   if(data.marketPlaceName=="Zomato"){
  //     return(
  //       data.map((item, index) => {
  //         return (
  //           <tr key={index}>
  //             <th scope="row">{index + 1}</th>

  //             <td className="table_order_details_orderidname">
  //               <div className="table_order_details">
  //                 <img
  //                   className="table_order_details_img"
  //                   src="logo192.png"
  //                 />
  //                 {item.orderId} <br />
  //                 {item.customerName}
  //               </div>
  //             </td>
  //             <td>{item.itemName}</td>
  //             <td>{item.price}</td>
  //             <td>{item.deliveryBoyName}</td>
  //             <td>{item.location}</td>
  //             <td className="order_status">{item.status}</td>
  //           </tr>
  //         );
  //       })
  //     )
  //   }
  //   else{
  //     return (console.log("Ordered Not Received"))
  //   }

  // }

  function zomato() {
    <table id="example" className="table table-striped">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Order Details</th>
          <th scope="col">Items</th>
          <th scope="col">Totle price</th>
          <th scope="col">Delivery Details</th>
          <th scope="col">Location</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {Details.map((item, index) => {
          if (item.marketPlaceName == "Zomato") {
            {
              /* <tr key={index}>
              <th scope="row">{index + 1}</th>

              <td className="table_order_details_orderidname">
                <div className="table_order_details">
                  <img className="table_order_details_img" src="logo192.png" />
                  {item.orderId} <br />
                  {item.customerName}
                </div>
              </td>
              <td>{item.itemName}</td>
              <td>{item.price}</td>
              <td>{item.deliveryBoyName}</td>
              <td>{item.location}</td>
              <td className="order_status">{item.status}</td>
            </tr>

     */
            }
            alert("this is zomato oederd");
            {
              /* <Zomato Details={Details}/> */
            }
          }
        })}
      </tbody>
    </table>;
  }

  return (
    <>
     
      <div className="maincontainer" style={mystyle}>
        {/* <div className="container-fluid">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />

          <div className="menu-bar navbar navbar-expand-lg bg-light">
            <div className="container-fluid" style={{ width: "1074px" }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <a className="navbar-brand my-3" href="/">
                  Order List
                </a>
                <div className="nav-item">
                  <li className="border rounded my-3 mx-3">
                    <p className="navbar-brand navjs ">
                      Filter By
                      <i
                        className="fas fa-caret-down"
                        style={{ marginTop: "3px" }}
                      ></i>
                    </p>

                    <div className="dropdown-menu ">
                      <ul>
                        <li>
                          <p className="navbar-item ">
                            Aggregators{" "}
                            <i
                              className="fas fa-caret-right"
                              style={{ marginTop: "5px" }}
                            ></i>
                          </p>

                          <div className="dropdown-menu-1 dropdown border rounded">
                            <ul>
                              <li>
                                <button onClick={zomato}>Zomato</button>
                              </li>
                              <li>
                                <a href="/" className="dropdown-item ">
                                  Swiggy
                                </a>
                              </li>
                              <li>
                                <a href="/" className="dropdown-item">
                                  Uber Eats
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <p>
                            Name{" "}
                            <i
                              className="fas fa-caret-right"
                              style={{ marginTop: "4px" }}
                            ></i>
                          </p>

                          <div className="dropdown-menu-1 border rounded ">
                            <ul>
                              <li>
                                <a href="/" className="dropdown-item">
                                  A-Z
                                </a>
                              </li>
                              <li>
                                <a href="/" className="dropdown-item">
                                  Z-A
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="nav-item">
                  <li className="border rounded mx-3 my-3 ">
                    <p className="navbar-brand navjs ">
                      Entries per page:{" "}
                      <i
                        className="fas fa-caret-down"
                        style={{ marginTop: "3px" }}
                      ></i>
                    </p>

                    <div className="dropdown-menu-3 dropdown-menu border rounded bg-light">
                      <ul>
                        <li>
                          <a href="/" className="dropdown-item">
                            10
                          </a>
                        </li>
                        <li>
                          <a href="/" className="dropdown-item">
                            20
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div
                  className="status"
                  style={{ marginTop: "20px", marginLeft: "280px" }}
                >
                  Status: <button>Pending</button>
                  <button>Patch</button>
                  <button>Cancelled</button>
                </div>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="navbar">
        <header>
          <div className="brand">
            <a href="/">Order List</a>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <p className="dropname">Filter by</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
                className="dropicon"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <div className="dropdown-content">
              <a href="/">Zomato</a>
              <a href="/">Swiggy</a>
              <a href="/">Uber Eats</a>
            </div>
          </div>

          <div className="dropname2">
            <p className="dropdownname">
              Entries per page:{" "}
              <select className="entery_selection">
                <option>10</option>
                <option>20</option>
              </select>
            </p>
          </div>

          <nav className="navbarstatus">
            <ul className="ulcss">
              <li className="statuscss">
                <p href="/" className="statusbuttonname">Status :</p>
              </li>
              <li className="statuscss statuscolor">
                <a href="/" className="statusbutton" >Pending</a>
              </li>
              <li className="statuscss statuscolor">
                <a href="/" className="statusbutton" >Patched</a>
              </li>
              <li className="statuscss statuscolor">
                <a href="/" className="statusbutton" >Cancelled</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

        <Detail />
      </div>
      <br />
    </>
  );
}

export default Ordered;
