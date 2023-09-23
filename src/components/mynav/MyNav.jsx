import React from 'react';
import Link from './Link';
const MyNav = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Services", path: "/services" }
      ];
      
    return (
        <nav>
            <ul className='flex space-x-4'>
                {routes.map(route=> <Link route={route}></Link>
                    
                )}
            </ul>
        </nav>
    );
};

export default MyNav;