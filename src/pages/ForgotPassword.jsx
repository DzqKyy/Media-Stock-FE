import { createSignal } from "solid-js";

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
                <div class="avatar">
                    <img src="../src/assets/img/avatar-auth.png" class="img-fluid" alt="da" />
                </div>
                <div class="container auth">
                    <div class="row">
                        <div class="col-6">
                            <div class="left-side">
                                <div class="header d-flex">
                                    <img src="../src/assets/img/hero-img.png" width="100px" class="img-fluid" alt="da" />
                                    <div class="question mt-3 text-center">
                                        <p class="tittle-question">Questions?</p>
                                        <a class="link-question mt-0" href="https://wa.me/+6281229006357?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank">
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

                                    <div class="button-auth" onClick={handleClick}>
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
                                    <img src="../src/assets/img/auth.png" width="420px" class="img-fluid" alt="da" />
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