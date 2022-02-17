export default async (req, res) => {
   if(!req.query.todo) {
       return res.status(400).send("todo parameter required.")
   }
   let todo = encodeURI(req.query.todo)

   const token = "AYyzACQgMzQ5OTg0MjAtNmRmYS00Y2I1LTg3NDQtNTQzMzlmMTczOGUzYTc4OTc5ZWJjNTE2NDE5Zjk4MGZhODY0MjU0M2JkNzE=";
   const url = "https://us1-clean-lamprey-36019.upstash.io/lrem/todo/1/" + todo + "?_token=" + token;

   return fetch(url)
       .then(r => r.json())
       .then(data => {
           let result = JSON.stringify(data.result)
           return res.status(200).json(result)
       })
}