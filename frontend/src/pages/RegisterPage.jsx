export default function RegisterPage() {
  // need to bring in data for a user state
  return (
    <>
      <div className="Register">
        <div className="Register-Form">
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
              <span>Email</span>
              <input
                type="text"
                required
                name="email"
                placeholder="Enter email"
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
            <label>
              <span>avatar</span>
              <input
                type="text"
                required
                name="avatar"
                placeholder="Enter avatar"
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
