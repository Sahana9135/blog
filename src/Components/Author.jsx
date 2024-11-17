import React from 'react'
import './Author.css';
// function viewAuthorPosts(authorName) {
//     alert(`Viewing posts by ${authorName}.`);
//     // Here, you could add code to load posts by this author,
//     // such as dynamically filtering or fetching author-specific content.
//   }

function Author() {

    
      
  return (
    <>

     {/* <!-- Authors Section --> */}
     <section id="authors" className="authors-section">
                <h2>Meet Our Authors</h2>
                <p>Learn more about the writers behind the content.</p>

                <div className="author-grid">
                    {/* <!-- Sample Author Cards --> */}
                    <div className="author-card">
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\subasri.jfif" alt="subasri" />
                        <h3>Subasri</h3>
                        <p>Sports & Food Blogger</p>
                    </div>
                    <div className="author-card">
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\Ahila.jfif" alt="Ahila" />
                        <h3>Ahila</h3>
                        <p>Food Blogger</p>
                    </div>
                    <div className="author-card">
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\Kavya.jfif" alt="Kavya" />
                        <h3>Kavya</h3>
                        <p>Full Stack Developer & Reviewer</p>
                    </div>
                    <div className="author-card" >
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\Harshini.jfif" alt="Harshini" />
                        <h3>Harshini</h3>
                        <p>Full Stack Developer & Teacher</p>
                    </div>
                    <div className="author-card" >
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\Gopika.jfif" alt="Gopika" />
                        <h3>Gopika</h3>
                        <p>Cloud Engineer and Startups Blogger</p>
                    </div>
                    <div className="author-card">
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\Bairavi.jfif" alt="Bairavi" />
                        <h3>Bairavi</h3>
                        <p>Full Stack Developer & Teacher & Sports Blogger</p>
                    </div>
                    <div className="author-card">
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\Vardhani.jfif" alt="Vardhani" />
                        <h3>Vardhani</h3>
                        <p>Ideas of Lifestyle Blogger</p>
                    </div>
                    <div className="author-card">
                        <img src="C:\Users\admin\Desktop\BloggingPlatform\blog\src\Components\AAA\Bhuvana.jfif" alt="Bhuvaneshwari" />
                        <h3>Bhuvaneshwari</h3>
                        <p>Tech Enthusiast & Reviewer</p>
                    </div>
                    {/* <!-- <div className="author-card" onclick="viewAuthorPosts('Sahana')">
        <img src="Sahana.jfif" alt="Sahana">
        <h3>Sahana</h3>
        <p>Ideas of Lifestyle Blogger</p>
      </div> --> */}


                    {/* <!-- Add more authors as needed --> */}
                </div>
            </section>
    </>
  )
}

export default Author