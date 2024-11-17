import React from "react";
import './NewBlog.css';


function Blog(){
    return(
        <>
        <div className="ncontainer">
            <label htmlFor="">Blog Catogory</label>
            <br />
            <select className="nsp" id="">
                <option value=""></option>
                <option value="">All</option>
                <option value="">Technology</option>
                <option value="">StartUps</option>
                <option value="">Sports</option>
                <option value="">Food</option>
            </select>
            <br /><br />
            <label htmlFor="">Upload Image</label><br />
            <input type="image" src="" alt="" className="nip"/><br /><br />

            <label htmlFor="">Blog Title</label><br />
            <input type="text" name="" id="" placeholder="Type here"className="nip"/><br /><br />

            <label htmlFor="">Blog Title Description</label><br />
            <input type="text" placeholder="Description" className="nip"/><br /><br />

            <label htmlFor="">Blog Description</label><br />
            <textarea name="" className="ntaip" placeholder="Write content here"></textarea><br /><br />


            <button className="blog-btn">ADD</button>
        </div>
        </>
    )

}

export default Blog;