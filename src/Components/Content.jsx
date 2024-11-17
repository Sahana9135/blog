import React from "react";
import './Content.css';
import Head from './Header';
import { Link } from "react-router-dom";
import Author from "./Author";

function Main() {
    return (
        <>
            <Head />
            <div className="background">
                <h2>Welcome to the world of</h2>
                <div className="line"></div>
                <h1>Blog Create</h1>
                <br />
                <Link to="/blog" className="bg-btn">&nbsp;&nbsp;Create a Blog&nbsp;&nbsp;</Link>
            </div>

            {/* Categories Section  */}
            <section id="categories" className="categories">
                <h2>Popular Categories</h2><br /><br />
                <div class="category-list">
                    <a href="#" class="category-item">Technology</a>
                    <a href="#" class="category-item">Programming</a>
                    <a href="#" class="category-item">Design</a>
                    <a href="#" class="category-item">Lifestyle</a>
                </div>
            </section>
<br />
           <Author />
        </>
    )
}

export default Main;