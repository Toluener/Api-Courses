const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

//DATA OF AVAILABLE COURSES
const courses = [
{id: 1, name: 'Science'},
{id: 2, name: 'Poetry'},
{id: 3, name: 'Languages'}];

//LANDING PAGE
app.get('/', (req, res) => 
{res.send ('Hello, welcome to courses API');});

//LIST OF AVAILABLE COURSES using get method
app.get('/api/courses', (req, res) => 
{res.send(courses);
});

//RETRIVING A SINGLE COURSE using get method
app.get('/api/courses/:id', (req, res) => 
{const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) {return res.status(404).send('The course with the given ID was not found');}
res.send(course);});

//ADDING A NEW COURSE using post method
app.post('/api/courses', (req, res) => {
 const {error} = validateCourse(req.body);

 if (error) return res.status(400).send(error.details[0].message);


const course = { 
id: courses.length + 1,
name: req.body.name};
courses.push(course);
res.send(course);
});

//UPDATING AN EXISTING COURSE using put method
app.put('/api/courses/:id', (req, res) => {
 
 const course = courses.find( c => c.id === parseInt(req.params.id));
 if (!course)
 { return res.status(404).send('The course with the given ID was not found');}
 
 const {error} = validateCourse(req.body);

 if (error) return res.status(400).send(error.details[0].message);

course.name = req.body.name;
res.send(course);
})

//DELETING A SINGLE COURSE using delete
app.delete('/api/courses/:id', (req, res) => {
 const course = courses.find( c => c.id === parseInt(req.params.id));
 if (!course)
 { return res.status(404).send('The course with the given ID was not found');}

const index = courses.indexOf(course); 
 courses.splice(index, 1);
 
 res.send(course);});

 //VALIDATING FUNCTION using Joi
function validateCourse(course){
const schema = {
name: Joi.string().min(3).required()};
return Joi.validate(course, schema);}


//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on port ${port}...`)});