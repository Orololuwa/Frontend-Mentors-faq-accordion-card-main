(function(){
    var revealAndConcealAnswer = function(num){
        var ans, qst, icon;

        ans = document.querySelector('.answer--' + num);
        qst = document.querySelector('.question--' + num);
        icon = document.querySelector('.arrow__up--' + num)
        
        ans.style.display = 'none';
    
        qst.addEventListener('click', function(){
            if (ans.style.display === 'none'){
                ans.style.display = 'block';
                qst.style.fontWeight = '700';
                qst.style.color = '#1d1e35';
                icon.style.transform = 'scaleY(-1)';
            }else if (ans.style.display = 'block'){
                ans.style.display = 'none';
                qst.style.fontWeight = '400';
                icon.style.transform = 'scaleY(1)';
            }
        });
    }

    revealAndConcealAnswer('1');
    revealAndConcealAnswer('2');
    revealAndConcealAnswer('3');
    revealAndConcealAnswer('4');
    revealAndConcealAnswer('5');
})();


