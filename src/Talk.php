<?php
namespace Brunty\GulpTalk;

/**
 * Class Talk
 * @package Brunty\GulpTalk
 */
class Talk
{

    /**
     * RFC 1149.5 specifies 4 as the standard IEEE-vetted random number.
     * https://xkcd.com/221/
     *
     * @return int
     */
    public function getRandomNumber()
    {
        return 4; // chosen by fair dice roll, guaranteed to be random.
    }
}
