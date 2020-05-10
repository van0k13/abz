import React from "react";
import s from './header.module.css'
import { Link } from "react-scroll";


const Header = () => {
    return (
        <div className={s.headerPageWrapper}>
                <div className={s.header}>
                    <div className={s.img}>
                        <img alt={'logo'} />
                        <span>testtask</span>
                    </div>
                    <div className={s.navMenu}>
                        <Link spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={0}
                              duration={700} to="aboutMe" className={s.link}>About me
                        </Link>
                        <Link spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={0}
                              duration={700} to="relationships" className={s.link}>Relationships
                        </Link>
                        <Link spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={0}
                              duration={700} to="requirements" className={s.link}>Requirements
                        </Link>
                        <Link spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={0}
                              duration={700} to="users" className={s.link}>Users
                        </Link>
                        <Link spy={true}
                              activeClass={s.active}
                              smooth={true}
                              offset={0}
                              duration={700} to="signup" className={s.link}>Sign Up
                        </Link>
                    </div>
                </div>
        </div>
    )
};

export default  Header;