# A simple Typescript API  
- It includes three endpoints tasks, lists, and tasksLists
- The project is containerized in Docker
- The schema gets constructed when the container gets built
- All 3 API resources use simple vanilla mysql queries
- It includes 2 simple endpoint tests using supertest

## Getting started
- Install Docker first
- Create the docker images using `docker build`
- Create the docker containers using `docker-compose up`
- The container will build a mysql db + start the express app
- You should now be able to connect to the mysql using the .env.example variables
- Test if all is working by sending HTTP requests to /api/lists, /api/tasks, /api/tasksLists