'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // interfejs za dohvatanje stvari
// ima metodu run()
// u toj metodi koristimo jedan getThings() kojeg importujemo
// getThings vraca formu koja ima NAME i AVATAR_URL
// metode getRepos() i getUsers() izvlace podatke, i prosledjuju getThings()


var _reposModule = require('./reposModule');

var _reposModule2 = _interopRequireDefault(_reposModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
    function Index() {
        _classCallCheck(this, Index);
    }

    _createClass(Index, [{
        key: 'display',
        value: function display(data) {
            console.log(data);
        }
    }, {
        key: 'main',
        value: function main() {
            new _reposModule2.default().getThings(this.display);
        }
    }]);

    return Index;
}();

new Index.main();
