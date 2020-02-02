import { Application } from "egg"

module.exports = (app: Application) => {
    require('./router/blog')(app)
    require('./router/admin')(app)
}