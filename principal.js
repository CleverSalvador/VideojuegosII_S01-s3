var juego = new Phaser.Game(1920,768,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var boton;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;

var estadoPrincipal={
    preload: function(){
        //Carga los recursos
        juego.load.image('fondo','img/bg_fondo.webp');
        juego.load.spritesheet('pajaros','img/player_pajaro.png',299,201);
    },
    create: function(){
        //mostrar pantalla
        fondoJuego=juego.add.tileSprite(0,0,1920,768,'fondo');
        flappy=juego.add.sprite(100,100,'pajaros');
        flappy.frame=1;
        flappy.animations.add('vuelo',[0,1,2,3],10,true);
        teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        juego.physics.startSystem(Phaser.Physics.ARCADE);
        //Colision con la pantalla
        juego.physics.arcade.enable(flappy);
        flappy.body.collideWorldBounds=true;
    },
    update: function(){
        //animamos el juego
        fondoJuego.tilePosition.x-=1;
        //flappy.angle+=0.2;
        flappy.animations.play('vuelo');
        if(teclaDerecha.isDown) {
            flappy.scale.setTo(1,1);
            flappy.x+=2;
        } else if (teclaIzquierda.isDown) {
            flappy.scale.setTo(-1,1);
            flappy.x-=2;
        } else if (teclaArriba.isDown) {
            flappy.y-=2;
        } else if (teclaAbajo.isDown) {
            flappy.y+=2;
        }
    }
};
juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');