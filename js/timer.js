(function () {
    var element;

   setInterval(function () {
        var date = new Date();
       
        if(date.getFullYear() >= 2016 && date.getMonth() + 1 >= 8 && date.getDate() >= 27) {
            element = document.getElementById("dayValue");
            element.textContent = "成";
            element = document.getElementById("hourValue");
            element.textContent = "積";
            element = document.getElementById("minuteValue");
            element.textContent = "発";
            element = document.getElementById("secondValue");
            element.textContent = "表";
            element = document.getElementById("MsecondValue");
            element.textContent = "中";
        } else if (date.getDate() == 26 && date.getHours() >= 12) {
            element = document.getElementById("dayValue");
            element.textContent = "成";
            element = document.getElementById("hourValue");
            element.textContent = "積";
            element = document.getElementById("minuteValue");
            element.textContent = "発";
            element = document.getElementById("secondValue");
            element.textContent = "表";
            element = document.getElementById("MsecondValue");
            element.textContent = "中";
        } else {
            //日付
            element = document.getElementById("dayValue");
            if((12 - date.getHours() - 1) < 0) {
                if(date.getSeconds() == 0 && 12 - date.getHours() == 0 && date.getMinutes() == 0) {
                    element.textContent = 26 - date.getDate();
                } else {
                    element.textContent = 25 - date.getDate();
                }
            } else {
                element.textContent = 26 - date.getDate();
            }

            //時間
            element = document.getElementById("hourValue");
            if((12 - date.getHours() - 1) < 0){
                if(date.getSeconds() == 0 && 12 - date.getHours() == 0 && date.getMinutes() == 0) {
                    element.textContent = 12 - date.getHours();
                } else if (date.getMinutes() == 0 && date.getSeconds() == 0){
                    element.textContent = 36 - date.getHours();
                } else {
                    element.textContent = 36 - date.getHours() - 1;
                }
            } else if (date.getMinutes() == 0 && date.getSeconds() == 0){
                element.textContent = 12 - date.getHours();
            } else {
                element.textContent = 12 - date.getHours() - 1;            
            }

            //分
            element = document.getElementById("minuteValue");
            if(date.getSeconds() == 0 && date.getMinutes() == 0) {
                element.textContent = 0;        
            } else if (date.getSeconds() == 0) {
                element.textContent = 60 - date.getMinutes();
            } else {
                element.textContent = 60 - date.getMinutes() - 1;        
            }

            //秒
            element = document.getElementById("secondValue");
            if((60 - date.getSeconds()) == 60) {
                element.textContent = 0;
            } else {
                element.textContent = 60 - date.getSeconds();
            }

            //ミリ秒
            element = document.getElementById("MsecondValue");
            if((1000 - date.getMilliseconds()) == 1000) {
                element.textContent = 0;
            } else {
                element.textContent = ("00" + (1000 - date.getMilliseconds())).slice(-3);
            }
        }
    } , 60/1000)
})();