
// Insert your openweathermap api key as token
const token = "40b6c0b0f60d44c03a37d9b89ccf7ef9";

function generateTotal(){
   var currencyTo = $("#currencyTo").val();
   var exRate = "";
   var usdRate = $("#usdRate").val();
   var totalRate = "";


   if (!currencyTo){
       alert("Please choose a currency");
   }
   if(isNaN(usdRate)){
       alert("Invalid amount, please enter only integer")
   }

   $.ajax({
       method : "GET",
       url: "http://apilayer.net/api/live?access_key=" + token + "&currencies=" + currencyTo + "&format=1"
   }).done(function(data){
       exRate = data['quotes']['USD'+currencyTo].toFixed(2);
       console.log(exRate);
       totalRate = usdRate * exRate;
       if (exRate != ""){
       $("#table-body").empty();
       $("#table-body").append(
         `<tr>
            <td><b>${ "$" + exRate}</b></td>
            <td><b>${ usdRate}</b></td>
            <td><b>${totalRate.toFixed(2) +" "+ currencyTo}</b></td>
         </tr>`
    
         );
    }
    });
};