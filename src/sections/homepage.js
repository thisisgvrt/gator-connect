import React from 'react';

import {
    Link
} from "react-router-dom";

import { paths, semestersData } from '../data';

const {
    membersWithTeamsPath,
    membersWithoutTeamsPath,
} = paths;

/* Priyanka */
function HomepageScreen({searchText}) {

    const renderSemester = (semesterData) => {
        return (
            <>
                <div className="col-span-2 mt-4">
                    <h4 className={`font-bold uppercase text-center ${semesterData["Name of the Semester"].includes("Current") ? "text-gray-700" : "text-gray-600"}`}>
                        {semesterData["Name of the Semester"]}
                    </h4>
                </div>
                {
                    semesterData["Classes"].map((classData, idx) => {
                        return (
                            <Link to={(idx %2 === 0) ? membersWithoutTeamsPath : membersWithTeamsPath}>
                                <button className="btn btn-blue w-full h-full">
                                    {classData["Class Name"]}
                                </button>
                            </Link>
                        )
                    })
                }
            </>
        )
    }
    let content;
    if(searchText === null){
        content = semestersData.map(semesterData => renderSemester(semesterData));
    } else {
        const filteredSemestersData = semestersData.filter(semesterData => {
            return semesterData["Classes"].map(classInfo => classInfo["Class Name"].includes(searchText)).includes(true);
        });
        const filteredSemestersData2 = filteredSemestersData.map(semesterData => ({ ...semesterData, "Classes": semesterData["Classes"].filter(classInfo => classInfo["Class Name"].includes(searchText))}));
        content = filteredSemestersData2.map(semesterData => renderSemester(semesterData));
    }
    return (
        <div className="grid grid-cols-2 gap-2 w-full p-4">
            {content}
        </div>
    )
}

export default HomepageScreen;