var head=new Array('улица Руссиянова', 'улица Никифорова', 'улица Шугаева', 'улица Шафарнянская', 'улица Городецкая', 'улица Гинтовта', 'улица Ложинская', 'улица Острошицкая', 'улица Уручская', 'улица Стариновская');

var object=new Array();
var maps=new Array();

	for(i=0;i<10;i++){
	object[i]="images/streets/s_object_"+i+".jpg";
	}

	for(i=0;i<10;i++){
	maps[i]="images/streets/schema_"+i+".jpg";
	}


	function grand(a){

	var b=document.getElementById("hdr");
	var c=document.getElementById("obj");
	var d=document.getElementById("sch");

	b.innerHTML=head[a];
	c.src=object[a];
	d.src=maps[a];

	}