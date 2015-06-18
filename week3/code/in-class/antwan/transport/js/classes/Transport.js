/**
 * @param owner
 * @param weight
 * @constructor
 */
function Transport(owner, weight) {
    this.owner = owner;
    this.weight = weight;
}

/**
 * @param hornSound
 * @returns {string}
 */
Transport.prototype.horn = function (hornSound) {
    return "Horn: " + hornSound;
};
