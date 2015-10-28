/**
 * @file github下载
 * @author fengshangshi
 */
var util = require('./util');

var Github = module.exports = function(opts) {
	exports.repos = opts.repos || 'https://codeload.github.com/';
};

Github.prototype.download = function(id, cb, progress) {
	id += '/zip/master';
	var url = exports.repos + id;
	util.download(url, cb, progress);
};
