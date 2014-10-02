var bio = {
	"name": "Sumit Bagga",
	"role": "Software Developer",
	"contacts": {
		"mobile": "608 358 6887",
		"email": "baggasumit@gmail.com",
		"github": "baggasumit",
		"twitter": "baggasumitt",
		"location": "San Jose, CA"
	},
	"pictureURL": "images/me.jpg",
	"welcomeMessage": "Wilkommen",
	"skills": ["Java", "Python", "SQL","JavaScript"]
};

var education = {
	"schools": [
		{
			"name": "North Carolina State University",
			"location": "Raleigh, NC",
			"degree": "Masters",
			"major": "Computer Science",
			"dates": "Aug 2011 - Dec 2012",
			"url": "http://www.ncsu.edu"
		},
		{
			"name": "DAIICT",
			"location": "Gandhinagar, India",
			"degree": "B. Tech.",
			"major": "ICT",
			"dates": "Aug 2005 - May 2009",
			"url": "http://www.daiict.ac.in"
		}
	],
	"onlineCourses": [
		{
			"title": "Develop Android Apps",
			"school": "Udacity",
			"url": "http://www.udacity.com"
		},
		{
			"title": "JavaScript Advanced",
			"school": "Udacity",
			"url": "http://www.udacity.com"
		},
	]
};


var work = {
	"jobs": [
		{
			"title": "Software Developer",
			"employer": "Epic Systems",
			"url": "http://www.epic.com",
			"location": "Madison, WI",
			"dates" : "Jan 2013 - Feb 2014",
			"description" : "Worked as a member of Ambulatory team in the " 
	+ "design, development and maintenance of Epic's health care software. "
	+ "Used Intersystems Cache for data layer and Visual Basic for business "
	+ "and presentation layers."
		},
		{
			"title": "Systems Engineer",
			"employer": "Infosys Ltd.",
			"url": "http://www.infosys.com",
			"location": "Pune, India",
			"dates" : "Jun 2009 - July 2011",
			"description" : "Worked as a member of the development team on "
	+ "major enhancements in a banking application in Java. Worked as a "
	+ "member of the support team responsible for handling the defects after "
	+ "the release of the application."
		}
	]
};


var projects = {
	"projects": [
		{
			"title": "Web Application - Blog",
			"url": "https://github.com/baggasumit/Blog",
			"description": "A simple blog where users can sign-up, log-in and"
	+ " post blog entries. The front-end was implemented using HTML and CSS,"
	+ " and Python was used on the server side. The application was hosted on"
	+ " Google App Engine. User passwords were stored in the database using"
	+ " SHA256 encryption and server requests were authenticated using hashed"
	+ " cookies (HMAC)."
		},
		{
			"title": "Artifical Intelligence - Ants",
			"url": "http://ants.aichallenge.org",
			"description" : "Developed artificial intelligence for a game "
	+ "called Ants (ants.aichallenge.org) using Java. It is a two-dimensional"
	+ ", grid-based game where you move your army, consisting of ants, around"
	+ " the map and compete with other players who are controlling their own"
	+ " army in a free-for-all battle. A-Star search and Breadth First Search"
	+ " were used for path finding."	
		}
		
	]
};

bio.display = function() {

	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var idx in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[idx]));	
		}
	}

	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

work.display = function () {
	for(var idx in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var employment = work.jobs[idx];
		var formattedEmployer = HTMLworkEmployer
									.replace("%data%", employment.employer)
									.replace("#", employment.url);
		var formattedTitle = HTMLworkTitle.replace("%data%", employment.title);
		
		var formattedDates = HTMLworkDates.replace("%data%", employment.dates);
		var formattedLocation = HTMLworkLocation
			.replace("%data%", employment.location);
		var formattedDescription = HTMLworkDescription
			.replace("%data%", employment.description);

		$(".work-entry:last").append(formattedEmployer+formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};

education.display = function () {
	for(var idx in education.schools) {
		$("#education").append(HTMLschoolStart);
		var school = education.schools[idx];
		var formattedName = HTMLschoolName.replace("%data%", school.name)
			.replace("#", school.url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);

		$(".education-entry:last").append(formattedName+formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
};

projects.display = function() {
	for(var idx in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var project = projects.projects[idx];		
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title)
			.replace("#", project.url);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDescription);
	}
};

// Display data on web page
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
