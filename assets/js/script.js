let fuhadShiblu_welcomeTxt         = document.querySelector('.fuhadShiblu_welcomeTxt')
let fuhadShiblu_gameStart          = document.querySelector('.fuhadShiblu_gameStart')
let fuhadShiblu_boxMain            = document.querySelector('.fuhadShiblu_boxMain')
let fuhadShiblu_arrow1             = document.querySelector('.fuhadShiblu_arrow1')
let fuhadShiblu_arrow2             = document.querySelector('.fuhadShiblu_arrow2')
let fuhadShiblu_arrow3             = document.querySelector('.fuhadShiblu_arrow3')
let fuhadShiblu_arrow4             = document.querySelector('.fuhadShiblu_arrow4')
let fuhadShiblu_playersNameTxt     = document.querySelector('.fuhadShiblu_playersNameTxt')
let fuhadShiblu_form               = document.querySelector('.fuhadShiblu_form')
let fuhadShiblu_p1Name             = document.querySelector('.fuhadShiblu_p1Name')
let fuhadShiblu_p2Name             = document.querySelector('.fuhadShiblu_p2Name')
let fuhadShiblu_p1Input            = document.querySelector('.fuhadShiblu_p1Input')
let fuhadShiblu_p2Input            = document.querySelector('.fuhadShiblu_p2Input')
let fuhadShiblu_gameStartBtn       = document.querySelector('.fuhadShiblu_gameStartBtn')
let fuhadShiblu_p1Err              = document.querySelector('.fuhadShiblu_p1Err')
let fuhadShiblu_p2Err              = document.querySelector('.fuhadShiblu_p2Err')
let fuhadShiblu_playerErr          = document.querySelector('.fuhadShiblu_playerErr')
let fuhadShiblu_vsBoxMain          = document.querySelector('.fuhadShiblu_vsBoxMain')
let fuhadShiblu_vsBoxTxt1          = document.querySelector('.fuhadShiblu_vsBoxTxt1')
let fuhadShiblu_vsBoxTxt2          = document.querySelector('.fuhadShiblu_vsBoxTxt2')
let vsBoxMainTxt                   = document.querySelector('.vsBoxMainTxt')
let fuhadShiblu_lpGame             = document.querySelector('.fuhadShiblu_lpGame')
let fuhadShiblu_p1Turn             = document.querySelector('.fuhadShiblu_p1Turn')
let fuhadShiblu_p2Turn             = document.querySelector('.fuhadShiblu_p2Turn')
let fuhadShiblu_p1TxtHeader        = document.querySelector('.fuhadShiblu_p1TxtHeader')
let fuhadShiblu_p2TxtHeader        = document.querySelector('.fuhadShiblu_p2TxtHeader')
let fuhadShiblu_p1InpLabel         = document.querySelector('.fuhadShiblu_p1InpLabel')
let fuhadShiblu_p2InpLabel         = document.querySelector('.fuhadShiblu_p2InpLabel')
let fuhadShiblu_p1LabelTurn        = document.querySelector('.fuhadShiblu_p1LabelTurn')
let fuhadShiblu_p2LabelTurn        = document.querySelector('.fuhadShiblu_p2LabelTurn')
let fuhadShiblu_p1Btn              = document.querySelector('.fuhadShiblu_p1Btn')
let fuhadShiblu_p2Btn              = document.querySelector('.fuhadShiblu_p2Btn')
let fuhadShiblu_p1TurnInput        = document.querySelector('.fuhadShiblu_p1TurnInput')
let fuhadShiblu_p2TurnInput        = document.querySelector('.fuhadShiblu_p2TurnInput')
let fuhadShiblu_p1TurnErr          = document.querySelector('.fuhadShiblu_p1TurnErr')
let fuhadShiblu_p2TurnErr          = document.querySelector('.fuhadShiblu_p2TurnErr')
let fuhadShiblu_gO          = document.querySelector('.fuhadShiblu_gO')
let fuhadShiblu_winner          = document.querySelector('.fuhadShiblu_winner')
let fuhadShiblu_winName          = document.querySelector('.fuhadShiblu_winName')
let p2Attempts = 0

fuhadShiblu_gameStart.addEventListener('click' , ()=>{
     fuhadShiblu_welcomeTxt.style       = 'transform:scale(0)'
     fuhadShiblu_gameStart.style        = 'transform:scale(0)'
     fuhadShiblu_boxMain.style          = 'background:#6eabda;'
     fuhadShiblu_arrow1.style            = 'transform:scale(1)'
     fuhadShiblu_playersNameTxt.style   = 'transform:scale(1)'
     fuhadShiblu_form.style             = 'transform:scale(1)'
})

