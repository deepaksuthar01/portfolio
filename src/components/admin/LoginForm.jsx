const LoginForm =  () => {
    return(
        <div className="p-3">
            <form action="#" method="post">
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-1 font-bold">UserName / Email</label>
                    <input type="text" name="username" id="username" className="p-2 border rounded-md w-full border-slate-500" placeholder="Username" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1 font-bold">Password</label>
                    <input type="password" name="password" id="password" className="p-2 border rounded-md w-full border-slate-500" placeholder="password" />
                </div>
                <div className="mb-4 flex items-center">
                    <input type="checkbox" name="remember" id="remember" className="w-4 h-4 border rounded-md mr-1  border-slate-500" placeholder="remember" />
                    <label htmlFor="remember" className="font-bold">Remember</label>
                </div>
                <div className="text-center">
                    <button className="site-btn">SingIn</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;