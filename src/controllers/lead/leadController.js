import { failMessage, sendDataToClient, successMessage } from '../../../utils/message.js';
import Lead from '../../models/leadModel.js'

export const getLeads = async (req, res) => {
  const leads = await Lead.find({}).lean();
  await sendDataToClient(res, leads)
  return
}

export const addLead = async (req, res) => {
  let message = "Add Lead"
  try {

    
    const data  = req.body
    console.log(data);
    console.log(req.body);
    const existingLead = await Lead.findOne({ email: data.email });
    if (existingLead) {
      return res.status(400).json({ success: false, message: "This email has already been registered." });
    }
    await Lead.create({
      name: data.name,
      email: data.email,
      status: data.status,
    });
    return await successMessage(res, message);
  }
  catch (error) {
    await failMessage(res, message, error)
    return
  }
}
