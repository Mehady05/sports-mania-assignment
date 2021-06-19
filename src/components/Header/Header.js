import React from 'react';
import League from '../League/League';

const Header = () => {
    return (
        <div>
            <div class="header-area">
            <div class="header-overlay text-white d-flex align-items-center justify-content-center">
                <h1>FootBall League 2021</h1>
            </div>
        </div>
            <League></League>
        </div>
    );
};

export default Header;