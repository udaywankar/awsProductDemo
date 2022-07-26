var controller=require("./contoller");
module.exports=function(app){

    app.route("/api/products")
    .get(controller.getAll)
    .post(controller.insert)

    app.route("/api/products/:id")
    .get(controller.getById)
    .put(controller.update)
    .delete(controller.delete)
};