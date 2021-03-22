import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API='http://localhost:3000/initalState';
const App= ()=>{
    const initalState=useInitialState(API);
    return(
        <div className="App">
            <Header/>
            <Search/>
            {initalState.trends.length>0 &&(
            <Categories title="Tendencias">
                <Carousel>
                    {
                        initalState.trends.map((item)=>{
                            return(<CarouselItem key={item.id} {...item}/>)
                        })
                    }
                </Carousel>
            </Categories>
            )
            }
            
            {initalState.originals.length>0 &&(
            <Categories title="Originals">
                <Carousel>
                    {
                        initalState.originals.map((item)=>{
                            return(<CarouselItem key={item.id} {...item}/>)
                        })
                    }
                </Carousel>
            </Categories>
            )
            }
            <Footer/>
        </div>
    )
}
export default App;