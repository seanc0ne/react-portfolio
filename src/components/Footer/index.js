import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='flex-row'>
            <div className="linkedin">
                <a
                    href="https://www.linkedin.com/in/seanc0ne/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className="github">
                <a
                    href="https://github.com/seanc0ne"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="soundcloud">
                <a
                    href="https://soundcloud.com/seanisthetea"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-soundcloud"></i>
                </a>
            </div>

            </div>
            


        </footer>
    );
}
export default Footer;
