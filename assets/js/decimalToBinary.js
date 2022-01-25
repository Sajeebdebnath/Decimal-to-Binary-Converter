let output = document.getElementById("converter_output")
let convert_btn = document.getElementById("convert_btn")



convert_btn.addEventListener('click', function(e){
    e.preventDefault()

    let input = document.getElementById('decimal').value
    
    if(input ==''){
        alert('Please input Decimal Number')
    }
    else if(input < 0){
        alert("Please input Positive Number")
    }else{
        let result = document.querySelector('.converter_output')
        result.style.visibility = 'visible'
    }

    let BinaryNum = Number(input).toString(2)
    output.innerText = BinaryNum
})