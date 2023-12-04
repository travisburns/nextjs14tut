"use client";

import Logo from "./Logo";
import Menu from "./Menu";




 const Header = (props: any) => {
    

    return (
        <header>
            {props.name}
            <Logo />
            <div>Header item</div>
            <Menu />
        </header>
        

    )
}


export default Header