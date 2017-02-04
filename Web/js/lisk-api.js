var LISK_EXPLORER_API_URL = "https://explorer.lisk.io/api/";

var HARDCODED_REDHAWK_ADDRESS = "106014395311695277L";
var HARDCODED_COMMON_FUND_ADDRESS = "15841793714384967784L";
 

function renderRestData(data){

    if(data['delegate']){
        $('#delegate-name').text(data['delegate']['username']);
    } else {
        $('#delegate-name').text(data['address']);
    }
    
    $('#lsk-ammount').text(parseInt(data['balance'])/100000000);
    
    // Show data
    $('#welcome-message').fadeIn();

}

function getLiskAmmount(addressID){ 
    $.ajax({
        url: LISK_EXPLORER_API_URL + "getAccount?address=" + addressID,
        method: 'GET',
        success: function(data){
            console.log(data);
            renderRestData(data);
        },
        error: function(){
            console.error('Cant obtain account data!');
        }  
    });    
}


$().ready(function(){

    getLiskAmmount(HARDCODED_COMMON_FUND_ADDRESS);

});