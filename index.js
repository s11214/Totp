const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/totp/:secret', (req, res) => {
  const { secret } = req.params; // 从 URL 中获取密钥
  const { totpCode } = req.body;

  // 在这里处理 TOTP 验证逻辑
  if (totpCode) {
    // 你可以在这里使用 secret 进行 TOTP 验证
    res.status(200).send({ message: 'TOTP 验证码接收成功', secret });
  } else {
    res.status(400).send({ message: '验证码不能为空' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
