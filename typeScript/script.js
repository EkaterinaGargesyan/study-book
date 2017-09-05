var User = (function () {
    function User(id, name) {
        this._id = id;
        this._name = name;
    }
    User.prototype.getId = function () {
        return this._id;
    };
    User.prototype.getName = function () {
        return this._name;
    };
    return User;
}());
var tom = new User(1, "nnn");
console.log(typeof tom); //возвращает number
