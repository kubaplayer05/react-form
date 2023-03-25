import {useState} from "react";

import Container from "../UI/Container";
import Button from "./Button";
import Msg from "./Msg";

import "./Form.css";
function Form(props) {

    const [userInputs,updateUserInputs] = useState({
        username: "",
        email: "",
        tel: "",
        password: "",
        password2: ""
    })

    const [msgObject,updateMsgObject] = useState({
        username: "Your username must contains min. 3 letters.",
        email: "Your email is invalid.",
        tel: "Your phone number must contains 9 numbers.",
        password: "Your password must contains min. 8 signs (letters and numbers).",
        password2: ""
    })

    const [msgStatus,updateMsgStatus] = useState({
        username: "error",
        email: "error",
        tel: "error",
        password: "error",
        password2: "error"
    })

    const usernameHandler = e => {
        const data = e.target.value

        updateUserInputs(prevState => {
            return {
                ...prevState,
                username: data
            }
        })

        const re = new RegExp("[a-z]{3,}","gi")

        if(!data.match(re)) {
            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    username: "Your username must contains min. 3 letters."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    username: "error"
                }
            })
        } else if(data.length < 6) {
            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    username: "Your username is good, but it may be longer."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    username: "warning"
                }
            })
        } else {
            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    username: "Your username is excellent."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    username: "valid"
                }
            })
        }
    }

    const emailHandler = e => {
        const data = e.target.value

         updateUserInputs(prevState => {
            return {
                ...prevState,
                email: data
            }
        })

        const re = new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$","g")

        if(data.match(re)) {
                updateMsgObject(prevState => {
                return {
                    ...prevState,
                    email: "Your email is valid."
                }
            })
                updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    email: "valid"
                }
            })
        } else {
              updateMsgObject(prevState => {
                return {
                    ...prevState,
                    email: "Your email is invalid."
                }
            })
              updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    email: "error"
                }
            })
        }
    }

    const phoneHandler = e => {
        const data = e.target.value

         updateUserInputs(prevState => {
            return {
                ...prevState,
                tel: data
            }
        })

        const re = new RegExp("^\\d{9}$","g")

        if(data.match(re)) {
             updateMsgObject(prevState => {
                return {
                    ...prevState,
                    tel: "Your phone number is valid."
                }
            })
             updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    tel: "valid"
                }
            })
        } else {
             updateMsgObject(prevState => {
                return {
                    ...prevState,
                    tel: "Your phone number must contains 9 numbers."
                }
            })
             updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    tel: "error"
                }
            })
        }

    }

    const passwordHandler = e => {
        const data = e.target.value

        updateUserInputs(prevState => {
            return {
                ...prevState,
                password: data
            }
        })

        const re = new RegExp("[a-z]+[0-9]+.*|[0-9]+[a-z]+.*","gi")
        const specialRe = new RegExp(/[-._!"`'#%&,:;<>=@{}~$()\\*+/?[\]^|]+/)

        if(data.match(re) && data.length >= 8) {

            if(data.match(specialRe)) {
                updateMsgObject(prevState => {
                    return {
                        ...prevState,
                        password: "Your password is strong."
                    }
                })
                updateMsgStatus(prevState => {
                    return {
                        ...prevState,
                        password: "valid"
                    }
                })
            } else {
                updateMsgObject(prevState => {
                    return {
                        ...prevState,
                        password: "Your password is good, but you can add special signs."
                    }
                })
                updateMsgStatus(prevState => {
                    return {
                        ...prevState,
                        password: "warning"
                    }
                })
            }


        } else {

            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    password: "Your password must contains min. 8 signs (letters and numbers)."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    password: "error"
                }
            })

        }

          if(data === userInputs.password2) {

            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    password2: "Passwords are equal."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    password2: "valid"
                }
            })

        } else {

            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    password2: "Passwords are not equal."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    password2: "error"
                }
            })
        }
    }

    const repeatPasswordHandler = e => {
        const data = e.target.value

         updateUserInputs(prevState => {
            return {
                ...prevState,
                password2: data
            }
        })


        if(data === userInputs.password) {

            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    password2: "Passwords are equal."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    password2: "valid"
                }
            })

        } else {

            updateMsgObject(prevState => {
                return {
                    ...prevState,
                    password2: "Passwords are not equal."
                }
            })
            updateMsgStatus(prevState => {
                return {
                    ...prevState,
                    password2: "error"
                }
            })
        }
    }

    const submitHandler = e => {
        e.preventDefault()

        if(!(msgStatus.username === "error") && !(msgStatus.email === "error") && !(msgStatus.tel === "error") &&
        !(msgStatus.password === "error") && !(msgStatus.password2 === "error")) {

            const user = {
                username: userInputs.username,
                email: userInputs.email,
                tel: userInputs.tel,
                password: userInputs.password
            }

            props.onFormSubmit(user)
        }
    }

  return (
    <Container>
        <form onSubmit={submitHandler}>
        <div className="form-section">
            <label className="label">1. Enter your username.</label>
            <input type="text" value={userInputs.username} onChange={usernameHandler}/>
            <Msg className={msgStatus.username} value={msgObject.username}/>
        </div>
         <div className="form-section">
            <label className="label">2. Enter your email.</label>
            <input type="email" value={userInputs.email} onChange={emailHandler}/>
             <Msg className={msgStatus.email} value={msgObject.email}/>
        </div>
         <div className="form-section">
            <label className="label">3. Enter your phone number.</label>
             <div className="inputs-wrapper">
                 <select>
                    <option>+ 48</option>
                    <option>other</option>
                 </select>
                <input type="tel" value={userInputs.tel} onChange={phoneHandler}/>
             </div>
             <Msg className={msgStatus.tel} value={msgObject.tel}/>
        </div>
        <div className="form-section">
            <label className="label">4. Enter your password.</label>
            <input type="password" value={userInputs.password} onChange={passwordHandler}/>
            <Msg className={msgStatus.password} value={msgObject.password}/>
        </div>
         <div className="form-section">
            <label className="label">5. Repeat your password.</label>
            <input type="password" value={userInputs.password2} onChange={repeatPasswordHandler} />
             <Msg className={msgStatus.password2} value={msgObject.password2}/>
        </div>
            <Button name="Login" type="submit" className="primary"/>
            <Button name="Register" type="submit" className="secondary"/>
        </form>
    </Container>
  );
}

export default Form;