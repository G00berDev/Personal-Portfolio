import "./App4.scss";
import Header from "./components/Header";
import SplineScene9 from "./components/SplineScene9";

function App4() {
return (
<>
    <SplineScene9 />
    <Header />
        <section>
        <div className="container">
            <h2>Contact Me</h2>
            <div className="row100">
            <div className="col">
                <div className="inputBox">
                <input type="text" name="firstName" required="required" />
                <span className="text">First Name</span>
                <span className="line"></span>
                </div>
            </div>
            <div className="col">
                <div className="inputBox">
                <input type="text" name="lastName" required="required" />
                <span className="text">Last Name</span>
                <span className="line"></span>
                </div>
            </div>
            </div>
            <div className="row100">
            <div className="col">
                <div className="inputBox">
                <input type="text" name="email" required="required" />
                <span className="text">Email</span>
                <span className="line"></span>
                </div>
            </div>
            <div className="col">
                <div className="inputBox">
                <input type="text" name="mobile" required="required" />
                <span className="text">Mobile</span>
                <span className="line"></span>
                </div>
            </div>
            </div>
            <div className="row100">
            <div className="col">
                <div className="inputBox textarea">
                <textarea required="required"></textarea>
                <span className="text">Type Your Message Here...</span>
                <span className="line"></span>
                </div>
            </div>
            </div>
            <div className="row100">
            <div className="col">
                <input type="submit" value="Send" />
            </div>
            </div>
        </div> 
        </section>
</>
);
}

export default App4;
