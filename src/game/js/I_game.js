//Create a new game
var game = new Phaser.Game(720, 480, Phaser.AUTO, 'gameDiv');


//Add each state to game. 
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('menuHelp', menuHelpState);
game.state.add('menuCredits', menuCreditsState);
game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('lose', loseState)
game.state.add('win', winState);

// Start game
game.state.start('boot');

	function addOneCar(x, y, sprite, carDir) {
	    // Create a pipe at the position x and y
	    var carToAdd = game.add.sprite(x, y, sprite);

	    // Add the pipe to our previously created group
	    cars.add(carToAdd);

	    // Enable physics on the pipe 
	    game.physics.arcade.enable(carToAdd);

	    // Add velocity to the pipe to make it move left
	    if(carDir % 2 == 0){
	    	carToAdd.body.velocity.x = carSpeedRight;
		}else{
			carToAdd.body.velocity.x = carSpeedLeft;
		}


	    // Automatically kill the pipe when it's no longer visible 
	    carToAdd.checkWorldBounds = true;
	    carToAdd.outOfBoundsKill = true;
	};

	function spawnLevel1() {
	    // Randomly pick a number between 1 and 4
	    // This will be the direction car enters
	    var dir = Math.floor(Math.random() * 4) + 1;

	    // Add the car
	    // addOneCar(0, 159)

	    if(dir == 1){
			addOneCar(720, 290, randomCarLeft(), dir)
		}else if(dir == 2){
			addOneCar(0, 322, randomCarRight(), dir)
		}else if(dir == 3){
			addOneCar(720, 130, randomCarLeft(), dir)
		}else{
			addOneCar(0, 161, randomCarRight(), dir)
		}

	     
	};

	function spawnLevel2() {
	    // Randomly pick a number between 1 and 4
	    // This will be the direction car enters
	    var dir = Math.floor(Math.random() * 6) + 1;

	    // Add the car
	    // addOneCar(0, 159)

	    if(dir == 1){
			addOneCar(720, 82, randomCarLeft(), dir)
		}else if(dir == 2){
			addOneCar(0, 122, randomCarRight(), dir)
		}else if(dir == 3){
			addOneCar(720, 162, randomCarLeft(), dir)
		}else if(dir == 4){
			addOneCar(0, 305, randomCarRight(), dir)
		}else if(dir == 5){
			addOneCar(720, 347, randomCarLeft(), dir)
		}else {
			addOneCar(0,387, randomCarRight(), dir)
		}

	     
	};


	function spawnLevel3() {
	    // Randomly pick a number between 1 and 4
	    // This will be the direction car enters
	    var dir = Math.floor(Math.random() * 8) + 1;

	    // Add the car
	    // addOneCar(0, 159)

	    if(dir == 1){
			addOneCar(720, 115, randomCarLeft(), dir)
		}else if(dir == 3){
			addOneCar(720, 144, randomCarLeft(), dir)
		}else if(dir == 2){
			addOneCar(0, 179, randomCarRight(), dir)
		}else if(dir == 4){
			addOneCar(0, 208, randomCarRight(), dir)
		}else if(dir == 5){
			addOneCar(720, 322, randomCarLeft(), dir)
		}else if(dir == 7){
			addOneCar(720, 354, randomCarLeft(), dir)
		}else if(dir == 6){
			addOneCar(0, 386, randomCarRight(), dir)
		}else 
			addOneCar(0, 416, randomCarRight(), dir)

	     
	};

	game.load.image('car31', 'assets/pictures/cars/car3_1.png');
	function lol() {
		return 'car31';
	}

	function randomCarLeft() {
		if(level == 1) {
			levelBuffer = 3;
		}
		else if(level == 2) {
			levelBuffer = 5;
		}
		else {
			levelBuffer = 8;
		}
		
		index = Math.floor(Math.random() * levelBuffer) + 1;
		
		if(index == 1) {
			return 'car12';
		}
		else if(index == 2) {
			return 'car22';
		}
		else if(index == 3) {
			return 'car32';
		}
		else if(index == 4) {
			return 'car42';
		}
		else if(index == 5) {
			return 'car52';
		}
		else if(index == 6) {
			return 'car62';
		}
		else if(index == 7) {
			return 'car72';
		}
		else {
			return 'car82';
		}
	}

	function randomCarRight() {
		if(level == 1) {
			levelBuffer = 3;
		}
		else if(level == 2) {
			levelBuffer = 5;
		}
		else {
			levelBuffer = 8;
		}
		
		index = Math.floor(Math.random() * levelBuffer) + 1;
		
		if(index == 1) {
			return 'car11';
		}
		else if(index == 2) {
			return 'car21';
		}
		else if(index == 3) {
			return 'car31';
		}
		else if(index == 4) {
			return 'car41';
		}
		else if(index == 5) {
			return 'car51';
		}
		else if(index == 6) {
			return 'car61';
		}
		else if(index == 7) {
			return 'car71';
		}else {
			return 'car81';
		}	
	}

	

	function addPothole(x, y) {
	    // Create a pothole at the position x and y
	    var potholeToAdd = game.add.sprite(x, y, 'pothole');

	    // Add the pothole to our previously created group
	    potholes.add(potholeToAdd);

	    // Enable physics on the pothole
	    game.physics.arcade.enable(potholeToAdd);

	};

	function addPotholes() {
	    // Randomly pick a number between 1 and 2
	    // This will select upper or lower road
	    var upOrDown = game.rnd.integerInRange(0,1);

	    if(upOrDown >= 0.5){
	    	addPothole(game.rnd.integerInRange(10,690), game.rnd.integerInRange(130,170) )
	    }else{
	    	addPothole(game.rnd.integerInRange(10,690), game.rnd.integerInRange(290,300) )
	    }
	     
	};

	function addPowerup(x,y,type){
		if(type == 'SpeedSign'){
			if(marks.length < 2) {
			var mark = game.add.sprite(x, y, 'SpeedSign');
			marks.add(mark);
			}
		}else if(type == 'energyDrink'){
			if(drinks.length < 2) {
			var drink = game.add.sprite(x, y, 'energyDrink')
			drinks.add(drink);
			}
		}

	};

	function addPowerups(){
		var choose = game.rnd.integerInRange(0,1);

		if(choose >= 0.5){
	    	addPowerup(game.rnd.integerInRange(10,690), game.rnd.integerInRange(10,460), 'SpeedSign' )
	    }else{
	    	addPowerup(game.rnd.integerInRange(10,690), game.rnd.integerInRange(10,460), 'energyDrink');

		};
	};


	function direction(){
		return Math.floor(Math.random() * 4) + 1;
	};

	function randSpeed(){
		return Math.floor(Math.random() * 30) + 30
	};

	function checkPos(car) {
		if(car.x > 760){
			car.x = -32
		}else if(car.x < -40){
			car.x = 752
		}
	};


	function die(player, car) {
		game.state.start('lose');
	};

	function energyBoost(player, drink) {
		drink.kill()
		if(playerSpeed == 150) {
		playerSpeed = playerSpeed * 2;

		this.time.events.add(2000, function() {
			playerSpeed = playerSpeed * 0.5;
		});
		}
	};

	function speedAlert(player, mark) {
		mark.kill()
		cars.forEach(function(item) {
			if(item.body.velocity.x < 0){
				item.body.velocity.x = carSpeedLeft / 2
			}else{
				item.body.velocity.x = carSpeedRight / 2
			}
		})

		this.time.events.add(2000, function() {
			cars.forEach(function(item) {
				if(item.body.velocity.x < 0){
					item.body.velocity.x = carSpeedLeft;
				}else{
					item.body.velocity.x = carSpeedRight;
				};
			});
		});
	};


	function reduceScore(car, pothole) {
		potholesRepaired -= 0.5
	};

	function updateScore(player, pothole){
		pothole.kill()
		potholesRepaired += 50
	};


	function updateText() {

	    text.setText("Score: " + Math.floor(potholesRepaired));

	};
