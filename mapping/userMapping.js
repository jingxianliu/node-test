
var userMapping = {
    insert:'INSERT INTO users(username, password) VALUES(?,?)',
    updateUserStatu:'update users set statu = 1 where id=?',
    update: 'update users set username=?, password=? where id=?',
    queryById: 'select * from users where id=? ',
    queryAll: 'select * from users',
    loginCheck:'select id,username,statu from users where username=? and password=?',
    delete: 'delete  from users where id= ?',
};

module.exports = userMapping;