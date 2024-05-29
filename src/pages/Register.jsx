import { createSignal } from "solid-js";

function Register() {
    // State untuk menyimpan nilai input dari form
    const [usernameValue, setUsernameValue] = createSignal("");
    const [emailValue, setEmailValue] = createSignal("");
    const [passwordValue, setPasswordValue] = createSignal("");
    const [confirmPasswordValue, setConfirmPasswordValue] = createSignal("");

    // Handler function untuk mengelola perubahan input username
    const handleUsernameChange = (event) => {
        setUsernameValue(event.target.value);
    };

    // Handler function untuk mengelola perubahan input email
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    // Handler function untuk mengelola perubahan input password
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

    // Handler function untuk mengelola perubahan input confirm password
    const handleConfirmPasswordChange = (event) => {
        setConfirmPasswordValue(event.target.value);
    };

    // Handler function untuk mengelola klik tombol register
    const handleClick = () => {
        // Lakukan validasi atau pengiriman data pendaftaran di sini
        console.log("Data pendaftaran:", {
            username: usernameValue(),
            email: emailValue(),
            password: passwordValue(),
            confirmPassword: confirmPasswordValue()
        });
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
                                <p class="start-register mb-0">Get Started</p>
                                <div class="section-register content mx-2">
                                    <p class="mb-4" style={{ color: "#ACA6A6" }}>
                                        Already have an account?
                                        <a href="/login"> Login</a>
                                    </p>


                                    <input
                                        id="username"
                                        type="text"
                                        class="input-auth"
                                        placeholder="Enter username"
                                        value={usernameValue()}
                                        onInput={handleUsernameChange}
                                    />

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

                                    <input
                                        id="confirm-password"
                                        type="password"
                                        class="input-auth"
                                        placeholder="Enter confirm password"
                                        value={confirmPasswordValue()}
                                        onInput={handleConfirmPasswordChange}
                                    />

                                    <div class="button-auth"  onClick={handleClick}>
                                        Register
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
export default Register;