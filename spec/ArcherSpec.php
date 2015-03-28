<?php

namespace spec\Brunty\GulpTalk;

use Brunty\GulpTalk\Archer;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

/**
 * Class ArcherSpec
 * @mixin Archer
 * @package spec\Brunty\GulpTalk
 */
class ArcherSpec extends ObjectBehavior {

    function it_is_initializable()
    {
        $this->shouldHaveType('Brunty\GulpTalk\Archer');
    }

    function it_calls_kenny_loggins()
    {
        $this->laaaanaaaaa()->shouldReturn('Danger Zone!');
    }
}
