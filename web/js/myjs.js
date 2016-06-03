$(document).ready( function () {
    $('#table_id').DataTable();
} );

$(document).ready( function () {
    $('#table_id2').DataTable();
} );

$(document).ready( function () {
    $('#table_id3').DataTable();
} );

$('table').on('click', '.del-base', function (){
	var ligne = $(this).closest('tr');
  var ligne2 = $(this).closest('tr').clone().find("td");
	$('#delModal').modal();
	$('#delModal').on('click', '#delete-oui', function (){
		$('#delModal').modal('hide');
    $.ajax({
      method: "POST",
      url: "index.php",
      data: { action: "delete", basename: ligne2.eq(0).text() }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
		ligne.remove();
		var div = document.getElementById('update');
		div.style.display = "block";
		setTimeout(function(){ div.style.display =  "none"; }, 5000);
	});
});

$('#new-base').click(function (e){
	e.preventDefault();
	var tbody = $('#tableBodyBASE');
	$('#newbody').html('<p>Merci de choisir le nom de la base que vous voulez créer : </p><form method="post" id="newForm"><div class="form-group"><label for="nomNew">Nom de la base de données : </label></br><input id="nomNew" type="text" placeholder="Le nom de votre base" pattern="[A-Za-z\\s-]{1,}" required=""></div></div><button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button><input type="submit" class="btn btn-primary" value="Enregistrer"></form>');
	$('#newModal').modal();
	$('#newForm').submit(function(e){
		e.preventDefault();
		$('#newModal').modal('hide');
		var basename = document.getElementById('nomNew').value;
    $.ajax({
      method: "POST",
      url: "index.php",
      data: { action: "create", basename: basename }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
		tbody.append('<tr><td><a href="./base.php?db={{ base }}" class="basename">'+basename+'</a></td><td><button type="button" class="btn btn-info edit-base">Editer</button></td><td><button type="button" class="btn btn-warning del-base">Supprimer</button></td></tr>');
		var div = document.getElementById('update');
		div.style.display = "block";
		setTimeout(function(){ div.style.display =  "none"; }, 5000);
		return (false);
	});
});

$('table').on('click','.edit-base', function (){
	var ligne = $(this).closest('tr');
	var ligne2 = $(this).closest('tr').clone().find("td");
	$('#modbody').html('<p>Changer le nom de la basetable de données :</p><form method="post" id="modifForm"><div class="form-group"><label for="nomModif">Nom : </label></br><input id="nomModif" type="text" value="'+ligne2.eq(0).text()+'" pattern="[A-Za-z\\s-]{1,}" required=""></div><div class="form-group"><button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button><input type="submit" class="btn btn-primary" id="save" value="Enregistrer"></form>');
	$('#modifModal').modal();
	$('#modifForm').submit(function(e){
		e.preventDefault();
		$('#modifModal').modal('hide');
		var nom = document.getElementById('nomModif').value;
		ligne.html('<td>'+nom+'</td><td><button type="button" class="btn btn-info edit-base">Editer</button></td><td><button type="button" class="btn btn-warning del-base">Supprimer</button></td>');
    $.ajax({
      method: "POST",
      url: "index.php",
      data: { action: "edit", basename: ligne2.eq(0).text(), newbasename: nom }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
		var div = document.getElementById('update');
		div.style.display = "block";
		setTimeout(function(){ div.style.display =  "none"; }, 5000);
		return (false);
	});
});

$('body').on('click','#new-table', function (e){
	e.preventDefault();
	var tbody = $('#tableBodyTABLE');
	$('#newtablebody').html('<p>Merci de choisir le nom de la table que vous voulez créer : </p><form method="post" id="newForm"><div class="form-group"><label for="nomNew">Nom de la base de données : </label></br><input id="nomNew" type="text" placeholder="Le nom de votre base" pattern="[A-Za-z\\s-]{1,}" required=""></div>><div class="form-group"><label for="nbcolNew">Nombre de colonnes dans la table : </label></br><input id="nbcolNew" type="text" placeholder="" pattern="[0-9]{1,}" required=""></div><button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button><input type="submit" class="btn btn-primary" value="Enregistrer"></form>');
	$('#newTableModal').modal();
	$('#newForm').submit(function(e){
		e.preventDefault();
		$('#newTableModal').modal('hide');
    var div = document.getElementById('newTableDetail');
		div.style.display = "block";
		var tablename = document.getElementById('nomNew').value;
    var nbcol = parseInt(document.getElementById('nbcolNew').value);
    $('#newtabledetailbody').html('<p> Création de la table : '+tablename+'</p>');
    $('#newtabledetailbody').append('<table class="table" id="table_id3"><thead><tr><td>Nom</td><td>Type</td><td>Taille/Valeurs</td><td>Valeur par défaut</td><td>Attributs</td><td>Null</td><td>A_I</td></tr></thead><tbody id="newtabledetailtablebody"></tbody></table>');
    var i = 0;
    while (i != nbcol)
    {
      $('#newtabledetailtablebody').append('<tr>');
      $('#newtabledetailtablebody').append('<td><input id="fieldName'+i+'New" type="text" placeholder="Le nom de votre champ" pattern="[A-Za-z\\s-]{1,}" required=""></td>');
      $('#newtabledetailtablebody').append('<td><select class="fieldType" id="fieldType'+i+'New"><option title="Un nombre entier de 4 octets. La fourchette des entiers relatifs est de -2 147 483 648 à 2 147 483 647. Pour les entiers positifs, c\'est de 0 à 4 294 967 295">INT</option><option title="Une chaîne de longueur variable (0-65,535), la longueur effective réelle dépend de la taille maximum d\'une ligne">VARCHAR</option><option title="Une colonne TEXT d\'une longueur maximum de 65 535 (2^16 - 1) caractères, stockée avec un préfixe de deux octets indiquant la longueur de la valeur en octets 	">TEXT</option><option title="Une date, la fourchette est de «1000-01-01» à «9999-12-31»">DATE</option></select></td>');
      $('#newtabledetailtablebody').append('<td><input class="fieldSize" id="fieldSize'+i+'New" type="number" min="0" max="2147483647" value="" pattern="[0-9]{1,}" required=""></td>');
      $('#newtabledetailtablebody').append('<td><input id="fieldDefaultValue'+i+'New" type="text" placeholder="Valeur par default" pattern="[A-Za-z\\s-]{1,}"></td>');
      $('#newtabledetailtablebody').append('<td><select style="width: 7em;" id="fieldAttr'+i+'New"><option value="" selected="selected"></option> <option value="BINARY">BINARY</option> <option value="UNSIGNED">UNSIGNED</option> <option value="UNSIGNED ZEROFILL">UNSIGNED ZEROFILL</option> <option value="on update CURRENT_TIMESTAMP">on update CURRENT_TIMESTAMP</option></select></td>');
      $('#newtabledetailtablebody').append('<td><input id="fieldNull'+i+'New" type="checkbox" value="" class="allow_null"></td>');
      //$('#newtabledetailtablebody').append('<td><select id="fieldPrimary'+i+'New" data-index=""><option value="">---</option> <option value="primary" title="Primaire">PRIMARY</option> <option value="unique" title="Unique">UNIQUE</option> <option value="index" title="Index">INDEX</option> <option value="fulltext" title="Texte entier">FULLTEXT</option> <option value="spatial" title="Spatial">SPATIAL</option></select></td>');
      $('#newtabledetailtablebody').append('<td><input id="fieldAi'+i+'New" type="checkbox" value="AUTO_INCREMENT"></td>');
      $('#newtabledetailtablebody').append('</tr>');
      i = i + 1;
    }
	$('.fieldType').blur(function() {
		var type = $(this).val();
		if (type == "INT")
		  {
		  	$(this).closest('td').next().find('input.fieldSize').prop("max", 2147483647);
		  }
		else if (type == "VARCHAR")
		{
			$(this).closest('td').next().find('input.fieldSize').prop("max", 65535);
		}
		else if (type == "DATE" || type == "TEXT")
		{
			$(this).closest('td').next().find('input.fieldSize').prop('disabled', true).val("");
		}
  	});
    $('#newtableForm').submit(function(e){
      e.preventDefault();
      var div = document.getElementById('newTableDetail');
      div.style.display = "none";

      var bigtab = [];
      var basename = document.getElementById('baseName').innerHTML;
      var j = 0;
      var tab = {};

      for (j = 0; j != i; j = j + 1)
      {

      	if(document.getElementById('fieldNull'+j+'New').checked)
      	{
		  var varnull = "NULL";
		}
		else
		{
		  var varnull = "NOT NULL";
		}
      	if(document.getElementById('fieldAi'+j+'New').checked)
      	{
		  var varai = "AUTO_INCREMENT";
		}
		else
		{
		  var varai = "";
		}
		if(document.getElementById('fieldDefaultValue'+j+'New').value != "")
      	{
		  var vardefault = "DEFAULT '"+document.getElementById('fieldDefaultValue'+j+'New').value+"'";
		}
		else
		{
		  var vardefault = "";
		}
		if (document.getElementById('fieldType'+j+'New').value == "INT" || document.getElementById('fieldType'+j+'New').value == "VARCHAR")
		{
			var type2 = document.getElementById('fieldType'+j+'New').value+"("+document.getElementById('fieldSize'+j+'New').value+")";
		}
		else
		{
			var type2 = document.getElementById('fieldType'+j+'New').value;
		}

        tab ={
	        "fieldName":document.getElementById('fieldName'+j+'New').value,
	        "fieldType":type2,
	        //"fieldSize":document.getElementById('fieldSize'+j+'New').value,
	        "fieldDefaultValue":vardefault,
	        "fieldAttr":document.getElementById('fieldAttr'+j+'New').value,
	        "fieldNull":varnull,
	        //"fieldPrimary":document.getElementById('fieldPrimary'+j+'New').value,
	        "fieldAi":varai
      		};
        bigtab[j] = tab;
      }

      $.ajax({
        method: "POST",
        url: "base.php",
        data: { action: "newtable", basename: basename, tablename: tablename, bigtab: bigtab }
      })
        .done(function( msg ) {
          alert( basename + "Data Saved: " + msg );
        });
    });
		return (false);
	});
});

$('body').on('click', '.closeNewTableDetail', function(e){
  e.preventDefault();
  var div = document.getElementById('newTableDetail');
  div.style.display = "none";
});

$('table').on('click', '.dropTable', function (){
	var ligne = $(this).closest('tr');
  var ligne2 = $(this).closest('tr').clone().find("td");
  var basename = document.getElementById('baseName').innerHTML;
	$('#delModal').modal();
	$('#delModal').on('click', '#delete-oui', function (){
		$('#delModal').modal('hide');
    $.ajax({
      method: "POST",
      url: "base.php",
      data: { action: "delete", tablename: ligne2.eq(0).text(), basename: basename }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
		ligne.remove();
		var div = document.getElementById('update');
		div.style.display = "block";
		setTimeout(function(){ div.style.display =  "none"; }, 5000);
	});
});


function struct() {
	var div = document.getElementById('struct');
	div.style.display =  "block";
	var div = document.getElementById('data');
	div.style.display =  "none";
	document.getElementById('dataMenu').setAttribute("class", "");
	document.getElementById('structMenu').setAttribute("class", "active");
}
function data() {
	var div = document.getElementById('data');
	div.style.display =  "block";
	var div = document.getElementById('struct');
	div.style.display =  "none";
	document.getElementById('structMenu').setAttribute("class", "");
	document.getElementById('dataMenu').setAttribute("class", "active");
}
