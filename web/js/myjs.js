function mesinfos() {
	var div = document.getElementById('info');
	div.style.display =  "block";
	var div = document.getElementById('rib');
	div.style.display =  "none";
	var div = document.getElementById('ayants-droit');
	div.style.display =  "none";
	var div = document.getElementById('carourou');
	div.style.display =  "none";
	var div = document.getElementById('temoignage');
	div.style.display =  "none";
	var div = document.getElementById('partenaires');
	div.style.display =  "none";
	var div = document.getElementById('formContact');
	div.style.display =  "none";
	document.getElementById('menuHome').setAttribute("class", "");
	document.getElementById('menuContact').setAttribute("class", "");
	document.getElementById('mesinfos').setAttribute("class", "active");
}
function ayantsdroit() {
	var div = document.getElementById('ayants-droit');
	div.style.display =  "block";
	var div = document.getElementById('rib');
	div.style.display =  "none";
	var div = document.getElementById('info');
	div.style.display =  "none";
	var div = document.getElementById('carourou');
	div.style.display =  "none";
	var div = document.getElementById('temoignage');
	div.style.display =  "none";
	var div = document.getElementById('partenaires');
	div.style.display =  "none";
	var div = document.getElementById('formContact');
	div.style.display =  "none";
	document.getElementById('menuHome').setAttribute("class", "");
	document.getElementById('menuContact').setAttribute("class", "");
	document.getElementById('mesinfos').setAttribute("class", "active");
}
function rib() {
	var div = document.getElementById('rib');
	div.style.display =  "block";
	var div = document.getElementById('info');
	div.style.display =  "none";
	var div = document.getElementById('ayants-droit');
	div.style.display =  "none";
	var div = document.getElementById('carourou');
	div.style.display =  "none";
	var div = document.getElementById('temoignage');
	div.style.display =  "none";
	var div = document.getElementById('partenaires');
	div.style.display =  "none";
	var div = document.getElementById('formContact');
	div.style.display =  "none";
	document.getElementById('menuHome').setAttribute("class", "");
	document.getElementById('menuContact').setAttribute("class", "");
	document.getElementById('mesinfos').setAttribute("class", "active");
}
function contact() {
	var div = document.getElementById('rib');
	div.style.display =  "none";
	var div = document.getElementById('info');
	div.style.display =  "none";
	var div = document.getElementById('ayants-droit');
	div.style.display =  "none";
	var div = document.getElementById('carourou');
	div.style.display =  "none";
	var div = document.getElementById('temoignage');
	div.style.display =  "none";
	var div = document.getElementById('partenaires');
	div.style.display =  "none";
	var div = document.getElementById('formContact');
	div.style.display =  "block";
	document.getElementById('menuHome').setAttribute("class", "");
	document.getElementById('menuContact').setAttribute("class", "active");
	document.getElementById('mesinfos').setAttribute("class", "");
}
function seconnecter(event) {
	event.preventDefault();
	var div = document.getElementById('mesinfos');
	div.style.display =  "block";
	var div = document.getElementById('mesnotifs');
	div.style.display =  "block";
	var div = document.getElementById('deconnection');
	div.style.display =  "block";
	var div = document.getElementById('connection');
	div.style.display =  "none";
	return(false);
}
function editNom() {
	var div = document.getElementById('formNom');
	div.style.display =  "block";
}
function editPrenom() {
	var div = document.getElementById('formPrenom');
	div.style.display =  "block";
}
function editAdresse() {
	var div = document.getElementById('formAdresse');
	div.style.display =  "block";
}
function editTel() {
	var div = document.getElementById('formTel');
	div.style.display =  "block";
}
function editMail() {
	var div = document.getElementById('formMail');
	div.style.display =  "block";
}
function sendMail() {
	event.preventDefault();
	var div = document.getElementById('mail');
	var mail = document.getElementById('inputMail').value;
	div.textContent = mail;
	var div = document.getElementById('formMail');
	div.style.display =  "none";
	var div = document.getElementById('update');
	div.style.display = "block";
	setTimeout(function(){ div.style.display =  "none"; }, 5000);
	return(false);
}
function sendTel() {
	event.preventDefault();
	var div = document.getElementById('tel');
	var tel = document.getElementById('inputTel').value;
	div.textContent = tel;
	var div = document.getElementById('formTel');
	div.style.display =  "none";
	var div = document.getElementById('update');
	div.style.display = "block";
	setTimeout(function(){ div.style.display =  "none"; }, 5000);
	return(false);
}
function sendAdresse() {
	event.preventDefault();
	var div = document.getElementById('adresse');
	var adresse = document.getElementById('inputAdresse').value;
	div.textContent = adresse;
	var div = document.getElementById('formAdresse');
	div.style.display =  "none";
	var div = document.getElementById('update');
	div.style.display = "block";
	setTimeout(function(){ div.style.display =  "none"; }, 5000);
	return(false);
}
function sendNom() {
	event.preventDefault();
	var div = document.getElementById('nom');
	var nom = document.getElementById('inputNom').value;
	div.textContent = nom;
	var div = document.getElementById('formNom');
	div.style.display =  "none";
	var div = document.getElementById('update');
	div.style.display = "block";
	setTimeout(function(){ div.style.display =  "none"; }, 5000);
	return(false);
}
function sendPrenom() {
	event.preventDefault();
	var div = document.getElementById('prenom');
	var prenom = document.getElementById('inputPrenom').value;
	div.textContent = prenom;
	var div = document.getElementById('formPrenom');
	div.style.display =  "none";
	var div = document.getElementById('update');
	div.style.display = "block";
	setTimeout(function(){ div.style.display =  "none"; }, 5000);
	return(false);
}
$('table').on('click', '.delBtn', function (){
	var ligne = $(this).closest('tr');
	$('#delModal').modal();
	$('#delModal').on('click', '#oui', function (){
		$('#delModal').modal('hide');
		ligne.remove();
	});
});
$('.modBtn').click(function (e){
	e.preventDefault();
	var ligne = $(this).closest('tr');
	var ligne2 = $(this).closest('tr').clone().find("td");
	var eu_date = ligne2.eq(2).text();
	var parts = eu_date.split('/');
	var us_date = parts[2]+'-'+parts[1]+'-'+parts[0];
	var conj = "";
	var asc = "";
	if (ligne2.eq(3).text() === "Conjoint(e)")
		conj = "checked"
	else
		asc = "checked"
	$('#modbody').html('<p>Merci de modifier les informations et de cliquer sur le bouton enregistrer pour que les modification soient effectives.</p><form method="post" id="modifForm"><div class="form-group"><label for="nomModif">Nom : </label></br><input id="nomModif" type="text" value="'+ligne2.eq(0).text()+'" pattern="[A-Za-z\\s-]{1,}" required=""></div><div class="form-group"><label for="prenomModif">Prénom : </label></br><input id="prenomModif" type="text" value="'+ligne2.eq(1).text()+'" pattern="[A-Za-z\\s-]{1,}" required=""></div><div class="form-group"><label for="birthdayModif">Date de naissance : </label></br><input id="birthdayModif" type="date" value="'+us_date+'" require=""></div><div class="form-group"><label for="parente">Lien de parenté : </label></br><div class="radio"><label><input type="radio" name="parente" id="asc" value="Ascendant(e)" required="" '+asc+'>Descendant(e)</label></div><div class="radio"><label><input type="radio" name="parente" id="conj" value="Conjoint(e)" required="" '+conj+'>Conjoint</label></div></div><button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button><input type="submit" class="btn btn-primary" id="save" value="Enregistrer"></form>');
	$('#modifModal').modal();
	$('#modifForm').submit(function(e){
		e.preventDefault();
		$('#modifModal').modal('hide');
		var nom = document.getElementById('nomModif').value;
		var prenom = document.getElementById('prenomModif').value;
		if(document.getElementById('asc').checked) {
		  var parente = "Descendant(e)";
		}else if(document.getElementById('conj').checked) {
		  var parente = "Conjoint(e)";
		}
		us_date = document.getElementById('birthdayModif').value;
		parts = us_date.split('-');
		var birthday = parts[2]+'/'+parts[1]+'/'+parts[0];
		ligne.html('<td>'+nom+'</td><td>'+prenom+'</td><td>'+birthday+'</td><td>'+parente+'</td><td>1200 €</td><td><button type="button" class="modBtn">Modifier</button></td><td><button type="button" class="delBtn">Supprimer l\'ayant droit</button></td>');
		return (false);
	});
});
$('#newP').click(function (e){
	e.preventDefault();
	var tbody = $('#tableBodyAD');
	$('#newbody').html('<p>Merci de remplir les informations et de cliquer sur le bouton enregistrer pour que les modification soient effectives.</p><form method="post" id="newForm"><div class="form-group"><label for="nomNew">Nom : </label></br><input id="nomNew" type="text" placeholder="Votre nom" pattern="[A-Za-z\\s-]{1,}" required=""></div><div class="form-group"><label for="prenomNew">Prénom : </label></br><input id="prenomNew" type="text" placeholder="Votre prénom" pattern="[A-Za-z\\s-]{1,}" required=""></div><div class="form-group"><label for="birthdayNew">Date de naissance : </label></br><input id="birthdayNew" type="date" require=""></div><div class="form-group"><label for="parenteNew">Lien de parenté : </label></br><div class="radio"><label><input type="radio" name="parenteNew" id="ascNew" value="Ascendant(e)" required="">Descendant(e)</label></div><div class="radio"><label><input type="radio" name="parenteNew" id="conjNew" value="Conjoint(e)" required="">Conjoint</label></div></div><button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button><input type="submit" class="btn btn-primary" value="Enregistrer"></form>');
	$('#newModal').modal();
	$('#newForm').submit(function(e){
		e.preventDefault();
		$('#newModal').modal('hide');
		var nom = document.getElementById('nomNew').value;
		var prenom = document.getElementById('prenomNew').value;
		if(document.getElementById('ascNew').checked) 
		{
		  var parente = "Descendant(e)";
		}
		else if(document.getElementById('conjNew').checked) 
		{
		  var parente = "Conjoint(e)";
		}
		var us_date = document.getElementById('birthdayNew').value;
		var parts = us_date.split('-');
		var birthday = parts[2]+'/'+parts[1]+'/'+parts[0];
		tbody.append('<tr><td>'+nom+'</td><td>'+prenom+'</td><td>'+birthday+'</td><td>'+parente+'</td><td>1200 €</td><td><button type="button" class="modBtn">Modifier</button></td><td><button type="button" class="delBtn">Supprimer l\'ayant droit</button></td></tr>');	
		return (false);
	});
});
$('#modRibBtn').click(function (e){
	e.preventDefault();
	var tbody = $('#tableBodyRIB');
	var ligne = $(this).closest('tr');
	var ligne2 = $(this).closest('tr').clone().find("td");
	$('#modribbody').html('<p>Merci de modifier les informations et de cliquer sur le bouton enregistrer pour que les modification soient effectives.</p><form method="post" id="ribForm"><div class="form-group"><label for="codebanque">Code banque : </label></br><input id="codebanque" type="text" value="'+ligne2.eq(0).text()+'" pattern="[0-9]{5}" required=""></div><div class="form-group"><label for="codeguichet">Code guichet : </label></br><input id="codeguichet" type="text" value="'+ligne2.eq(1).text()+'" pattern="[0-9]{5}" required=""></div><div class="form-group"><label for="compte">Numéro de compte : </label></br><input id="compte" type="text" value="'+ligne2.eq(2).text()+'" pattern="[0-9A-Za-z]{11}" required=""></div><div class="form-group"><label for="clerib">Clé RIB : </label></br><input id="clerib" type="text" value="'+ligne2.eq(3).text()+'" pattern="[0-9]{2}" required=""></div><div class="form-group"><label for="domi">Domiciliation : </label></br><input id="domi" type="text" value="'+ligne2.eq(4).text()+'" pattern="[A-Za-z\\s-]{1,}" required=""></div><button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button><input type="submit" class="btn btn-primary" value="Enregistrer"></form>');
	$('#modifRibModal').modal();
	$('#ribForm').submit(function(e){
		e.preventDefault();
		$('#modifRibModal').modal('hide');
		var codebanque = document.getElementById('codebanque').value;
		var codeguichet = document.getElementById('codeguichet').value;
		var compte = document.getElementById('compte').value;
		var clerib = document.getElementById('clerib').value;
		var domi = document.getElementById('domi').value;
		ligne.html('<td>'+codebanque+'</td><td>'+codeguichet+'</td><td>'+compte+'</td><td>'+clerib+'</td><td>'+domi+'</td><td><button type="button" id="modRibBtn">Modifier RIB</button></td>');
		return (false);
	});
});
$('.uploadBtn').click(function (e){
	var ligne = $(this).closest('tr').find("td");
	$('#uploadModal').modal();
	console.log(ligne);
	$('#ntm').submit(function(e){
		e.preventDefault();
		console.log("test");
		$('#uploadModal').modal('hide');
		var fileName = $("#fileinput").val();
		console.log("fichier :"+fileName);
		if(document.getElementById('act').checked) 
		{
			setTimeout(function(){ligne.eq(3).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;">15%</div></div>');}, 1000);
			setTimeout(function(){ligne.eq(3).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style="width: 33%;">33%</div></div>');}, 2000);
			setTimeout(function(){ligne.eq(3).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">50%</div></div>');}, 3000);
			setTimeout(function(){ligne.eq(3).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style="width: 67%;">67%</div></div>');}, 4000);
			setTimeout(function(){ligne.eq(3).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style="width: 82%;">82%</div></div>');}, 5000);
			setTimeout(function(){ligne.eq(3).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style="width: 99%;">99%</div></div>');}, 6000);
			setTimeout(function(){ligne.eq(3).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100%</div></div>');}, 7000);
			setTimeout(function(){ligne.eq(3).html(fileName);}, 10000);
		 	//ligne.eq(3).html(fileName);
		}
		else if(document.getElementById('ident').checked) 
		{
			setTimeout(function(){ligne.eq(4).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;">15%</div></div>');}, 1000);
			setTimeout(function(){ligne.eq(4).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style="width: 33%;">33%</div></div>');}, 2000);
			setTimeout(function(){ligne.eq(4).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">50%</div></div>');}, 3000);
			setTimeout(function(){ligne.eq(4).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style="width: 67%;">67%</div></div>');}, 4000);
			setTimeout(function(){ligne.eq(4).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style="width: 82%;">82%</div></div>');}, 5000);
			setTimeout(function(){ligne.eq(4).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style="width: 99%;">99%</div></div>');}, 6000);
			setTimeout(function(){ligne.eq(4).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100%</div></div>');}, 7000);
			setTimeout(function(){ligne.eq(4).html(fileName);}, 10000);
		}
		else if(document.getElementById('justif').checked)
		{
			setTimeout(function(){ligne.eq(5).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;">15%</div></div>');}, 1000);
			setTimeout(function(){ligne.eq(5).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style="width: 33%;">33%</div></div>');}, 2000);
			setTimeout(function(){ligne.eq(5).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">50%</div></div>');}, 3000);
			setTimeout(function(){ligne.eq(5).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style="width: 67%;">67%</div></div>');}, 4000);
			setTimeout(function(){ligne.eq(5).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style="width: 82%;">82%</div></div>');}, 5000);
			setTimeout(function(){ligne.eq(5).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style="width: 99%;">99%</div></div>');}, 6000);
			setTimeout(function(){ligne.eq(5).html('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100%</div></div>');}, 7000);
			setTimeout(function(){ligne.eq(5).html(fileName);}, 10000);
		}
		return (false);
	});
});



$("#formLogin").submit(seconnecter);