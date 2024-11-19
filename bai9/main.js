
M = ["hoa", "trang"];


let student = {
    //key + value
    //thuoc tinh
    fullName : "tran nhu nhong",
    birthYear : 2005,
    address :{
        city : " Ha Noi",
        country: "VietNam",
    },
    scores : [8,9,10],

    getAge: function(){
        return 2024 - this.birthYear;
    },

    diemTrungBinh: function()
    {
         sumScore = this.scores.reduce((a, b) => a + b , 0);
         return sumScore / 3;
    },


};
