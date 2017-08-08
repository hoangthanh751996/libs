module.exports = function (sequelize, DataTypes) {
    return sequelize.define('copies', {
        bookID: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        copyID: {
            type: DataTypes.STRING(250),
            allowNull:true
        },
        note: {
            type: DataTypes.STRING(250),
            allowNull:true
        },
        checked: {
            type: DataTypes.INTEGER,
            allowNull:true
        }
    })
}