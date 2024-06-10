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
                <div class="auth container">
                    <div class="row">
                        <div class="mt-3 text-center avatar">
                            <img src="../src/assets/img/avatar-auth.png" class="img-harits" alt="da" />
                        </div>
                        <div class="col-6">
                            <div class="left-side">
                                <div class="d-flex mx-3 header-auth">
                                    <img src="../src/assets/img/hero-img.png" width="100px" class="img-fluid" alt="da" />
                                    <div class="mt-3 text-center question">
                                        <p class="tittle-question">Questions?</p>
                                        <a class="mt-0 link-question" href="/contact">
                                            Ask Mr. Harits
                                        </a>
                                    </div>
                                </div>
                                <p class="mb-0 forgot-password">Forgot your password</p>
                                <p class="desc-fp">Please tell us registration email for recovery your account</p>
                                <div class="mx-2 content">

                                    <input
                                        id="email"
                                        type="text"
                                        class="input-auth"
                                        placeholder="Enter email"
                                        value={emailValue()}
                                        onInput={handleEmailChange}
                                    />

                                    <div class="mt-4 button-auth" onClick={handleClick}>
                                        Send
                                    </div>
                                    <a class="d-flex mt-2 link-backtohome" href="/login" >
                                        Back to login
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div class="col-6">
                            <div className="right-side my-2">
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