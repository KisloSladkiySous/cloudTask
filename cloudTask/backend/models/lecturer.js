const db = require('../utils/database');

module.exports = class Lecturer {
  constructor(name_teacher, id_university,birth_date, qualification,post,offer_number,cathedra_id ) {
    this.name_teacher = name_teacher;
    this.id_university = id_university;
    this.birth_date = birth_date;
    this.qualification = qualification;
    this.post = post;
    this.offer_number = offer_number;
    this.cathedra_id = cathedra_id;
  }
  static find(name_teacher) {
    return db.execute('SELECT * FROM teachers WHERE name_teacher = ?', [name_teacher]);
  }

//   static save(user) {
//     return db.execute(
//       'INSERT INTO admin (university_id, nickname, admin_name,password) VALUES (?, ?, ?,?)',
//       [user.university_id, user.nickname, user.admin_name,user.password]
//     );
//   }
};