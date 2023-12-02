'usse client';
import { useParams } from "next/navigation";


export default function ProfileIDPostID() {
    const params = useParams();
    console.log(params.id)
    return <div>My profile id</div>
}