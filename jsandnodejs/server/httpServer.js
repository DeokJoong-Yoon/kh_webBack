// http 라이브러리를 require 함수를 통해 포함하겠다는 의미앋.
const http = require('http');

const hostname ='127.0.0.1';
const port = 3000;

// createServer 함수는 http 모듈로 서버를 1대 생성하는 기능이다.
// 내부에 request(요청)과 response(응답) 콜백 함수를 정의한다.
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Coneten-Type', 'text/plain');
    response.end('Hello world~!!');
});

// listen 함수는 대기하는 함수로써 서버의 등록한 아이피와 포트를 기반으로
// 클라이언트가 서버에 접속하기 전까지 대기한다.
server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
});