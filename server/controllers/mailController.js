
export default class MailController{
    constructor({req, res}){
        this._req = req
        this._res = res
    }

    execute(){

        this._res.status(200).json({response:"OK"})
    }
}