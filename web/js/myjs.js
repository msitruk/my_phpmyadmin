$(document).ready( function () {
    $('#table_id').DataTable();
} );

$('table').on('click', '.del-base', function (){
	var ligne = $(this).closest('tr');
	$('#delModal').modal();
	$('#delModal').on('click', '#delete-oui', function (){
		$('#delModal').modal('hide');
		ligne.remove();
		var div = document.getElementById('update');
		div.style.display = "block";
		setTimeout(function(){ div.style.display =  "none"; }, 5000);
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
		var div = document.getElementById('update');
		div.style.display = "block";
		setTimeout(function(){ div.style.display =  "none"; }, 5000);
		return (false);
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
		tbody.append('<tr><td>'+basename+'</td><td><button type="button" class="btn btn-info edit-base">Editer</button></td><td><button type="button" class="btn btn-warning del-base">Supprimer</button></td></tr>');
		var div = document.getElementById('update');
		div.style.display = "block";
		setTimeout(function(){ div.style.display =  "none"; }, 5000);
		return (false);
	});
});
