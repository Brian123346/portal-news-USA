import { Link} from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prev = 0;
    const next = 0;    
    const current =meta.current_page;


    return (
            <div className="btn-group">
                {!prev &&<Link href={prev} className="btn btn-outline">«</Link>}
                <Link className="btn btn-outline">{current}</Link>
                {!next &&<Link  href={next} className="btn btn-outline">»</Link>}
            </div>
    ); 
};

export default Paginator;
