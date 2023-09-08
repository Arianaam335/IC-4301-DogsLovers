async function getBlackListById(queryId){
    let blackListQuery = await conn.collection('blackList').find({
        listOf : queryId
    });
    let blackList = await blackListQuery.toArray();
    return blackList;
}
async function getCompleteBlackList(conn){
    let blackListQuery = await conn.collection('blackList').find();
    let blackList = await blackListQuery.toArray();
    return blackList;
}

module.exports = {
    getBlackListById,
    getCompleteBlackList
}