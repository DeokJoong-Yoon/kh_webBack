<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf"%>
<link rel="stylesheet" type="text/css" href="/resources/include/css/chungnam.css" />

</head>
<body>
	<div class="container">
		<div class="text-center">
			<h3 class="mb-2">충남관광 - 관광명소 상세정보</h3>
		</div>

		<div class="container my-5">
			<div class="p-5 text-center bg-body-teriary rounded-3">
				<div id="map"></div>
			</div>
		</div>

		<div id="detailData">
			<div class="card" id="item-template">
				<h5 class="card-header item-title"></h5>
				<div class="card-body">
					<h5 class="card-title">Special title treatment</h5>
					<p class="card-text item-content"></p>
				</div>

				<!-- Table -->
				<table class="table">
					<tbody class="detail-content">
						<tr class="item">
							<td class="detail-title col-md-2">분류</td>
							<td class="item-type col-md-10"></td>
						</tr>
						<tr class="item">
							<td class="detail-title">간략한 설명</td>
							<td class="item-namesub"></td>
						</tr>
						<tr class="item">
							<td class="detail-title">주소</td>
							<td class="item-addr"></td>
						</tr>
						<tr class="item">
							<td class="detail-title">전화번호</td>
							<td class="item-tel"></td>
						</tr>
						<tr class="item">
							<td class="detail-title">이미지</td>
							<td class="item-img"></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="text-end mt-2">
			<button type="button" class="btn btn-primary" id="chungnamListBtn">목록</button>
		</div>
	</div>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ba949a07a51131de661a179a0de0e05a"></script>
	<script>
		
		function template(local_nm, type, nm, nm_sub, addr, tel, desc, regData, view_img) {
			let $div = $('#detailData');
			
			let $element = $('#item-template').clone().removeAttr('id');
			
			$element.find('.item-title').html(nm);
			$element.find('.item-content').html(desc);
			
			$element.find('.item-type').html(type);
			$element.find('.item-namesub').html(nm_sub);
			$element.find('.item-addr').html(addr);
			$element.find('.item-tel').html(tel);
			
			for (let i = 0; i < view_img.length; ++i) {
				let img = $("<img />");
				img.attr("src", view_img[i]);
				img.addClass("rounded float-start");
				$element.find('.item-img').append(img);
			}
			$div.append($element);
		};
		
		function initMap(lat, lng, nm, tel, addr, view_img) {
			const container = document.getElementById('map');
			
			const options = {
					center: new kakao.maps.LatLng(lat, lng),
					level : 7
			};
			
			const map = new kakao.maps.Map(container, options);
			
			let mapTypeControl = new kakao.maps.MapTypeControl();
			map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

			let zoomControl = new kakao.maps.ZoomControl();
			map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
			
			let marker = new kakao.maps.Marker( {
				position : map.getCenter()
			});
			
			marker.setMap(map);
			
			/*let contentString = '<div style="width:150px;text-align:center;padding:6px 0;">위치</div>';
			contentString += '<div style="width:150px;text-align:center;padding:6px 0;">' + tel + '</div>';
			contentString += '<div style="width:150px;text-align:center;padding:6px 0;">' + addr + '</div>';
			*/
			
			let contentString = '<div class="card" style="width:450px;">';
			contentString += '<h5 class="card-header">' + nm + '</h5>';
			contentString += '<div class="card-body">';
			contentString += '	<p class="card-text text-start">주소: ' + addr + '<br />Tel: ' + tel + '</p>';
			contentString += '</div>';
			contentString += '</div>';
			
			let infowindow = new kakao.maps.InfoWindow({
				content : contentString,
				removable :true
			});
			
			kakao.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
			
			
			/*
			// 마커가 표시될 위치입니다 
			let markerPosition  = new kakao.maps.LatLng(lat, lng); 

			// 마커를 생성합니다
			let markerr = new kakao.maps.Marker({
			    position: markerPosition
			});

			// 마커가 지도 위에 표시되도록 설정합니다
			markerr.setMap(map);
			*/
		
		}
		$(function() {
			// /data/chungnamDetail?mng_no=1234
			// /data/chungnamDetail/12345
			let mng_no = ${param.mng_no};
			$.ajax({
				// url : "/data/chungnamDeatail",
				url : "/data/chungnamDetail/" + mng_no,
				type : "get",
				// data : "mng_no" + mng_no,
				dataType : "xml",
				success : function(data) {
					let local_nm = $(data).find("local_nm").text();
					let type = $(data).find("type").text();
					let nm = $(data).find("nm").text();
					let nm_sub = $(data).find("nm_sub").text();
					
					let addr = $(data).find("addr").text();
					let lat = $(data).find("lat").text();	// 위도
					let lng = $(data).find("lng").text();	// 경도
					let tel = $(data).find("tel").text();
					
					let desc = $(data).find("desc").text();
					let regData = $(data).find("regData").text();
					
					let view_img = [];
					view_img.push($(data).find("view_img1").text());
					view_img.push($(data).find("view_img2").text());
					view_img.push($(data).find("view_img3").text());
					
					initMap(lat, lng, nm, tel, addr, view_img);
					template(local_nm, type, nm, nm_sub, addr, tel, desc, regData, view_img);
				},
				error : (xhr, textStatus, errorThrown) => {
					alert(textStatus + " (HTTP - " + xhr.status + " / " + errorThrown + " ) ");	
				}
			});
			
			$("#chungnamListBtn").click(function() {
				location.href="/data/chungnamView";
			});
		});
	</script>

</body>

</html>
