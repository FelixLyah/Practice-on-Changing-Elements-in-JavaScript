

let ul = document.querySelector('ul');
let arr = [1,2,3,4,5];

function addInput(){
    let inp = document.createElement('input');
    let li = this;
    inp.value = li.textContent;
    li.textContent = '';
    li.append(inp);
    li.removeEventListener('click', addInput);
    inp.addEventListener('blur',function(){
        li.textContent = inp.value;
        li.addEventListener('click', addInput);
    })
}

for(let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.innerHTML = '<span></span>' + '  ' +'<a href = "#" class = "change">change</a>' + '  ' +'<a href = "#" class = "delete">delete</a>';
    let btn = li.querySelector('.delete');
    btn.addEventListener('click',function(){
        btn.closest('li').remove();
    })
    let change = li.querySelector('.change');
    change.addEventListener('click',function(){
        change.previousElementSibling.classList.toggle('line-through');
    })
    ul.append(li);
    li = li.querySelector('span');

    li.textContent = arr[i];
    li.addEventListener('click',addInput)


}

let inpOld = document.querySelector('.OldInp');
inpOld.addEventListener('blur',function(){
    let newLi = document.createElement('li');
    newLi.innerHTML = '<span></span>' + '  ' +'<a href = "#" class = "change">change</a>' + '  ' +'<a href = "#" class = "delete">delete</a>';
    let btn = newLi.querySelector('.delete');
    btn.addEventListener('click',function(){
        btn.closest('li').remove();
    })
    let change = newLi.querySelector('.change');
    change.addEventListener('click',function(){
        change.previousElementSibling.classList.toggle('line-through');
    })
    ul.append(newLi);
    newLi = newLi.querySelector('span');

    newLi.textContent = inpOld.value;
    newLi.addEventListener('click', addInput);
    inpOld.value = '';
})
