module.exports = cds.service.impl(function (srv) {
    srv.before("READ", "Books", async (req) => {
        const where = req.query.SELECT.where;

    if (!where) {
      console.log("No filters");
      return;
    }

    console.log("Filters exist:", where);
    });
 
})