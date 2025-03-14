// express 호출
const express = require('express');

const app = express();
const test = require('./API/test');
const memo = require('./API/memo');
const todo = require('./API/todo');

// cors 호출
// Network cors error 제거
const cors = require('cors')

// body-parser 호출
// front쪽 데이터를 서버에서 받기
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/test', test);
app.use('/memo', memo);
app.use('/todo', todo);

app.listen(3000)