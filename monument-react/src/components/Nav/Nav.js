import React from 'react';

function Nav() {
    return (
        <div>
            <nav>
                <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>

    )
}
export default Nav;
