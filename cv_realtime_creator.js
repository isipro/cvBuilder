$(document).ready(function(){
	$('button#personal_info_submitter').click(function(){
		
				
		var input_names = $("input[id=names]").val();
		var input_town = $("input[id=town]").val();
		var input_post_code = $("input[id=post_code]").val();
		var input_address = $("input[id=address]").val();
		var input_country = $("input[id=country]").val();
		var input_phone = $("input[id=phone]").val();
		var input_email = $("input[id=email]").val();
		
		var input_sex = $("input[id=sex]").val();
		var input_date_of_birth = $("input[id=date_of_birth]").val();
		var input_nationality = $("input[id=nationality]").val();
		
		
		$("div#cv_names").html(input_names);
		$("div#cv_town").html(input_town);
		$("div#cv_post_code").html(input_post_code);
		$("div#cv_address").html(input_address);
		$("div#cv_country").html(input_country);
		$("div#cv_phone").html(input_phone);
		$("div#cv_email").html(input_email);
		$("div#cv_sex").html(input_sex);
		$("div#cv_date_of_birth").html(input_date_of_birth);
		$("div#cv_nationality").html(input_nationality);
		var cv_preview = document.getElementById("section_content_cv_personal_info");
console.log(cv_preview.innerHTML);
		 cv_preview_html = cv_preview.innerHTML;
		/* $('link#style1').attr("href", "formInputStyles1.css") */
	});
	
	$('button#save_cv').click(function(){
		url = "http://itstudio3.com/cvBuilder/createCV.php";
		alert(cv_preview_html);
		$.ajax({
		    
			type: 'POST',
			url: url,
			data: cv_preview_html,
			success: function(data){
				alert(data);
			},
			
		});
		return false;
	});
});



