
var unites=['metre','kilometre', 'feet' ,'inch']
var output=''
function  conver(){

    
    var currentDistance=$('.distaneTooBeChanged').val()
    var converted=$('.distanceToConvert').val()
    var input=$('#distance').val()
    var paraOutPut=$('#output')
    
    if(currentDistance===unites[0]&&converted===unites[1]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input/1000 +' kilometers'
        paraOutPut.html(`${output}`)
        return 

    }
    if(currentDistance===unites[0]&&converted===unites[2]){
        $('#Converter').html(`${currentDistance} to ${converted}`)

        output=input*3.28 + ' Ft'
        paraOutPut.html(`${output}`)

        return
    }
    if(currentDistance===unites[0]&&converted===unites[3]){
        $('#Converter').html(`${currentDistance} to ${converted}`)

        output=input*39.37 + ' inches'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[1]&&converted===unites[0]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*1000 + ' Metrs'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[1]&&converted===unites[2]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*3280.84 + ' Ft'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[1]&&converted===unites[3]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*39370,1 + ' inches'
        paraOutPut.html(`${output}`)
        return

        

    }
    if(currentDistance===unites[2]&&converted===unites[0]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*0.304 + ' Metres'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[2]&&converted===unites[1]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*0.0003 +' kilometers'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[2]&&converted===unites[3]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*12 + ' Inches'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[3]&&converted===unites[0]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*0.0254 + ' Metres'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[3]&&converted===unites[1]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*2,54 +' kilometers'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[3]&&converted===unites[2]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input*0.0833333 + ' Ft'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[0]&&converted===unites[0]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input + ' metrs'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[1]&&converted===unites[1]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input +' kilometers'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[2]&&converted===unites[2]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input + ' Ft'
        paraOutPut.html(`${output}`)
        return

    }
    if(currentDistance===unites[3]&&converted===unites[3]){
        $('#Converter').html(`${currentDistance} to ${converted}`)
        output=input + ' inches'
        paraOutPut.html(`${output}`)
        return

    }


}


var output=''
function conver2(){
    var currentCalorie=$('.CalorieTochanged').val()
    var converted=$('.kg').val()
    var input=$('#Calorie').val()
    console.log(input)
    var paraOutPut=$('#output')
        $('#Converter').html(`Calorie to kg`)
        output= input*0.00013 
        paraOutPut.html(`${Number(output).toFixed(2)}`) 

    }




function conver3(){
 var input = $("#litter").val()
 var convto = $('.litterconverter').val()

if(convto === '1'){
    $("#Converter").html(`litter to Mililitter `)
    convto = (input * 1000 )+ " Mililitters"
    $("#output").text(convto)
} 
if(convto === '2'){
    $("#Converter").html("litter to centilittre")

    convto = (input * 100 )+" Centilitters"
    $("#output").html(convto)
} 
if(convto === '3'){
    $("#Converter").html("litter to decilittre")

    convto = (input * 10 )+" Deciliters"
    $("#output").html(convto)
} 
}
