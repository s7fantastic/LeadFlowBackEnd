import { failMessage, sendDataToClient, successMessage } from '../../../utils/message.js';
import Lead from '../../models/leadModel.js'

export const getLeads = async (req, res) => {
  const leads = await Lead.find({}).lean();
  await sendDataToClient(res, leads)
  return
}

export const addLead = async (req, res) => {
  try {
    const data  = req.body
    const existingLead = await Lead.findOne({ email: data.email });
    if (existingLead) {
      await failMessage(res,"This email has already been registered.")
    }
    await Lead.create({
      name: data.name,
      email: data.email,
      status: data.status,
    });
    return await successMessage(res, "Adding Lead");
  }
  catch (error) {
    await failMessage(res, error)
    return
  }
}
