'use client';
import { useState } from "react";

export default function DropDownMenu() {

    const [isActive, setIsActive] = useState(false);

    const hoverHandler = () => {
        setIsActive(!isActive);
        console.log('active')
    }

    return (
        <ul onMouseOver={hoverHandler} className={`dropdown-menu ${isActive ? 'active' : ''}`}>
            <p>HAMBURGARE</p>
            {isActive && (
                <>
                    <li>Trädfällning</li>
                    <li>Trädbeskärning</li>
                    <li>Stubbfräsning</li>
                    <li>Trädvård och rådgivning</li>
                    <li>Akut trädvård</li>
                </>
            )}
        </ul>
    )
}