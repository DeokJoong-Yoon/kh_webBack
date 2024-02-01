// express 라이브러리를 require 하여 express 객체를 생성한다.
const express = require('express');
// express 객체를 사용하여 새로운 app 객체를 생성한다.
// app 객체가 서버 객체라고 생각하면 되고, app 객체로 서버의 기능을하나씩 만들어가면 된다.
const app = express();

// listen함수는 서버를 띄우고 클라이언트 요청을 기다리는 함수이다.
// 문법 : listen(포트번호, 실행할 코드)
app.listen(8081, () => {
    console.log('포트 8081로 서버 대기중 ...');
})

// request(요청) : 웹 브라우저에서 요청시의 정보들이 request에 모두 들어온다.
// response(응답) : 서버가 다시 웹 브라우저로 데이터를 전송할 때 사용
/*app.get('/book', function(request, response) {
    
    // response.statusCode = 200;
    // response.setHeader('Coneten-Type', 'text/html');
    response.send("<h1>도서 목록 관련 페이지입니다.</h1><h2>도서 목록 관련 페이지입니다.</h2><h3>도서 목록 관련 페이지입니다.</h3>");
});

app.get('/', (request, response)=> {
    // response.send('<h1>도서 메인입니다.<h1>');
    response.send(
        '<html>\
            <head><title>html 문서</title></head>\
            <body>\
                <h1>순례</h1>\
                <p>감히 이룰 수 없는 꿈을꾸고,</p>\
                <p>감히 이루어질 수 없는 사랑을 하고,</p>\
                <p>감히 견딜 수 없는 고통을 견디며,</p>\
                <p>감히 용감한 자도 가지 못한 곳을 가며,</p>\
                <p>감히 닿지 못할 저 밤하늘의 별에 이른다는 것</p>\
                <br />\
                <p>이것이 나의 순례이며</p>\
                <p>저 별을 따라가는 것이 나의 길이라오</p>\
                <p>아무리 희망이 없을 지라도,</p>\
                <p>또한 아무리 멀리 있을 지라도......</p>\
                <p>                     - Miguel de Cervantes Saavedra -</p>\
            </body>\
        </html>'
    )
});
*/

// 문법 : sendFile(보낼 파일 경로)
// __dirname 은 node 내부에 현재 디렉토리를 나타내는 문자열 변수로 선언되어 있다.
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/img', function(request, response) {
    response.sendFile(__dirname + '/img.jpg');
});