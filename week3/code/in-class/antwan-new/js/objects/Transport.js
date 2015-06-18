/**
 * @param owner
 * @param weight
 * @constructor
 */
function Transport(owner, weight)
{
    this.owner = owner;
    this.weight = weight;
}

/**
 * @param sound
 * @returns {string}
 */
Transport.prototype.horn = function (sound)
{
    return "geluid: " + sound;
};
