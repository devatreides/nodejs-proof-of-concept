//Import Express Library
const express = require('express')
//Create a server instancy
const server = express()

/**
 * Variables
 */
//List of Projects (Our "database")
const projects = []
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
server.get()

server.post()

server.post()

server.put()

server.delete()


//Start the server
server.listen(3000)