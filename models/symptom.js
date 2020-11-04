module.exports = function(sequelize, DataTypes) {
    let Symptom = sequelize.define("Symptom", {
        symptom_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your symptom with at least 1 character but no more than 255."
                }
            }
        }
    });
    return Symptom;
};
