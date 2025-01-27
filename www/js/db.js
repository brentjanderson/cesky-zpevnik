var current_hymn = {};
function queryDB(tx) {
    tx.executeSql('SELECT * FROM hymns ORDER BY hymn_num', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    var len = results.rows.length;
    $('.hymnlist li a').unbind('click');
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
        
        $('<li><a data-file="'+row.file+'" data-transition="slide" href="#">'+row.hymn_num+' - '+row.name+'</a></li>').appendTo('.hymnlist');
    }
    $('.hymnlist li a').click(function() {
        window.plugins.childBrowser.showWebPage("www/files/"+$(this).data('file'));
        return false;
    });
    $('.hymnlist').listview('refresh');
}

function loadHymn(hymn) {
    current_hymn = {};
    current_hymn.id = hymn;
    db.transaction(dbLoadHymn, errorCB);
}

function dbLoadHymn(tx) {
    tx.executeSql('SELECT * FROM hymns WHERE id = ' + current_hymn.id, [], dbLoadHymnSuccess, errorCB);
}
                  
function dbLoadHymnSuccess(tx, results) {
    current_hymn = results.rows.item(0);
    $('.hymn_title').text(current_hymn.name);
    $('.hymn_view').attr('src', 'files/'+current_hymn.file);
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
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (1,1,"Je pilných rukou potřebí","1.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (2,2,"Služ nebes Králi","2.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (3,3,"Jasno v duši","3.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (4,4,"Já musím Tebe mít","4.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (5,5,"Lide můj, hleď","5.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (6,6,"Blíž Tobě, Bože můj","6.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (7,7,"Pojď, svatý, pojď","7.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (8,8,"Zůstaň se mnou, už se stmívá","8.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (9,9,"Ó Bože našich otců","9.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (10,10,"První modlitba Josepha Smitha","10.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (11,11,"Prameni všech požehnání","11.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (12,12,"Já vím, že žije Spasitel","12.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (13,13,"Jak pevný to základ","13.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (14,14,"Ztiš srdce mé","14.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (15,15,"Chvála buď muži","15.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (16,16,"Veď světlo dál","16.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (17,17,"Pojď, prorokovi naslouchej","17.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (18,18,"Ó, vy, starší Izraele","18.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (19,19,"Buď se mnou vždy","19.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (20,20,"Veď nás mocný Jehovo","20.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (21,21,"Duch Boží","21.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (22,22,"Že mi bylo mnoho dáno","22.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (23,23,"Věz, každá duše volnost má","23.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (24,24,"Vzhůru, bratři, k boji","24.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (25,25,"Nádherný den","25.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (26,26,"Chci Tě následovat","26.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (27,27,"Izraeli, Bůh tě volá","27.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (28,28,"My Tobě, Bože, děkujeme","28.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (29,29,"Na vrcholku hory","29.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (30,30,"Píseň díků","30.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (31,31,"Přineseme světu Jeho pravdu","31.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (32,32,"Jsem dítě Boží","32.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (33,33,"Nefiho odvaha","33.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (34,34,"Síla písem","34.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (35,35,"Spasitel rád mě má","35.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (36,36,"Cítíme lásku","36.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (37,37,"Církev Ježíše Krista","37.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (38,38,"Rodiny mohou žít spolu navždy","38.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (39,39,"Následuj proroka","39.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (40,40,"Modlitba dítěte","40.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (41,41,"Narodil se Kristus Pán","41.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (42,42,"Narození Ježíše","42.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (43,43,"Nesem vám noviny","43.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (44,44,"Daleko, tam na judejských pláních","44.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (45,45,"Chtíc, aby spal","45.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (46,46,"Tichá noc","46.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (47,47,"Hvězdičky se rozzářily","47.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (48,48,"We Are Called of God","48.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (49,49,"Povolal Nás Bůh","49.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (50,50,"Kdybys Dospěl na Kolob","50.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (51,51,"Sladká Hodina Modliby","51.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (52,52,"Jeden chudý pocestný","52.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (53,53,"Pán řekl: „Pojď“","53.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (54,54,"Nauč mě kráčet ve světlo","54.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (55,55,"Jak Mocný Jsi","55.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (56,56,"Sečti Dary","56.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (57,57,"Naš Stvořitel je Bůh a Král","57.pdf")');
    tx.executeSql('INSERT INTO HYMNS (id, hymn_num, name, file) VALUES (58,58,"Jsem Přemožen Láskou","58.pdf")');
}

// Transaction success callback
//
function successCB() {
    
}