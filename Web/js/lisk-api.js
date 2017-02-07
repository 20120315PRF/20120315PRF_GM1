var LISK_EXPLORER_API_URL = "https://testnet-explorer.lisk.io/api/";
var HARDCODED_REDHAWK_ADDRESS = "937865154584638568L";

//localstorage key
var LISK_CONFIG_ADDRESS = "lisk_address";

var currentAddress = HARDCODED_REDHAWK_ADDRESS;

// Address pattern for all addresses
var addressPattern = /[0-9]{18}L/gi;



/** Local Storage enabled to store configuration of direction */
function localStorageEnabled(){
    return typeof(Storage) !== "undefined";
}


// Load address from local storage
function loadAddress(){
    if(localStorageEnabled()){
        var localStr = localStorage.getItem(LISK_CONFIG_ADDRESS);
        if(localStr == null) return "";
        else return localStr;
    }
}


//Save address on local storage
function saveAddress(newAddress){
    if(localStorageEnabled()){
        localStorage.setItem(LISK_CONFIG_ADDRESS, newAddress);
    }
}


// Test if an address is valid
function addressIsValid(candidateAddress){
    return candidateAddress
        && addressPattern.test(candidateAddress);
}


// Re-load data for the given address
function reloadChanges(){
    var candidateAddress = $('#account-address').val();
    
    if(addressIsValid(candidateAddress)){
        
        $('.input-error').removeClass('input-error');
        
        currentAddress = candidateAddress;
        $('#welcome-message').hide();
        $('#config-modal').modal('toggle');

        //Update data
        saveAddress(currentAddress);
        getLiskAmmount(currentAddress);
        
    } else {
            // SHOW ERROR
            $('#account-address').addClass('input-error');
        
    }
    
    
}


// Show data on the screen
function renderRestData(data){
    if(data){
        if(data['delegate']){
            $('#delegate-name').text(data['delegate']['username']);
        } else {
            $('#delegate-name').text(data['address']);
        }

        $('#lsk-ammount').text(parseInt(data['balance'])/100000000);
    }
    
    $('#welcome-message').fadeIn();

}


// Rest call for getting account
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
    if(localStorageEnabled){
        currentAddress = loadAddress();
    } 
    
    if(!currentAddress){
        currentAddress = HARDCODED_REDHAWK_ADDRESS;
    }
    
    getLiskAmmount(currentAddress);
});
