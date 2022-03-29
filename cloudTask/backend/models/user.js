const db = require('../utils/database');

module.exports = class User {
  constructor(university_id, nickname,admin_name, password) {
    this.university_id = university_id;
    this.nickname = nickname;
    this.admin_name = admin_name;
    this.password = password;
  }
  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO admin (university_id, nickname, admin_name,password) VALUES (?, ?, ?,?)',
      [user.university_id, user.nickname, user.admin_name,user.password]
    );
  }
};