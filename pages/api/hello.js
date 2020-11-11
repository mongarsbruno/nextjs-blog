export default (req, res) => {
  const id = req.body.id
  console.log('request body: ',req)
  res.status(200).json({ text: 'Hello' })
}
