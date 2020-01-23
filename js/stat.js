'use strict';

var CLOUD = {
  positionX: 100,
  positionY: 10,
  width: 420,
  height: 270
};

var GAP = 10;
var BAR_GAP = 50;
var FONT_SIZE = 16;
var BAR_WIDTH = 40;
var PADDING = 20;
var HEADER_HEIGHT = CLOUD.positionY + PADDING + FONT_SIZE + GAP + FONT_SIZE;
var BAR_MAX_HEIGHT = 150;
var FILL_RED = 'rgba(255, 0, 0, 1)';
var BLACK_COLOR = '#000000';

var renderCloud = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD.positionX + GAP, CLOUD.positionY + GAP, CLOUD.width, CLOUD.height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(CLOUD.positionX, CLOUD.positionY, CLOUD.width, CLOUD.height);
  ctx.font = 'Bold 16px PT Mono';
  ctx.fillStyle = BLACK_COLOR;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD.positionX + BAR_GAP, CLOUD.positionY + PADDING);
  ctx.fillText('Список результатов:', CLOUD.positionX + BAR_GAP, CLOUD.positionY + PADDING + FONT_SIZE);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getBarHeight = function (time, maximum) {
  return BAR_MAX_HEIGHT * Math.floor(time) / maximum;
};

var getBarPositionY = function () {
  return CLOUD.positionY + CLOUD.height - BAR_MAX_HEIGHT + PADDING + GAP + HEADER_HEIGHT + GAP;
};

var getBarPositionX = function (number) {
  return CLOUD.positionX + BAR_GAP + (BAR_GAP + BAR_WIDTH) * number;
};

var getRandomBlue = function () {
  return 'hsl(255, ' + (Math.random() * (100 - 1) + 1) + '%, 50%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(Math.floor(times[i]), getBarPositionX(i), CLOUD.positionY + HEADER_HEIGHT + (BAR_MAX_HEIGHT - getBarHeight(times[i], maxTime)) - GAP);
    ctx.fillText(names[i], getBarPositionX(i), getBarPositionY() + GAP);
    ctx.fillStyle = (names[i] === 'Вы') ? FILL_RED : getRandomBlue();
    ctx.fillRect(getBarPositionX(i), getBarPositionY(), BAR_WIDTH, getBarHeight(times[i], maxTime) * -1);
  }
};
