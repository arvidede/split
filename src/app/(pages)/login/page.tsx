export default function Login() {
    return (
        <form action="/auth/login" method="post">
            <label htmlFor="email">Email</label>
            <input name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <button formAction="/auth/sign-up">Sign Up</button>
            <button>Sign In</button>
        </form>
    )
}
