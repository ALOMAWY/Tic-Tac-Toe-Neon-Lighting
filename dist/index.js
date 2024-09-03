"use strict";
let turn = "x";
let count = true;
let squares = document.querySelectorAll(".square");
let arrayOfSquars = Array.from(squares);
let clear = document.getElementById("clear");
let playWith = document.getElementById("playWith");
let o_check = document.querySelector(".check-o");
o_check.style.height = (o_check === null || o_check === void 0 ? void 0 : o_check.clientWidth) + "px";
let x_win = document.querySelector(".x-win");
let o_win = document.querySelector(".o-win");
let game = document.querySelector(".game");
game.style.height = (game === null || game === void 0 ? void 0 : game.clientWidth) + "px";
window.addEventListener("load", () => {
    x_win === null || x_win === void 0 ? void 0 : x_win.innerHTML = sessionStorage.getItem("xValue")
        ? sessionStorage.getItem("xValue")
        : 0;
    o_win === null || o_win === void 0 ? void 0 : o_win.innerHTML = sessionStorage.getItem("oValue")
        ? sessionStorage.getItem("oValue")
        : 0;
});
arrayOfSquars.forEach((e) => {
    e.addEventListener("click", () => {
        // Create O && X Checks Componnants
        if (turn === "x" && e.innerHTML == "") {
            let X_Check = document.createElement("div");
            X_Check.classList.add("check-x");
            let span1 = document.createElement("span");
            X_Check.appendChild(span1);
            let span2 = document.createElement("span");
            X_Check.appendChild(span2);
            e.appendChild(X_Check);
            turn = "o";
        }
        else if (turn === "o" && e.innerHTML == "") {
            let O_Check = document.createElement("div");
            O_Check.classList.add("check-o");
            let span3 = document.createElement("span");
            O_Check.appendChild(span3);
            e.appendChild(O_Check);
            turn = "x";
        }
        if (winner(e)) {
            if (turn == "x" && count) {
                x_win === null || x_win === void 0 ? void 0 : x_win.innerHTML = +x_win.innerHTML + 1;
                sessionStorage.setItem("xValue", x_win === null || x_win === void 0 ? void 0 : x_win.innerHTML);
                count = !count;
            }
            if (turn == "o" && count) {
                o_win === null || o_win === void 0 ? void 0 : o_win.innerHTML = +o_win.innerHTML + 1;
                sessionStorage.setItem("oValue", o_win === null || o_win === void 0 ? void 0 : o_win.innerHTML);
                count = !count;
            }
        }
        playWith === null || playWith === void 0 ? void 0 : playWith.innerText = `"${turn}"`;
    });
});
function winner(squares) {
    if (
    // X
    arrayOfSquars[0].innerHTML === arrayOfSquars[1].innerHTML &&
        arrayOfSquars[1].innerHTML === arrayOfSquars[2].innerHTML &&
        arrayOfSquars[0].innerHTML !== "") {
        arrayOfSquars[0].style.backgroundColor = "white";
        arrayOfSquars[1].style.backgroundColor = "white";
        arrayOfSquars[2].style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[3].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[5].innerHTML &&
        arrayOfSquars[3].innerHTML !== "") {
        arrayOfSquars[3].style.backgroundColor = "white";
        arrayOfSquars[4].style.backgroundColor = "white";
        arrayOfSquars[5].style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[6].innerHTML === arrayOfSquars[7].innerHTML &&
        arrayOfSquars[7].innerHTML === arrayOfSquars[8].innerHTML &&
        arrayOfSquars[6].innerHTML !== "") {
        arrayOfSquars[6].style.backgroundColor = "white";
        arrayOfSquars[7].style.backgroundColor = "white";
        arrayOfSquars[8].style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (
    // Y
    arrayOfSquars[0].innerHTML === arrayOfSquars[3].innerHTML &&
        arrayOfSquars[3].innerHTML === arrayOfSquars[6].innerHTML &&
        arrayOfSquars[0].innerHTML !== "") {
        arrayOfSquars[0].style.backgroundColor = "white";
        arrayOfSquars[3].style.backgroundColor = "white";
        arrayOfSquars[6].style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[1].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[7].innerHTML &&
        arrayOfSquars[1].innerHTML !== "") {
        arrayOfSquars[1].style.backgroundColor = "white";
        arrayOfSquars[4].style.backgroundColor = "white";
        arrayOfSquars[7].style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[2].innerHTML === arrayOfSquars[5].innerHTML &&
        arrayOfSquars[5].innerHTML === arrayOfSquars[8].innerHTML &&
        arrayOfSquars[2].innerHTML !== "") {
        arrayOfSquars[2].style.backgroundColor = "white";
        arrayOfSquars[5].style.backgroundColor = "white";
        arrayOfSquars[8].style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[0].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[8].innerHTML &&
        arrayOfSquars[0].innerHTML !== "") {
        arrayOfSquars[0].style.backgroundColor = "white";
        arrayOfSquars[4].style.backgroundColor = "white";
        arrayOfSquars[8].style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[2].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[6].innerHTML &&
        arrayOfSquars[2].innerHTML !== "") {
        arrayOfSquars[2].style.backgroundColor = "white";
        arrayOfSquars[4].style.backgroundColor = "white";
        arrayOfSquars[6].style.backgroundColor = "white";
        reset();
        return true;
    }
}
function reset() {
    arrayOfSquars.forEach((e) => {
        e.addEventListener("click", () => null);
    });
    setTimeout(() => {
        arrayOfSquars.forEach((e) => {
            e.style.backgroundColor = "unset";
            e.innerHTML = "";
        });
    }, 750);
}
clear === null || clear === void 0 ? void 0 : clear.addEventListener("click", () => {
    sessionStorage.clear();
    x_win === null || x_win === void 0 ? void 0 : x_win.innerHTML = 0;
    o_win === null || o_win === void 0 ? void 0 : o_win.innerHTML = 0;
});
