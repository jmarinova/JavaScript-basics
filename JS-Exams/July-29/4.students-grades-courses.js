function solve(args){
    var currLine, name, course, grade, visits;
    var courses = {};

    for (var i = 0; i < args.length; i++) {

        currLine = args[i].split(/[\s]?\|[\s]?/g);
        name = currLine[0].trim();
        course = currLine[1].trim();
        grade = Number(currLine[2].trim());
        visits = Number(currLine[3].trim());

        if (!courses[course]){
            courses[course] = {
                'avgGrade' : 0,
                'avgVisits' : 0,
                'students' : [],
                'countPresence' : 0

            };
        }
        courses[course].avgGrade += grade;
        courses[course].avgVisits += visits;

        if  (courses[course].students.indexOf(name) == -1){
            courses[course].students.push(name);
        }
        courses[course]['countPresence'] +=1;
    }
    var courseKeys = Object.keys(courses).sort();

    var outputArr = {};

    for (var i = 0; i < courseKeys.length; i++) {
        var currCourse = courseKeys[i];

        outputArr[currCourse] = courses[currCourse];
        outputArr[currCourse].students.sort();

        outputArr[currCourse].avgGrade = Number((outputArr[currCourse].avgGrade / outputArr[currCourse].countPresence).toFixed(2));
        outputArr[currCourse].avgVisits = Number((outputArr[currCourse].avgVisits / outputArr[currCourse].countPresence).toFixed(2));

        delete outputArr[currCourse].countPresence;
    }

    console.log(JSON.stringify(outputArr));

}

solve([
    'Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9'

]);