import { createSignal } from "solid-js";
import '../assets/css/auth/authentication.css';

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
                <div class="container auth">
                    <div class="row">
                        <div class="avatar text-center mt-3 ">
                            <img src="../src/assets/img/avatar-auth.png" class="img-harits " alt="da" />
                        </div>
                        <div class="col-6">
                            <div class="left-side">
                                <div class="header-auth d-flex mx-3">
                                    <img src="../src/assets/img/hero-img.png" width="100px" class="img-fluid" alt="da" />
                                    <div class="question mt-3">
                                        <p class="tittle-question text-center">Questions?</p>
                                        <a class="link-question mt-0" href="/contact">
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
                                        class="input-auth d-flex flex-column"
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
                                    <div class="button-auth px-3 mt-5" onClick={handleClick}>
                                        Login
                                    </div>
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
export default Login;