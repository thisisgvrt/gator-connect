import React from 'react';

import {
    Link
} from "react-router-dom";

import { paths, } from '../data';

const {
  membersWithTeamsPath,
  membersWithoutTeamsPath,
} = paths;

/* Priyanka */
function HomepageScreen() {
    return (
        <ul>
            <li>
                <Link to={membersWithTeamsPath}>
                    withTeams
                </Link>
            </li>
            <li>
                <Link to={membersWithoutTeamsPath}>
                    withoutTeams
                </Link>
            </li>
        </ul>
    )
}

export default HomepageScreen;