let opDienblad = false
let fanta : game.LedSprite = null
const tolerantie = 500

basic.forever(function () {
	
    basic.showString("3", 300)   
    basic.showString("2", 300)
    basic.showString("1", 300)
    basic.showIcon( IconNames.Yes, 300)

    fanta = new game.LedSprite(2,2)
    opDienblad = true

    while(opDienblad)
    {
        //kantel naar rechts
        if (input.acceleration(Dimension.X) > tolerantie )
        {
            //opDienblad = false
            if( fanta.get(LedSpriteProperty.X) >= 4 )
            {
                opDienblad = false
            }
            else
            {
                fanta.changeXBy(1)
            }

        }

        //kantel naar links
        if( input.acceleration(Dimension.X) < -tolerantie)
        {
            if( fanta.get(LedSpriteProperty.X) <= 0 )
            {
                opDienblad = false
            }
            else
            {
                fanta.changeXBy(-1)
            }
        }

        //kantel naar onder
        if (input.acceleration(Dimension.Y) > tolerantie) {
            if (fanta.get(LedSpriteProperty.Y) >= 4) {
                opDienblad = false
            }
            else {
                fanta.changeYBy(1)
            }
        }

        //kantel naar boven
        if (input.acceleration(Dimension.Y) < -tolerantie) {
            if (fanta.get(LedSpriteProperty.Y) <= 0) {
                opDienblad = false
            }
            else {
                fanta.changeYBy(-1)
            }
        }

        basic.pause(250);
        basic.clearScreen();
        basic.pause(50);
    }
    
    fanta.delete()
    game.gameOver()

})
