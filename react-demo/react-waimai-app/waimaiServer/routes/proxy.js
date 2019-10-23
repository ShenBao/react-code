var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var url = decodeURIComponent(req.body.url);
  var data = req.body.params;

  var options = {
    uri: url,
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Host': 'i.waimai.meituan.com',
      'Referer': 'http://i.waimai.meituan.com',
      'Cookie': 'terminal=i; w_utmz="utm_campaign=(direct)&utm_source=5000&utm_medium=(none)&utm_content=(none)&utm_term=(none)"; w_uuid=NxAlVM4plX_ixoEsoR4KJSuHBLo944rRZK5hwXfdReHfnuBqqar92I-K5PvFYuvi; _lxsdk_cuid=16403175395c8-05d2a0596b7ce7-7d7d326e-2c600-16403175395c8; utm_source=0; webp=1; iuuid=F391E53B2EA84A9133F6F340DBC3CFBD00FE01ADF7ADD0421D750567F26F9FAA; ci=30; cityname=%E6%B7%B1%E5%9C%B3; _lxsdk=F391E53B2EA84A9133F6F340DBC3CFBD00FE01ADF7ADD0421D750567F26F9FAA; wx_channel_id=0; i_extend=H__a100040__b2; __utma=74597006.783454394.1529060230.1529220053.1529724593.3; __utmz=74597006.1529724593.3.3.utmcsr=i.waimai.meituan.com|utmccn=(referral)|utmcmd=referral|utmcct=/searchAddress; isid=C48FA55764F73DC5E85D7F37EA35F37C; oops=CzcejSurcXNLNfDNOTgmyt-wFJkAAAAAAwYAAI2O9lRWSedYdafpUw2tLeH97leb4naMONvGVsnplOx9PfkXYGXvrWwIdoBQB7_-yA; u=280770501; logintype=fast; lt=CzcejSurcXNLNfDNOTgmyt-wFJkAAAAAAwYAAI2O9lRWSedYdafpUw2tLeH97leb4naMONvGVsnplOx9PfkXYGXvrWwIdoBQB7_-yA; n=LVMING588; _lx_utm=utm_source%3Di.waimai.meituan.com%26utm_medium%3Dreferral%26utm_content%3D%252FsearchAddress; _ga=GA1.4.783454394.1529060230; _gid=GA1.4.391078344.1530345934; w_cid=440300; w_cpy_cn="%E6%B7%B1%E5%9C%B3"; w_cpy=shenzhen; wm_poi_view_id=520752902653967; poiid=520752902653967; w_visitid=8c34f1a8-3d9c-4d52-85ec-5520518e2613; w_latlng=22499564,113894648; JSESSIONID=16jmwhj4fk0elplcbgmriesjy; __mta=215266856.1529060217833.1530349178300.1530349577179.80; _lxsdk_s=1644fb9c3ec-853-79-3fb%7C%7C34'
    },
    form: data
  };

  request(options, function(error , response, body){
      console.log('body:',body);

      try {
        res.json(JSON.parse(body));
      }catch(e){
        res.json({});
      }
      

  });
});

module.exports = router;
