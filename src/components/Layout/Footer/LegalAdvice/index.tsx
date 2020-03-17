import React from 'react';

import {LegalAdviceItems} from "@Constants/LegalAdviceItems";
import {LegalAdviceSpace} from "@Custom/LegalAdviceSpace";
import {SocialLink} from "@Custom/SocialLink";

const LegalAdvice = () => {

    return (
        <LegalAdviceSpace>
            {LegalAdviceItems.map((menu, index) => (
                <SocialLink to={menu.route} key={index} className="navbar-brand brand">{menu.text}</SocialLink>
            ))}
        </LegalAdviceSpace>
    );
};

export default LegalAdvice