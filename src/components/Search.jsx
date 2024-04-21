import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";

function samplenav() {
    const location = useLocation();
    //the data here will be an object since an object was
    const data = location;
    console.log("test enroll debug", data);
    function search(val){
        alert(val);
    }
	return (
        <form onSubmit={search(data.onSubmit)} id="search" className="Search">
            <input type="search" placeholder="Search for a title..." />
        </form>
    );
}

export default samplenav;
