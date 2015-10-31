<?php
namespace spec\Brunty\GulpTalk;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;
use Brunty\GulpTalk\Talk;

/**
 * Class TalkSpec
 * @mixin Talk
 * @package spec\Brunty\GulpTalk
 */
class TalkSpec extends ObjectBehavior
{

    function it_is_initializable()
    {
        $this->shouldHaveType('Brunty\GulpTalk\Talk');
    }

    function it_get_us_a_totally_legit_random_number()
    {
        $this->getRandomNumber()->shouldReturn(4);
    }

}
