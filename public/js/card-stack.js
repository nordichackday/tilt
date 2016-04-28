document.addEventListener('DOMContentLoaded', function () {
    var stack;

 
    stack = gajus.Swing.Stack();

    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        stack.createCard(targetElement);

        targetElement.classList.add('in-deck');
    });


    stack.on('throwOutConfidence', function (e) {
        console.log("werwerwer",e)
    });

    stack.on('throwout', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown out of the stack to the', e.throwDirection == 1 ? 'right' : 'left', 'direction.');
        
        e.target.classList.remove('in-deck');
    });

    stack.on('throwin', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown into the stack from the', e.throwDirection == 1 ? 'right' : 'left', 'direction.');

        e.target.classList.add('in-deck');
    });
    
    stack.on('dragstart', function (e) {
        throwOutConfidenceElements.yes = e.target.querySelector('.yes').style;
        throwOutConfidenceElements.no = e.target.querySelector('.no').style;
    });
    
});