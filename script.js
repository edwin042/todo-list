$(document).ready(function(){
	$("#createElements").hide();
	//Create To-do lists
	$("#addingItems").click(function(){
		var item = $("#text").val();
		if(item !== ''){
			var addLists = $("<li id='myList'></li>").text(item);
			$(addLists).append("<button class='cross'>X</button");
			
			$("#lists").append(addLists);
			$("#text").val("");
		}
		$(".cross").click(function(){
			$(this).parent().remove();
		});
	});

	//create Items
	$(".creatingItems").click(function(){
		$("#createElements").toggle(1000);
		$("body").css("opacity", "0.3");
		$(".enterBtn").click(function(){
			var addItem = $("#items").val();
			if(addItem !== ''){
				var addToDoItemList = $("<li><a href=''></a></li>").text(addItem);
				$("#sideBarItems").append(addToDoItemList);
				$("#items").val("");
				$("body").css("opacity", "1");
				$("#createElements").hide();
			}
		});
	});

	$(".myName").click(function(){
		$("#myAccount").fadeToggle(1000);
		$("body").css("opacity", "0.4");
	});
	$("#closeAbout").click(function(){
		$("#myAccount").fadeToggle(1000);
		$("body").css("opacity", "1");
	});
});