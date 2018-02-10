
const getSystemInfo = function () {
  return new Promise(resolve => {
    wx.getSystemInfo({
      success: function (res) {
        resolve(res)
      },
    })
  })
}
const REG = { //正则
  phone: function (req) { //手机号
    var rxPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    return rxPhone.test(req);



  },
  ID: function (req) { //
    var idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return idReg.test(req);


  },
  email: function (req) {
    var emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    return emailReg.test(req);


  },
  trim:function(req){
    var Reg =/^[\s\t ]+|[\s\t ]+$/g
    return req.replace(Reg, '');
  },
  trimAll:function(req){
    var Reg = /\s+/g
    return req.replace(Reg, "");

  }
}

  module.exports = {
    getSystemInfo,
    REG

  }