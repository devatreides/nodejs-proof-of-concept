//Import Express Library
const express = require('express')
//Create a server instancy
const server = express()

/**
 * Variables
 */
//List of Projects (Our "database")
const projects = [
  {
    id: 1,
    title: 'Project 1',
    tasks: ['Task 1','Task 2']
  }
]
//Number of requests made during an execution of the server
const requests = 0

/**
 * Middlewares
 */
function countRequest(req,res,next){}

function checkExistingProject(req,res,next){}

/**
 * Routes
 */
server.get('/projects', (req, res) => {
  return res.json(projects)
})

// server.post()

// server.post()

// server.put()

// server.delete()


//Start the server
server.listen(3000)