fuhadShiblu_arrow1.addEventListener('click' , ()=>{
     fuhadShiblu_welcomeTxt.style       = 'display:block'
     fuhadShiblu_gameStart.style        = 'display:block'
     fuhadShiblu_boxMain.style          = 'background: linear-gradient(rgba(0,9,30,0.7),rgba(0,9,30,0.7)),url(/assets/images/boxBg.jpg)'
     fuhadShiblu_arrow1.style           = 'transform:scale(0)'
     fuhadShiblu_playersNameTxt.style   = 'transform:scale(0)'
     fuhadShiblu_form.style             = 'transform:scale(0)'
     fuhadShiblu_p1Input.value          = ''
     fuhadShiblu_p2Input.value          = ''
})

fuhadShiblu_arrow2.addEventListener('click' , ()=>{
     fuhadShiblu_welcomeTxt.style       = 'display:none'
     fuhadShiblu_gameStart.style        = 'display:none'
     fuhadShiblu_boxMain.style          = 'background:#6eabda;'
     fuhadShiblu_form.style             = "transform:scale(1)"
     fuhadShiblu_playersNameTxt.style   = 'transform:scale(1)'
     fuhadShiblu_arrow1.style           = "transform:scale(1)"
     fuhadShiblu_arrow2.style           = "transform:scale(0)"
     fuhadShiblu_vsBoxMain.style        = "transform:scale(0)"
     fuhadShiblu_lpGame.style           = "transform:scale(0)"
})

fuhadShiblu_arrow3.addEventListener('click' , ()=>{
     fuhadShiblu_p1TxtHeader.style      = "transform:scale(0)"
     fuhadShiblu_p1Turn.style           = "transform:scale(0)"
     fuhadShiblu_vsBoxMain.style        = "transform:scale(1)"
     fuhadShiblu_lpGame.style           = "transform:scale(1)"
     fuhadShiblu_arrow2.style           = "transform:scale(1)"
     fuhadShiblu_arrow3.style           = "transform:scale(0)"
     fuhadShiblu_p1TurnErr.innerHTML    = ""
     fuhadShiblu_p1TurnInput.value      = ""
})

fuhadShiblu_arrow4.addEventListener('click' , ()=>{
     fuhadShiblu_p2Turn.style           = "transform:scale(0)"
     fuhadShiblu_arrow4.style           = "transform:scale(0)"
     fuhadShiblu_p2TxtHeader.style      = "transform:scale(0)"
     fuhadShiblu_p2TurnErr.innerHTML    = ""
     fuhadShiblu_p2TurnInput.value      = ""
     fuhadShiblu_arrow3.style           = "transform:scale(1)"
     fuhadShiblu_p1TxtHeader.style      = "transform:scale(1)"
     fuhadShiblu_p1Turn.style           = "transform:scale(1)"
})

fuhadShiblu_gameStartBtn.addEventListener('click' , (e)=>{
     e.preventDefault()
     const fuhadShibluHasNumber = /\d/;
     if(fuhadShiblu_p1Input.value == ''){
          fuhadShiblu_p1Err.innerHTML   = `Player name can't be blank`
     }else if(fuhadShiblu_p1Input.value.length > 7){
          fuhadShiblu_p1Err.innerHTML   = `Player name can't be 7 charachters long`
     }else if(fuhadShiblu_p2Input.value.length > 7){
          fuhadShiblu_p2Err.innerHTML   = `Player name can't be 7 charachters long`
     }else if(fuhadShiblu_p1Input.value.length < 3){
          fuhadShiblu_p1Err.innerHTML   = `Player name can't be 3 charachters short`
     }else if(fuhadShiblu_p2Input.value.length < 3){
          fuhadShiblu_p2Err.innerHTML   = `Player name can't be 3 charachters short`
     }else if(fuhadShibluHasNumber.test(fuhadShiblu_p1Input.value)){
          fuhadShiblu_p1Err.innerHTML   = `Player name can't be number`
     }else if(fuhadShiblu_p2Input.value == ''){
          fuhadShiblu_p1Err.innerHTML   = ""
          fuhadShiblu_p2Err.innerHTML   = `Player name can't be blank`
     }else if(fuhadShibluHasNumber.test(fuhadShiblu_p2Input.value)){
          fuhadShiblu_p2Err.innerHTML   = `Player name can't be number`
     }else{
          fuhadShiblu_p1Err.innerHTML             = ""
          fuhadShiblu_p2Err.innerHTML             = ""
          fuhadShiblu_form.style                  = 'transform:scale(0)'
          fuhadShiblu_playersNameTxt.style        = 'transform:scale(0)'
          fuhadShiblu_arrow2.style                = "transform:scale(1)"
          fuhadShiblu_vsBoxMain.style             = "transform:scale(1)"
          fuhadShiblu_vsBoxTxt1.innerHTML         = fuhadShiblu_p1Input.value
          fuhadShiblu_vsBoxTxt2.innerHTML         = fuhadShiblu_p2Input.value
          fuhadShiblu_lpGame.style                = 'transform:scale(1)'
     }
})

