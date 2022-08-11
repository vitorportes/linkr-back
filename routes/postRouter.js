import { Router } from 'express';
import {
  publishPost,
  likePost,
  dislikePost,
  returnLikes,
} from '../controllers/postController.js';
import { tokenValidationMiddleware } from '../middlewares/tokenValidator.js';
import { schemaValidator } from '../middlewares/schemaValidator.js';
import linkSchema from '../schemas/linkSchema.js';
import { getPosts } from "../controllers/postController.js";

const postRouter = Router();

postRouter.post('/post', tokenValidationMiddleware, publishPost);
postRouter.post('/like', tokenValidationMiddleware, likePost);
postRouter.post('/dislike', tokenValidationMiddleware, dislikePost);
postRouter.get('/likes/:postId', tokenValidationMiddleware, returnLikes);

postRouter.get("/timeline", tokenValidationMiddleware, getPosts);

export default postRouter;
