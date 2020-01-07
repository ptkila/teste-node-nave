module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        candidateId: {
            field: 'candidate_id',
            type: DataTypes.INTEGER,
        },
        jobId: {
            field: 'job_id',
            type: DataTypes.INTEGER,
        },
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
        tableName: 'application',
    });

    Application.associate = function (models) {};

    return Application;
}