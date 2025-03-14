const express = require('express');
const memo = express.Router()

let data = [];

// 클라이언트(프론트)가 get요청을 보냈을 때 실행.
memo.get('/', function (req, res) {
    // const {name} = req.query;
    // const result = data.filter(item => item.name === name);

    res.send(data) // 클라이언트에게 data 배열을 응답으로 보냄
})

// 클라이언트(프론트)가 post요청을 보냈을 때 실행.
// post는 화면에 안 나와용
memo.post('/insert', function (req, res) {
    // front쪽에서 보내준 값은 body 영역 안으로 들어오는데,
    // 이를 받기 위해서는 false 처리된 것을 true로 만들어 이를 수락해야 함.

    data.push(req.body); // 클라이언트가 보낸 모든 데이터를 data 배열에 추가
    res.send(data) // 갱신된 data 배열을 클라이언트에 응답으로 보냄
})

module.exports = memo;