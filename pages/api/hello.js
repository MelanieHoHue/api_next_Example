export default function handler (req, res) {
    //res.status(200).json({ text: 'Hello' })
    if(!req.body.name) {
        return res.status(400).send('Name is required');
    }
    res.status(201).send(`Thank you ${req.body.name}`);
    //res.send();
}