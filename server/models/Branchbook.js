module.exports = function (sequelize, DataTypes) {
    return sequelize.define('branchbook', {
        branchID: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        branchName: {
            type: DataTypes.STRING(250),
            allowNull:true
        }
    })
}