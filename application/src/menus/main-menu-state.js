'use strict';

var Phaser = require('phaser');

var DrawImageState = require('../examples/draw-image-state');
var CarDrivingState = require('../examples/car-driving-state');
var TrackMarkerState = require('../examples/track-marker-state');
var BathroomObstacleSetState = require('../examples/bathroom-obstacle-set-state');

var MainMenuState = function()
{
    Phaser.State.apply(this, arguments);
};

MainMenuState.prototype = Object.create(Phaser.State.prototype);

MainMenuState.prototype.preload = function()
{
    this.load.image('button-image-example', 'assets/img/draw-image-example-button.png');
    this.load.image('button-driving-example', 'assets/img/car-driving-example-button.png');
    this.load.image('button-track-marker-example', 'assets/img/track-marker-example-button.png');
    this.load.image('button-bathroom-obstacle-set', 'assets/img/bathroom-obstacle-set-button.png');
};

MainMenuState.prototype.create = function()
{
    this.add.button(10, 10, 'button-image-example', this.onImageExampleClick);

    this.add.button(120, 10, 'button-driving-example', this.onDrivingExampleClick);

    this.add.button(230, 10, 'button-track-marker-example', this.onTrackMarkerExampleClick);

    this.add.button(10, 120, 'button-bathroom-obstacle-set', this.onBathroomObstacleSetClick);
};

MainMenuState.prototype.onImageExampleClick = function()
{
    this.game.state.add('state-image-example', new DrawImageState(), true);
};

MainMenuState.prototype.onDrivingExampleClick = function()
{
    this.game.state.add('car-driving-example', new CarDrivingState(), true);
};

MainMenuState.prototype.onTrackMarkerExampleClick = function()
{
    this.game.state.add('simple-track-example', new TrackMarkerState(), true);
};

MainMenuState.prototype.onBathroomObstacleSetClick = function()
{
    this.game.state.add('bathroom-obstacle-set-example', new BathroomObstacleSetState(), true);
};

module.exports = MainMenuState;
