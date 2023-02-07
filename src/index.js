//General knowledge
//https://codesandbox.io/s/front-end-interview-test-0s8fhh?file=/src/index.js

import "./styles.css";

test0();
test1();
test2();
test3();
test4();
test5();

function test0() {
    // fix a bug, explain
    const foo = { a: 1, b: 2 };

    ///// Your code here
    const bar = {...foo};
    bar.b = 5;
    /////////////////////

    // Is there any alternative solution? Explain the difference?

    // ------------------- Do not change
    console.log("1 + 2 = ", foo.a + foo.b);
    console.log("1 + 5 = ", bar.a + bar.b);
}

function test1() {
    // implement function count
    /*
      should console.log numbers starting from "start" to "stop",
      with delay between output "interval".
      The first number should appear immidiately!
    */
    function count(start = 0, stop = 10, interval = 1000) {
        /**
         *
         * Your code here
         *
         */
        let count =  setInterval(() => {
            if (start <= stop) {
                console.log(start)
                start++
            } else {
                clearInterval(count)
            }
        }, interval)
    }
    // ---------------------- Do not change
    count(2, 15, 100);
}

function test2() {
    // Using regex to extract the lightness from hsl color code
    // FYI: HSL color values are specified with: `hsl(hue, saturation, lightness)`
    const hslColor = "hsl(0, 8%, 18%)"; // the `lightness` value is 18

    function getLightness(hslColor) {
        /**
         *
         * Your code here
         *
         */
        const match = hslColor.match(/\d+%+\)/);
        if (match) {
            let lightness = match[0];
            return parseInt(lightness);
        } else return null
    }

    // ---------------------- Do not change
    const lightness = getLightness(hslColor);
    console.log("Lightness: ", lightness);
}

function test3() {
    // Click on the button, fix the bug, explain
    const button = document.querySelector("#click-me");
    button.addEventListener("click", () => {
        button.textContent = "Clicked";
    });
}

async function test4() {
    // Make it ES5-promise compatible (fetch function and PROMISE are still ok here)
    // const getData = async () => (await (await fetch("/data.json")).json()).data;
    // console.log(getData());
    // ES5

    let getData = function getData() {
        return fetch("/data.json").then(function (res) {
            return res.json();
        }).then(function (data) {
            return data.data;
        });
    };
    getData().then(function (data) {
        console.log(data);
    });
}

function test5() {
    // Make infinite scroll, use IntersectionObserver API
    async function runApp() {
        const data = await fetchData();
        await renderDataBlocks(data);
        /**
         *
         *
         * Your code here
         *
         *
         */
    }

    // ---------------------- Do not change
    const app = document.getElementById("app");
    async function renderDataBlocks(data) {
        data.forEach((text) => {
            const block = document.createElement("div");
            block.classList.add("item");
            block.innerText = text;
            app.appendChild(block);
        });
    }

    let page = 0;
    const size = 15;
    async function fetchData() {
        const min = page * size;
        const max = (page + 1) * size;
        const data = [...Array(max - min + 1).keys()].map((i) => i + min);
        page++;

        return data;
    }
    //////////////////////////////////////////////////////////////////////

    runApp();
}
