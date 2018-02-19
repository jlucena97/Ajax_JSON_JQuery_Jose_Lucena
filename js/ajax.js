{
	$().ready(function()
	{
		$("select").on("change",function(){
				$("div").html("");
				 
				let boton = parseInt(this.value);
				 
				 $.getJSON("js/framework.json", function(result){
				 		//console.log(result);
			        $.each(result, function(i, field){
			        	//console.log(i);
			        	$.each(field[boton], function(titul, valor){
			        		if(titul === "URL"){
			        			$("div").append("<p><strong>"+ titul +": </strong><a href='"+valor+"'>" + valor + "</a></p>");
			        		}else if(titul === "Imagen"){
			        			$("div").append("<p><strong>"+ titul +": </strong><img src='img/"+valor+"'></p>");
			        		}else if(titul === "Nombre"){
			        			$("div").append("<h2>" + valor + "</h2>");
			        		}else {
			        			$("div").append("<p><strong>"+ titul +": </strong>" + valor + "</p>");
			        		}
				       });
			        });
			    });
		});

	});
}