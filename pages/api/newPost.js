export default (req, res) => {
  console.log('request body',req.body)
  res.status(200).json({ text: req.body.id })
}