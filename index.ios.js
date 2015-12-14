
// Import some code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];

// Create a react component
var Weekdays = React.createClass({
	render: function() {
		return <View style={styles.container} >
			<Text style={styles.textStyle}>
			Day of the week :
			</Text>
			{this.days()}
		</View>
	},
  days: function() {
		/*
		return DAYS.map(function(day){
      //Called 7 times, one for each day of the week
      return <DayItem day={day} />
    });
		*/
		var daysItems = [];

		for (var i = 0; i < 7; i++) {
			var day = Moment().add(i, 'days').format('dddd');
			daysItems.push(
				<DayItem day={day}  daysUntil={i} />
			)
  	}

		return daysItems;
	}
});

// Style the react component
var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center', // move stuff height wise (flex-end)
		alignItems: 'center' // move stuf width wise
	},
	textStyle: {
		color: '5633FF'
	}
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
	return Weekdays
})
