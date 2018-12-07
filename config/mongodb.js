let username = 'nht1206';
let password = '01653374206a';
let getURL = () => {
    return `mongodb://${username}:${password}@ds163842.mlab.com:63842/noteapp`;
}
module.exports = {
    getURL: getURL
}