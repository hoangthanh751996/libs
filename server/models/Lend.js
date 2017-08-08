module.exports = function (sequelize, DataTypes) {
    return sequelize.define('lend', {
        orderNumber: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        studentID: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        copyID: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        lentTime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        returnTime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        isReturn: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nhanvien: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
}