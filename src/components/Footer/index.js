import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='flex-row'>
            <div class="linkedin">
                <a
                    href="https://www.linkedin.com/in/seanc0ne/"
                    target="_blank"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
            <div class="github">
                <a
                    href="https://github.com/seanc0ne"
                    target="_blank"
                >
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div class="soundcloud">
                <a
                    href="https://soundcloud.com/seanisyourdj"
                    target="_blank"
                >
                    <i class="fab fa-soundcloud"></i>
                </a>
            </div>


            </div>
            


        </footer>
    );
}
export default Footer;