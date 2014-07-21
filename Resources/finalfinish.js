function Menu() {
	var win1 = Ti.UI.createWindow({
		backgroundColor : '#fff'

	});

	var db = Ti.Database.open("mydb");
	var data = db.execute('SELECT title, description, date, hour, minute, ampm, long, lati, loc, pic FROM params');
	var parameters = [];

	while (data.isValidRow()) {

		var row = Ti.UI.createTableViewRow();

		var a = data.fieldByName("title").toString();
		var b = data.fieldByName("description").toString();
		var c = data.fieldByName("date").toString();
		var d = data.fieldByName("hour").toString();
		var e1 = data.fieldByName("minute").toString();
		var f = data.fieldByName("ampm").toString();
		var g = data.fieldByName("long").toString();
		var h = data.fieldByName("lati").toString();
		var i = data.fieldByName("loc").toString();
		var j = data.fieldByName("pic").toString();
		var task_para = 'report';
		alert(a + '    \n' + j);

		var icon = Ti.UI.createImageView({
			image : j,

			left : '3dp',
			width : '50dp',
			height : '50dp',
			top : '13dp',
			borderRadius : 5,
			
		});

		var name = Ti.UI.createLabel({

			text : a,
			font : {
				fontWeight : 'bold',
				fontSize : '20sp'
			},
			color : '#333333',
			top : '13dp',
			left : '60dp',
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
		});

		var button = Ti.UI.createButton({
			title : "Send",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			color : '#ecf0f1',
			backgroundColor : '#3498db',
			borderRadius : 4,
			top : '13dp',

		});

		row.add(icon);
		row.add(name);
		row.add(button);

		row.className = 'pending_reports';

		parameters.push(row);

		button.addEventListener('click', function(e) {

			alert("Send the reposrts here");

		});

		if (Ti.Network.networkType != Ti.Network.NETWORK_NONE) {
			// shit goes here
		}

		data.next();

	}

	data.close();

	var table = Ti.UI.createTableView({

		data : parameters,
		top : '0dp',
		left : '0dp',

	});

	win1.add(table);

	return win1;
}

module.exports = Menu;
