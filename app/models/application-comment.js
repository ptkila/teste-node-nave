module.exports = (sequelize, DataTypes) => {
    const Application_Comment = sequelize.define('Application_Comment', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        applicationId: {
            field:'application_id', 
            type: DataTypes.INTEGER,
        },
        text: DataTypes.TEXT,
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
        }
    }, {
        tableName: 'application_comments',
    });

    Application_Comment.associate = function (models) {};

    return Application_Comment;
}