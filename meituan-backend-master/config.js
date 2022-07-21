module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://123.130.112.30:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'akasuki',   //七牛云bucket
    AccessKey: 'VIYHxwyXLiycrMenGLKVZGJolVKBmw6GfC4_XyYM',   //七牛云accessKey
    SecretKey: 'lEdoVXBx0ZLvmBFq3FtaoeRe0QKWH1TCZ_P19xxt',    //七牛云secretKey
    tencentkey: '2GSBZ-73R3I-N6XG2-5POWS-N54Y2-XHBUL',        //腾讯位置secreKey
    tencentkey2: '2GSBZ-73R3I-N6XG2-5POWS-N54Y2-XHBUL',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥

};


