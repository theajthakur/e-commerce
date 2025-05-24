import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <div className="login-container row justify-content-center align-items-center">
      <div className="col-md-6 col-lg-4 col-11">
        <div className="card mt-5">
          <div className="card-header">
            <h3 className="text-center">Login</h3>
          </div>
          <div className="card-body">
            <>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={() => {
                  if (formData.email && formData.password) {
                    localStorage.setItem("treshop_login_status", "true");
                    localStorage.setItem("treshop_user_email", formData.email);
                    alert("Login Successful!");
                    window.location.href = "/";
                  } else {
                    alert("Please fill in all fields!");
                  }
                }}
              >
                Login
              </button>
            </>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>
            Don't have an account?
            <a href="/register" className="text-primary">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
