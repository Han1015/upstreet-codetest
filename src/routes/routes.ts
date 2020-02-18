import {Router, Response, Request} from "express";
import {check} from '../controllers/check';


const router = Router();

/**
 * @method Get
 * @header
 * @return
 */
router.get('/', (req:Request, res:Response) => {
    res.send('This is Customer Checks API. Please use /check to test.');
})
    
/**
 * @method Post
 * @header api_key
 * @param customer information, please refer to interface definition in models/checkResponse
 * @return {"KYCresult": true / false} or error message {"error":error message}
 */


router.post('/check', check);

export default router;
