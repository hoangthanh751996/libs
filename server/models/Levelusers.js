module.exports = function (sequelize, DataTypes) {
    return sequelize.define('levelusers', {
        levelUser: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        define: {
            type: DataTypes.STRING(250),
            allowNull:true
        }
    })
}