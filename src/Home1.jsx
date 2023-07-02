/* eslint-disable no-lone-blocks */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from "react";
import "./App1.css";
import Typewriter from "typewriter-effect";

function Home1() {
  const [cal, setCal] = React.useState();
  const [firstStake, setFirstStake] = React.useState();
  const [secondStake, setSecondStake] = React.useState();
  const [thirdStake, setThirdStake] = React.useState();
  const [fourthStake, setFourthStake] = React.useState();
  const [labels, setLabels] = React.useState();
  const [downloads, setDownloads] = useState([]);
  const [downloads3, setDownloads3] = useState([]);
  const [data, setData] = useState([]);
  const [downloads2, setDownloads2] = useState([]);
  const [instructions, setInstructions] = useState();
  const [firstElement, setFirstElement] = useState();
  const [secondElement, setSecondElement] = useState([]);
  const [firstSixElement, setFirstSixElement] = useState();
  let nextElement = firstElement;
  nextElement++;
  const [randomNumbers, setRandomNumbers] = useState([]);
  /*const getDownloads = async () => {
    setTotal([]);
    setTotal2([]);
    setDownloads([]);
    setDownloads2([]);
    go();
    setInstructions("... Loading");
    const [response1, response2] = await Promise.all([
      fetch("https://puppeteer-vercel-master-eight.vercel.app/api"),
      fetch("https://puppeteer-vercel-master-eight.vercel.app/api2"),
    ]);

    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      const fifthAndSixthNumbers = data.slice(4, 6);
      const sum = fifthAndSixthNumbers.reduce((acc, cur) => acc + cur, 0);
      if (sum > 9) {
        const [tens, ones] = sum.toString().split('');
        setDownloads([parseInt(tens), parseInt(ones)]);
        setDownloads2(49);
        setInstructions("");
      } else {
        setDownloads([sum]);
      }
    })
    .catch(error => console.error(error)); 
  }; */

  const getDownloads = async () => {
    /*setTotal([]);*/
    setData([]);
    setDownloads([]);
    setDownloads2([]);
    setDownloads3([]);
    // go();
    setInstructions("... Loading");

    const url = "http://localhost:5000/fetch-data";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })

      .then((data) => {
        const ballValues = data.balls.slice(6, 12);
        const ballValues1 = data.statistics.slice(0, 1);
        const ballValues3 = data.balls.slice(0, 6);
        setFirstSixElement(ballValues);
        setFirstElement(ballValues1);
        setSecondElement(ballValues3);
        const numbersArray = ballValues3.map((value) => parseInt(value, 10));

        console.log(numbersArray);
        console.log(randomNumbers);

        setDownloads();

        setInstructions("");
      })
      .catch((error) => console.error(error));
  };

  function go() {
    if (secondElement.length < 1) {
      return null;
    } else {
      return (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Bet on")
              .callFunction(() => {
                {
                  pickRandomNumbers();
                  // findFrequentNumbers2();
                }
              })
              .start();
          }}
        />
      );
    }
  }

  const pickRandomNumbers = () => {
    const numbers = Array.from({ length: 49 }, (_, i) => i + 1);
    const existingNumbers = new Set(secondElement);
    const availableNumbers = numbers.filter(
      (number) => !existingNumbers.has(number)
    );
    const randomNumbers = [];

    while (randomNumbers.length < 4 && availableNumbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      const randomNumber = availableNumbers.splice(randomIndex, 1)[0];
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }

    // randomNumbers will now have four random numbers not found in secondElement
    setRandomNumbers(randomNumbers);
  };

  // console.log(secondElement);
  // console.log(randomNumbers);
  /* const findFrequentNumbers = () => {
    const sumOf5thAnd6th = data.length >= 6 ? data[4] + data[5] : null;
console.log(frequentNumbers);
    setTotal(frequentNumbers);
  };

  const findFrequentNumbers2 = () => {
    const frequencyMap = {};
    const frequentNumbers = [];

    for (let i = 0; i < downloads.length; i++) {
       if (!frequencyMap[downloads[i]]) {
        frequencyMap[downloads[i]] = 1;
      } else {
        frequencyMap[downloads[i]]++;
 
 frequencyMap[downloads[i]] = (frequencyMap[downloads[i]] || 0 ) 
      if (frequencyMap[downloads[i]] > 3) {
        if (frequentNumbers.indexOf(downloads[i]) === -1) {
        frequentNumbers.push(downloads[i]);
        }
      }
    }
  }
console.log(frequentNumbers);
    setTotal2(frequentNumbers);
  };


  

  const [total, setTotal] = useState([]);
  const [total2, setTotal2] = useState([]);*/

  // to calculate the capital

  //first receiving and storing the capital entered
  function cC(event) {
    setCal(event.target.value);
  }

  //calculating first stake
  function calculateCapital() {
    const label = Math.round(cal / 10);
    setFirstStake(Math.floor(label * 0.0167));
    setSecondStake(Math.floor(label * 0.0667));
    setThirdStake(Math.floor(label * 0.2167));
    setFourthStake(Math.floor(label * 0.6667));
    setLabels(label);
  }

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="header">
        <div className="logout" onClick={logout}>
          <p>logout?</p>
        </div>{" "}
        <div className="ifrme">
          {" "}
          <h1>
            Win Consistently On{" "}
            <span className="ja">
              49<span className="j">ja</span>{" "}
            </span>
            !!!{" "}
          </h1>
          <marquee behavior="scroll" direction="left" className="my-number">
            <h2>Contact On Whatsapp +2348101530401</h2>
          </marquee>
        </div>
      </div>

      <div className="mainbody3">
        <div className="mainbody4">
          <div className="body5">
            <div className="mainbody1-2">
              Last Draw : &nbsp;&nbsp;&nbsp;&nbsp;
            </div>{" "}
            <div className="draw">
               {/* {instructions2}  */}
              {firstElement - 1}
       
            </div>
            <div className="body6">
              {firstSixElement &&
                firstSixElement.map((go, index) => {
                  let style;
                  if (
                    go === "1" ||
                    go === "4" ||
                    go === "7" ||
                    go === "10" ||
                    go === "13" ||
                    go === "16" ||
                    go === "19" ||
                    go === "22" ||
                    go === "25" ||
                    go === "28" ||
                    go === "31" ||
                    go === "34" ||
                    go === "37" ||
                    go === "40" ||
                    go === "43" ||
                    go === "46"
                  ) {
                    style = {
                      backgroundColor: "red",
                    };
                  } else if (
                    go === "2" ||
                    go === "5" ||
                    go === "8" ||
                    go === "11" ||
                    go === "14" ||
                    go === "17" ||
                    go === "20" ||
                    go === "23" ||
                    go === "26" ||
                    go === "29" ||
                    go === "32" ||
                    go === "35" ||
                    go === "38" ||
                    go === "41" ||
                    go === "44" ||
                    go === "47"
                  ) {
                    style = {
                      backgroundColor: "blue",
                    };
                  } else if (
                    go === "3" ||
                    go === "6" ||
                    go === "9" ||
                    go === "12" ||
                    go === "15" ||
                    go === "18" ||
                    go === "21" ||
                    go === "24" ||
                    go === "27" ||
                    go === "30" ||
                    go === "33" ||
                    go === "36" ||
                    go === "39" ||
                    go === "42" ||
                    go === "45" ||
                    go === "48"
                  ) {
                    style = {
                      backgroundColor: "green",
                    };
                  } else if (go === "49") {
                    style = {
                      backgroundColor: "#c9d916",
                      color: "black",
                    };
                  }
                  return (
                    <div className="mainbody7" style={style} key={index}>
                      {go}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="mainbody4">
          <div className="body5">
            <div className="mainbody1-2">
              Upcoming Draw : &nbsp;&nbsp;&nbsp;&nbsp;
            </div>{" "}
            <div className="draw"> {firstElement}
            </div>
          </div>
        </div>
        <button className="mainbody5" onClick={getDownloads}>
          Click To Start
        </button>
        <div className="mainbody1">
          {" "}
          <div className="instructions2">
            <div className="instructions3"> {go()} </div>
            <div className="instructions4">
              {randomNumbers &&
                randomNumbers.map((go, index) => {
                  let style;
                  if (
                    go === 1 ||
                    go === 4 ||
                    go === 7 ||
                    go === 10 ||
                    go === 13 ||
                    go === 16 ||
                    go === 19 ||
                    go === 22 ||
                    go === 25 ||
                    go === 28 ||
                    go === 31 ||
                    go === 34 ||
                    go === 37 ||
                    go === 40 ||
                    go === 43 ||
                    go === 46
                  ) {
                    style = {
                      backgroundColor: "red",
                    };
                  } else if (
                    go === 2 ||
                    go === 5 ||
                    go === 8 ||
                    go === 11 ||
                    go === 14 ||
                    go === 17 ||
                    go === 20 ||
                    go === 23 ||
                    go === 26 ||
                    go === 29 ||
                    go === 32 ||
                    go === 35 ||
                    go === 38 ||
                    go === 41 ||
                    go === 44 ||
                    go === 47
                  ) {
                    style = {
                      backgroundColor: "blue",
                    };
                  } else if (
                    go === 3 ||
                    go === 6 ||
                    go === 9 ||
                    go === 12 ||
                    go === 15 ||
                    go === 18 ||
                    go === 21 ||
                    go === 24 ||
                    go === 27 ||
                    go === 30 ||
                    go === 33 ||
                    go === 36 ||
                    go === 39 ||
                    go === 42 ||
                    go === 45 ||
                    go === 48
                  ) {
                    style = {
                      backgroundColor: "green",
                    };
                  } else if (go === 49) {
                    style = {
                      backgroundColor: "#c9d916",
                      color: "black",
                    };
                  } else if (go === 0) {
                    style = {
                      display: "none",
                    };
                  }

                  return (
                    <p className="mainbody2" style={style} key={index}>
                      {go}
                    </p>
                  );
                })}
            </div>
            <div className="instructions"> {instructions}</div>
          </div>
          <div></div>
          <h3>
            <div className="draw">
              {/* {instructions2} {show2 === true? <h3>None, wait for Next</h3>: null} */}
            </div>
          </h3>
        </div>
        <div className="instructions4"></div>
      </div>

      <div className="footer">&copy; All Rights Reserved</div>
    </div>
  );
}

export default Home1;
