module.exports = function(sequelize, DataTypes) {
    let Illness = sequelize.define("Illness", {

        illnessName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 45],
                    msg:
                        "Please select an illness."
                }
            }
        }
    });
    return Illness;
};

