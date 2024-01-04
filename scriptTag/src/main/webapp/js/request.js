$(function(){
	const hship = ["일반고","특목고","특성화고"];
	const ship = ["컴퓨터공학과", "정보통신학과","국문학과","기계공학과","회계학과","전기전자학과","경영학과","사회복지학과"];
	
	$("input[name='scholarship']").click(function(){ 
		$("#major").empty(); //학과(전공) select 초기화 작업.
		if($(this).val()=="고졸"){ // 이벤트 발생한 요소의 값(val())이 "고졸"과 같다면
			for(i=0; i<hship.length;i++){
				option = $("<option>"); // option 태그 생성
				option.attr("value", hship[i]); // option 태그에 속성 추가
				option.append(hship[i]);        // <option value="일반고">일반고</option>
				$("#major").append(option); 
			}
		}else{
			for(i=0; i<ship.length;i++){
				option = $("<option>");
				option.attr("value",ship[i]);
				option.append(ship[i]);
				if(i==1){
					option.prop("selected","true");
				}
				$("#major").append(option);
			}
		}
		
	}) ; //click 이벤트 종료
	
	$("input[name='scholarship']:eq(0)").prop("checked","true");
	$("input[name='scholarship']:eq(0)").click();
	
	/* 보내기 버튼 이벤트 처리 */
	$("#sendBtn").click(function(){ 
		/*if($("#name").val().replace(/\s/g,"")==""){
			alert("이름을 입력해 주세요");
			$("#name").val("");
			$("#name").focus();
			return;
		}

		if($("#birth").val().replace(/\s/g,"")==""){
			alert("생년월일을 입력해 주세요");
			$("#birth").val("");
			$("#birth").focus();
			return;
		}
		*/
		if(!chkData("#name", "이름을")) { return; }
		if(!chkData("#birth", "생일을")) { return; }

		if (!$("input[name='language']").is(":checked")) {
			alert("사용가능 언어를 선택해 주세요.");
			$("input[name='language']:eq(0)").focus();
			return;
		}
		$("#dataForm").attr({
			"method":"post",
			"action":"request.jsp"
		});
		$("#dataForm").submit();
	});
	
	/* 다시작성 버튼 이벤트 처리 */
	$("#resetBtn").click(function(){ 
		$("#dataForm").each(function(){
			this.reset();
		});
		$("input[name='scholarship']:eq(0)").prop("checked","true");
		$("input[name='scholarship']:eq(0)").click();
	});
}); //$ 함수 종료.