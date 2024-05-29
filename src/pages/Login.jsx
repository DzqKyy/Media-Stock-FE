import { createSignal } from "solid-js";

function Login() {
    const [emailValue, setEmailValue] = createSignal("");
    const [passwordValue, setPasswordValue] = createSignal("");

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    }

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
                                <p class="start mb-0">Get Started</p>
                                <div class="content mx-2">
                                    <p class="mb-4" style={{ color: "#ACA6A6" }}>
                                        Don't have an account?
                                        <a href="/register"> Register</a>
                                    </p>

                                    <input
                                        id="email"
                                        type="text"
                                        class="input-auth"
                                        placeholder="Enter email"
                                        value={emailValue()}
                                        onInput={handleEmailChange}
                                    />

                                    <input
                                        id="password"
                                        type="password"
                                        class="input-auth"
                                        placeholder="Enter password"
                                        value={passwordValue()}
                                        onInput={handlePasswordChange}
                                    />

                                    <div class="mt-2">
                                        <a href="/forgotpassword"> Forgot your password?</a>
                                    </div>
                                    <div class="button-auth" onClick={handleClick}>
                                        Login
                                    </div>
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
export default Login;