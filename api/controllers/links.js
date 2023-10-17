import { db } from "../db.js"


export const getLinks = (req, res) => {
    const q = req.params.parentId ? {
        text: "SELECT id, parentid, title FROM blog_schema.posts WHERE parentid = ($1)",
        values: [req.params.parentId]
    } : {
        text: "SELECT id, parentid, title FROM blog_schema.posts"
    }

    // TODO: check permission to view private posts 

    db.query(q)
    .then(result => {
        return res.status(200).json(result.rows)
    })
    .catch(err => {
        return console.log(err)
    })
}