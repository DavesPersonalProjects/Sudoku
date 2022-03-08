var table = document.createElement('table');
var tr, td, row, cell;
table.setAttribute('class','highscores');
tr = document.createElement('tr')
td = document.createElement('td')
td.setAttribute('id','highScoreLine')
td.textContent = "Date"
tr.appendChild(td);
td = document.createElement('td')
td.textContent = "Duration"
td.setAttribute('id','highScoreLine')
tr.appendChild(td)
table.appendChild(tr);

highScoreArray = [
    {"date":'2021/01/17', "duration":'3:41'},
    {"date":'2021/01/21', "duration":'4:01'},
    {"date":'2021/02/01',"duration":'2:52'},
    {"date":'2021/02/17', "duration":'3:08'},
    {"date":'2021/03/02', "duration":'2:51'},
 ]

for (row = 0; row < 5; row++) {
    tr = document.createElement('tr');
        td = document.createElement('td');
        td.textContent = highScoreArray[row].date
        tr.appendChild(td);
        td = document.createElement('td');
        td.textContent = highScoreArray[row].duration
        tr.appendChild(td)
    table.appendChild(tr);
}
document.getElementById('highscoreTable').appendChild(table);
