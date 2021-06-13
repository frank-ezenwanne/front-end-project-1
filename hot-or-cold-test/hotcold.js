	var lucky_num = Math.floor(Math.random()*101) //creates lucky random number
	console.log(lucky_num)
	var num_list = new Array()// array for tracking
	document.getElementById("id_submit").addEventListener("click", valuesubmit)//listens for a click on submit button and activates func
	document.getElementById("id_reset").addEventListener("click", reset_game)

	function reset_game(e){
		lucky_num = Math.floor(Math.random()*101)//resets the random number
		console.log(lucky_num)
		document.querySelector("#id_num-box").style.display = "inline" // makes the input box visible again
		document.getElementById("id_submit").style.display = "inline" // makes the submit button visible again
		return lucky_num
	}

	function valuesubmit(e){
		e.preventDefault()
		var choice = document.getElementById("id_num-box").value //get value of input box
		//check if value is a whole number btwn 1 and 100
		if( (typeof(parseInt(choice,10)) != "number") || (choice % 1 != 0) || ( (choice < 0) || (choice >100) ) ){
			document.getElementById("id_total_state").innerHTML = "<span class='error'>Insert a valid whole number between 0 and 100 inclusive</span>"
		}
		else{
			choice = (parseInt(choice,10))//convert string to number
			if (choice === lucky_num){ //if guess is right,remove input box and submit button and display "you guessed right"
				document.getElementById("id_total_state").innerHTML = "You guessed right!!"
				document.querySelector("#id_num-box").style.display = "none"
				document.getElementById("id_submit").style.display = "none"
				return//exit function right away fro here if condition is satisfied
			}
			num_list.push(choice)//add the guess to the end of the array
			if (num_list.length === 1){ // for the first guess, just display 'getting hotter'
				document.getElementById("id_total_state").innerHTML = "Getting hotter"
			}
			
			else if(num_list.length === 2){ /*for the 2nd guess check the absolute diff in 2 cases i.e btwn the 1st guess and lucky num and 2nd guess and the lucky_num respectively
				*/
					var diff_1 = Math.abs(num_list[0]-lucky_num)
					var diff_2 = Math.abs(num_list[1]-lucky_num)
					if (diff_2 < diff_1){//if the absolute diff btwn the 2nd and the lucky no is smaller than that of the 1st and lucky num..we are closer hence hotter
						document.getElementById("id_total_state").innerHTML = "Getting hotter"
					}
					
					else if (diff_2 > diff_1){//if the absolute diff btwn the 2nd and the lucky no is larger than that of the 1st and lucky num..we are farther hence colder
							document.getElementById("id_total_state").innerHTML = "Getting colder"
						}
					

					
					else if (diff_1 === diff_2){//if the diff btwn the 2nd and the lucky no is equal to that of the 1st..none of the above
							document.getElementById("id_total_state").innerHTML = "Neither hotter nor colder"
						}
					
				}
			

			
			else if(num_list.length === 3){//follows the same pattern as above for the 2nd and 3rd additions
					var diff_1 = Math.abs(num_list[1]-lucky_num)
					var diff_2 = Math.abs(num_list[2]-lucky_num)
					if (diff_2 < diff_1){
						document.getElementById("id_total_state").innerHTML = "Getting hotter"
					}
					
					else if (diff_2 > diff_1){
							document.getElementById("id_total_state").innerHTML = "Getting colder"
						}
					

					
					else if (diff_1 === diff_2){
							document.getElementById("id_total_state").innerHTML = "Neither hotter nor colder"
						
						}
				   
				   num_list.shift()//the 1st insertion is removed to prevent build up hence clearing memory and restricting the program to 2 elements max
				}
			}
		}
	