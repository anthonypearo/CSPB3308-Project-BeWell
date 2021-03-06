var db = require("../models");

insertData = async () =>  {
    let entries = []
    entries.push(await db.Entry.create({
        firstname: "FirstOne",
        lastname: "LastOne",
        email: "first.last1@email.com",
        date: "2020-11-05",
        airline: "Alaska",
        flightNumber: "AA1474",
        illnessName: "Influenza-B",
        symptom_name: "Fever",
        createdAt: '2020-11-06 20:37:34',
        updatedAt: '2020-11-06 20:37:34'
    }));

    entries.push(await db.Entry.create({
        firstname: "FirstTwo",
        lastname: "LastTwo",
        email: "first.last2@email.com",
        date: "2020-11-04",
        airline: "Alaska",
        flightNumber: "AA1474",
        illnessName: "Influenza-A",
        symptom_name: "Cough",
        createdAt: '2020-11-06 20:37:34',
        updatedAt: '2020-11-06 20:37:34'
    }));

    entries.push(await db.Entry.create({
        firstname: "FirstThree",
        lastname: "LastThree",
        email: "first.last3@email.com",
        date: "2020-11-05",
        airline: "United",
        flightNumber: "UA2221",
        illnessName: "COVID-19",
        symptom_name: "Cough",
        createdAt: '2020-11-06 20:37:34',
        updatedAt: '2020-11-06 20:37:34'
    }));

    entries.push(await db.Entry.create({
        firstname: "FirstFour",
        lastname: "LastFour",
        email: "first.last4@email.com",
        date: "2020-11-03",
        airline: "Delta",
        flightNumber: "DL1",
        illnessName: "COVID-19",
        symptom_name: "Cough",
        createdAt: '2020-11-06 20:37:34',
        updatedAt: '2020-11-06 20:37:34'
    }));

    return entries;
};

getEmail = async () =>   {
    return await db.Entry.findAll({
        attributes: ["email"],
        where: {firstname: "FirstOne"}
    });
};

getLastname = async () =>  {
    return await db.Entry.findAll({
        attributes: ["lastname"],
        where: {email: "first.last3@email.com"}
    });
};

getFlight = async () =>  {
    return await db.Entry.findAll({
        attributes: ["flightNumber"],
        where: {lastname: "LastFour"}
    });
};

removeEntries = async(entries) => {
    for (let i = 0; i < entries.length; i++) {
        let entry = entries[i];
        await entry.destroy();
    }
}

describe("Test suite for sequelize", () => {
    let entries = [];


    beforeAll(async () => {  //test setup
        await db.sequelize.sync({ force: true });
        entries = await insertData();
    })

    it("Should get a valid last name for user with email = first.last3@email.com", async () => {
        let entry = await getLastname();
        expect(entry[0].lastname).toMatch("LastThree");
    })

    it("Should get a valid email for user with firstname = FirstOne", async () => {
        let entry = await getEmail();
        expect(entry[0].email).toMatch("first.last1@email.com");
    })

    it("Should get a valid flight number for user with lastname = LastFour", async () => {
        let entry = await getFlight();
        expect(entry[0].flightNumber).toMatch("DL1");
    })


    afterAll(async () => { //test teardown
        await removeEntries(entries);
        await db.sequelize.close();
    })
});

