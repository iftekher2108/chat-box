const toggle = document.querySelector(".toggle"),
    menu = document.querySelector(".menu"),
    toggleOpen = document.querySelector("div.toggle > i.fa-solid.fa-ellipsis-vertical.open"),
    toggleClose = document.querySelector("div.toggle > i.fa-solid.fa-xmark.close");
// console.log(toggleClose)

const chat_body = document.querySelector(".chat_body"), //body element
    message_btn = document.querySelector(".message-open-btn"); // toggle message show element
// console.log(message_btn);

// toggle message show create variables
let log = 0,
    smk = 0;

toggle.onclick = () => {

    if (log == 0) {
        menu.style.transform = "scaleY(1)";
        toggleOpen.classList.remove("on");
        toggleOpen.classList.add("off");
        toggleClose.classList.add("on");
        toggleClose.classList.remove("off");
        log = 1
    } 
    else {

        menu.style.transform = "scaleY(0)";
        toggleOpen.classList.add("on");
        toggleOpen.classList.remove("off");
        toggleClose.classList.remove("on");
        toggleClose.classList.add("off");
        log = 0;

    }
}
message_btn.onclick = () => {

    if (smk == 0) {
        chat_body.style.transform = "scale(1)";
        smk = 1;
    } else {
        chat_body.style.transform = "scale(0)";
        smk = 0;
    }
}

let time = new Date();
hour = time.getHours();
minute = time.getMinutes();
secend = time.getSeconds();

if (hour > 12) {
    hour -= 12;
}

// console.log (hour)

const send = document.querySelector(".sender p"),
    input_txt = document.querySelector("#inputtext"),
    send_btn = document.querySelector(".message-send button"),
    sender = document.querySelector(".messages");
// console.log(send_btn);

const recive = document.querySelector(".client");

send_btn.onclick = () => {
    // const sen = document.createElement('div');
    // sen.className='sender';

    const adder = document.createElement('div'),
        tim = document.createElement('p'),
        ele = document.createElement('p');
    adder.className = "sender";

    tim.className = 'time';
    tim.classList.add('r');
    //  tim.innerHTML=`${hour}.${minute}.${secend}`;


    console.log(tim)

    // sen.appendChild(ele);
    ele.className = "sen";
    adder.appendChild(ele)
    ele.innerHTML = `${input_txt.value}`;
    // adder.appendChild(tim)

    input_txt.value = '';

    sender.appendChild(adder);
    // sen.appendChild(ele);

    // console.log(adder);

}