const {DataTypes} = require("sequelize")
const sequelize = require("../services/pool")

const Task = sequelize.define('Task',{
    task: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
    },
    {
        tableName: 'tasks',
        timestamps: true,
        createdAt: false, // can be false
        updatedAt: false // can be false
    }
)



module.exports = Task