import { Post } from '../../db/models/post.model.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('createdBy');
  res.json({ message: 'All Posts', posts });
};

export const addPost = async (req, res) => {
  const added = await Post.create({ ...req.body, createdBy: req.user._id });
  res.status(201).json({ message: 'added successfully', added });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const updated = await Post.findByIdAndUpdate(id, { ...req.body }, { new: true });
  res.json({ message: 'updated successfully', updated });
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Post.findOneAndDelete({ _id: id, createdBy: req.user._id });
  if (deletedPost) return res.json({ message: 'deleted successfully', deletedPost });
  res.status(404).json({ message: 'post not found' });
};



    export{
        getPosts,
        addPost,
        updatePost,
        deletePost
    }