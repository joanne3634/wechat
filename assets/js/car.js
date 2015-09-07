function validateCarCreate(){
	var form_valid = (document.getElementById('CarNumber').value);
    console.log( form_valid.length );
    /* 不足5位 */
    // if(form_valid.length != 5){
    //     Alert.render('请输入正确的手机号码','好的');
    //     return false;
    // }
    /* 車牌已被綁定 */
    if(form_valid.length != 5){
        Confirm.render('車牌號已經被其他帳號添加','delete_post','post_2','好的','車牌認證')
        return false;
    }
    return true;
}	
