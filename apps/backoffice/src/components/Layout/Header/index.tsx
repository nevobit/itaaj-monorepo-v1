import DropdownMenu from '@/components/Shared/DropdownMenu';
import React from 'react';
import { headerOptions } from './header-optons';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@/constant-definitions';

const Header = () => {
    const user = {
        name: 'Admin',
        lastname: '',
        username: 'admin',
        position: '',
        image: '',
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.logo}>
                    <img src="/img/logo/isotipo.png" />
                </div>
                <nav className={styles.nav}>
                    <Link to={PrivateRoutes.HOME}>
                        Home
                    </Link>
                    {headerOptions.map((option) => (
                        <DropdownMenu 
                            key={option.title}
                            title={option.title}
                            items={option.items}
                        />
                    ))}
                    
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
            </div>
        </header>
    );
};

export default Header;
