module.exports = cds.service.impl(function (srv) {
    srv.before("READ", "Books", async (req) => {
        const where = req.query?.SELECT?.where;

    if (!where || where === undefined) {
      console.log("No filters");
      req.error(404, "Sem filtros");
    }

    console.log("Filters exist:", where);
    });
 
})