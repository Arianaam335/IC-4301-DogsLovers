async function getFosterHomes(conn){
    let fosterHomesQuery = await conn.collection('fosterHomes').find();
    let fosterHomesList = await fosterHomesQuery.toArray();

    return fosterHomesList;
}

async function createFosterHome(idApplicant,mascotType,mascotSize,requiresDonation,conn){
    await conn.collection('fosterHomes').insertOne({
        idApplicant: idApplicant,
        mascotType: mascotType,
        mascotSize: mascotSize,
        requiresDonation: requiresDonation
    });
}

async function deleteFosterHome(id,conn){
    await conn.collection('fosterHomes').deleteOne({
        _id: id
    });
}

async function updateFosterHome(conn){
}

module.exports = {
    getFosterHomes,
    createFosterHome,
    deleteFosterHome,
    updateFosterHome
}
