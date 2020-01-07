'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        password: DataTypes.STRING,
        token: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING,
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
        tableName: 'users',
        hooks: {
            async beforeCreate(user) {
                const salt = bcrypt.genSaltSync(10);
                user.password = bcrypt.hashSync(user.password, salt);
            },
        }
    });

    User.associate = function (models) {};

    User.prototype.passwordMatches = async (password) => {
        try {
            return bcrypt.compareSync(password, this.password);
        } catch (error) {
            return false;
        }

    };

    User.prototype.isAdmin = () => {
        return this.role == 'App//Admin';
    };

    return User;
}