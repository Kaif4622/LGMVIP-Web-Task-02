import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Button from "./Button";
import Loader from "./Loader";
import Cart from "./Cart";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("");

  return (
    <div className="">
      {/* code for navbar starts here */}
      <header className="bg-slate-900 w-full h-14 ">
        <nav className="flex justify-between mx-8 items-center h-full">
          <div className="flex items-center">
            <img src={logo} alt="logo_of_camera" className="w-12 h-12" />
            <div className="text-white text-xl font-extrabold ml-2">
              learnMore
            </div>
          </div>
          <Button status={status} setStatus={setStatus} setUsers={setUsers} />
        </nav>
      </header>
      {/* code for navbar ends here */}

      {status === ("pending" || "error") ? <Loader /> : <Cart users={users} />}
    </div>
  );
}

export default App;
