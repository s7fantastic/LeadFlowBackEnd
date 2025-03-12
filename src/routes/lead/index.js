import express from 'express';
import { addLead, getLeads } from '../../controllers/lead/leadController.js';
const app = express()

app.get('/', getLeads)
app.post('/', addLead);


export default app;