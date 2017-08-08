module.exports = function (sequelize, DataTypes) {
    return sequelize.define('aadbe', {
        studentID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        studentName: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        grade: {
            type: DataTypes. STRING(50),
            allowNull: true
        },
        copyID: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        bookName: {
            type: DataTypes.STRING(50)
        }
    })
}