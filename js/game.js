class Street extends Phaser.Scene {
  preload() {
    this.load.image('background', 'assets/landscape.jpg');
    this.load.image('dude', 'assets/dude.png');
    this.load.image('room_background', 'assets/room.jpg');
  }

  create() {
    this.background = this.add.image(400, 300, 'background');
    this.player = this.add.sprite(300, 350, 'dude');
    this.player.displayWidth = 30;
    this.player.scaleY = this.player.scaleX;
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.x -= 1;
    } else if (this.cursors.right.isDown) {
      this.player.x += 1;
    } else if (this.cursors.up.isDown) {
      this.player.y -= 1;
    } else if (this.cursors.down.isDown) {
      this.player.y += 1;
    }

    if (this.player.x >= 350 && this.player.x <= 400 &&
      this.player.y <= 265) {
      this.background.setTexture('room_background');
    }
  }
}

class Room extends Phaser.Scene {
  constructor() {
    super('Room');
  }

  create() {
    this.add.image(400, 300, 'room_background');
  }
}
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: [Street, Room],
};

var game = new Phaser.Game(config);
