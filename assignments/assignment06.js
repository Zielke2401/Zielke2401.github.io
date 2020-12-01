
// --- global variables ---
var loans = [{

            loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453

        },
        {

            loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453

        },

        {

            loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453

        },

        {

            loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453

        },

        {

            loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453

        }

    ];

    //start of the original load Doc() function

    $(document).ready(function() {

        // pre-fill defaults for first loan year using JQuery instead
        var defaultYear = loans[0].loan_year;

        $("#loan_year0" + 1).val(defaultYear++); //changed the document.getElementById by using $ and # the get correct ID
      
        var defaultLoanAmount = loans[0].loan_amount;

        $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2)); //changed the document.getElementById by using $ and # the get correct ID

        var defaultInterestRate = loans[0].loan_int_rate;

        $("#loan_int0" + 1).val(defaultInterestRate);//changed the document.getElementById by using $ and # the get correct ID

        var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);

        $("#loan_bal0" + 1).text(toMoney(loanWithInterest)); //changed the document.getElementById by using $ and # the get correct ID

      
        // pre-fill defaults for other loan years using JQuery instead
        for (let i = 2; i < 6; i++) {

            $(`#loan_year0${i}`).val(defaultYear++); //for every value i with loan_year0 to 1+ default year
          
            $(`#loan_year0${i}`).attr("disabled", "true"); //set all year values to be disabled other than the value of the first year
          
            $(`#loan_year0${i}`).css({

                "backgroundColor": "grey",  "color": "white"

            }); //set the disabled years to the correct color combination

            $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2)); //set 10,000 dollar value to the full loan_amt0 id

            $(`#loan_int0${i}`).val(defaultInterestRate); //apply the default interest rate to the interest rate column and any thing with id of loan_int0

            $(`#loan_int0${i}`).attr("disabled", "true"); //disable all id's with the loan_int0  other than the first year

            $(`#loan_int0${i}`).css({

                "backgroundColor": "grey", "color": "white"

            }); //all values with id loan_int0 set with grey background and white text
          
            loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);

            $("#loan_bal0" + i).text(toMoney(loanWithInterest)); //changed document.getElementById to a $ and used # to to get id 

        } // end: "for" loop

        $("input[type=text]").focus(function() {

            $(this).select();

            $(this).css("background-color", "yellow");

        });

        // all input fields: select contents on fucus
        $("input[type=text]").blur(function() {

            $(this).css("background-color", "white");

            updateLoansArray();

        });

        // set focus to first year: messes up codepen

        // $("#loan_year01").focus();

    }); // end:of original loadDoc() function


    // -------------------------------------------------------

    function toComma(value) {

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    }
    let toMoney = (value) => {

        return `\$${toComma(value.toFixed(2))}`;

    }

    
    //--------NEW THINGS AND UPDATED THINGS--------
    
    //function to save input fields    
    let save = () => { //begin save method

        localStorage.setItem(`as06`, JSON.stringify(loans)); //save all needed data into the local storage

    }
     
    //function to load fields that have been saved in the past
    let loaddata = () => { //begin loadata method

        if (localStorage.getItem(`as06`) != null) { //check if there is on device data

            loans = JSON.parse(localStorage.getItem(`as06`)); // apply pasted save values

            update(); //apply values to what is seen

        } else { //no on device data

            alert("Error: no past saved values"); // tell user about lack of on device data

        }

    }

    function updateLoansArray() {

        //values that will control if a value can be entered

        let yearCheck = /^(19|20)\d{2}$/; //checks if the value is num between 1899 and 2099

        let amountCheck = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/; //checks if the value is num above 1

        let intCheck = /^(0|)+(.[0-9]{1,5})?$/; //checks if value is a num below 1.0

        let check = true; //used to track if any of above constraints haven't been followed

      
        if (!yearCheck.test($(`#loan_year01`).val())) { //if yearCheck is not in span

            check = false; //set to false

            alert("there is error in year field"); //tell user there's an error in field

        }

        for (i = 1; i < 6; i++) { //loop through amount field

            if (!amountCheck.test($(`#loan_amt0${i}`).val())) { //if amountCheck is not in span

                check = false; //set to false

                alert("there is error in amount field in box: " + i); //tell user there's an error in boxes

            }

        }

        if (!intCheck.test($(`#loan_int01`).val())) { //if intCheck is not in span

            check = false; //set to false

            alert("there is error in interest rate field"); //tell user there's an error in field.

        }


        if (check) { //if all contraints are passed execute 

            loans[0].loan_year = parseInt($("#loan_year01").val()); //pass year value from input

            for (var i = 1; i < 5; i++) { //loop rest of input

                loans[i].loan_year = loans[0].loan_year + i; //apply value to loans including value of i

            }

            for (i = 1; i < 6; i++) { //loop amount field to save values

                let amount = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2); //pass value

                loans[i - 1].loan_amount = amount; //save to loans array.

            }

            let interestRate = parseFloat($("#loan_int01").val()); //get interest rate value

            for (i = 0; i < 5; i++) { //loop interest rate field

                loans[i].loan_int_rate = interestrate; //save interest rate to loans

            }

            update(); //run update to apply all values
        }

    }

    let update = () => {

        loanWithInterest = 0; //reset loanWithInterest

        let total = 0; //initilize total

        for (i = 1; i < 6; i++) { //loop for entire field

            $(`#loan_year0${i}`).val(loans[i - 1].loan_year); //change value of the loan_year field to values stored in loans

            let loaned = loans[i - 1].loan_amount; //initialize loaned variable

            $(`#loan_amt0${i}`).val(loaned); //get the loaned amount

            total += parseFloat(loaned); //tally the total amount that has been loaned
          
            $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate); //pull intvalue

            loanWithInterest = (loanWithInterest + parseFloat(loaned)) * (1 + loans[0].loan_int_rate); //calculate total loan with interest

            $("#loan_bal0" + i).text(toMoney(loanWithInterest)); //apply loanwithinterest

        }

        let totalowed = loanWithInterest - totalloan;

        $(`#loan_int_accrued`).text(toMoney(totalowed)); //apply for the total over all of college
    }

    //add angular
    var app = angular.module('theapp', []); //initialize app using angular 

    app.controller('totaldata', function($scope) { //in the controller field and everything ontotaldata field

        $scope.payments = []; 
        $scope.populate = function() { //begin populate function

            update(); //update what is there

            

            let interestRate = loans[0].loan_int_rate; //initialize interestrate with loan rate as value

            let n = 11;// total months minus 1
                    
            let r = interestRate / 12; //initialise the monthly rate using the yearly rate
          
            let endTotal = loanWithInterest; //initialize endprice using loanwithinterest
          
            let pay = 12 * (endprice / ((((1 + r) ** (n * 12)) - 1) / (r * (1 + r) ** (n * 12)))); //calc payment

            for (let i = 0; i < 10; i++) { //loop 10 times

                endTotal -= pay //reduce price

                let interest= endTotal * (interestRate); //initialize int to be the price times the rate
              
                $scope.payments[i] = { //change all payment valeus

                    "payed": toMoney(pay), //add what has been payed off
                  
                    "year": loans[4].loan_year + i + 1, //move to next year
                   
                    "endbalance": toMoney(endprice += interest) //add the end price
                  
                    "interestamount": toMoney(interest), //add whatthe interest was
                }

            }

            $scope.payments[10] = { //at the 10th place change values
              
                "payed": toMoney(endprice), //amount paid witll be the ending price

                "year": loans[4].loan_year + 11, //make year the current one pluss 11
              
                "endbalance": toMoney(0) //balance owed is zero with nothing more to calc interest on 
              
                "interestamount": toMoney(0), //the interest is zero because there is nothing left 
            }

        }

    });

