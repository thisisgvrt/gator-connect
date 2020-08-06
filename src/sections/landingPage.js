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
        <div className="p-8 py-24 w-full h-full flex flex-col navbar-purple">
            <h1 className="text-5xl text-center navbar-yellow">Gator Connect</h1>
            <p className="text-center py-4 text-gray-300">Messaging platform that integrates with iLearn to provide access to messaging your academic partners (Professors, students) on the go.</p>
            <p className="text-center py-1 text-gray-300">We also have access to your class schedule, so you can be reminded if its time for your next class while you can do you work.</p>
            <div className="py-4 w-full flex justify-center">
                <Link to={homePagePath}>
                    <button class="bg-yellow hover:bg-blue-700 text-white text-xl font-bold py-3 px-8 rounded">
                        Login »
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPageScreen;