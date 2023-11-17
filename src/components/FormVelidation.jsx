import React, { useEffect, useState } from "react";
import showPassword from "../assets/img/Eye-Icon.png";
import hidePassword from "../assets/img/png-transparent-eye.png";

const FormVelidation = () => {
  const [print, setPrint] = useState([]);
  const [Show, setShow] = useState(false);
  const [ErrShow, setErrShow] = useState(false);
  const [Value, setValue] = useState({
    fname: "",
    lname: "",
    mobNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const ifEmailValid = (email) => {
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return emailRegex.test(email);
  };

  const IfMobValid = (mobNo) => {
    const mobNoRegex = /^\d{10}$/;
    return mobNoRegex.test(mobNo);
  };

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValue((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    const newData = {
      fname: Value.fname,
      lname: Value.lname,
      mobNo: Value.mobNo,
      email: Value.email,
      password: Value.password,
      confirmPassword: Value.confirmPassword,
    };
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.push(newData);
    localStorage.setItem("formData", JSON.stringify(storedData));

    setErrShow(ErrShow === false);
    e.preventDefault();
    console.log(Value);
    if (
      (Value.fname !== "") &
        (Value.lname !== "") &
        (Value.email !== "") &
        (Value.mobNo !== "") &
        (Value.password !== "") &&
      Value.confirmPassword !== "" &&
      ifEmailValid(Value.email) &&
      IfMobValid(Value.mobNo) &&
      Value.password !== Value.confirmPassword
    ) {
      setErrShow(true);
      return;
    }

    if (!ifEmailValid(Value.email) || !IfMobValid(Value.mobNo)) {
      setErrShow(true);
      return;
    }
    {
      setPrint([
        ...print,
        {
          fname: Value.fname,
          lname: Value.lname,
          mobNo: Value.mobNo,
          email: Value.email,
          password: Value.password,
          confirmPassword: Value.confirmPassword,
        },
      ]);
      setValue({
        fname: "",
        lname: "",
        mobNo: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
    setErrShow(false);
  };
  useEffect(() => {
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("formData")) || [];
    setPrint(dataFromLocalStorage);
  }, []);
  const removeItemFromLocalStorage = (indexToRemove) => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.splice(indexToRemove, 1);
    localStorage.setItem("formData", JSON.stringify(storedData));
    setPrint(storedData);
  };
  const handleRemoveItem = (index) => {
    removeItemFromLocalStorage(index);
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <form className="d-flex gap-3" action="onSubmit">
            <div className="d-flex flex-column">
              <input
                onChange={onChange}
                name="fname"
                value={Value.fname}
                className="ps-2  py-2"
                type="text"
                placeholder="fName"
              />
              {ErrShow && Value.fname.trim() === "" && (
                <p className="text-red m-0 mt-2">This field is Required </p>
              )}
            </div>
            <div>
              <input
                onChange={onChange}
                name="lname"
                value={Value.lname}
                className="ps-2  py-2"
                type="text"
                placeholder="lname"
              />
            </div>
            <div className="d-flex flex-column">
              <input
                onChange={onChange}
                name="mobNo"
                value={Value.mobNo}
                className="ps-2  py-2"
                type="number"
                placeholder="mobNo"
              />
              {ErrShow && Value.mobNo.trim() === "" && (
                <p className="text-red m-0 mt-2">This field is Required </p>
              )}
            </div>
            <div className="d-flex flex-column">
              <input
                onChange={onChange}
                name="email"
                value={Value.email}
                className="ps-2  py-2"
                type="email"
                placeholder="email"
              />
              {ErrShow && Value.email.trim() === "" && (
                <p className="text-red m-0 mt-2">This field is Required </p>
              )}
            </div>
            <div className="d-flex flex-column">
              <span className="d-flex border-1 border border-dark pe-2">
                <input
                  onChange={onChange}
                  name="password"
                  value={Value.password}
                  className="ps-2 border-0 py-2"
                  type={`${Show ? "text" : "password"}`}
                  placeholder="password"
                />
                <span onClick={() => setShow(!Show)}>
                  {" "}
                  {Show ? (
                    <>
                      <img
                        width="30"
                        height="30"
                        className=""
                        src={hidePassword}
                        alt="eye-icon"
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        width="20"
                        height="20"
                        className="ms-2"
                        src={showPassword}
                        alt="eye-icon"
                      />
                    </>
                  )}
                </span>
              </span>

              {ErrShow && Value.password.trim() === "" && (
                <p className="text-red m-0 mt-2">This field is Required </p>
              )}
            </div>{" "}
            {/* New confirm password field */}
            <div className="d-flex flex-column">
              <input
                onChange={onChange}
                name="confirmPassword"
                value={Value.confirmPassword}
                className="ps-2  py-2"
                type={`${Show ? "text" : "password"}`}
                placeholder="confirm password"
              />
              {ErrShow && Value.confirmPassword.trim() === "" && (
                <p className="text-red m-0 mt-2">This field is Required </p>
              )}
              {ErrShow && Value.password !== Value.confirmPassword && (
                <p className="text-red m-0 mt-2">Passwords do not match</p>
              )}
            </div>
            <button
              // disabled={!IfFormValid()}
              onClick={onSubmit}
              type="submit"
              className="text-center bg-info py-2 px-4 border-0"
            >
              submit
            </button>
          </form>

          {print.map((item, index) => {
            return (
              <div className="mt-5">
                {" "}
                <button
                  className="bg-danger"
                  onClick={() => handleRemoveItem(index)}
                >
                  Delete
                </button>
                ;
                <div className="d-flex">
                  <p className="w-25 fs-4 fw-bolder">fName:-</p>
                  <p className="mb-0 fs-4 fw-normal text-black ">
                    {item.fname}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="w-25 fs-4 fw-bolder">lName:-</p>
                  <p className="mb-0 fs-4 fw-normal text-black ">
                    {item.lname}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="w-25 fs-4 fw-bolder">Mob.No:-</p>
                  <p className="mb-0 fs-4 fw-normal text-black ">
                    {item.mobNo}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="w-25 fs-4 fw-bolder">Email:-</p>
                  <p className="mb-0 fs-4 fw-normal text-black ">
                    {item.email}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="w-25 fs-4 fw-bolder">Password:-</p>
                  <input
                    className="border-0 text-decoration-none"
                    type={`${Show ? "text" : "password"}`}
                    value={item.password}
                  />
                </div>
                <div className="d-flex">
                  <p className="w-25 fs-4 fw-bolder">ConfirmPassword:-</p>
                  <input
                    className="border-0 text-decoration-none"
                    type="password"
                    value={item.confirmPassword}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FormVelidation;