fuhadShiblu_lpGame.addEventListener('click' , ()=>{
     fuhadShiblu_lpGame.style                = 'transform:scale(0)'
     fuhadShiblu_arrow2.style                = 'transform:scale(0)'
     fuhadShiblu_arrow1.style                = 'transform:scale(0)'
     fuhadShiblu_vsBoxMain.style             = 'transform:scale(0)'
     fuhadShiblu_p1TxtHeader.style           = 'transform:scale(1)'
     fuhadShiblu_p1Turn.style                = 'transform:scale(1)'
     fuhadShiblu_p1InpLabel.innerHTML        = fuhadShiblu_p2Input.value
     fuhadShiblu_p1LabelTurn.innerHTML        = fuhadShiblu_p1Input.value
     fuhadShiblu_arrow3.style        = 'transform:scale(1)'
     fuhadShiblu_arrow2.style        = "transform:scale(0)"
})

fuhadShiblu_p1Btn.addEventListener('click' , (e)=>{
     e.preventDefault()
     if(fuhadShiblu_p1TurnInput.value == ''){
          fuhadShiblu_p1TurnErr.innerHTML = 'Please enter a number'
     }else if(fuhadShiblu_p1TurnInput.value > 9){
          fuhadShiblu_p1TurnErr.innerHTML = 'Number must be within 1 - 10'
     }else if(fuhadShiblu_p1TurnInput.value < 1){
          fuhadShiblu_p1TurnErr.innerHTML = 'Number must be within 1 - 10'
     }else{
          fuhadShiblu_p1TurnErr.innerHTML    = ''
          fuhadShiblu_p1TurnErr.innerHTML    = ''
          fuhadShiblu_p1Turn.style           = 'transform:scale(0)'
          fuhadShiblu_p1TxtHeader.style      = 'transform:scale(0)'
          fuhadShiblu_arrow3.style           = 'transform:scale(0)'
          fuhadShiblu_arrow4.style           = 'transform:scale(1)'
          fuhadShiblu_p2TxtHeader.style      = 'transform:scale(1)'
          fuhadShiblu_p2Turn.style           = 'transform:scale(1)'
          fuhadShiblu_p2LabelTurn.innerHTML        = fuhadShiblu_p2Input.value
          fuhadShiblu_winName.innerHTML        = fuhadShiblu_p1Input.value
          fuhadShiblu_p2InpLabel.innerHTML        = fuhadShiblu_p1Input.value
     }
})

fuhadShiblu_p2Btn.addEventListener('click' , (e)=>{
     e.preventDefault()
     if(fuhadShiblu_p2TurnInput.value == ''){
          fuhadShiblu_p2TurnErr.innerHTML    = 'Please enter a number'
     }else if(fuhadShiblu_p2TurnInput.value > 9){
          fuhadShiblu_p2TurnErr.innerHTML = 'Number must be within 1 - 10'
     }else if(fuhadShiblu_p2TurnInput.value < 1){
          fuhadShiblu_p2TurnErr.innerHTML = 'Number must be within 1 - 10'
     }else if (fuhadShiblu_p2TurnInput.value != fuhadShiblu_p1TurnInput.value) {
          p2Attempts++;
          if (p2Attempts < 3) {
              fuhadShiblu_p2TurnErr.innerHTML = `Attempt ${p2Attempts}: Not matched! You have ${3 - p2Attempts} chances left.`;
          } else {
              fuhadShiblu_p2TurnErr.innerHTML = 'Game Over! Player 1 wins.';
              fuhadShiblu_p2Btn.disabled = true;
              fuhadShiblu_p2Turn.style      = 'transform:scale(0)'
               fuhadShiblu_p2TxtHeader.style = 'transform:scale(0)'
               fuhadShiblu_arrow4.style      = 'transform:scale(0)'
               fuhadShiblu_arrow4.style      = 'transform:scale(0)'
               fuhadShiblu_winner.style      = 'transform:scale(1)'
               fuhadShiblu_gO.style          = 'transform:scale(1)'
               fuhadShiblu_winName.innerHTML = fuhadShiblu_p1Input.value
               fuhadShiblu_boxMain.style          = 'background:#6eabda80'
          }
      } else {
          p2Attempts = 0;
          fuhadShiblu_p2Turn.style      = 'transform:scale(0)'
          fuhadShiblu_p2TxtHeader.style = 'transform:scale(0)'
          fuhadShiblu_arrow4.style      = 'transform:scale(0)'
          fuhadShiblu_winner.style      = 'transform:scale(1)'
          fuhadShiblu_gO.style          = 'transform:scale(1)'
          fuhadShiblu_winName.innerHTML = fuhadShiblu_p2Input.value
          fuhadShiblu_boxMain.style          = 'background:#6eabda80'
      }
})