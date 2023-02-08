# Social-Network-API
An api for a Social Network platform

## Description

The objective was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The foundation of a social network web application is data, and the goal was understand how to build and structure for the API first. By doing this all the necessary API routes can be built and tested for reliability. I learned quite a bit during this project, and was able to apply Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Installation

This application is not deployed. It's a functioning API that can be route tested via Insomnia or Postman.

## Usage

Routes tested via Insomnia or Postman: http://localhost:3001

Get Routes:
- /api/users/
- /api/thoughts/

Delete Routes:
- /api/users/{id}/friends/{id}
- /api/thoughts/{id}
- /api/users/{id}
- /api/thoughts/{id}/reactions/{id}

Post Routes:
- /api/users/
- /api/thoughts/
- /api/thoughts/{id}/reactions
- /api/users/{id}/friends/{id}

Put Routes:
- /api/users/{id}
- /api/thoughts/{id}

![Insomnia](/images/SS-01.png)

Videos for route testing in the following order: (1) GET & POST, (2) GET & DELETE, (3) GET & PUT:

Get-Post:
https://drive.google.com/file/d/1xVhRwxWzL-gu5PFjN37Hvy1i3T__tiBL/view

Get-Delete:
https://drive.google.com/file/d/1-px9YI-A5Q1-bBToPlznC_CaZBQmnMu7/view

Get-Put:
https://drive.google.com/file/d/1q5_-L4-iGwr_8sRDaPBJd475fSt2yWeb/view

## Credits

N/A

## License

MIT, Please refer to the license in the Repo.