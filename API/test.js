const express = require('express');
const test = express.Router()

let data = [
    {id:0, name:'초코케이크', price:'6000'},
    {id:1, name:'딸기생크림', price:'7000'},
    {id:2, name:'치즈케이크'},
    {id:3, name:'티라미수'},
    {id:4, name:'딸기타르트'},
    {id:5, name:'청포도타르트'},
];

test.get('/t1', function (req, res) {
    // const {name} = req.query;
    // const result = data.filter(item => item.name === name);
    res.send(data)
})

test.post('/t2', function (req, res) {
    // front쪽에서 보내준 값은 body 영역 안으로 들어오는데,
    // 이를 받기 위해서는 false 처리된 것을 true로 만들어 이를 수락해야 함.
    data.push(req.body);
    // 모든 data front쪽으로 전송.
    res.send(data)
})

test.get('/search', function (req, res) {
    // {name}은 url 내 쿼리값! search?name
    // front에서 요청한 url에 있는 값을 가져오는듯..? req는 뭐야 그럼
    // => req는 클라이언트에서 서버로 보내준 데이터들이고
    // => {name}은 쿼리 파리미터가 맞음. url에 포함된 ?key=value 형태의 데이터. key랑 value 다 빼옴.
    const {name} = req.query;

    // data의 name이 위에서 정의한 {name}을 포함하고 있으면 result에 담아.
    // const result = data.filter(item => item.name === name);
    const result = data.filter(item => item.name.includes(name));

    // result를 front쪽으로 보내
    res.send(result)

    console.log(name);
    
})

module.exports = test;