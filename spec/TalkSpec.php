<?php

namespace spec\Brunty\GulpTalk;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

/**
 * Class TalkSpec
 * @package spec\Brunty\GulpTalk
 */
class TalkSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType('Brunty\GulpTalk\Talk');
    }

    function it_gets_us_a_totally_legitimate_random_number()
    {
        $this->getRandomNumber()->shouldReturn(4);
    }

    function laaaaanaaaaaaaaaaaaa()
    {
        $this->laaaaanaaaaaaaaaaaaa()->shouldReturn('Danger zone!');
    }
}
