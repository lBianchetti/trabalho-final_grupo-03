const escolha__a = document.querySelector(".escolha__a")
const escolha__b = document.querySelector(".escolha__b")
const escolha__c = document.querySelector(".escolha__c")

escolha__a.addEventListener('click', function(){
    escolha__a.classList.add('errada')

})

escolha__b.addEventListener('click', function(){
    escolha__b.classList.add('errada')

})

escolha__c.addEventListener('click', function(){
    escolha__c.classList.add('certa')

})