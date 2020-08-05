import React from 'react';

import {
    Link
} from "react-router-dom";

import { paths } from '../data';

const {
    landingPagePath,
} = paths;

function ProfilePageScreen({sLogoutButton}) {
    return (
        <div className="p-8 py-24 w-full flex flex-col justify-center items-center">
            <div className="muted-highlight-color">
                <svg className="h-32 w-32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="pt-4 text-3xl">John Doe</h1>
            <h4 className="py-1 pb-16 text-2x">Final year student</h4>
            <div className="flex flex-row items-center h-12 pb-8">
                <span className="text-xl text-gray-600">John.doe@mail.sfsu.edu</span>
                <div onClick={() => alert("Email id copied to clipboard")}>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path></svg>
                </div>
            </div>
            <Link to={landingPagePath}>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
            </Link>
        </div>
    )
}

export default ProfilePageScreen;