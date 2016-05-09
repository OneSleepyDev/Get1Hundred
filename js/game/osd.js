var score = 0;
var scoreText = null;
var timer;
var allotTime = 5400;

function preload_osd() {}

function create_osd() {
    var textColor1 = '#00BFFF'; // '#ff3300' red -  '#8ED6FF'
    var textColor2 = '#A4A4A4'; // '#ff9900' orange - old '#004CB3'

    // Score!
    scoreText = game.add.text(this.game.width / 8, this.game.height / 16, "Score: 0");
    scoreText.anchor.set(0.5);
    scoreText.align = 'center';
    scoreText.font = 'Arial';
    scoreText.fontWeight = 'bold';
    scoreText.fontSize = 24;
    var grd = scoreText.context.createLinearGradient(0, 0, 0, scoreText.height);
    grd.addColorStop(0, textColor1);
    grd.addColorStop(1, textColor2);
    scoreText.fill = grd;

    // Timer!
    timer = game.add.text(this.game.width / 2, this.game.height / 16, "Timer: 90")
    timer.anchor.set(0.5);
    timer.align = 'center';
    timer.font = 'Arial';
    timer.fontWeight = 'bold';
    timer.fontSize = 24;
    var grd2 = timer.context.createLinearGradient(0, 0, 0, timer.height);
    grd2.addColorStop(0, textColor1);
    grd2.addColorStop(1, textColor2);
    timer.fill = grd2;
}

function update_osd() {
    allotTime--;
    timer.setText("Timer: " + parseInt(allotTime / 60) + " seconds");
}