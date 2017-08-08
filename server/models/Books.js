module.exports = function (sequelize, DataTypes) {
    return sequelize.define('books', {
        bookID: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        bookName: {
            type: DataTypes.STRING(250),
            allowNull:true
        },
        publisher: {
            type: DataTypes.STRING(250),
            allowNull:true
        },
        author: {
            type: DataTypes.STRING(250),
            allowNull:true
        },
        years: {
            type: DataTypes.INTERGER,
            allowNull: true
        },
        branchID: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        bookTypeID: {
            type: DataTypes.STRING(50),
            allowNull:true
        },
        pageNumber: {
            type: DataTypes.INTERGER,
            allowNull: true
        },
        numbers: {
            type: DataTypes.INTERGER,
            allowNull: true
        },
        cost: {
            type: DataTypes.INTERGER,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(250),
            allowNull: true
        }
    })
}