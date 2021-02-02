const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('background', 'assets/landscape.jpg');
  this.load.image('dude', 'assets/dude.png');
}

function create ()
{
  this.add.image(400, 300, 'background');
  player = this.add.sprite(100, 45, 'dude');
  player.displayWidth = 30;
  player.scaleY = player.scaleX;
  cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
  if (cursors.left.isDown)
  {
    console.log("left");
    player.x -= 1;
  }
  else if (cursors.right.isDown)
  {
    player.x += 1;
  }
  else if (cursors.up.isDown)
  {
    player.y -= 1;
  }
  else if (cursors.down.isDown)
  {
    player.y += 1;
  }
}


