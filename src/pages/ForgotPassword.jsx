import { createSignal } from "solid-js";
import '../assets/css/auth/authentication.css';

function ForgotPassword() {
    const [emailValue, setEmailValue] = createSignal("");

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handleClick = () => {
        console.log("Tombol diklik!");
    };
    return (
        <div>
            <div class="wrapper-auth">
                <div class="container auth">
                    <div class="row">
                        <div class="avatar text-center mt-3 ">
                            <img src="../src/assets/img/avatar-auth.png" class="img-harits " alt="da" />
                        </div>
                        <div class="col-6">
                            <div class="left-side">
                                <div class="header-auth d-flex mx-3">
                                    <img src="../src/assets/img/hero-img.png" width="100px" class="img-fluid" alt="da" />
                                    <div class="question mt-3 text-center">
                                        <p class="tittle-question">Questions?</p>
                                        <a class="link-question mt-0" href="/contact">
                                            Ask Mr. Harits
                                        </a>
                                    </div>
                                </div>
                                <p class="forgot-password mb-0">Forgot your password</p>
                                <p class="desc-fp">Please tell us registration email for recovery your account</p>
                                <div class="content mx-2">

                                    <input
                                        id="email"
                                        type="text"
                                        class="input-auth"
                                        placeholder="Enter email"
                                        value={emailValue()}
                                        onInput={handleEmailChange}
                                    />

                                    <div class="button-auth mt-4" onClick={handleClick}>
                                        Send
                                    </div>
                                    <a class="link-backtohome d-flex mt-2" href="/login" >
                                        Back to login
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div class="col-6">
                            <div className="right-side">
                                <div class="image">
                                    <img src="../src/assets/img/auth.png" width="auto" class="img-fluid" alt="da" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ForgotPassword;