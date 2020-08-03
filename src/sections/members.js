import React from 'react';

import { Link } from "react-router-dom";

import { paths, membersWithTeams, membersWithoutTeams } from '../data';

const { homePagePath } = paths;

/* Raviteja */
function MemberScreen(props) {
    const { classHasTeams } = props;
    const classTitle = (classHasTeams ? membersWithTeams : membersWithoutTeams)["Class title"];

    const renderMemberItems = (name) => {

    }

    const renderSectionDivider = (sectionName) => {
        return (
            <div>
                <h4>{sectionName}</h4>
                <div className="h-1 w-full border-dashed border-t border-gray-600"></div>
            </div>
        )

    }

    const renderTeams = () => {
        const teamLeads = membersWithTeams["teams"].map(team => team['Team Lead']);
        return (<ul>{teamLeads.map(teamLead => <li>{teamLead}</li>)}</ul>)
    }

    const renderMembers = (members) => {

    }
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="h-10 w-10">
                        <Link to={homePagePath}>
                            <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                        </Link>
                    </div>
                    <div className="self-center flex-grow">
                        <h4 className="font-bold text-xl text-center text-gray-800">
                            {classTitle}
                        </h4>
                    </div>
                    <div className="h-10 w-10">
                        {/* Dummy div to center the class title*/}
                    </div>
                </div>
                <h4 className="text-md font-bold text-center">Send message to</h4>
                <div className="px-8">
                    <p>Everyone</p>
                    {renderSectionDivider("test")}
                    {renderTeams()}
                </div>
            </div>
        </>
    )
}

export default MemberScreen;