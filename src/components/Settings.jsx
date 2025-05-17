import { Routes, Route, Link } from "react-router";
import Address from "./settings/Address";
import "../style/Settings.css";
import { Laptop, LocateIcon } from "lucide-react";
import Support from "./settings/Support";

export default function Settings({ userAddress, setUserAddress }) {
  const links = [
    { text: "Address", path: "address", icon: <LocateIcon /> },
    { text: "Support", path: "support", icon: <Laptop /> },
  ];
  return (
    <div className="settings-container bg-light vh-100 pt-5">
      <div className="container">
        <div className="row">
          <div className="setting-sidebar col-sm-3 col-lg-4">
            <div className="greet py-2 bg-white">
              <h3 className="text-center py-3 m-0">Welcome</h3>
            </div>
            <div className="mt-3 bg-white">
              <div className="setting-refers">
                {links.map((l, index) => (
                  <Link to={`/settings/${l.path}`} key={index}>
                    <div className="link-container">
                      <div className="link-icon">{l.icon}</div>
                      <div className="link-text">
                        <p>{l.text}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="settings-content col-sm-9 col-lg-8">
            <Routes>
              <Route
                path="address"
                element={
                  <Address
                    userAddress={userAddress}
                    setUserAddress={setUserAddress}
                  />
                }
              />
              <Route path="support" element={<Support />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
