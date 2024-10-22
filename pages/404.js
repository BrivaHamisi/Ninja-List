import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        console.log('Use Effect Ran')
            setTimeout(() => {
                router.push('/')
            }, 3000)
        
    }, []);
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <p>Go Back to the <Link href="/"> Homepage</Link> </p>
        </div>     
        );
}
 
export default NotFound;