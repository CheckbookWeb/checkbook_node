const CheckbookAPI = require("../lib/checkbook-api");
const Checkbook = new CheckbookAPI({
    api_key: '14e0ba2448894d1288c7e62cc80fb329',
    api_secret: 'ROD4evVLqy6i9ftIkKHeU1Yo44UdNB'
});

console.log(Checkbook.getConfig());
