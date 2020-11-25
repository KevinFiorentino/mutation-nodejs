const { algorithmIdentifyDNA } = require('../models/mutation.model');

const identifyDNA = async (req, res) => {
  try {
    const DNA = req.body.dna;
    const resultDNA = await algorithmIdentifyDNA(DNA);
    res.status(200).send({ result: resultDNA });
  }
  catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  identifyDNA
}
