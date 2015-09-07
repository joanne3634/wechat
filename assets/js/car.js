function validateCarCreate(){
	var form_valid = (document.getElementById('CarNumber').value);
    /* 不足5位 */
    if(form_valid.length != 5){
        Alert.render('请输入正确的手机号码','好的');
        return false;
    }
    /* 車牌已被綁定 */
    if(form_valid.length != 5){
        Confirm.render('車牌號已經被其他帳號添加',null,null,'redirect',document.location.origin+'/afterCarAuth.html','好的','車牌認證');
        return false;
    }
    return true;
}	

function validateCarDelete(form){
	// console.log( form.carLicense.value );
	Confirm.render('確定要刪除這個車牌信息嗎？','delete_car_license',form.carLicense.value,null,null,'確定','取消');
	return false;
}