const membersWithTeams = {
    "Class title": "A.I Ethics",
    "teams": [
        {
            "Team Lead": "John Doe",
            "members": [
                "Jenny Smith",
                "Anna Ward",
                "Sahib Rose"
            ]
        },
        {
            "Team Lead": "Elissa Goldsmith",
            "members": [
                "Aria Sellers",
                "Jibril Khan",
                "Mariah Frey"
            ]
        },
        {
            "Team Lead": "Sydney Daniels",
            "members": [
                "Oskar Cooley",
                "Manav Lacey",
                "Kuba Merritt"
            ]
        },
        {
            "Team Lead": "James Hull",
            "members": [
                "Sanjeev Sawyer",
                "Georgia Collier",
                "Ikrah Owens"
            ]
        }
    ]
}

const membersWithoutTeams = {
    "Class title": "Explainbility in A.I",
    "members": [
        "Roosevelt Case",
        "Bibi Barton",
        "Wesley Chavez",
        "Blane Gould",
        "Conall Cisneros",
        "Kaydee Boyle",
        "Abdullah Gallegos",
        "Macaulay Mccormick",
        "Albert Pope",
        "Irfan Sharples",
        "Kwame Morley",
        "Emaan Gomez",
        "Larissa Guzman",
        "Catrin Carter",
        "Nela Odling",
        "Ernest Snider",
        "Joann Lambert",
        "Malaki Salgado",
        "Tyler Connor",
        "Clifford Fry",
    ]
}

const paths = {
    landingPagePath: "/",
    homePagePath: "/homePage",
    profilePagePath:"/profile",
    messageScreenPath: "/messages",
    calendarScreenPath: "/calendar",
    eventsOverviewScreenPath: "/eventsOverview",
    notificationScreenPath: "/notifications",
    membersWithTeamsPath: "/membersWithTeamsPath",
    membersWithoutTeamsPath: "/membersWithoutTeamsPath"
}

const semestersData = [
    {
        "Name of the Semester": "Summer 2020 (Current Semester)",
        "Classes":[
            {
                "Class Name": "Human Computer Interaction"
            },
            {
                "Class Name": "Software Engineering"
            }
        ]
    },
    {
        "Name of the Semester": "Spring 2020",
        "Classes":[
            {
                "Class Name": "Explainable Artifical Intelligence"
            },
            {
                "Class Name": "User Centered Design"
            },
            {
                "Class Name": "Ethics in Artificial Intelligence"
            },
            {
                "Class Name": "Machine learning"
            }
        ]
    },
    {
        "Name of the Semester": "Fall 2019",
        "Classes":[
            {
                "Class Name": "Machine learning"
            },
            {
                "Class Name": "User Centered Design"
            },
            {
                "Class Name": "Explainable Artifical Intelligence"
            },
            {
                "Class Name": "Ethics in Artificial Intelligence"
            }
        ]
    },
    {
        "Name of the Semester": "Spring 2019",
        "Classes":[
            {
                "Class Name": "Machine learning"
            },
            {
                "Class Name": "User Centered Design"
            },
            {
                "Class Name": "Explainable Artifical Intelligence"
            },
            {
                "Class Name": "Ethics in Artificial Intelligence"
            }
        ]
    },
    {
        "Name of the Semester": "Fall 2018",
        "Classes":[
            {
                "Class Name": "Machine learning"
            },
            {
                "Class Name": "User Centered Design"
            },
            {
                "Class Name": "Explainable Artifical Intelligence"
            },
            {
                "Class Name": "Ethics in Artificial Intelligence"
            }
        ]
    }
]

module.exports = {
    membersWithTeams,
    membersWithoutTeams,
    paths,
    semestersData
}