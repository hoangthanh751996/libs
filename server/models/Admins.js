module.exports = function (sequelize, DataTypes) {
    return sequelize.define('admins', {
        studentID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        middleName: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        studentName: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        userName: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        grade: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        sex: {
            type: DataTypes.INTEGER(2),
            allnowNull: true
        },
        telephone: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: true
        },
        levelUser: {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        note: {
            type: DataTypes.STRING(250),
            allowNull:true
        },
        pass: {
            type: DataTypes.STRING(250),
            allowNull:true
        }
    })
}