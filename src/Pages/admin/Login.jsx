import { loginLeft } from "../../assets/images";
import LoginForm from "../../components/admin/LoginForm";

const Login =  () => {
    return(
        <section className="bg-yellow-500 h-screen">
            <div className="container-xl py-16">
                <div className="w-4/5 shadow-lg m-auto bg-white rounded-md overflow-hidden shadow-slate-500">
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="p-6 bg-yellow-500 ">
                            <img src={loginLeft} alt="loginImg" />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="p-6">
                                <h1 className="mb-8 font-bold text-4xl text-yellow-500 text-center">Login</h1>
                                <LoginForm />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Login;