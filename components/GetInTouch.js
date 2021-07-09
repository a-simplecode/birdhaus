import cn from "classnames";
import { useState } from "react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import styles from "../styles/GetInTouch.module.css";
import SVGPhone from "../components/icons/SVGPhone";
import SVGLocation from "../components/icons/SVGLocation";
import SVGEmail from "../components/icons/SVGEmail";
import SVGLinkedIn from "../components/icons/SVGLinkedIn";
import SVGInstagram from "../components/icons/SVGInstagram";
import SVGButton from "../components/icons/SVGButton";
import SVGFlagMGroup from "./icons/SVGFlagMGroup";

export default function GetInTouch() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    work: "",
    message: "",
  });
  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setWarning(false);
  };

  const sendMessage = async () => {
    if (user.name && user.email && user.number && user.work && user.message) {
      const result = await fetch("/api/email", {
        method: "post",
        body: JSON.stringify(user),
      });

      setUser({
        name: "",
        email: "",
        number: "",
        work: "",
        message: "",
      });
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  const sendFormHTML = () => {
    return (
      <div className="col-12 col-xl-6 pt-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            value={user.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="I want to work with BirdHaus_"
            name="work"
            value={user.work}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Wirte your message here…"
            name="message"
            value={user.message}
            onChange={handleChange}
          />
        </div>
        {warning ? (
          <div className={cn("p-4 alert-danger", styles.warning)}>
            Please all fields are required
          </div>
        ) : null}
        <div className={styles.button}>
          <span className="pointer" onClick={sendMessage}>
            <SVGButton />
          </span>
        </div>
      </div>
    );
  };

  const contactInfoHTML = () => {
    return (
      <div className="col-12 offset-xl-1 col-xl-5 pt-4">
        <div className="row mb-2">
          <div className="col-2 col-sm-1">
            <SVGPhone />
          </div>
          <div className="col-10 col-sm-11 fs-14">
            <div className="font-MontserratBold">You can give us a call</div>
            <div className="font-MontserratRegular">+961 9 23 27 80</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2 col-sm-1">
            <SVGLocation />
          </div>
          <div className="col-10 col-sm-11 fs-14">
            <div className="font-MontserratBold">
              Come by, we’re always here
            </div>
            <div className="font-MontserratRegular">Find us on the map</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2 col-sm-1">
            <Link href="mailto:info@bird-haus.com">
              <a rel="noopener noreferrer">
                <SVGEmail />
              </a>
            </Link>
          </div>
          <div className="col-10 col-sm-11 fs-14">
            <Link href="mailto:info@bird-haus.com">
              <a rel="noopener noreferrer">
                <div className="font-MontserratBold">
                  And if you’re a introvert, email us
                </div>
                <div className="font-MontserratRegular">info@bird-haus.com</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span
              className="pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/company/birdhausdigital")
              }
            >
              <SVGLinkedIn />
            </span>{" "}
            <span
              className="pointer"
              onClick={() =>
                window.open("https://www.instagram.com/birdhausdigital")
              }
            >
              <SVGInstagram />
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={cn("col-12 zIndex", styles.container)}>
      <div className="row pl-4">
        <div className="col-12 offset-xl-1 col-xl-5 pt-4 zIndex">
          <Parallax className="custom-class" y={[-120, 50]} tagOuter="figure">
            <div className="font-MontserratBold fs-100">Let’s get</div>
          </Parallax>
          <Parallax className="custom-class" y={[-80, 35]} tagOuter="figure">
            <div className="font-MerriweatherLight fs-100 zIndex">in touch</div>
          </Parallax>
        </div>
      </div>
      <div className="row pl-4 hiddenMobile">
        {contactInfoHTML()}
        {sendFormHTML()}
      </div>

      <div className="row pl-4 hiddenDesktop">
        {sendFormHTML()}
        {contactInfoHTML()}
      </div>

      <div className="row mb-2">
        <div className="col-12 mt-4 mb-2 text-center">Part of</div>
        <div className="col-12 text-center">
          <SVGFlagMGroup />
        </div>
      </div>
    </div>
  );
}
