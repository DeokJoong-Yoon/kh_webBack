<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf"%>
<link rel="stylesheet" type="text/css" href="/resources/include/css/openapi.css" />

</head>
<body>
	<div class="container">
		<div class="text-center">
			<h3 class="mb-2">경상남도_박물관 정보(JSON) 조회</h3>
		</div>
		<div class="row row-cols-1 row-cols-md-3 mb-3 text-center" id="item">
			<div class="col" id="item-template">
				<div class="card mb-4 rounded-3 shadow-sm border-primary">
					<div class="card-header py-3 text-bg-primary border-primary">
						<h4 class="my-0 fw-normal item-title"></h4>
					</div>
					<div class="card-body">
						<h5 class="card-title pricing-card-title">
							<span class="item-sigungu"></span> <small class="text-body-secondary fw-light item-delegatee"></small>
						</h5>
						<ul class="list-unstyled mt-3 mb-4">
							<li class="item-tel"></li>
							<li class="item-homepage"></li>
							<li class="item-roadaddress"></li>
						</ul>
						<button type="button" class="w-100 btn btn-lg btn-primary goURL">사이트로 이동</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">

	const template = (result) => {
		let $div = $('#item');
		
		let $element = $('#item-template').clone().removeAttr('id');
		$element.find('.item-title').html(result.title);
		$element.find('.item-sigungu').html(result.sigungu);
		$element.find('.item-delegatee').html("/" + result.delegatee);
		$element.find('.item-homepage').html(result.homepage);
		$element.find('.item-roadaddress').html(result.roadaddress);
		$element.find('.goURL').attr("data-homepage", result.homepage);

		$div.append($element);
	}
	
	$(function() {
		let url = "/data/gyeongnammuseumList";
		$.getJSON(url, function(data) {
			$(data.gyeongnammuseumList.body.items.item).each(function(index) {
				let value = {
					entid : this.entid,
					sigungu : this.sigungu,
					title : this.title,
					delegatee : this.delegatee,
					roadaddress : this.roadaddress,
					homepage : this.homepage,
					tourUtlzAmt : this.tourUtlzAmt,
					tel : this.tel,
					fax : this.fax,
				};
				template(value);
			});
		}).fail(function() {
			alert("잠시후에 다시 시도해 주세요.")
		});
		
		$(document).on("click", ".goURL", function() {
			let homepage = $(this).attr("data-homepage");
			//console.log(homepage);
			if(homepage != '-') {
				if(homepage.indexOf("http://") == -1) {
					location.href =  "http://" + homepage;
				} else if (homepage.indexOf("http://") == 0) {
					location.href = homepage;
				}
			} else {
				alert("사이트 URL이 존재하지 않습니다.");
			}
		});
	});
	</script>
</body>
</html>
