$(document).ready(function(){
			var a=0;
			var result=null;
			var speed=171;
			var x=0;
			// Start Button
			$(".start").click(function(){
				$("#stop").prop("disabled",false);
				$(this).prop("disabled",true);
				var str=$("#txtarea").val();
				result=str.split(/[ \t\n]+/);
				a = setInterval(show,speed);
			});
			// Stop Button
			$("#stop").click(function(){
				$(".start").prop("disabled",false);
				$(this).prop("disabled",true);
				clearInterval(a);
				$(".display").prop("value",null);
				a=0;x=0;
			});
			// Animation
			function show(){
				if(x==0){
					alert("Total words : "+result.length);
				}
				$(".display").prop("value", result[x]);
				if(x>result.length){
					alert("Animation Finished!")
					$(".start").prop("disabled",false);
					$("#stop").prop("disabled",true);
					clearInterval(a);
					$(".display").prop("value", null);
					result=0;
					x=0;
				}
				x++;
			}
			// Speed Selection
			$("select").change(function(){
				speed = $(this).children("option:selected").prop("value");
				clearInterval(a);
				a=setInterval(show,speed);
			})
			// Font-size
			$("input#fsize").click(function(){
				// alert("Radio button clicked");
				font = $(this).prop("value");
				// alert("font size "+font);
				$(".display").css("font-size",font+"px");
				
			})
			});