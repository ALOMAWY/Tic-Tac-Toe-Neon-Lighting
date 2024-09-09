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
let resetGame = document.querySelector(".reset-game");
game.style.height = (game === null || game === void 0 ? void 0 : game.clientWidth) + "px";
window.addEventListener("load", () => {
    let x_storege = sessionStorage.getItem("xValue");
    if (x_storege) {
        if (x_win) {
            x_win.innerHTML = x_storege ? x_storege : "0";
        }
    }
    let o_storege = sessionStorage.getItem("oValue");
    if (o_storege) {
        if (o_win) {
            o_win.innerHTML = o_storege ? o_storege : "0";
        }
    }
});
arrayOfSquars.forEach((e) => {
    e.addEventListener("click", () => {
        if (turn === "x" && e.innerHTML == "") {
            // Create O && X Checks Componnants
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
            if (turn == "o" && count) {
                if (x_win) {
                    x_win.innerHTML = `${+x_win.innerHTML + 1}`;
                }
                sessionStorage.setItem("xValue", x_win === null || x_win === void 0 ? void 0 : x_win.innerHTML);
                count = !count;
            }
            if (turn == "x" && count) {
                if (o_win) {
                    o_win.innerHTML = `${+o_win.innerHTML + 1}`;
                    sessionStorage.setItem("oValue", o_win === null || o_win === void 0 ? void 0 : o_win.innerHTML);
                }
                count = !count;
            }
        }
        else if (arrayOfSquars.every((s) => {
            return s.innerHTML != "";
        })) {
            arrayOfSquars.forEach((e) => {
                e.innerHTML = "";
                turn = "x";
                if (playWith) {
                    playWith.innerText = `"${turn}"`;
                }
            });
        }
        if (playWith) {
            playWith.innerText = `"${turn}"`;
        }
    });
});
function winner(squares) {
    if (
    // X
    arrayOfSquars[0].innerHTML === arrayOfSquars[1].innerHTML &&
        arrayOfSquars[1].innerHTML === arrayOfSquars[2].innerHTML &&
        arrayOfSquars[0].innerHTML !== "") {
        let firstSquare = arrayOfSquars[0];
        let secoundSquare = arrayOfSquars[1];
        let theerdSquare = arrayOfSquars[2];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[3].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[5].innerHTML &&
        arrayOfSquars[3].innerHTML !== "") {
        let firstSquare = arrayOfSquars[3];
        let secoundSquare = arrayOfSquars[4];
        let theerdSquare = arrayOfSquars[5];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[6].innerHTML === arrayOfSquars[7].innerHTML &&
        arrayOfSquars[7].innerHTML === arrayOfSquars[8].innerHTML &&
        arrayOfSquars[6].innerHTML !== "") {
        let firstSquare = arrayOfSquars[6];
        let secoundSquare = arrayOfSquars[7];
        let theerdSquare = arrayOfSquars[8];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (
    // Y
    arrayOfSquars[0].innerHTML === arrayOfSquars[3].innerHTML &&
        arrayOfSquars[3].innerHTML === arrayOfSquars[6].innerHTML &&
        arrayOfSquars[0].innerHTML !== "") {
        let firstSquare = arrayOfSquars[0];
        let secoundSquare = arrayOfSquars[3];
        let theerdSquare = arrayOfSquars[6];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[1].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[7].innerHTML &&
        arrayOfSquars[1].innerHTML !== "") {
        let firstSquare = arrayOfSquars[1];
        let secoundSquare = arrayOfSquars[4];
        let theerdSquare = arrayOfSquars[7];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[2].innerHTML === arrayOfSquars[5].innerHTML &&
        arrayOfSquars[5].innerHTML === arrayOfSquars[8].innerHTML &&
        arrayOfSquars[2].innerHTML !== "") {
        let firstSquare = arrayOfSquars[2];
        let secoundSquare = arrayOfSquars[5];
        let theerdSquare = arrayOfSquars[8];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[0].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[8].innerHTML &&
        arrayOfSquars[0].innerHTML !== "") {
        let firstSquare = arrayOfSquars[0];
        let secoundSquare = arrayOfSquars[4];
        let theerdSquare = arrayOfSquars[8];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
        reset();
        return true;
    }
    else if (arrayOfSquars[2].innerHTML === arrayOfSquars[4].innerHTML &&
        arrayOfSquars[4].innerHTML === arrayOfSquars[6].innerHTML &&
        arrayOfSquars[2].innerHTML !== "") {
        let firstSquare = arrayOfSquars[2];
        let secoundSquare = arrayOfSquars[4];
        let theerdSquare = arrayOfSquars[6];
        firstSquare.style.backgroundColor = "white";
        secoundSquare.style.backgroundColor = "white";
        theerdSquare.style.backgroundColor = "white";
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
            let square = e;
            square.style.backgroundColor = "unset";
            square.innerHTML = "";
            count = true;
            turn = "x";
            if (playWith)
                playWith.innerText = `"${turn}"`;
        });
    }, 750);
}
clear === null || clear === void 0 ? void 0 : clear.addEventListener("click", () => {
    sessionStorage.clear();
    if (x_win && o_win) {
        x_win.innerHTML = "0";
        o_win.innerHTML = "0";
    }
});
resetGame === null || resetGame === void 0 ? void 0 : resetGame.addEventListener("click", () => {
    arrayOfSquars.forEach((e) => {
        e.innerHTML = "";
        turn = "x";
        if (playWith)
            playWith.innerText = `"${turn}"`;
    });
});
