import express from 'express'

const applicationjob = express.Router();
import {applyjob, deleteapplication, getapplicationsoflogineduser, updateapplication} from '../controller/jobsapplicationcontroller.js'



applicationjob.post('/apply/:jobid/:userid',applyjob);
applicationjob.get('/apply/:userid',getapplicationsoflogineduser);
applicationjob.put('/updateapplication/:id',updateapplication);
applicationjob.delete('/deleteapplication/:id',deleteapplication);

export default applicationjob