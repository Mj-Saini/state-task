import React, { useEffect, useState } from "react";

function Form() {
  const [sparet, setSparet] = useState([]);
  const [Show, setShow] = useState(0);
  const [data, setdata] = useState({
    email: "",
    Password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setdata({
      email: "",
      Password: "",
    });
    setSparet([
      ...sparet,
      {
        email: data.email,
        Password: data.Password,
      },
    ]);
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  // const [save, setSave] = useState([]);

  // const [value, setValue] = LocalStorage("email", "");
  // const saveValue = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <form
              onSubmit={onSubmit}
              className="d-flex flex-column gap-2"
              //   action="submit"
            >
              <input
                className="border-none  bg-light mt-4 text-decoration-none py-2 ps-3"
                required
                type="email"
                placeholder="email"
                value={data.email}
                onChange={handlechange}
                name="email"
              />
              <label className="d-flex align-items-center" htmlFor="">
                <input
                  className="border-none w-100 bg-light mt-4 text-decoration-none py-2 ps-3"
                  required
                  type={`${Show ? "text" : "password"}`}
                  value={data.Password}
                  placeholder="Password"
                  onChange={handlechange}
                  name="Password"
                  id="pass"
                />
                <input
                  onClick={() => setShow(!Show)}
                  type="checkbox"
                  id="check"
                />
              </label>
              <input
                className="border-none bg-light mt-4 text-decoration-none py-2 ps-3"
                type="submit"
                value="submit"
              />
            </form>{" "}
            <div className="mt-4">
              <p>Dont Have an account</p>
            </div>
            <ul>
              {sparet.map((data) => {
                return (
                  <li>
                    <div className="d-flex">
                      <p className="w-25 fs-4 fw-bolder">Email:-</p>
                      <p className="mb-0 fs-4 fw-normal "> {data.email}</p>
                    </div>
                    <div className="d-flex">
                      <p className="w-25 fs-4 fw-bolder">Password:-</p>
                      {/* <p className="mb-0 fs-4 fw-normal"> {data.Password}</p> */}
                      <input
                        className="border-0 text-decoration-none"
                        type={`${Show ? "text" : "password"}`}
                        value={data.Password}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}

export default Form;
