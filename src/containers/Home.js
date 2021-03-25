import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
const Home= ({mylist,trends,originals})=>{
    return(
        <div className="App">
            <Header/>
            <Search/>
            {mylist.length>0 &&(
            <Categories title="mylist">
                <Carousel>
                    {
                        mylist.map((item)=>{
                            return(<CarouselItem 
                                key={item.id}
                                {...item} 
                                islist/>)
                        })
                    }
                </Carousel>
            </Categories>
            )
            }
            {trends.length>0 &&(
            <Categories title="Tendencias">
                <Carousel>
                    {
                        trends.map((item)=>{
                            return(<CarouselItem key={item.id} {...item}/>)
                        })
                    }
                </Carousel>
            </Categories>
            )
            }
            
            {originals.length>0 &&(
            <Categories title="Originals">
                <Carousel>
                    {
                        originals.map((item)=>{
                            return(<CarouselItem key={item.id} {...item}/>)
                        })
                    }
                </Carousel>
            </Categories>
            )
            }
        </div>
    )
}
const mapStateToProps=state=>{
    return{ 
        mylist:state.mylist,
        trends:state.trends,
        originals:state.originals,
};
};
export default connect(mapStateToProps,null)(Home);