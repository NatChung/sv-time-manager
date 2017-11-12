import email from 'emailjs/email'
import { log } from 'util';
import config from './config.json'

export default class MailController{
    constructor({req, res}){
        this._req = req
        this._res = res
    }

    content(){
        let replyContent = ""
        Object.keys(this._req.body).map((name, i) => {
            replyContent += `${name}:\n`
            this._req.body[name].done.map((_done, i) => {
                replyContent += `  ${i}.${_done.item}\n`
            })
            replyContent += `\n`
        })

        return replyContent
    }

    today(){
       return( new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
    }

    execute(){
        email.server.connect(config)
         .send({
            text:    this.content(), 
            from:    "Nat <nat@starvedia.com>", 
            to:      "NatCung <nat.chung1@gmail.com>",
            subject: this.today()+" RD daily"
         }, (err, message) => {
             if(err) throw err
             this._res.status(200).json({response:"OK"})
         })
    }
}