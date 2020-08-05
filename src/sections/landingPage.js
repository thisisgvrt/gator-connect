import React from 'react';

import {
    Link
} from "react-router-dom";

import { paths } from '../data';

const {
    homePagePath,
} = paths;

function LandingPageScreen() {
    return (
        <div className="p-8 py-24 w-full flex flex-col">
            <h1 className="text-5xl text-center">Gator Connect</h1>
            <p className="text-center py-4">Messaging platform that integrates with iLearn to provide access to messaging your academic partners (Professors, students) on the go.</p>
            <p className="text-center py-1">We also have access to your class schedule, so you can be reminded if its time for your next class while you can do you work.</p>
            <div className="py-4 w-full flex justify-center">
                <Link to={homePagePath}>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPageScreen;