# Hello, welcome to Api-Courses, this API handles GET, POST, PUT, and DELETE requests for a data of courses.
The landing page is on the url http://localhost:env.port (on my local machine the port is 3000)

To see the list of available courses navigate to http://localhost:env.port/api/courses

To get just a particular course enter in the url http://localhost:env.port/api/courses/id (The id can be any number, depending on the id entered different
responses are sent).

To add a new course enter in the url http://localhost:env.port/api/courses (you will need to add the course object with just a name key and value pair,
as part of the request body)

To update an exixting course enter in the url http://localhost:env.port/api/courses/id (you will need to add the course object with just a name key and value pair,
you want as the update as part of the request body)

To delete an existing course enter in the url http://localhost:env.port/api/courses/id (The id should match the id of any one of the existing courses for
it to be deleted)

You can find the dependencies and their exact versions used in my package-lock.json file

Thank you for checking out my API enjoy!
