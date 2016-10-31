
function getRandom(){
	return Math.random() >= 0.5;
}

var model = {
	nbDays: 12,
	students: [
	{
		name: "Slappy the Frog",
		daysMissed: [],
		nbDaysMissed: 0
	},
	{
		name: "Lilly the Lizard",
		daysMissed: [],
		nbDaysMissed: 0
	},
	{
		name: "Paulrus the Walrus",
		daysMissed: [],
		nbDaysMissed: 0
	},
	{
		name: "Gregory the Goat",
		daysMissed: [],
		nbDaysMissed: 0
	},
	{
		name: "Adam the Anaconda",
		daysMissed: [],
		nbDaysMissed: 0
	}
	],

	initRandData: function(){
		for (let student of this.students){
			let nbDaysMissed;
			for (let i=0;i<this.nbDays;i++){
				let missed = getRandom();
				student.daysMissed.push(
					{
						nb: i+1,
						missed: missed
					});
			}
		}
	}

};

var octopus = {

	init: function(){
		model.initRandData()
		viewTable.init()
	},

	getNbDays: function(){
		return model.nbDays;
	},

	getStudents: function(){
		return model.students;
	},

	setDayMissed: function(day, missed){
		// BOOOOOOOFFFFF
		day['missed'] = missed;
	},

	getNbDaysMissed: function(student){
		let nbDaysMissed = 0;
		for (let day of student.daysMissed){
			if (day['missed'])
				nbDaysMissed += 1;
		}
		return nbDaysMissed;
	}

};

var viewTable = {

	init: function(){
		this.table = $('table');
		// return of find not a jQuery object
		this.thead = $(this.table).find('thead');
		this.tbody = $(this.table).find('tbody');
		this.render()

	},

	render: function(){
		let nbDays = octopus.getNbDays();
		let students = octopus.getStudents();

		this.thead.empty();
		this.tbody.empty();
		this.createHeadColumns(nbDays);
		this.createStudentsRows(students);
	},

	createHeadColumns: function(nbDays){
		this.thead.append('<th class="name-col">Student Name</th>');
		for (let i=0;i<nbDays;i++){
			this.thead.append("<th>" + (i+1).toString() + "</th>");
		}
		this.thead.append('<th class="missed-col">Days Missed-col</th>');
	},

	createStudentsRows: function(students){
		for (let student of students){
			this.addStudentRow(student);
		}
	},

	addStudentRow: function(student){
		let row = this.tbody.append('<tr class="student">toto</tr>');
		row.append('<td class="name-col">' + student.name +'</td>');
		for (let dayMissed of student.daysMissed){
			let td = document.createElement('td');
			td.setAttribute('class', 'attend-col');
			let cBox = document.createElement('input');
			cBox.setAttribute('type', 'checkbox');
			cBox.checked = dayMissed['missed'];

			cBox.addEventListener('click', (function(dayMissedCopy){
				return function(){
					console.log("toto");
					octopus.setDayMissed(dayMissedCopy, this.checked);
					viewTable.render()
				}

				})(dayMissed).bind(cBox)
			);

			td.appendChild(cBox);
			row.append(td);
		}
		row.append('<td class="missed-col">' + octopus.getNbDaysMissed(student).toString() +'</td>');
	}


}

octopus.init();	