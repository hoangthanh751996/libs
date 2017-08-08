module.exports = function (sequelize, DataTypes) {
    return sequelize.define('booktype', {
        bookTypeID: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        bookTypeName: {
            type: DataTypes.STRING(250),
            allowNull:true
        }
    })
}