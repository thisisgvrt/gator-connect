import React from 'react';

import { Link } from "react-router-dom";

import { paths, membersWithTeams, membersWithoutTeams } from '../data';

const { homePagePath } = paths;

/* Raviteja */
function MemberScreen(props) {
    const { classHasTeams, searchText } = props;
    const classTitle = (classHasTeams ? membersWithTeams : membersWithoutTeams)["Class title"];

    const renderMemberItems = (members) => {
        return members.map(member => {
            const [memberName, title] = member;
            return (
                <div className="flex flex-row w-full mb-4">
                    <div className="h-6 w-6 p-1 mr-2 rounded-full border">
                        {
                            memberName.includes("Everyone") ? <svg fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                :
                                <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        }

                    </div>
                    <p className="text-md font-semibold capitalize">
                        {memberName} 
                        {title && 
                            <span className="text-xs normal-case text-gray-600 ml-1">
                                ({title})
                            </span>
                        }
                    </p>
                </div>
            )
        })
    }

    const renderSectionDivider = (sectionName) => {
        return (
            <div className="mt-8">
                <h4 className="font-semibold text-xl leading-tight text-gray-700">{sectionName}</h4>
                <div className="h-2 w-full"></div>
            </div>
        )

    }

    const renderTeamLeads = () => {
        const teamLeads = membersWithTeams["teams"].map((team, idx) => [team['Team Lead'], `team ${idx+1}`]);
        return renderMemberItems(teamLeads);
    }

    const renderFilteredMembers = () => {
        if(classHasTeams){
            const flattendedMembers = membersWithTeams["teams"].map((team,idx) => [team["Team Lead"],...team["members"]].map(teamMember => [teamMember, `team ${idx+1}`])).flat().filter(([member,title]) => member.includes(searchText));
            return renderMemberItems(flattendedMembers);
        } else {
            return (
                <>
                    {
                    renderMemberItems(membersWithoutTeams["members"].filter(member => member.includes(searchText)).map(member => [member]))
                    }
                </>
            )
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="h-10 w-10">
                        <Link to={homePagePath}>
                            <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </Link>
                    </div>
                    <div className="self-center flex-grow">
                        <h4 className="font-bold text-2xl text-center uppercase text-gray-800">
                            {classTitle}
                        </h4>
                    </div>
                    <div className="h-10 w-10">
                        {/* Dummy div to center the class title*/}
                    </div>
                </div>
                <h4 className="text-sm font-medium text-center text-gray-700">Send a message to</h4>
                { (searchText === null || searchText === "") && (
                    <div className="px-8 py-4">
                    {renderMemberItems([["Everyone", "Broadcast to all members of class"]])}
                    {classHasTeams && renderSectionDivider("Team leads")}
                    {classHasTeams && renderTeamLeads()}
                    {
                        classHasTeams && membersWithTeams["teams"].map((team, idx) => {
                            return (<>
                            { renderSectionDivider(`Team ${idx}`) }
                            { renderMemberItems([["Everyone", `in team ${idx+1}`],...team["members"].map(member => [member])]) }
                            </>);
                        })
                    }
                    {
                        !classHasTeams && (
                            <>
                            {
                                renderSectionDivider("Class members")
                            }
                            {
                                renderMemberItems(membersWithoutTeams["members"].map(member => [member]))
                            }
                            </>
                        )
                    }
                </div>
                )}
                {
                    (searchText !== null && searchText !== "") && (
                        <div className="px-8 py-2">
                            {renderSectionDivider("Filtered members list")}
                            {
                                renderFilteredMembers()
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default MemberScreen;