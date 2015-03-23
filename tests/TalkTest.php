<?php

use GulpTalk\Talk;

class TalkTest extends PHPUnit_Framework_TestCase {

    protected $talk;

    function setUp() {
        $this->talk = new Talk;
    }

    /** @test */
    function it_gets_us_a_totally_legitimate_random_number() {
        $expected = 4;

        $this->assertEquals($expected, $this->talk->getRandomNumber());
    }

    /** @test */
    function it_returns_the_best_superhero_ever() {
        $this->assertEquals('Iron Man', $this->talk->getTheBestSuperHero());
    }

    /** @test */
    function it_does_another_thing() {
        $this->assertTrue(true);
    }
}