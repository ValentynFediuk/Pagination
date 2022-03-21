import React, {useState} from 'react';

const Posts = ({loading, setPosts, posts, post, currentPosts, setCurrentPage, currentPage}) => {

    const deleteHandler = () => {
        setPosts(posts.filter((ps) => ps.id !== post.id))
        console.log(currentPosts.length)
        if (currentPosts.length == 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <li key={post.id} className='list-group-item'>
            {post.title}
            <button onClick={deleteHandler}>Remove</button>
        </li>
    );
};

export default Posts;