import React, { useEffect, useState } from 'react'
import {Link } from "react-router-dom"
import Axios from "axios"
import { useStateValue } from '../StateAll/Stateprovider'
export const Home = () => {
    const [{ getprofile }, {}] = useStateValue()
    const [allPost, setAllPost]=useState([])
    const [loading,setLoading]=useState(true)
    const [input,setInput]=useState('') //for search
    const [output,setOutput]=useState([]) //for search




  
useEffect(()=>{
    const getpostdata=async()=>{
        
        await Axios({
            method:"get",
            url:"http://localhost:8000/mypost/",
            headers:{
                Authorization:`token ${window.localStorage.getItem("token")}`

            },
           
        }).then(response=>{
            setAllPost(response.data)
            console.log(response.data)
            setLoading(false)
        })

    }
    
    getpostdata()
  
  },[])




// search part/////////////////////////////////////////////////


useEffect(()=>{
 setOutput([])
allPost.filter((val=>{
    if(val.title.toLowerCase().includes(input.toLowerCase())){
       setOutput(output=>[...output,val])
    }
}))
},[input])
     
//end searchpart /////////////////////////////


console.log(input.length,'llllllllllllllllll')



console.log(input,"iiiiiiiiiiiiiiiiiiiiiiiii")



    return (
<>
       
{loading &&

<div class="preloader-inner">
<ul class="preloader-main">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
</div>
}
 

        
<div className="header-area-wrapper index-01">
<div className="header-area index-01 header-slider-init">
    <div className="single-slid-item">
        <div
            className="container custom-header-container bg"
             style={{backgroundImage: `url("assets/img/header/index-01/01.jpg")` }}>
       
            <div className="row h-100">
                <div className="col-lg-12 position-relative h-100">
                    <div className="content">
                        <span className="first-word space-style">travel</span>
                        <h1 className="header-title">Travel makes one modest, you see what a tiny place you occupy in the world.
                        </h1>
                        <div className="btn-wrapper">
                            <a href="#" className="btn-default">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





</div>
</div>







       { output.length === 0 && input.length > 0 &&  (<h1 style={{'color':'red'}}>"Content Not Found. 😢 !!"</h1>)}
<div className="blog-list-area-wrapper index-01">
            <div className="container custom-container-1515">
                <div className="row">
                    <div className="col-lg-8 col-xl-9">

     {input.length > 0 && output && output.map((P)=>(
<>

    <div className="single-blog-list-1-index-1 wow bounceInUp" data-wow-duration="1.8s">
         <div className="content-top">
             <span className="first-word space-style">Blog</span>
             <h2 className="title">
             <span ><img  src={`http://localhost:8000${P.author.image} `}    style={{'height':'60px','width':'60px','border-radius':'200px'}}/></span>
                                       
                                        
                                        
                 <a href="#">{P.title}</a>
             </h2>
             <div className="img-box">
             
                 <img src={P.image}  onError={(event) => event.target.style.display = 'none'}  />  
             </div>
             <div className="content-bottom">
                 <p className="info">{P.content.slice(0,200)}...... 
                 </p>
                 <div className="post-meta">
                     <div className="left-content">
                         <div className="btn-wrapper">
                             <Link to={`detail${P.id}`} className="reading-btn">continue reading</Link>
                         </div>
                     </div>
                     <div className="right-content">
                         <ul className="list">
                             <li className="list-item">
                                 <Link  to={`/writer${P.id}`}>
                                     <i className="far fa-user icon"></i>
                                     <Link to={`/writer${P.id}`} className="text">{P.author.user.username}</Link>
                                 </Link>
                             </li>
                             
                             <li className="list-item">
                                 <a href="#">
                                     <i className="far fa-clock icon"></i>
                                     <span className="text">{P.create}</span>
                                 </a>
                             </li>
                             <li className="list-item">
                                 <a href="#">
                                     <i className="far fa-share-square icon"></i>
                                     <span className="text">share</span>
                                 </a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </div>


         
</>
))}

               




{input.length < 1 && allPost && allPost.map((P)=>(
<>

    <div className="single-blog-list-1-index-1 wow bounceInUp" data-wow-duration="1.8s">
         <div className="content-top">
             <span className="first-word space-style">Blog</span>
             <h2 className="title">
             <span ><img  src={`http://localhost:8000${P.author.image} `}    style={{'height':'60px','width':'60px','border-radius':'200px'}}/></span>
                                       
                                        
                                        
                 <a href="#">{P.title}</a>
             </h2>
             <div className="img-box">
             
                 <img src={P.image}  onError={(event) => event.target.style.display = 'none'}  />  
             </div>
             <div className="content-bottom">
                 <p className="info">{P.content.slice(0,200)}...... 
                 </p>
                 <div className="post-meta">
                     <div className="left-content">
                         <div className="btn-wrapper">
                             <Link to={`detail${P.id}`} className="reading-btn">continue reading</Link>
                         </div>
                     </div>
                     <div className="right-content">
                         <ul className="list">
                             <li className="list-item">
                                 <Link  to={`/writer${P.id}`}>
                                     <i className="far fa-user icon"></i>
                                     <Link to={`/writer${P.id}`} className="text">{P.author.user.username}</Link>
                                 </Link>
                             </li>
                             
                             <li className="list-item">
                                 <a href="#">
                                     <i className="far fa-clock icon"></i>
                                     <span className="text">{P.create}</span>
                                 </a>
                             </li>
                             <li className="list-item">
                                 <a href="#">
                                     <i className="far fa-share-square icon"></i>
                                     <span className="text">share</span>
                                 </a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </div>


         
</>
))}













                        <div className="pagination">
                            <ul className="pagination-list">
                                <li>
                                    <a href="#" className="page-number">
                                        <i className="fas fa-angle-left"></i>
                                    </a>
                                </li>
                                <li>
                                    <span className="page-number current">1</span></li>
                                <li>
                                    <a href="#" className="page-number">2</a>
                                </li>
                                <li>
                                    <a href="#" className="page-number">3</a>
                                </li>
                                <li>
                                    <a href="#" className="page-number">
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>





                    
                    <div className="col-md-6 col-lg-4 col-xl-3 widg">
                        <div className="widget-area-wrapper style-02">
                            <div className="widget widget-search  wow bounceInUp" data-wow-duration="3.5s">
                                <form className="form-inline" onSubmit={(e)=>{e.preventDefault()}}>
                                    <div className="form-group">
                                       
                                        <input type="search"  onChange={e=>setInput(e.target.value)} className="form-control" placeholder="search..."/>
                                      
                                       
                                    </div>
                                    <button type="submit" className="form-btn-1">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>

                            {getprofile && (

                            <div className="widget widget-about-author wow bounceInUp" data-wow-duration="3.7s">
                            <h5 className="widget-title">about author</h5>

                            <div className="img-box">
                                <img src={`http://localhost:8000${getprofile?.userdata?.image}`} alt="image"/>
                                <div className="content">
                                    <h3 className="title">
                                        <a href="#">{getprofile?.userdata?.user?.username}</a>
                                    </h3>
                                    <p className="info">{getprofile?.userdata?.bio}</p>
                                    <ul className="social-link-list">
                                        <li className="list-item">
                                            <a href="#" tabindex="-1">
                                                <i className="fab fa-facebook-f icon"></i>
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#" tabindex="-1">
                                                <i className="fab fa-twitter icon"></i>
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#" tabindex="-1">
                                                <i className="fab fa-instagram icon"></i>
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#" tabindex="-1">
                                                <i className="fas fa-rss icon"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            </div>
                                                    
                                                    
                            ) }
                            








                            <div
                                className="widget widget-upcomming-blog wow bounceInUp"
                                data-wow-duration="3.8s">
                                <div className="img-box">
                                    <img src="assets/img/widget/Upcoming-banner-03.jpg" alt="image"/>
                                    <div className="content">
                                        <span className="catg bar">
                                            <a href="#">travel</a>
                                        </span>
                                        <h4 className="title">
                                            <a href="#">upcomming blog</a>
                                        </h4>
                                        <span className="catg">
                                            <a href="#">june 19, 2021</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget-category wow bounceInUp" data-wow-duration="3.7s">
                                <h5 className="widget-title">Categories</h5>
                                <ul className="list">
                                    <li>
                                        <a href="#">
                                            <span className="name">travel</span>
                                            <span className="number">(3)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="name">food</span>
                                            <span className="number">(5)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="name">fashion</span>
                                            <span className="number">(9)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="name">music</span>
                                            <span className="number">(7)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="name">health</span>
                                            <span className="number">(4)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="name">flower</span>
                                            <span className="number">(8)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-gallery wow bounceInUp" data-wow-duration="3.9s">
                                <h5 className="widget-title">instagram</h5>
                                <ul className="list">
                                    <li>
                                        <a href="#">
                                            <img src="assets/img/widget/gallery/travel/01.png" alt="image"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/img/widget/gallery/travel/02.png" alt="image"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/img/widget/gallery/travel/03.png" alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/img/widget/gallery/travel/04.png" alt="image" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-recent-post wow bounceInUp" data-wow-duration="3.6s">
                                <h5 className="widget-title">Latest Posts</h5>
                                <ul className="post-list">
                                    <li>
                                        <div className="thumb">
                                            <img src="assets/img/widget/recent-post/travel/01.png" alt="image" />
                                        </div>
                                        <div className="content">
                                            <span className="catg">
                                                <a href="#">travel</a>
                                            </span>
                                            <h5 className="post-title">
                                                <a href="#">Are you currently looking at any other providers</a>
                                            </h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img src="assets/img/widget/recent-post/travel/02.png" alt="image" />
                                        </div>
                                        <div className="content">
                                            <span className="catg">
                                                <a href="#">travel</a>
                                            </span>
                                            <h5 className="post-title">
                                                <a href="#">Why is this such important problem for you to fix</a>
                                            </h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img src="assets/img/widget/recent-post/travel/03.png" alt="image" />
                                        </div>
                                        <div className="content">
                                            <span className="catg">
                                                <a href="#">travel</a>
                                            </span>
                                            <h5 className="post-title">
                                                <a href="#">Why does this particular feature stand you right now</a>
                                            </h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-add wow bounceInUp" data-wow-duration="3.5s">
                                <div className="add-banner-y">
                                    <a href="#">
                                        <img src="assets/img/widget/add/03.png" alt="image" />
                                    </a>
                                </div>
                            </div>
                            <div className="widget widget-tag wow bounceInUp" data-wow-duration="3.7s">
                                <h5 className="widget-title">Tags</h5>
                                <div className="tag-wrapper">
                                    <a href="#" className="btn-tag">food</a>
                                    <a href="#" className="btn-tag">travel</a>
                                    <a href="#" className="btn-tag">music</a>
                                    <a href="#" className="btn-tag">health</a>
                                    <a href="#" className="btn-tag">fashion</a>
                                    <a href="#" className="btn-tag">journey</a>
                                    <a href="#" className="btn-tag">nature</a>
                                    <a href="#" className="btn-tag">game</a>
                                    <a href="#" className="btn-tag">flower</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



</>
)
}
