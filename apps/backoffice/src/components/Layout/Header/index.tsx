import DropdownMenu from '@/components/Shared/DropdownMenu';
import React from 'react';
import { headerOptions } from './header-optons';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@/constant-definitions';
<<<<<<< HEAD
import { MoreVertical } from 'react-feather';
=======
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31

const Header = () => {
    const user = {
        name: 'Nestor',
        lastname: 'Mosquera',
        username: 'admin',
        position: '',
        image: '',
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <h2>Itaaj Realty</h2>
                <nav className={styles.nav}>
<<<<<<< HEAD
                    {/* <Link to={PrivateRoutes.HOME}>
=======
                    <Link to={PrivateRoutes.HOME}>
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
                        Home
                    </Link>
                    {headerOptions.map((option) => (
                        <DropdownMenu 
                            key={option.title}
                            title={option.title}
                            items={option.items}
                        />
                    ))}
                     */}
                </nav>
            </div>

            <div className={styles.profile}>
                {user.image.length > 2 ? (
                    <img src={user.image} alt="" />
                ) : (
                    <div className={styles.user_char}>{user.name.charAt(0).toLocaleUpperCase()}</div>
                )}
                <div>
                    <h2>
                        {user.name} {user.lastname}
                    </h2>
                    <p>{user.position}</p>
                </div>
                <MoreVertical />
            </div>
        </header>
    );
};

export default Header;
