const express = require('express');
const todo = express.Router()

let data = [];

todo.get("/", function (req, res) {
    res.send(data)
})

todo.post("/insert", function (req, res) {
    data.push(req.body);
    res.send(data)
})

todo.put("/", function (req, res) {
    // 클라이언트로부터 id값 받기
    const {id, done} = req.body;

    let a = data.map((item)=>{
        if(item.id === id){
            item.done = done;
        }
        return item;
    })

    data = a;
    res.send(a)
})

todo.delete("/delete", function (req, res) {
    // 클라이언트로부터 id값 받기
    const {id} = req.body;

    // 받은 id와 서버 내 id와 비교하여 같지 않은 data를 새 배열로 생성 => results
    const results = data.filter(item => item.id !== id);
    // const results = data.filter(item => item.id != id);
    // item.id와 id의 type이 다름. string/number

    // data를 생성한 새 배열로 변경, 결과값 클라이언트로 보내주기
    data = results;
    res.send(results)
})

module.exports = todo;