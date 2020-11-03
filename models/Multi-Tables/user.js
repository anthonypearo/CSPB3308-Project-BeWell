module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        userID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your first name with at least 1 character but no more than 255."
                }
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your last name with at least 1 character but no more than 255."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your email with at least 1 character but no more than 255."
                }
            }
        }
    }, {
        freezeTableName: true
    });
    return User;
};

