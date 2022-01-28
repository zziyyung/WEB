//엘리먼트들에 대한 데이터를 테이블 형식으로 화면에 표현하기

function makeTable(elem){
	var $table = $("<table border=1>");
	//테이블 태그 생성
	
	//$(data).find("ROW")
	
	//컬럼 정의하기
	for(var i =0; i<1;i++){
	//안 넣어도 됨 ! 밑에랑 양식 맞춰주려고 만듦 
		var $tr=$("<tr>");
		for(var j=0; j<elem.eq(0).children().length;j++){
			var $td=$("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
			//<td>EMPLIYEE_ID</td>
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	//데이터 넣기
	for(var i =0; i<elem.length;i++){
		var $tr=$("<tr>");
		for(var j=0; j<elem.eq(i).children().length;j++){
			var $td=$("<td>").append(elem.eq(i).children().eq(j).text());
			//<td>100</td>
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	//만들어진 테이블 반환
	return $table;
}



