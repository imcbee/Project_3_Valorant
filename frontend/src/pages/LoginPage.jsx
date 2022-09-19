export default function LoginPage() {
  return (
    <>
      <div className="Login">
        <div className="Login-Form">
          <form onSubmit="">
            <label>
              <span>Username</span>
              <input
                type="text"
                required
                name="username"
                placeholder="Enter username"
                onChange=""
                value=""
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="text"
                required
                name="password"
                placeholder="Enter password"
                onChange=""
                value=""
              />
            </label>
            <button type="submit" value="" />
          </form>
        </div>
      </div>
    </>
  );
}
