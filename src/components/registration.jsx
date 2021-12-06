import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import {registerUser} from "../services/RegistrationService";

const Registration = (props) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(initialState);

    const userChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    };

    const dispatch = useDispatch();

    const saveUser = () => {
        dispatch(registerUser(user))
            .then((response) => {
                setShow(true);
                setMessage(response.message);
                resetRegisterForm();
                setTimeout(() => {
                    setShow(false);
                    props.history.push("/auth/login");
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const resetRegisterForm = () => {
        setUser(initialState);
    };

    return (
        <div className="w3-container w3-#fbfbfd" style={{padding: "128px 16px"}} id="registration">
            <h3 className="w3-center">REGISTRATION</h3>
            <p className="w3-center w3-large">Let's get started:</p>
            <div style={{marginTop: "48px"}}>
                <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"/> Minsk, Belarus</p>
                <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email:
                    b.drozdov.vironit@vironit.ru</p>
                <br/>
                <form>
                    <p><label>
                        <input value={user.firstName} className="w3-input w3-border" type="text"
                               placeholder="First Name" required
                               name="firstName" onChange={userChange}/>
                    </label></p>
                    <p><label>
                        <input value={user.lastName} className="w3-input w3-border" type="text"
                               placeholder="Last Name" required
                               name="lastName" onChange={userChange}/>
                    </label></p>
                    <p><label>
                        <input value={user.email} className="w3-input w3-border" type="email"
                               placeholder="Email"
                               required
                               name="email" onChange={userChange}/>
                    </label></p>
                    <p><label>
                        <input value={user.password} className="w3-input w3-border" type="password"
                               placeholder="Password" required
                               name="password" onChange={userChange}/>
                    </label></p>
                    <p>
                        <button onClick={saveUser} className="w3-button w3-black" type="submit" value="Submit">
                            Registration
                        </button>
                    </p>
                </form>

                <img src="http://localhost:3000/map.jpg" className="w3-image w3-greyscale" alt="map"
                     style={{width: "100%", marginTop: "48px"}}/>
            </div>
        </div>
    );
};

export default Registration;
