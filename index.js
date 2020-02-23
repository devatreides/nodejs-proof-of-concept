//Import Express Library
const express = require('express')
//Create a server instancy
const server = express()
//Work with JSON format
server.use(express.json())

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
let requests = 0

/**
 * Middlewares
 */
function countRequest(req,res,next)
{
  requests++
  console.log(`${requests} requests so far`)
  console.log(`method: ${req.method}; URL: ${req.url}`)
  console.time('Request time')
  next()
  console.timeEnd('Request time')
}

function checkExistingProject(req,res,next)
{
  const { id } = req.params

  const projectID = projects.findIndex(project => project.id == id)

  if(projectID === -1){
    return res.status(400).json({error: 'Project not found'})
  }

  return next()
}

/**
 * Routes
 */
server.get('/projects', countRequest, (req, res) => {
  return res.json(projects)
})

server.post('/projects', countRequest, (req, res) => {
  const { id, title } = req.body

  const project = {id: id, title: title, tasks: []}

  projects.push(project)

  return res.json(projects)
})

server.post('/projects/:id/tasks', countRequest, checkExistingProject, (req, res) => {
  const { title } = req.body
  const { id } = req.params

  const projectId = projects.findIndex(project => project.id == id)

  projects[projectId].tasks.push(title)

  return res.json(projects)
})

server.put('/projects/:id', countRequest, checkExistingProject, (req, res) => {
  const { title } = req.body
  const { id } = req.params

  const projectId = projects.findIndex(project => project.id == id)

  projects[projectId].title = title

  return res.json(projects)

})

server.delete('/projects/:id', countRequest, checkExistingProject, (req, res) => {
  const { id } = req.params

  const projectId = projects.findIndex(project => project.id == id)

  projects.splice(projectId, 1)

  return res.send()
})


//Start the server
server.listen(3000)