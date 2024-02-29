<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf"%>
<link rel="stylesheet" type="text/css" href="/resources/include/css/openapi.css" />

</head>
<body>
	<div class="container">
		<div class="text-center">
			<h3 class="mb-2">대전 유기동물 공고현황 상세정보</h3>
		</div>
		<div id="list">
			<div class="container py-4" id="media-template">
				<div class="p-5 mb-4 bg-light rounded-3">
					<img class="item-image rounded" width="1200" height="628" />
				</div>
				<div class="row align-items-md-stretch">
					<div class="col-md-6">
						<div class="h-100 p-5 text-white bg-dark rounded-3">
							<h2 class="item-heading-species"></h2>
							<p class="item-age"></p>
							<p class="item-color"></p>
							<p class="item-weight"></p>
							<!-- <button class="btn btn-outline-light" type="button">Example button</button> -->
						</div>
					</div>
					<div class="col-md-6">
						<div class="h-100 p-5 bg-light border rounded-3">
							<h2 class="item-heading-status"></h2>
							<p class="item-rescueDate"></p>
							<p class="item-place"></p>
							<p class="item-memo"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class=text-end>
			<button type="button" class="btn btn-primary" id="animalDaejeonListBtn">목록</button>
		</div>
	</div>
	<script type="text/javascript">
		
		function template(animalSeq,adoptionStatusCd,age,filePath,species,hairColor,memo,foundPlace,classification,rescueDate,weight) {
			let $div = $('#list');
			
			let $element = $('#media-template').clone().removeAttr('id');
			
			let img = "http://www.daejeon.go.kr/" + filePath;			
			$element.find('.item-image').attr("src", img);
			
			$element.find('.item-heading-species').html(species);
			$element.find('.item-age').html(age);
			$element.find('.item-color').html(hairColor);
			$element.find('.item-weight').html(weight);
			$element.find('.item-memo').html(memo);
			
			$element.find('.item-heading-status').html(adoptionStatusCd);
			$element.find('.item-rescueDate').html(rescueDate);
			$element.find('.item-place').html(foundPlace);
			
			$div.append($element);
		};

		$(function() {
			const adoptionStatusCdArray = ["", "공고중", "입양가능", "입양예정", "입양완료", "자연사", "안락사", "주인반화", "임시보호", "입양불가", "방사", "주민참여", "입원중"];
			let animalSeq = ${param.animalSeq};
			$.ajax({
				url : "/data/animalDaejeonItem",
				type : "get",
				data : "animalSeq=" + animalSeq,
				dataType : "xml",
				success : function(data) {
					let adoptionStatusCd = adoptionStatusCdArray[$(data).find("adoptionStatusCd").text()];
					let age = $(data).find("age").text();
					let animalSeq = $(data).find("animalSeq").text();
					let classification = $(data).find("classification").text();
					let fileNm = $(data).find("fileNm").text();
					let filePath = $(data).find("filePath").text();
					let foundPlace = $(data).find("foundPlace").text();
					let gender = $(data).find("gender").text();
					let gu = $(data).find("gu").text();
					let hairColor = $(data).find("hairColor").text();
					let hitCnt = $(data).find("hitCnt").text();
					let memo = $(data).find("memo").text();
					let modDtTm = $(data).find("modDtTm").text();
					let regDtTm = $(data).find("regDtTm").text();
					let regId = $(data).find("regId").text();
					let rescueDate = $(data).find("rescueDate").text();
					let species = $(data).find("species").text();
					let weight = $(data).find("weight").text();
					
					template(animalSeq,adoptionStatusCd,age,filePath,species,hairColor,memo,foundPlace,classification,rescueDate,weight);
				},
				error : function (xhr, textStatus, errorThrown) {
					alert(textStatus + " (HTTP - " + xhr.status + " / " + errorThrown + " ) ");	
				}
			});
			
			$("#animalDaejeonListBtn").click(function() {
				location.href="/data/animalDaejeonView";
			});
		});
	</script>

</body>

</html>
