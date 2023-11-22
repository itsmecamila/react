import Profile from "./Profile"
import "../css/Pages.css";

export default function Gallery(){
    return(
        <section>
            <h1>People</h1>
            <div className="galeria">
                <Profile/>
                <Profile/>
                <Profile/>
            </div>
        </section>
        
    )
}