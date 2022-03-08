function sameBlock(x, y) {

    let firstRow = Math.ceil(y / 3) * 3;
    let firstCol = Math.ceil(x / 3) * 3;
    var flag = false
      for (var i = firstRow; i > firstRow-3; i--){
          for (var z = firstCol; z > firstCol-3; z--){
            if(document.getElementById("cellno" + i + '' + z).textContent == currentMove){
              flag = true
            }
          }
      }
     return flag 

 }
 function check(table,td){
   var pos = td.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
   var x = pos[1],y = pos[0];
   var flag = true
   var xContent, yContent
   for (var i = 0; i < table.rows.length; i++){
    xContent = table.rows[y-1].cells[i].textContent
    yContent = table.rows[i].cells[x-1].textContent
     if (currentMove == xContent || currentMove == yContent){
        flag = false
     }

   }
   if(sameBlock(x,y) == true){
     flag = false
   }
   
   return flag;
 }

 gameArray = [
    //Row 
    [-1,1,-1,-1,-1,-1,-1,9,-1],
    //Row 
    [-1,-1,4,-1,-1,-1,2,-1,-1],
    //Row 
    [-1,-1,8,-1,-1,5,-1,-1,-1],
    //Row 
    [-1,-1,-1,-1,-1,-1,-1,3,-1],
    //Row 
    [2,-1,-1,-1,4,-1,1,-1,-1],
    //Row 
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    //Row 
    [-1,-1,1,8,-1,-1,6,-1,-1],
    //Row 
    [-1,3,-1,-1,-1,-1,-1,8,-1],
    //Row 
    [-1,-1,6,-1,-1,-1,-1,-1,-1]   
 ]
 var lastMove
 var lastLocation
 var currentMove
 var table = document.createElement('table');
 table.setAttribute('class','gameboard');
 var tr, td, row, cell;
 for (row = 0; row < 9; row++) {
     tr = document.createElement('tr');
     if ((row+1) % 3 ==0){
        tr.setAttribute('class','boldbottom');
    }
     for (cell = 0; cell < 9; cell++) {
         td = document.createElement('td');
         td.setAttribute('id','cellno' + (row+1) + (cell+1) );
         if ((cell+1) % 3 ==0){
            td.setAttribute('class','boldright');
        }
         tr.appendChild(td);
         td.addEventListener('click', function (e) {
            if (check(table, this.id)==false && currentMove != this.textContent){
            document.getElementById(this.id).classList = 'error' 
            if (this.id.replace( /^\D+/g, '')[1] %3 == 0){
              this.classList = 'errorbold'
            }
            }

            if (currentMove != undefined){
            lastLocation = this
            lastMove = this.textContent
            document.getElementById(this.id).textContent = currentMove
  
            }
          })
         if(gameArray[row][cell]!=-1){
         td.textContent = gameArray[row][cell];
         }
     }
     table.appendChild(tr);
 }
 document.getElementById('tableContainer').appendChild(table);

 var selectorTable = document.createElement('table');
 var img = document.createElement('img')
 img.src = "Images/undo.png";
 selectorTable.setAttribute('class','selectorTable');
     tr = document.createElement('tr');
     for (cell = 1; cell < 10; cell++) {
         td = document.createElement('td');
         td.setAttribute('id','selector' + cell );
         tr.appendChild(td);
         td.addEventListener('click', function (e) {
            //document.getElementById(this.id).classList = 'user-input' 
            currentMove = document.getElementById(this.id).textContent;
          })
         td.textContent = cell;
     }
     td = document.createElement('td');
     td.setAttribute('id','undoButton');
     td.addEventListener('click', function (e) {
      if (lastMove != undefined){
      lastLocation.textContent = lastMove
      }
      if (lastMove == '' ||  lastLocation.textContent == lastMove){
        
        document.getElementById(lastLocation.id).classList = 'normal' 
        if (lastLocation.id.replace( /^\D+/g, '')[1] %3 == 0){
          lastLocation.classList = 'boldright'
        }
      }
      
    })
     td.appendChild(img)
     tr.appendChild(td);
     selectorTable.appendChild(tr);
 document.getElementById('selectorContainer').appendChild(selectorTable);



