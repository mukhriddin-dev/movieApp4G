import React from 'react';

const Footer = () => {
    const d =new Date();
    return (
        <div className="footer">
<p>
    Created By IT IMPERIA UZBEKISTAN    {d.getFullYear()}
</p>

        </div>
    );
};


export default Footer;