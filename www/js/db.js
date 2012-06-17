function queryDB(tx) {
    tx.executeSql('SELECT * FROM hymns ORDER BY hymn_num', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    var len = results.rows.length;
    $('.hymnlist').empty();
    for (var i=0; i<len; i++){
        var row = results.rows.item(i);
        if (i % 10==0) {
            var startNum = i+1;
            var endNum = i+10;
            if (endNum > len) {
                endNum = len;
            }
            $('<li data-role="list-divider" role="heading">'+(startNum)+'-'+(endNum)+'</li>').appendTo('.hymnlist');
        }
        
        $('<li><a href="#hymn">'+row.hymn_num+' - '+row.name+'</a></li>').appendTo('.hymnlist');
        //console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
    }
    $('.hymnlist').listview('refresh');
}

function errorCB(err) {
    console.log('Error:');
    console.log(err);
}


// Populate the database 
//
function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS HYMNS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS HYMNS (id unique, hymn_num, name, file)');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (1,1,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (2,2,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (3,3,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (4,4,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (5,5,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (6,6,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (7,7,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (8,8,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (9,9,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (10,10,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (11,11,"First row","file.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (12,12,"First row","file.pdf")');
}

// Transaction success callback
//
function successCB() {
    
}