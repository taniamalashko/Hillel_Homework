const roles = {
	admin: "/Hillel_Homework/homeWork34/img/admin.png",
	student: "/Hillel_Homework/homeWork34/img/students.png",
	lector: "/Hillel_Homework/homeWork34/img/teacher.png"
};

const gradation = {
	0: {
		class: "no-rating",
		span: "No rating",
	},
	20: {
		class: "satisfactory",
		span: "Satisfactory",
	},
	55: {
		class: "good",
		span: "Good",
	},
	85: {
		class: "very-good",
		span: "Very good",
	},
	100: {
		class: "excellent",
		span: "Excellent",
	},
};

const CLASSES = {
	'student': (user) => new Student(user),
	'lector': (user) => new Lector(user),
	'admin': (user) => new Admin(user),
}

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "/Hillel_Homework/homeWork34/img/user1.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "/Hillel_Homework/homeWork34/img/user2.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "/Hillel_Homework/homeWork34/img/user3.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "/Hillel_Homework/homeWork34/img/user4.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "/Hillel_Homework/homeWork34/img/user5.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "/Hillel_Homework/homeWork34/img/user6.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]

class User{
	constructor(user){
		this.name = user.name;
		this.age = user.age;
		this.img = user.img;
		this.role = user.role;
		this.coursesAvailability(user);
	}

	coursesAvailability(user){
		if (user.courses) {
			this.courses = user.courses;
		}
	}

	getGrade(grade) {
		let gradesToCompare = Object.keys(gradation).map(Number);
		let newGrade = gradesToCompare.reduce((prev, curr) => {
		  if (curr <= grade && curr > prev) {
			return curr;
		  }
		  return prev;
		}, 0);
		return gradation[newGrade];
	  }

	render(){
		let courses = this.courses && this.courses.length > 0 ? this.renderCourses() : '';
		return `<div class="user">
					<div class="user__info">
						<div class="user__info--data">
							<img src=${this.img} alt="${this.name}" height="50">
							<div class="user__naming">
								<p>Name: <b>${this.name}</b></p>
								<p>Age: <b>${this.age}</b></p>
							</div>
						</div>
						<div class="user__info--role ${this.role}">
							<img src=${roles[this.role]} alt="${this.role}" height="25">
							<p>${this.role}</p>
						</div>
					</div>
					${courses}
				</div>`
	}
	
	renderCourses(){
		let adminInfo = this.role !== 'student' ? 'admin--info' : '';
		return `
			<div class="user__courses ${adminInfo}">
				${this.courses.map(course => this.renderCourse(course)).join('')}
			</div>`
	}

	renderCourse(course){
		return `<div class="user__courses--course ${this.role}">
					${this.getCourseDescription(course)}
				</div>`
	}

	getCourseDescription(course){
		return ''
	}
}

class Student extends User{
	constructor(user){
		super(user);
	}

	getCourseDescription(course){
		let studentGradeClass = this.getGrade(course["mark"]).class;
		let studentGradeSpan = this.getGrade(course["mark"]).span;
		return `${course["title"]}<span class="${studentGradeClass}">${studentGradeSpan}</span>`
	}
	
}

class Lector extends User{
	constructor(user){
		super(user);
	}

	getCourseDescription(course){
		let lectorsScoreClass = this.getGrade(course["score"]).class;
		let lectorsScoreSpan = this.getGrade(course["score"]).span;
		let studentsScoreClass = this.getGrade(course["studentsScore"]).class;
		let studentsScoreSpan = this.getGrade(course["studentsScore"]).span;
		return `<p>Title: <b>${course["title"]}</b></p>
				<p>Lector's score: <span class="${lectorsScoreClass}">${lectorsScoreSpan}</span></p>
				<p>Average student's score: <span class="${studentsScoreClass}">${studentsScoreSpan}</span></p>`
	}
}

class Admin extends User{
	constructor(user){
		super(user);
	}

	getCourseDescription(course){
		let adminsScoreClass = this.getGrade(course["score"]).class;
		let adminsScoreSpan = this.getGrade(course["score"]).span;
		return `<p>Title: <b>${course["title"]}</b></p>
				<p>Admin's score: <span class="${adminsScoreClass}">${adminsScoreSpan}</span></p>
				<p>Lector: <b>${course["lector"]}</b></p>`
	}

}


let usersInstances = users.map(user => {
	return CLASSES[user.role](user);
});



let divs = usersInstances.map(inst => (inst.render()));


document.write(`<div class="users">${divs.join('')}</div>`)
